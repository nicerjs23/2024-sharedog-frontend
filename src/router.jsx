import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { SignUpLayout } from "@layout/SignUpLayout";

import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/loginPage/WelcomePage";
// import { SignUpPage } from "@pages/signUpPage/SignUpPage";
import SignupFormContainer from "@pages/signUpPage/SignupFormContainer";
import { LoginPage } from "@pages/loginPage/LoginPage";
import { CommunityPage } from "@pages/communityPage/Community";
import { CommunitySearch } from "@pages/communityPage/CommunitySearch";
import { ChatPage } from "@pages/chatPage/ChatPage";
import { MyPage } from "@pages/myPage/MyPage";
import { AccountManagement } from "@pages/myPage/AccountManagement";
import { PetInfo } from "@pages/myPage/PetInfo";
import { PetEdit } from "@pages/myPage/PetEdit";
import { PetAdd } from "@pages/myPage/PetAdd";
import { Reservation } from "@pages/myPage/Reservation";
// import { PwSignUpPage } from "@pages/signUpPage/PwSignUpPage";
// import { NameSignUpPage } from "@pages/signUpPage/NameSignUpPage";
// import { PhoneSignUpPage } from "@pages/signUpPage/PhoneSignUpPage";
import { ProSignUpPage } from "@pages/signUpPage/ProSignUpPage";
import { AgeSignUpPage } from "@pages/signUpPage/AgeSignUpPage";
import { WeightSignUpPage } from "@pages/signUpPage/WeightSignUpPage";
import { GenSignUpPage } from "@pages/signUpPage/GenSignUpPage";
import { LastSignUpPage } from "@pages/signUpPage/LastSignUpPage";
import { OpSignUpPage } from "@pages/signUpPage/OpSignUpPage";
import { BloodSignUpPage } from "@pages/signUpPage/BloodSignUpPage";
import { TestStartPage } from "@pages/testPage/TestStartPage";
import { TestLayout } from "@layout/TestLayout";
import { TestPage } from "@pages/testPage/TestPage";
import { TestResultOkPage } from "@pages/testPage/TestResultOkPage";
import { TestResultNoPage } from "@pages/testPage/TestResultNoPage";
import { KakaoCallbackPage } from "@pages/loginPage/KakaoCallbackPage";
import { CommunityWrite } from "@pages/communityPage/CommunityWrite";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, //완전 기본 세팅 + 공통푸터관리
    children: [
      { path: "", element: <WelcomePage /> },
      { path: "main", element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "kakao/callback", element: <KakaoCallbackPage /> },
      //나중에 라우터 중첩으로 변경할거면 따로 빼기 지금은 푸터연결위해 임시로 해둠
      { path: "chat", element: <ChatPage /> },
      { path: "mypage", element: <MyPage /> },
      { path: "accountmanagement", element: <AccountManagement /> },
      { path: "petinfo", element: <PetInfo /> },
      { path: "petedit", element: <PetEdit /> },
      { path: "petadd", element: <PetAdd /> },
      { path: "reservation", element: <Reservation /> },
      { path: "testStart", element: <TestStartPage /> },
      {
        path: "signup",
        element: <SignUpLayout />,
        children: [
          { path: "", element: <SignupFormContainer /> }, // 기본 회원가입 단계 관리
        ],
      },

      // 🔥 추가 회원가입 정보 (개별 페이지)
      { path: "signup/pro", element: <ProSignUpPage /> },
      { path: "signup/age", element: <AgeSignUpPage /> },
      { path: "signup/weight", element: <WeightSignUpPage /> },
      { path: "signup/gen", element: <GenSignUpPage /> },
      { path: "signup/op", element: <OpSignUpPage /> },
      { path: "signup/blood", element: <BloodSignUpPage /> },

      // 🔥 최종 회원가입 완료 페이지
      { path: "signup/last", element: <LastSignUpPage /> },
    ],
  },
  //헌혈견테스트쪽은 아예따로 뺐음 테스트 시작화면만 디폴트레이아웃에 속하도록함
  {
    path: "community",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <CommunityPage /> },
      { path: "search", element: <CommunitySearch /> },
      { path: "write", element: <CommunityWrite /> },
    ],
  },
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
