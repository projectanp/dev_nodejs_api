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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
var inversify_1 = require("inversify");
var Sequelize = __importStar(require("sequelize"));
var Persistence_1 = require("../Configurations/Persistence");
var BaseEntity_1 = require("./BaseEntity");
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity(persistence) {
        var _this = _super.call(this) || this;
        _this.persistence = persistence;
        _this.entityName = 'user';
        _this.attributes = {
            auid: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
            firstname: { type: Sequelize.STRING, allowNull: false },
            lastname: { type: Sequelize.STRING, allowNull: false },
            password: { type: Sequelize.STRING, allowNull: false },
            salt: { type: Sequelize.STRING, allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false, unique: true },
            mobile: { type: Sequelize.BIGINT, allowNull: true, unique: false },
            gender: { type: Sequelize.TINYINT, allowNull: true },
            country: { type: Sequelize.SMALLINT, allowNull: true },
            language: { type: Sequelize.STRING, allowNull: false }
        };
        _this.initModel();
        return _this;
    }
    UserEntity = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(Persistence_1.Persistence)),
        __metadata("design:paramtypes", [Persistence_1.Persistence])
    ], UserEntity);
    return UserEntity;
}(BaseEntity_1.BaseEntity));
exports.UserEntity = UserEntity;
