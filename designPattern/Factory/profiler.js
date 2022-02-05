class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }
  start() {
    this.lastTime = process.hrtime();
  }
  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`Timer "${this.label}" took ${diff[0]} seconds` + `and ${diff[1]} nanoseconds`);
  }
}
/*
process.hrtime() 는 Node.js 가 기본적으로 가지고 있는 정밀한 타이머입니다.
start가 호출될 때 현재 시간을 저장한 다음 end()가 실행될 때 경과 시간을 계산하여 콘솔에 출력합니다.

실행 시간을 계산하는 이와 같은 프로파일러를 현실의 응용프로그램에서 사용할 경우, 콘솔에 엄청난 양의 프로파일링 정보가 출력될 것입니다.
실행 환경에 따라 프로파일러를 활성화 여부를 결정해야합니다.
*/

const noopProfiler = {
  start() {},
  end() {},
};

export function createProfiler(label) {
  //프로덕션일 경우 Profiler와 매서드는 동일하지만 매서드가 비어있는 모의 객체를 반환합니다.
  if (process.env.NODE_ENV === 'production') {
    return noopProfiler;
  }
  return new Profiler(label);
}

// createProfiler() 함수는 팩토리이고, Profiler 객체의 생성을 추상화합니다.
