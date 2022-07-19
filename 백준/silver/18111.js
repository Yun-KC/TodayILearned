const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [row, cal, item] = input
  .shift()
  .split(' ')
  .map((e) => Number(e));
const board = input.reduce((acc, cur) => {
  acc.push(...cur.split(' ').map((e) => Number(e)));
  return acc;
}, []);
const minHigh = Math.min(...board);
const maxHigh = Math.max(...board);
let time = Infinity;
let high = 256;
for (let curHigh = minHigh; curHigh <= maxHigh; curHigh++) {
  let curItem = item;
  let curTime = 0;
  for (let blockHigh of board) {
    const highDiff = Math.abs(blockHigh - curHigh);
    curTime += blockHigh > curHigh ? highDiff * 2 : highDiff;
    curItem += blockHigh > curHigh ? highDiff : -highDiff;
  }
  if (curItem < 0) continue;
  if (time > curTime) (time = curTime), (high = curHigh);
  if (time === curTime) high = Math.min(high, curHigh);
}
console.log(time, high);
