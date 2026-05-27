"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, ArrowRight, MessageCircle, 
  Settings2, Layout, Database, Shield, Zap, Star
} from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Footer from "../components/Footer";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const solutionBuilders = [
  {
    id: "enterprise",
    title: "Enterprise Ecosystems",
    desc: "Bespoke internal platforms for large-scale operations.",
    features: ["Multi-department sync", "Advanced AI automation", "SLA-backed infrastructure"],
    icon: Database
  },
  {
    id: "business",
    title: "Business Efficiency",
    desc: "Optimising workflows and case management systems.",
    features: ["Custom CRM/ERP", "Operational analytics", "Team productivity tools"],
    icon: Layout
  },
  {
    id: "security",
    title: "Security & Infrastructure",
    desc: "Hardening your digital perimeter and network backbone.",
    features: ["24/7 SOC monitoring", "Biometric access", "Disaster recovery"],
    icon: Shield
  }
];

export default function PricingPage() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const toggleNeed = (id: string) => {
    setSelectedNeeds(prev => 
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ background: "#080B16", minHeight: "100vh" }}>
      <TechHeader />

      <main className="pt-20 lg:pt-24">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-24 px-4 dot-grid">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 65%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div {...fadeUp} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-bold uppercase tracking-widest" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}>
              <Zap size={14} /> Custom Solutions Only
            </motion.div>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight text-white tracking-tight">
              Pricing Built Around<br />
              <span className="text-gold-gradient">Your Reality</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We don't use generic price tags. We build high-performance technology tailored to your specific needs, scale, and timeline. 
            </motion.p>
          </div>
        </section>

        {/* ── Interactive Builder ── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">What does your business require?</h2>
              <p className="text-gray-500">Select the areas that matter to you, and we'll craft a personalized quote.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {solutionBuilders.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => toggleNeed(item.id)}
                  className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
                    selectedNeeds.includes(item.id) ? "border-gold" : "border-white/5"
                  }`}
                  style={selectedNeeds.includes(item.id) ? { borderColor: '#D4AF37', boxShadow: '0 0 40px rgba(212,175,55,0.1)' } : {}}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    selectedNeeds.includes(item.id) ? "bg-gold text-navy-dark" : "bg-navy-light text-gold"
                  }`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3">
                    {item.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle size={14} className="text-gold" /> {f}
                      </li>
                    ))}
                  </ul>
                  {selectedNeeds.includes(item.id) && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4">
                      <Star className="text-gold fill-gold" size={20} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href={`/contact?interest=${selectedNeeds.join(",")}`}
                className="btn-gold px-12 py-5 rounded-full font-black text-lg inline-flex items-center gap-3 group"
              >
                Request Your Personalised Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="mt-6 text-sm text-gray-500 italic">
                Quotes are decided based on specific scope, complexity, and current resource requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ── Value Props ── */}
        <section className="section-divider py-24 px-4 bg-navy-light/20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                No Hidden Fees.<br />
                <span className="text-gold-gradient">No Rigid Templates.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Individually Scoped", desc: "Every project is priced fairly based on the actual complexity and hours required." },
                  { title: "Phase-Based Payments", desc: "We use milestone-based billing to ensure you only pay for delivered value." },
                  { title: "Scale as You Grow", desc: "Start with essential features and expand your system as your business requirements evolve." }
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                       <CheckCircle className="text-gold" size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-white mb-1">{item.title}</h4>
                       <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-10 relative overflow-hidden aspect-square flex items-center justify-center">
               <Settings2 size={200} className="text-gold/5 absolute -bottom-10 -right-10 animate-spin-slow" />
               <div className="text-center relative z-10">
                  <p className="text-sm font-bold text-gold uppercase tracking-[0.2em] mb-4">Investment Strategy</p>
                  <div className="text-4xl font-black text-white leading-tight">
                    Premium Quality<br />
                    Fairly Decided
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 px-4">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to see the <span className="text-gold-gradient">Full Picture?</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                Schedule a discovery call. We'll listen to your needs and provide a clear, honest roadmap for your technology transformation.
              </p>
              <Link href="/contact" className="btn-gold-outline px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                 Book My Discovery Call <MessageCircle size={20} />
              </Link>
           </div>
        </section>

      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
