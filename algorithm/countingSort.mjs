function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);

  // 매개변수 radix를 기준으로 0~9의 개수를 셉니다.
  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });

  // count 배열의 인덱스는 자리수를 의미하고 값들은 output에 들어갈 인덱스를 의미합니다.
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });

  // ** 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회합니다. ㅜ**
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    // count[idx]: 현재 radix의 idx까지 누적 개수
    // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }

  return output;
}

export default countingSort;
