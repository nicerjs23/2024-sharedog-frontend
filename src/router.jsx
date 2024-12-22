import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/loginPage/WelcomePage";
import { CommunityPage } from "@pages/communityPage/Community";
import { ChatPage } from "@pages/chatPage/ChatPage";
import { MyPage } from "@pages/myPage/MyPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, //완전 기본 세팅 + 공통푸터관리
    children: [
      { path: "", element: <WelcomePage /> },
      { path: "main", element: <MainPage /> },
      //나중에 라우터 중첩으로 변경할거면 따로 빼기 지금은 푸터연결위해 임시로 해둠
      { path: "community", element: <CommunityPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "mypage", element: <MyPage /> },
    ],
  },
]);

//따로 레이아웃만들페이지 예상
//테스트, 회원가입 ,마이페이지 뒤로가기헤더부분 정도..?
