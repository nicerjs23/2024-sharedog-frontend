import * as S from "./MainPage.styled";
import Medal from "@components/main/Medal";
import MainSlider from "@components/main/MainSlider";
import BellIcon from "@assets/icons/BellIcon.svg";
export const MainPage = () => {
  // <Medal number={1} />
  {
    /* 🥇 메달 아이콘 추가 */
  }
  return (
    <S.MainWrapper>
      <S.SliderBox>
        <S.Header>
          <S.ProfileBox>
            <S.Profile />
            <S.ProfileText>로그인하기</S.ProfileText>
          </S.ProfileBox>
          <S.AlarmBox>
            <img src={BellIcon} />
          </S.AlarmBox>
        </S.Header>
        <MainSlider />
      </S.SliderBox>
    </S.MainWrapper>
  );
};
