import styled from "styled-components";
import cameraIcon from "@assets/icons/ChatCamera.svg";
import sendIcon from "@assets/icons/ChatSend.svg";
import xIcon from "@assets/icons/X.svg";
import { useState } from "react";
const ChatFooter = () => {
  const [previewImage, setPreviewImage] = useState(null);
  // 파일 선택 시 미리보기 설정
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // 이미지 URL 저장
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 미리보기 삭제
  const handleRemovePreview = () => {
    setPreviewImage(null);
  };
  return (
    <Wrapper>
      {/* 사진 미리보기 (이미지 있을 때만 보이게) */}
      {previewImage && (
        <PreviewContainer>
          <CloseButton onClick={handleRemovePreview}>
            <img src={xIcon} alt="닫기" />
          </CloseButton>
          <PreviewImage src={previewImage} alt="미리보기" />
        </PreviewContainer>
      )}
      <ChatSendBox>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <img
          src={cameraIcon}
          alt="카메라아이콘"
          onClick={() => document.getElementById("fileInput").click()}
          style={{ width: "20px", height: "20px" }}
        />
        <ChatText placeholder="메시지를 작성해주세요." />
        <img
          src={sendIcon}
          alt="전송아이콘"
          style={{ width: "10px", height: "10px" }}
        />
      </ChatSendBox>
    </Wrapper>
  );
};

export default ChatFooter;

export const Wrapper = styled.section`
  /* border: 1px solid green; */
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 540px;
  height: 82px; //67+15px
  padding: 0 18px;
  padding-bottom: 15px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04);
`;

export const ChatSendBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #fff3f3;
  padding: 0 15px 0 13px;
  box-sizing: border-box;
  gap: 8px;
`;

export const ChatText = styled.input`
  width: 100%;
  all: unset;
  color: #2a2a2a;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
  flex: 1;
  &::placeholder {
    color: #9c9ca1;
  }
`;

/* 🏞 사진 미리보기 (푸터 바로 위) */
const PreviewContainer = styled.div`
  position: fixed;
  bottom: 82px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 540px;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
`;
/* X 버튼 */
const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;

  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
  }
`;

/* 🖼 미리보기 이미지 */
const PreviewImage = styled.img`
  max-width: 300px;
  max-height: 150px;
  border-radius: 10px; /* ✅ 둥글게 만들기 */
`;
