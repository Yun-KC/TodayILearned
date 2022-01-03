/*
keyof 키워드

인덱스 타입 (Index types)
동적인 프로퍼티 이름을 사용하는 코드를 컴파일러가 검사할 수 있습니다.
*/

type obj = {
  a: number;
  b: number;
  c: number;
};
type keyofType = keyof obj; // obj를 keyof 하면 keyofType의 타입은 유니온 타입 ('a'|'b'|'c')이 됩니다.

const a: keyofType = 'a';
const b: keyofType = 'g';

// 어떻게 사용하는가 ?
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}
let taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014,
};

// Manufacturer과 model은 둘 다 문자열 타입입니다,
// 그래서 둘 다 타이핑된 문자열 배열로 끌어낼 수 있습니다.
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);

// 만약 model과 year를 끌어내려고 하면,
// 유니언 타입의 배열: (string | number)[] 을 얻게됩니다.
let modelYear = pluck(taxi, ['model', 'year']);

let test = pluck(taxi, ['manufacturer', 'asd']); // 실제로 있는 값인가 자동으로 체크 합니다.!

//만약에 keyof를 안쓴다면?
type unionType = 'manufacturer' | 'model' | 'year'; //직접 유니온 타입을 하드코딩합니다.

function pluck2(o: object, propertyNames: unionType[]): (string | number)[] {
  return propertyNames.map((n) => o[n]);
}
let test2 = pluck2(taxi, ['manufacturer', 'asd']); // 실제로 있는 값인가 자동으로 체크 합니다.!

//하드코딩으로 새로운 유니온 타입을 작성했기때문에 객체에 새로운 프로퍼티를 추가하면 그때도 마찬가지로 직접 수정해줘야 합니다.
