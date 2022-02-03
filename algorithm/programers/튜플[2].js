function solution(s) {
  const answer = [];
  const strArr = s
    .slice(2, -2)
    .split('},{')
    .sort((a, b) => a.length - b.length);
  const set = new Set();
  strArr.forEach((el) => {
    el.split(',').forEach((el2) => {
      set.add(el2);
    });
  });
  set.forEach((el) => {
    answer.push(Number(el));
  });
  return answer;
}
