import styled from 'styled-components';
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  /* position: fixed; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  margin-bottom: 98px;
`;

export const BtnWrapper = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
`;
export const Header = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const Contents = styled.div`
  display: flex;
  width: 88%;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
`;
export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(234, 234, 234, 0.8);
  background: #fff;
  height: 88px;
  padding: 0 17px;
  box-sizing: border-box;
  gap: 16px;
`;
export const ProfileImg = styled.img`
  display: flex;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProfileName = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 1.125rem;
`;

export const ProfileEditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 20px;
  gap: 4px;

  border-radius: 10px;
  background-color: #f6f7f8;

  img {
    display: flex;
    width: 16px;
    height: 16px;
  }

  p {
    color: #8490a0;
    font-family: ${({ theme }) =>
      theme.fonts.SUITSemiBold['font-family']};
    font-size: 0.625rem;
  }
`;

export const MyPageCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 26px;
  box-sizing: border-box;

  border-radius: 12px;
  border: 1px solid #eff1f3;
  background: #fff;
  box-shadow: 0px 7.679px 19.197px 0px rgba(154, 170, 207, 0.1);

  gap: 20px;
`;
export const CardTitle = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray400};
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 0.75rem;
`;
export const CardNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 6px;
  box-sizing: border-box;
`;

export const CardNavContents = styled.div`
  display: flex;
  gap: 8px;

  &.Icon {
    width: 16px;
    height: auto;
  }
`;

export const CardNavText = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.875rem;
`;
