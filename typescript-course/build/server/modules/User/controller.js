"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var service_1 = require("./service");
var errorHandler_1 = require("../../api/response/errorHandler");
var successHandler_1 = require("../../api/response/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var UserController = /** @class */ (function () {
    function UserController() {
        this.UserService = new service_1.default;
    }
    /* Definição dos métodos direcionados pelas rotas */
    UserController.prototype.getAll = function (req, res) {
        this.UserService
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar todos os users'));
    };
    ;
    UserController.prototype.createUser = function (req, res) {
        this.UserService
            .create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao criar usuario'));
    };
    ;
    UserController.prototype.getById = function (req, res) {
        var userID = parseInt(req.params.id); //Transformando em number pois vem em string
        this.UserService
            .getById(userID)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar um usuario pelo ID'));
    };
    ;
    UserController.prototype.updateUser = function (req, res) {
        var userID = parseInt(req.params.id);
        var props = (req.body);
        this.UserService
            .update(userID, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao atualizar usuario'));
    };
    ;
    UserController.prototype.deleteUser = function (req, res) {
        var userID = parseInt(req.params.id);
        this.UserService
            .delete(userID)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao deletar usuario'));
    };
    ;
    return UserController;
}());
exports.default = UserController;
