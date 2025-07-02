import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      switch (pathname) {
        case '/':
          return 'moe - Home';
        case '/about':
          return 'moe - About';
        case '/contact':
          return 'moe - Contact';
        case '/projects':
          return 'moe - Projects';
        case '/projects/roller-bowler':
          return 'moe - Roller Bawler';
        case '/projects/void-strike':
          return 'moe - Void Strike';
        default:
          return 'moe';
      }
    };

    document.title = getPageTitle(location.pathname);
  }, [location.pathname]);
};

export default usePageTitle; 