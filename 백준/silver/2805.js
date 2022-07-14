const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map((el) => Number(el));
const trees = input[1].split(' ').map((el) => Number(el));

let left = 0;
let right = 1000000001;

while (left < right - 1) {
  let mid = Math.floor((left + right) / 2);
  const totalLength = trees.reduce((acc, cur) => acc + (cur > mid ? cur - mid : 0), 0);
  if (totalLength > M) {
    left = mid;
  } else if (totalLength === M) {
    left = mid;
    break;
  } else {
    right = mid;
  }
}
console.log(left);
