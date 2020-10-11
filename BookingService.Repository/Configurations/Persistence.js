"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persistence = void 0;
var inversify_1 = require("inversify");
var sequelize = require('sequelize');
var config_1 = __importDefault(require("../../config"));
var Persistence = /** @class */ (function () {
    function Persistence() {
        this.db = new sequelize(config_1.default.SQL.db, config_1.default.SQL.username, config_1.default.SQL.password, {
            port: config_1.default.SQL.port,
            host: config_1.default.SQL.host,
            dialect: 'mysql',
            define: { charset: 'utf8', collate: 'utf8_general_ci' }
        });
    }
    Persistence = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Persistence);
    return Persistence;
}());
exports.Persistence = Persistence;
