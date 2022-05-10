const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, ...orders] = input.map((el) => Number(el));
const result = [];
const stack = [];
let idx = 0;
for (let i = 1; i <= N; i++) {
  stack.push(i);
  result.push('+');
  while (stack[stack.length - 1] === orders[idx]) {
    result.push('-');
    stack.pop();
    idx++;
    if (stack.length === 0) break;
  }
}
console.log(idx === N ? result.join('\n') : 'NO');
