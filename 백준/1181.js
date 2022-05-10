const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
let [N, ...words] = input.split('\n');
words = words.filter((el, idx, arr) => arr.indexOf(el) === idx);
words.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});
console.log(words.join('\n'));
