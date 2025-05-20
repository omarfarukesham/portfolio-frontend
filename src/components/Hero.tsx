'use client';
import Image from 'next/image';
import profileImg from '@/assets/devOmar.png'

const Hero = () => {
  return (
    <section className="w-full mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-gray-50">
       <div className="md:w-1/3 space-y-6 lg:ml-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Hi,
          <br />
          IM Omar Faruk
        </h1>
        <p className="text-lg text-gray-600">
          Full-stack developer specializing in modern web technologies. I build responsive, 
          performant applications using React, Next.js, TypeScript, and Node.js. 
          Passionate about creating efficient solutions with clean code and great user experiences.
        </p>
        <button
          className="bg-gradient-to-r from-black to-[#08a9af] hover:from-[#08a9af] hover:to-black text-white px-6 py-2 rounded-lg transition duration-300"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/Resume.pdf'; 
            link.download = 'omarResume.pdf'; 
            link.click();
          }}
        >
          View Resume
        </button>
      </div>

  
      <div className="relative lg:w-96 lg:h-96 bg-gradient-to-r from-black to-[#08a9af] rounded-lg shadow-lg lg:mr-20">
      
        {/* Image */}
        <div className="absolute inset-3 transform hover:scale-105 duration-300 -rotate-6 overflow-hidden rounded-lg border-2 bg-gradient-to-r from-black to-[#08a9af] bg-gray-100">
        <Image
          src={profileImg} 
          alt="Your Name"
          width={400}
          height={350}
          className="rounded-lg shadow-lg"
        />
        </div>
    </div>
    </section>
  );
};

export default Hero;