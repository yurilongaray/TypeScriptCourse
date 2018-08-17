import * as HttpStatus from 'http-status';
import { app, request, expect } from './config/helpers';
import * as jwt from 'jwt-simple';

describe('Testes de Integracao', () => {

    'use strict';

    const config = require('../../server/config/env/config')();
    const model = require('../../server/models');

    //O modelo serve como ponte para interagir com o sequelize

    let id;
    let token;

    const userTest = {
        id: 100,
        name: 'user Test',
        email: 'teste@email.com',
        password: 'teste'
    };

    const userDefault = {
        id: 1,
        name: 'Yuri',
        email: 'yuri@gmail.com',
        password: '1234'
    };

    //Deleta todos os usuários para então efetuar testes, para que resultados de outros testes n afetem
    beforeEach((done) => { //Antes de cada caso de teste:
        model.User.destroy({
            where: {}
        })
        //Como é uma promise...
        .then(() => {
            //Feito o destroy (delete) é efetuada a criação do default
            return model.User.create(userDefault);
        })
        .then(user => {
            model.User.create(userTest)
                .then(() => {
                    token = jwt.encode({ id: user.id}, config.secret)
                    done();
                })
        })
    });

    describe('POST /token', () => {
        it('Deve receber um JWT' , (done) => {

            const credentials = {
                email: userDefault.email,
                password: userDefault.password
            };

            request(app)
                .post('/token')
                .send(credentials)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    expect(res.body.token).to.equal(`${token}`);
                    done(error);
                })

        });

        it('Não deve receber um JWT' , (done) => {

            const credentials = {
                email: 'email@emailqualquer.com',
                password: 'qualquer'
            };

            request(app)
                .post('/token')
                .send(credentials)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.UNAUTHORIZED);
                    expect(res.body).to.empty;
                    done(error);
                })

        })
    })

    describe('GET /api/users/all', () => {
        it('Deve retornar um Array com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    expect(res.body.payload).to.be.an('array');
                    expect(res.body.payload[0].name).to.be.equal(userDefault.name); //Primeiro registro inserido
                    expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                    done(error);
                });
        });
    });

    describe('POST /api/users/create', () => {
        it('Deve cadastrar novo usuário', done => {

            const user = {
                id: 2,
                name: 'Teste Create',
                email: 'create@teste.com',
                password: 'create'

            };

            request(app)
                .post('/api/users/create')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    expect(res.body.payload.id).to.eql(user.id);
                    expect(res.body.payload.name).to.be.eql(user.name);
                    expect(res.body.payload.email).to.be.eql(user.email);
                    done(error);
                });
        });
    });

    describe('GET /api/users/:id', () => {
        it('Deve retornar um json com um unico usuário', done => {
            request(app)
                .get(`/api/users/${userDefault.id}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    expect(res.body.payload.id).to.equal(userDefault.id);
                    //Verificação de todas as chaves 
                    expect(res.body.payload).to.have.all.keys(
                        ['id', 'name', 'email', 'password']
                    );
                    id = res.body.payload.id; //Para utilização nos próximos testes
                    done(error);
                
                });
        });
    });

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um usuário', done => {

            const user = {
                name: 'TesteUpdate',
                email: 'update@email.com'
            };

            request(app)
                .put(`/api/users/${userTest.id}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    expect(res.body.payload.name).to.be.equal(user.name);
                    expect(res.body.payload.email).to.be.equal(user.email);
                    done(error);
                });

        });
    });

    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar um usuário', done => {
            request(app)
            .del(`/api/users/${userTest.id}/destroy`)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                expect(res.body.payload.id).to.equal(userTest.id);
                done(error);
            });
        });
    });

});