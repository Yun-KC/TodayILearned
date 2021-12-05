// promise.finally: 이 함수를 사용하면 프라미스가 결정(이행되거나 거부됨)될 때 호출되는 onFinally 콜백을 설정할 수 있습니다.

// 프라미스를 리턴하는 함수입니다.
function createPromise(str, sec) {
  if (str === "res")
    return new Promise((res) => {
      res("fulfilled");
    });
  if (str === "rej")
    return new Promise((_, rej) => {
      rej("reject");
    });
  return new Promise((res) => {
    setTimeout(() => res(`${sec}초가 가장 빠른 시간`), sec * 1000);
  });
}

// onFulfilled 및 onRejected와 달리 onFinally 콜백은 입력으로 인자를 수신하지 않으며 여기에서 반환된 값은 무시됩니다.

createPromise("res")
  .then((result) => {
    console.log("then의 콜백인자:", result); // fulfilled
    return "finally"; // 무시됨.
  })
  .finally((result) => console.log("finally의 콜백인자", result)); // undefined
