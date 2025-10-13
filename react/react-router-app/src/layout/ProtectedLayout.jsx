import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function ProtectedLayout() {
  const isLogin = false;
  // Navigate 컴포넌트로 "/auth/login" 리다이렉트
  if (isLogin === false) {
    return <Navigate to="/auth/login"></Navigate>;
  }

  return <Outlet />;
}
