import RootLayOut from "../../layout/RootLayOut";
import About from "../../pages/RootPages/About";
import Home from "../../pages/RootPages/Home";
import PostDetail from "../../pages/RootPages/PostDetail";
import PostList from "../../pages/RootPages/PostList";
import Profile from "../../pages/RootPages/Profile";
import PATHS from "../../constants/paths";
import ProtectedLayout from "../../layout/ProtectedLayout";

const rootRoutes = [
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
];

// 경로 배열 내보내기
export default rootRoutes;
