"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      {/* Final CTA */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-900 p-8 text-center md:p-14"
          >
            {/* Decorative elements */}

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Let's Build Something
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                I'm always interested in working on meaningful
                web applications, exciting products and new
                opportunities.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:kamran.012145@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <FiMail />
                  Get In Touch
                </a>

                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:bg-white/5 hover:text-white"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer content */}

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-12">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* About */}

            <div className="lg:col-span-2">
              <Link
                href="#home"
                className="text-2xl font-bold"
              >
                Kamran<span className="text-blue-500">.</span>
              </Link>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Full Stack MERN Developer focused on building
                modern, responsive and scalable web applications
                using React, Next.js, Node.js and MongoDB.
              </p>

              <div className="mt-6 flex items-center gap-3">

                <a
                  href="https://github.com/Kamrankhalil1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/kamran-khalil-950963266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FiLinkedin />
                </a>

                <a
                  href="mailto:kamran.012145@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FiMail />
                </a>

              </div>
            </div>

            {/* Quick Links */}

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>

              <div className="mt-5 space-y-4">

                <a
                  href="mailto:kamran.012145@gmail.com"
                  className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <FiMail className="mt-0.5 shrink-0 text-blue-400" />
                  <span>
                    kamran.012145@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+923339167630"
                  className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <span className="shrink-0 text-blue-400">
                    +92
                  </span>
                  <span>
                    333 9167630
                  </span>
                </a>

                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <FiMapPin className="mt-0.5 shrink-0 text-blue-400" />
                  <span>
                    Peshawar, Khyber Pakhtunkhwa,
                    Pakistan
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-12 flex flex-col gap-5 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Kamran Khalil.
              All rights reserved.
            </p>

            <p className="text-xs text-slate-500">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center self-end rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white sm:self-auto"
            >
              <FiArrowUp />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}