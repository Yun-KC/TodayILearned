/*
문제
정수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여덟 가지이다.

push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다.
주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.
 */
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const commands = input.slice(1);

class Deck {
  deck = [];
  push_front(x) {
    this.deck.unshift(x);
  }
  push_back(x) {
    this.deck.push(x);
  }
  pop_front() {
    return this.deck.shift() ?? -1;
  }
  pop_back() {
    return this.deck.pop() ?? -1;
  }
  size() {
    return this.deck.length;
  }
  empty() {
    return this.deck.length === 0 ? 1 : 0;
  }
  front() {
    return this.deck[0] ?? -1;
  }
  back() {
    return this.deck[this.deck.length - 1] ?? -1;
  }
}

const deck = new Deck();
const result = [];

for (let i = 0; i < commands.length; i++) {
  let [command, num] = commands[i].split(" ");

  num = Number(num);
  if (num) {
    deck[command](num);
  } else {
    result.push(deck[command]());
  }
}
console.log(result.join("\n"));
