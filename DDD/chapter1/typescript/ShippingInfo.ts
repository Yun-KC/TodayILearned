import Receiver from './Receiver';
import Address from './Address';
export default class ShippingInfo {
  constructor(private receiver: Receiver, private address: Address) {}
  getReceiver(): Receiver {
    return this.receiver;
  }
  getAddress(): Address {
    return this.address;
  }
}
