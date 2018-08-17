import * as HttpStatus from 'http-status';
import { app, request, expect } from './config/helpers';


describe('Testes de Integracao', () => {

    'use strict'

    const config = require('../../server/config/env/config')();

    describe('GET /api/users/all', () => {
        it('Deve retornar um Json com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    done(error);
                });
        });
    });

    describe('GET /api/users/:id', () => {
        it('Deve retornar um json com um unico usuário', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    done(error);
                
                });
        });
    });

    describe('POST /api/users/create', () => {
        it('Deve cadastrar novo usuário', done => {

            const user = {
                nome: 'TesteCreate'
            };

            request(app)
                .post('/api/users/create')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    done(error);
                });
        });
    });

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um usuário', done => {

            const user = {
                nome: 'TesteUpdate'
            };

            request(app)
                .put(`/api/users/${1}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);
                    done(error);
                });

        });
    });

    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar um usuário', done => {
            request(app)
            .delete(`/api/users/${1}/destroy`)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                done(error);
            });
        });
    });

});