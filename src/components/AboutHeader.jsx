const AboutHeader = () => {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 dark:from-slate-100 dark:via-white dark:to-slate-200 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      
      <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300 px-4">
        Explore my portfolio of web applications, games, and digital solutions
      </p>
      
      {/* Professional accent line */}
      <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 dark:from-slate-500 dark:via-slate-300 dark:to-slate-500 mx-auto mt-6 sm:mt-8 rounded-full"></div>
    </div>
  );
};

export default AboutHeader; 