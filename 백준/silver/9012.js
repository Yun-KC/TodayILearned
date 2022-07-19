const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
input.shift();
function solution(str) {
  const map = { ')': '(' };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push(str[i]);
    if (str[i] === ')' && map[str[i]] !== stack.pop()) return 'NO';
  }
  return stack.length ? 'NO' : 'YES';
}

console.log(input.map(solution).join('\n'));
