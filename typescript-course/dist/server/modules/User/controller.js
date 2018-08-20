"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var service_1 = require("./service");
var handlers_1 = require("../../api/response/handlers");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /* Definição dos métodos direcionados pelas rotas */
    UserController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar todos os users'));
    };
    ;
    UserController.prototype.createUser = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao criar usuario'));
    };
    ;
    UserController.prototype.getById = function (req, res) {
        var userID = parseInt(req.params.id); //Transformando em number pois vem em string
        service_1.default
            .getById(userID)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar um usuario pelo ID'));
    };
    ;
    UserController.prototype.updateUser = function (req, res) {
        var userID = parseInt(req.params.id);
        var props = (req.body);
        service_1.default
            .update(userID, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao atualizar usuario'));
    };
    ;
    UserController.prototype.deleteUser = function (req, res) {
        var userID = parseInt(req.params.id);
        service_1.default
            .delete(userID)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao deletar usuario'));
    };
    ;
    return UserController;
}());
exports.default = new UserController();
