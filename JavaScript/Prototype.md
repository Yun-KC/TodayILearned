# 프토로타입

자바스크립트는 **명령형**, **함수형**, **프로토타입 기반 객체지향 프로그래밍**을 지원하는 멀티 패러다임 프로그래밍 언어입니다.

> ### 객체지향 프로그래밍이란?
>
> - 프로그램을 여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말합니다.
>
> ### 객체란?
>
> - 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조입니다.
> - 객체는 **상태**<sup>프로퍼티</sup>를 나타내는 데이터와 데이터를 조작할 수 있는 **동작**<sup>메서드</sup>을 하나의 논리적인 단위로 묶습니다.
> - 객체는 자신의 고유한 기능을 수행하면서 다른 객체와 관계성을 가집니다.

---

## 상속과 프로토타입

> ### 상속이란?
>
> - 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말합니다.

자바스크립트는 프로토타입을 기반으로 **상속**을 구현합니다.
**상속**은 불필요한 중복을 제거하고, 기존의 코드를 재사용할 수 있습니다.

```javascript
function Student(name) {
  this.name = name;
  this.introduce = function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  };
}
```

Student 생성자 함수가 있습니다.
생성자 함수로 학생1과 학생2 객체를 생성합니다.

```javascript
const student1 = new Student('학생1');
const student2 = new Student('학생2');
```

학생1과 학생2의 프로퍼티와 메서드는 name, introduce입니다.

```javascript
// name은 인스턴스마다 다른 값을 가지고 있습니다.
console.dir(student1); // {name: "학생1", introduce: f ()}
console.dir(student2); // {name: "학생2", introduce: f ()}

// 하지만 introduce는 인스턴스마다 같은 기능을 하고 있습니다.
student1.introduce(); // 제 이름은 학생1입니다.
student2.introduce(); // 제 이름은 학생2입니다

// 그리고 인스턴스마다 introduce 메서드를 중복 소유하고 있습니다.
console.log(student1.introduce === student2.introduce); // false
```

동일한 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비합니다.  
자바스크립트는 프로토타입의 기반으로 상속을 구현합니다.

```javascript
function Student(name) {
  this.name = name;
}
Student.prototype.introduce = function () {
  console.log(`제 이름은 ${this.name}입니다.`);
};
```

```javascript
console.dir(student1); // {name: "학생1"}
console.dir(student2); // {name: "학생2"}

student1.introduce(); // 제 이름은 학생1입니다.
student2.introduce(); // 제 이름은 학생2입니다.

// Student.prototpye에 introduce 메서드를 정의 함으로써
// 모든 인스턴스는 하나의 introduce 메서드를 공유합니다.
console.log(student1.introduce === student2.introduce); // true
```

상속은 코드의 재사용이란 관점에서 매우 유용합니다. 생성자 함수가 생성할 모든 인스턴스를 공통적으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해 두면 인스턴스는 별도의 구현없이 상위 객체인 프로토타입의 자산을 공유하여 사용할 수 있습니다.

---

## 프로토타입 객체

> ### 프로토타입 객체
