"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const counters = [
    { label: "Clients Served", value: 6 },
    { label: "Business/Marketing Models Deployed", value: 3 },
    { label: "Industries Optimized", value: 5 },
  ];

  return (
    <>
      <Navbar />
      <main className="relative bg-transparent text-white overflow-x-hidden">
        {/* Particle Background */}
        <div className="fixed inset-0 -z-20">
          <ParticlesBackground />
        </div>

        {/* Dot Matrix Overlay */}
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
          className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        >
          {/* Floating Blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 0.3,
                scale: [0.9, 1.05, 0.9],
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[600px] h-[600px] bg-[#6DFF9E] rounded-full filter blur-3xl top-[-200px] left-[-150px] z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 0.2,
                scale: [1, 1.1, 1],
                x: [0, -10, 10, 0],
                y: [0, 10, -10, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[400px] h-[400px] bg-[#00FFC6] rounded-full filter blur-2xl bottom-[-100px] right-[-100px] z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 0.15,
                scale: [1, 1.2, 1],
                x: [0, 5, -5, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] bg-[#6DFF9E] rounded-full filter blur-2xl top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 z-0"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#6DFF9E] via-white to-[#00FFC6] drop-shadow-[0_0_20px_#6DFF9E80]"
          >
            QUANTVERSE <br className="block sm:hidden" />
            CONSULTING GROUP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 max-w-xl"
          >
            We help businesses grow through strategic consulting, performance marketing, and modern tech—tailored to real-world goals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 max-w-xl"
          >
            Data-driven strategy meets cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <Link href="/contact">
              <button className="bg-[#6DFF9E] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition hover:shadow-[0_0_20px_#6DFF9E80]">
                Book a Free Consultation
              </button>
            </Link>
            <a
              href="#services"
              className="border border-white/30 text-white px-6 py-3 rounded-full hover:scale-105 hover:border-[#6DFF9E] hover:text-[#6DFF9E] transition"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 text-gray-400 animate-bounce"
          >
            <a href="#services">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-sm mt-1 block">Scroll</span>
            </a>
          </motion.div>
        </motion.section>

        {/* COUNTERS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center border-t border-white/10 bg-black/40 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {counters.map(({ label, value }, i) => (
              <div key={i}>
                <p className="text-5xl sm:text-6xl font-extrabold text-[#6DFF9E] drop-shadow-[0_0_10px_#6DFF9E80]">
                  {mounted ? <CountUp end={value} duration={2} delay={i * 0.3} /> : 0}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-3 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SERVICES */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-black/40 backdrop-blur-md"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#6DFF9E]">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Social Media Marketing",
                desc: "Drive engagement and brand growth with data-backed content strategies, automation, and real-time audience insights.",
              },
              {
                title: "Website Development",
                desc: "Design and deploy high-performance, responsive websites that turn visitors into clients—optimized for speed, UX, and SEO.",
              },
              {
                title: "Paid Advertisement",
                desc: "Maximize ROI with precision-targeted ad campaigns across search and social, powered by analytics and A/B testing.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6DFF9E] mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERTISE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-black/40 backdrop-blur-md"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#6DFF9E]">Expertise</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-300">
            {[
              "Machine Learning",
              "Big Data Systems",
              "Marketing",
              "Risk Analysis",
              "Google Ads",
              "Real-time Analytics",
              "Facebook Ads",
              "Financial Modeling",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition text-sm sm:text-base"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-black/40 backdrop-blur-md"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-6">Let’s Build Something</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mb-8">
            Ready to modernize your strategy with data, AI, and custom solutions? We’re here to collaborate.
          </p>
          <Link href="/contact">
            <button className="bg-[#6DFF9E] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80]">
              Schedule a Consultation
            </button>
          </Link>
        </motion.section>

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