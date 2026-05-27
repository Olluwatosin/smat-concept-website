"use client";

import { motion } from "framer-motion";
import {
  Users, Check, ArrowRight, MessageCircle,
  Code2, Terminal, Laptop, GraduationCap,
  Sparkles, Award, Briefcase, Globe,
} from "lucide-react";
import TechHeader from "../../components/TechHeader";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const courses = [
  {
    title: "Full-Stack Web Development",
    desc: "Master modern web technologies from frontend to backend. Includes React, Next.js, and API design.",
    icon: Code2
  },
  {
    title: "Data Analysis & Science",
    desc: "Learn to process, analyze, and visualize data using industry-standard tools and Python.",
    icon: Terminal
  },
  {
    title: "IoT & Hardware Integration",
    desc: "Unique hands-on training in hardware programming, sensors, and connected device ecosystems.",
    icon: Laptop
  },
  {
    title: "Digital Literacy for Pros",
    desc: "Equipping business professionals with the essential digital tools and AI skills for the modern workplace.",
    icon: GraduationCap
  }
];

const benefits = [
  { icon: Sparkles, title: "Practical Learning", desc: "No boring theory. We build real-world projects that solve actual business problems from week one." },
  { icon: Award, title: "Industry Certification", desc: "Earn a certificate backed by SMAT Concept, validating your technical proficiency and project experience." },
  { icon: Briefcase, title: "Career Placement", desc: "Top-performing students get referred to our network of partners or internship opportunities at SMAT." },
];

export default function DigitalTrainingPage() {
  return (
    <div className="min-h-screen bg-navy-dark text-gray-100">
      <TechHeader />

      {/* HERO */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
            alt="Digital Training"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/90 to-navy-dark" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card">
            <GraduationCap size={16} className="text-gold" />
            <span className="text-sm font-bold text-gold uppercase tracking-wider">Digital Training & Classes</span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Empowering the Next<br />
            <span className="text-gold-gradient">Generation of Talent</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We bridge the gap between education and industry. Learn the tech skills that are actually in demand, taught by experts who build these systems every day.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-full font-bold flex items-center gap-2">
              Join Next Cohort <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-divider py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">Industry-Ready<br /><span className="text-gold-gradient">Technical Education</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                At SMAT Concept, we don't just teach code; we teach craftsmanship. Our training programs are born out of our real-world engineering experience. 
              </p>
              <p>
                Whether you are a student looking to start a career, or a professional aiming to stay relevant in the age of AI, our structured classes provide the hands-on exposure you need. We focus on small cohorts to ensure every student gets the attention required to master complex concepts.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 relative overflow-hidden aspect-video flex items-center justify-center">
             <Code2 size={120} className="text-gold/20 absolute -bottom-10 -right-10" />
             <div className="text-center relative z-10">
                <div className="text-6xl font-black text-gold-gradient mb-2">100%</div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Project-Based Learning Curriculum</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* COURSES (Bento Style) */}
      <section className="section-divider py-24 bg-navy-light/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-12 text-center text-white">Our Training <span className="text-gold-gradient">Tracks</span></motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <c.icon size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-bold">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-tight">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="section-divider py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp} className="text-3xl font-black mb-16 text-white">Why Learn With <span className="text-gold-gradient">SMAT Concept?</span></motion.h2>
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
            <h2 className="text-4xl font-black text-white mb-6">Ready to Master the <span className="text-gold-gradient">Digital World?</span></h2>
            <p className="text-gray-400 text-lg mb-10">
              Applications for our next intensive cohort are now open. Secure your spot and start building your future today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold px-10 py-4 rounded-full font-bold flex items-center gap-2">
                Apply for Training <ArrowRight size={18} />
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
