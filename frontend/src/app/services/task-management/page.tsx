"use client";

import { motion } from "framer-motion";
import {
  CheckSquare, Check, ArrowRight, MessageCircle,
  BarChart2, Bell, Users, Smartphone, Plug, Lock, Activity,
  Zap, Clock, TrendingUp,
} from "lucide-react";
import TechHeader from "../../components/TechHeader";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const features = [
  "Custom project boards tailored to your workflow",
  "Team collaboration with real-time updates",
  "Automated reminders and deadline alerts",
  "Analytics & reporting dashboards",
  "Native mobile apps for iOS & Android",
  "Integrations with Slack, Jira, Google Workspace",
  "Role-based access control & permissions",
  "Full activity logs and audit trails",
];

const steps = [
  { num: "01", title: "Discovery & Mapping", desc: "We audit your current workflow, identify bottlenecks, and map out the ideal task structure for your team." },
  { num: "02", title: "System Design", desc: "Custom boards, pipelines, and automation rules are designed specifically around your business processes." },
  { num: "03", title: "Build & Integrate", desc: "We configure, integrate with your existing tools, and migrate any historical data — zero disruption." },
  { num: "04", title: "Training & Launch", desc: "Full team onboarding, documentation, and ongoing support so adoption is smooth from day one." },
];

const benefits = [
  { icon: Zap, title: "30% Faster Delivery", desc: "Teams using structured task systems consistently close projects ahead of schedule with fewer missed deadlines." },
  { icon: Clock, title: "Save 8+ Hours / Week", desc: "Eliminate status meetings and manual follow-ups — automation handles it so your team stays in flow." },
  { icon: TrendingUp, title: "Full Visibility", desc: "Real-time dashboards give leadership instant insight into team capacity, blockers, and project health." },
];

export default function TaskManagementPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080B16", color: "#F9FAFB" }}>
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,11,22,0.7) 0%, rgba(8,11,22,0.95) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ border: "1px solid rgba(212,175,55,0.3)" }}>
            <CheckSquare size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Task Management</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.55 }} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gold-gradient">Productivity Systems</span>
            <br /><span className="text-white">That Actually Work</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.55 }} className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            We design and implement task management ecosystems built around how your team actually operates — not generic templates.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.55 }} className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold px-7 py-3 rounded-lg font-semibold flex items-center gap-2">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/2348101235007" target="_blank" rel="noopener noreferrer" className="btn-gold-outline px-7 py-3 rounded-lg font-semibold flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-divider py-16 max-w-5xl mx-auto px-6">
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-6 text-gold-gradient">What Is This Service?</motion.h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
          <motion.p {...fadeUp} transition={{ delay: 0.1 }}>
            SMAT Concept's Task Management service goes beyond software setup. We analyse your organisation's unique workflow, design a custom task architecture, and implement a system — whether Notion, ClickUp, Asana, Monday.com, or a bespoke build — that fits your team like a glove. Every board, every automation, every integration is intentional.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }}>
            Ideal for SMEs, startups, agencies, and corporate teams struggling with missed deadlines, siloed communication, or over-reliance on WhatsApp groups. If your team's work lives in scattered spreadsheets and email threads, this service brings everything into one intelligent, automated command centre.
          </motion.p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-divider py-16" style={{ backgroundColor: "#0C0F1E" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10 text-gold-gradient">What's Included</motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 glass-card glass-card-hover rounded-xl p-4">
                <Check size={18} className="mt-0.5 shrink-0" style={{ color: "#D4AF37" }} />
                <span className="text-gray-200">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-divider py-16 max-w-5xl mx-auto px-6">
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10 text-gold-gradient">How It Works</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6">
              <div className="text-3xl font-black mb-3" style={{ color: "#D4AF37" }}>{s.num}</div>
              <h3 className="font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="section-divider py-16" style={{ backgroundColor: "#0C0F1E" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10 text-gold-gradient">Key Benefits</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card glass-card-hover rounded-2xl p-6 text-center">
                <b.icon size={36} className="mx-auto mb-4" style={{ color: "#D4AF37" }} />
                <h3 className="font-bold text-white text-lg mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section-divider py-16 max-w-5xl mx-auto px-6 text-center">
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-gray-400 mb-8 max-w-xl mx-auto">
          Let's build a productivity system your team will actually use. Contact us today for a free consultation.
        </motion.p>
        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-gold px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
            Get a Quote <ArrowRight size={16} />
          </Link>
          <a href="https://wa.me/2348101235007" target="_blank" rel="noopener noreferrer" className="btn-gold-outline px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </motion.div>
        <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="mt-6 text-sm text-gray-500">
          Or email us at <span style={{ color: "#D4AF37" }}>hello@smatconcept.com</span>
        </motion.p>
      </section>

      <WhatsAppWidget />
    </div>
  );
}
