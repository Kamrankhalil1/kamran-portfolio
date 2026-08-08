"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMail,
    title: "Email",
    value: "kamran.012145@gmail.com",
    href: "mailto:kamran.012145@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+92 333 9167630",
    href: "tel:+923339167630",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project, opportunity or idea? Feel free to
            reach out. I'm always open to discussing new
            opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Contact information */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Whether you're looking for a full-stack developer,
              need help building a web application, or simply
              want to connect, I'd be happy to hear from you.
            </p>

            {/* Details */}

            <div className="mt-8 space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm text-slate-300 transition group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social links */}

            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold text-white">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Kamrankhalil1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FiGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/kamran-khalil-950963266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FiLinkedin size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              action="https://formsubmit.co/kamran.012145@gmail.com"
              method="POST"
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 md:p-8"
            >

              {/* FormSubmit settings */}

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              {/* Email */}

              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              {/* Subject */}

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="Project discussion"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              {/* Message */}

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <FiSend size={17} />

                Send Message
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}