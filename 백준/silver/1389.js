const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [userNum, M] = input
  .shift()
  .split(' ')
  .map((e) => Number(e));
const relations = input.map((el) => el.split(' ').map((e) => Number(e) - 1));
const map = Array(userNum)
  .fill()
  .map((el) => Array(userNum).fill(0));

relations.forEach((el) => {
  const [a, b] = el;
  map[a][b] = 1;
  map[b][a] = 1;
});

for (let k = 0; k < userNum; k++) {
  for (let i = 0; i < userNum; i++) {
    for (let j = 0; j < userNum; j++) {
      if (i === j) map[i][j] = 0;
      if (map[i][j] > map[i][k] + map[k][j]) map[i][j] = map[i][k] + map[k][j];
    }
  }
}

const result = map.reduce(
  (acc, cur, idx) => {
    const kevinNum = cur.reduce((a, b) => a + b);
    if (acc[0] > kevinNum) {
      return [kevinNum, idx];
    }
    return acc;
  },
  [Infinity, null]
);
console.log(result[1] + 1);
