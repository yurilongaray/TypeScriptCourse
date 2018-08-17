"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
function dbErrorHandler(res, err) {
    console.log("Error: " + err);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-01',
        message: 'Erro ao criar no bd'
    });
}
exports.dbErrorHandler = dbErrorHandler;
