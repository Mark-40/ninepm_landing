"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services",    href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results",     href: "#benefits" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1628]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(44,83,100,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Icon mark */}
          <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-[#2C5364] to-[#7ECCD8]/60 flex items-center justify-center shadow-lg shadow-[#2C5364]/30">
            <span className="text-white font-black text-sm leading-none">9</span>
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-white">
            NinePM
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:arrolle14@gmail.com"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="https://calendly.com/arrolle14/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2 rounded-full bg-[#2C5364] hover:bg-[#3a6b80] text-white transition-all shadow-lg shadow-[#2C5364]/20 hover:shadow-[#2C5364]/40"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-white/[0.06]">
            <a
              href="https://calendly.com/arrolle14/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center text-sm font-medium px-5 py-2.5 rounded-full bg-[#2C5364] hover:bg-[#3a6b80] text-white transition-all"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
