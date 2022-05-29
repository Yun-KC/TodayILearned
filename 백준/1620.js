const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((e) => Number(e));

const map = {};
const result = [];
for (let i = 1; i <= N; i++) {
  map[input[i]] = i;
}

for (let i = N + 1; i < input.length; i++) {
  if (isNaN(input[i])) {
    result.push(map[input[i]]);
  } else {
    result.push(input[input[i]]);
  }
}
console.log(result.join('\n'));
