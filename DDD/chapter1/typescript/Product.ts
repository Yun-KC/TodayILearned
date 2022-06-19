export default class Product {
  constructor(public name: string, public description: string) {}
  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
}
