import Pizza from './interface/Pizza';
export default class CheesePizza implements Pizza {
  name = 'cheesePizza';
  prepare(): void {
    console.log('피자를 준비합니다.');
  }
  bake(): void {
    console.log('피자를 굽습니다.');
  }
  cut(): void {
    console.log('피자를 자릅니다.');
  }
  box(): void {
    console.log('피자를 포장합니다.');
  }
}
