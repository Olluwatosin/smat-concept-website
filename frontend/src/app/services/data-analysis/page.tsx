"use client";

import { motion } from "framer-motion";
import {
  BarChart3, Check, ArrowRight, MessageCircle,
  PieChart, TrendingUp, Search, Database, LineChart,
  Brain, Zap, Shield,
} from "lucide-react";
import TechHeader from "../../components/TechHeader";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import Link from "next/link";
import Image from "next/image";

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

const steps = [
  { num: "01", title: "Data Audit", desc: "We analyze your current data sources, quality, and storage architecture to identify gaps." },
  { num: "02", title: "Strategy", desc: "We define the KPIs and insights that will drive the most value for your specific business goals." },
  { num: "03", title: "Analysis & Build", desc: "Our experts process your data using advanced statistical models and build interactive visualizations." },
  { num: "04", title: "Insights Delivery", desc: "We present actionable findings and deploy real-time dashboards for ongoing monitoring." },
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Growth", desc: "Identify untapped market opportunities and revenue leaks through rigorous statistical analysis." },
  { icon: Brain, title: "Smarter Decisions", desc: "Stop guessing. Use hard data to back your strategic moves and minimize business risk." },
  { icon: Zap, title: "Operational Speed", desc: "Automate your reporting so you spend less time gathering data and more time acting on it." },
];

export default function DataAnalysisPage() {
  return (
    <div className="min-h-screen bg-navy-dark text-gray-100">
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Data Analysis"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/90 to-navy-dark" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card">
            <BarChart3 size={16} className="text-gold" />
            <span className="text-sm font-bold text-gold uppercase tracking-wider">Data Analysis & Insights</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Turn Your Raw Data Into<br />
            <span className="text-gold-gradient">Strategic Intelligence</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We help African businesses unlock the hidden stories in their data, providing the clarity needed to dominate their industry.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-full font-bold flex items-center gap-2">
              Get an Expert Audit <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
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

      <WhatsAppWidget />
    </div>
  );
}
