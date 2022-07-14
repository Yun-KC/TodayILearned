const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
let n = Number(input);
let count = 0;
while (n >= 5) {
  count += Math.floor(n / 5);
  n /= 5;
}
console.log(count);
