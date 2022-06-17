"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ChicagoStylePepperoniPizza = exports.NYStylePepperoniPizza = void 0;
var Pizza_1 = require("./abstractClass/Pizza");
var NYStylePepperoniPizza = /** @class */ (function (_super) {
    __extends(NYStylePepperoniPizza, _super);
    function NYStylePepperoniPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '뉴욕 스타일 소스와 페퍼로니 피자';
        _this.dough = '씬 크러스트 도우';
        _this.sauce = '마리나라 소스';
        _this.topping = ['잘게 썬 레지아노 치즈'];
        return _this;
    }
    return NYStylePepperoniPizza;
}(Pizza_1["default"]));
exports.NYStylePepperoniPizza = NYStylePepperoniPizza;
var ChicagoStylePepperoniPizza = /** @class */ (function (_super) {
    __extends(ChicagoStylePepperoniPizza, _super);
    function ChicagoStylePepperoniPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '시카고 스타일 딥 디쉬 페퍼로니 피자';
        _this.dough = '아주 두꺼운 크러스트 도우';
        _this.sauce = '플럼토마토 소스';
        _this.topping = ['잘게 조각낸 모짜렐라 치즈'];
        return _this;
    }
    ChicagoStylePepperoniPizza.prototype.cut = function () {
        console.log('네모난 모양으로 피자 자르기');
    };
    return ChicagoStylePepperoniPizza;
}(Pizza_1["default"]));
exports.ChicagoStylePepperoniPizza = ChicagoStylePepperoniPizza;
