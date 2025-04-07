import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { CommonFooter } from '@components/common/CommonFooter';
import { useShouldHideFooter } from '@hooks/useShouldHideFooter';

export const DefaultLayout = () => {
  //푸터제외할 경로 관리 useLocation 커스텀 훅useShouldHideFooter 만듬
  const shouldHideFooter = useShouldHideFooter();

  return (
    <>
      <Wrapper>
        <Outlet />
        {!shouldHideFooter && <CommonFooter />}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  min-height: calc(var(--vh, 1vh) * 100);
`;
