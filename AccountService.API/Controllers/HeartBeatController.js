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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartBeatController = void 0;
var inversify_express_utils_1 = require("inversify-express-utils");
var HeartBeatController = /** @class */ (function () {
    function HeartBeatController() {
    }
    HeartBeatController.prototype.get = function () {
        return "****************************************\n        service is up and reachable!\n        ************************************************\n        ";
    };
    __decorate([
        inversify_express_utils_1.httpGet("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeartBeatController.prototype, "get", null);
    HeartBeatController = __decorate([
        inversify_express_utils_1.controller("/api/heartbeat")
    ], HeartBeatController);
    return HeartBeatController;
}());
exports.HeartBeatController = HeartBeatController;
