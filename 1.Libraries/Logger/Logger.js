"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.LogDebug = function (message) {
        console.log(message);
    };
    Logger.prototype.LogError = function (message, error) {
        console.log(message, error);
    };
    Logger.prototype.LogInfo = function (message) {
        console.log(message);
    };
    return Logger;
}());
exports.Logger = Logger;
