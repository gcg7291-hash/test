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
import Signup from "../pages/AuthPages/Signup";
import ProtectedLayout from "../layout/ProtectedLayout";
import PostDetail from "../pages/RootPages/PostDetail";
import PostList from "../pages/RootPages/PostList";
// 라우터 설정 생성
// 경로 상수 불러오기
import PATHS from "../constants/paths";

const router = createBrowserRouter([
  {
    path: PATHS["ROOT"]["INDEX"],
    Component: RootLayOut,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path: "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: PATHS["ROOT"]["ABOUT"],
        Component: About,
      },
      {
        path: PATHS["ROOT"]["POSTS"],
        Component: PostList,
      },
      {
        path: PATHS["ROOT"]["POST_DETAIL"],
        Component: PostDetail,
      },
      {
        // path 속성 x
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [
          {
            path: PATHS["ROOT"]["PROFILE"],
            Component: Profile,
          },
        ],
      },
    ],
  },
  // AtuhLayout 경로 설정
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
]);
export default router;
