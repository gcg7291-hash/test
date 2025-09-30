import React from "react";
import User from "./User";
export default function Container() {
  // 반복 렌더링 할 배열 데이터
  const array = [1, 2, 3, 4, 5];

  // id 속성의 값은 중복되지 않고, name 속성의 값은 중복될 수 있다
  // 객체의 id 속성은 서로 다른 객체들을 구별(식별)하기 위한 속성
  // 객체 원소를 저장한 배열
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {/* array 배열을 map() 메서드로 반복 */}
      {array.map((element) => {
        return <li>{element}</li>;
      })}
      {/* id는 고유한(2개 이상 중복되지안흔) 속성 / name은 고유하지 않은 속성 */}
      {/* 반복의 대상이 되는 요소에 key라고 하는 이름의 속성과 값을 설정을 해야한다 */}
      {/* key 에 설정되는 값은 고유한 값( 객체의 속성) 이어야 한다 */}
      {/* 반복 렌더링에서 key 속성의 역할은 */}
      {/* 동일하게 반복 생성된 컴포넌트를 구별(식별)하기 위한 속성 */}
      {userArray.map((userElement) => {
        return <User key={userElement["id"]} user={userElement}></User>;
      })}
    </div>
  );
}
