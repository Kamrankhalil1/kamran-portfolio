"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Kamran<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-3 lg:flex">

          <a
            href="https://github.com/Kamrankhalil1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-blue-500/50 hover:bg-white/5 hover:text-white"
          >
            <FiGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/kamran-khalil-950963266/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-blue-500/50 hover:bg-white/5 hover:text-white"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>

          <a
            href="/Kamran-Khalil-CV.pdf"
            download
            className="ml-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className="mt-4 flex gap-3 border-t border-white/10 pt-4">

            <a
              href="https://github.com/Kamrankhalil1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kamran-khalil-950963266/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>

          {/* Mobile CV */}
          <a
            href="/Kamran-Khalil-CV.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;