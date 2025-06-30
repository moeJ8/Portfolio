import SocialMediaCard from '../components/SocialMediaCard';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Social Media Section */}
      <section id="social-media" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Connect With Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">Follow my professional journey across digital platforms</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YouTube */}
            <SocialMediaCard
              platform="YouTube"
              url="https://www.youtube.com/@Moe-22m"
              gradientFrom="from-red-500"
              gradientTo="to-red-600"
              icon={
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              }
              description="Educational content about web development tutorials, game development insights, and programming tips."
              hashtags={[
                { text: "#WebDevelopment", bgColor: "bg-red-100 dark:bg-red-900/50", textColor: "text-red-800 dark:text-red-300" },
                { text: "#GameDev", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300" }
              ]}
              footer="3+ Educational Videos Available"
            />

            {/* LinkedIn */}
            <SocialMediaCard
              platform="LinkedIn"
              url="https://www.linkedin.com/in/mohammad-jada-91209b2a3/"
              gradientFrom="from-blue-600"
              gradientTo="to-blue-700"
              icon={
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              }
              description="Professional network showcasing my career experience, CV, and industry connections in tech and software development."
              hashtags={[
                { text: "#FullStackDeveloper", bgColor: "bg-blue-100 dark:bg-blue-900/50", textColor: "text-blue-800 dark:text-blue-300" },
                { text: "#MERN", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300" }
              ]}
              footer="CV, Experience & Professional Updates"
            />

            {/* Instagram */}
            <SocialMediaCard
              platform="Instagram"
              url="https://www.instagram.com/moe.j22/"
              gradientFrom="from-pink-500"
              gradientTo="to-purple-600"
              icon={
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              }
              description="Visual content showcasing my creative projects, behind-the-scenes development process, and digital media work."
              hashtags={[
                { text: "#CodeLife", bgColor: "bg-pink-100 dark:bg-pink-900/50", textColor: "text-pink-800 dark:text-pink-300" },
                { text: "#TechCreator", bgColor: "bg-purple-100 dark:bg-purple-900/50", textColor: "text-purple-800 dark:text-purple-300" }
              ]}
              footer="Reels, Stories & Visual Content"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 