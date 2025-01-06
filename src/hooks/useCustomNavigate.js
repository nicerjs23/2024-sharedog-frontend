import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goTo = (path, options) => {
    navigate(path, options);
  };
  const goBack = () => {
    navigate(-1); //뒤로가기, +1은 앞으로가기
  };
  const goToWithId = (path, id) => {
    navigate(`${path}/${id}`);
  };

  return { goTo, goBack, goToWithId };
};

// 글쓰기같은페이지 뒤로가기 로직 처리할때 예외처리 나중에 아래처럼 바꾸기
// // useCustomNavigate.js
// import { useNavigate, useLocation } from "react-router-dom";

// export const useCustomNavigate = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const goBack = () => {
//     // 현재 경로가 글쓰기 페이지일 경우 자유게시판으로 이동
//     if (location.pathname === "/write") {
//       navigate("/board/free", { replace: true });
//     } else {
//       // 그 외의 경우 일반 뒤로 가기
//       navigate(-1);
//     }
//   };

//   return { goBack };
// };

/* 훅 사용법! 참고하세요~
import React from "react";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

const ExampleComponent = () => {
  const { goTo, goBack } = useCustomNavigate();

  return (
    <div>
      <button onClick={() => goTo("/target-path")}>Go to Target Page</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default ExampleComponent;
*/
