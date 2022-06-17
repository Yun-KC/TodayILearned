import {
  NYStyleCheesePizza,
  ChicagoStyleCheesePizza,
  NYStylePepperoniPizza,
  ChicagoStylePepperoniPizza,
} from './Pizza';

import Pizza from './abstract/Pizza.absract';
import PizzaStore from './abstract/PizaaStore.absract';

export class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza();
      case 'pepperoni':
        return new NYStylePepperoniPizza();
    }
  }
}

export class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new ChicagoStyleCheesePizza();
      case 'pepperoni':
        return new ChicagoStylePepperoniPizza();
    }
  }
}
