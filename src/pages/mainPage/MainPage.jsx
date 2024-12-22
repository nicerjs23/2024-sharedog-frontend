import * as S from "./MainPage.styled";
import Medal from "../../components/main/Medal";
export const MainPage = () => {
  return (
    <S.MainWrapper>
      <S.Box>
        나눠주개 메인페이지
        <S.A>
          <Medal number={1} />
        </S.A>
        <S.A>
          <Medal number={65} />
        </S.A>
        <S.A>
          <Medal number={100} />
        </S.A>
      </S.Box>
      <S.Box>1</S.Box>
      {/* 🥇 메달 아이콘 추가 */}
    </S.MainWrapper>
  );
};
