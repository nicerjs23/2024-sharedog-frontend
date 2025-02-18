import { useState, React } from "react";
import * as S from "./CommunityWrite.styled";
import ImageUpload from "@assets/icons/ImageUpload.svg";
import Circle from "@assets/icons/Circle.svg";

const categories = ["긴급헌혈", "궁금해요", "얘기해요", "후기에요"];
const regions = ["서울", "인천", "경기", "강원", "경상", "충청", "전라", "제주"];
const bloodTypes = ["전체", "DEA 1-", "DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"];

export const CommunityWrite = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

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

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Cancel>취소</S.Cancel>
            <S.Write>글쓰기</S.Write>
            <S.Upload>등록</S.Upload>
          </S.Header>
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
            <S.TitlePlace placeholder="제목을 입력해주세요." />
          </S.WriteTitle>
          <S.WriteMain>
            <S.Title>내용</S.Title>
            <S.MainPlace placeholder="내용을 입력해주세요." />
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