import axios from "axios";

// 도메인 주소
const BASE_URL = "https://dummyjson.com/docs/products";

// async 화살표 함수
// const testRoute = async () => {
//   const data = await axios.get(`${BASE_URL}/test`);
//   console.log(data["data"]);
// };
// testRoute();








async function getFilteredProducts(propertyName, value) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const filteredProducts = data["products"].filter(
    (product) => product[propertyName] < value
  );
  console.log(filteredProducts);
}

getFilteredProducts("price", 10);

