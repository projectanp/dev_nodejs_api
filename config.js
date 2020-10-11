"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var envFound = dotenv_1.default.config();
exports.default = {
    port: Number(process.env.PORT) | 8000,
    jwtsecretkey: process.env.JWT_SECRET || "simplepass",
    SQL: {
        db: process.env.SQL_DB,
        username: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        host: process.env.SQL_HOST,
        port: Number(process.env.SQL_PORT),
        dialect: process.env.SQL_DIALECT
    },
    REDIS: {
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT) || 1010,
        password: process.env.REDIS_PASSWORD || "test"
    }
};
