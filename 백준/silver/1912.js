const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [n, arr] = input.map((e) => e.split(' ').map((el) => Number(el)));

const dp = Array(n[0]).fill(null);

for (let i = 0; i < n[0]; i++) {
  dp[i] = arr[i];
  for (let j = i; j < n[0]; j++) {
    
  }
}
console.log(Math.max(...dp));
