import * as S from './PetCard.styled';
import Medal from '@assets/icons/medal.svg';
import PetProfile from '@assets/images/petprofile.png';
import Pencil from '@assets/icons/pencil.svg';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 가져오기

export const PetCard = ({
  id,
  profileImage,
  represent,
  name,
  age,
  weight,
  gender,
  neutered,
  bloodType,
}) => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleEdit = () => {
    navigate('/petedit', {
      state: {
        id,
        represent,
        profileImage,
        name,
        age,
        weight,
        gender,
        neutered,
        bloodType,
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Card>
        <S.CardContents>
          <S.NameSection>
            {represent && <img src={Medal} alt="대표강아지 아이콘" />}
            {name}
            <S.ProfileEdit onClick={handleEdit}>
              <img src={Pencil} alt="연필 아이콘" />
              프로필 수정
            </S.ProfileEdit>
          </S.NameSection>
          <S.TitleSection>
            <S.TitleText>
              나이:<S.DetailText> {age}</S.DetailText>
            </S.TitleText>
            <S.TitleText>
              몸무게:<S.DetailText> {weight}kg</S.DetailText>
            </S.TitleText>
            <S.TitleText>
              성별: <S.DetailText>{gender}</S.DetailText>
            </S.TitleText>
            <S.TitleText>
              중성화:
              <S.DetailText>
                {' '}
                {neutered ? '수술 진행' : '수술 미진행'}
              </S.DetailText>
            </S.TitleText>
            <S.TitleText>
              혈액형:<S.DetailText> {bloodType}</S.DetailText>
            </S.TitleText>
          </S.TitleSection>
        </S.CardContents>

        <S.ProfileImage
          src={profileImage || PetProfile}
          alt="강아지 프로필사진"
        />
      </S.Card>
    </S.Wrapper>
  );
};

export default PetCard; // default로 내보내기
