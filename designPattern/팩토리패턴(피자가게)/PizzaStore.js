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
exports.ChicagoStylePizzaStore = exports.NYStylePizzaStore = void 0;
var PepperoniPizza_1 = require("./PepperoniPizza");
var CheesePizza_1 = require("./CheesePizza");
var PizaaStore_1 = require("./abstractClass/PizaaStore");
var NYStylePizzaStore = /** @class */ (function (_super) {
    __extends(NYStylePizzaStore, _super);
    function NYStylePizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStylePizzaStore.prototype.createPizza = function (type) {
        switch (type) {
            case 'cheese':
                return new CheesePizza_1.NYStyleCheesePizza();
            case 'pepperoni':
                return new PepperoniPizza_1.NYStylePepperoniPizza();
        }
    };
    return NYStylePizzaStore;
}(PizaaStore_1["default"]));
exports.NYStylePizzaStore = NYStylePizzaStore;
var ChicagoStylePizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoStylePizzaStore, _super);
    function ChicagoStylePizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoStylePizzaStore.prototype.createPizza = function (type) {
        switch (type) {
            case 'cheese':
                return new CheesePizza_1.ChicagoStyleCheesePizza();
            case 'pepperoni':
                return new PepperoniPizza_1.ChicagoStylePepperoniPizza();
        }
    };
    return ChicagoStylePizzaStore;
}(PizaaStore_1["default"]));
exports.ChicagoStylePizzaStore = ChicagoStylePizzaStore;
