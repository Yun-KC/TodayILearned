const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M, V] = input
  .shift()
  .split(' ')
  .map((element) => Number(element));
const lins = input.map((element) => element.split(' '));

class Vertex {
  constructor(number) {
    this.number = number;
    this.childs = [];
  }
  DFS(){}
  BFS(){}
}