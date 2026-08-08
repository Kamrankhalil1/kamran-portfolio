"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiZap,
  FiGitBranch,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "Building complete web applications using React, Next.js, Node.js, Express.js and MongoDB with a focus on clean and maintainable code.",
  },
  {
    icon: FiCode,
    title: "React & Next.js Development",
    description:
      "Creating modern, responsive and interactive interfaces using React.js, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    icon: FiServer,
    title: "REST API Development",
    description:
      "Designing secure and scalable RESTful APIs with Node.js and Express.js for reliable communication between frontend and backend.",
  },
  {
    icon: FiDatabase,
    title: "Database Development",
    description:
      "Working with MongoDB and MySQL to design, manage and integrate application data efficiently.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive UI Development",
    description:
      "Building responsive interfaces that provide a consistent experience across desktop, tablet and mobile devices.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description:
      "Improving application performance through optimized components, efficient API requests and better frontend architecture.",
  },
  {
    icon: FiGitBranch,
    title: "Git & Version Control",
    description:
      "Using Git and GitHub for source control, collaboration, project management and maintaining organized development workflows.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-900 px-6 py-24 text-white"
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
            What I Do
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Services & Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            I build modern full-stack web applications with a focus
            on performance, usability, scalability and clean code.
          </p>
        </motion.div>

        {/* Services */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition"
              >
                {/* Icon */}

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Title */}

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                {/* Bottom accent */}

                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-2xl border border-blue-900/50 bg-blue-950/20 p-8 text-center"
        >
          <h3 className="text-2xl font-bold">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            I'm always interested in building useful and
            challenging web applications.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Let's Work Together
          </a>
        </motion.div>

      </div>
    </section>
  );
}