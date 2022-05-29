const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, ...infos] = input;
infos = infos.map((el) => el.split(' ').map((el2) => Number(el2)));

// 시간 초과 코드.
// 그리디 알고리즘으로 모든 경우의 수를 살펴보기 때문에 시간초과가 남
// N은 1~100,000의 길이를 가짐
const solution = (N, infos) => {
  const sortedInfos = infos.sort((a, b) => a[0] - b[0]);
  let result = 0;
  const getCase = (meetings, curTime = 0, startIdx = 0, count = 0) => {
    if (startIdx >= meetings.length) {
      result = Math.max(result, count);
      return;
    }
    for (let i = startIdx; i < meetings.length; i++) {
      if (meetings[i][0] < curTime) continue;
      getCase(meetings, meetings[i][1], i + 1, count + 1);
    }
  };
  getCase(sortedInfos);
  console.log(result);
};

solution(N, infos);
