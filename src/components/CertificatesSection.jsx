import { useState } from 'react';

const CertificatesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Full stack MERN Blog Project: MERN Stack Blog with Dashboard",
      issuer: "Udemy",
      date: "Apr 2025",
      type: "Web Development",
      link: "https://www.udemy.com/certificate/UC-1133299f-a1e6-4032-bddf-e5358072483f/",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Node.js & MongoDB: Developing Back-end Database Applications",
      issuer: "IBM",
      date: "Dec 2024",
      type: "Backend Development",
      link: "https://www.coursera.org/account/accomplishments/verify/WSMCC9AO70KE",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 3,
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
      date: "Nov 2024",
      type: "Backend Development",
      link: "https://www.coursera.org/account/accomplishments/verify/P57C3VT1HOUL",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "Game Design and Development 1: 2D Shooter",
      issuer: "Michigan State University",
      date: "Nov 2024",
      type: "Game Development",
      link: "https://www.coursera.org/account/accomplishments/verify/YN9L3OG34BCW",
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 5,
      title: "Designing User Interfaces and Experiences (UI/UX) (with Honors)",
      issuer: "IBM",
      date: "Oct 2024",
      type: "Design",
      link: "https://www.coursera.org/account/accomplishments/verify/3I46FXB5ZS0U",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      id: 6,
      title: "JavaScript Programming Essentials",
      issuer: "IBM",
      date: "Aug 2024",
      type: "Programming",
      link: "https://www.coursera.org/account/accomplishments/verify/WW17SVRCQK70",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 7,
      title: "C# for .NET Developers",
      issuer: "Board Infinity",
      date: "Mar 2024",
      type: "Programming",
      link: "https://www.coursera.org/account/accomplishments/verify/53HDK3JLJNYD?utm_source=wa&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      gradient: "from-purple-500/20 to-violet-500/20"
    }
  ];

  const handleCertificateClick = (certificate) => {
    if (certificate.link) {
      window.open(certificate.link, '_blank', 'noopener,noreferrer');
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Web Development':
        return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700';
      case 'Backend Development':
        return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700';
      case 'Game Development':
        return 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700';
      case 'Design':
        return 'bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-700';
      case 'Programming':
        return 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700';
      default:
        return 'bg-gray-100 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
          Certificates & Achievements
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 px-2">
          Professional certifications and continuous learning achievements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleCertificateClick(cert)}
            onMouseEnter={() => setHoveredCard(cert.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`
              relative group cursor-pointer
              bg-white/60 dark:bg-slate-950/40 backdrop-blur-md
              border border-slate-200/60 dark:border-slate-600/50
              rounded-xl shadow-lg hover:shadow-xl
              p-4 sm:p-5
              transition-all duration-300 ease-in-out
              hover:scale-[1.02] hover:-translate-y-1
              ${hoveredCard === cert.id ? 'border-slate-300/80 dark:border-slate-500/80' : ''}
            `}
          >
            {/* Gradient Background Overlay */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Certificate Type Badge */}
              <div className="flex justify-between items-start mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors duration-300 ${getTypeColor(cert.type)}`}>
                  {cert.type}
                </span>
                <svg 
                  className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-all duration-300 ${hoveredCard === cert.id ? 'text-slate-600 dark:text-slate-300 transform rotate-45' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              {/* Certificate Title */}
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-100">
                {cert.title}
              </h3>

              {/* Issuer and Date */}
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-600">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Click on any certificate to view the credential details
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
