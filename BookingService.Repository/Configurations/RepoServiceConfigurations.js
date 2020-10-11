"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoServiceConfiguration = void 0;
var Logger_1 = require("../../1.Libraries/Logger/Logger");
var Entities_1 = require("../Entities");
var BaseRepository_1 = require("../Repositories/BaseRepository");
var UserCommandRepository_1 = require("../Repositories/User/UserCommandRepository");
var UserQueryRepository_1 = require("../Repositories/User/UserQueryRepository");
var Persistence_1 = require("./Persistence");
var RedisPersistence_1 = require("./RedisPersistence");
var RepoServiceConfiguration = /** @class */ (function () {
    function RepoServiceConfiguration() {
    }
    RepoServiceConfiguration.establishConnect = function () {
        try {
            var sqlPersistence = new Persistence_1.Persistence();
            sqlPersistence.db.authenticate();
            Logger_1.Logger.LogInfo("Database is Connected !");
        }
        catch (e) {
            throw "500";
        }
    };
    RepoServiceConfiguration.AddRepositories = function (container) {
        container.bind('IUserCommandRepository').to(UserCommandRepository_1.UserCommandRepository).inSingletonScope();
        container.bind('IUserQueryRepository').to(UserQueryRepository_1.UserQueryRepository).inSingletonScope();
        container.bind(BaseRepository_1.BaseRepository).to(BaseRepository_1.BaseRepository);
        container.bind(Persistence_1.Persistence).to(Persistence_1.Persistence);
        container.bind(RedisPersistence_1.RedisPersistence).to(RedisPersistence_1.RedisPersistence);
        container.bind(Entities_1.UserEntity).to(Entities_1.UserEntity);
    };
    return RepoServiceConfiguration;
}());
exports.RepoServiceConfiguration = RepoServiceConfiguration;
