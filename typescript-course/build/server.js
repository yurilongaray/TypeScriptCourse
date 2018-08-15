"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer();
var port = 3000;
server.listen(port, function () {
    console.log('Listening on port' + port);
});
