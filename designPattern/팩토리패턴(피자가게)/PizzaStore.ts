import SimplePizzaFactory from './SimplePizzaFactory';
import Pizza from './interface/Pizza';

class PizzaStore {
  constructor(public factory: SimplePizzaFactory) {}
  orderPizza(type: string) {
    let pizza: Pizza;
    pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
