const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.


function solution(n) {
  const dp = [];
  dp[0] = Infinity;
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= n; i++) {
    dp[i] = Math.min(dp[i % 3 ? 0 : i / 3], dp[i % 2 ? 0 : i / 2], dp[i - 1]) + 1;
  }
  return dp[n];
}
console.log(solution(Number(input)));
