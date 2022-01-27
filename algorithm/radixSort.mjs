import countingSort from './countingSort.mjs';

// 매개변수 arr는 정수배열입니다.
function radixSort(arr) {
  // arr요소들을 음수와 양수를 기준으로 배열로 나눕니다.
  // left는 -1 을 곱해서 양의 정수로 만들어줍니다.
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  });

  //최대 값의 자리수를 기준으로 계수정렬을 반복해야합니다.
  let max = Math.max(...left);
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  }
  max = Math.max(...right);
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  }

  // left의 배열을 반전하고 각 요소에 -1을 곱합니다.
  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}

console.log(radixSort([1, 6, 83, 262, 64, -16]));
