'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Skill {
  _id: string;
  name: string;
  icon: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://portfolio-server-mocha-omega.vercel.app/api/skill');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: { data: Skill[] } = await response.json();
        setSkills(data?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center text-red-500">
          <p>Error loading skills: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Technical Skills
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          Heres a comprehensive list of technologies Im proficient in:
        </p>
        
        {skills.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 h-16 w-16 flex items-center justify-center">
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="object-contain"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/default-skill-icon.svg';
                        target.onerror = null;
                      }}
                    />
                  ) : (
                    <div className="text-4xl text-blue-500">?</div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No skills found.
          </p>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;