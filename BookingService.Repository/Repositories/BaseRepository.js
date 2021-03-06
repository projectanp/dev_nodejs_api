"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
var inversify_1 = require("inversify");
var BaseRepository = /** @class */ (function () {
    function BaseRepository() {
        this.formatter = Object;
        this.getInclude = [];
        this.saveInclude = [];
    }
    BaseRepository.prototype.create = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var resultSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityModel.model.create(model, { raw: true })];
                    case 1:
                        resultSet = _a.sent();
                        return [2 /*return*/, this.plainToEntityType(resultSet)];
                }
            });
        });
    };
    BaseRepository.prototype.update = function (where, model) {
        return __awaiter(this, void 0, void 0, function () {
            var include, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        include = this.getInclude;
                        options = {
                            where: where,
                            include: include
                        };
                        return [4 /*yield*/, this.entityModel.model.update(model, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.delete = function (where) {
        return __awaiter(this, void 0, void 0, function () {
            var include, options, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        include = this.getInclude;
                        options = {
                            where: where,
                            include: include
                        };
                        return [4 /*yield*/, this.entityModel.model.destroy(options)];
                    case 1:
                        n = _a.sent();
                        return [2 /*return*/, { n: n }];
                }
            });
        });
    };
    BaseRepository.prototype.get = function (offset, limit, attributes, where, order, include) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 250; }
        if (include === void 0) { include = this.getInclude; }
        return __awaiter(this, void 0, void 0, function () {
            var options, resultSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            include: include,
                            where: where,
                            attributes: attributes,
                            limit: limit,
                            offset: offset,
                            order: order
                        };
                        options.raw = true;
                        return [4 /*yield*/, this.entityModel.model.findAll(options)];
                    case 1:
                        resultSet = _a.sent();
                        return [2 /*return*/, this.plainToEntityTypeArr(resultSet)];
                }
            });
        });
    };
    BaseRepository.prototype.plainToEntityType = function (resultSet) {
        var rawJson = JSON.parse(JSON.stringify(resultSet));
        return rawJson;
    };
    BaseRepository.prototype.plainToEntityTypeArr = function (resultSet) {
        var rawJson = new Array();
        resultSet.forEach(function (obj) {
            rawJson.push(JSON.parse(JSON.stringify(obj)));
        });
        return rawJson;
    };
    BaseRepository = __decorate([
        inversify_1.injectable()
    ], BaseRepository);
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
