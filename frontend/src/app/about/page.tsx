"use client";

import { motion } from "framer-motion";
import {
  Star, Shield, Lightbulb, Heart, Globe, Leaf,
  ArrowRight, Users, Briefcase, Clock, Map
} from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const team = [
  {
    name: "Salami Muhydeen.O",
    role: "CEO & CTO",
    photo: "/ceo.png",
    bio: "Nigerian technology entrepreneur and self-taught developer focused on building practical digital solutions like RentInDex and digital verification platforms. Salami founded SMAT Concept in 2024 to create world-class, African-built technology.",
  },
  {
    name: "Alaketu A Muhydeen",
    role: "Data Analyst & COO",
    photo: "/coo.png",
    bio: "Expert in data strategy and operational excellence. Alaketu leads the data analysis initiatives and ensures that SMAT Concept's internal operations and client projects are delivered with maximum efficiency and strategic insight.",
  },
  {
    name: "Olabamiji Tolase",
    role: "Customer Service Rep",
    photo: "/customer_service.png",
    bio: "The face of SMAT Concept's client relations. Olabamiji is dedicated to providing exceptional customer support and ensuring that every partner's voice is heard and their needs are met with professionalism and care.",
  },
];

const values = [
  { icon: Star, label: "Excellence", desc: "We hold every line of code and every client interaction to an uncompromising standard of quality." },
  { icon: Lightbulb, label: "Innovation", desc: "We push boundaries, embrace emerging technology, and build solutions that are ahead of their time." },
  { icon: Shield, label: "Integrity", desc: "Transparency, honesty, and ethical conduct are non-negotiable in everything we do." },
  { icon: Heart, label: "Client-First", desc: "Your success is our success. We listen deeply and build exactly what your business needs." },
  { icon: Globe, label: "African Pride", desc: "We are proudly African. We celebrate our roots and are committed to uplifting the continent through technology." },
  { icon: Leaf, label: "Sustainability", desc: "We build for longevity — solutions that are maintainable, scalable, and environmentally conscious." },
];

const timeline = [
  { year: "2019", title: "SMAT Concept Founded", desc: "Salami Muhydeen registered SMAT Concept in Lagos, Nigeria with a focus on custom software for small businesses." },
  { year: "2020", title: "First Enterprise Client", desc: "Secured our first enterprise contract — a document digitalisation project for a mid-sized Lagos law firm." },
  { year: "2021", title: "IoT & Smart Farming Division Launched", desc: "Expanded into hardware-software integration with sensor-based solutions for farms in Ogun and Oyo States." },
  { year: "2023", title: "50+ Projects Milestone", desc: "Crossed 50 completed projects across six service verticals, spanning clients in Nigeria, Ghana, and Kenya." },
  { year: "2025", title: "150+ Projects & Pan-African Vision", desc: "Today SMAT Concept operates across 8 service areas with a team of 20+ specialists, serving 50+ active clients continent-wide." },
];

const stats = [
  { icon: Briefcase, value: "Verified", label: "Project Success" },
  { icon: Users, value: "Premium", label: "Client Partners" },
  { icon: Clock, value: "24/7", label: "Dedicated Support" },
  { icon: Map, value: "Global", label: "Standard Delivery" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#080B16", minHeight: "100vh" }}>
      <TechHeader />

      <main className="pt-20 lg:pt-24">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-16 md:py-24 px-4 dot-grid">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#D4AF37" }}>
              Who We Are
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Our Story,{" "}
              <span className="text-gold-gradient">Our Mission</span>
            </motion.h1>
            <motion.blockquote {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl px-5 py-5 sm:px-8 sm:py-6 text-base sm:text-xl italic text-gray-300 max-w-2xl mx-auto mt-8"
              style={{ borderLeft: "4px solid #D4AF37" }}>
              "I started SMAT Concept because I believed African businesses deserved technology partners who truly understood their context — not imported templates, but solutions built for our realities."
              <footer className="mt-4 text-sm not-italic font-semibold" style={{ color: "#D4AF37" }}>
                — Salami Muhydeen, Founder & CEO
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* ── Founder ── */}
        <section className="section-divider py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -inset-1 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.3), transparent)" }} />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[600px]">
                <Image
                  src="/ceo.png"
                  alt="Salami Muhydeen.O — CEO & CTO"

                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>Meet the Founder</p>
              <h2 className="text-4xl font-bold text-white mb-2">Salami Muhydeen.O</h2>
              <p className="text-lg mb-6" style={{ color: "#D4AF37" }}>Founder & CEO / CTO</p>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Salami Muhydeen is a Nigerian technology entrepreneur and self-taught developer focused on building practical digital solutions for African businesses and everyday challenges.</p>
                <p>In 2024, he founded SMAT Concept & Innovative Solutions, a technology company working across AI integration, digitization, smart systems, data analysis, and web technologies — developing platforms such as RentInDex and digital verification solutions that improve transparency, accessibility, and operational efficiency.</p>
                <p>Driven by a strong belief that African-built technology can compete globally when built right, he is committed to creating scalable solutions that solve real problems and deliver meaningful impact across Africa.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="section-divider py-20 px-4 dot-grid">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>The People Behind the Work</p>
              <h2 className="text-4xl font-bold text-white">Meet the <span className="text-gold-gradient">Core Team</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div key={member.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <Image 
                      src={member.photo} 
                      alt={member.name} 
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,22,0.9) 0%, transparent 60%)" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: "#D4AF37" }}>{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="section-divider py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
              <h2 className="text-4xl font-bold text-white">Mission & <span className="text-gold-gradient">Vision</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  label: "Our Mission",
                  text: "To deliver world-class, context-aware technology solutions that eliminate operational bottlenecks, accelerate growth, and create lasting competitive advantage for African businesses — from startups to enterprises.",
                },
                {
                  label: "Our Vision",
                  text: "To be the most trusted technology partner on the African continent — a company synonymous with craftsmanship, reliability, and the bold belief that Africa's digital future starts today.",
                },
              ].map((item, i) => (
                <motion.div key={item.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card rounded-2xl p-8"
                  style={{ border: "1px solid rgba(212,175,55,0.2)", background: "rgba(212,175,55,0.04)" }}>
                  <div className="w-10 h-1 rounded mb-5" style={{ background: "#D4AF37" }} />
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#D4AF37" }}>{item.label}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="section-divider py-20 px-4 dot-grid">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>What Drives Us</p>
              <h2 className="text-4xl font-bold text-white">Our Core <span className="text-gold-gradient">Values</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.2)" }}>
                    <v.icon size={22} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="section-divider py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>The Journey</p>
              <h2 className="text-4xl font-bold text-white">Company <span className="text-gold-gradient">Timeline</span></h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #D4AF37, rgba(212,175,55,0.1))" }} />
              <div className="space-y-10 pl-16">
                {timeline.map((item, i) => (
                  <motion.div key={item.year} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative">
                    <div className="absolute -left-10 w-4 h-4 rounded-full border-2 top-1"
                      style={{ background: "#080B16", borderColor: "#D4AF37", boxShadow: "0 0 12px rgba(212,175,55,0.4)" }} />
                    <span className="text-xs font-bold tracking-widest" style={{ color: "#D4AF37" }}>{item.year}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="section-divider py-20 px-4 dot-grid">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
                style={{ border: "1px solid rgba(212,175,55,0.2)" }}>
                <s.icon size={28} className="mx-auto mb-3" style={{ color: "#D4AF37" }} />
                <div className="text-4xl font-extrabold text-gold-gradient mb-1">{s.value}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-divider py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to <span className="text-gold-gradient">Work with Us?</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400 mb-8">
              Let's talk about your project. No jargon, no pressure — just an honest conversation about what we can build together.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio"
                className="btn-gold-outline inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="section-divider py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SMAT Concept. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              {[["Home", "/"], ["Services", "/#services"], ["Portfolio", "/portfolio"], ["Pricing", "/pricing"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={label} href={href} className="hover:text-yellow-400 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </footer>
      </main>

      <WhatsAppWidget />
    </div>
  );
}
