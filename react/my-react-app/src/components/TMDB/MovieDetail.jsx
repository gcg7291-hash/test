import { useEffect, useState } from "react";
import axios from "axios";
// 데이터를 감시하고 데이트가 변경할때 콜백함수 실행해서 부수효과를 처리하는 훅 useEffect
// state 상태가 변경되면 컴포넌트를 리렌더링 한다 독립적으로 관리되는 데이터 상태는 화면을 결정하는 중요한 데이터
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieList() {
  // id 상태 데이터를 저장하고 있는 변수
  // setid 상태 데이터를 바꿀수있는 함수
  const [id, setId] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
        },
      };

      const res = await axios(config);
      console.log(res);
      setId(res["data"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>details</h1>
      <ul>{id["title"]}</ul>
      <li>{id["overview"]}</li>
    </div>
  );
}
