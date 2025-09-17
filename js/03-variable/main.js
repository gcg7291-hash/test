// 변수에 데이터를 할당 (assing o, save X)
// 할당할 데이터
// "Hello World" 데이터를 저장한 공간의 이름이 message
// 변수 message에 "Hello World"를 할당
// message = "Hello world";

// = : 할당 연산자
// console.log(message);
// console.log(message);
// console.log(message);

// 자주봤던 실수
//  데이터 = 변수명 x

//  변수 message2 선언
//  선언과 할당은 분리 가능
let message2;

//  선언의 방식 2개 (3개)
//  let
//  데이터의 재할당 가능
//  변수 message3에 "Hello variable"을 할당
let massage3 = "Hello variable";

//  변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";
// let은 안붙이나요? -> let을 붙이면 선언
// let 키워드는 재선언은 불가능
// console.log("message3");

// let 변수 message4를 선언
let message4;
// 재선언은 불가능
// let message4;

// const
// 데이터의 재할당이 불가능(중요) -> 상수 라고 개발에서는 표현

// let vs const
// let : 변하는 데이터를 저장하는 변수 선언 방식
// const : 변하면 안되는 데이터를 저장하는 변수 선언 방식

// 대소문자 구분하기 떄문에 두 변수는 다른 변수
let message;
let MESSAGE;

// 카멜 케이스 적용 전
let hellomessage;

// 카멜 케이스 적용 후
let helloMessage;

// 의미 없는 변수명
let a = 1;
// 의미 있는 변수명
let number1 = 1;

//  템플릿 리터럴
//  문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
//  1. 문자열을 백틱으로 표현
//  2. 변수 삽입 위치에 기호 ${변수} 를 사용
let name = "공창근";
let greet = `안녕하세요 ${name}입니다.`;
console.log(greet);

// var
