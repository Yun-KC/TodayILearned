const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

const N = Number(input);

const dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

while (dp.length < N) {
  const size = dp.length;
  dp[size] = Array(10);
  for (let i = 0; i <= 9; i++) {
    dp[size][i] = ((dp[size - 1][i - 1] || 0) + (dp[size - 1][i + 1] || 0)) % 1000000000;
  }
}
console.log(dp[N - 1].reduce((a, b) => a + b) % 1000000000);
