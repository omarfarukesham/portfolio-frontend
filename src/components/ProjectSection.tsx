'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  isFeatured?: boolean;
  tags?: string[];
  github?: string;
  liveUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showDetails, setShowDetails] = useState<Project | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-server-mocha-omega.vercel.app/api/project');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const loadMore = () => setVisibleProjects((prev) => prev + 3);
  const hasMoreProjects = visibleProjects < projects.length;

  const toggleDescription = (projectId: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  if (error) {
    return (
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            My Projects
          </h2>
          <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg max-w-md mx-auto">
            Error loading projects: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 relative">
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <Skeleton height={200} className="w-full" />
                <div className="p-6">
                  <Skeleton count={1} height={30} className="mb-4" />
                  <Skeleton count={3} />
                  <div className="mt-4 flex space-x-4">
                    <Skeleton circle width={24} height={24} />
                    <Skeleton width={100} height={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, visibleProjects).map((project) => (
                <div
                  key={project._id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {project.isFeatured && (
                      <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="relative">
                      <p className={`text-gray-600 dark:text-gray-300 mb-4 ${expandedDescriptions[project._id] ? '' : 'line-clamp-3'}`}>
                        {project.description}
                      </p>
                      <button
                        onClick={() => toggleDescription(project._id)}
                        className="text-blue-500 text-sm flex items-center"
                      >
                        {expandedDescriptions[project._id] ? (
                          <>
                            <FiChevronUp className="mr-1" /> Show less
                          </>
                        ) : (
                          <>
                            <FiChevronDown className="mr-1" /> Read more
                          </>
                        )}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            aria-label="GitHub repository"
                          >
                            <FaGithub className="text-xl" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            aria-label="Live demo"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => setShowDetails(project)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {hasMoreProjects && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium flex items-center mx-auto"
                >
                  Load More Projects
                  <FiChevronDown className="ml-2" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowDetails(null)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 transition-colors p-2"
              aria-label="Close modal"
            >
              <FiX className="text-2xl" />
            </button>
            
            <div className="relative h-64 w-full">
              <Image
                src={showDetails.thumbnail}
                alt={showDetails.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {showDetails.title}
                </h3>
                {showDetails.isFeatured && (
                  <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Featured Project
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {showDetails.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {showDetails.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {showDetails.tags && showDetails.tags.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {showDetails.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mt-8">
                {showDetails.github && (
                  <a
                    href={showDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                )}
                {showDetails.liveUrl && (
                  <a
                    href={showDetails.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                <p>Created: {new Date(showDetails.createdAt).toLocaleDateString()}</p>
                <p>Last updated: {new Date(showDetails.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;