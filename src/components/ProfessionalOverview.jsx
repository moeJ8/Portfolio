import PlatformIcon from './PlatformIcon';

const ProfessionalOverview = () => {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50 dark:from-slate-900/20 dark:to-slate-800/20 rounded-3xl"></div>
      
      <div className="relative bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-3xl shadow-xl p-8 mb-16 transition-all duration-300">
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <PlatformIcon platform="slate" size="header">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </PlatformIcon>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Professional Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Technical expertise & experience</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed transition-colors duration-300">
              I'm a passionate fullstack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). 
              My expertise spans from creating beautiful, responsive frontends to building robust, scalable backend systems.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed transition-colors duration-300">
              Beyond web development, I'm also a Unity game developer who specializes in game mechanics, systems design, 
              and innovative gameplay ideas using C#. I love creating immersive gaming experiences that challenge and engage players.
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-6 transition-all duration-300">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Core Technologies
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { skill: "React.js", color: "bg-blue-500", description: "Frontend framework" },
                { skill: "Node.js", color: "bg-green-500", description: "Backend runtime" },
                { skill: "MongoDB", color: "bg-emerald-600", description: "Database" },
                { skill: "Express.js", color: "bg-slate-600", description: "Web framework" },
                { skill: "Unity & C#", color: "bg-purple-600", description: "Game development" },
                { skill: "JavaScript", color: "bg-yellow-500", description: "Programming language" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/80 dark:bg-slate-950/50 rounded-lg border border-slate-200/50 dark:border-slate-600/40">
                  <div className="flex items-center">
                    <span className={`w-3 h-3 ${item.color} rounded-full mr-3 shadow-sm`}></span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item.skill}</span>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalOverview; 