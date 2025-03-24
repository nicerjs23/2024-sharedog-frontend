import { useLocation } from 'react-router-dom';

// Footer 숨김 여부를 판단하는 커스텀 훅
export const useShouldHideFooter = () => {
  const location = useLocation();

  // Footer를 숨길 정적 경로: "/login", "/" 등 정적 경로 추가
  const hideFooterStatic = [
    '/',
    '/login',
    '/testStart',
    '/community/search',
    '/community/write',
    '/terms',
    '/privacy',
    '/bloodRule',
    '/bloodCaution',
    '/bloodBenefit',
    '/community/policy',
  ];

  // 동적 경로 부분이 아직 개발되지 않았으므로 항상 false 처리 =>이제 동적경로가 생겼으니까 추가함
  // const hideFooterDynamic = false; // 동적 경로 제외 조건

  // Footer를 숨길 동적 경로: 동적 경로가 많아질 경우 확장 가능
  const hideFooterDynamic =
    location.pathname.startsWith('/signup') ||
    location.pathname.startsWith('/chat/') ||
    /^\/community\/\d+$/.test(location.pathname);
  //예시
  // location.pathname.startsWith("/test/") ||
  // location.pathname.startsWith("/post/") ||
  // location.pathname.startsWith("/user/");

  // Footer 숨김 조건
  return (
    hideFooterStatic.includes(location.pathname) || hideFooterDynamic
  );
};

/*
공통 푸터를 빼야되는 정적경로가 늘어날때 아래처럼확장하세요 
const hideFooterStatic = ["/", "/login", "/about"];

공통 푸터를 빼야되는 동적경로 ex) test/:id 가 늘어날때 아래처럼 확장하세요
const hideFooterDynamic =
  location.pathname.startsWith("/test/") ||
  location.pathname.startsWith("/post/") ||
  location.pathname.startsWith("/user/") ||
  location.pathname.startsWith("/category/");

*/
