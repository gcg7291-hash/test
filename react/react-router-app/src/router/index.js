//createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(url ) 와 컴포넌트를 맵핑
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
// 라우터 설정 생성
// 경로 상수 불러오기

import rootRoutes from "./routes/rootRoutes";
import authRoutes from "./routes/authRoutes";

// 라우터 설정 생성
const router = createBrowserRouter([
  // 스프레드 연산자(...)로 경로 배열을 복사
  ...rootRoutes,
  ...authRoutes,
  {  // 모든 주소에 매핑되는 path
    
    path: "*", // 별표: 모든것에 매핑(일치)되는 특수문자
    Component: NotFound,
  },
]);
export default router;
