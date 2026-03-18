"use client";

import { motion } from "framer-motion";
import {
  Shield, Check, ArrowRight, MessageCircle,
  Network, Lock, Camera, Globe, Search, Activity, FileText, Users,
  Eye, AlertTriangle, Zap,
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
  "Enterprise network design & structured cabling",
  "Next-gen firewall configuration & management",
  "CCTV system installation & IP camera setup",
  "VPN solutions for remote access & site links",
  "Penetration testing & vulnerability assessments",
  "24/7 network monitoring & threat alerting",
  "Full network documentation & topology maps",
  "Staff cybersecurity awareness training",
];

const steps = [
  { num: "01", title: "Security Audit", desc: "We assess your current network topology, existing hardware, open ports, and threat exposure to identify all vulnerabilities." },
  { num: "02", title: "Architecture Design", desc: "A hardened network architecture is designed — segmented VLANs, DMZ zones, firewall rulesets, and CCTV coverage maps." },
  { num: "03", title: "Implementation", desc: "Professional installation of all hardware and software. Every device is documented, labelled, and configured to best practices." },
  { num: "04", title: "Monitor & Maintain", desc: "Ongoing 24/7 monitoring, monthly health reports, and rapid incident response — your network never sleeps and neither do we." },
];

const benefits = [
  { icon: Eye, title: "Total Visibility", desc: "Real-time dashboards show every connected device, traffic pattern, and security event across your entire network." },
  { icon: AlertTriangle, title: "Proactive Threat Defence", desc: "AI-assisted intrusion detection flags anomalies before they become breaches — not after." },
  { icon: Zap, title: "Zero-Downtime Design", desc: "Redundant links, failover routing, and load balancing mean your business stays online even when components fail." },
];

export default function NetworkingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080B16", color: "#F9FAFB" }}>
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,11,22,0.7) 0%, rgba(8,11,22,0.95) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ border: "1px solid rgba(212,175,55,0.3)" }}>
            <Shield size={16} style={{ color: "#D4AF37" }} />
            <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>Networking & Security</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.55 }} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gold-gradient">Enterprise-Grade</span>
            <br /><span className="text-white">Protection</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.55 }} className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            We design, install, and manage secure network infrastructures that keep your business data, operations, and people protected around the clock.
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
            SMAT Concept's Networking & Security service delivers end-to-end infrastructure protection for businesses of all sizes. From structured LAN cabling and enterprise Wi-Fi to next-generation firewalls, VPNs, and CCTV systems — we build the secure digital spine your operations run on. We work with Cisco, Fortinet, Ubiquiti, Mikrotik, and Hikvision ecosystems.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }}>
            Whether you're a bank protecting customer data, a manufacturing plant securing OT networks, or an SME setting up your first proper IT infrastructure, our certified network engineers design and deliver solutions that meet international security standards — including NDPR, ISO 27001, and PCI-DSS compliance frameworks.
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
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-4 text-white">Ready to Secure Your Network?</motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-gray-400 mb-8 max-w-xl mx-auto">
          Start with a free security assessment. We'll identify your vulnerabilities and give you a clear remediation plan.
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
