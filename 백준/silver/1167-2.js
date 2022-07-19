// 다른 사람코드


const sol = (input) => {
  const N = +input[0];
  input = input.slice(1);
  
  const tree = Array.from({ length: N + 1 }, () => new Array());

  input.map((str) => {
    const [node, ...nextInfo] = str.split(' ').map(Number);
    for (let i = 0; i < nextInfo.length - 1; i += 2) {
      tree[node].push([nextInfo[i], nextInfo[i + 1]]);
    } // 각 행의 마지막 요소(-1)를 제외했고 (다음 노드, 거리) 쌍으로 입력을 받는다.
  });

  let check = Array.from({ length: N + 1 }, () => 0);
  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };
  // max 변수에는 최대 거리와 최대 거리인 노드가 들어간다.

  function dfs(node, dist) {
    check[node] = 1;
    if (max.dist < dist) max = { node, dist }; // 거리가 최대거리면 max객체의 노드, 거리 값을 갱신한다.
    for (let [nextNode, nextDist] of tree[node]) {
      if (check[nextNode]) continue;
      dfs(nextNode, dist + nextDist); // 다음 dfs에 거리 값을 더해준다.
    }
  }

  dfs(1, 0); // 임의의 노드(1번 노드 선택)에서 시작해서 첫 dfs를 실행
  max.dist = Number.MIN_SAFE_INTEGER;
  check = new Array(N + 1).fill(0); // check 배열 초기화

  dfs(max.node, 0); // 1번 노드에서의 최대 거리 노드인 max.node에서 시작해서 두번째 dfs 실행
  return max.dist; // 이 최대 거리 값이 실제 트리의 지름에 해당한다.
};

// 백준에서 입력을 받는 코드
const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
