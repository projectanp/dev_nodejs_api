"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DI = void 0;
exports.DI = {
    //#region - middlewares
    AuthMw: 'AuthenticationMiddleware',
    SecurityMW: 'SecurityValidationMiddleware',
    //#endregion
    //#region - User
    IUserProcessor: 'IUserProcessor',
    IUserValidator: 'IUserValidator',
    IUserQueryRepository: 'IUserQueryRepository',
    IUserCommandRepository: 'IUserCommandRepository',
};
