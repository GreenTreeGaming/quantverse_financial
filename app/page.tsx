"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const counters = [
    { label: "Clients Served", value: 120 },
    { label: "AI Models Deployed", value: 87 },
    { label: "Industries Optimized", value: 14 },
  ];

  return (
    <>
      <Navbar />
      <main className="relative bg-black text-white overflow-x-hidden">
        {/* Background Dot Matrix */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none animate-[floatBg_50s_linear_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(109,255,158,0.2) 2.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-[#6DFF9E]">QUANTVERSE</span>{" "}
            <span className="text-[#5F5F5F]">CONSULTING GROUP</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl">
            Data-driven strategy meets cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#6DFF9E] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl hover:scale-105 transition hover:shadow-[0_0_20px_#6DFF9E80]">
              Start a Project
            </button>
            <button className="border border-[#5F5F5F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:border-gray-400 hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </motion.section>

        {/* COUNTERS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center border-t border-white/10 bg-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {counters.map(({ label, value }, i) => (
              <div key={i}>
                <p className="text-4xl sm:text-5xl font-bold text-[#6DFF9E]">
                  {mounted ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      {value}
                    </motion.span>
                  ) : (
                    0
                  )}
                </p>
                <p className="text-sm sm:text-base text-gray-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SERVICES */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-gradient-to-b from-black to-[#0a0a0a]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#6DFF9E]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI Strategy",
                desc: "Tailored AI integration into your business workflows.",
              },
              {
                title: "Data Engineering",
                desc: "Build scalable, reliable pipelines and analytics systems.",
              },
              {
                title: "Quantitative Modeling",
                desc: "Advanced forecasting and decision intelligence.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6DFF9E] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERTISE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-[#0d0d0d]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#6DFF9E]">
            Expertise
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-300">
            {[
              "Machine Learning",
              "Big Data Systems",
              "Cloud Infrastructure",
              "Risk Analysis",
              "Blockchain & Web3",
              "Real-time Analytics",
              "Custom Tooling",
              "Financial Modeling",
            ].map((item, idx) => (
              <li
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition text-sm sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-black"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-6">
            Let’s Build Something
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mb-8">
            Ready to modernize your strategy with data, AI, and custom solutions? We’re here to collaborate.
          </p>
          <button className="bg-[#6DFF9E] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
            Schedule a Consultation
          </button>
        </motion.section>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes floatBg {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-15px, -10px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}