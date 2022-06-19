import Product from './Product';
import Money from './Money';

export default class OrderLine {
  product: Product;
  price: Money;
  quantity: number;
  amounts: Money;
  constructor(product: Product, price: Money, quantity: number) {
    this.product = product;
    this.price = new Money(price.getValue());
    this.quantity = quantity;
    this.amounts = this.calculateAmounts();
  }
  private calculateAmounts() {
    return this.price.multiply(this.quantity);
  }
  public getAmounts(): Money {
    return this.amounts;
  }
}
