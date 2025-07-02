import { useNavigate } from 'react-router-dom';
import { IoArrowDown } from 'react-icons/io5';
import CustomButton from '../CustomButton';
import Badge from '../Badge';

const GameHero = ({ 
  title, 
  subtitle, 
  description, 
  technologies, 
  backgroundImage, 
  backgroundVideo,
  iconImage, 
  badge,
  buttons = []
}) => {
  const navigate = useNavigate();

  const handleScrollToDownload = () => {
    const downloadSection = document.getElementById('download-section');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTechBadgeColors = (tech) => {
    const colorMap = {
      'Unity': { bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
      '3D': { bgColor: 'bg-blue-100 dark:bg-blue-900/50', textColor: 'text-blue-700 dark:text-blue-300', borderColor: 'border-blue-200 dark:border-blue-700' },
      '2D': { bgColor: 'bg-green-100 dark:bg-green-900/50', textColor: 'text-green-700 dark:text-green-300', borderColor: 'border-green-200 dark:border-green-700' },
      'Platformer': { bgColor: 'bg-orange-100 dark:bg-orange-900/50', textColor: 'text-orange-700 dark:text-orange-300', borderColor: 'border-orange-200 dark:border-orange-700' },
      'Space Shooter': { bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' }
    };
    return colorMap[tech] || { bgColor: 'bg-gray-100 dark:bg-gray-900/50', textColor: 'text-gray-700 dark:text-gray-300', borderColor: 'border-gray-200 dark:border-gray-700' };
  };

  const renderButtons = () => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <CustomButton
        onClick={handleScrollToDownload}
        variant="purpleAnimated"
        size="lg"
        className="shadow-xl hover:shadow-2xl"
      >
        <IoArrowDown className="w-5 h-5 mr-2" />
        Get Game
      </CustomButton>
      
      <CustomButton
        onClick={() => navigate('/projects')}
        variant="blueAnimated"
        size="lg"
        className="shadow-xl hover:shadow-2xl"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View All Projects
      </CustomButton>

      {/* Additional custom buttons */}
      {buttons.map((button, index) => (
        <CustomButton
          key={index}
          onClick={button.action}
          variant={button.variant}
          size="lg"
          className="shadow-xl hover:shadow-2xl"
        >
          {button.icon}
          {button.text}
        </CustomButton>
      ))}
    </div>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video 
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt={`${title} Background`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
        )}
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pb-14 sm:pt-1 lg:pt-1">
        <div className="max-w-7xl mx-auto px-4 w-full">
          
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between">
            
            {/* Left Content - Desktop */}
            <div className="flex-1 text-left">
              {badge && (
                <div className="inline-flex items-center bg-blue-100/80 dark:bg-blue-600/20 backdrop-blur-sm border border-blue-300/50 dark:border-blue-500/30 rounded-full px-4 py-2 mb-6">
                  <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-200">{badge}</span>
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                {title}
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-4 drop-shadow-md">
                {subtitle}
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed drop-shadow-sm">
                {description}
              </p>

              {/* Tech Stack - Desktop */}
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-3 justify-start mb-8">
                  {technologies.map((tech) => {
                    const colors = getTechBadgeColors(tech);
                    return (
                      <Badge
                        key={tech}
                        text={tech}
                        bgColor={colors.bgColor}
                        textColor={colors.textColor}
                        borderColor={colors.borderColor}
                        size="md"
                        className="backdrop-blur-sm shadow-lg"
                      />
                    );
                  })}
                </div>
              )}

              {/* Buttons - Desktop */}
              {renderButtons()}
            </div>

            {/* Right Content - Game Icon - Desktop */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="relative z-10 bg-white/10 dark:bg-slate-950/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                  <div className="w-56 h-56 lg:w-64 lg:h-64 mx-auto mb-6 relative">
                    {iconImage ? (
                      <img 
                        src={iconImage} 
                        alt={`${title} Icon`}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                        {title[0]}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                    <p className="text-white/80 text-sm">{subtitle}</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout (lg and below) */}
          <div className="flex flex-col lg:hidden">
            
            {/* Top Content - Mobile/Tablet */}
            <div className="text-center mb-8">
              {badge && (
                <div className="inline-flex items-center bg-blue-100/80 dark:bg-blue-600/20 backdrop-blur-sm border border-blue-300/50 dark:border-blue-500/30 rounded-full px-4 py-2 mb-6">
                  <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-200">{badge}</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                {title}
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-4 drop-shadow-md">
                {subtitle}
              </h2>

              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed drop-shadow-sm px-4">
                {description}
              </p>

              {/* Tech Stack - Mobile/Tablet */}
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 px-4">
                  {technologies.map((tech) => {
                    const colors = getTechBadgeColors(tech);
                    return (
                      <Badge
                        key={tech}
                        text={tech}
                        bgColor={colors.bgColor}
                        textColor={colors.textColor}
                        borderColor={colors.borderColor}
                        size="sm"
                        className="backdrop-blur-sm shadow-lg"
                      />
                    );
                  })}
                </div>
              )}
            </div>

            {/* Game Icon - Mobile/Tablet */}
            <div className="flex justify-center mb-8">
              <div className="relative max-w-xs sm:max-w-sm">
                <div className="relative z-10 bg-white/10 dark:bg-slate-950/30 backdrop-blur-lg border border-white/20 dark:border-slate-600/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-4 sm:mb-6 relative">
                    {iconImage ? (
                      <img 
                        src={iconImage} 
                        alt={`${title} Icon`}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-white shadow-2xl">
                        {title[0]}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{subtitle}</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Buttons - Mobile/Tablet (Under game icon) */}
            <div className="px-4">
              {renderButtons()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHero; 