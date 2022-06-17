"use strict";
exports.__esModule = true;
var PizzaStore_1 = require("./PizzaStore");
var PizzaTestDrive = /** @class */ (function () {
    function PizzaTestDrive() {
    }
    PizzaTestDrive.prototype.main = function () {
        var nyStore = new PizzaStore_1.NYStylePizzaStore();
        var chicagoStore = new PizzaStore_1.ChicagoStylePizzaStore();
        var pizza = nyStore.orderPizza('cheese');
        console.log(pizza);
    };
    return PizzaTestDrive;
}());
new PizzaTestDrive().main();
