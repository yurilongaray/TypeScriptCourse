"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
//Integrando todo o servidor
var api_1 = require("./api/api");
var models = require('./models'); //Retorna o index
var config = require('./config/env/config')(); //Chama a funcao e executa ao mesmo tempo (imediata)
var server = http.createServer(api_1.default);
//Antes do server ser executado, será executado o index  
models.sequelize.sync().then(function () {
    server.listen(config.serverPort);
    //Capturando eventos:
    server.on('listening', function () {
        console.log('Servidor port: ' + config.serverPort);
    });
    server.on('error', function (err) {
        console.log("Error: " + err);
    });
});
