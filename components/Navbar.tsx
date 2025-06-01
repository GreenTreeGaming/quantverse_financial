"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Expertise", href: "/expertise" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#6DFF9E] font-bold text-xl tracking-wide">
          QUANTVERSE
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-white">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative hover:text-[#6DFF9E] transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6DFF9E] transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100vh" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 h-screen w-full z-50 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center text-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white focus:outline-none"
            >
              <X size={28} />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col gap-8 text-2xl">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#6DFF9E] transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;