"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
  FiBriefcase,
  FiBookOpen,
} from "react-icons/fi";

const skills = [
  {
    title: "Frontend",
    icon: FiCode,
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Practices",
    icon: FiTool,
    items: [
      "Git",
      "GitHub",
      "Responsive Design",
      "UI/UX",
      "Agile Development",
    ],
  },
];

const experience = [
  {
    company: "Pakistan Software Export Board (PSEB)",
    role: "MERN Stack & Next.js Developer Intern",
    period: "Oct 2025 – Apr 2026",
    points: [
      "Developed MERN stack web applications with Next.js.",
      "Built RESTful APIs and improved application performance.",
      "Collaborated with team members to deliver functional solutions.",
    ],
  },
  {
    company: "KPIT Board",
    role: "Frontend Developer Intern",
    period: "Apr 2025 – Oct 2025",
    points: [
      "Developed responsive UI using React.js, HTML, CSS and JavaScript.",
      "Optimized components and improved UI performance.",
      "Implemented UI/UX designs into functional features.",
    ],
  },
];

const education = [
  {
    institution:
      "City University of Science & Information Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2020 – 2024",
  },
  {
    institution: "Government College of Technology (GCT), Peshawar",
    degree: "Diploma of Associate Engineer (Electrical)",
    period: "2017 – 2020",
  },
  {
    institution: "Government College of Technology (GCT), Peshawar",
    degree: "Diploma in Information Technology (DIT)",
    period: "2019 – 2020",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Background
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Full Stack MERN Developer with hands-on experience
            building responsive and user-friendly web applications.
            I enjoy turning ideas into reliable, scalable digital
            products.
          </p>
        </motion.div>

        {/* About introduction + Photo */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />

              {/* Image */}
              <div className="relative h-[400px] w-[320px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Kamran Khalil - Full Stack MERN Developer"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who I Am
            </p>

            <h3 className="text-3xl font-bold md:text-4xl">
              Building Modern Web Experiences
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm Kamran Khalil, a Full Stack MERN Developer based
              in Peshawar, Pakistan. I specialize in developing
              modern, responsive and user-friendly web applications.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My experience includes working with React.js,
              Next.js, Node.js, Express.js and MongoDB to build
              complete full-stack applications and RESTful APIs.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I enjoy solving problems, learning new technologies
              and turning ideas into reliable digital products.
            </p>

            {/* Quick highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-2xl font-bold text-blue-400">
                  MERN
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Full Stack
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-2xl font-bold text-blue-400">
                  2+
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Internships
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["3+", "Projects"],
            ["2", "Internships"],
            ["MERN", "Stack"],
            ["Full Stack", "Developer"],
          ].map(([number, label]) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {number}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-24">

          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
              What I Work With
            </p>

            <h3 className="text-3xl font-bold">
              Technical Skills
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
                >
                  <Icon className="mb-4 text-2xl text-blue-400" />

                  <h4 className="mb-4 text-lg font-semibold">
                    {skill.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">

          <div className="mb-8 flex items-center gap-3">
            <FiBriefcase className="text-2xl text-blue-400" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Career
              </p>

              <h3 className="text-3xl font-bold">
                Experience
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row">

                  <div>
                    <h4 className="text-xl font-semibold">
                      {job.role}
                    </h4>

                    <p className="mt-1 text-blue-400">
                      {job.company}
                    </p>
                  </div>

                  <span className="text-sm text-slate-500">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3"
                    >
                      <span className="text-blue-400">
                        ▹
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>

          <div className="mb-8 flex items-center gap-3">
            <FiBookOpen className="text-2xl text-blue-400" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Academic Background
              </p>

              <h3 className="text-3xl font-bold">
                Education
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <motion.div
                key={`${item.institution}-${item.degree}`}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10">
                  <FiBookOpen className="text-blue-400" />
                </div>

                <h4 className="font-semibold leading-6">
                  {item.degree}
                </h4>

                <p className="mt-3 text-sm leading-6 text-blue-400">
                  {item.institution}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {item.period}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}