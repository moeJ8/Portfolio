import SkillsExpertiseSection from '../components/SkillsExpertiseSection';
import CertificatesSection from '../components/CertificatesSection';
import GitHubStats from '../components/GitHubStats';
import CustomButton from '../components/CustomButton';
import { FadeInUp, FadeInLeft, FadeInRight } from '../components/ScrollAnimation';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Page Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 dark:from-slate-100 dark:via-white dark:to-slate-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-300 px-4">
            <p>Fullstack Developer & Unity Game Designer</p>
            <p className="text-sm mt-2">Building innovative web applications and interactive experiences</p>
          </div>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 dark:from-slate-500 dark:via-slate-300 dark:to-slate-500 mx-auto rounded-full"></div>
        </FadeInUp>

        {/* Who I Am Section */}
        <FadeInLeft className="mb-12">
          <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Hey there!</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              I'm Mohammad, a fullstack developer who loves building cool stuff with code. I work mainly with the 
              MERN stack for web apps and Unity for games. What gets me excited is turning wild ideas into actual 
              working software that people enjoy using. Whether it's a sleek website or a fun game, I'm all about 
              creating experiences that just work beautifully.
            </p>
          </div>
        </FadeInLeft>

        {/* What I Do Section */}
        <FadeInRight className="mb-12">
          <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">What I Do</h2>
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Web Development</h3>
                              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
                  I build web apps using the MERN stack - from simple landing pages to complex platforms. Check out 
                  <a href="https://glim.blog" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline font-bold transition-colors duration-300"> Glim </a> (a modern blogging platform) and 
                  <a href="https://app.Rahalatek.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline font-bold transition-colors duration-300"> Rahalatek</a> (an enterprise application with real-time features).
                </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Game Development</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                When I'm not building websites, I'm creating games with Unity and C#. It's the perfect mix of coding 
                and creativity! You can play my games on my <button onClick={() => navigate('/projects')} className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline font-bold transition-colors duration-300 bg-transparent border-none cursor-pointer">projects page</button> or 
                <a href="https://moe2.itch.io" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline font-bold transition-colors duration-300"> itch.io</a>.
              </p>
            </div>
          </div>
        </FadeInRight>

        {/* Skills Section */}
        <FadeInUp className="mb-12">
          <SkillsExpertiseSection />
        </FadeInUp>

        {/* Certificates Section */}
        <FadeInLeft className="mb-12">
          <CertificatesSection />
        </FadeInLeft>

        {/* GitHub Stats Section */}
        <FadeInRight className="mb-12">
          <GitHubStats />
        </FadeInRight>

        {/* About Me Section */}
        <FadeInUp className="mb-12">
          <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">A bit more about me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
              I'm all about building things that people actually want to use. Clean code, smooth user experiences, 
              and that "wow, this just works!" feeling - that's what I'm after. I love staying up-to-date with new 
              tech and always learning something new.
            </p>
            
                          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                When I'm not coding, you'll probably find me playing games (for research, obviously), experimenting 
                with new frameworks, or working on side projects that probably don't need to exist but are fun to build. 
                I'm based in Istanbul, Turkey, but the internet means I can work with awesome people everywhere!
              </p>
          </div>
        </FadeInUp>

        {/* Call to Action Section */}
        <FadeInUp className="mt-20 text-center">
          <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-12 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                Connect With Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-300">
                Feel free to reach out and say hello! I'm always up for a good conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton
                  onClick={() => navigate('/contact')}
                  variant="tealAnimated"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Connect
                </CustomButton>
                
                <CustomButton
                  onClick={() => window.open('https://www.linkedin.com/in/mohammad-jada-91209b2a3/', '_blank')}
                  variant="blueAnimated"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn
                </CustomButton>
              </div>

            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default About; 