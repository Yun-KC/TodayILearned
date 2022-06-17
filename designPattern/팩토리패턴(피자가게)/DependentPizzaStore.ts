import {
  NYStyleCheesePizza,
  NYStylePepperoniPizza,
  ChicagoStyleCheesePizza,
  ChicagoStylePepperoniPizza,
} from './Pizza';
import Pizza from './abstract/Pizza.absract';

class DependentPizaaStore {
  createPizza(style: string, type: string) {
    let pizza: Pizza = null;
    if (style === 'NY') {
      if (type === 'cheese') {
        pizza = new NYStyleCheesePizza();
      } else if (type === 'pepperoni') {
        pizza = new NYStylePepperoniPizza();
      }
    } else if (style === 'Chicago') {
      if (type === 'cheese') {
        pizza = new ChicagoStyleCheesePizza();
      } else if (type === 'pepperoni') {
        pizza = new ChicagoStylePepperoniPizza();
      }
    } else {
      console.log('알 수 없는 피자');
      return null;
    }
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

/*
모든 피자 객체를 직접 생성합니다.
이 DependentPizaaStore는 모든 피자 객체에 직접 의존합니다.
만약 Pizza의 구현이 변경된다면  DependentPizaaStore까지 고쳐야할 수도 있습니다.

고수준 구성 요소가 저수준 구성요소에 의존해선 안됩니다.
*/
