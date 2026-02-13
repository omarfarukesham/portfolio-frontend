"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSpinner,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const gradientBtn =
  "bg-gradient-to-r from-black to-[#08a9af] hover:from-[#08a9af] hover:to-black text-white px-6 py-3 rounded-lg transition duration-300 shadow-sm";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "" | "success" | "error";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  // const year = useMemo(() => new Date().getFullYear(), []);

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        text: "Thanks! Your message has been sent. I’ll get back to you as soon as possible.",
      });
      reset();
    } catch {
      setStatus({
        type: "error",
        text: "Sorry — something went wrong. Please try again or contact me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Top accent */}
      <div className=" w-full bg-gradient-to-r from-black via-[#08a9af] to-black" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-[0.10] blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #08a9af 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.08] blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #08a9af 0%, transparent 60%)",
          }}
        />

        <div className="w-[92%] max-w-7xl mx-auto py-14 md:py-16 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#08a9af]" />
              Contact
            </div>

            <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Let’s build something{" "}
              <span className="bg-gradient-to-r from-black to-[#08a9af] bg-clip-text text-transparent">
                impactful
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
              Share a quick overview of your project, timeline, and goals. I’ll
              respond with next steps and a clear plan.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-[92%] max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Instant Contact Information
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Prefer direct contact? Use any of these channels.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid place-items-center h-10 w-10 rounded-xl bg-slate-900 text-white">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a
                      href="mailto:omar.lu86@gmail.com"
                      className="font-medium text-slate-900 hover:underline"
                    >
                      omar.lu86@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid place-items-center h-10 w-10 rounded-xl bg-slate-900 text-white">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone / WhatsApp</p>
                    <a
                      href="https://wa.me/8801775070627"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-slate-900 hover:underline"
                    >
                      +8801775070627
                    </a>
                    <div className="mt-1 text-xs text-slate-500">
                      Usually replies within 6-12 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid place-items-center h-10 w-10 rounded-xl bg-slate-900 text-white">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium text-slate-900">
                      Remote / Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-7 pt-6 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-900">Links</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="https://www.linkedin.com/in/omarfaruk7/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition"
                  >
                    <FaLinkedin className="text-blue-600" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/omarfarukesham"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href="https://wa.me/8801775070627"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition"
                  >
                    <FaWhatsapp className="text-green-600" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Small note card */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                What to include
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#08a9af]" />
                  Project overview + goals
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#08a9af]" />
                  Timeline + priority
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#08a9af]" />
                  Tech preferences (optional)
                </li>
              </ul>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
              {/* Status */}
              {status.text && (
                <div
                  className={[
                    "mb-6 rounded-xl border p-4 text-sm",
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-rose-200 bg-rose-50 text-rose-800",
                  ].join(" ")}
                >
                  {status.text}
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  I’ll review your message and respond with next steps.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-800">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#08a9af] focus:ring-4 focus:ring-[#08a9af]/15"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-rose-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-800">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#08a9af] focus:ring-4 focus:ring-[#08a9af]/15"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-rose-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-800">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#08a9af] focus:ring-4 focus:ring-[#08a9af]/15"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-rose-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-800">
                    Message
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Tell me about your project, goals, and timeline..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#08a9af] focus:ring-4 focus:ring-[#08a9af]/15"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-rose-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className={[
                      "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                      gradientBtn,
                      loading ? "opacity-80 cursor-not-allowed" : "",
                    ].join(" ")}
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  <p className="text-xs text-slate-500">
                    By sending this message, you agree to be contacted back via
                    email/WhatsApp.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
