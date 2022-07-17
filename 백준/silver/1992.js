/*
https://www.acmicpc.net/problem/1992
*/
const fs = require("fs");
const internal = require("stream");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const N = +input.shift();
const code = input;

function quadTree(code) {
  if (check(code)) {
    return `(${code[0][0]})`;
  } else {
  }
}
function check(code = []) {
  const initial = +!+code[0][0];
  return code.every((el) => el.indexOf(initial) === -1);
}
function devide(code) {
  const code1 = code.splice(0, N / 2);
  const code2 = code;
  const [code1_1, code1_2] = code1;
}
