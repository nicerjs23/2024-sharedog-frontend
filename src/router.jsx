import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { SignUpLayout } from "@layout/SignUpLayout";

import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/loginPage/WelcomePage";
import { SignUpPage } from "@pages/signUpPage/SignUpPage";
import { LoginPage } from "@pages/loginPage/LoginPage";
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
      { path: "login", element: <LoginPage /> },
      //나중에 라우터 중첩으로 변경할거면 따로 빼기 지금은 푸터연결위해 임시로 해둠
      { path: "community", element: <CommunityPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "mypage", element: <MyPage /> },
      {
        path: "signup",
        element: <SignUpLayout />, // DefaultLayout 하위에 SignUpLayout 중첩
        children: [{ path: "", element: <SignUpPage /> }],
      },
    ],
  },
]);
