"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var schemaMap = new Map();
schemaMap.set("/api/user/signup", joi_1.default.object().keys({
    firstname: joi_1.default.string().required(),
    lastname: joi_1.default.string(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required().required()
}));
schemaMap.set("/api/user/signin", joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
}));
exports.default = schemaMap;
