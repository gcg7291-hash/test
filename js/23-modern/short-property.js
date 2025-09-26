let name = "홍길동";
let age = 20;

//객체
const user = {
  name: name,
  age: age,
};
console.log(user);

//단축 속성
//변수명을 key로 사용할 때
//변수명과 key가 동일 할때
const user2 = {
  name,
  age,
};
console.log(user2);
