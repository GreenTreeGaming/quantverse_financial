"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const expertise = [
  "Machine Learning",
  "Big Data Systems",
  "Cloud Infrastructure",
  "Risk Analysis",
  "Blockchain & Web3",
  "Real-time Analytics",
  "Custom Tooling",
  "Financial Modeling",
  "Data Governance",
  "LLMs & Chatbots",
  "Cybersecurity",
  "DevOps Engineering",
];

const ExpertisePage = () => {
  return (
    <>
      <Navbar />

      <main className="relative bg-black text-white min-h-screen overflow-x-hidden flex flex-col">
        {/* Floating Matrix Background */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none animate-[floatBg_60s_linear_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(109,255,158,0.12) 2px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Hero Section */}
        <section className="min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6DFF9E] mb-4">
              Our Expertise
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Specialized knowledge across emerging tech, data science, and systems architecture.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-center py-6 px-4 rounded-2xl text-gray-300 hover:bg-white/10 transition"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 px-6 bg-[#0a0a0a] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-6">
              How We Think
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              We combine technical depth with strategic clarity to build systems that are not only performant—but also ethical, scalable, and aligned to your business.
            </p>
          </motion.div>
        </section>

        {/* Quote / Testimonial */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-4xl mx-auto border-l-4 border-[#6DFF9E] pl-6">
            <p className="text-lg sm:text-xl italic text-gray-300">
              “Quantverse helped us implement a fully AI-driven analytics stack across our finance and ops teams. It completely transformed how we think about scale.”
            </p>
            <p className="mt-4 text-[#6DFF9E] font-semibold">— VP, Global Ops, Fintech Client</p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-6 bg-[#0d0d0d] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-4">
              Want to work with us?
            </h2>
            <p className="text-gray-400 mb-6">
              Let&apos;s bring data, engineering, and insight into your next move.
            </p>
            <button className="bg-[#6DFF9E] text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
              Schedule a Consultation
            </button>
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

export default ExpertisePage;