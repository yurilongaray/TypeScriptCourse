"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var errorHandlerApi_1 = require("./errorHandlerApi");
//Classe responsável por chamar o express, middlewares e rotas
var Api = /** @class */ (function () {
    function Api() {
        this.express = express();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        //Morgan gera um log para toda requisição efetuada
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi_1.errorHandlerApi);
        this.router(this.express);
    };
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
//Exportando uma instancia da classe com a propriedade express
exports.default = new Api().express;
