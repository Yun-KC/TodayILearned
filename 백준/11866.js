const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((e) => Number(e));
const arr = Array(input[0])
  .fill()
  .map((e, id) => id + 1);
let idx = -1;
let result = [];
while (arr.length !== 0) {
  idx = (idx + input[1] + arr.length) % arr.length;
  result.push(...arr.splice(idx, 1));
  idx--;
}
console.log(`<${result.join(', ')}>`);
