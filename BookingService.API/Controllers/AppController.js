"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
var express = __importStar(require("express"));
var inversify_express_utils_1 = require("inversify-express-utils");
var __1 = require("../..");
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.GetDoc = function (res) {
        var indent = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        var result = __1.routeInfo || [];
        var string = "<div>";
        result.forEach(function (x) {
            string += "<h2>" + x.controller + "</h2>";
            (x.endpoints || []).forEach(function (y) {
                string += "<p>" + indent + "-" + y.route + "</p>";
                (y.args || []).forEach(function (z) {
                    string += "<p>" + indent + indent + indent + "-" + z + "</p>";
                });
            });
        });
        return string + "</div>";
    };
    __decorate([
        inversify_express_utils_1.httpGet("/"),
        __param(0, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "GetDoc", null);
    AppController = __decorate([
        inversify_express_utils_1.controller("/")
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
