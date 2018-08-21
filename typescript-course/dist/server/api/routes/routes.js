"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Application será instânciado para utilização das rotas (router do express)
//Import dos metodos das rotas
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var routes_2 = require("../../modules/author/routes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.initRoutes = function (app, auth) {
        //.all(auth.authenticate()) Middleware em ação
        app.route('/api/users/all').all(auth.config().authenticate()).get(routes_1.default.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(routes_1.default.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(routes_1.default.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(routes_1.default.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(routes_1.default.destroy);
        app.route('/token').post(auth_1.default.auth);
        app.route('/api/author/all').get(routes_2.default.index);
        app.route('/api/author/create').post(routes_2.default.create);
        app.route('/api/author/:id').get(routes_2.default.findOne);
        app.route('/api/author/:id/update').put(routes_2.default.update);
        app.route('/api/author/:id/destroy').delete(routes_2.default.destroy);
    };
    return Routes;
}());
exports.default = new Routes();
