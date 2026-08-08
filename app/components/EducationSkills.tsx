"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
  FiLayers,
} from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution:
      "City University of Science & Information Technology",
    period: "2020 – 2024",
    description:
      "Studied computer science with a focus on software development, programming, databases and modern web technologies.",
  },
  {
    degree: "Diploma of Associate Engineer (Electrical)",
    institution: "Government College of Technology (GCT), Peshawar",
    period: "2017 – 2020",
    description:
      "Completed a technical diploma in electrical engineering with practical and technical training.",
  },
  {
    degree: "Diploma in Information Technology (DIT)",
    institution: "Government College of Technology (GCT), Peshawar",
    period: "2019 – 2020",
    description:
      "Completed additional IT training covering computer applications and information technology fundamentals.",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    icon: FiCode,
    skills: [
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
    title: "Backend Development",
    icon: FiServer,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    title: "Database",
    icon: FiDatabase,
    skills: [
      "MongoDB",
      "MySQL",
      "Mongoose",
      "Database Design",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: FiTool,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Responsive Design",
      "Agile Development",
    ],
  },
];

export default function EducationSkills() {
  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Education & Expertise
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Education & Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My academic background and the technologies I use
            to build modern full-stack applications.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* ================= EDUCATION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                <FiBookOpen className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-bold">
                Education
              </h3>
            </div>

            <div className="space-y-5">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-900"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {item.degree}
                      </h4>

                      <p className="mt-2 text-sm font-medium text-blue-400">
                        {item.institution}
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= SKILLS ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                <FiLayers className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-bold">
                Technical Skills
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.div
                    key={group.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-900"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>

                      <h4 className="text-sm font-bold">
                        {group.title}
                      </h4>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}