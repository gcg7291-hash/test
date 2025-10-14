import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function PostList() {
  // searchParams : 쿼리 파라미터 값을 가진 객체
  // setSearchParams : 쿼리 파라미터 값을 변경하는 함수
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "id";

    async function getPosts() {
      const res = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      setPosts(res.data.posts);
    }
    getPosts();
  }, [searchParams]);
  return (
    <div className="flex gap-2">
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => {
          // id를 기준(sortBy)으로 asc
          setSearchParams({ sortBy: "id", order: "asc" });
        }}
      >
        ID 오름차순
      </button>
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => {
          setSearchParams({ sortBy: "id", order: "desc" });
        }}
      >
        ID 내림차순
      </button>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            No.{post.id} - {post.title}
          </Link>
        );
      })}
    </div>
  );
}
