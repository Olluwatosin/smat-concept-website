"use client";

import { motion } from "framer-motion";
import { Binary, Check, ArrowRight, Sparkles, Zap, Bot } from "lucide-react";
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
  "Custom LLM (Large Language Model) integration",
  "Automated document processing & OCR AI",
  "Intelligent company knowledge bases",
  "AI-powered customer support bots",
  "Smart task prioritization & scheduling",
  "Predictive CRM & lead scoring",
  "Natural Language processing for internal tools",
  "Voice-to-action workspace commands",
];

const benefits = [
  { icon: Sparkles, title: "Massive Productivity", desc: "Automate repetitive administrative work, allowing your team to focus on high-impact strategy." },
  { icon: Bot, title: "Consistent Quality", desc: "Ensure every customer interaction and document process meets your exact standards with AI precision." },
  { icon: Zap, title: "Rapid Scaling", desc: "Handle increased volume without proportional headcount growth. AI scales with your ambition." },
];

export default function AIWorkspacePage() {
  return (
    <div className="min-h-screen bg-navy-dark text-gray-100">
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 section-ambient" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/90 to-navy-dark" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card">
            <Binary size={16} className="text-gold" />
            <span className="text-sm font-bold text-gold uppercase tracking-wider">AI Workspace Apps</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Build the Intelligent<br />
            <span className="text-gold-gradient">Future of Work</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop working harder. Start working smarter with custom internal tools supercharged by the world's most advanced AI models.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-full font-bold flex items-center gap-2">
              Automate My Workspace <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-divider py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">Beyond Just<br /><span className="text-gold-gradient">Automation</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Generic AI tools are useful, but custom AI workspace apps are transformative. SMAT Concept builds internal platforms tailored specifically to your data, your clients, and your team's unique workflows.
              </p>
              <p>
                Imagine a CRM that writes its own follow-ups, a knowledge base that answers employee questions instantly, or a project manager that predicts delays before they happen. This isn't science fiction—it's what we build for our clients every day.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 relative overflow-hidden aspect-video flex items-center justify-center">
             <Bot size={120} className="text-gold/20 absolute -bottom-10 -right-10" />
             <div className="text-center relative z-10">
                <div className="text-6xl font-black text-gold-gradient mb-2">Proven</div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Reduction in Manual Task Time</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED (Bento Style) */}
      <section className="section-divider py-24 bg-navy-light/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-12 text-center text-white">AI <span className="text-gold-gradient">Capabilities</span></motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Check size={20} className="text-gold" />
                </div>
                <span className="text-gray-200 font-semibold leading-tight">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="section-divider py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-16 text-white">Why Move to an <span className="text-gold-gradient">AI Workspace?</span></motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card glass-card-hover rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-navy-dark border border-gold/20 flex items-center justify-center mx-auto mb-6">
                  <b.icon size={32} className="text-gold" />
                </div>
                <h3 className="font-bold text-white text-xl mb-4">{b.title}</h3>
                <p className="text-gray-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section-divider py-24 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            {...fadeUp}
            className="relative rounded-3xl overflow-hidden p-12 text-center border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent"
          >
            <h2 className="text-4xl font-black text-white mb-6">Ready to Build Your <span className="text-gold-gradient">AI Advantage?</span></h2>
            <p className="text-gray-400 text-lg mb-10">
              Schedule a strategy session to explore how custom AI tools can optimize your business. The first consultation is on us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold px-10 py-4 rounded-full font-bold flex items-center gap-2">
                Start My AI Journey <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
