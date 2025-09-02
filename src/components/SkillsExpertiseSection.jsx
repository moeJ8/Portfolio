import Badge from './Badge';

const SkillsExpertiseSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { text: "JavaScript", bgColor: "bg-yellow-100 dark:bg-yellow-900/50", textColor: "text-yellow-800 dark:text-yellow-300", borderColor: "border-yellow-200 dark:border-yellow-700" },
        { text: "TypeScript", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
        { text: "C#", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300", borderColor: "border-purple-200 dark:border-purple-700" },
        { text: "Java", bgColor: "bg-orange-100 dark:bg-orange-900/50", textColor: "text-orange-800 dark:text-orange-300", borderColor: "border-orange-200 dark:border-orange-700" },
        { text: "Python", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { text: "HTML5", bgColor: "bg-orange-100 dark:bg-orange-900/50", textColor: "text-orange-800 dark:text-orange-300", borderColor: "border-orange-200 dark:border-orange-700" },
        { text: "CSS3", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
        { text: "Tailwind CSS", bgColor: "bg-cyan-100 dark:bg-cyan-900/50", textColor: "text-cyan-800 dark:text-cyan-300", borderColor: "border-cyan-200 dark:border-cyan-700" },
        { text: "React.js", bgColor: "bg-cyan-100 dark:bg-cyan-900/50", textColor: "text-cyan-800 dark:text-cyan-300", borderColor: "border-cyan-200 dark:border-cyan-700" },
        { text: "React Router", bgColor: "bg-cyan-100 dark:bg-cyan-900/50", textColor: "text-cyan-800 dark:text-cyan-300", borderColor: "border-cyan-200 dark:border-cyan-700" },
        { text: "Redux", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300", borderColor: "border-purple-200 dark:border-purple-700" },
        { text: "State Management", bgColor: "bg-indigo-100 dark:bg-indigo-900/50", textColor: "text-indigo-800 dark:text-indigo-300", borderColor: "border-indigo-200 dark:border-indigo-700" },
        { text: "Responsive Design", bgColor: "bg-emerald-100 dark:bg-emerald-900/50", textColor: "text-emerald-800 dark:text-emerald-300", borderColor: "border-emerald-200 dark:border-emerald-700" },
        { text: "Mobile-First", bgColor: "bg-pink-100 dark:bg-pink-900/50", textColor: "text-pink-800 dark:text-pink-300", borderColor: "border-pink-200 dark:border-pink-700" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { text: "Node.js", bgColor: "bg-green-100 dark:bg-green-900/50", textColor: "text-green-800 dark:text-green-300", borderColor: "border-green-200 dark:border-green-700" },
        { text: "Express.js", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "MongoDB", bgColor: "bg-green-100 dark:bg-green-900/50", textColor: "text-green-800 dark:text-green-300", borderColor: "border-green-200 dark:border-green-700" },
        { text: "Mongoose", bgColor: "bg-green-100 dark:bg-green-900/50", textColor: "text-green-800 dark:text-green-300", borderColor: "border-green-200 dark:border-green-700" },
        { text: "Firebase", bgColor: "bg-yellow-100 dark:bg-yellow-900/50", textColor: "text-yellow-800 dark:text-yellow-300", borderColor: "border-yellow-200 dark:border-yellow-700" },
        { text: "REST APIs", bgColor: "bg-indigo-100 dark:bg-indigo-900/50", textColor: "text-indigo-800 dark:text-indigo-300", borderColor: "border-indigo-200 dark:border-indigo-700" },
        { text: "JWT Auth", bgColor: "bg-slate-100 dark:bg-slate-900/50", textColor: "text-slate-800 dark:text-slate-300", borderColor: "border-slate-200 dark:border-slate-700" },
        { text: "OAuth", bgColor: "bg-slate-100 dark:bg-slate-900/50", textColor: "text-slate-800 dark:text-slate-300", borderColor: "border-slate-200 dark:border-slate-700" }
      ]
    },

    {
      title: "Game Development",
      skills: [
        { text: "Unity", bgColor: "bg-slate-100 dark:bg-slate-900/50", textColor: "text-slate-800 dark:text-slate-300", borderColor: "border-slate-200 dark:border-slate-700" },
        { text: "Game Physics", bgColor: "bg-orange-100 dark:bg-orange-900/50", textColor: "text-orange-800 dark:text-orange-300", borderColor: "border-orange-200 dark:border-orange-700" },
        { text: "2D & 3D", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
        { text: "Level Design", bgColor: "bg-emerald-100 dark:bg-emerald-900/50", textColor: "text-emerald-800 dark:text-emerald-300", borderColor: "border-emerald-200 dark:border-emerald-700" },
        { text: "UI/UX Design", bgColor: "bg-pink-100 dark:bg-pink-900/50", textColor: "text-pink-800 dark:text-pink-300", borderColor: "border-pink-200 dark:border-pink-700" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { text: "VS Code", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
        { text: "Git", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Vite", bgColor: "bg-yellow-100 dark:bg-yellow-900/50", textColor: "text-yellow-800 dark:text-yellow-300", borderColor: "border-yellow-200 dark:border-yellow-700" },
        { text: "Postman", bgColor: "bg-orange-100 dark:bg-orange-900/50", textColor: "text-orange-800 dark:text-orange-300", borderColor: "border-orange-200 dark:border-orange-700" },
        { text: "Insomnia", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300", borderColor: "border-purple-200 dark:border-purple-700" },
        { text: "Figma", bgColor: "bg-red-100 dark:bg-red-900/50", textColor: "text-red-800 dark:text-red-300", borderColor: "border-red-200 dark:border-red-700" },
        { text: "Vercel", bgColor: "bg-slate-100 dark:bg-slate-900/50", textColor: "text-slate-800 dark:text-slate-300", borderColor: "border-slate-200 dark:border-slate-700" },
        { text: "Render", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300", borderColor: "border-purple-200 dark:border-purple-700" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { text: "Problem Solving", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Team Collaboration", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Communication", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Project Management", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Critical Thinking", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Adaptability", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Leadership", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Time Management", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
        { text: "Agile/Scrum", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" }
      ]
    }
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">Skills & Expertise</h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 px-2">
          Professional development across multiple domains with hands-on experience
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center transition-colors duration-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex}
                  text={skill.text} 
                  bgColor={skill.bgColor} 
                  textColor={skill.textColor} 
                  borderColor={skill.borderColor}
                  size="sm" 
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-600">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Continuously learning and adapting to new technologies and industry best practices
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsExpertiseSection; 