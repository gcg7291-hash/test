// 배열 고차 메서드
// 배열 원소에 콜백 함수를 순차적으로 적용하는 메서드

function multiTwo(value) {
  return value * 2;
}

function higherOrderFunction(array, callbackFunction) {
  // 배열의 반복
  for (let element of array) {
    // 배열 내부 원소에 콜백 함수를 적용
    const result = callbackFunction(element);
    // 콜백 함수 결과를 출력
    console.log(result);
  }
}

numbers = [1, 2, 3, 4, 5];

higherOrderFunction(numbers, multiTwo);

higherOrderFunction(numbers, (value) => {
  return value * value;
});

console.log("---");
// 콜백 함수
function callbackFunction(element) {
  // 적용할 로직
  return callbackFunction + 1;
}

numbers.forEach(callbackFunction);

// 배열 고차 메서드는
// 배열의 반복문을 함수화

let numbers3 = [1, 2, 3, 4, 5];

// 인덱스 반복문의 문제
// 1. 조건식 실수
// 2. 인덱스를 통해서 원소에 접근
for (let index = 0; index <= numbers3.length - 1; index++) {}

// for ...of
//1. 조건식 x
//2. 원소에 바로 직접접근
//for.. of 문제점
//1. 내부 로직 관리의 어려움
//2. 유연함이 떨어진다

for (let element of numbers3) {
  //내부 로직
}

// 배열 고차 메서드
// 1. 문법이 간결
// 2. 콜백함수로 반복작업을 유연하게 제어
numbers3.forEach(callbackFunction);

// 각 원소에 +1을 한 결과를 출력하는 배열 고차 메서드 활용

const numbers4 = [1, 2, 3, 4, 5, 6];

numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

console.log("---");
// 각 원소 중 2로 나눴을 때 나머지가 0인 원소만 출력
numbers4.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

// map를 활용해서 * 2를 한 원소를 모아서 새 배열 표현식

const newArray = numbers4.map((element) => {
  return element * 2;
});
console.log(newArray);

const newArray2 = numbers4.filter((elemnet1) => {
  if (elemnet1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(newArray2);

// reduce ()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

const result = numbers10.reduce((accValue, currElement) => {
  //accValue : 이전 반복동안 반환된 값을 누적한 데이터
  //currElement : 현재 원소

  //반환값들이 누적된다.
  return accValue + 1;
  //accValue + 1
  // ------------
  // 0       + 1, => accValue = 1
  // 1       + 1, => accValue = 2
  // 2       + 1, => accValue = 3
  // 3       + 1, => accValue = 4
  // 4       + 1, => accValue = 5
}, 100);
console.log(result);

const newArray3 = numbers4.reduce((elemnet1) => {
  return elemnet1 + 1;
});
console.log(newArray3);

// sort()
// 배열을 정렬하는 코드
// 원소를 2개씩 비교하며 정렬

const numbers5 = [1, 5, 2, 4, 3];
// 오름차순 축약
//  return a - b
// 내림차순 축약
//  return b - a
numbers5.sort((a, b) => {
  // 정렬 기준
  // 반환값이 양수라면 a가 뒤로 배치
  // 반환값이 음수라면 a가 앞으로 배치
  // 반환값이 0이라면 같다
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(numbers5);
