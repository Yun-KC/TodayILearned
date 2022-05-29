const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, ...infos] = input;

const strArrToNumArr = (strArr) => {
  return strArr.map((el) => el.split(' ').map((el) => Number(el)));
};

const solution = (meetings) => {
  const sortedMeetings = strArrToNumArr(meetings).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let curTime = 0;
  let result = 0;
  sortedMeetings.forEach(([start, end]) => {
    if (start < curTime) return;
    curTime = end;
    result++;
  });
  console.log(result);
};

solution(infos);
