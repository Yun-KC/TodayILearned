/*
https://www.acmicpc.net/problem/1764
*/

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");

const [듣못수, 보못수] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const 명단 = input;
const 듣못집합 = new Set();

for (let i = 0; i < 듣못수; i++) 듣못집합.add(명단[i]);

const 결과 = [];

for (let i = 듣못수; i < 듣못수 + 보못수; i++) {
  if (듣못집합.has(명단[i])) 결과.push(명단[i]);
}
console.log(결과.length);
console.log(결과.join("\n"));
