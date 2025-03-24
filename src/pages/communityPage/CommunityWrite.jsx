import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CommunityWrite.styled";
import ImageUpload from "@assets/icons/ImageUpload.svg";
import Caution from "@assets/icons/WriteCaution.svg";
import axiosInstance from "@apis/axiosInstance";

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
  const [newPostId, setNewPostId] = useState(null);
  const navigate = useNavigate();

  const isFormComplete = selectedCategory && selectedRegion && selectedBloodType
    && title && content;

  const handleImageUpload = (event) => {
    if(!event.target.files) return;

    const files = Array.from(event.target.files);

    if (selectedImages.length + files.length > 3) {
      alert("이미지는 최대 3개까지 업로드할 수 있습니다.");
      return;
    }
  
    const newImagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file), // ✅ 미리보기용 URL 생성
    }));
  
    setSelectedImages((prev) => [...prev, ...newImagePreviews].slice(0, 3));
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => {
      // ✅ 삭제된 이미지의 URL을 해제해서 메모리 누수를 방지
      URL.revokeObjectURL(prev[index].preview);
      
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleCancel = () => {
    navigate("/community");
  }
  
  const handleSubmit = async () => {
    if (!isFormComplete) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", selectedCategory);
    formData.append("region", selectedRegion);
    formData.append("blood", selectedBloodType);

    selectedImages.forEach((image, index) => {
      formData.append(`image_${index + 1}`, image.file); // File 객체 추가
    });

    try {
      const response = await axiosInstance.post("/api/community/home", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ 게시글 등록 성공:", response.data);
      setNewPostId(response.data.id);
      setIsModalOpen(true);
    } catch (error) {
      console.error("❌ 게시글 등록 실패:", error);
      alert("게시글 등록에 실패했습니다.");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    if (newPostId) {
      navigate(`/community/${newPostId}`, { replace: true }); // ✅ 상세 페이지로 이동
    } else {
      navigate("/community"); // 혹시 ID가 없으면 기본 목록 페이지로 이동
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Cancel onClick={handleCancel}>취소</S.Cancel>
            <S.Write>글쓰기</S.Write>
            <S.Upload
              isFormComplete={isFormComplete}
              onClick={handleSubmit}
            >
              등록
            </S.Upload>
          </S.Header>
          {/* 모달 */}
          <Modal isOpen={isModalOpen} onClose={handleModalClose} />
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
              <img src={Caution} alt="경고 메시지" />
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
              placeholder="내용을 입력해주세요. (*최소 5자 이상)"
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
                <img src={image.preview} alt={`업로드된 이미지 ${index + 1}`} />
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