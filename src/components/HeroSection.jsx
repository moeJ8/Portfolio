import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CustomButton from './CustomButton';
import DownloadModal from './DownloadModal';
import Badge from './Badge';
import { getFileInfo } from '../utils/downloadManager';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const handleSocialMediaClick = () => {
    const socialMediaSection = document.getElementById('social-media');
    if (socialMediaSection) {
      socialMediaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const cvFile = getFileInfo('cv');
    setSelectedFile(cvFile);
    setIsDownloadModalOpen(true);
  };



  const slides = [
    {
      id: 'hero',
      type: 'hero',
      title: 'Mohammad Jada',
      subtitle: 'Fullstack Developer & Unity Game Designer',
      description: 'I create scalable web applications using the MERN stack and engaging interactive experiences with Unity. Specialized in building modern, user-centric digital solutions that bridge technology and creativity.',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Unity', 'C#'],
      buttons: [
        { text: 'Let\'s Talk', variant: 'tealAnimated', action: () => navigate('/contact'), icon: 'chat' },
        { text: 'Download CV', variant: 'purpleAnimated', action: handleDownloadCV, icon: 'download' },
        { text: 'Connect', variant: 'blueAnimated', action: handleSocialMediaClick, icon: 'connect' }
      ]
    },
    {
      id: 'roller-bowler',
      type: 'project',
      title: 'Roller Bawler',
      subtitle: '3D Unity Platformer Game',
      description: 'A 3D rolling ball platformer combining physics-based movement with creative level design. Features level-based progression, coin collection with persistent tracking, unlockable skins, and dynamic day-night skybox.',
      tech: ['Unity', '3D', 'Platformer'],
      gradient: 'from-blue-500 to-purple-600',
      backgroundImage: '/roller-bawler-bg.png',
      iconImage: '/roller-bawler-icon.png',
      buttons: [
        { text: 'View Details', variant: 'blueAnimated', action: () => navigate('/projects/roller-bowler'), icon: 'view' },
        { text: 'View All Projects', variant: 'purpleAnimated', action: () => navigate('/projects'), icon: 'view' }
      ]
    },
    {
      id: 'void-strike',
      type: 'project',
      title: 'Void Strike',
      subtitle: '2D Space Shooter Game',
      description: 'A fast-paced 2D space shooter where you pilot a starfighter through waves of enemies and environmental hazards. Features responsive controls, dynamic enemy spawning, power-ups, and optimized object pooling.',
      tech: ['Unity', '2D', 'Space Shooter'],
      gradient: 'from-green-500 to-teal-600',
      iconImage: '/void-strike-icon.png',
      backgroundVideo: '/2DGameBackgroundVideo.mp4',
      buttons: [
        { text: 'View Details', variant: 'blueAnimated', action: () => navigate('/projects/void-strike'), icon: 'view' },
        { text: 'View All Projects', variant: 'purpleAnimated', action: () => navigate('/projects'), icon: 'view' }
      ]
    },
    {
      id: 'glim',
      type: 'project',
      title: 'Glim',
      subtitle: 'Modern Blogging Platform',
      description: 'A modern blogging platform built with React and advanced CMS features. Showcases responsive design, user authentication, content management, and professional publishing tools for content creators.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      gradient: 'from-purple-500 to-pink-600',
      buttons: [
        { text: 'Visit Site', variant: 'purpleAnimated', action: () => window.open('https://glim.blog', '_blank'), icon: 'external' },
        { text: 'View Projects', variant: 'tealAnimated', action: () => navigate('/projects'), icon: 'view' }
      ]
    },
    {
      id: 'rahalatek',
      type: 'project',
      title: 'Rahalatek',
      subtitle: 'Enterprise Web Application',
      description: 'Enterprise-level web application with real-time features, advanced state management, and responsive design principles. Built for modern business solutions with scalability and performance in mind.',
      tech: ['React', 'Express.js', 'Real-time', 'Enterprise Architecture'],
      gradient: 'from-blue-500 to-teal-600',
      buttons: [
        { text: 'Visit Site', variant: 'blueAnimated', action: () => window.open('https://app.Rahalatek.com', '_blank'), icon: 'external' },
        { text: 'Contact Me', variant: 'tealAnimated', action: () => navigate('/contact'), icon: 'chat' }
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 10000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, isDragging, slides.length, currentSlide]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Drag functionality
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
    setIsAutoPlaying(false);
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    if (dragOffset > 120) {
      prevSlide();
    } else if (dragOffset < -120) {
      nextSlide();
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setIsAutoPlaying(true);
    document.body.style.userSelect = '';
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
    document.body.style.userSelect = 'none';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const diff = e.touches[0].clientX - dragStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    if (dragOffset > 10) {
      prevSlide();
    } else if (dragOffset < -10) {
      nextSlide();
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setIsAutoPlaying(true);
    document.body.style.userSelect = '';
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.userSelect = '';
    };
  }, []);

  const getTechBadgeColors = (tech) => {
    const colorMap = {
      'Unity': { bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
      'C#': { bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' },
      '3D': { bgColor: 'bg-blue-100 dark:bg-blue-900/50', textColor: 'text-blue-700 dark:text-blue-300', borderColor: 'border-blue-200 dark:border-blue-700' },
      '2D': { bgColor: 'bg-green-100 dark:bg-green-900/50', textColor: 'text-green-700 dark:text-green-300', borderColor: 'border-green-200 dark:border-green-700' },
      'Platformer': { bgColor: 'bg-orange-100 dark:bg-orange-900/50', textColor: 'text-orange-700 dark:text-orange-300', borderColor: 'border-orange-200 dark:border-orange-700' },
      'Space Shooter': { bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' },
      'React': { bgColor: 'bg-blue-100 dark:bg-blue-900/50', textColor: 'text-blue-700 dark:text-blue-300', borderColor: 'border-blue-200 dark:border-blue-700' },
      'Node.js': { bgColor: 'bg-green-100 dark:bg-green-900/50', textColor: 'text-green-700 dark:text-green-300', borderColor: 'border-green-200 dark:border-green-700' },
      'MongoDB': { bgColor: 'bg-green-100 dark:bg-green-900/50', textColor: 'text-green-700 dark:text-green-300', borderColor: 'border-green-200 dark:border-green-700' },
      'Express.js': { bgColor: 'bg-gray-100 dark:bg-gray-900/50', textColor: 'text-gray-700 dark:text-gray-300', borderColor: 'border-gray-200 dark:border-gray-700' },
      'JavaScript': { bgColor: 'bg-yellow-100 dark:bg-yellow-900/50', textColor: 'text-yellow-700 dark:text-yellow-300', borderColor: 'border-yellow-200 dark:border-yellow-700' },
      'Next.js': { bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
      'Real-time': { bgColor: 'bg-teal-100 dark:bg-teal-900/50', textColor: 'text-teal-700 dark:text-teal-300', borderColor: 'border-teal-200 dark:border-teal-700' },
      'Enterprise Architecture': { bgColor: 'bg-indigo-100 dark:bg-indigo-900/50', textColor: 'text-indigo-700 dark:text-indigo-300', borderColor: 'border-indigo-200 dark:border-indigo-700' }
    };
    return colorMap[tech] || { bgColor: 'bg-gray-100 dark:bg-gray-900/50', textColor: 'text-gray-700 dark:text-gray-300', borderColor: 'border-gray-200 dark:border-gray-700' };
  };

  const getIcon = (iconType) => {
    const icons = {
      chat: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>,
      download: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>,
      external: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>,
      view: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>,
      connect: null
    };
    return icons[iconType];
  };

  const renderSlide = (slide) => {
    if (slide.type === 'hero') {
      return (
        <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-6 lg:px-8 py-2 md:py-12 lg:py-0">
          {/* Mobile/Tablet: Single Column Layout */}
          <div className="flex lg:hidden flex-col items-center text-center h-full justify-center py-2 space-y-5 -mt-8">
            {/* Profile Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-2xl border border-gray-600">
                MJ
              </div>

            </div>

            {/* All Content Under Heading */}
            <div className="flex flex-col items-center space-y-3 px-2">
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Hi, I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>

                {/* Professional Title */}
                <h2 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                  {slide.subtitle}
                </h2>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                I create scalable web applications using the MERN stack and engaging interactive experiences with Unity.
              </p>

              {/* Location */}
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs">Istanbul, Turkey</span>
              </div>

              {/* Skills Preview */}
              <div className="flex flex-wrap gap-1 justify-center max-w-xs mx-auto">
                {slide.skills.map((skill) => {
                  const colors = getTechBadgeColors(skill);
                  return (
                    <Badge
                      key={skill}
                      text={skill}
                      bgColor={colors.bgColor}
                      textColor={colors.textColor}
                      borderColor={colors.borderColor}
                      size="xs"
                      className="backdrop-blur-sm text-xs px-2 py-1"
                    />
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 w-full max-w-xs">
                {slide.buttons.map((button, index) => (
                  <CustomButton
                    key={index}
                    onClick={button.action}
                    variant={button.variant}
                    size="sm"
                    className="shadow-lg hover:shadow-xl w-full text-xs py-2"
                  >
                    {getIcon(button.icon)}
                    {button.text}
                  </CustomButton>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:flex items-center justify-between w-full h-full">
            {/* Left Content */}
            <div className="flex-1 text-left">
              {/* Main Heading */}
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h1>

              {/* Professional Title */}
              <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
                {slide.description}
              </p>

              {/* Location */}
              <div className="flex items-center justify-start mb-8 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-base">Istanbul, Turkey</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-4 justify-start">
                {slide.buttons.map((button, index) => (
                  <CustomButton
                    key={index}
                    onClick={button.action}
                    variant={button.variant}
                    size="lg"
                    className="shadow-xl hover:shadow-2xl"
                  >
                    {getIcon(button.icon)}
                    {button.text}
                  </CustomButton>
                ))}
              </div>
            </div>

            {/* Right Content - Professional Image/Visual */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                {/* Main Profile Area */}
                <div className="relative z-10 bg-gradient-to-br from-white/80 to-gray-50/90 dark:from-slate-900/50 dark:to-slate-800/30 backdrop-blur-lg border border-gray-300/50 dark:border-slate-600/40 rounded-2xl p-8 shadow-2xl">
                  {/* Profile Image Placeholder */}
                  <div className="w-64 h-64 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl border border-gray-600">
                      MJ
                    </div>

                  </div>

                  {/* Skills Preview */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-center mb-4 text-gray-800 dark:text-white">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {slide.skills.map((skill) => {
                        const colors = getTechBadgeColors(skill);
                        return (
                          <Badge
                            key={skill}
                            text={skill}
                            bgColor={colors.bgColor}
                            textColor={colors.textColor}
                            borderColor={colors.borderColor}
                            size="sm"
                            className="backdrop-blur-sm"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-300/30 dark:bg-slate-600/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-400/30 dark:bg-slate-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Project slide
      return (
        <div className="w-full h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-12 lg:py-0">
          {/* Mobile/Tablet: Single Column Layout */}
          <div className={`flex lg:hidden flex-col items-center text-center space-y-3 sm:space-y-4 h-full justify-center py-4 ${slide.backgroundImage || slide.backgroundVideo ? 'text-white' : ''}`}>
            {/* Project Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-2">
              <span className={slide.backgroundImage || slide.backgroundVideo ? 
                "text-white drop-shadow-lg" : 
                "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent"
              }>
                {slide.title}
              </span>
            </h1>

            {/* Project Type */}
            <h2 className={slide.backgroundImage || slide.backgroundVideo ? 
              "text-base sm:text-lg md:text-xl font-semibold text-white/90 drop-shadow-md px-2" :
              "text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 px-2"
            }>
              {slide.subtitle}
            </h2>

            {/* Description */}
            <p className={slide.backgroundImage || slide.backgroundVideo ?
              "text-sm sm:text-base md:text-lg text-white/80 leading-relaxed drop-shadow-sm px-6 max-w-sm sm:max-w-md" :
              "text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed px-6 max-w-sm sm:max-w-md"
            }>
              {slide.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center px-4 max-w-sm sm:max-w-md">
              {slide.tech.map((tech) => {
                const colors = getTechBadgeColors(tech);
                return (
                  <Badge
                    key={tech}
                    text={tech}
                    bgColor={colors.bgColor}
                    textColor={colors.textColor}
                    borderColor={colors.borderColor}
                    size="xs"
                    className="backdrop-blur-sm text-xs"
                  />
                );
              })}
            </div>

            {/* Project Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto relative">
              {slide.iconImage ? (
                <div className="w-full h-full bg-transparent rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <img 
                    src={slide.iconImage} 
                    alt={`${slide.title} Icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : slide.id === 'glim' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-slate-900 dark:text-white
                    transition-all duration-300
                    text-xl sm:text-2xl md:text-3xl
                    font-sans font-extrabold
                    tracking-tight
                    drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                    Glim
                  </span>
                </div>
              ) : slide.id === 'rahalatek' ? (
                <img 
                  src="/rahalatek-logo.png" 
                  alt="Rahalatek" 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl border`}>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2.5 sm:gap-3 w-full max-w-xs px-4">
              {slide.buttons.map((button, index) => (
                <CustomButton
                  key={index}
                  onClick={button.action}
                  variant={button.variant}
                  size="sm"
                  className="shadow-lg hover:shadow-xl w-full text-sm py-2.5"
                >
                  {getIcon(button.icon)}
                  {button.text}
                </CustomButton>
              ))}
            </div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:flex items-center justify-between w-full h-full">
            {/* Left Content */}
            <div className={`flex-1 text-left ${slide.backgroundImage || slide.backgroundVideo ? 'text-white' : ''}`}>


              {/* Project Title */}
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                <span className={slide.backgroundImage || slide.backgroundVideo ? 
                  "text-white drop-shadow-lg" : 
                  "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent"
                }>
                  {slide.title}
                </span>
              </h1>

              {/* Project Type */}
              <h2 className={slide.backgroundImage || slide.backgroundVideo ? 
                "text-3xl font-semibold text-white/90 mb-4 drop-shadow-md" :
                "text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
              }>
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className={slide.backgroundImage || slide.backgroundVideo ?
                "text-lg text-white/80 max-w-2xl mb-8 leading-relaxed drop-shadow-sm" :
                "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed"
              }>
                {slide.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 justify-start mb-8">
                {slide.tech.map((tech) => {
                  const colors = getTechBadgeColors(tech);
                  return (
                    <Badge
                      key={tech}
                      text={tech}
                      bgColor={colors.bgColor}
                      textColor={colors.textColor}
                      borderColor={colors.borderColor}
                      size="md"
                      className="backdrop-blur-sm"
                    />
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-4 justify-start">
                {slide.buttons.map((button, index) => (
                  <CustomButton
                    key={index}
                    onClick={button.action}
                    variant={button.variant}
                    size="lg"
                    className="shadow-xl hover:shadow-2xl"
                  >
                    {getIcon(button.icon)}
                    {button.text}
                  </CustomButton>
                ))}
              </div>
            </div>

            {/* Right Content - Project Visual */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                {/* Project Card */}
                <div className={`relative z-10 bg-white/5 dark:bg-slate-950/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl ${slide.backgroundImage || slide.backgroundVideo ? '' : 'border border-slate-200/50 dark:border-slate-600/40'}`}>
                  {/* Project Icon */}
                  <div className="w-64 h-64 mx-auto mb-6 relative">
                    {slide.iconImage ? (
                      <div className="w-full h-full bg-transparent rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                        <img 
                          src={slide.iconImage} 
                          alt={`${slide.title} Icon`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : slide.id === 'glim' ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-slate-900 dark:text-white
                          transition-all duration-300
                          text-5xl
                          font-sans font-extrabold
                          tracking-tight
                          drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                          Glim
                        </span>
                      </div>
                    ) : slide.id === 'rahalatek' ? (
                      <img 
                        src="/rahalatek-logo.png" 
                        alt="Rahalatek" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl border`}>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    {slide.id !== 'glim' && slide.id !== 'rahalatek' && (
                      <h3 className={`text-lg font-semibold text-center mb-4 ${slide.backgroundImage || slide.backgroundVideo ? 'text-white drop-shadow-md' : 'text-gray-800 dark:text-white'}`}>{slide.title}</h3>
                    )}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-300/30 dark:bg-slate-600/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-400/30 dark:bg-slate-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
              {/* Carousel Container - Full Width */}
        <div className="relative w-full h-full">
                  <div 
            ref={carouselRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing h-full flex items-center select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <div 
            className={`flex w-full h-full ${isDragging ? 'transition-none' : 'transition-transform duration-300 ease-out'}`}
            style={{ 
              transform: `translateX(${-currentSlide * 100 + (dragOffset * 0.05)}%)` 
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 flex items-center relative">
                {/* Individual Slide Background */}
                {slide.backgroundVideo ? (
                  <>
                    <div className="absolute inset-0">
                      <video 
                        src={slide.backgroundVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                  </>
                ) : slide.backgroundImage ? (
                  <>
                    <div className="absolute inset-0">
                      <img 
                        src={slide.backgroundImage} 
                        alt={`${slide.title} Background`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white dark:bg-slate-950" />
                    <div className="absolute inset-0 bg-grid-gray-900/5 dark:bg-grid-white/5 bg-grid-16" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 dark:from-slate-950/10 via-transparent to-gray-300/10 dark:to-slate-950/10" />
                  </>
                )}
                
                {/* Slide Content */}
                <div className="relative z-10 w-full h-full flex items-center">
                  {renderSlide(slide)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop only */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-4 sm:left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 w-12 h-12 transition-all duration-500 ease-in-out text-blue-700 bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 backdrop-blur-lg rounded-full items-center justify-center shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-4 sm:right-8 md:right-16 lg:right-24 top-1/2 transform -translate-y-1/2 w-12 h-12 transition-all duration-500 ease-in-out text-blue-700 bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 backdrop-blur-lg rounded-full items-center justify-center shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gray-800 dark:bg-white scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 md:bottom-8 right-4 sm:right-8 md:right-16 lg:right-24 w-8 h-8 md:w-10 md:h-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-gray-300 dark:border-slate-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

        {/* Scroll Indicator - only show on hero slide */}
        {currentSlide === 0 && (
          <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20">
            {/* Mobile/Tablet - Touch/Swipe Indicator */}
            <div className="block lg:hidden">
              <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">Scroll to explore</div>
              <div className="flex flex-col items-center justify-center">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* Desktop - Mouse Scroll Indicator */}
            <div className="hidden lg:block">
              <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full mx-auto relative">
                <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        file={selectedFile}
      />
    </section>
  );
};

export default HeroSection; 