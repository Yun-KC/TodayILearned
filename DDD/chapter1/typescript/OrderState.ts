export const enum OrderState {
  PAYMENT_WAITING = 'PAYMENT_WAITING',
  PREPARING = 'PREPARING',
  SHIPPED = 'SHIPPED',
  DELIVERING = 'DELIVERING',
  DELIVERY_COMPLETED = 'DELIVERY_COMPLETED',
  CANCELED = 'CANCELED',
}

// TODO: typescript enum과 const enum 차이 공부.
