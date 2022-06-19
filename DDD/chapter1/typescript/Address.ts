export default class Address {
  constructor(private address1: string, private address2: string, private zipcode: string) {}
  getAddress1() {
    return this.address1;
  }
  getAddress2() {
    return this.address2;
  }
  getZipcode() {
    return this.zipcode;
  }
}
