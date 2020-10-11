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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var inversify_1 = require("inversify");
var logger = __importStar(require("winston"));
var date = new Date();
var fileName = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + ".log";
logger.configure({
    level: 'debug',
    format: logger.format.combine(logger.format.colorize(), logger.format.simple()),
    transports: [
        new logger.transports.File({ filename: "logs/" + fileName, level: 'debug' }),
        new logger.transports.Console()
    ]
});
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger_1 = Logger;
    Logger.LogDebug = function (message) {
        Logger_1.console.debug(message);
    };
    Logger.LogError = function (message, error) {
        Logger_1.console.error(message, error);
    };
    Logger.LogInfo = function (message) {
        Logger_1.console.info(message);
    };
    var Logger_1;
    Logger.console = logger;
    Logger = Logger_1 = __decorate([
        inversify_1.injectable()
    ], Logger);
    return Logger;
}());
exports.Logger = Logger;
