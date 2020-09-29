"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainServiceConfiguration = void 0;
var services_di_1 = require("../../services.di");
var UserProcessor_1 = require("../Processors/UserProcessor");
var UserValidator_1 = require("../Validators/User/UserValidator");
var DomainServiceConfiguration = /** @class */ (function () {
    function DomainServiceConfiguration() {
    }
    DomainServiceConfiguration.AddProcessors = function (container) {
        // business/model validators
        DomainServiceConfiguration.AddValidators(container);
        container.bind(services_di_1.DI.IUserProcessor).to(UserProcessor_1.UserProcessor);
    };
    DomainServiceConfiguration.AddValidators = function (conainer) {
        conainer.bind(services_di_1.DI.IUserValidator).to(UserValidator_1.UserValidator);
    };
    return DomainServiceConfiguration;
}());
exports.DomainServiceConfiguration = DomainServiceConfiguration;
