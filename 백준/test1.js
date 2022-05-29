const dir = {
  U: [45, 135],
  R: [315, 405],
  D: [225, 315],
  L: [135, 225],
};
function solution(direction, radius, X, Y) {}
function checkTheDistnace(radius, x, y) {
  const targetDistance = Math.sqrt(x ** 2 + y ** 2);
  if (radius >= targetDistance) return true;
  else return false;
}
function checkTheAngle(direction, x, y) {
  let angle = (Math.atan2(y, x) * 180) / Math.PI;
  angle = (angle + 360) % 360;
  console.log(angle);
  const curRange = dir[direction];
  if (curRange[0] <= angle && curRange[1] >= angle) return true;
  if (curRange[0] <= angle + 360 && curRange[1] >= angle + 360) return true;
  return false;
}
console.log(checkTheAngle('R', 10, -1));
// 레이더 범위 안에 있는지 확인하는 방법
// 우선 (X[i] ,Y[i])과 (0, 0) 사이의 거리가 radius 안에 있는가
// (X[i] ,Y[i])과 (0, 0)을 지나는 직선의 기울기가 direction 안에 있는가
