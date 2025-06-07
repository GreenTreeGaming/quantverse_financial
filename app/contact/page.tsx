"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
              Let’s explore how Quantverse can help elevate your strategy and execution.
            </p>
          </motion.div>
        </section>

        {/* Form + Info */}
        <section className="py-20 px-6 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setResult("Sending...");

              const form = e.target as HTMLFormElement;

              const formData = new FormData(form);
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const message = formData.get("message") as string;

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    access_key: "496f525f-0c66-4168-af6b-288269e7055b",
                    subject: "New Contact Message from Quantverse",
                    from_name: "Quantverse Contact Form",
                    name,
                    email,
                    message,
                    botcheck: "",
                  }),
                });

                const data = await response.json();

                if (data.success) {
                  setResult("Message sent successfully!");
                  form.reset();
                } else {
                  setResult(data.message || "Something went wrong. Please try again.");
                }
              } catch (_) {
                setResult("Network error. Please try again.");
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <input type="hidden" name="access_key" value="496f525f-0c66-4168-af6b-288269e7055b" />
            <input type="hidden" name="subject" value="New Contact Message from Quantverse" />
            <input type="hidden" name="from_name" value="Quantverse Contact Form" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {[
              { label: "Name", type: "text", name: "name", placeholder: "Your name" },
              { label: "Email", type: "email", name: "email", placeholder: "you@example.com" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-sm mb-1 text-gray-300">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6DFF9E] disabled:opacity-50"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                disabled={isSubmitting}
                placeholder="How can we help you?"
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6DFF9E] disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6DFF9E] text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_#6DFF9E80] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <p
                className={`text-sm pt-2 ${
                  result.includes("successfully")
                    ? "text-[#6DFF9E]"
                    : result.includes("Sending")
                    ? "text-gray-400"
                    : "text-red-400"
                }`}
              >
                {result}
              </p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-400"
          >
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#6DFF9E]" />
              <span>quantverseconsulting@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#6DFF9E]" />
              <span>(240) 753-3303</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#6DFF9E] mt-1" />
              <span>
                Plymouth, MN<br />Remote Worldwide
              </span>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="#" className="hover:text-[#6DFF9E]" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-[#6DFF9E]" aria-label="Twitter">
                <Twitter />
              </a>
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
