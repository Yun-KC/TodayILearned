/* 
특정 구현으로부터 객체의 생성을 분리할 수 있다. 
new 연산자 혹은 Object.create()를 사용하여 클래스로부터 새로운 객체를 만드는 대신 팩토리를 호출하면 클래스의 새 인스턴스를 만들거나,
클로저를 활용하여 상태를 기억하는 객체 리터럴을 동적으로 작성하거나, 특정 조건에 따라 다른 유형의 객체를 반환하도록 할 수도 있습니다.
또 팩토리를 사용하는 사람은 인스턴스 생성이 수행되는 방식에 대해 전혀 알 수 없습니다.
*/

function createImage(name) {
  return new Image(name);
}

// 왜 직접 인스턴스를 생성하지 않을까?
const image = new Image('name');

// 이미지 형식마다 하나의 클래스를 지원하기 위해 Image 클래스를 더 작은 클래스로 분할한다고 생각했을 때,
//팩토리는 객체생성에 큰 유연성을 제공합니다. 또한 클래스를 숨겨, 멋대로 확장하거나 수정하는 것을 막아줍니다.
function createImage(name) {
  if (name.match(/\.jpe?g$/)) {
    return new ImageJpeg(name);
  } else if (name.match(/\.gif$/)) {
    return new ImageGif(name);
  } else if (name.match(/\.png$/)) {
    return new ImagePng(name);
  } else {
    throw new Error('Unsupported format');
  }
}

/*
  팩토리는 클로저 덕분에 캡슐화 메커니즘으로 사용될 수도 있습니다.
  캡슐화는 외부 코드가 컴포넌트의 내부 핵심에 직접 접근하여 조작하는 것을 방지하기 위해 접근을 제어하는 것을 의미합니다.
  컴포넌트와의 상호작용은 오직 공용(public) 인터페이스를 통해서만 가능하여, 컴포넌트의 상세 구현의 변경으로부터 외부 코드를 분리시킬 수 있습니다.
*/
function createPerson(name) {
  // 외부에서 접근할 수 없고 person 객체가 제공하는 인터페이스만을 통해 접근 가능합니다.
  const privateProperties = {};

  const person = {
    setName(name) {
      if (!name) {
        throw new Error('A person must have a name');
      }
      privateProperties.name = name;
    },
    getName() {
      return privateProperties.name;
    },
  };
  person.setName(name);
  return person;
}
// 여기서 person객체는 name 속성에 반드시 값을 가집니다. 이는 name이 person 객체의 일반 속성일 경우 절대 강제할 수 없습니다.
// profiler.js 에서 간단한 팩토리 함수를 구현합니다.
