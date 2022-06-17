import Pizza from './Pizza.absract';

export default abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
  abstract createPizza(type: string): Pizza;
}
