"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigurations = void 0;
var services_di_1 = require("../../services.di");
var AuthenicationMiddleware_1 = require("../../1.Libraries/Middlewares/AuthenicationMiddleware");
var SecurityValidationMiddleware_1 = require("../../1.Libraries/Middlewares/SecurityValidationMiddleware");
var ApiConfigurations = /** @class */ (function () {
    function ApiConfigurations() {
    }
    ApiConfigurations.AddMiddlewares = function (container) {
        container.bind(services_di_1.DI.AuthMw).to(AuthenicationMiddleware_1.AuthenticationMiddleware);
        container.bind(services_di_1.DI.SecurityMW).to(SecurityValidationMiddleware_1.SecurityValidationMiddleware);
    };
    return ApiConfigurations;
}());
exports.ApiConfigurations = ApiConfigurations;
