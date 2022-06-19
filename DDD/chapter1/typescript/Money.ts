export default class Money {
  constructor(public value: number) {}
  public getValue() {
    return this.value;
  }
  public add(money: Money): Money {
    return new Money(this.getValue() + money.getValue());
  }
  public multiply(multiplier: number) {
    return new Money(this.getValue() * multiplier);
  }
}
