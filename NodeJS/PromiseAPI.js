/*
Promise 생성자(new Promise((resolve, reject) => {})는 새로운 Promise 인스턴스를 생성합니다.
Promise인스턴스는 인자로서 주어진 함수의 동작에 기반하여 이행(fulfill)과 거부(reject)를 합니다.
*/

// resolve(obj)가 호출될 때 obj가 값이면 obj 자체가 전달되고, 프라미스나 thenable 이면 obj의 이행값이 전달됩니다.
const test = new Promise((resolve, reject) => {
  resolve("value"); // 전달 값이 표현식일 경우
}).then((result) => {
  console.log("resolve의 타입:", typeof result); // string
  console.log("resolve에 값이 전달될 경우:", result); // value
  return "promise";
});

console.log(test); // Promise { <pending> }

new Promise((resolve, reject) => {
  resolve(test); // 전달 값이 프라미스일 경우
}).then((result) => {
  console.log(result);
  console.log("resolve의 타입:", typeof result);
  console.log("resolve에 프라미스가 전달될 경우:", result); // promise
});

// 자바스크립트에서 함수는 일급 객체이다. 그럼 Promise 인스턴스의 리턴 값으로 함수가 온다면 어떻게 될까?
function func() {
  return "It is a function";
}
new Promise((resolve, reject) => {
  resolve(func);
}).then((result) => {
  console.log("resolve의 타입:", typeof result);
  console.log("resolve에 함수가 전달될 경우:", result); // [Function: func]
  console.log("resolve에 함수가 전달될 경우 함수 호출:", result()); //It is a function
});
// 결과는 함수가 이행 값으로서 전달된다.
