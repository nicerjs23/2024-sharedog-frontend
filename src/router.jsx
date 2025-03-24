import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '@layout/DefaultLayout';
import { SignUpLayout } from '@layout/SignUpLayout';

import { MainPage } from '@pages/mainPage/MainPage';
import { WelcomePage } from '@pages/loginPage/WelcomePage';
// import { SignUpPage } from "@pages/signUpPage/SignUpPage";
import SignupFormContainer from '@pages/signUpPage/SignupFormContainer';
import { LoginPage } from '@pages/loginPage/LoginPage';
import { CommunityNew } from '@pages/communityPage/CommunityNew';
import { CommunitySearch } from '@pages/communityPage/CommunitySearch';
import { ChatPage } from '@pages/chatPage/ChatPage';
import { MyPage } from '@pages/myPage/MyPage';
import { AccountManagement } from '@pages/myPage/AccountManagement';
import { PetInfo } from '@pages/myPage/PetInfo';
import { PetEdit } from '@pages/myPage/PetEdit';
import { PetAdd } from '@pages/myPage/PetAdd';
import { Reservation } from '@pages/myPage/Reservation';
// import { PwSignUpPage } from "@pages/signUpPage/PwSignUpPage";
// import { NameSignUpPage } from "@pages/signUpPage/NameSignUpPage";
// import { PhoneSignUpPage } from "@pages/signUpPage/PhoneSignUpPage";
import { ProSignUpPage } from '@pages/signUpPage/ProSignUpPage';
import { AgeSignUpPage } from '@pages/signUpPage/AgeSignUpPage';
import { WeightSignUpPage } from '@pages/signUpPage/WeightSignUpPage';
import { GenSignUpPage } from '@pages/signUpPage/GenSignUpPage';
import { LastSignUpPage } from '@pages/signUpPage/LastSignUpPage';
import { OpSignUpPage } from '@pages/signUpPage/OpSignUpPage';
import { BloodSignUpPage } from '@pages/signUpPage/BloodSignUpPage';
import { TestStartPage } from '@pages/testPage/TestStartPage';
import { TestLayout } from '@layout/TestLayout';
import { TestPage } from '@pages/testPage/TestPage';
import { TestResultOkPage } from '@pages/testPage/TestResultOkPage';
import { TestResultNoPage } from '@pages/testPage/TestResultNoPage';
import { KakaoCallbackPage } from '@pages/loginPage/KakaoCallbackPage';
import { CommunityWrite } from '@pages/communityPage/CommunityWrite';
import { CommunityDetail } from '@pages/communityPage/CommunityDetail';
import { PetSignUpLayout } from '@layout/PetSignUpLayout';
import { ChatDetailPage } from '@pages/chatPage/ChatDetailPage';
import { TermsPage } from '@pages/myPage/TermsPage';
import { PrivacyPolicyPage } from '@pages/myPage/PrivacyPolicyPage';
import { MyWrite } from '@pages/myPage/MyWrite';
import { BloodRule } from '@pages/mainPage/BloodRule';
import { BloodCaution } from '@pages/mainPage/BloodCaution';
import { BloodBenefit } from '@pages/mainPage/BloodBenefit';
import { CommunityPolicy } from '@pages/communityPage/CommunityPolicy';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />, //완전 기본 세팅 + 공통푸터관리
    children: [
      { path: '', element: <WelcomePage /> },
      { path: 'main', element: <MainPage /> },
      { path: 'bloodRule', element: <BloodRule /> },
      { path: 'bloodCaution', element: <BloodCaution /> },
      { path: 'bloodBenefit', element: <BloodBenefit /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'kakao/callback', element: <KakaoCallbackPage /> },
      { path: 'chatList', element: <ChatPage /> },
      { path: 'chat/:id', element: <ChatDetailPage /> },
      {
        path: 'mypage',

        children: [
          { index: true, element: <MyPage /> },
          {
            path: 'accountmanagement',
            element: <AccountManagement />,
          },
          { path: 'petinfo', element: <PetInfo /> },
          { path: 'petedit', element: <PetEdit /> },
          { path: 'petadd', element: <PetAdd /> },
          { path: 'mywrite', element: <MyWrite /> },
          { path: 'reservation', element: <Reservation /> },
          { path: 'terms', element: <TermsPage /> },
          { path: 'privacy', element: <PrivacyPolicyPage /> },
        ],
      },
      { path: 'testStart', element: <TestStartPage /> },

      {
        path: 'signup',
        element: <SignUpLayout />,
        children: [
          { path: '', element: <SignupFormContainer /> }, // 기본 회원가입 단계 관리
          {
            element: <PetSignUpLayout />,
            children: [
              { path: 'age', element: <AgeSignUpPage /> },
              { path: 'weight', element: <WeightSignUpPage /> },
              { path: 'gen', element: <GenSignUpPage /> },
              { path: 'op', element: <OpSignUpPage /> },
              { path: 'blood', element: <BloodSignUpPage /> },
            ],
          },
        ],
      },
      { path: 'signup/last', element: <LastSignUpPage /> },
      { path: 'signup/pro', element: <ProSignUpPage /> },
    ],
  },
  //헌혈견테스트쪽은 아예따로 뺐음 테스트 시작화면만 디폴트레이아웃에 속하도록함
  {
    path: 'community',
    element: <DefaultLayout />,
    children: [
      { path: '', element: <CommunityNew /> },
      { path: 'search', element: <CommunitySearch /> },
      { path: 'write', element: <CommunityWrite /> },
      { path: ':id', element: <CommunityDetail /> },
      { path: 'policy', element: <CommunityPolicy /> },
    ],
  },
  {
    path: '/test',
    element: <TestLayout />,
    children: [
      { path: '', element: <TestPage /> },
      { path: 'resultOK', element: <TestResultOkPage /> },
      { path: 'resultNO', element: <TestResultNoPage /> },
    ],
  },
]);
