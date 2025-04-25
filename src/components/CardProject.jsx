
import React, { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Modal, Box, Typography, IconButton, Chip, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CardProject = ({ 
  image, 
  title, 
  description, 
  demoLink, 
  githubLink,
  techStack = [],
  features = [],
  id 
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="group relative w-full h-full">
      <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        
        {/* Image section */}
        <div className="relative p-5 z-10 h-full flex flex-col">
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <img
              src={image || '/projects/fallback.jpg'}
              alt={title || 'Project thumbnail'}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.src = '/projects/fallback.jpg';
              }}
            />
          </div>
          
          {/* Content section */}
          <div className="mt-4 space-y-3 flex-grow">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {title || 'Untitled Project'}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {description || 'No description available'}
            </p>

            {/* Tech stack chips */}
            {techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {techStack.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs bg-slate-800/50 rounded-md text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {techStack.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-slate-800/50 rounded-md text-slate-300">
                    +{techStack.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="pt-4 flex items-center justify-between mt-auto">
            <div className="flex gap-3">
              {demoLink && demoLink !== "#" ? (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-all duration-200 border border-blue-500/30"
                >
                  <span>Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm text-gray-500 border border-gray-700/50">
                  No Demo
                </span>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-700/20 hover:bg-slate-700/30 text-slate-300 hover:text-slate-200 transition-all duration-200 border border-slate-600/30"
                >
                  <span>Code</span>
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            
            <button
              onClick={handleOpen}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 hover:text-purple-300 transition-all duration-200 border border-purple-500/30"
            >
              <span>Details</span>
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Details Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-details-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)'
        }}
      >
        <Box sx={{
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
          bgcolor: 'rgb(15 23 42 / 0.8)',
          borderRadius: '12px',
          boxShadow: 24,
          p: 4,
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                color: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image and Action Buttons */}
            <div className="flex flex-col">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img 
                  src={image || '/projects/fallback.jpg'} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-3 mt-6">
                {demoLink && demoLink !== "#" && (
                  <a 
                    href={demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-md font-medium transition-colors text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {githubLink && (
                  <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/80 hover:bg-slate-700 rounded-md font-medium transition-colors text-white"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
            
            {/* Right Column - Project Details */}
            <div className="space-y-6">
              <div>
                <Typography 
                  variant="h4" 
                  component="h2" 
                  gutterBottom
                  className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent"
                >
                  {title}
                </Typography>
                
                <Typography variant="body1" className="text-slate-300">
                  {description}
                </Typography>
              </div>

              {/* Features Section */}
              {features.length > 0 && (
                <div>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
                  <Typography variant="h6" className="text-slate-200 mb-3">
                    Key Features:
                  </Typography>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Section */}
              {techStack.length > 0 && (
                <div>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
                  <Typography variant="h6" className="text-slate-200 mb-3">
                    Technologies Used:
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          backgroundColor: 'rgba(30, 41, 59, 0.5)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CardProject;