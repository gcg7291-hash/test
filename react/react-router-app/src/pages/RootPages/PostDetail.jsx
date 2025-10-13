import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function PostDetail() {
  // 경로 파라미터 값 불러오기
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    //postId를 활용해서
    // get a single porduct api 요청후 화면에 게시글 상세 정보 렌더링
    async function singleP() {
      const res = await axios(`https://dummyjson.com/products/${postId}`);
      setPost(res["data"]["posts"]);
    }
    singleP();
  }, [postId]);

  return (
    <div>
      <p>게시글 id : {postId}</p>
      <p>게시글 제목: {post.title}</p>
      <p>게시글 내용: {post.body}</p>
    </div>
  );
}
