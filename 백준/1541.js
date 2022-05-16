const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

// 1. 정규표현식으로 입력값을 숫자와 기호로 나눠 배열로 선언합니다.
const arr = input.match(/(\d)+|(\D)/g);

// 2. 식이 최소가 되려면 -기호 이후에 나오는 +기호들을 괄호로 묶어야합니다.
// + 였던 숫자를 괄호로 묶어서 -로 만들 수 있다면,
// arr를 순회하며 -기호가 나올 때 뒤로 오는 모든 숫자들을 전부 음수가 될 수 있습니다.
let result = 0;
let state = '+';
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '-') {
    state = '-';
    continue;
  } else if (arr[i] === '+') {
    continue;
  }
  if (state === '-') {
    result -= Number(arr[i]);
  } else {
    result += Number(arr[i]);
  }
}
console.log(result);
