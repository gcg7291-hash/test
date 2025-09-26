// 구조 분해 할당
// 객체는 {} 분해, 배열[] 분해
const object = {
  name: "홍길동",
  age: 20,
  name2: "홍길동",
  age2: 20,
};

// 구조 분해 할당으로 활용하지 않은 경우
// 속성을 개별 변수에 할당
let name = object["name"];
let age = object["age"];

// 구조 분해 할당을 활용하는 경우
// 변수명과 객체의 속성명(key)가 동일해야한다
let { name2, age2 } = object;

console.log(name);
console.log(name2);

const object2 = {
  id: 1,
  title: "갤럭시 99",
  description: "삼성 스마트폰",
  price: 99999,
};

const { title, price } = object2;

console.log(title, price);

// 배열 구조 분해 할당
const arry = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arry;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const fruits = ["사과", "바나나", "딸기"];
const [first, second, third] = fruits;
console.log(first);
console.log(second);
console.log(third);

// 객체를 인자로 전달받는 함수
function func(object) {
  const { name, age } = object;
  console.log(`Hello${name}, I'm ${age}`);
}

// 매게 변수에 구조분해 할당을 활용
function func2({ name, age }) {
  console.log(`Hello ${name}, I'm ${age}`);
}

const user = {
  name: "홍길동",
  age: 20,
};
func(user);
func2(user);
