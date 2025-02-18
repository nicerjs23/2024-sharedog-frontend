import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CommunityWrite.styled";
import ImageUpload from "@assets/icons/ImageUpload.svg";
import Circle from "@assets/icons/Circle.svg";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalText>
          <span>작성한 게시글이 등록되었어요!</span>
        </S.ModalText>
        <S.ModalButton onClick={onClose}>확인</S.ModalButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

const categories = ["긴급헌혈", "궁금해요", "얘기해요", "후기에요"];
const regions = ["서울", "인천", "경기", "강원", "경상", "충청", "전라", "제주"];
const bloodTypes = ["전체", "DEA 1-", "DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"];

export const CommunityWrite = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const isFormComplete = selectedCategory && selectedRegion && selectedBloodType
    && title && content && selectedImages.length > 0;

  const handleImageUpload = (event) => {
    if(!event.target.files) return;

    const files = Array.from(event.target.files);

    if (selectedImages.length + files.length > 3) {
      alert("이미지는 최대 3개까지 업로드할 수 있습니다.");
      return;
    }
  
    const newImages = [];
  
    files.forEach((file) => {
      const reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성
      reader.readAsDataURL(file); // 파일을 Base64 URL 형식으로 변환 (브라우저에서 미리보기용)
      reader.onload = () => {
        newImages.push(reader.result); // 변환된 이미지 URL을 배열에 추가
        if (newImages.length === files.length) {
          setSelectedImages((prev) => [...prev, ...newImages].slice(0, 3)); // 최대 3개까지 유지
        }
      };
    });
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    navigate("/community/search");
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Cancel onClick={handleCancel}>취소</S.Cancel>
            <S.Write>글쓰기</S.Write>
            <S.Upload
              isFormComplete={isFormComplete}
              onClick={() => {
                if(isFormComplete) setIsModalOpen(true);
              }}
            >
              등록
            </S.Upload>
          </S.Header>
          {/* 모달 */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <S.Category>
            <S.Title>카테고리</S.Title>
            <S.CateBox>
              {categories.map((category) => (
                <S.CateBtn 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  isSelected={selectedCategory === category} // 선택 여부 전달
                >
                  {category}
                </S.CateBtn>
              ))}
            </S.CateBox>
            <S.Line />
          </S.Category>
          <S.Region>
            <S.Title>지역</S.Title>
            <S.RegionBox>
              {regions.map((region) => (
                <S.RegionBtn 
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  isSelected={selectedRegion === region}
                >
                  {region}
                </S.RegionBtn>
              ))}
            </S.RegionBox>
            <S.Line />
          </S.Region>
          <S.Blood>
            <S.Title>혈액형</S.Title>
            <S.BloodBox>
              {bloodTypes.map((type) => (
                <S.BloodBtn 
                  key={type}
                  onClick={() => setSelectedBloodType(type)}
                  isSelected={selectedBloodType === type}
                >  
                  {type}
                </S.BloodBtn>
              ))}
            </S.BloodBox>
            <S.Line />
          </S.Blood>
          <S.Caution>
              <img src={Circle} alt="경고 메시지" />
              <span>욕설, 광고 등 운영정책 위반 시 제재를 받을 수 있어요.</span>
          </S.Caution>
          <S.WriteTitle>
            <S.Title>제목</S.Title>
            <S.TitlePlace
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.WriteTitle>
          <S.WriteMain>
            <S.Title>내용</S.Title>
            <S.MainPlace
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </S.WriteMain>
          <S.ImageContainer>
            <S.Title>이미지</S.Title>
            <S.Explain>이미지 파일 (JPG, PNG, GIF)을 최대 3개를 첨부할 수 있어요.</S.Explain>
            <S.ImageList>
            {selectedImages.map((image, index) => (
              <S.ImagePreview key={index}>
                <img src={image} alt={`업로드된 이미지 ${index + 1}`} />
                <S.RemoveButton onClick={() => handleRemoveImage(index)}>×</S.RemoveButton>
              </S.ImagePreview>
            ))}
            
            {selectedImages.length < 3 && (
              <S.UploadBox>
                <label htmlFor="fileUpload">
                  <img src={ImageUpload} alt="이미지 업로드" />
                </label>
                <input
                  id="fileUpload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </S.UploadBox>
            )}
          </S.ImageList>
          </S.ImageContainer>
        </S.Container>
      </S.Wrapper>
    </>
  )
};