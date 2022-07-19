/*
 push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const commands = input.slice(1);

class Stack {
  arr = [];
  nextIdx = 0;

  push(num) {
    this.arr[this.nextIdx] = num;
    this.nextIdx++;
  }
  pop() {
    if (this.nextIdx === 0) return -1;
    this.nextIdx--;
    return this.arr.pop();
  }
  size() {
    return this.arr.length;
  }
  empty() {
    return this.arr.length ? 0 : 1;
  }
  top() {
    if (this.nextIdx === 0) return -1;
    return this.arr[this.nextIdx - 1];
  }
}

const stack = new Stack();
const result = [];

for (let i = 0; i < commands.length; i++) {
  let [command, num] = commands[i].split(" ");
  num = Number(num);
  if (num) {
    stack[command](num);
  } else {
    result.push(stack[command]());
  }
}
console.log(result.join("\n"));
