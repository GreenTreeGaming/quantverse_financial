"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Finexus Capital",
    industry: "Finance & Investments",
    summary:
      "Built a GPT-powered insights engine automating reporting + client comms.",
    result: "70% reduction in reporting time, 2x engagement boost.",
    tech: ["Next.js", "LangChain", "Pinecone", "Stripe"],
  },
  {
    name: "NeoMart Retail",
    industry: "E-commerce & Retail",
    summary:
      "Deployed a dynamic pricing model with real-time forecasting + alerting.",
    result: "14% increase in AOV, 22% savings in logistics.",
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL"],
  },
];

const OurClientsPage = () => {
  return (
    <>
      <Navbar />

      <main className="relative bg-black text-white min-h-screen overflow-x-hidden">
        {/* Background */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none animate-[floatBg_60s_linear_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(109,255,158,0.08) 2px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Hero */}
        <section className="min-h-[40vh] flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6DFF9E] mb-4">
              Our Clients & Case Studies
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
              Powered by trust, driven by results.
            </p>
          </motion.div>
        </section>

        {/* Case Studies */}
        <section className="py-24 px-6 max-w-6xl mx-auto space-y-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-[#6DFF9E] mb-1">{client.name}</h2>
                <p className="text-sm text-white/60 mb-4 italic">{client.industry}</p>
                <p className="text-gray-300 mb-3">{client.summary}</p>
                <p className="text-white font-semibold mb-4">📈 {client.result}</p>
                <div className="flex flex-wrap gap-2">
                  {client.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Placeholder or Image */}
              <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#6DFF9E1A] to-transparent flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 rounded-full border-4 border-[#6DFF9E] animate-pulse"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-[#0d0d0d] border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-4">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Let’s partner on bold ideas and deliver measurable outcomes.
            </p>
            <a href="/contact">
              <button className="bg-[#6DFF9E] text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
                Let’s Connect
              </button>
            </a>
          </motion.div>
        </section>

        <Footer />

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

export default OurClientsPage;
