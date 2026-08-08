"use client";

import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiShoppingCart,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Application",
    category: "Full Stack Web Application",
    description:
      "A modern e-commerce application with a responsive shopping experience, product browsing, and user-focused interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/ecommerce.png",
    liveUrl: "https://ecommerce-frontend-orcin-xi.vercel.app/",
    githubUrl:
      "https://github.com/Kamrankhalil1/ecommerce-frontend",
    icon: FiShoppingCart,
    gradient: "from-blue-600 to-cyan-500",
  },

  {
    title: "Employee Management System",
    category: "MERN Stack Application",
    description:
      "A complete employee management platform with authentication, role-based access, employee CRUD, departments, attendance, leave management, salary management, notifications, profile management and exports.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
    ],
    image: "/projects/employee-management.png",
    liveUrl:
      "https://employee-management-system-xi-puce.vercel.app/",
    githubUrl:
      "https://github.com/Kamrankhalil1/Employee-management-system",
    icon: FiUsers,
    gradient: "from-indigo-600 to-purple-600",
  },

  {
    title: "Library Management System",
    category: "Full Stack Web Application",
    description:
      "A library management application designed to manage library resources and provide an organized digital experience for users.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/library-management.png",
    liveUrl:
      "https://library-management-client-steel.vercel.app/",
    githubUrl:
      "https://github.com/Kamrankhalil1/library-management-client",
    icon: FiBookOpen,
    gradient: "from-emerald-600 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Here are some of the full-stack applications I have
            designed and developed using modern web technologies.
          </p>
        </motion.div>

        {/* Project cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                {/* Project preview */}

                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="mt-7 flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
                    >
                      <FiGithub />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}