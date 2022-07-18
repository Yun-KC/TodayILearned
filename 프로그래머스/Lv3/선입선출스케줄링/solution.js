function solution(n, cores) {
  // 처음 시작에 모든 코어에 작업을 할당
  let rest = n - cores.length;

  // left, right는 작업 시간을 나타냄, 이분 탐색을 통해 최적의 작업 시간을 구함
  let left = 1;
  let right = (Math.max(...cores) * rest) / cores.length;
  while (left < right - 1) {
    const mid = ((left + right) / 2) >> 0; // Math.floor() 대신 쉬프트 연산으로 정수화
    const workload = cores.reduce((acc, cur) => acc + ((mid / cur) >> 0), 0); // mid 작업시간에서의 작업량
    if (rest <= workload) right = mid;
    else left = mid;
  }
  // 모든 작업은 right 시간에 끝남.
  // right - 1 시간에 남은 작업량을 구하고 코어에 작업을 하나씩 할당해가며 마지막 작업을 하는 코어를 구하면 됨.
  let anHourAgoWorkload = rest - cores.reduce((acc, cur) => acc + (((right - 1) / cur) >> 0), 0);

  for (let i = 0; i < cores.length; i++) {
    if (right % cores[i] === 0) {
      anHourAgoWorkload--;
      if (anHourAgoWorkload === 0) return i + 1;
    }
  }
}
