import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-4xl">소개 페이지</h1>

      <NavLink to="/">홈</NavLink>
      <br />
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "text-red-900 font-bold text-5xl" : "";
        }}
      >
        소개
      </NavLink>
      <br />
      <NavLink to="/Profile">사용자 정보</NavLink>
    </div>
  );
}
