import React from "react";
import card from "./card";

export default function CardContainer() {
  function handleClick() {
    alert("카드를 클릭했습니다.");
  }
  return (
    <div>
      <Card onClick={handleClick} />
    </div>
  );
}
