const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e));
input.shift();
console.log(
  input.reduce((acc, cur, idx, arr) => {
    if (cur !== 0) acc.push(cur);
    else acc.pop();
    if (idx === arr.length - 1) return acc.reduce((a, b) => a + b, 0);
    return acc;
  }, [])
);
