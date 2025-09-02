import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      const baseBrand = "moe - Your Dev Pal";
      
      switch (pathname) {
        case '/':
          return `${baseBrand} | Expert Fullstack Developer & Unity Game Designer | Mohammad Jada`;
        case '/about':
          return `About Mohammad Jada | MERN Stack Developer & Unity Game Designer | ${baseBrand}`;
        case '/contact':
          return `Contact Mohammad Jada | Freelance Developer Available | ${baseBrand}`;
        case '/projects':
          return `Portfolio Projects | Web Apps & Games | Mohammad Jada | ${baseBrand}`;
        case '/projects/roller-bowler':
          return `Roller Bawler - 3D Unity Platformer Game | ${baseBrand}`;
        case '/projects/void-strike':
          return `Void Strike - 2D Space Shooter Game | ${baseBrand}`;
        default:
          return `${baseBrand} | Expert Fullstack Developer & Unity Game Designer`;
      }
    };

    const getPageDescription = (pathname) => {
      switch (pathname) {
        case '/':
          return 'Mohammad Jada (moe) - Expert Fullstack Developer & Unity Game Designer. Specialized in MERN stack, React, Node.js, MongoDB. Creating modern web applications and interactive games. Available for freelance projects in Istanbul, Turkey.';
        case '/about':
          return 'Learn about Mohammad Jada, expert fullstack developer specializing in MERN stack development and Unity game design. Discover skills, experience, and professional journey.';
        case '/contact':
          return 'Contact Mohammad Jada for freelance development projects. Available for MERN stack web applications, Unity games, and fullstack development work. Based in Istanbul, Turkey.';
        case '/projects':
          return 'Explore Mohammad Jada\'s portfolio featuring web applications built with MERN stack and Unity games. See live projects including Glim, Rahalatek, Roller Bawler, and Void Strike.';
        case '/projects/roller-bowler':
          return 'Roller Bawler - 3D Unity platformer game with physics-based movement, level progression, coin collection, and unlockable skins. Built with Unity and C#.';
        case '/projects/void-strike':
          return 'Void Strike - Fast-paced 2D space shooter game with dynamic enemy spawning, power-ups, and optimized object pooling. Built with Unity and C#.';
        default:
          return 'Mohammad Jada (moe) - Expert Fullstack Developer & Unity Game Designer specializing in MERN stack development and interactive game creation.';
      }
    };

    // Update page title
    document.title = getPageTitle(location.pathname);
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getPageDescription(location.pathname));
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', getPageTitle(location.pathname));
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', getPageDescription(location.pathname));
    }
    
    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', getPageTitle(location.pathname));
    }
    
    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', getPageDescription(location.pathname));
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://moepal.com';
      const canonicalUrl = location.pathname === '/' ? baseUrl : `${baseUrl}${location.pathname}`;
      canonical.setAttribute('href', canonicalUrl);
    }
    
  }, [location.pathname]);
};

export default usePageTitle; 