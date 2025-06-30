import CustomButton from './CustomButton';
import Badge from './Badge';

const ProjectCard = ({ 
  title,
  description,
  icon,
  iconGradientFrom,
  iconGradientTo,
  gradients,
  badges = [],
  footer,
  buttonText = "Visit",
  buttonVariant = "blueAnimated",
  buttonIcon,
  onButtonClick,
  className = ""
}) => {
  const gradientFrom = iconGradientFrom || (gradients && gradients[0]) || 'from-blue-500';
  const gradientTo = iconGradientTo || (gradients && gradients[1]) || 'to-purple-600';
  const hasGradient = gradientFrom && gradientTo && gradientFrom !== '' && gradientTo !== '';
  return (
    <div className={`bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        {hasGradient ? (
          <div className={`w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center`}>
            {icon}
          </div>
        ) : (
          icon
        )}
        <div className="flex flex-wrap gap-2">
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
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <span>{footer}</span>
        </div>
        <CustomButton
          onClick={onButtonClick}
          variant={buttonVariant}
          size="sm"
          className="shadow-lg hover:shadow-xl"
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