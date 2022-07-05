// https://school.programmers.co.kr/learn/courses/30/lessons/81302

// 풀이 1
function solution(places) {
  /*
    모든 p를 찾고 그 위치에서 상하좌우 이동후 그 위치에서 상하좌우 또다른 P 가 있으면 거리두기를 지키지 않은 것
    */
  let result = places.map((el) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      let elArr = [...el[i]];
      for (let j = 0; j < 5; j++) {
        if (elArr[j] === 'P') {
          let foo = check(el, [i, j]);
          if (foo === 0) {
            return 0;
          }
        }
      }
    }
    return 1;
  });
  return result;
}
// 상하좌우 방향
function check(table, point) {
  let [row, col] = point;
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let arr = [];
  for (let i = 0; i < 4; i++) {
    let cur = [row + direction[i][0], col + direction[i][1]];
    if (cur[0] < 0 || cur[0] >= 5 || cur[1] < 0 || cur[1] >= 5) {
      continue;
    }
    let value = table[cur[0]][cur[1]];
    if (value === 'O') {
      arr.push([cur, (i + 2) % 4]);
    } else if (value === 'X') {
      continue;
    } else {
      return 0;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let secondLocate = arr[i][0];
    let dir = arr[i][1];
    for (let j = 0; j < 4; j++) {
      if (j === dir) {
        continue;
      }
      let cur = [secondLocate[0] + direction[j][0], secondLocate[1] + direction[j][1]];
      if (cur[0] < 0 || cur[0] >= 5 || cur[1] < 0 || cur[1] >= 5) {
        continue;
      }
      let value = table[cur[0]][cur[1]];
      if (value === 'P') {
        return 0;
      }
    }
  }
  return 1;
}
/*-----------------------------------------------------*/
// 풀이 2
function solution(places) {
  return places.map(test);
}

function test(place) {
  // 플레이스를 순회하며 P(응시자)를 만나면
  // 2 이하 맨헤튼 거리안에 다른 응시자가 있는지 체크하는 함수
  // x: 가로, y: 세로

  const visit = Array.from({ length: 5 }, () => Array(5).fill(0));
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      if (place[x][y] === 'P' && visit[x][y] === 0) {
        visit[x][y] = 1;
        const result = Check(place, x, y, visit);
        if (!result) return 0;
      }
    }
  }
  return 1;
}

function Check(place, x, y, visit) {
  let Q = [[x, y]];
  let count = 0;
  let tempQ = [];
  while (Q.length && count !== 2) {
    const [curX, curY] = Q.shift();
    const checkPoints = dir(curX, curY, visit);
    for (let i = 0; i < checkPoints.length; i++) {
      const [nextX, nextY] = checkPoints[i];
      const curPoint = place[nextX][nextY];
      if (curPoint === 'X') continue;
      else if (curPoint === 'P') return false;
      else if (curPoint === 'O') tempQ.push([nextX, nextY]);
    }
    if (Q.length === 0) {
      Q = tempQ;
      tempQ = [];
      count++;
    }
  }
  return true;
}
// 한 지점에 대한 4방향들의 좌표 리턴
function dir(x, y, visit) {
  // 상하좌우
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const result = [];
  for (let i = 0; i < 4; i++) {
    const curX = x + dx[i];
    const curY = y + dy[i];
    if (curX < 0 || curX > 4 || curY < 0 || curY > 4 || visit[curX][curY]) continue;
    result.push([curX, curY]);
  }
  return result;
}
