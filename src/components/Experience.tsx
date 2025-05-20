'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type ExperienceType = {
  _id: string;
  company: string;
  companyIcon?: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  technologies?: string[];
};

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, ] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('https://portfolio-server-mocha-omega.vercel.app/api/experience');
        if (!response.ok) {
          throw new Error('Failed to fetch experiences');
        }
        const data = await response.json();
        setExperiences(data?.data || []);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load experiences');
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-12 text-center text-red-500">
        <p>Error loading experiences: {error}</p>
      </div>
    );
  }

 return (
  <section id="experience" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl  text-center font-bold text-gray-900 sm:text-4xl mb-12">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              {exp.companyIcon && (
                <div className="flex-shrink-0">
                  <Image
                    className="h-14 w-14 rounded-full object-contain bg-gray-50 p-2"
                    src={exp.companyIcon}
                    alt={`${exp.company} logo`}
                    width={56}
                    height={56}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/56';
                    }}
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 truncate">{exp.role}</h3>
                <p className="text-sm text-gray-600">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(exp.startDate)} - {exp.isCurrent ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-700 line-clamp-4">{exp.description}</p>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default Experience;