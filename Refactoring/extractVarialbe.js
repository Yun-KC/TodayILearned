/*
표현식이 너무 복잡해서 이해하기 어렵다면. 지역변 수를 활용해 표현식을 쪼개 관리하기 더 쉽게 만들 수 있다. 
그러면 복잡한 로직을 구성하는 단계마다 이름을 붙일 수 있어서 코드의 목적을 훨씬 명확하게 드러낼 수 있다.
변수 추출을 고려한다면 그 이름이 들어갈 문맥도 살펴야한다. 현재 함수 안에서만 의미가 있다면 변수로 추출하고,
함수를 벗어난 넓은 문맥에서까지 의미가 된다면 함수로 추출해야한다.

1. 추출하려는 표현식에 부작용은 없는지 확인한다.
2. 불변 변수를 하나 선언하고 이름을 붙일 표현식의 복제본을 대입한다.
3. 원본 표현식을 새로 만든 변수로 교체한다.
4. 테스트한다.
5. 표현식을 여러 곳에서 사용한다면 각각을 새로 만든 변수로 교체한다. 하나 교체할 때마다 테스트한다.
*/

function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

/*----------변경 후 ---------*/

function price(order) {
  const basePrice = quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}
// 변수 이름에서 코드의 역할이 드러나기 때문에 주석이 필요 없어졌다. 아래는 같은 코드를 클래스 문맥에서 처리하는 방법이다.

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }
  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}
/*---------변경 후--------*/
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }
  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
8;
/* 
추출하려는 이름은 같지만 그 이름이 가격을 계산하는 price() 메서드 범위를 넘어, 주문을 표현하는 Order클래스 전체에 적용된다.
이처럼 클래스 전체에 영향을 줄 때는 변수가 아닌 메서드로 추출한다.
*/
