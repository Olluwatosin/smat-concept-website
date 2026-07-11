"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search, Tag, X, User, Calendar, Share2, Leaf, CheckSquare, Home, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Footer from "../components/Footer";
import Link from "next/link";
import BrandCover from "../components/BrandCover";

const BLOG_ICON: Record<string, LucideIcon> = {
  "Smart Farming": Leaf,
  "Task Management": CheckSquare,
  "Home Automation": Home,
  Business: Briefcase,
};

interface Article {
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const featuredArticle: Article = {
  title: "How IoT is Revolutionising Agriculture in Nigeria",
  excerpt:
    "From soil moisture sensors in Kano to automated irrigation in Ogun State, Nigerian farmers are embracing connected technology to boost yields, reduce waste, and secure food for millions. Here's how SMAT Concept is leading that charge from the ground up.",
  content: "The agricultural landscape in Nigeria is undergoing a quiet but powerful transformation. For decades, our farmers relied on historical patterns and guesswork. Today, that is changing. At SMAT Concept, we are deploying IoT (Internet of Things) nodes that monitor soil pH, moisture levels, and nitrogen content in real-time. This data allows for 'Precision Agriculture'—watering only when needed and fertilising exactly where required. The result? 40% higher yields and a significantly lower environmental footprint. This is the future of African food security.",
  author: "Salami Muhydeen.O",
  date: "March 2025",
  readTime: "8 min",
  category: "Smart Farming",
};

const articles: Article[] = [
  {
    title: "5 Signs Your Business Needs a Task Management System",
    excerpt:
      "Missed deadlines, duplicate work, and endless WhatsApp group chaos — if this sounds familiar, your team is overdue for a proper workflow upgrade.",
    content: "If your business operations feel like a constant fire-drill, you aren't alone. Many Nigerian SMEs struggle with 'WhatsApp Management'—where critical tasks are buried in group chats. A dedicated task management system like the ones we build at SMAT Concept provides a single source of truth. It introduces accountability, clear deadlines, and most importantly, visibility for leadership. Stop firefighting and start leading with data-driven workflows.",
    author: "Salami Muhydeen.O",
    date: "Feb 2025",
    readTime: "5 min",
    category: "Task Management",
  },
  {
    title: "Setting Up a Smart Home on a Budget in Lagos",
    excerpt:
      "You don't need to spend millions to automate your home. With the right devices and a local expert, you can start smart for under ₦200,000.",
    content: "Smart homes are often seen as a luxury for the ultra-wealthy in Ikoyi or Victoria Island. However, modular technology has made automation accessible. By starting with smart switches, a central gateway, and essential CCTV, Lagosians can secure their homes and optimize energy for a fraction of the cost. At SMAT, we focus on high-impact, low-cost entries into the digital home experience.",
    author: "Salami Muhydeen.O",
    date: "Feb 2025",
    readTime: "6 min",
    category: "Home Automation",
  },
  {
    title: "Document Digitalization: ROI for Nigerian SMEs",
    excerpt:
      "Paper records cost Nigerian businesses billions in lost time, misfiling, and compliance failures every year. Going digital isn't a luxury — it's survival.",
    content: "The true cost of paper isn't the ream; it's the search time. Research shows employees spend up to 20% of their day just looking for information. In Nigeria, where physical archives are prone to damage and theft, digitalization is a risk management strategy. SMAT Concept provides full-service scanning and intelligent indexing, turning dusty folders into searchable competitive advantages.",
    author: "Salami Muhydeen.O",
    date: "Jan 2025",
    readTime: "7 min",
    category: "Business",
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ─── Article Modal ─────────────────────────────────────────── */
function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,11,22,0.95)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 40 }}
        className="w-full max-w-4xl h-[90vh] bg-navy-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header/Cover */}
        <div className="relative h-64 md:h-80 w-full flex-shrink-0">
          <BrandCover title={article.title} icon={BLOG_ICON[article.category]} label={article.category} seed={article.title.length} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-gold transition-colors z-10"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-8 right-8">
            <span className="px-3 py-1 rounded-full bg-gold text-navy-dark text-xs font-bold uppercase mb-4 inline-block">
              {article.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <User size={16} className="text-gold" />
              <span className="text-sm font-bold text-white">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-500" />
              <span className="text-sm text-gray-400">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-500" />
              <span className="text-sm text-gray-400">{article.readTime} read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-200 leading-relaxed font-light italic mb-8">
              {article.excerpt}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {article.content || "The full technical breakdown of this implementation is currently being archived. Please check back shortly for the deep-dive analysis, or contact our team for a direct consultation on this subject matter."}
            </p>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <h4 className="text-xl font-bold text-white mb-4">Want more insights like this?</h4>
            <div className="flex flex-wrap justify-center gap-4">
               <button onClick={onClose} className="btn-gold-outline px-6 py-3 rounded-full text-sm font-bold">Share Article <Share2 size={14} className="inline ml-1" /></button>
               <Link href="/contact" className="btn-gold px-8 py-3 rounded-full text-sm font-bold">Talk to the Experts</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [activeCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalCount = articles.length + 1; // +1 for featured

  return (
    <div
      className="min-h-screen"
      style={{ background: "#080B16", color: "#F9FAFB" }}
    >
      <TechHeader />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080B16 0%, #0C0F1E 100%)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", color: "#D4AF37" }}>
            <BookOpen className="w-4 h-4" />
            {totalCount} Articles Published
          </motion.div>

          <motion.h1 {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            SMAT <span className="text-gold-gradient">Insights</span>
          </motion.h1>

          <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Practical tech articles for businesses and innovators building Africa's digital future.
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-gray-500 outline-none transition-all bg-navy-light/80 border border-gold/20 focus:border-gold/50"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─────────────────────────────────────── */}
      <section className="section-divider px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.p {...fadeUp} className="text-xs font-bold uppercase tracking-widest mb-8 text-gold/60">Featured Article</motion.p>
          <motion.div
            onClick={() => setSelectedArticle(featuredArticle)}
            {...fadeUp}
            className="glass-card glass-card-hover rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0 cursor-pointer group"
          >
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <BrandCover title={featuredArticle.title} icon={BLOG_ICON[featuredArticle.category]} seed={2} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/40 to-transparent pointer-events-none" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6 w-fit bg-gold/10 border border-gold/20 text-gold">
                <Tag size={12} /> {featuredArticle.category}
              </div>
              <h2 className="text-2xl lg:text-4xl font-black text-white mb-5 leading-tight">{featuredArticle.title}</h2>
              <p className="text-gray-400 mb-8">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-2 font-bold text-sm text-gold">
                Read Full Article <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLES GRID ────────────────────────────────────────── */}
      <section className="section-divider px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filtered.map((article, index) => (
              <motion.div
                key={article.title}
                onClick={() => setSelectedArticle(article)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <BrandCover title={article.title} icon={BLOG_ICON[article.category]} seed={index + 3} className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3 px-2 py-1 rounded bg-gold/10 border border-gold/20 w-fit">{article.category}</span>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-gold transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">{article.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                    <span className="font-bold text-gray-300">{article.author}</span>
                    <div className="flex items-center gap-2">
                       <Clock size={12} /> {article.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
