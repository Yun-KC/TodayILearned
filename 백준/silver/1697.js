const fs = require('fs');
const [N, K] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((e) => Number(e));

function test(map, point, move) {
  if (map[point]) return false;
  map[point] = move;
  return true;
}

const map = Array(K + 1).fill(null);
map[N] = 0;

let Q = [N];
let move = 1;
label: while (Q.length) {
  if (N > K) break;


  const tempQ = [];
  while (Q.length) {
    const point = Q.shift();
    if (test(map, point + 1, move)) tempQ.push(point + 1);
    if (test(map, point - 1, move)) tempQ.push(point - 1);
    if (test(map, point * 2, move)) tempQ.push(point * 2);
    if (map[K]) break label;
  }
  move++;
  Q = tempQ;
}
console.log(N > K ? N - K : map[K]);
