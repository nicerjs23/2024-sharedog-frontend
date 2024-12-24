import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) =>
    theme.colors.pageBgColor}; */ //디폴트레이아웃에 설정함

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  /* height: calc(var(--vh, 1vh) * 100); */
  border: 1px solid green;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87.73%;
  height: 34px;
  margin: 0 auto;
  margin-top: 5px;
  height: 34px;
  /* padding: 0 23px; */
  /* border: 1px solid green; */
`;
export const ProfileBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Profile = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 60px;
  background-color: #fff;
`;
export const ProfileText = styled.div`
  display: flex;
  color: #fff;
  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const AlarmBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
`;
