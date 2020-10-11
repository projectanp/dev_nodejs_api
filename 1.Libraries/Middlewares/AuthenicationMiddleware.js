"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.AuthenticationMiddleware = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var config_1 = __importDefault(require("../../config"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Logger_1 = require("../Logger/Logger");
var whiteListedUrls = new Array();
whiteListedUrls.push("/api/user/signup");
whiteListedUrls.push("/api/user/signin");
var AuthenticationMiddleware = /** @class */ (function (_super) {
    __extends(AuthenticationMiddleware, _super);
    function AuthenticationMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticationMiddleware.prototype.handler = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var url, isWhiteListedUrl, token, authObject, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        url = req.url.split("?")[0];
                        isWhiteListedUrl = whiteListedUrls.indexOf(url) != -1;
                        token = req.header("x-auth-token") || null;
                        authObject = null;
                        if (!token) return [3 /*break*/, 2];
                        return [4 /*yield*/, jsonwebtoken_1.default.verify(token, config_1.default.jwtsecretkey)];
                    case 1:
                        authObject = _a.sent();
                        req.user = authObject;
                        _a.label = 2;
                    case 2:
                        if ((!token && !isWhiteListedUrl) || (token && authObject == null)) {
                            throw 400;
                        }
                        next();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        Logger_1.Logger.LogError("Authtoken validation error", err_1);
                        res.status(400).json({ error: "Authtoken failed" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationMiddleware = __decorate([
        inversify_1.injectable()
    ], AuthenticationMiddleware);
    return AuthenticationMiddleware;
}(inversify_express_utils_1.BaseMiddleware));
exports.AuthenticationMiddleware = AuthenticationMiddleware;
