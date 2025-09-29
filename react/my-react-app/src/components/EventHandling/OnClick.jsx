import React from "react";
// 클릭 이벤트 핸들링 함수
// 관례적으로 핸들링 함수명은 handle 이벤트명

export default function OnClick() {
  function handleCilck() {
    alert("클릭!");
  }
  // 매개변수가 있는 함수
  function handleParamCilck(param) {
    alert("Hello World!");
  }
  return (
    <div>
      {/* 카멜 케이스로 이벤트 속성을 작성 */}
      {/* JSX 보간법 {} 을 활용해서 함수를 호출 */}
      <button
        className="coursor-pointer border-2 p-2 bg-green-300 text-white shadow m-1"
        onClick={() => handleCilck()}
      >
        매개변수가 없는 클릭
      </button>

      <button
        className="coursor-pointer border-2 p-2 bg-green-300 text-white shadow m-1"
        onClick={(param) => handleParamCilck(param)}
      >
        매개변수가 있는 클릭
      </button>
    </div>
  );
}
