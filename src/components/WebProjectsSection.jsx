import ProjectCard from './ProjectCard';
import { HiCode } from 'react-icons/hi';

const WebProjectsSection = () => {
  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600">
          <HiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Web Development Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Full-stack applications and digital solutions</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Glim Project Card */}
        <ProjectCard
          title="Glim"
          description="A modern blogging platform built with React and advanced CMS features. Showcases responsive design, user authentication, and content management."
          icon={
            <span className="text-slate-900 dark:text-white
              transition-all duration-300
              text-2xl
              font-sans font-extrabold
              tracking-tight
              drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              Glim
            </span>
          }
          gradients={['from-transparent', 'to-transparent']}
          badges={[
            { text: "React", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-700 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
            { text: "Node.js", bgColor: "bg-green-100 dark:bg-green-900/50", textColor: "text-green-700 dark:text-green-300", borderColor: "border-green-200 dark:border-green-700" },
            { text: "MongoDB", bgColor: "bg-emerald-100 dark:bg-emerald-900/50", textColor: "text-emerald-700 dark:text-emerald-300", borderColor: "border-emerald-200 dark:border-emerald-700" }
          ]}
          footer="Platform: Web • Blogging Platform"
          buttonText="Visit Site"
          buttonVariant="purpleAnimated"
          buttonIcon="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          onButtonClick={() => window.open('https://glim.blog', '_blank')}
        />

        {/* Rahalatek Project Card */}
        <ProjectCard
          title="Rahalatek"
          description="Enterprise-level web application with real-time features, advanced state management, and responsive design principles for modern business solutions."
          icon={
            <img 
              src="/rahalatek-logo.png" 
              alt="Rahalatek" 
              className="w-20 h-20 object-contain"
            />
          }
          gradients={['from-transparent', 'to-transparent']}
          badges={[
            { text: "React", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-700 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
            { text: "Express", bgColor: "bg-orange-100 dark:bg-orange-900/50", textColor: "text-orange-700 dark:text-orange-300", borderColor: "border-orange-200 dark:border-orange-700" },
            { text: "Real-time", bgColor: "bg-red-100 dark:bg-red-900/50", textColor: "text-red-700 dark:text-red-300", borderColor: "border-red-200 dark:border-red-700" }
          ]}
          footer="Platform: Web • Enterprise App"
          buttonText="Visit App"
          buttonVariant="blueAnimated"
          buttonIcon="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          onButtonClick={() => window.open('https://app.Rahalatek.com', '_blank')}
        />
      </div>
    </div>
  );
};

export default WebProjectsSection; 