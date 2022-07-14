const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [K, N] = input[0].split(' ');
const [...lans] = input.slice(1).map((e) => Number(e));
let left = 1;
let right = Math.max(...lans) + 1;

while (left < right - 1) {
  const mid = Math.floor((left + right) / 2);
  const value = lans.reduce((acc, cur) => {
    return (acc += Math.floor(cur / mid));
  }, 0);
  if (value >= N) {
    left = mid;
  } else {
    right = mid;
  }
}
console.log(left);
