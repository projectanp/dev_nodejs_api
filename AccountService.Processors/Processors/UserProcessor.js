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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProcessor = void 0;
var inversify_1 = require("inversify");
var services_di_1 = require("../../services.di");
var bcrypt_1 = __importDefault(require("bcrypt"));
var config_1 = __importDefault(require("../../config"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UserProcessor = /** @class */ (function () {
    function UserProcessor(userQueryRepository, userCommandRepository, userValidator) {
        this.userQueryRepository = userQueryRepository;
        this.userCommandRepository = userCommandRepository;
        this.userValidator = userValidator;
    }
    UserProcessor.prototype.GetUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var whereCondition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        whereCondition = {};
                        whereCondition.auid = id;
                        return [4 /*yield*/, this.userQueryRepository.GetUser(whereCondition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserProcessor.prototype.UserSignUp = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = user;
                        return [4 /*yield*/, bcrypt_1.default.genSalt(10)];
                    case 1:
                        _a.salt = _c.sent();
                        _b = user;
                        return [4 /*yield*/, bcrypt_1.default.hash(user.password, user.salt)];
                    case 2:
                        _b.password = _c.sent();
                        user.created_time = Date.parse(new Date().toUTCString());
                        user.last_updated_time = Date.parse(new Date().toUTCString());
                        return [4 /*yield*/, this.userCommandRepository.CreateUser(user)];
                    case 3: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    UserProcessor.prototype.UserSignIn = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var whereCondition, userObj, isPasswordMatch, resultObj, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        whereCondition = {};
                        whereCondition.email = user.email;
                        return [4 /*yield*/, this.userQueryRepository.GetUser(whereCondition)];
                    case 1:
                        userObj = (_a.sent()) || null;
                        isPasswordMatch = false;
                        resultObj = {};
                        if (!(userObj != null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, bcrypt_1.default.compare(user.password, userObj.password)];
                    case 2:
                        isPasswordMatch = _a.sent();
                        if (!isPasswordMatch) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.generateToken({ "auid": userObj["auid"].toString() })];
                    case 3:
                        token = _a.sent();
                        resultObj = { userdetails: userObj, authtoken: token };
                        _a.label = 4;
                    case 4:
                        if (userObj == null || !isPasswordMatch) {
                            throw 400;
                        }
                        return [2 /*return*/, resultObj];
                }
            });
        });
    };
    UserProcessor.prototype.UpdateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var whereCondition;
            return __generator(this, function (_a) {
                whereCondition = {};
                whereCondition.auid = user.auid;
                user.last_updated_time = Date.parse(new Date().toUTCString());
                return [2 /*return*/, this.userCommandRepository.UpdateUser(user, whereCondition)];
            });
        });
    };
    UserProcessor.prototype.UpdateMobileNumber = function (user, otp) {
        return __awaiter(this, void 0, void 0, function () {
            var whereCondition, updateUserObj;
            return __generator(this, function (_a) {
                whereCondition = {};
                whereCondition.auid = user.auid;
                updateUserObj = {};
                updateUserObj.mobile = user.mobile;
                updateUserObj.last_updated_time = Date.parse(new Date().toUTCString());
                return [2 /*return*/, this.userCommandRepository.UpdateUser(updateUserObj, whereCondition)];
            });
        });
    };
    UserProcessor.prototype.DeleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var whereCondition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        whereCondition = {};
                        whereCondition.auid = id;
                        return [4 /*yield*/, this.userCommandRepository.DeleteUser(whereCondition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserProcessor.prototype.generateToken = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var exp, authToken;
            return __generator(this, function (_a) {
                if (param != null) {
                    exp = new Date();
                    exp.setDate(exp.getDate() + 7);
                    param.exp = exp.getTime() / 1000;
                    authToken = jsonwebtoken_1.default.sign(param, config_1.default.jwtsecretkey);
                    return [2 /*return*/, authToken];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    UserProcessor = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(services_di_1.DI.IUserQueryRepository)),
        __param(1, inversify_1.inject(services_di_1.DI.IUserCommandRepository)),
        __param(2, inversify_1.inject(services_di_1.DI.IUserValidator)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], UserProcessor);
    return UserProcessor;
}());
exports.UserProcessor = UserProcessor;
