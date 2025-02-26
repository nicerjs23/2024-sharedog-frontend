import * as S from "./CommonFooter.styled";
import HomeIcon from "@assets/icons/HomeIcon.svg";
import HomeIconActive from "@assets/icons/HomeIconActive.svg";
import CommuIcon from "@assets/icons/CommunityIcon.svg";
import CommuIconActive from "@assets/icons/CommunityIconActive.svg";
import ChatIcon from "@assets/icons/ChatIcon.svg";
import ChatIconActive from "@assets/icons/ChatIconActive.svg";
import MyIcon from "@assets/icons/MyIcon.svg";
import MyIconActive from "@assets/icons/MyIconActive.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { useLocation } from "react-router-dom";

export const CommonFooter = () => {
  const { pathname } = useLocation(); // 현재 경로 가져오기
  const { goTo } = useCustomNavigate();

  const handleIconClick = (path) => {
    goTo(path); // 경로 이동
  };

  return (
    <S.Wrapper>
      <S.Icons>
        <S.IconBox onClick={() => handleIconClick("/main")}>
          <S.Icon
            src={pathname === "/main" ? HomeIconActive : HomeIcon}
            alt="홈아이콘"
          />
          <S.IconText $isActive={pathname === "/main"}>홈</S.IconText>
        </S.IconBox>
        <S.IconBox onClick={() => handleIconClick("/community")}>
          <S.Icon
            src={
              pathname === "/community" ? CommuIconActive : CommuIcon
            }
            alt="커뮤니티아이콘"
          />
          <S.IconText $isActive={pathname === "/community"}>
            커뮤니티
          </S.IconText>
        </S.IconBox>
        <S.IconBox onClick={() => handleIconClick("/chatList")}>
          <S.Icon
            src={pathname === "/chatList" ? ChatIconActive : ChatIcon}
            alt="채팅아이콘"
          />
          <S.IconText $isActive={pathname === "/chatList"}>
            채팅
          </S.IconText>
        </S.IconBox>
        <S.IconBox onClick={() => handleIconClick("/mypage")}>
          <S.Icon
            src={pathname === "/mypage" ? MyIconActive : MyIcon}
            alt="마이페이지아이콘"
          />
          <S.IconText $isActive={pathname === "/mypage"}>
            마이페이지
          </S.IconText>
        </S.IconBox>
      </S.Icons>
    </S.Wrapper>
  );
};
