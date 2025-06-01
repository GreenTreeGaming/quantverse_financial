"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <main className="relative bg-black text-white min-h-screen overflow-x-hidden flex flex-col">
        {/* Background */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none animate-[floatBg_60s_linear_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(109,255,158,0.12) 2px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Hero */}
        <section className="min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6DFF9E] mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Let’s explore how Quantverse can help elevate your strategy.
            </p>
          </motion.div>
        </section>

        {/* Form + Info */}
        <section className="py-16 px-6 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-sm mb-1 text-gray-300">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6DFF9E]"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6DFF9E]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#6DFF9E] text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-gray-400"
          >
            <div>
              <h3 className="text-[#6DFF9E] font-semibold text-lg mb-1">Email</h3>
              <p>team@quantverse.co</p>
            </div>
            <div>
              <h3 className="text-[#6DFF9E] font-semibold text-lg mb-1">Location</h3>
              <p>San Francisco, CA<br />Remote Worldwide</p>
            </div>
            <div>
              <h3 className="text-[#6DFF9E] font-semibold text-lg mb-1">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#6DFF9E]">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6DFF9E]">Twitter / X</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        <Footer />

        {/* Keyframes */}
        <style jsx>{`
          @keyframes floatBg {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-10px, -10px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default ContactPage;