## 책에 나온 Java 코드를 typescript로 변환.

---

### 주문 도메인의 요구사항

- 최소 한 종류 이상의 상품을 주문해야 한다.
- 한 상품의 한 개 이상 주문할 수 있다.
- 총 주문 금액은 각 상품의 구매 가격 합을 모두 더한 금액이다.
- 각 상품의 구매 가격 합은 상품 가격에 구매 개수를 곱한 값이다.
- 주문할 때 배송지 정보를 반드시 지정해야 한다.
- 배송지 정보는 받는 사람 이름, 전화번호, 주소로 구성된다.
- 출고를 하면 배송지를 변경할 수 없다.
- 출고 전에 주문을 취소할 수 있다.
- 고객이 결제를 완료하기 전에는 상품을 준비하지 않는다.

---

### _요구사항에서 알 수 있는 것_

**Order**은 '출고 상태 변경하기', '배송지 정보 변경하기', '주문 취소하기', '결제 완료하기' 기능을 제공합니다.

```ts
class Order {
  changeShipped(){...}
  changeShippingInfo(shippingInfo : ShippingInfo){...}
  cancel(){...}
  completePayment(){...}
}
```

---

> **_요구사항_**
>
> - 한 상품의 한 개 이상 주문할 수 있다.
> - 각 상품의 구매 가격 합은 상품 가격에 구매 개수를 곱한 값이다.

주문 항목을 표현하는 **OrderLine**은 적어도 주문할 상품, 상품의 가격, 구매 개수를 포함해야 합니다.

```ts
class OrderLine {
  product: Product;
  price: number;
  quantity: number;
  amounts: number;
  constructor(product: Product, price: number, quantity: number) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.amounts = this.calculateAmounts();
  }
  private calculateAmounts() {
    return this.price * this.quantity;
  }
  public getAmounts(){...}
}
```

---

> **_요구사항_**
>
> - 최소 한 종류 이상의 상품을 주문해야 한다.
> - 총 주문 금액은 각 상품의 구매 가격 합을 모두 더한 금액이다.

Order는 OrderLine을 최소 한 개 이상 포함하며, 총 주문 금액은 OrderLine을 통해서 구할 수 있습니다.

```ts
class Order {
  private orderLines: OrderLine[];
  private totalAounts: Money;

  constructor(orderLines: OrderLine[]) {
    this.setOrderLines(orderLines);
  }
  private setOrderLines(orderLines: OrderLine[]) {
    this.verifyAtLeastOneOrMoreOrderLines(orderLines);
    this.orderLines = orderLines;
    this.calculateTotalAmounts();
  }
  private verifyAtLeastOneOrMoreOrderLines(orderLines: OrderLine[]) {
    if (orderLines === null || orderLines.length === 0) {
      throw new Error('주문은 최소 한 개 이상의 상품을 포함해야 합니다.');
    }
  }
  private calculateTotalAmounts() {
    const sum = this.orderLines.reduce((acc, cur) => {
      return acc + cur.getAmounts();
    }, 0);
    this.totalAounts = new Money(sum);
  }
}
class Money {
  constructor(private money: number) {}
}
```

> 타입스크립트 옵션에는 **"strictPropertyInitialization"**라는 옵션이 있습니다.  
> 이 옵션은 클래스 프로퍼티가 선언되었지만 생성자(constructor)에서 해당 프로퍼티가 초기화되지 않은 경우 에러가 발생합니다.  
> 위 Order 클래스의 this.orderLines, this.totalAmounts 프로퍼티는 생성자(constructor)에서 초기화 되지 않았기 때문에 **"strictPropertyInitialization"** 가 **true** 일 경우 에러가 발생합니다.

---

> **_요구사항_**
>
> - 배송지 정보는 받는 사람 이름, 전화번호, 주소로 구성된다.

배송지 정보는 이름, 전화번호, 주소 데이터를 가지고 있습니다.

```ts
class ShippingInfo {
  private receiverName: string;
  private receiverPhoneNumber: string;
  private shipppingAddress1: string;
  private shipppingAddress2: string;
  private shippingZipcode: string; // 우편 번호
}
```

---

> **_요구사항_**
>
> - 주문할 때 배송지 정보를 반드시 지정해야 한다.

Order를 생성할 때 OrderLine의 목록뿐만 아니라 ShippingInfo도 함께 전달해야 합니다.

```ts
class Order {
  private orderLines: OrderLine[];
  private shippingInfo: ShippingInfo;
  /* ... */
  constructor(orderLines: OrderLine[], shippingInfo: ShippingInfo) {
    this.setOrderLines(orderLines);
    this.setShippingInfo(shippingInfo);
  }
  /* ... */
  private setShippingInfo(shippingInfo: ShippingInfo) {
    if (shippingInfo === null) {
      throw new Error('배송지 정보를 지정해야 합니다.');
    }
    this.shippingInfo = shippingInfo;
  }
}
```

---

> **_요구사항_**
>
> - 출고를 하면 배송지 정보를 변경할 수 없다.
> - 출고 전에 주문을 취소할 수 있다.
> - 고객이 결제를 완료하기 전에는 상품을 준비하지 않는다.
>
> 이 요구사항은 주문의 상태에 따라 "배송지 변경", "주문 취소", "상품 준비" 기능에 제약을 겁니다.

Order에 주문 상태 정보를 추가합니다.

```ts
const OrderState = {
  PAYMENT_WAITING: 'PAYMENT_WAITING',
  PREPARING: 'PREPARING',
  SHIPPED: 'SHIPPED',
  DELIVERING: 'DELIVERING',
  DELIVERY_COMPLETED: 'DELIVERY_COMPLETED',
  CANCELED: 'CANCELED',
} as const;

class Order {
  private state: OrderState;
  /* ... */
  changeShippingInfo(newShippingInfo: ShippingInfo) {
    this.verifyNotYetShipped();
    this.setShippingInfo(newShippingInfo);
  }
  cancel() {
    this.verifyNotYetShipped();
    this.state = OrderState.CANCELED;
  }
  verifyNotYetShipped() {
    if (this.state !== OrderState.PAYMENT_WAITING && this.state !== OrderState.PREPARING) {
      throw new Error('이미 배송 중입니다.');
    }
  }
}
```

