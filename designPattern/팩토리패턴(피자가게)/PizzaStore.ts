import { NYStylePepperoniPizza, ChicagoStylePepperoniPizza } from './PepperoniPizza';
import { NYStyleCheesePizza, ChicagoStyleCheesePizza } from './CheesePizza';

import Pizza from './abstractClass/Pizza';
import PizzaStore from './abstractClass/PizaaStore';

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
