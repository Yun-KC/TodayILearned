const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");

function dividePerson(str) {
  const [num, ...elements] = str.split(" ").map((e) => Number(e));
  return { count: num, elements };
}

const { count: N, elements: M } = dividePerson(input[0]); // 사람의 수 N, 파티의 수 M
const { count: num, elements: mans } = dividePerson(input[1]); // 진실을 아는 사람의 수 num, 진실을 아는 사람들 mans

const parties = input.slice(2);
