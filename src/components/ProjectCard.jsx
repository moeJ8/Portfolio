import CustomButton from './CustomButton';
import Badge from './Badge';

const ProjectCard = ({ 
  title,
  description,
  icon,
  badges = [],
  footer,
  buttonText = "Visit",
  buttonVariant = "blueAnimated",
  buttonIcon,
  onButtonClick,
  className = ""
}) => {
  return (
    <div className={`bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Card Header - Mobile: Stack vertically, Desktop: Side by side */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
        {icon && (
          <div className="flex justify-center sm:justify-start sm:mr-4">
            {icon}
          </div>
        )}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-end">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              text={badge.text}
              bgColor={badge.bgColor}
              textColor={badge.textColor}
              borderColor={badge.borderColor}
              size="sm"
            />
          ))}
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 text-center sm:text-left transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 text-center sm:text-left leading-relaxed transition-colors duration-300">
        {description}
      </p>
      
      {/* Footer and Button - Mobile: Stack vertically, Desktop: Side by side */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <span>{footer}</span>
        </div>
        <CustomButton
          onClick={onButtonClick}
          variant={buttonVariant}
          size="sm"
          className="shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          {buttonIcon && (
            typeof buttonIcon === 'string' ? (
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={buttonIcon} />
              </svg>
            ) : (
              buttonIcon
            )
          )}
          {buttonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default ProjectCard; 