"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var passport_jwt_1 = require("passport-jwt");
var service_1 = require("./modules/User/service");
var config = require('./config/env/config')();
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.config = function () {
        var UserService = service_1.default;
        var opts = {
            secretOrKey: config.secret,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()
        };
        //Ativando middleware
        passport.use(new passport_jwt_1.Strategy(opts, function (jwtPayload, done) {
            UserService
                .getById(jwtPayload.id)
                .then(function (user) {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
                .catch(function (error) {
                done(error, null);
            });
        }));
        return {
            initialize: function () { return passport.initialize(); },
            authenticate: function () { return passport.authenticate('jwt', { session: false }); }
        };
    };
    return Auth;
}());
exports.default = new Auth();
