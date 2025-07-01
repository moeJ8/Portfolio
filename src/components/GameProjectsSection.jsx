import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import ProjectCard from './ProjectCard';
import Badge from './Badge';
import PlatformIcon from './PlatformIcon';
import { IoGameController } from 'react-icons/io5';
import { SiItchdotio } from 'react-icons/si';

const GameProjectsSection = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 'roller-bowler',
      title: 'Roller Bawler',
      description: 'A 3D rolling ball platformer combining physics-based movement with creative level design. Features level-based progression, coin collection with persistent tracking, unlockable skins, and dynamic day-night skybox.',
      icon: (
        <img 
          src="/roller-bawler-icon.png" 
          alt="Roller Bawler" 
          className="w-16 h-16 object-cover rounded-xl"
        />
      ),
      gradients: ['from-transparent', 'to-transparent'],
      badges: [
        { text: 'Unity', bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
        { text: 'C#', bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' },
        { text: '3D Physics', bgColor: 'bg-blue-100 dark:bg-blue-900/50', textColor: 'text-blue-700 dark:text-blue-300', borderColor: 'border-blue-200 dark:border-blue-700' },
        { text: 'Game Design', bgColor: 'bg-orange-100 dark:bg-orange-900/50', textColor: 'text-orange-700 dark:text-orange-300', borderColor: 'border-orange-200 dark:border-orange-700' }
      ],
      footer: 'Platform: Windows'
    },
    {
      id: 'void-strike',
      title: 'Void Strike',
      description: 'A fast-paced 2D space shooter where you pilot a starfighter through waves of enemies and environmental hazards. Features responsive controls, dynamic enemy spawning, power-ups, and optimized object pooling.',
      icon: (
        <img 
          src="/void-strike-icon.png" 
          alt="Void Strike" 
          className="w-16 h-16 object-cover rounded-xl"
        />
      ),
      gradients: ['from-transparent', 'to-transparent'],
      badges: [
        { text: 'Unity', bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
        { text: 'C#', bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' },
        { text: '2D Graphics', bgColor: 'bg-green-100 dark:bg-green-900/50', textColor: 'text-green-700 dark:text-green-300', borderColor: 'border-green-200 dark:border-green-700' },
        { text: 'Game Design', bgColor: 'bg-orange-100 dark:bg-orange-900/50', textColor: 'text-orange-700 dark:text-orange-300', borderColor: 'border-orange-200 dark:border-orange-700' }
      ],
      footer: 'Platform: Windows'
    }
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="mr-4">
          <PlatformIcon platform="purple" size="section">
            <IoGameController />
          </PlatformIcon>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Game Development Portfolio</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Interactive games and entertainment applications</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {games.map((game) => (
          <div key={game.id} className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              {game.icon}
              <div className="flex flex-wrap gap-2">
                {game.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    text={badge.text}
                    bgColor={badge.bgColor}
                    textColor={badge.textColor}
                    borderColor={badge.borderColor}
                    size="sm"
                  />
                ))}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
              {game.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
              {game.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <span>{game.footer}</span>
              </div>
              <div className="flex gap-2">
                {game.id === 'roller-bowler' && (
                  <CustomButton
                    onClick={() => navigate('/projects/roller-bowler')}
                    variant="blueAnimated"
                    size="sm"
                    className="shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </CustomButton>
                )}
                {game.id === 'void-strike' && (
                  <CustomButton
                    onClick={() => navigate('/projects/void-strike')}
                    variant="purpleAnimated"
                    size="sm"
                    className="shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </CustomButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Itch.io Portfolio Link */}
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4">
              <PlatformIcon platform="itch.io">
                <SiItchdotio />
              </PlatformIcon>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">View my games in Itch.io</h3>
              <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Explore my complete game portfolio</p>
            </div>
          </div>
          <CustomButton
            onClick={() => window.open('https://moe2.itch.io', '_blank')}
            variant="redAnimated"
            size="lg"
            className="shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Profile
          </CustomButton>
        </div>
      </div>

    </div>
  );
};

export default GameProjectsSection; 