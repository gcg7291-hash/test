import React from "react";

// 로그아웃 버틑
// 만약에 로그인을 한 상태라면 사용자 정보 출력
// (정상적으로 로그인을 했을 떄)사용자 정보는 전역 상태 token 에 저장된 상황
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 액션을 실행하기 위한 액션생성자 함수와  useDispatch훅
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Profile() {
  // 전역 상태 token
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  // 로그인 검증 로직
  // 사용자 정보 관리 상태
  const [decodeToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // 토큰이 있다 => 로그인을 한 상태
    if (token) {
      // 토큰 복호화 => 사용자 정보 불러오기
      setDecodeToken(jwtDecode(token));
    } else {
      // 로그인 상태가 아니라면 사용자를 로그인 페이지로 보내기
      // navigate("/login");
    }
  },[token]); // useEffect 의존성 배열에 token 추가

  function handelLogout() {
    //dispatch 함수로 logout 액션을 스토어 (store) 전달
    dispatch(logout());
    // 로그아웃이 정상적으로 성공했다면 token = null
  }

  // // 토큰(token) 복호화 코드
  // const decodeToken = jwtDecode(token);

  return (
    <div>
      <div>{token ? token : "로그인을 해주세요"}</div>
      <div>
        <div>
          {/* decodetoke이 null이 아니면 이메일 표시 */}
          {decodeToken ? `이메일: ${decodeToken.email}` : "로그인을 해주세요"}
        </div>
      </div>
      <div>
        <button
          className="border-2"
          onClick={() => {
            handelLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
