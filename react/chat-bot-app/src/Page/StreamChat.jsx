import React from "react";

import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";
import { ai } from "../utils/genai";
import { chat } from "../utils/genai";
import { config } from "../utils/genai";

export default function Chat() {
  const [prompt, setPrompt] = useState(""); // 사용자 입력 프롬프트 관리 상태
  const [messages, setMessages] = useState([]); // 사용자 - AI 메세지 관리 상태
  const [isLoading, setIsLoading] = useState(false); // AI 요청 후 응답 대기 상태

  async function handleSubmit(event) {
    event.preventDefault();
    // 프롬프트가 비어있거나 AI 응답을 대기 중이라면
    // isLoading === true 고, prompt.trim()=== "" 라면 작업 x
    if (isLoading === true || prompt.trim() === "") return;

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가 (role: "user")
    // role 역할 : user라면 오른쪽에 배치 , AI 라면 왼쪽에 배치

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const currentPrompt = prompt;
    setPrompt("");

    setIsLoading(true); // 요청 시작
    await sendStreamChatMessage(currentPrompt); // Ai 응답 생성 함수
    setIsLoading(false); // 요청 종료
  }

  // AI 에게 요청을 보내서 응답을 생성하는 함수
async function sendStreamChatMessage(prompt) {
  const stream = await chat.sendMessageStream({
    message: prompt,
  });

  for await (const chunk of stream) {
    console.log(chunk["text"]);
  }
  console.log("대화 내역 \\n", chat.getHistory());
  askQuestion();
}

function askQuestion() {
  rl.question("프롬프트를 입력하세요 ('exit'를 입력하면 종료): ", (answer) => {
    if (answer === "exit") {
      console.log("프로그램을 종료합니다.");
      rl.close();
    } else {
      console.log(`입력된 프롬프트: '${answer}'`);
      sendChatMessage(answer);
    }
  });
}

  return (
    <>
      {/* 사용자 - AI 대화 내용 출력 컴포넌트 */}
      <MessageList messages={messages} />

      {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
      <ChatForm
        prompt={prompt} // 사용자 입력값 관리 상태
        setPrompt={setPrompt} // 사용자 입력값 상태 변경함수
        isLoading={isLoading} // AI 응답 대기 상태
        onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
      />
    </>
  );
}
