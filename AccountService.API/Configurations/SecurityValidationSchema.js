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
    password: joi_1.default.string().required(),
    timezone: joi_1.default.string().required(),
    signup_via: joi_1.default.number().optional(),
    other_login_authtoken: joi_1.default.string().optional()
}));
schemaMap.set("/api/user/signin", joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
}));
schemaMap.set("/api/user/updateprofile", joi_1.default.object().keys({
    auid: joi_1.default.number().required(),
    firstname: joi_1.default.string().min(1).max(150),
    lastname: joi_1.default.string().max(150),
    gender: joi_1.default.number().max(3),
    country: joi_1.default.string().disallow(""),
    language: joi_1.default.string().max(20),
    timezone: joi_1.default.string().max(150),
}));
schemaMap.set("/api/user/updatemobilenumber", joi_1.default.object().keys({
    auid: joi_1.default.number().required(),
    mobile: joi_1.default.number().required(),
    otp: joi_1.default.number().required()
}));
schemaMap.set("/api/user/generateotp", joi_1.default.object().keys({
    auid: joi_1.default.number().required(),
    mobile: joi_1.default.number().required(),
}));
exports.default = schemaMap;
