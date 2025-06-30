import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSocialMediaClick = () => {
    const socialMediaSection = document.getElementById('social-media');
    if (socialMediaSection) {
      socialMediaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-20 lg:py-32">
        <div className="text-center">
          {/* Profile Avatar Placeholder */}
          <div className="mb-8">
            <div className="mx-auto h-40 w-40 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 border-4 border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center shadow-2xl">
              <div className="text-6xl font-bold text-white">MJ</div>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Mohammad Jada
            </span>
          </h1>
          
          {/* Professional Title */}
          <p className="text-2xl md:text-3xl font-light text-blue-100 mb-4">
            Fullstack Developer & Unity Game Designer
          </p>
          
          {/* Professional Tagline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-8">
            <p className="text-lg font-medium">Building Digital Experiences That Matter</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSocialMediaClick}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Connect With Me
            </button>
            <button
              onClick={() => navigate('/about')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 