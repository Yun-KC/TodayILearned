# 표현식과 문

> ### 값이란?
>
> 식(표현식)이 평가되어 생성된 결과를 말합니다. 평가란 식을 해석해서 값을 생성하거나 참조하는 것을 의미합니다.

```javascript
// 변수 sum 에는 10 + 20이 평가되어 생성된 30이 할당됩니다.
var sum = 10 + 20;
```

---

> ### 리터럴이란?
>
> 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법을 말합니다.

| **리터럴**         | **예시**                          | **비고**                |
| ------------------ | --------------------------------- | ----------------------- |
| 정수 리터럴        | 100                               |                         |
| 부동소수점 리터럴  | 10.5                              |                         |
| 2진수 리터럴       | 0b01000001                        | 0b로 시작               |
| 8진수 리터럴       | 0o101                             | ES6에서 도입. 0o로 시작 |
| 16진수 리터럴      | 0x41                              | ES6에서 도입. 0x로 시작 |
| 문자열 리터럴      | 'hello', "world"                  |                         |
| 불리언 리터럴      | true, false                       |                         |
| null 리터럴        | null                              |                         |
| undefined 리터럴   | undefined                         |                         |
| 객체 리터럴        | { name: 'Lee', address: 'seoul' } |                         |
| 배열 리터럴        | [1, 2, 3]                         |                         |
| 함수 리터럴        | fucntion() {}                     |                         |
| 정규 표현식 리터럴 | /[A-Z]+/g                         |                         |

_자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성합니다._

---

> ### 표현식이란?
>
> 값으로 평가될 수 있는 문입니다. 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조합니다.

> ### 문이란?
>
> 프로그램을 구성하는 기본 단위이자 최소 실행 단위입니다.
> 문은 여러 토큰으로 구성됩니다. _토큰이란_ 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미합니다. 에를 들어, 키워드, 식별자, 연산자, 리터럴, 세미콜론(;)이나 마침표(.) 등의 기호는 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소이므로 모두 토큰입니다.