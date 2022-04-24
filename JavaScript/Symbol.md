# Symbol Type

> ### MDN
>
> Symbol() 함수는 symbol 형식의 값을 반환하는데, 이 심볼은 내장 객체의 여러 멤버를 가리키는 정적 프로퍼티와 전역 심볼 레지스트리를 가리키는 정적 메서드를 가지며, "new Symbol()" 문법을 지원하지 않아 생성자 측면에서는 불완전한 내장 객체 클래스와 유사합니다.  
> </br>
> Symbol()로부터 반환되는 모든 심볼 값은 고유합니다. **_심볼 값은 객체 프로퍼티에 대한 식별자로 사용될 수 있습니다._** 이것이 심볼 데이터 형식의 유일한 목적입니다.

즉 Symbol 타입을 사용하면 고유하고 변경할 수 없는 식별자를 얻을 수 있습니다.

---

## Creating a Symbol

symbol을 생성하려면, 심볼을 설명하는 선택적(optional) 문자열과 함께 _Symbol()_ 을 사용합니다.  
_Symbol()_ 함수를 호출할 때마다 이전 또는 이후에 생성된 다른 Symbol과 다른 고유 식별자를 얻게 됩니다.

```javascript
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
console.log(sym2 === sym3); // false;

const sym4 = new Symbol(); // TypeError 발생
```

---

## Characteristics of the type Symbol

- *Symbol()*로 생성된 Symbol 타입의 모든 값은 서로 충돌하지 않도록 고유합니다.
- 객체의 키가 symbol인 객체 프로퍼티는 _Object.getOwnPropertyNames()_ 또는 _Object.keys()_ 함수를 사용하거나 _for...of_ 또는 _for...in_ 유형의 루프에 나열되지 않습니다.
- 객체의 키가 symbol인 객체의 프로퍼티를 나열하려면 _Object.getOwnPropertySymbols()_ 함수를 사용합니다.
- symbol 타입 값은 형 변환을 할 수 없습니다.

```javascript
const obj = {};
obj[Symbol('test')] = 'test';
console.log(obj); // {Symbol(test): 'test'}
Object.keys(obj); // []
Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [Symbol(test)]

const foo = Symbol('foo');
console.log(foo + 'bar'); // TypeError
```

---

## Accessing proviously created Symbols

이전에 만든 Symbol 타입의 값을 가져오려면 자바스크립트가 제공하는 _Symbol.for(key)_ 를 사용합니다.  
_Symbol.for(key)_ 메서드는 Symbol 타입의 값을 만들거나 이미 등록된 Symbol 타입의 값을 불러옵니다.

```javascript
const foo = Symbol.for('foo');
const bar = Symbol.for('foo');
console.log(foo === bar); // true
```

**🔥주의!** 일반적인 _Symbol()_ 로 생성한 Symbol 타입 값은 _Symbol.for(key)_ 로 불러올 수 없습니다.

```javascript
const foo = Symbol('foo');
const bar = Symbol.for('foo');
console.log(foo === bar); // false;
```
