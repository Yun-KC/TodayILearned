const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = input.shift();
const testList = [];
let count = 0;
while (count++ < T) {
  const [row, cal, number] = input
    .shift()
    .split(' ')
    .map((e) => Number(e));
  const points = input.splice(0, number).map((e) => e.split(' '));
  testList.push([row, cal, number, points]);
}
function solution([row, cal, number, points]) {
  const board = Array(row)
    .fill()
    .map((e) => Array(cal).fill(0));
  points.forEach((el) => {
    const [row, cal] = el;
    board[row][cal] = 1;
  });

  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        count++;
        searchArea(i, j, board);
      }
    }
  }
  return count;
}
function searchArea(row, cal, board) {
  board[row][cal] = 0;
  //상, 하, 좌, 우
  const dRow = [1, -1, 0, 0];
  const dCal = [0, 0, -1, 1];
  const boardRowSize = board.length;
  const boardCalSize = board[0].length;
  for (let i = 0; i < 4; i++) {
    const curRow = row + dRow[i];
    const curCal = cal + dCal[i];
    if (curRow < 0 || curRow >= boardRowSize || curCal < 0 || curCal >= boardCalSize) continue;
    if (board[curRow][curCal] === 1) {
      searchArea(curRow, curCal, board);
    }
  }
}
console.log(testList.map((e) => solution(e)).join('\n'));
