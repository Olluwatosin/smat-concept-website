"use client";

import { motion } from "framer-motion";
import { BarChart3, Check, ArrowRight, TrendingUp, LineChart, Brain, Zap } from "lucide-react";
import TechHeader from "../../components/TechHeader";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import Footer from "../../components/Footer";
import Link from "next/link";
import DashboardMock, { DashboardMockCompact, DashboardMockTrend } from "../../components/DashboardMock";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const features = [
  "Predictive business modeling & forecasting",
  "Custom BI dashboards (PowerBI, Tableau, Custom)",
  "Real-time data visualization systems",
  "Customer behavior & churn analysis",
  "Automated reporting pipelines",
  "Sales & inventory trend analysis",
  "Data cleaning, ETL & architecture design",
  "Statistical audits for operational efficiency",
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Growth", desc: "Identify untapped market opportunities and revenue leaks through rigorous statistical analysis." },
  { icon: Brain, title: "Smarter Decisions", desc: "Stop guessing. Use hard data to back your strategic moves and minimize business risk." },
  { icon: Zap, title: "Operational Speed", desc: "Automate your reporting so you spend less time gathering data and more time acting on it." },
];

export default function DataAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#080B16] text-gray-100">
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 dot-grid opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>
              <BarChart3 size={16} className="text-gold" style={{ color: '#D4AF37' }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Data Analysis & Insights</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
              Turn Your Raw Data Into<br />
              <span className="text-gold-gradient">Strategic Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              We help African businesses unlock the hidden stories in their data, providing the clarity needed to dominate their industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold px-8 py-4 rounded-full font-bold flex items-center gap-2">
                Get an Expert Audit <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px]">
              <DashboardMock />
              {/* Floating compact panel for depth */}
              <div className="absolute -bottom-14 -left-3 md:-left-10 w-[44%] hidden sm:block" style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.55))" }}>
                <DashboardMockTrend />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD SHOWCASE (Moved UP) */}
      <section className="section-divider py-24 px-4 bg-navy-light/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Built for <span className="text-gold-gradient">Real Impact</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The style of live reporting systems we design and deploy — operations, growth, and division-level views in one place.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <DashboardMock />
              <p className="text-sm text-gray-500 font-medium mt-4 text-center">Operations command centre — orders, revenue & delivery KPIs</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <DashboardMockCompact />
              <p className="text-sm text-gray-500 font-medium mt-4 text-center">Division insights — workload share & weekly throughput</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW (Moved DOWN) */}
      <section className="section-divider py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">The Power of<br /><span className="text-gold-gradient">Informed Leadership</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                In today's fast-paced digital economy, data is your most valuable asset—but only if you can interpret it. SMAT Concept provides the technical bridge between raw numbers and profitable decisions.
              </p>
              <p>
                Our data analysts combine deep statistical expertise with business acumen to deliver reports and dashboards that aren't just beautiful, but are fundamentally actionable. We've helped retailers optimize inventory, logistics firms reduce fuel waste, and CEOs sleep better at night.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 relative overflow-hidden aspect-video flex items-center justify-center">
             <LineChart size={120} className="text-gold/20 absolute -bottom-10 -right-10" />
             <div className="text-center relative z-10">
                <div className="text-6xl font-black text-gold-gradient mb-2">Significant</div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Revenue Improvement Potential Identified</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED (Bento Style) */}
      <section className="section-divider py-24 bg-navy-light/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-12 text-center text-white">Our Data <span className="text-gold-gradient">Capabilities</span></motion.h2>
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
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-16 text-white">Why Partner With Our <span className="text-gold-gradient">Analysts?</span></motion.h2>
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
            <h2 className="text-4xl font-black text-white mb-6">Ready to see the <span className="text-gold-gradient">Full Picture?</span></h2>
            <p className="text-gray-400 text-lg mb-10">
              Schedule a free 30-minute consultation with one of our senior data experts. We'll show you exactly how data can transform your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold px-10 py-4 rounded-full font-bold flex items-center gap-2">
                Book My Audit <ArrowRight size={18} />
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
