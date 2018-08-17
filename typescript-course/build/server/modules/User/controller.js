"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /* Definição dos métodos direcionados pelas rotas */
    UserController.prototype.getAll = function (req, res) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };
    ;
    UserController.prototype.createUser = function (req, res) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };
    ;
    UserController.prototype.getById = function (req, res) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };
    ;
    UserController.prototype.updateUser = function (req, res) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };
    ;
    UserController.prototype.deleteUser = function (req, res) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };
    ;
    return UserController;
}());
exports.default = UserController;
