const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");

function dividePerson(str) {
  const [num, ...elements] = str.split(" ").map((e) => Number(e));
  return { count: num, elements };
}

const [N, M] = input[0].split(" ").map((e) => Number(e)); // 사람의 수 N, 파티의 수 M
const { count: num, elements: knowingPeople } = dividePerson(input[1]); // 진실을 아는 사람의 수 num, 진실을 아는 사람들 mans

const parties = input.slice(2).map(dividePerson);
/* parties:
[
  { count: 2, elements: [ 1, 2 ] },
  { count: 1, elements: [ 3 ] },
  { count: 3, elements: [ 2, 3, 4 ] }
]
*/

// 각 파티에서 진실을 아는 사람 한명이라도 있다면 모든 사람은 진실을 아는 사람이 된다.
// 서로소 집합 알고리즘을 사용해서 집합으로 나타내야 해야함.
// https://m.blog.naver.com/ndb796/221230967614

const parent = Array(N + 1)
  .fill()
  .map((e, i) => i);

function find(x) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
}

// 한 파티에 참여하는 사람들을 한 집합으로 묶음.
function mergeArr(arr = []) {
  const parentArr = arr.map(find);
  const minIdx = Math.min(...parentArr);
  parentArr.forEach((i) => (parent[i] = minIdx));
}

mergeArr(knowingPeople);
parties.forEach(({ elements }) => mergeArr(elements));
parent.forEach(find);

const truthSet = num ? find(knowingPeople[0]) : 0;

let result = 0;

parties.forEach(({ elements }) => {
  const parentArr = elements.map(find);
  const idx = parentArr.findIndex((e) => e === truthSet);
  if (idx === -1) result++;
});

console.log(result);
