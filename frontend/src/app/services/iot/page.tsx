"use client";

import { motion } from "framer-motion";
import {
  Cpu, Check, ArrowRight, MessageCircle,
  Radio, BarChart2, Settings, Cloud, Layers, RefreshCw, Activity,
  Zap, Link2, TrendingUp,
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
  "Custom device prototyping & PCB design",
  "Multi-protocol sensor networks (MQTT, LoRa, Zigbee)",
  "Real-time monitoring dashboards & alerting",
  "Predictive maintenance & anomaly detection",
  "Industrial automation & PLC integration",
  "Cloud platform integration (AWS IoT, Azure IoT Hub)",
  "OTA firmware updates & remote configuration",
  "Centralised device fleet management",
];

const steps = [
  { num: "01", title: "Requirements Workshop", desc: "We map your use case, environment constraints, connectivity options, and data requirements to define the ideal architecture." },
  { num: "02", title: "Prototype & Validate", desc: "A working prototype is built and tested in your environment before full-scale production deployment begins." },
  { num: "03", title: "Deploy & Connect", desc: "Devices are deployed, configured, and connected to your cloud platform. Data pipelines are established and validated." },
  { num: "04", title: "Monitor & Evolve", desc: "Ongoing device health monitoring, firmware management, and feature iteration as your operational needs grow." },
];

const benefits = [
  { icon: Zap, title: "Operational Intelligence", desc: "Live sensor data transforms guesswork into precise, data-driven decisions across your entire operation." },
  { icon: TrendingUp, title: "Predictive Maintenance", desc: "Detect equipment anomalies before failures occur — reducing unplanned downtime by up to 50%." },
  { icon: Link2, title: "Seamless Integration", desc: "Our IoT systems connect to your existing ERP, SCADA, or business intelligence platforms without disruption." },
];

export default function IoTPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080B16", color: "#F9FAFB" }}>
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,11,22,0.7) 0%, rgba(8,11,22,0.95) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ border: "1px solid rgba(212,175,55,0.3)" }}>
            <Cpu size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>IoT Solutions</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.55 }} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gold-gradient">Connected Ecosystems</span>
            <br /><span className="text-white">That Think</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.55 }} className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            We design and deploy custom IoT systems — from edge sensors to cloud dashboards — that give your operations real-time intelligence and automated control.
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
            SMAT Concept builds bespoke Internet of Things solutions from the ground up — custom hardware prototyping, sensor network design, edge computing, and full cloud integration. Whether you're instrumenting a factory floor, a distribution warehouse, a smart building, or a remote field asset, we create the connected system that gives you real-time visibility and control.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }}>
            Our IoT solutions serve manufacturers, utilities, logistics companies, healthcare facilities, and smart city initiatives across Nigeria and West Africa. We work with proven platforms — Arduino, ESP32, Raspberry Pi, STM32 — and enterprise cloud environments including AWS IoT, Azure IoT Hub, and Google Cloud IoT, ensuring your investment scales as your needs evolve.
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
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-4 text-white">Ready to Connect Your Operations?</motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-gray-400 mb-8 max-w-xl mx-auto">
          Share your use case with us and we'll design an IoT architecture that fits your environment, budget, and growth roadmap.
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
