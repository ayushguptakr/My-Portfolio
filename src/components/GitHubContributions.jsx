import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const GitHubContributions = () => {
  const username = "ayushguptakr"; //GitHub username

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Github className="text-purple-400" />
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My GitHub Activity
        </span>
      </h3>

      {/* Contribution Graph (No API needed) */}
      <div className="mb-8 p-4 bg-black/30 rounded-xl border border-white/10">
        <img 
          src={`https://ghchart.rshah.org/${username}`} 
          alt={`GitHub contributions for ${username}`}
          className="w-full h-auto"
        />
      </div>

      {/* Pinned Repositories (Public data only) */}
      <h4 className="text-lg font-medium text-white mb-4">
        Recent Projects
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Manually add your best projects */}
        <RepoCard 
          name="Portfolio" 
          description="My personal portfolio website" 
          url={`https://github.com/${username}/My-Portfolio`} 
          language="React.js"
            stars={5}
            forks={2}
        />
        <RepoCard 
          name="Online-Voting-System"
          description="A secure online voting system using PHP and MySQL" 
          url={`https://github.com/${username}/Online-Voting-System`}
          language="PHP"
            stars={3}
            forks={1}
        />
        {/* Add 2-4 more projects manually */}
        
      </div>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-purple-400 hover:text-white"
      >
        View Full GitHub Profile
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

// Helper component for manual repo entries
const RepoCard = ({ name, description, url, language, stars = 0, forks = 0 }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all"
  >
    <div className="flex justify-between items-start mb-2">
      <h5 className="font-medium text-white hover:text-purple-300">{name}</h5>
      <ExternalLink className="w-4 h-4 text-gray-400" />
    </div>
    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
      {description}
    </p>
    <div className="flex gap-2">
      {language && (
        <span className="text-xs px-2 py-1 bg-white/10 rounded-full">
          {language}
        </span>
      )}
      <span className="text-xs text-gray-400 flex items-center gap-1">
        <Star className="w-3 h-3" /> {stars}
      </span>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        <GitFork className="w-3 h-3" /> {forks}
      </span>
    </div>
  </a>
);

export default GitHubContributions;