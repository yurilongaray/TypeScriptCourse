"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
var model = require('../../server/models');
describe('Testes Unitarios do Controller', function () {
    //Detalhes de cada teste
    var defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultuser@email.com',
        password: '1234'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            model.User.create(defaultUser)
                .then(function () {
                console.log('Default user created');
                done();
            });
        });
    });
    describe('Metodo Create', function () {
        it('Deve criar novo usuário', function () {
            var novoUsuario = {
                id: 2,
                name: 'Novo User',
                email: 'novo@email.com',
                password: '1234'
            };
            return service_1.default.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(
                //As chaves vem nesta ordem do banco, se alterar a ordem abaixo apresentará erro
                ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('Método Update', function () {
        service_1.default;
        it('Deve atualizar um usuário', function () {
            var usuarioUpdate = {
                name: 'Update User',
                email: 'update@email.com',
            };
            return service_1.default.update(defaultUser.id, usuarioUpdate)
                .then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1); //Pois não é retornado nada (Assin como no Delete)
            });
        });
    });
    describe('Método Get', function () {
        it('Deve buscar todos os usuários', function () {
            return service_1.default.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getById', function () {
        it('Deve retornar um usuário conforme seu Id', function () {
            return service_1.default.getById(defaultUser.id)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getByEmail', function () {
        it('Deve retornar um usuário de acordo com seu email', function () {
            return service_1.default.getByEmail(defaultUser.email)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um usuário', function () {
            return service_1.default.delete(defaultUser.id)
                .then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
