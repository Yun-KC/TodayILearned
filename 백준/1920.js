const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString();
const [N, nums1, M, nums2] = input.split('\n');
const set = new Set(nums1.split(' '));
const numArr = nums2.split(' ');
const result = [];
for (let i = 0; i < numArr.length; i++) result[result.length] = set.has(numArr[i]) ? 1 : 0;
console.log(result.join('\n'));
