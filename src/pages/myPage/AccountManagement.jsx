import { useState, useEffect } from 'react';
import * as S from './AccountManagement.styled';
import { useNavigate } from 'react-router-dom';
import Next from '@assets/icons/Next.svg';
import { useKakaoAuth } from '@hooks/useKakaoAuth';
import axios from '@apis/axiosInstance';
import backIconNew from '@assets/icons/backIconNew.svg';

export const AccountManagement = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] =
    useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const BackClick = () => {
    navigate(-1);
  };

  const { logout } = useKakaoAuth();

  const handleLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
    navigate('/');
  };

  const handleWithdraw = async () => {
    try {
      await axios.delete('/api/accounts/delete-account');
      //console.log('회원 탈퇴 성공!');
      logout();
      navigate('/');
    } catch (error) {
      //console.error('회원 탈퇴 실패:', error);
    } finally {
      setIsWithdrawModalOpen(false);
    }
  };

  // 사용자 정보 가져오기
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('/api/accounts/user-check');
      //console.log('API 응답 전체 데이터:', response.data);
      const { email } = response.data; // 변경된 API 구조에 맞게 수정
      setEmail(email);
    } catch (error) {
      //console.error('사용자 정보 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton>
          <img
            src={backIconNew}
            alt="백 버튼"
            onClick={BackClick}
            style={{ height: '17px', width: 'auto' }}
          />
        </S.BackButton>
        <div>계정 관리</div>
        <S.Blank></S.Blank>
      </S.Header>
      <S.InfoBox>
        <S.CategoryText>계정 정보</S.CategoryText>
        <S.CategoryDetail>
          로그인 계정
          <S.MailText> {email && `${email}`}</S.MailText>
        </S.CategoryDetail>
        <S.CategoryText>계정 관리</S.CategoryText>
        <S.CategoryDetail onClick={() => setIsLogoutModalOpen(true)}>
          로그아웃
          <img
            src={Next}
            alt="다음 아이콘"
            style={{ height: '16px', width: 'auto' }}
          />
        </S.CategoryDetail>
        <S.CategoryDetail
          onClick={() => setIsWithdrawModalOpen(true)}
        >
          회원 탈퇴{' '}
          <img
            src={Next}
            alt="다음 아이콘"
            style={{ height: '16px', width: 'auto' }}
          />
        </S.CategoryDetail>
      </S.InfoBox>

      {/* 로그아웃 모달 */}
      {isLogoutModalOpen && (
        <S.ModalOverlay>
          <S.ModalBox>
            <p>로그아웃 하시겠어요?</p>
            <S.ModalButtonContainer>
              <S.ModalButton
                onClick={() => setIsLogoutModalOpen(false)}
              >
                취소
              </S.ModalButton>
              <S.ModalButton onClick={handleLogout}>
                로그아웃
              </S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalBox>
        </S.ModalOverlay>
      )}

      {/* 회원 탈퇴 모달 */}
      {isWithdrawModalOpen && (
        <S.ModalOverlay>
          <S.ModalBox>
            <p>더 이상 이용을 원치 않으신가요?</p>
            <S.ModalButtonContainer>
              <S.ModalButton
                onClick={() => setIsWithdrawModalOpen(false)}
              >
                취소
              </S.ModalButton>
              <S.ModalButton onClick={handleWithdraw}>
                탈퇴
              </S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
};
