// 1. Promise.resolve(obj): 이 함수는 다른 프라미스, thenable 또는 값에서 새로운 프라미스를 생성합니다.

// 2. Promise.reject(err): 이 함수는 err를 이유로 거부하는 Promise를 생성합니다.

/*
3. Promist.all(iterable): 이 함수는 입력된 반복 가능한 객체(예를 들어 배열) 내의 모든 프라미스가 이행(fulfill)되면
  이행된 결과값들의 배열을 이행값으로 하여 이행하는 새로운 프라미스를 생성합니다. 반복 가능한 객체 내의 하나라도 거부(reject)되면
  Promise.all()로 반환된 프라미스는 첫 번쨰 거부 사유를 가지고 거부될 것입니다.
*/

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

Promise.all([createPromise("res"), createPromise("res"), createPromise("res")]).then((result) => {
  console.log("모든 프라미스가 이행됐을 때:", result);
});
Promise.all([createPromise("res"), createPromise("rej"), createPromise("res")])
  .then((result) => {
    console.log("호출되지 않습니다.");
  })
  .catch((err) => {
    console.log(err); // reject
  });

/*
4.Promise.allSettled(iterable): 이 함수는 반복 가능한 객체(iterable) 내의 모든 프라미스가 이행되거나 거부될 때까지 기다린 다음
  입력된 각각의 Promise에 대한 이행값 또는 거부 사유를 담은 객체의 배열을 반환합니다.
  Promise.all()과의 차이점은 프라미스 중 하나가 거부될 때 즉시 거부되지 않고 모든 프라미스가 이행되거나 거부될 때까지 기다립니다.
*/
Promise.allSettled([createPromise("res"), createPromise("rej"), createPromise("res")]).then((result) => {
  // 각 객체는 fulfilled, rejected 같은 status 속성과 이행값을 담은 value 속성 그리고 거부 사유가 담긴 reason 속성이 있습니다.
  console.log(result);
});

/*
5. Promise.race(iterable): 이 함수는 반복 가능 객체에서 처음으로 결정된(settled) 프라미스를 반환합니다.
*/
Promise.race([createPromise(null, 5), createPromise(null, 3), createPromise(null, 7)]).then((result) => {
  console.log(result); //3초가 가장 빠르기 때문에 그 프라미스 이행값이 result로 전달됨
});
