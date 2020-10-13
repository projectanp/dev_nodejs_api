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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var BaseController = /** @class */ (function (_super) {
    __extends(BaseController, _super);
    function BaseController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseController.prototype.MapToSuccessResponse = function (result) {
        return {
            result: result,
            error: [],
            successStatus: true
        };
    };
    BaseController.prototype.MapToFailureResponse = function (result, errorList) {
        if (errorList === void 0) { errorList = []; }
        return {
            result: result,
            error: errorList,
            successStatus: false
        };
    };
    BaseController.prototype.MapDefaultFailureResponse = function (errorMessage) {
        return {
            result: null,
            error: [{ errorCode: -1, errorMessage: errorMessage }],
            successStatus: false
        };
    };
    BaseController = __decorate([
        inversify_1.injectable()
    ], BaseController);
    return BaseController;
}(inversify_express_utils_1.BaseHttpController));
exports.BaseController = BaseController;
