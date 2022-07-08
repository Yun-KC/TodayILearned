const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
let [N, row, col] = input.map((e) => +e);

let result = 0;
while (N > 0) {
  const { count, r, c } = isQuadrant(N, row, col);
  result += count;
  row = r;
  col = c;
  N--;
}
console.log(result);

function isQuadrant(N, r, c) {
  const standard = 2 ** (N - 1);
  if (r >= standard) {
    if (c >= standard) {
      // 4 사분면
      return { count: 3 * standard ** 2, r: r - standard, c: c - standard };
    } else {
      // 3 사분면
      return { count: 2 * standard ** 2, r: r - standard, c: c };
    }
  } else {
    if (c >= standard) {
      // 2 사분면
      return { count: 1 * standard ** 2, r: r, c: c - standard };
    } else {
      // 1 사분면
      return { count: 0, r: r, c: c };
    }
  }
}
