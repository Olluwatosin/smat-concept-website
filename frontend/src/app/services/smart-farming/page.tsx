"use client";

import { motion } from "framer-motion";
import {
  Leaf, Check, ArrowRight, MessageCircle,
  Droplets, Wind, Heart, Activity, MapPin, BarChart2,
  TrendingUp, ShieldCheck, Cpu,
} from "lucide-react";
import TechHeader from "../../components/TechHeader";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import Footer from "../../components/Footer";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const features = [
  "Soil moisture & nutrient sensors",
  "Automated drip and sprinkler irrigation",
  "Greenhouse climate monitoring & control",
  "AI-powered crop health & disease detection",
  "Livestock tracking with GPS & biometric tags",
  "Centralised farm management dashboard",
  "Weather API integration & early warnings",
  "Yield prediction & harvest analytics",
];

const steps = [
  { num: "01", title: "Farm Assessment", desc: "On-site survey of your land, crops, water sources, and existing infrastructure to define the optimal system design." },
  { num: "02", title: "Sensor Deployment", desc: "Installation and calibration of IoT sensors — soil probes, weather stations, cameras, and irrigation controllers." },
  { num: "03", title: "Dashboard Setup", desc: "Your live farm dashboard is configured with alerts, automation rules, and analytics tailored to your crops." },
  { num: "04", title: "Training & Support", desc: "Farm staff and management are trained on the platform with 24/7 remote support and scheduled reviews." },
];

const benefits = [
  { icon: TrendingUp, title: "Up to 40% Higher Yields", desc: "Precision irrigation and crop health alerts ensure optimal growing conditions that translate directly to output." },
  { icon: Droplets, title: "Save 60% Water Usage", desc: "Automated soil-sensing irrigation only waters when and where needed, slashing wastage dramatically." },
  { icon: Cpu, title: "Remote Farm Control", desc: "Manage your entire farm from your phone — whether you're on-site or 500 km away." },
];

export default function SmartFarmingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080B16", color: "#F9FAFB" }}>
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,11,22,0.7) 0%, rgba(8,11,22,0.95) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ border: "1px solid rgba(212,175,55,0.3)" }}>
            <Leaf size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Smart Farming</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.55 }} className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gold-gradient">IoT-Powered</span>
            <br /><span className="text-white">Agriculture Revolution</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.55 }} className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            We bring precision agriculture to African farms — smart sensors, automated irrigation, and AI crop analysis that turn data into harvests.
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
            Smart Farming by SMAT Concept integrates IoT sensors, cloud analytics, and AI-driven decision tools into a unified platform that gives farmers unprecedented visibility and control. From smallholder plots to large commercial operations, we deploy technology that reduces waste, boosts yields, and cuts labour costs.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }}>
            Designed for agribusinesses, cooperatives, and large-scale farm estates across Nigeria and West Africa. If you're spending too much on water, losing crops to disease, or making irrigation decisions by gut feel, our smart farming platform gives you data-driven clarity — from the field to your phone screen.
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
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Farm?</motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-gray-400 mb-8 max-w-xl mx-auto">
          Schedule a free farm assessment and see exactly how smart technology can improve your output and reduce your costs.
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

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
