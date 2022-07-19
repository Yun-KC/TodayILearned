/*
    1. 배열을 하나 씩 전부 잘라 배열스위칭이 가능한지 확인한다.
    A의 길이는 100,000 이하. 효율성 X

    2. O(N)으로 끝내려면 배열을 순회하면서 요소를 비교해 나간다.
*/
function solution(A) {
  let result = 0;
  let prevEvenNum = A[0];
  let prevOddNum = A[1];
  let tempCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (i % 2) {
      if (prevOddNum !== A[i]) {
        prevOddNum = A[i];
        result = Math.max(result, tempCount);
        tempCount = 2;
      } else {
        tempCount++;
      }
    } else {
      if (prevEvenNum !== A[i]) {
        prevEvenNum = A[i];
        result = Math.max(result, tempCount);
        tempCount = 2;
      } else {
        tempCount++;
      }
    }
    if (i === A.length - 1) result = tempCount;
  }
  return result;
}
console.log(solution([7, -5, -5, -5, 7, -1, 7]));
