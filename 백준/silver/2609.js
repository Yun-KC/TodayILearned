const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((e) => Number(e));

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
console.log(gcd(input[0], input[1]));
console.log(lcm(input[0], input[1]));
