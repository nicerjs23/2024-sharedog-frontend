import * as S from "./ChatDetail.styled";
import backIconNew from "@assets/icons/backIconNew.svg";

import ChatFooter from "@components/chat/ChatFooter";
import MyChat from "@components/chat/MyChat";
import PeerChat from "@components/chat/PeerChat";
import postImg2 from "@assets/images/postImg2.png";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
export const ChatDetailPage = () => {
  const { goTo, goBack } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.Contents>
        {/* 채팅헤더 */}
        <S.ChatHeader>
          <S.BackIcon
            src={backIconNew}
            alt="뒤로가기"
            onClick={goBack}
          />
          <S.HeaderName>채팅이름</S.HeaderName>
          <S.HeaderPromise>약속잡기</S.HeaderPromise>
        </S.ChatHeader>
        {/* 날짜 */}
        <S.Date>2025년 02월 24일</S.Date>
        {/* 채팅 */}
        <S.ChatContainer>
          <MyChat
            time="12:11"
            text="채팅입니다. 자고싶습니다.채팅입니다. 자고싶습니다.채팅입니다. 자고싶습니다."
          />
          <MyChat time="12:12" text="채팅입니다." />
          <MyChat time="12:17" text="." />
        </S.ChatContainer>

        <S.ChatContainer>
          <PeerChat
            img={postImg2}
            time="12:11"
            text="채팅입니다. 자고싶습니다.채팅입니다. 자고싶습니다.채팅입니다. 자고싶습니다."
          />
          <PeerChat img={postImg2} time="12:13" text="상대방채팅" />
        </S.ChatContainer>
        <S.ChatContainer>
          <MyChat time="12:11" text="내채팅과" />
        </S.ChatContainer>
        <S.ChatContainer>
          <PeerChat
            img={postImg2}
            time="12:11"
            text="상대방채팅 번갈아서"
          />
        </S.ChatContainer>
        <S.ChatContainer>
          <PeerChat
            img={postImg2}
            time="12:11"
            text="스크롤 테스트입니다."
          />
          <PeerChat img={postImg2} time="12:13" text="상대방채팅" />
        </S.ChatContainer>
        <S.Date>2025년 02월 25일</S.Date>
        <S.ChatContainer>
          <MyChat time="12:11" text="스크롤 " />
        </S.ChatContainer>
        <S.ChatContainer>
          <PeerChat
            img={postImg2}
            time="12:11"
            text="스크롤을 하자 스크롤을하자 "
          />
          <PeerChat
            img={postImg2}
            time="03:13"
            text="아...자고싶다"
          />
        </S.ChatContainer>
      </S.Contents>
      <ChatFooter />
    </S.Wrapper>
  );
};
