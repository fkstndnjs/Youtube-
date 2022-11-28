import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();

  // 검색창에 텍스트 작성하고 엔터키 누르면 그 키워드를 가지는 영상들의 목록을 보여줌
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  // 페이지를 이동해도 검색창에 이전 페이지에서 입력했던 키워드가 그대로 남아있음
  // 페이지를 이동할 때에도 그 이전 페이지의 컴포넌트들을 다 다시 리렌더링 함
  // 따라서 useParams()로 keyword param을 받아서 setText()로 text를 다시 설정해줌
  // 페이지의 엔드포인트가 바뀔때에만 text가 keyword로 설정되어야 하므로 keyword를 dependency로 설정
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600">
      {/* 유튜브 로고 */}
      {/* 유튜브 로고를 누르면 "/"로 라우팅 */}
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">YouTube</h1>
      </Link>

      {/* 검색창 */}
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="bg-zinc-600 px-4 rounded-lg">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
