// https://www.acmicpc.net/problem/1167
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const num = Number(input.shift());

// n * n 의 그래프를 생성합니다. Graph[n][m]의 값은 n 에서 m으로 가는 간선 가중치 입니다.
// 아직 정점 사이에 간선 정보가 없으므로 전부 Infinity로 초기화합니다.
const createGraph = (n) => {
  return Array(n)
    .fill()
    .map((el) => Array(n).fill(Infinity));
};

// graph를 정점 개수에 맞게 생성합니다.
const graph = createGraph(num);

// input값을 [[점1, 점2, 간선 정보] ...] 처럼 변경합니다.
const changeTheFormat = (infos) => {
  const result = [];
  for (let info of infos) {
    const [pointA, ...points] = info
      .split(' ')
      .slice(0, -1)
      .map((e) => Number(e));
    for (let i = 0; i < points.length; i = i + 2) {
      const pointB = points[i];
      const length = points[i + 1];
      // infos는 1,2,3... 순서대로 나아갑니다.
      // 만약 pointB가 pointA보다 작다면 이미 앞에서 추가된 값 입니다.
      if (pointB < pointA) continue;
      result.push([pointA - 1, pointB - 1, length]);
    }
  }
  return result;
};

const infos = changeTheFormat(input);

// 정점과 간선의 정보를 graph에 넣습니다.
const insertInfo = (infos) => {
  infos.forEach((info) => {
    const [a, b, length] = info;
    graph[a][b] = length;
    graph[b][a] = length;
  });
};

insertInfo(infos);

// 플로이드 와샬 알고리즘으로 모든 간선들의 최단 거리를 구합니다.

for (let k = 0; k < num; k++) {
  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      if (row === col) graph[row][col] = 0;
      else if (k === row || k === col) continue;
      else graph[row][col] = Math.min(graph[row][k] + graph[k][col], graph[row][col]);
    }
  }
}

console.log(
  graph.flat().reduce((acc, cur) => {
    if (cur === Infinity) return acc;
    if (acc === Infinity) return cur;
    return Math.max(acc, cur);
  }, Infinity)
);


// 메모리 초과.
