import axios from "axios";

async function addProduct() {
  //요청 주소
  const URL = "https://dummyjson.com/products/add";
  //요청 방법(목적)
  const METHOD = "POST";

  //요청 본문(body)
  const body = {
    title: "benz-c43amg",
    category: "Car",
  };

  //요청 헤더(headers)
  //헤더(headers) : 요청의 부가 정보
  const headers = {
    // content-Type : 요청 본문 (body)의 데이터 형식
    // application/json : json 확장자 데이터
    "content-Type": "application/json",
  };

  const config = {
    url: URL,
    method: METHOD,
    headers: headers,
    // data: axios에서의 본문(body)
    data: body,
  };
  const response = await axios(config);
  // 데이터 객체
  const data = response["data"];
  console.log(response);
}

addProduct();

