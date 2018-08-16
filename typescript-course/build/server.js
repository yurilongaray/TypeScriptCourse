"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
//Integrando todo o servidor
var api_1 = require("./api/api");
//Invocacao imediata
var config = require('./config/env/config')(); //Chama a funcao e executa ao mesmo tempo
var server = http.createServer(api_1.default);
server.listen(config.serverPort, function () {
    console.log('Listening on port ' + config.serverPort);
});
//Capturando eventos:
server.on('listening', function () {
    console.log('Servidor rodando na porta: ' + config.serverPort);
});
server.on('error', function (err) {
    console.log("Error: " + err);
});
