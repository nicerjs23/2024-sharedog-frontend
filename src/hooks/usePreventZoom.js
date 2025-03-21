import { useEffect } from 'react';

const usePreventZoom = () => {
  useEffect(() => {
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      );
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'viewport';
      newMeta.content =
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
      document.head.appendChild(newMeta);
    }

    return () => {
      if (meta) {
        meta.setAttribute(
          'content',
          'width=device-width, initial-scale=1'
        ); // 기존 상태로 복원
      }
    };
  }, []);
};

export default usePreventZoom;
