"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes Unitarios do Controller', function () {
    //Detalhes de cada teste
    describe('Metodo Create', function () {
        it('Deve criar novo usuário', function () {
            var novoUsuario = {
                id: 1,
                name: 'Novo User',
                email: 'novo@email.com',
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(
                //As chaves vem nesta ordem do banco, se alterar a ordem abaixo apresentará erro
                ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar um usuário', function () {
            var usuarioUpdate = {
                name: 'Update User',
                email: 'update@email.com',
            };
            var user = new service_1.default();
            return user.update(1, usuarioUpdate)
                .then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1); //Pois não é retornado nada (Assin como no Delete)
            });
        });
    });
    describe('Método Get', function () {
        it('Deve buscar todos os usuários', function () {
            var user = new service_1.default();
            return user.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getById', function () {
        it('Deve retornar um usuário conforme seu Id', function () {
            var user = new service_1.default();
            return user.getById(1)
                .then(function (data) {
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getByEmail', function () {
        it('Deve retornar um usuário de acordo com seu email', function () {
            var user = new service_1.default();
            return user.getByEmail('novo@email.com')
                .then(function (data) {
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um usuário', function () {
            var user = new service_1.default();
            return user.delete(1)
                .then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
