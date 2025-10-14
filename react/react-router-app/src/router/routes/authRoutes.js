import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Login from "../../pages/AuthPages/Login";
import Signup from "../../pages/AuthPages/Signup";
import PATHS from "../../constants/paths";

const authRoutes = [
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
];
export default authRoutes;
