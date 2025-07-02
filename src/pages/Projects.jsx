import { useNavigate } from 'react-router-dom';
import AboutHeader from '../components/AboutHeader';
import ProfessionalOverview from '../components/ProfessionalOverview';
import WebProjectsSection from '../components/WebProjectsSection';
import GameProjectsSection from '../components/GameProjectsSection';
import CustomButton from '../components/CustomButton';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <AboutHeader />
        <ProfessionalOverview />
        <WebProjectsSection />
        <GameProjectsSection />
        
        {/* Call to Action Section */}
        <div className="mt-20 text-center">
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
        </div>
      </div>
    </div>
  );
};

export default Projects; 