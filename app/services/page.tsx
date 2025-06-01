"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "AI Strategy",
    desc: "Develop tailored machine learning solutions that align with your goals.",
  },
  {
    title: "Data Engineering",
    desc: "Design scalable pipelines, data lakes, and analytics environments.",
  },
  {
    title: "Quantitative Modeling",
    desc: "Use advanced modeling and forecasting to drive decision intelligence.",
  },
  {
    title: "Cloud Architecture",
    desc: "Deploy secure, efficient, and flexible cloud-native solutions.",
  },
  {
    title: "Automation Systems",
    desc: "Build AI-powered automation for operations, finance, and customer success.",
  },
  {
    title: "Web3 / Blockchain",
    desc: "Integrate smart contracts and decentralized systems into your stack.",
  },
];

const techStack = [
  "Python",
  "TensorFlow",
  "AWS",
  "Snowflake",
  "Docker",
  "Kubernetes",
  "Next.js",
  "PostgreSQL",
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="relative bg-black text-white min-h-screen overflow-x-hidden flex flex-col justify-between">
        {/* Matrix Background */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none animate-[floatBg_50s_linear_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(109,255,158,0.15) 2.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Hero */}
        <section className="min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6DFF9E] mb-4">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Cutting-edge consulting in AI, data, automation, and innovation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-[0_0_30px_#6DFF9E30] transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6DFF9E] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-24 px-6 text-center bg-[#0d0d0d] border-t border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-8">
            Real Impact. Real Results.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            From enterprise clients to fast-moving startups, we&apos;ve deployed
            solutions that scale, accelerate, and transform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {["Finance AI Dashboard", "Retail Forecasting System", "Blockchain Audit Toolkit"].map(
              (title, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur p-5 rounded-xl border border-white/10 hover:bg-white/10 transition"
                >
                  <h3 className="text-lg font-semibold text-[#6DFF9E] mb-2">{title}</h3>
                  <p className="text-sm text-gray-300">
                    Delivered secure, scalable solutions with measurable business value.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 px-6 text-center bg-black border-t border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-8">
            Tools We Excel With
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto text-white/80 text-sm sm:text-base">
            {techStack.map((tool, i) => (
              <li
                key={i}
                className="px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-[#0a0a0a] border-t border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-6">
            Let&apos;s Build Your Vision
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Whether it&apos;s AI, automation, or a full-stack transformation —
            we&apos;re ready to collaborate and innovate with you.
          </p>
          <button className="bg-[#6DFF9E] text-black font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
            Start a Project
          </button>
        </section>

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
};

export default ServicesPage;