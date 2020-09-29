"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = __importDefault(require("./routes/User"));
exports.default = (function () {
    var app = express_1.Router();
    User_1.default(app);
    return app;
});
