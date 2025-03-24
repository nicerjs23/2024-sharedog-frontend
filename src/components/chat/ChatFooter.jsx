import styled from 'styled-components';
import cameraIcon from '@assets/icons/ChatCamera.svg';
import sendIcon from '@assets/icons/ChatSend.svg';
import xIcon from '@assets/icons/X.svg';
import { useState } from 'react';

const ChatFooter = ({ ws, currentUserEmail }) => {
  const [message, setMessage] = useState(''); // 입력된 텍스트
  const [previewImage, setPreviewImage] = useState(null); // 이미지 미리보기
  const [imageFile, setImageFile] = useState(null); // 실제 전송할 이미지 파일

  // 📌 메시지 입력 핸들러
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // 📌 이미지 업로드 핸들러
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // 이미지 URL 저장
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  // 📌 이미지 미리보기 삭제
  const handleRemovePreview = () => {
    setPreviewImage(null);
    setImageFile(null);
  };

  // 📌 메시지 전송
  const sendMessage = () => {
    if (!message.trim()) return; // 빈 메시지 전송 방지

    // ✅ 현재 시간 포맷 생성
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedTime = `${period} ${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, '0')}`;

    // ✅ 웹소켓으로 보낼 메시지 객체
    const messageData = JSON.stringify({
      message: message.trim(),
      sender_email: currentUserEmail,
      formatted_time: formattedTime, // ✅ 시간 추가
    });

    console.log('📤 웹소켓으로 메시지 전송:', messageData);

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(messageData);
    } else {
      console.error('❌ 웹소켓 연결이 닫혀 있음!');
    }

    setMessage(''); // 입력창 초기화
  };

  return (
    <Wrapper>
      {/* 📌 사진 미리보기 (있을 때만 표시) */}
      {previewImage && (
        <PreviewContainer>
          <CloseButton onClick={handleRemovePreview}>
            <img src={xIcon} alt="닫기" />
          </CloseButton>
          <PreviewImage src={previewImage} alt="미리보기" />
        </PreviewContainer>
      )}

      {/* 📌 메시지 입력 UI */}
      <ChatSendBox>
        {/* 이미지 업로드 버튼 */}
        {/* <input
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
        /> */}

        {/* 메시지 입력창 */}
        <ChatText
          placeholder="메시지를 작성해주세요."
          value={message}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()} // 엔터로 전송
        />

        {/* 전송 버튼 */}
        <img
          src={sendIcon}
          alt="전송아이콘"
          onClick={sendMessage}
          style={{ width: '15px', height: '15px' }}
        />
      </ChatSendBox>
    </Wrapper>
  );
};

export default ChatFooter;

// ✅ 스타일 코드 (기존과 동일)
export const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 540px;
  height: 82px;
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
    theme.fonts.SUITMedium['font-family']};
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
  border-radius: 10px;
`;
