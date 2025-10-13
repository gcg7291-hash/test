import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function AuthLayout() {
  const baseColor = "border-2 border-amber-300 p-2 ";
  // className = {`${baseColor}}  jsx보간법 + 템플릿 리터럴 혼합 삼항연산자는 표현식이라서 템플릿 리터럴이 적용 가능하다
  // NavLink 활성화 class
  const activeCalss = `border-2 border-red-900`;
  return (
    <div>
      <div className="text-center text-5xl">
        <NavLink
          className={({ isActitve }) =>
            `${baseColor} ${isActitve ? activeCalss : ""}`
          }
          to="/auth"
        >
          {" "}
          인증 홈페이지
        </NavLink>
        <NavLink
          className={({ isActitve }) =>
            `${baseColor} ${isActitve ? activeCalss : ""}`
          }
          to=".auth/login"
        >
          로그인 페이지
        </NavLink>
        <NavLink
          className={({ isActitve }) =>
            `${baseColor} ${isActitve ? activeCalss : ""}`
          }
          to="/auth/signup"
        >
          회원가입 페이지
        </NavLink>
        <NavLink
          className={({ isActitve }) =>
            `${baseColor} ${isActitve ? activeCalss : ""}`
          }
          to="/"
        >
          홈페이지
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
