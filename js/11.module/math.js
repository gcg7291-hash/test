// 외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2;
}

// 함수 add 내보내기
export { add };

// 빼기
// substract
function substract(n1, n2) {
  return n1 - n2;
}

export { substract };
// 곱하기
// multiply
function multiply(n1, n2) {
  return n1 * n2;
}

export { multiply };
// 나누기
// divide
function divide(n1, n2) {
  return n1 / n2;
}

export { divide };

// 각 함수를 만들고, 내보내기 및 불러오기

// export {함수명1. 함수명2, ...}

// 상수도 내보내고 불러올수 있다.
const PI = 3.14;

export { PI };
