const MODIFIER_NAMES = ['swap', 'write', 'fill'];

export class ImmutableBuffer {
  constructor(size, executor) {
    // 생성자 인자에 지정된 크기의 새로운 버퍼를 생성합니다.
    const buffer = Buffer.alloc(size);
    // 버퍼를 변경할 수 있는 함수들을 보관하는 객체 리터럴을 만듭니다.
    const modifiers = {};
    // 버퍼 내부의 모든 속성들을 살펴보면서 함수가 아닌 속성을 건너뜁니다.
    for (const prop in buffer) {
      if (typeof buffer[prop] !== 'function') {
        continue;
      }
      // 현재 속성이 버퍼를 수정할 수 있는 함수인지를 식별합니다. 맞다면 클로저 변수에 추가합니다. 아닌 경우 현재 인스턴스에 직접 추가합니다.
      if (MODIFIER_NAMES.some((m) => prop.startsWith(m))) {
        modifiers[prop] = buffer[prop].bind(buffer);
      } else {
        this[prop] = buffer[prop].bind(buffer);
      }
    }
    // 생성자에서 입력으로 받은 실행 함수를 호출하면서 인자로 modifier 객체를 전달하면 실행 함수가 내부 버퍼를 변경할 수 있습니다.
    executor(modifiers);
  }
}
/*
1. 
*/
