import * as S from "./TestStartPage.styled";
import xIcon from "@assets/icons/X.svg";
import testLogo from "@assets/images/testStartLogo.png";
import TestStartPgBtn from "@components/test/TestStartPgBtn";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

import useKakaoShare from "@hooks/useKaKaoShare";

export const TestStartPage = () => {
  const { goTo } = useCustomNavigate();
  const { shareKakao } = useKakaoShare();
  return (
    <S.Wrapper>
      <S.Header>
        {/* x버튼 홈화면으로 이동시키고 replace:true걸어야될듯 */}
        <S.XBtn onClick={() => goTo("/main", { replace: true })}>
          <img src={xIcon} alt="x버튼" />
        </S.XBtn>
      </S.Header>
      <S.TestLogoBox>
        <S.TestText>
          <div style={{ display: "block" }}>
            우리집 강아지는
            <br />
            <span>헌혈견</span>이 될 수 있을까?
          </div>
        </S.TestText>
        <S.TestLogo>
          <img src={testLogo} alt="강아지의사로고" />
        </S.TestLogo>
      </S.TestLogoBox>
      <S.TestBtnBox>
        <TestStartPgBtn
          $bgColor="#FF6969"
          $textColor="#FFFFFF"
          text="테스트 시작하기"
          onClick={() => goTo("/test")}
        />
        <TestStartPgBtn
          $bgColor="#FFD7D7"
          $textColor="#FF6969"
          text="테스트 공유하기"
          onClick={() =>
            shareKakao({
              title: "우리집 강아지는 헌혈견이 될 수 있을까?",
              description: "테스트를 통해 확인해보세요!",
              imageUrl:
                "https://2024-sharedog-frontend.vercel.app/testThumbnail.png",
              pageUrl:
                "https://2024-sharedog-frontend.vercel.app/testStart",
            })
          }
        />
      </S.TestBtnBox>
    </S.Wrapper>
  );
};
