import React from "react";
import styled from "styled-components";

const Comment = ({ writer, profile, content, created_at }) => {
    return (
        <CommentWrapper>
            <CommentLeft>
                <Image>
                    <img src={profile} alt="프로필 이미지" />
                </Image>
            </CommentLeft>
            <CommentContainer>
                <CommentMain>
                    <CommentContentTop>
                        <Writer>{writer}</Writer>
                        <Time>{created_at}</Time>
                    </CommentContentTop>
                    <CommentContentBottom>
                        <Text>{content}</Text>
                    </CommentContentBottom>
                </CommentMain>
                <ChatBtn>
                    <span>채팅하기</span>
                </ChatBtn>
            </CommentContainer>   
        </CommentWrapper>
    )
};

export default Comment;

const CommentWrapper = styled.div`
    display: flex;
    width: 88%;
    align-items: center;
    gap: 10px;
`;

const CommentLeft = styled.div`
    display: flex;
    width: 20%;
`;

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 80%;
        border-radius: 38px;
        background: url(<path-to-image>) lightgray 50% / cover no-repeat;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    }
`;

const CommentContainer = styled.div`
    display: flex;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #EAEAEA;
    background: #FFF;
    justify-content: space-between;
    align-items: center;
    padding: 9px 10px;
`;

const CommentMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const CommentContentTop = styled.div`
    display: flex;
    gap: 6px;
`;

const CommentContentBottom = styled.div`
    width: 100%;
`;

const Writer = styled.div`
    color: #000;
    font-family: SUIT;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const Text = styled.div`
    color: #000;
    font-family: SUIT;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Time = styled.div`
    color: #ADADAD;
    font-family: SUIT;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const ChatBtn = styled.div`
    display: flex;
    width: 41px;
    height: 19px;
    justify-content: center;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #FF6969;

    span {
        color: #FFF;
        text-align: center;
        font-family: SUIT;
        font-size: 6.706px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

