import Pizza from './abstractClass/Pizza';
export class NYStyleCheesePizza extends Pizza {
  name = '뉴욕 스타일 소스와 치즈 피자';
  dough = '씬 크러스트 도우';
  sauce = '마리나라 소스';
  topping = ['잘게 썬 레지아노 치즈'];
}
export class ChicagoStyleCheesePizza extends Pizza {
  name = '시카고 스타일 딥 디쉬 치즈 피자';
  dough = '아주 두꺼운 크러스트 도우';
  sauce = '플럼토마토 소스';
  topping = ['잘게 조각낸 모짜렐라 치즈'];
  cut() {
    console.log('네모난 모양으로 피자 자르기')
  }
}
