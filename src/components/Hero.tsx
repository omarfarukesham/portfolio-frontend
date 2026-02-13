"use client";
import Image from "next/image";
import profileImg from "@/assets/devOmar.png";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50">
      {/* container */}
      <div className="mx-auto w-[92%] max-w-7xl py-12 md:py-16">
        {/* layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8 lg:gap-10">
          {/* Left: Intro (expanded) */}
          <div className="w-full md:flex-1 md:basis-[58%] lg:basis-[62%] space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#08a9af]" />
              Full-stack Developer • Node.js • NestJS • React
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, <br className="hidden sm:block" />
              I’m{" "}
              <span className="bg-gradient-to-r from-black to-[#08a9af] bg-clip-text text-transparent">
                Omar Faruk
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Full-stack Developer with 4+ years of experience building
              scalable, secure, and high-performance web applications. I
              specialize in backend engineering with Node.js / NestJS and modern
              frontend delivery using React and Next.js—focused on clean
              architecture, API design, and production-ready DevOps workflows.
            </p>

            {/* highlight cards - responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <p className="text-xs text-slate-500 font-semibold">Backend</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  APIs • Microservices
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <p className="text-xs text-slate-500 font-semibold">DevOps</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Docker • CI/CD
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <p className="text-xs text-slate-500 font-semibold">Security</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  JWT • API hardening
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                className="bg-gradient-to-r from-black to-[#08a9af] hover:from-[#08a9af] hover:to-black text-white px-6 py-2.5 rounded-lg transition duration-300 shadow-sm"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Resume.pdf";
                  link.download = "omarResume.pdf";
                  link.click();
                }}
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right: Image (keep as-is, but responsive sizing + centered on mobile) */}
          <div className="w-full md:flex-1 md:basis-[42%] lg:basis-[38%] flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-black to-[#08a9af] rounded-lg shadow-lg">
              <div className="absolute inset-3 transform hover:scale-105 duration-300 -rotate-6 overflow-hidden rounded-lg border-2 bg-gradient-to-r from-black to-[#08a9af] bg-gray-100">
                <Image
                  src={profileImg}
                  alt="Omar Faruk"
                  width={400}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
