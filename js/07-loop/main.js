// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// 변수 number를 5번 출력
// 1씩 증가하면서

let number = 0; //초기화
if (number < 3) {
  console.log(number); // 반복 실행할 코드
  number = number + 1; // 증감식
}
if (number < 3) {
  console.log(number); // 반복 실행할 코드
  number = number + 1; // 증감식
}
if (number < 3) {
  console.log(number); // 반복 실행할 코드
  number = number + 1; // 증감식
}
for (let number2 = 0; number2 < 3; number2 = number2 + 1) {
  console.log(number2); // 반복 실행할 코드
}
// 내가 어떤 코드를 5번 반복
// i++ => i = i +1
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1} 번 실행`);
}

// 숫자를 0번 5번까지 출력

for (let i = 0; i < 6; i++) {
  console.log(i);
}
console.log("---");
let i = 0;
if (i < 6) {
  console.log(i); //0
  i = i + 1; //1
}
if (i < 6) {
  console.log(i); //1
  i = i + 1; //2
}
if (i < 6) {
  console.log(i); //2
  i = i + 1; //3
}
if (i < 6) {
  console.log(i);
  i = i + 1;
}
if (i < 6) {
  console.log(i);
  i = i + 1;
}
if (i < 6) {
  console.log(i);
  i = i + 1;
}

for (let i = 0; i < 10; i++) {
  if (i === 16) {
    break;
  }
  console.log(`i의 값: ${i}`);
}

for (let i = 0; i < 5; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`i의값:${i}`);
}

// break 와 continue 는 무조건 반복문 내 조건문과 함께 사용 특정 조건하에서 break와 continue를 실행시키게 코드를 작성
