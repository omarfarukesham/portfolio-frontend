import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-[#08a9af]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_30%,white_0,transparent_35%),radial-gradient(circle_at_50%_90%,white_0,transparent_45%)]" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto w-[92%] max-w-7xl py-12">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand / About */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
              <p className="text-sm font-semibold tracking-wide text-white/95">
                Omar Faruk
              </p>
            </div>

            <h4 className="mt-3 text-xl font-semibold">Full-stack Developer</h4>
            <p className="mt-3 text-sm leading-relaxed text-white/85 max-w-md">
              I build scalable, secure, high-performance web applications with
              modern JavaScript stacks (Node.js, NestJS, React, MongoDB) and
              production-ready DevOps workflows.
            </p>

            {/* Contact chips (optional but professional) */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="mailto:omar.lu86@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
              >
                <FaEnvelope />
                Email
              </a>
              <a
                href="https://wa.me/8801775070627"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide text-white/95">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / CTA */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold tracking-wide text-white/95">
              Connect
            </h4>
            <p className="mt-4 text-sm text-white/85">
              Follow my work and updates across platforms.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white/90 hover:bg-white/15 transition"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white/90 hover:bg-white/15 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white/90 hover:bg-white/15 transition"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white/90 hover:bg-white/15 transition"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Optional small CTA button */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-black to-[#08a9af] hover:from-[#08a9af] hover:to-black text-white px-6 py-2 rounded-lg transition duration-300 shadow-sm border border-white/10"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/20 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/80">
            © {year} Omar Faruk. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/80">
            <Link
              href="/privacy"
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
