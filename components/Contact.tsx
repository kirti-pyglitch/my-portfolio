"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactCards = [
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      label: "Email",
      value: "kirtithisside31@gmail.com",
      link: "mailto:kirtithisside31@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-gold" />,
      label: "Phone",
      value: "+91 9877558919",
      link: "tel:+919877558919"
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      label: "Instagram",
      value: "@kirti_ig_o",
      link: "https://instagram.com/kirti_ig_o"
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Kirti Singh",
      link: "https://linkedin.com"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success state after a delay
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/40 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full glow-spot-gold filter blur-[100px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full glow-spot-maroon filter blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="Let's Connect" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-wide">Get in Touch</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Have an inquiry, project idea, or internship opportunity? Drop me a message or connect via my socials. I will get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => (
                <motion.a
                  key={idx}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center space-x-3.5 p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-gold/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-2.5 bg-maroon/20 rounded-xl border border-maroon/30">
                    {card.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-slate-500 font-mono text-xxs tracking-wider uppercase">{card.label}</p>
                    <p className="text-white font-medium text-xs mt-0.5 truncate">{card.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono tracking-wider uppercase text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-gold/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono tracking-wider uppercase text-slate-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-gold/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono tracking-wider uppercase text-slate-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-gold/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none resize-none transition-colors"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    submitSuccess
                      ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/50"
                      : "bg-maroon hover:bg-maroon-light text-white shadow-lg shadow-maroon/20 hover:shadow-maroon/40 border border-maroon-light hover:border-gold-light"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
