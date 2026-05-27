"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with SMAT Concept?",
        a: "Start by booking a free discovery call via our Contact page or WhatsApp. We'll spend 30–60 minutes understanding your goals, existing systems, and challenges. From there we propose a scope, timeline, and investment — all before you commit to anything.",
      },
      {
        q: "Is the first consultation really free?",
        a: "Yes, completely free. No strings attached. We invest in the discovery phase because we want to make sure we're the right fit for your project before either side commits.",
      },
      {
        q: "How long does a typical project take?",
        a: "It depends heavily on scope. A landing website: 2–3 weeks. A full web application or custom AI workspace: 6–12 weeks. IoT installations (smart farming, home automation): 1–4 weeks depending on site conditions. We always give a firm timeline before work starts.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    items: [
      {
        q: "Why don't you list prices on the website?",
        a: "Every client's needs are different. A startup needs something different than an enterprise — and charging everyone the same flat rate would be unfair in either direction. We scope each project individually and give you a detailed breakdown before any commitment.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers (Nigerian banks), Paystack, Flutterwave, and international wire transfers. We typically structure projects as 50% upfront and 50% on delivery, though we can discuss milestone-based payments for larger engagements.",
      },
      {
        q: "Do you offer retainer or ongoing support plans?",
        a: "Yes. Many clients retain us for monthly maintenance, feature additions, data analysis reports, or ongoing IT support. Retainer rates are discussed at the end of the initial project.",
      },
    ],
  },
  {
    category: "Services & Capabilities",
    items: [
      {
        q: "Can you work with our existing systems and software?",
        a: "Almost always yes. We regularly integrate with existing CRMs, ERPs, accounting software, and databases. Our engineers assess your current stack during discovery and design a solution that works with — not against — what you have.",
      },
      {
        q: "Do you only serve Nigerian companies?",
        a: "No. We work with clients across West Africa and internationally. Our physical installation services (IoT, home automation, networking) are focused on Nigeria, but software development, data analysis, and AI workspace projects are delivered remotely worldwide.",
      },
      {
        q: "What industries have you worked in?",
        a: "Logistics and verification, fintech, agriculture, education, hospitality, retail, government agencies, and healthcare. Our cross-industry experience means we bring battle-tested patterns from other sectors to every new client.",
      },
      {
        q: "Do you do hardware as well as software?",
        a: "Yes. For smart farming, home automation, CCTV, IoT, and energy solutions, we handle both the physical hardware installation and the software platform that controls and monitors it. End-to-end.",
      },
    ],
  },
  {
    category: "Process & Delivery",
    items: [
      {
        q: "Will I be able to see progress during the project?",
        a: "Yes. We work in weekly sprints and share updates — demos, screenshots, or staging environments — so you always know where things stand. No radio silence for months then a big reveal.",
      },
      {
        q: "What happens after the project is delivered?",
        a: "All our projects include a 30-day post-launch support window at no extra cost. After that, we offer retainer plans or ad-hoc support billed hourly. We don't just build and disappear.",
      },
      {
        q: "Do you provide training for our team?",
        a: "Yes. Every delivery includes documentation and a handover session where we train whoever will use or manage the system. For complex platforms, we offer extended training packages.",
      },
    ],
  },
  {
    category: "Data & Security",
    items: [
      {
        q: "How do you handle our data and confidentiality?",
        a: "We sign NDAs before any sensitive information is shared. Client data is handled with strict access controls — only the engineers assigned to your project ever see it. We don't store client data beyond what's needed for the project.",
      },
      {
        q: "Are your applications secure?",
        a: "Security is built in from the start, not bolted on. We follow OWASP best practices, implement proper authentication and authorization, use encrypted connections, and perform security reviews before launch.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-semibold text-sm leading-relaxed transition-colors ${open ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: open ? "#D4AF37" : "#6B7280" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#080B16]">
      <TechHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="section-badge mx-auto mb-6"
          >
            Frequently Asked Questions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl font-black text-white mb-6 leading-tight"
          >
            Everything You Need
            <span className="block text-gold-gradient mt-1">to Know</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Answers to the most common questions about working with SMAT Concept.
            Can&apos;t find what you&apos;re looking for? Just ask us directly.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {faqs.map((section, i) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <h2 className="font-display text-lg font-bold mb-4" style={{ color: "#D4AF37" }}>
                  {section.category}
                </h2>
                <div className="glass-card rounded-2xl px-6 overflow-hidden">
                  {section.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass-card rounded-2xl p-10"
            style={{ border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <h3 className="font-display text-2xl font-black text-white mb-3">Still have questions?</h3>
            <p className="text-gray-400 mb-7 text-sm">Our team typically responds within a few hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold px-7 py-3 rounded-full font-bold inline-flex items-center gap-2">
                Send a Message <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/2348101235007" target="_blank" rel="noopener noreferrer" className="btn-gold-outline px-7 py-3 rounded-full font-bold inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
