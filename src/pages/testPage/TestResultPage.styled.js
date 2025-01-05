import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 540px;
`;

export const ContentsBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
//맨위 타이틀
export const Title = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.375rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
//이미지 크기조절할 디브
export const TestPng = styled.div`
  display: flex;
  margin-top: 63px;
  img {
    width: 161px;
    height: auto;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 77.6%;
  height: 1px;
  background-color: #ffe0e0;
  margin-top: 25px;
  margin-bottom: 36px;
`;
//설명박스
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.6%;
  gap: 13px;
  box-sizing: border-box;
  padding: 24px 14px;
  border-radius: 10px;
  background: #fff3f3;
  box-shadow: 0px 4px 4px 0px rgba(218, 136, 136, 0.1);
`;

export const InfoTextBox = styled.div`
  display: flex;
  gap: 10px;
`;
//피모양 아이콘 크기조절할 디브
export const InfoIcon = styled.div`
  display: flex;
  img {
    width: 16px;
    height: 16px;
  }
`;
export const InfoText = styled.div`
  display: flex;
  color: #000000;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

//버튼 감싸는 디브
export const NavBtnBox = styled.div`
  display: flex;
  gap: 14px;
  width: 88%;
  margin-bottom: 56px;
`;
export const Btn = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #ffd7d7;
  color: #ff6969;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};

  /* props로 조건부 스타일 적용 */
  ${({ props }) =>
    props === "ok" &&
    `
      background-color: #FF6969;
      color: #FFFFFF;
    `}
`;
