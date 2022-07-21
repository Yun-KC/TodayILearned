/*
https://www.acmicpc.net/problem/2606
바이러스 
*/
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const computerNum = +input.shift();
const N = +input.shift();

const connections = input.map((el) => el.split(' ').map((e) => +e));

const union = Array(computerNum + 1)
  .fill()
  .map((e, i) => i);

function getParent(x) {
  if (union[x] === x) return union[x];
  return (union[x] = getParent(union[x]));
}

function merge(x, y) {
  const X = getParent(x);
  const Y = getParent(y);
  if (X > Y) union[X] = Y;
  else union[Y] = X;
}
connections.forEach(([a, b]) => {
  merge(a, b);
});

console.log(
  union.reduce((acc, cur) => {
    if (getParent(cur) === 1) acc++;
    return acc;
  }, 0) - 1
);
