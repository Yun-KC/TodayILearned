function solution(name) {
  // 문자열 name을 배열로 만듭니다.
  const nameArr = [...name];

  // 모든 값이 "A"라면 리턴합니다.
  if (nameArr.every((el) => el === 'A')) {
    return 0;
  }
  // 양방향으로 나눠 이동한 적이 있나 확인하는 배열입니다.
  let visited = Array(name.length).fill(0);
  // 리턴할 최솟값입니다.
  let minimum = Number.MAX_VALUE;

  function test2(idx, dir, arr, result = 0, visited) {
    // 배열은 참조타입이여서, 복사해서 사용합니다.
    const newArr = [...arr];
    const newVisited = [...visited];

    // 현재 인덱스의 알파벳을 확인하고, "A"로 바꾸는 횟수를 result에 더합니다.
    const curAlphabet = newArr[idx];
    const cancelCount = curAlphabet === 'A';
    if (!cancelCount) {
      const num = curAlphabet.charCodeAt();
      result += num < 78 ? num - 65 : 91 - num;
      newArr[idx] = 'A';
    }

    // 모든 값이 "A"가 되었다면 minimum과 result 중 최솟값을 minimum에 넣습니다.
    if (newArr.every((el) => el === 'A')) {
      if (minimum > result) {
        minimum = result;
      }
      return;
    }

    // 양방향으로 나아갑니다. 이미 나눠진 적이 있다면 나눠지지 않습니다.
    if (newVisited[idx] === 0) {
      newVisited[idx] = 1;
      test2((idx + dir * -1 + newArr.length) % newArr.length, dir * -1, newArr, result + 1, newVisited);
    }
    test2((idx + dir + newArr.length) % newArr.length, dir, newArr, result + 1, newVisited);
  }
  // (인덱스, 방향, 알파벳배열, 카운트, 방문확인배열)로 재귀적으로 호출합니다.
  test2(0, 1, nameArr, 0, visited);

  return minimum;
}
