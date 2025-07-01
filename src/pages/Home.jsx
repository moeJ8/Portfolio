import SocialMediaCard from '../components/SocialMediaCard';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PlatformIcon from '../components/PlatformIcon';
import { SiItchdotio } from 'react-icons/si';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Social Media Section */}
      <section id="social-media" className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Connect With Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">Follow my professional journey across digital platforms</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GitHub */}
            <SocialMediaCard
              platform="GitHub"
              url="https://github.com/moeJ8"
              buttonVariant="grayAnimated"
              icon={
                <PlatformIcon platform="github">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </PlatformIcon>
              }
              description="Repository of my projects including web applications, Unity games, and open-source contributions showcasing development skills."
              hashtags={[
                { text: "#OpenSource", bgColor: "bg-gray-100 dark:bg-gray-900/50", textColor: "text-gray-800 dark:text-gray-300", borderColor: "border-gray-200 dark:border-gray-700" },
                { text: "#Projects", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" }
              ]}
              footer="22 Repositories Available"
            />

            {/* Itch.io */}
            <SocialMediaCard
              platform="Itch.io"
              url="https://moe2.itch.io/"
              buttonVariant="redAnimated"
              icon={
                <PlatformIcon platform="itch.io">
                  <SiItchdotio />
                </PlatformIcon>
              }
              description="Game portfolio featuring Unity projects like Roller Bawler and Void Strike. Play browser-based games directly online."
              hashtags={[
                { text: "#GameDev", bgColor: "bg-red-100 dark:bg-red-900/50", textColor: "text-red-800 dark:text-red-300", borderColor: "border-red-200 dark:border-red-700" },
                { text: "#IndieGames", bgColor: "bg-orange-100 dark:bg-orange-900/50", textColor: "text-orange-800 dark:text-orange-300", borderColor: "border-orange-200 dark:border-orange-700" }
              ]}
              footer="2 Games Available to Play"
            />

            {/* LinkedIn */}
            <SocialMediaCard
              platform="LinkedIn"
              url="https://www.linkedin.com/in/mohammad-jada-91209b2a3/"
              buttonVariant="blueAnimated"
              icon={
                <PlatformIcon platform="linkedin">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </PlatformIcon>
              }
              description="Professional network showcasing my career experience, CV, and industry connections in tech and software development."
              hashtags={[
                { text: "#FullStackDeveloper", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300", borderColor: "border-blue-200 dark:border-blue-700" },
                { text: "#MERN", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300", borderColor: "border-purple-200 dark:border-purple-700" }
              ]}
              footer="CV, Experience & Professional Updates"
            />
          </div>


        </div>
      </section>
    </div>
  );
};

export default Home; 