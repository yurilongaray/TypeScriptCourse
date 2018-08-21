"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handlers_1 = require("../../api/responses/handlers");
var service_1 = require("./service");
var PostController = /** @class */ (function () {
    function PostController() {
    }
    /* Definição dos métodos direcionados pelas rotas */
    PostController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar todos os Posts'));
    };
    ;
    PostController.prototype.createPost = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao criar post'));
    };
    ;
    PostController.prototype.getById = function (req, res) {
        var PostID = parseInt(req.params.id); //Transformando em number pois vem em string
        service_1.default
            .getById(PostID)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar um post pelo ID'));
    };
    ;
    PostController.prototype.updatePost = function (req, res) {
        var PostID = parseInt(req.params.id);
        var props = (req.body);
        service_1.default
            .update(PostID, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao atualizar post'));
    };
    ;
    PostController.prototype.deletePost = function (req, res) {
        var PostID = parseInt(req.params.id);
        service_1.default
            .delete(PostID)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao deletar o post'));
    };
    ;
    return PostController;
}());
exports.default = new PostController();
