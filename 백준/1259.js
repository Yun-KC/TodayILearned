const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const examples = input.slice(0, -1);

function solution(palindromNum) {
  for (let i = 0, j = palindromNum.length - 1; i <= j; i++, j--) {
    if (palindromNum[i] !== palindromNum[j]) return "no";
  }
  return "yes";
}

console.log(examples.map(solution).join("\n"));
