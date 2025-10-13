import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";

//createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(url ) 와 컴포넌트를 맵핑
import { createBrowserRouter } from "react-router-dom";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    prat: "/", // 주소(URL)
    Component: Home, //주소에 해당되는 컴포넌트
  },
  {
    path: "/about",
    Component: About,
  },
]);
export default router;
