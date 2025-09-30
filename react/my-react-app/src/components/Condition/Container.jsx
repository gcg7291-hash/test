import React from "react";
import LoginStatus from "./LoginStatus";
import AdminLink from "./AdminLink";

export default function Container() {
  return (
    <div>
      {/* isLogin 속성에 true */}

      <LoginStatus isLogin={true} userName="홍길동"></LoginStatus>
      {/* isLogin 속성에 false */}
      <LoginStatus isLogin={false} userName="김철수"></LoginStatus>
      <AdminLink isAdmin={true}></AdminLink>
      <AdminLink isAdmin={false}></AdminLink>

    </div>
  );
}
