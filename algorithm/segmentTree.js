const arr = [5, 8, 7, 3, 2, 5, 1, 8, 9, 8, 7, 3];
const tree = [0];
const segmentTree = (start, end, node = 1) => {
  if (start === end) return (tree[node] = arr[start]);
  const mid = Math.floor((start + end) / 2);
  return (tree[node] = segmentTree(start, mid, node * 2) + segmentTree(mid + 1, end, node * 2 + 1));
};
segmentTree(0, arr.length - 1);

console.log(tree);

const sum = (start, end, node, left, right) => {
  console.log(`현재 start: ${start}, end: ${end}, node: ${node}`);
  if (left > end || right < start) {
    console.log('범위를 벗어났습니다.');
    return 0;
  }
  if (left <= start && right >= end) {
    console.log('범위 안입니다.');
    return tree[node];
  }
  const mid = Math.floor((start + end) / 2);
  return sum(start, mid, node * 2, left, right) + sum(mid + 1, end, node * 2 + 1, left, right);
};
console.log(sum(0, arr.length - 1, 1, 0, 2));
