"use client";

import React from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-[#6DFF9E] text-lg tracking-wide">
            QUANTVERSE
          </p>
          <p className="text-gray-400 mt-1">© {new Date().getFullYear()} Quantverse Consulting Group</p>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-400">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#6DFF9E] transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: Note */}
        <div className="text-center md:text-right text-gray-500 text-xs">
          Built with ♥ by{" "}
          <a
            href="https://sarvajithkarun.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6DFF9E] hover:underline"
          >
            Sarvajith Karun
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
