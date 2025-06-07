"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Navbar />
      <main className="relative bg-black text-white min-h-screen overflow-x-hidden">
        {/* Background Dot Matrix */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-20 pointer-events-none animate-[floatBg_60s_linear_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(109,255,158,0.1) 2.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#6DFF9E] mb-4">
              Our Expertise
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Specialized knowledge across AI, data, systems, and scalable innovation.
            </p>
          </motion.div>
        </section>

        {/* Expertise Grid */}
        <section className="pb-24 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-center py-6 px-4 rounded-2xl text-gray-300 hover:scale-[1.03] hover:bg-white/10 transition-all"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Strategic Philosophy */}
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
              We blend deep technical expertise with business acumen to create secure, ethical, and scalable systems — aligned with your vision and industry demands.
            </p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 px-6 text-center bg-[#0d0d0d]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-6">
            Let&#39;s Build the Future Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Whether it&#39;s a custom LLM pipeline or full-scale digital transformation—Quantverse is your technical partner.
          </p>
          <Link href="/contact">
            <button className="bg-[#6DFF9E] text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
              Schedule a Consultation
            </button>
          </Link>
        </motion.section>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link href="/contact">
            <button className="bg-[#6DFF9E] text-black px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition hover:shadow-[0_0_20px_#6DFF9E80]">
              Let’s Talk →
            </button>
          </Link>
        </div>

        <Footer />

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
    </>
  );
};

export default ExpertisePage;
