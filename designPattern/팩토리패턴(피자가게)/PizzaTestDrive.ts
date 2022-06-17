import PizzaStore from './abstract/PizaaStore.absract';
import { NYStylePizzaStore, ChicagoStylePizzaStore } from './PizzaStore';
class PizzaTestDrive {
  main() {
    const nyStore: PizzaStore = new NYStylePizzaStore();
    const chicagoStore: PizzaStore = new ChicagoStylePizzaStore();
    const pizza = nyStore.orderPizza('cheese');
    console.log(pizza);
  }
}

new PizzaTestDrive().main();
