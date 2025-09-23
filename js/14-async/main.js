// 비동기 처리 함수
// setTimeout, setInterval, fetch

// setTimeout(콜백, 밀리초)
// 밀리초 뒤에 콜백함수를 실행하는 비동기처리 함수

console.log("setTimeout 전 코드");
setTimeout(() => {
  console.log("5000ms 후 실행");
}, 5000);
console.log("setTimeout 후 코드");

setTimeout(() => {
  console.log("3000ms 후 실행");
}, 3000);

setTimeout(() => {
  console.log("1000ms 후 실행");
}, 1000);

// 콜스택 실행중인 함수가 쌓여있는곳 콜스택에  비동기 함수 (setTimeout, setInterval...) 요청이 들어오면 Wep APIs 가 가져가서 처리 후 콜백 큐로 콜백함수가 들어감
// 콜스텍이 작업을 다 처리하면 이벤트 루프 가 콜백 큐의 함수를 콜스택으로 옮김 콜스택은 콜백함수를 처리
