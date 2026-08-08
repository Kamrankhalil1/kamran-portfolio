"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    company: "Pakistan Software Export Board (PSEB)",
    role: "MERN Stack & Next.js Developer Intern",
    period: "Oct 2025 – Apr 2026",
    description:
      "Worked on full-stack web applications using the MERN stack and Next.js, contributing to frontend development, backend APIs and application performance.",
    responsibilities: [
      "Developed MERN stack web applications using Next.js.",
      "Built and integrated RESTful APIs for application functionality.",
      "Worked on improving application performance and user experience.",
      "Collaborated with team members to deliver functional solutions.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
    ],
  },

  {
    company: "KPIT Board",
    role: "Frontend Developer Intern",
    period: "Apr 2025 – Oct 2025",
    description:
      "Focused on developing responsive and user-friendly interfaces while translating UI/UX designs into functional web features.",
    responsibilities: [
      "Developed responsive user interfaces using React.js, HTML, CSS and JavaScript.",
      "Optimized components to improve frontend performance.",
      "Implemented UI/UX designs into functional application features.",
      "Worked on creating consistent experiences across different screen sizes.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My professional experience and hands-on development
            journey.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical line */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >

                {/* Timeline icon */}

                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-600 text-white shadow-lg shadow-blue-600/20 md:flex">
                  <FiBriefcase className="h-4 w-4" />
                </div>

                {/* Experience card */}

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-900 md:p-8">

                  {/* Header */}

                  <div className="flex flex-col justify-between gap-4 md:flex-row">

                    <div>
                      <p className="text-sm font-medium text-blue-400">
                        {experience.company}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold">
                        {experience.role}
                      </h3>
                    </div>

                    <div className="flex h-fit items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-xs font-medium text-slate-300">
                      <FiCalendar className="text-blue-400" />
                      {experience.period}
                    </div>

                  </div>

                  {/* Description */}

                  <p className="mt-5 leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}

                  <div className="mt-6">

                    <h4 className="mb-3 text-sm font-semibold text-white">
                      Key Responsibilities
                    </h4>

                    <ul className="space-y-3">
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <li
                            key={responsibility}
                            className="flex gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                  {/* Technologies */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}