export default class Receiver {
  constructor(private name: string, private phoneNumber: string) {}
  getName() {
    return this.name;
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
}

// TODO: 벨류 타입이기에 두 객체를 비교할 때는 모든 속성이 같은지 비교하는 메서드 추가해야함.
