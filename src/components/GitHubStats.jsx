import { useState, useEffect } from 'react';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'moeJ8';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();

        // Filter public repos
        const publicRepos = reposData.filter(repo => !repo.private);

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers
        });
        setRepos(publicRepos.slice(0, 6));

      } catch (err) {
        console.error('GitHub API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6', 
      'Python': '#3776ab',
      'Java': '#ed8b00',
      'C#': '#239120',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'C++': '#00599c',
      'C': '#555555',
      'Shell': '#89e051',
      'Dockerfile': '#384d54'
    };
    return colors[language] || '#8b949e';
  };


  if (loading) {
    return (
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-6 transition-all duration-300">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-6 transition-all duration-300">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">GitHub Stats Unavailable</h3>
          <p className="text-gray-600 dark:text-gray-400">Unable to load GitHub data. Check back later!</p>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl shadow-xl p-6 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">GitHub Activity</h3>
        <a 
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>

      {/* Repository Count */}
      <div className="mb-6">
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.public_repos}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Public Repositories</div>
        </div>
      </div>

      {/* Recent Repositories */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recent Projects</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              onClick={() => window.open(repo.html_url, '_blank', 'noopener,noreferrer')}
              className="relative group cursor-pointer bg-white/60 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/50 rounded-xl shadow-lg hover:shadow-xl p-4 sm:p-5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Repository Title with Icon */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-100 flex-1">
                    {repo.name}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-slate-400 dark:text-slate-500 transition-all duration-300 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:rotate-45 ml-2 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Repository Description */}
                {repo.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2 transition-colors duration-300">
                    {repo.description}
                  </p>
                )}

                {/* Language and Stats */}
                <div className="space-y-2">
                  {repo.language && (
                    <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                      <span 
                        className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      <span className="font-medium">{repo.language}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{repo.stargazers_count}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
