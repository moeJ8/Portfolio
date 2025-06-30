const Badge = ({ 
  text,
  bgColor = "bg-gray-100 dark:bg-gray-900/50",
  textColor = "text-gray-700 dark:text-gray-300", 
  borderColor = "border-gray-200 dark:border-gray-700",
  size = "sm",
  className = ""
}) => {
  const sizeClasses = {
    xs: "px-1.5 py-0.5 text-xs",
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-sm"
  };

  return (
    <span 
      className={`${sizeClasses[size]} ${bgColor} ${textColor} rounded-full border ${borderColor} font-medium transition-colors duration-300 ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge; 