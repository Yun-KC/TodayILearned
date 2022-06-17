export default abstract class Pizza {
  abstract name: string;
  abstract dough: string;
  abstract sauce: string;
  abstract topping: string[];
  prepare(): void {
    console.log(`준비 중: ${this.name}`);
    console.log(`도우를 돌리는 중 ...`);
    console.log(`소스를 뿌리는 중 ...`);
    console.log(`토핑을 올리는 중: ${this.topping.join(', ')}`);
  }
  bake(): void {
    console.log('175도에서 25분 간 굽기');
  }
  cut(): void {
    console.log('피자를 자르기');
  }
  box() {
    console.log('피자를 박스에 담기');
  }
  getName() {
    return this.name;
  }
}
