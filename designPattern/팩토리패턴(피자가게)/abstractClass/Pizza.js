"use strict";
exports.__esModule = true;
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.prepare = function () {
        console.log("\uC900\uBE44 \uC911: ".concat(this.name));
        console.log("\uB3C4\uC6B0\uB97C \uB3CC\uB9AC\uB294 \uC911 ...");
        console.log("\uC18C\uC2A4\uB97C \uBFCC\uB9AC\uB294 \uC911 ...");
        console.log("\uD1A0\uD551\uC744 \uC62C\uB9AC\uB294 \uC911: ".concat(this.topping.join(', ')));
    };
    Pizza.prototype.bake = function () {
        console.log('175도에서 25분 간 굽기');
    };
    Pizza.prototype.cut = function () {
        console.log('피자를 자르기');
    };
    Pizza.prototype.box = function () {
        console.log('피자를 박스에 담기');
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    return Pizza;
}());
exports["default"] = Pizza;
