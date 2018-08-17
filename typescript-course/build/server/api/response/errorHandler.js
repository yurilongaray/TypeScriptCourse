"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
function onError(res, message, err) {
    console.log("Error: " + err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message);
}
exports.onError = onError;
