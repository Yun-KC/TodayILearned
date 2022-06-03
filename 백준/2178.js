const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [row, col] = input
  .shift()
  .split(' ')
  .map((el) => Number(el));
const board = input.map((el) => [...el].map((el) => Number(el)));

const searchMovableLocation = (board, row, col) => {
  const result = [];
  // 0: 상, 1: 하, 2: 좌, 3: 우
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];
  const maxSizeOfRow = board.length;
  const maxSizeOfCol = board[0].length;
  for (let idx = 0; idx < 4; idx++) {
    const curRow = row + dx[idx];
    const curCol = col + dy[idx];
    if (curRow < 0 || curRow >= maxSizeOfRow) continue;
    if (curCol < 0 || curCol >= maxSizeOfCol) continue;
    if (board[curRow][curCol] === 1) {
      board[curRow][curCol] = 0;
      result.push([curRow, curCol]);
    }
  }
  return result;
};

const solution = (board, row, col) => {
  let Q = [[0, 0]];
  const rowOfArrival = row - 1;
  const colOfArrival = col - 1;
  let count = 1;
  while (Q.length) {
    const tempQ = [];
    while (Q.length) {
      const [curRow, curCol] = Q.shift();
      const movaleLocations = searchMovableLocation(board, curRow, curCol);
      tempQ.push(...movaleLocations);
    }
    Q = tempQ;
    count++;
    if (board[rowOfArrival][colOfArrival] === 0) return count;
  }
};

console.log(solution(board, row, col));
