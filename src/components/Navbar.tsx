"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-[#1a1a1a]">
            EVENT <span className="text-[#FF6B35]">FUNKAAR</span>
          </span>
          <span className="text-[10px] text-gray-400 tracking-widest uppercase">
            A Communication World Co.
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full bg-[#FF6B35] text-white text-sm font-semibold hover:bg-[#e85d2a] transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#FF6B35]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-full bg-[#FF6B35] text-white text-sm font-semibold text-center hover:bg-[#e85d2a]"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
