"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.log("API error handler was executed: " + err);
    res.status(500).json({
        errorCode: 'ERR-01',
        message: 'Internal server error'
    });
}
exports.errorHandlerApi = errorHandlerApi;
