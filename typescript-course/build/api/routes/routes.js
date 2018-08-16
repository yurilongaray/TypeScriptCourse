"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Application será instânciado para utilização das rotas (router do express)
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) {
            res.send('Hello!');
        });
        app.route('/ola/:nome').get(function (req, res) {
            res.send("Ol\u00E1 " + req.params.nome);
        });
    };
    return Routes;
}());
exports.default = Routes;
