"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
function onSuccess(res, data) {
    res.status(HttpStatus.OK).json({
        payload: data
    });
}
exports.onSuccess = onSuccess;
