import styled from 'styled-components';
import myBackIcon from '@assets/icons/Next.svg';
const MyNextBtn = () => {
  return <BtnWrapper src={myBackIcon} alt="다음아이콘" />;
};

export default MyNextBtn;

const BtnWrapper = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
`;
