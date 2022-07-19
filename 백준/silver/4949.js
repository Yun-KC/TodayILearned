const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
input.pop();
function solution(str) {
  const map = { ']': '[', ')': '(' };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[') stack.push(str[i]);
    if (str[i] === ')' || str[i] === ']') {
      if (map[str[i]] !== stack.pop()) return 'no';
    }
  }
  return stack.length ? 'no' : 'yes';
}

console.log(input.map(solution).join('\n'));
