"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeInfo = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var body_parser_1 = __importDefault(require("body-parser"));
var inversify_express_utils_1 = require("inversify-express-utils");
var DomainServiceConfigurations_1 = require("./AccountService.Processors/Configurations/DomainServiceConfigurations");
var RepoServiceConfigurations_1 = require("./AccountService.Repository/Configurations/RepoServiceConfigurations");
var ApiConfigurations_1 = require("./AccountService.API/Configurations/ApiConfigurations");
var config_1 = __importDefault(require("./config"));
require("./AccountService.API/Controllers");
//#region Controllers - Import all controllers here
//#endregion
//#region - Dependency injection container
// set up container
var container = new inversify_1.Container();
ApiConfigurations_1.ApiConfigurations.AddMiddlewares(container);
DomainServiceConfigurations_1.DomainServiceConfiguration.AddProcessors(container);
RepoServiceConfigurations_1.RepoServiceConfiguration.AddRepositories(container);
//#endregion  
// create server
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    // add body parser
    app.use(body_parser_1.default.urlencoded({
        extended: true
    }));
    app.use(body_parser_1.default.json());
});
server.setErrorConfig(function (app) {
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('unhandled internal server error!');
    });
});
var app = server.build();
exports.routeInfo = inversify_express_utils_1.getRouteInfo(container);
app.listen(config_1.default.port);
