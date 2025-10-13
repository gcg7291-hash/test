//createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(url ) 와 컴포넌트를 맵핑
import { createBrowserRouter } from "react-router-dom";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";
import AuthLayout from "../layout/AuthLayout";
import AuthHome from "../pages/AuthPages/AuthHome";
import Login from "../pages/AuthPages/Login";
import Singnup from "../pages/AuthPages/Signup";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path: "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  // AtuhLayout 경로 설정
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Singnup,
      },
    ],
  },
]);
export default router;
