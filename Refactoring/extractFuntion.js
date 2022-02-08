/*
함수 추출하기 - 코드 조각을 찾아 무슨 일을 하는지 파악한 다음, 독립된 함수로 추출하고 목적에 맞는 이름을 붙힌다. 목적과 구현을 분리.
목적에 맞는 이름을 짓는 것이 중요하다.

1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙힌다.('어떻게'가 아니라 '무엇을' 하는지가 드러나야한다.)
2. 추출할 코드를 원본 함수에서 복사하여 새 함수에 붙여넣는다.
3. 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사한다. 있다면 매개변수로 전달한다.
4. 원본 함수에서 추출한 코드 부분을 새로 만든 함수를 호출하는 문장으로 바꾼다.(즉, 추출한 함수로 일을 위임한다.)
5. 테스트한다.
*/

// 변경 전
function printOwing(invoice) {
  let outstanding = 0;

  console.log('************');
  console.log('***고객 채무***');
  console.log('************');

  // 미해결 채무(outstanding)을 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일을 기록한다.
  const today = Clock.today; // Clock.today = Date.now, Clock은 임의로 만든 함수
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

/* --------------변경 후 ----------------*/
function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('************');
  console.log('***고객 채무***');
  console.log('************');
}
function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
function recordDueDate(invoice) {
  const today = Clock.today; // Clock.today = Date.now, Clock은 임의로 만든 함수
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
function calculateOutstanding(invoice) {
  result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

// 주석 없이 함수 이름으로 무슨 일을 하는 코드인지 파악이 가능해졌다.
