import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  max-height: 200px; /* 최대 높이 설정 */
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 16px auto 5px;
  gap: 9px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6b6b;
  color: white;
  width: 41px;
  height: 19px;
  border-radius: 12px;
  font-family: "SUIT", sans-serif;
  font-weight: 500;
  font-size: 8px;
`;

export const Tag = styled.div`
  display: flex;
  width: 32px;
  height: 19px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-family: "SUIT", sans-serif;
  font-weight: 500;
  font-size: 8px;
  border: 0.397px solid #ff6969;
  background: #fff;
  color: #ff6969;
`;

export const DateText = styled.div`
  font-size: 10px;
  font-family: "SUIT", sans-serif;
  font-weight: 500;
  color: #868e96;
`;

export const Title = styled.h3`
  font-family: "SUIT", sans-serif;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Writer = styled.div`
  font-family: "SUIT", sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #868e96;
  flex-shrink: 0;
`;

export const Body = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$hasImage ? "space-between" : "center")};
  align-items: center;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 84px;
  height: 52px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.p`
  display: flex;
  width: ${(props) => (props.$hasImage ? "70%" : "100%")};
  height: 52px;
  overflow: hidden;
  font-family: "SUIT", sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #000;
  line-height: 15px;
  margin: 4px 0 12px;
`;

export const Footer = styled.div`
  font-family: "SUIT", sans-serif;
  font-weight: 500;
  display: flex;
  width: 100%;
  height: 27px;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background: rgba(255, 105, 105, 0.08);
`;

export const FooterIcon = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 9px;
`;

export const LikeCount = styled.div`
  display: flex;
  align-items: center;
  color: #9c9ca1;
  font-size: 8px;
  gap: 5px;
`;

export const CommentCount = styled.div`
  display: flex;
  align-items: center;
  color: #9c9ca1b2;
  font-size: 8px;
  gap: 5px;
`;

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const HeartBtn = styled(ButtonBase)`
  color: #ff6969;
  font-size: 13px;
`;

export const CommentBtn = styled(ButtonBase)`
  color: #3e3e42b1;
  font-size: 15px;
`;
