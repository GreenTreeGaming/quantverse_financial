"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const team = [
  {
    name: "Avery Chen",
    role: "Founder & Principal Architect",
    bio: "Ex-Meta, systems thinker, AI infra specialist with a decade of experience scaling cloud-native architectures.",
    initials: "AC",
  },
  {
    name: "Jordan Vega",
    role: "Lead Data Scientist",
    bio: "Focused on NLP, LLM pipelines, and deploying models into real-world ops. Ex-Stripe, MS in Stats.",
    initials: "JV",
  },
  {
    name: "Nia Thompson",
    role: "Full Stack Engineer",
    bio: "Builder at heart. From API design to pixel-perfect UI, she's shipped platforms across fintech & healthtech.",
    initials: "NT",
  },
  {
    name: "Kai Rami",
    role: "Product Strategist",
    bio: "Turns ambiguity into action. Kai bridges product, users, and engineering with razor-sharp clarity.",
    initials: "KR",
  },
];

const OurTeamPage = () => {
  return (
    <>
      <Navbar />
      <main className="relative bg-black text-white min-h-screen overflow-x-hidden">
        {/* Matrix Background */}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6DFF9E] mb-4">
              Meet Our Team
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
              Visionaries. Engineers. Problem-solvers. This is the crew behind Quantverse.
            </p>
          </motion.div>
        </section>

        {/* Team Grid */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition hover:shadow-[0_0_30px_#6DFF9E50]"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[#6DFF9E20] border border-[#6DFF9E40] text-[#6DFF9E] font-bold flex items-center justify-center text-xl mb-4">
                {member.initials}
              </div>
              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-[#6DFF9E] mb-2">{member.role}</p>
              {/* Bio (Reveal on Hover for desktop) */}
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition line-clamp-3">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-20 text-center border-t border-white/10 bg-[#0a0a0a] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-4">
              Want to Collaborate With Us?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              We’re always open to bold thinkers, curious engineers, and strategic minds.
            </p>
            <a href="/contact">
              <button className="bg-[#6DFF9E] text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
                Join or Partner →
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

export default OurTeamPage;
