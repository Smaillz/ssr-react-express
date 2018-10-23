"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sample = /** @class */ (function () {
    function Sample(name) {
        this._name = name;
    }
    Object.defineProperty(Sample.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Sample.prototype.sayHello = function () {
        return "Hello my friend " + this._name;
    };
    Sample.prototype.sayFuck = function () {
        return "Fuck you " + this._name;
    };
    Sample.prototype.dada = function () {
        return "Fuck you dada";
    };
    return Sample;
}());
exports.Sample = Sample;
exports.default = Sample;
//# sourceMappingURL=index.js.map