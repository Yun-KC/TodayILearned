function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {};
  let result;
  label: for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S[i].length; j++) {
      if (!map[j]) map[j] = [];
      const searchStr = S[i][j];
      const idx = map[j].indexOf(searchStr);
      if (idx !== -1) {
        result = [idx, i, j];
        break label;
      } else {
        map[j].push(S[i][j]);
      }
    }
  }
  console.log(map);
  return result || [];
}
console.log(solution(['gr', 'sd', 'rg']));
