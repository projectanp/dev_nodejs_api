"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var schema = {
    usersignup: celebrate_1.Joi.object().keys({
        firstname: celebrate_1.Joi.string().required(),
        lastname: celebrate_1.Joi.string(),
        email: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().required()
    }),
    usersignin: celebrate_1.Joi.object().keys({
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required()
    })
};
exports.default = schema;
