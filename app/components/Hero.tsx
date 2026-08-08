"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl font-bold lg:text-7xl">
            Kamran Khalil
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300">
            Full Stack MERN Developer
          </h2>

          <div className="mt-4 flex items-center gap-2 text-slate-400">
            <FiMapPin />
            <span>Peshawar, Pakistan</span>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Full Stack MERN Developer with experience building
            scalable web applications using React, Next.js,
            Node.js, Express.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-900"
            >
              Contact Me
            </a>

            <a
              href="/Kamran-Khalil-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-900"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/Kamrankhalil1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-slate-800 p-4 text-slate-300 transition hover:bg-blue-600 hover:text-white"
            >
              <FiGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/kamran-khalil-950963266/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-slate-800 p-4 text-slate-300 transition hover:bg-blue-600 hover:text-white"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right side - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-full bg-blue-600/20 blur-2xl" />

            {/* Image container */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-blue-500/40 bg-slate-900 shadow-2xl shadow-blue-500/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/profile.png"
                alt="Kamran Khalil - Full Stack MERN Developer"
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>

            {/* Small decorative element */}
            <div className="absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-600 text-2xl shadow-lg">
              💻
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}