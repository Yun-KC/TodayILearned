/* eslint-disable no-plusplus */
const fs = require('fs');


const filePath = process.platform === 'linux' ? './dev/stdin' : '../../input.txt';
const S = fs.readFileSync(filePath).toString();

const charArray = Array.from({ length: 26 }).fill(0);

for (let i = 0; i < S.length; i++) {
  charArray[+S.charCodeAt(i) - 97]++;
}

console.log(charArray.join(' '));
