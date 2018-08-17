"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var helpers_1 = require("./config/helpers");
var jwt = require("jwt-simple");
describe('Testes de Integracao', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var model = require('../../server/models');
    //O modelo serve como ponte para interagir com o sequelize
    var id;
    var token;
    var userTest = {
        id: 100,
        name: 'user Test',
        email: 'teste@email.com',
        password: 'teste'
    };
    var userDefault = {
        id: 1,
        name: 'Yuri',
        email: 'yuri@gmail.com',
        password: '1234'
    };
    //Deleta todos os usuários para então efetuar testes, para que resultados de outros testes n afetem
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            //Como é uma promise...
            .then(function () {
            //Feito o destroy (delete) é efetuada a criação do default
            return model.User.create(userDefault);
        })
            .then(function (user) {
            model.User.create(userTest)
                .then(function () {
                token = jwt.encode({ id: user.id }, config.secret);
                done();
            });
        });
    });
    describe('POST /token', function () {
        it('Deve receber um JWT', function (done) {
            var credentials = {
                email: userDefault.email,
                password: userDefault.password
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.OK);
                helpers_1.expect(res.body.token).to.equal("" + token);
                done(error);
            });
        });
        it('Não deve receber um JWT', function (done) {
            var credentials = {
                email: 'email@emailqualquer.com',
                password: 'qualquer'
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.UNAUTHORIZED);
                helpers_1.expect(res.body).to.empty;
                done(error);
            });
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um Array com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefault.name); //Primeiro registro inserido
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve cadastrar novo usuário', function (done) {
            var user = {
                id: 2,
                name: 'Teste Create',
                email: 'create@teste.com',
                password: 'create'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.OK);
                helpers_1.expect(res.body.payload.id).to.eql(user.id);
                helpers_1.expect(res.body.payload.name).to.be.eql(user.name);
                helpers_1.expect(res.body.payload.email).to.be.eql(user.email);
                done(error);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um json com um unico usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + userDefault.id)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(userDefault.id);
                //Verificação de todas as chaves 
                helpers_1.expect(res.body.payload).to.have.all.keys(['id', 'name', 'email', 'password']);
                id = res.body.payload.id; //Para utilização nos próximos testes
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                name: 'TesteUpdate',
                email: 'update@email.com'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + userTest.id + "/update")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.OK);
                helpers_1.expect(res.body.payload.name).to.be.equal(user.name);
                helpers_1.expect(res.body.payload.email).to.be.equal(user.email);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .del("/api/users/" + userTest.id + "/destroy")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HttpStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(userTest.id);
                done(error);
            });
        });
    });
});
