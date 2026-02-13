import Link from "next/link";
import {
  FaShieldAlt,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

export const metadata = {
  title: "About Me | Omar Faruk",
  description:
    "Full-stack Developer with 4+ years of experience building scalable, secure, high-performance web applications using Node.js, NestJS, React, MongoDB, and modern DevOps workflows.",
};

const skills = [
  {
    title: "Frontend",
    icon: <FaCode />,
    items: ["React.js", "Next.js", "Vue.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <FaCogs />,
    items: ["Node.js", "NestJS", "Express", "Microservices", "REST APIs"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    items: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "Mongoose"],
  },
  {
    title: "DevOps / Cloud",
    icon: <FaCloud />,
    items: ["AWS", "CI/CD pipelines", "Docker", "DigitalOcean", "jenkins"],
  },
  {
    title: "Security",
    icon: <FaShieldAlt />,
    items: [
      "JWT",
      "API hardening",
      "OWASP best practices",
      "Secure-by-default mindset",
    ],
  },
];

const tools = ["JIRA", "Git", "Micro Frontend architecture"];

const gradientBtn =
  "bg-gradient-to-r from-black to-[#08a9af] hover:from-[#08a9af] hover:to-black text-white px-6 py-2 rounded-lg transition duration-300";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="w-[92%] max-w-7xl mx-auto py-14 md:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#08a9af]" />
              Full-stack Developer • 4+ years
            </div>

            <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Full-stack Developer focused on{" "}
              <span className="bg-gradient-to-r from-black to-[#08a9af] bg-clip-text text-transparent">
                scalable, secure, high-performance
              </span>{" "}
              systems
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700">
              Full-stack Developer with hands-on 4+ years of experience building
              scalable, secure, and high-performance applications. I work across
              frontend and backend stacks with a strong focus on clean
              architecture, microservices, and robust backend engineering.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
              Experienced in REST APIs, authentication systems, CI/CD pipelines,
              AWS services, Docker, and modern deployment strategies. I value
              continuous learning, team collaboration, and shipping meaningful
              products that create measurable business impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/projects" className={gradientBtn}>
                View Projects
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50 transition duration-300"
              >
                View Resume
              </Link>
            </div>

            {/* quick facts */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">Core</p>
                <p className="mt-1 font-semibold text-slate-900">
                  Node.js • NestJS • React
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Production-grade apps and APIs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">DevOps</p>
                <p className="mt-1 font-semibold text-slate-900">
                  CI/CD • Docker • AWS
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Automated delivery and deployments.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">Security</p>
                <p className="mt-1 font-semibold text-slate-900">
                  JWT • API hardening
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Secure-by-default mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="w-[92%] max-w-6xl mx-auto py-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Tech Stack Highlights
            </h2>
            <p className="mt-2 text-slate-700">
              A practical stack I use to ship production-ready solutions.
            </p>
          </div>

          <Link href="/skills" className={gradientBtn}>
            Explore Skills
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-slate-900 text-white shadow-sm">
                  <span className="text-xl">{s.icon}</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </p>
                  <p className="text-sm text-slate-600">
                    Key tools & frameworks
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-slate-700">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#08a9af]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-slate-900 text-white shadow-sm">
                <FaCode className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Tools & Practices
                </p>
                <p className="text-sm text-slate-600">How I work day-to-day</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-slate-700">
              I’m passionate about continuous learning, team collaboration, and
              delivering meaningful products that create business value.
            </p>
          </div>
        </div>
      </section>

      {/* WORK PHILOSOPHY */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Engineering Values
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="font-semibold text-slate-900">Architecture first</p>
              <p className="mt-2 text-slate-700">
                Clean boundaries, scalable design, and maintainable codebases.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="font-semibold text-slate-900">
                Security by default
              </p>
              <p className="mt-2 text-slate-700">
                JWT auth, API hardening, and practical security best practices.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="font-semibold text-slate-900">Ship & iterate</p>
              <p className="mt-2 text-slate-700">
                CI/CD delivery, quality mindset, and continuous improvement.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact" className={gradientBtn}>
              Let’s Work Together
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
