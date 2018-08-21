"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handlers_1 = require("../../api/responses/handlers");
var service_1 = require("./service");
var AuthorController = /** @class */ (function () {
    function AuthorController() {
    }
    /* Definição dos métodos direcionados pelas rotas */
    AuthorController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar todos os Authors'));
    };
    ;
    AuthorController.prototype.createAuthor = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao criar autor'));
    };
    ;
    AuthorController.prototype.getById = function (req, res) {
        var AuthorID = parseInt(req.params.id); //Transformando em number pois vem em string
        service_1.default
            .getById(AuthorID)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar um autor pelo ID'));
    };
    ;
    AuthorController.prototype.updateAuthor = function (req, res) {
        var AuthorID = parseInt(req.params.id);
        var props = (req.body);
        service_1.default
            .update(AuthorID, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao atualizar autor'));
    };
    ;
    AuthorController.prototype.deleteAuthor = function (req, res) {
        var AuthorID = parseInt(req.params.id);
        service_1.default
            .delete(AuthorID)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao deletar autor'));
    };
    ;
    return AuthorController;
}());
exports.default = new AuthorController();
