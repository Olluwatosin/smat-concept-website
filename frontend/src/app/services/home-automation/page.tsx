"use client";

import { motion } from "framer-motion";
import {
  Home, Check, ArrowRight, MessageCircle,
  Lightbulb, Camera, Lock, Zap, Mic, Smartphone, Wind, Phone,
  Shield, Settings, Star,
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
  "Smart lighting with scenes & schedules",
  "HD security cameras with night vision & cloud storage",
  "Automated gate & door access control",
  "Real-time energy consumption monitoring",
  "Voice control via Alexa & Google Home",
  "Full remote access via smartphone app",
  "Smart AC scheduling & temperature automation",
  "Video intercom systems for gates & doors",
];

const steps = [
  { num: "01", title: "Home Survey", desc: "Our engineers visit your property to assess wiring, layout, and connectivity — we design around your home, not against it." },
  { num: "02", title: "System Design", desc: "A bespoke automation blueprint is created, covering every device, scene, and control interface in your home." },
  { num: "03", title: "Installation", desc: "Professional hardware installation with zero damage to walls or finishes. All devices are tested and calibrated." },
  { num: "04", title: "App Setup & Training", desc: "Your custom app is configured with scenes, schedules, and alerts. We walk you through every feature until you're confident." },
];

const benefits = [
  { icon: Shield, title: "24/7 Security", desc: "Live camera feeds, motion alerts, and smart lock logs give you constant awareness of who enters your home." },
  { icon: Zap, title: "Cut Energy Bills", desc: "Smart scheduling and energy monitoring typically reduce electricity costs by 25–35% within the first three months." },
  { icon: Star, title: "Effortless Comfort", desc: "One tap — or one voice command — sets the perfect ambience for any moment in your home." },
];

export default function HomeAutomationPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080B16", color: "#F9FAFB" }}>
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,11,22,0.7) 0%, rgba(8,11,22,0.95) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ border: "1px solid rgba(212,175,55,0.3)" }}>
            <Home size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Home Automation</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.55 }} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gold-gradient">Your Home,</span>
            <br /><span className="text-white">Intelligently Controlled</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.55 }} className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Transform your house into a smart, secure, energy-efficient home. Control everything — lights, gates, ACs, cameras — from one app.
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
            SMAT Concept's Home Automation service brings together smart lighting, security, climate control, and access management into one unified ecosystem. Using market-leading hardware — Tuya, KNX, Zigbee, Z-Wave — we build systems that are reliable, beautiful, and genuinely easy to use for the whole family.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }}>
            Ideal for homeowners building new properties or retrofitting existing ones, estate developers looking to differentiate their units, and businesses wanting smart office environments. Whether it's a 2-bedroom apartment or a 10-room mansion, we scale the system to fit the space and the budget.
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
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-4 text-white">Ready to Upgrade Your Home?</motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-gray-400 mb-8 max-w-xl mx-auto">
          Book a free home assessment today and we'll put together a custom smart home package with transparent pricing.
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
