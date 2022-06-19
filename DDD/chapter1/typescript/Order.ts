import { OrderState } from './OrderState';
import OrderLine from './OrderLine';
import ShippingInfo from './ShippingInfo';
import Money from './Money';

class Order {
  private orderLines: OrderLine[];
  private totalAounts: Money;
  private shippingInfo: ShippingInfo;
  private state: OrderState;
  constructor(orderLines: OrderLine[], shippingInfo: ShippingInfo, state: OrderState) {
    this.setOrderLines(orderLines);
    this.setShippingInfo(shippingInfo);
  }
  private setShippingInfo(shippingInfo: ShippingInfo) {
    if (shippingInfo === null) {
      throw new Error('배송지 정보를 지정해야 합니다.');
    }
    this.shippingInfo = shippingInfo;
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
      return acc + cur.getAmounts().getValue();
    }, 0);
    this.totalAounts = new Money(sum);
  }

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
