import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

// 컴포너느가 첫 렌더링될때 DummyJSON 으로 데이터를 요청 (axios를 써서)
export default function RequestData() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res["data"];
      console.log(data);
      setproducts(data["products"]);
    }
    getProducts();
  }, []); // 빈 의존성 배열: 컴포넌트가 첫 렌더링 될 때만 콜백함수가 실행

  return <div>
    {/* products : 배열 */}
    {/* map : 반복 메서드 */}
    {/* product : 반복되는 배열의 원소 */}
    {products.map((product) => {
      // 매개변수 product를 Product 컴포넌트에 props 로 전달
      // 속성명 : product / 값 : 매개변수 product
      return <Product product={product}></Product>
  })}</div>;
}
