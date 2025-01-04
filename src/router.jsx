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
import { PwSignUpPage } from "@pages/signUpPage/PwSignUpPage";
import { NameSignUpPage } from "@pages/signUpPage/NameSignUpPage";
import { PhoneSignUpPage } from "@pages/signUpPage/PhoneSignUpPage";
import { TestStartPage } from "@pages/testPage/TestStartPage";
import { TestLayout } from "@layout/TestLayout";
import { TestPage } from "@pages/testPage/TestPage";
import { TestResultOkPage } from "@pages/testPage/TestResultOkPage";
import { TestResultNoPage } from "@pages/testPage/TestResultNoPage";
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
      { path: "testStart", element: <TestStartPage /> },
      {
        path: "signup",
        element: <SignUpLayout />, // DefaultLayout 하위에 SignUpLayout 중첩
        children: [
          { path: "", element: <SignUpPage /> },
          { path: "pw", element: <PwSignUpPage /> },
          { path: "name", element: <NameSignUpPage /> },
          { path: "phone", element: <PhoneSignUpPage /> },
        ],
      },
    ],
  },
  //헌혈견테스트쪽은 아예따로 뺐음 테스트 시작화면만 디폴트레이아웃에 속하도록함
  {
    path: "/test",
    element: <TestLayout />,
    children: [
      { path: "", element: <TestPage /> },
      { path: "resultOK", element: <TestResultOkPage /> },
      { path: "resultNO", element: <TestResultNoPage /> },
    ],
  },
]);
