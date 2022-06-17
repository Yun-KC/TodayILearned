"use strict";
exports.__esModule = true;
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
exports["default"] = PizzaStore;
