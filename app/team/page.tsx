"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Kavin Gunaseelan",
    school: "St. Thomas Class of 2027",
    majors: "Entrepreneurship & Financial Management",
    minor: "Business Analytics",
    bio: `Kavin is the Co-Founder of QuantVerse Consulting Group, where he leads strategic efforts focused on helping small and mid-sized businesses grow through data-backed marketing, operational optimization, and customer acquisition efficiency.

With deep experience working across industries like education, health and wellness, and hospitality, Kavin has consulted with businesses to solve real-world challenges—ranging from decreasing customer churn to improving digital engagement and increasing ROI on ad spend.

In one consulting engagement, he conducted a full customer journey analysis to identify where leads were dropping off in the sales funnel. By developing a refined targeting strategy and automating follow-up communications, the business saw a 27% improvement in conversion within three months.

Kavin’s strengths lie in financial modeling, strategic planning, and digital marketing analytics. He blends creativity with precision, leveraging tools like Google Analytics, CRM systems, and targeted advertising platforms to deliver measurable improvements.`,
    img: "/kavinp.jpeg",
  },
  {
    name: "Ansh Khosa",
    school: "University of Michigan Class of 2029",
    majors: "Data Science & Mathematics of Finance and Risk Management",
    minor: "",
    bio: `Ansh is the Co-Founder of QuantVerse Consulting Group and a highly skilled analyst with a strong foundation in quantitative finance, statistical modeling, and data science.

In one case, Ansh developed a dynamic pricing model that helped a client identify the most profitable price points across seasonal demand shifts, improving revenue stability without sacrificing competitiveness.

He implemented a multivariable regression analysis on customer data to uncover key retention drivers, allowing the business to prioritize high-impact service features.

Ansh’s core strengths include financial analytics, data visualization, risk modeling, and Python-based analysis. His ability to simplify complex data and extract key insights makes him an invaluable asset for clients seeking both clarity and strategic direction in a numbers-driven world.`,
    img: "/anshp.png",
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6DFF9E] mb-4 drop-shadow-[0_0_10px_#6DFF9E99]">
              Meet Our Founders
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
              Strategic, data-driven, and future-focused. Get to know the leaders behind QuantVerse.
            </p>
          </motion.div>
        </section>

        {/* Founders */}
        <section className="py-20 space-y-28">
          {founders.map((person, i) => (
            <motion.div
              key={person.name}
              className={`max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Text Content */}
              <motion.div
                className="space-y-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#6DFF9E] drop-shadow-[0_0_10px_#6DFF9E40]">
                  {person.name}
                </h2>
                <p className="text-sm text-gray-400 italic">
                  {person.school}
                  {person.majors && ` | Majors: ${person.majors}`}
                  {person.minor && ` | Minor: ${person.minor}`}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {person.bio}
                </p>
              </motion.div>

              {/* Image with effects */}
              <motion.div
                className="relative group w-full max-w-[320px] rounded-2xl overflow-hidden border border-[#6DFF9E30] shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6DFF9E] mb-4 drop-shadow-[0_0_10px_#6DFF9E99]">
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
