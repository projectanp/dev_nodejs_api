"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoServiceConfiguration = void 0;
var UserCommandRepository_1 = require("../Repositories/User/UserCommandRepository");
var UserQueryRepository_1 = require("../Repositories/User/UserQueryRepository");
var RepoServiceConfiguration = /** @class */ (function () {
    function RepoServiceConfiguration() {
    }
    RepoServiceConfiguration.AddRepositories = function (conainer) {
        conainer.bind('IUserCommandRepository').to(UserCommandRepository_1.UserCommandRepository).inSingletonScope();
        conainer.bind('IUserQueryRepository').to(UserQueryRepository_1.UserQueryRepository).inSingletonScope();
    };
    return RepoServiceConfiguration;
}());
exports.RepoServiceConfiguration = RepoServiceConfiguration;
