import React from 'react';

/**
 * A reusable styled icon container component for different platforms
 * Automatically applies platform-specific colors and styling
 * 
 * @param {string} platform - The platform name (github, itch.io, linkedin, purple, blue, gray, slate, green, blue-light, purple-light, green-light)
 * @param {React.ReactNode} children - The icon element to be styled
 * @param {string} size - Size variant (xs, sm, md, lg, section, header) - defaults to "md"
 * @returns {JSX.Element} Styled platform icon container
 */
const PlatformIcon = ({ platform, children, size = "md" }) => {
  // Size variations
  const sizeClasses = {
    xs: "w-10 h-10",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    section: "w-14 h-14",
    header: "w-16 h-16"
  };

  const iconSizes = {
    xs: "w-5 h-5",
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    section: "w-6 h-6",
    header: "w-7 h-7"
  };

  // Get styling based on platform
  const getPlatformStyling = () => {
    const baseClasses = `${sizeClasses[size]} rounded-xl flex items-center justify-center transition-all duration-300 border-2`;
    
    switch (platform?.toLowerCase()) {
      case 'github':
        return {
          container: `${baseClasses} bg-slate-600 border-slate-600 hover:bg-slate-700 hover:border-slate-700 dark:bg-slate-900/20 dark:border-slate-700 dark:hover:bg-slate-900/30 dark:hover:border-slate-600`,
          icon: `${iconSizes[size]} text-white dark:text-slate-400`
        };
      case 'itch.io':
      case 'itch':
        return {
          container: `${baseClasses} bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 dark:bg-red-900/20 dark:border-red-700 dark:hover:bg-red-900/30 dark:hover:border-red-600`,
          icon: `${iconSizes[size]} text-white dark:text-red-400`
        };
      case 'linkedin':
        return {
          container: `${baseClasses} bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-900/20 dark:border-blue-700 dark:hover:bg-blue-900/30 dark:hover:border-blue-600`,
          icon: `${iconSizes[size]} text-white dark:text-blue-400`
        };
      case 'purple':
        return {
          container: `${baseClasses} bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700 dark:bg-purple-900/20 dark:border-purple-700 dark:hover:bg-purple-900/30 dark:hover:border-purple-600`,
          icon: `${iconSizes[size]} text-white dark:text-purple-400`
        };
      case 'blue':
        return {
          container: `${baseClasses} bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-900/20 dark:border-blue-700 dark:hover:bg-blue-900/30 dark:hover:border-blue-600`,
          icon: `${iconSizes[size]} text-white dark:text-blue-400`
        };
      case 'gray':
      case 'slate':
        return {
          container: `${baseClasses} bg-slate-600 border-slate-600 hover:bg-slate-700 hover:border-slate-700 dark:bg-slate-900/20 dark:border-slate-700 dark:hover:bg-slate-900/30 dark:hover:border-slate-600`,
          icon: `${iconSizes[size]} text-white dark:text-slate-400`
        };
      case 'green':
        return {
          container: `${baseClasses} bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 dark:bg-green-900/30 dark:border-green-600 dark:hover:bg-green-900/40 dark:hover:border-green-500`,
          icon: `${iconSizes[size]} text-white dark:text-green-400`
        };
      case 'blue-light':
        return {
          container: `${baseClasses} bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-100 dark:border-blue-200 dark:hover:bg-blue-200 dark:hover:border-blue-300`,
          icon: `${iconSizes[size]} text-white dark:text-blue-600`
        };
      case 'purple-light':
        return {
          container: `${baseClasses} bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700 dark:bg-purple-100 dark:border-purple-200 dark:hover:bg-purple-200 dark:hover:border-purple-300`,
          icon: `${iconSizes[size]} text-white dark:text-purple-600`
        };
      case 'green-light':
        return {
          container: `${baseClasses} bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 dark:bg-green-100 dark:border-green-200 dark:hover:bg-green-200 dark:hover:border-green-300`,
          icon: `${iconSizes[size]} text-white dark:text-green-600`
        };
      default:
        return {
          container: `${baseClasses} bg-gray-600 border-gray-600 hover:bg-gray-700 hover:border-gray-700 dark:bg-gray-900/20 dark:border-gray-700 dark:hover:bg-gray-900/30 dark:hover:border-gray-600`,
          icon: `${iconSizes[size]} text-white dark:text-gray-400`
        };
    }
  };

  const styling = getPlatformStyling();

  // Clone children to apply icon styling
  const styledChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: styling.icon,
        ...child.props
      });
    }
    return child;
  });

  return (
    <div className={styling.container}>
      {styledChildren}
    </div>
  );
};

export default PlatformIcon; 