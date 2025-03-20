import * as S from './LegalDocument.styled';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <S.Header text="개인정보 수집 및 이용동의" />
      <S.Wrapper>
        <S.ContentsWrapper>
          <S.TextContainer>
            <S.Article>
              <S.ArticleTitle>제 1조 (목적)</S.ArticleTitle>
              <S.ArticleBody>
                ‘라이프테일’(이하 ‘회사’)이 운영하는 ‘나눠주개’(이하
                ‘서비스’)는 개인정보보호법 제30조에 의거하여 이용자의
                개인정보 및 권익을 보호하고 이와 관련한 고충 및 불만을
                신속하게 처리하기 위하여 아래와 같이 개인정보
                처리방침을 수립하여 운영하고 있습니다. 우리 회사는
                관계법령에서 규정하고 있는 책임과 의무를 준수하고
                실천하기 위해 최선의 노력을 하고 있습니다.
                <div style={{ width: '100%', textAlign: 'end' }}>
                  시행일: 2025.03.21
                </div>
              </S.ArticleBody>
            </S.Article>

            <S.Article>
              <S.ArticleTitle>
                제 2조 (개인정보 처리의 원칙)
              </S.ArticleTitle>
              <S.ArticleBody>
                개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의
                개인정보를 수집할 수 있으며 수집된 개인정보는 개인의
                동의가 있는 경우에 한해 제3자에게 제공될 수
                있습니다.단, 법령의 규정 등에 의해 적법하게 강제되는
                경우 회사는 수집한 이용자의 개인정보를 사전에 개인의
                동의 없이 제 3자에게 제공할 수도 있습니다.
              </S.ArticleBody>
            </S.Article>

            <S.Article>
              <S.ArticleTitle>제 3조 (본 방침의 공개)</S.ArticleTitle>
              <S.ArticleBody>
                <ol>
                  <li>
                    회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수
                    있도록 사이트 내 연결 화면을 통해 본 방침을
                    공개하고 있습니다.
                  </li>
                  <li>
                    회사는 제 1항에 따라 본 방침을 공개하는 경우 글자
                    크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게
                    확인할 수 있도록 합니다.
                  </li>
                </ol>
              </S.ArticleBody>
            </S.Article>

            <S.Article>
              <S.ArticleTitle>제 4조 (본 방침의 변경)</S.ArticleTitle>
              <S.ArticleBody>
                <ol>
                  <li>
                    본 방침은 개인정보 관련 법령, 지침, 고시 또는
                    정부나 회사 서비스의 정책이나 내용의 변경에 따라
                    개정될 수 있습니다.
                  </li>
                  <li>
                    회사는 제 1항에 따라 본 방침을 개정하는 경우 다음
                    각 호 하나 이상의 방법으로 공지합니다.
                    <div style={{ paddingLeft: '5px' }}>
                      가. 회사가 운영하는 사이트 내에서 공지사항 또는
                      별도의 창을 통해 공지하는 방법
                    </div>
                    <div style={{ paddingLeft: '5px' }}>
                      나. 서면/모사전송/전자우편 또는 이와 비슷한
                      방법으로 이용자에게 공지하는 방법
                    </div>
                  </li>
                  <li>
                    회사는 제 2항의 공지는 본 방침 개정의 시행일로부터
                    최소 7일 이전에 공지합니다. 다만, 이용자 권리의
                    중요한 변경이 있을 경우에는 최소 30일 전에
                    공지합니다.
                  </li>
                </ol>
              </S.ArticleBody>
            </S.Article>

            <S.Article>
              <S.ArticleTitle>
                제 5조 (회원가입을 위한 정보)
              </S.ArticleTitle>
              <S.ArticleBody>
                회사는 이용자의 회사 서비스에 대한 회원가입을 위하여
                다음과 같은 정보를 수집합니다.
                <ol>
                  <li>
                    필수 수집 정보: 이메일 주소, 비밀번호, 닉네임
                  </li>
                  <li>선택 수집 정보: 프로필 사진, 반려견 정보</li>
                </ol>
              </S.ArticleBody>
            </S.Article>
          </S.TextContainer>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
};
