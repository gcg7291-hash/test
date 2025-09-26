const user = {
  name: "홍길동",
  address: {
    city: "서울",
  },
};

//["속성명"]
//.속성명
// 옵셔널 체이닝 -> ?.속성명
console.log(user?.address);
console.log(user?.address?.city);
console.log(user?.address?.contry);

console.log(user?.contact?.email);
console.log(user?.contact?.phone);
console.log(user?.contact);
