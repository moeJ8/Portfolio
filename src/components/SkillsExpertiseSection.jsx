import Badge from './Badge';

const SkillsExpertiseSection = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">Skills & Expertise</h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 transition-colors duration-300 px-2">
        Professional development across multiple domains
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <Badge 
          text="MERN Stack" 
          bgColor="bg-blue-100 dark:bg-blue-900/50" 
          textColor="text-blue-800 dark:text-blue-300" 
          borderColor="border-blue-200 dark:border-blue-700"
          size="md" 
        />
        <Badge 
          text="Unity & C#" 
          bgColor="bg-purple-100 dark:bg-purple-900/50" 
          textColor="text-purple-800 dark:text-purple-300" 
          borderColor="border-purple-200 dark:border-purple-700"
          size="md" 
        />
        <Badge 
          text="Game Systems" 
          bgColor="bg-green-100 dark:bg-green-900/50" 
          textColor="text-green-800 dark:text-green-300" 
          borderColor="border-green-200 dark:border-green-700"
          size="md" 
        />
        <Badge 
          text="Full Stack Development" 
          bgColor="bg-orange-100 dark:bg-orange-900/50" 
          textColor="text-orange-800 dark:text-orange-300" 
          borderColor="border-orange-200 dark:border-orange-700"
          size="md" 
        />
      </div>
    </div>
  );
};

export default SkillsExpertiseSection; 