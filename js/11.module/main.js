// 모듈을 불러오기
// import / from

// form : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐

import { add, substract, multiply, divide, PI } from "./math.js";

// add

console.log(add(1, 2));

// substact

console.log(substract(2, 1));

// multiply

console.log(multiply(3, 4));

// divide

console.log(divide(4, 2));

// 상수
console.log(PI);

// 하나만 불러오기
// 내가 불러온 함수의 이름을 결정
import Add from "./calculator.js";

console.log(Add(1, 2));
