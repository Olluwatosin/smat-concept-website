"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search, Tag } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";

const categories = [
  "All",
  "Smart Farming",
  "Home Automation",
  "Web Dev",
  "Task Management",
  "IoT",
  "Energy",
  "Business",
];

const featuredArticle = {
  title: "How IoT is Revolutionising Agriculture in Nigeria",
  excerpt:
    "From soil moisture sensors in Kano to automated irrigation in Ogun State, Nigerian farmers are embracing connected technology to boost yields, reduce waste, and secure food for millions. Here's how SMAT Concept is leading that charge from the ground up.",
  author: "Salami Muhydeen",
  date: "March 2025",
  readTime: "8 min",
  category: "Smart Farming",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80",
};

const articles = [
  {
    title: "5 Signs Your Business Needs a Task Management System",
    excerpt:
      "Missed deadlines, duplicate work, and endless WhatsApp group chaos — if this sounds familiar, your team is overdue for a proper workflow upgrade.",
    author: "Salami Muhydeen",
    date: "Feb 2025",
    readTime: "5 min",
    category: "Task Management",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
  },
  {
    title: "Setting Up a Smart Home on a Budget in Lagos",
    excerpt:
      "You don't need to spend millions to automate your home. With the right devices and a local expert, you can start smart for under ₦200,000.",
    author: "Salami Muhydeen",
    date: "Feb 2025",
    readTime: "6 min",
    category: "Home Automation",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Document Digitalization: ROI for Nigerian SMEs",
    excerpt:
      "Paper records cost Nigerian businesses billions in lost time, misfiling, and compliance failures every year. Going digital isn't a luxury — it's survival.",
    author: "Salami Muhydeen",
    date: "Jan 2025",
    readTime: "7 min",
    category: "Business",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=800&q=80",
  },
  {
    title: "Why Every Nigerian Farm Needs a Soil Sensor in 2025",
    excerpt:
      "Guesswork irrigation is wasting water and stunting crops across the country. Real-time soil data can change that overnight — and the hardware is now affordable.",
    author: "Salami Muhydeen",
    date: "Jan 2025",
    readTime: "4 min",
    category: "Smart Farming",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    title: "The Complete Guide to Enterprise Networking Security in Africa",
    excerpt:
      "Cyber attacks targeting African businesses rose by 130% in 2024. Here's what your infrastructure should look like to stay protected.",
    author: "Salami Muhydeen",
    date: "Dec 2024",
    readTime: "10 min",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "Solar + IoT: The Future of Energy in Nigerian Homes",
    excerpt:
      "Pairing solar panels with smart energy monitoring gives homeowners full control over consumption — and dramatically cuts PHCN dependency.",
    author: "Salami Muhydeen",
    date: "Dec 2024",
    readTime: "6 min",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    title: "Building a Full-Stack Web App for Your Nigerian Business",
    excerpt:
      "From choosing the right tech stack to deploying on affordable Nigerian hosting — a practical guide for business owners ready to go digital.",
    author: "Salami Muhydeen",
    date: "Nov 2024",
    readTime: "9 min",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    title: "Automating Your Office: Beyond Smart Lights and AC Control",
    excerpt:
      "True office automation means integrating security, attendance, energy, and meeting room systems into a single intelligent dashboard your team actually uses.",
    author: "Salami Muhydeen",
    date: "Nov 2024",
    readTime: "5 min",
    category: "Home Automation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080B16 0%, #0C0F1E 100%)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        {/* Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#D4AF37",
            }}
          >
            <BookOpen className="w-4 h-4" />
            {totalCount} Articles Published
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
          >
            SMAT{" "}
            <span className="text-gold-gradient">Insights</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Tech knowledge, African context — practical articles for businesses
            and innovators building a smarter Nigeria.
          </motion.p>

          {/* Search */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: "rgba(212,175,55,0.5)" }}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-gray-500 outline-none transition-all"
              style={{
                background: "rgba(15,22,41,0.8)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)")
              }
            />
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─────────────────────────────────────── */}
      <section className="section-divider px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest mb-8"
            style={{ color: "rgba(212,175,55,0.6)" }}
          >
            Featured Article
          </motion.p>

          <motion.a
            href="/contact"
            rel="noopener noreferrer"
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0 cursor-pointer block"
            whileHover={{ scale: 1.01 }}
          >
            {/* Image */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(8,11,22,0.3) 0%, transparent 60%)",
                }}
              />
              {/* Category badge */}
              <div
                className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(212,175,55,0.9)",
                  color: "#080B16",
                }}
              >
                {featuredArticle.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 w-fit"
                style={{
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  color: "#D4AF37",
                }}
              >
                <Tag className="w-3 h-3" /> {featuredArticle.category}
              </div>

              <h2 className="text-2xl lg:text-4xl font-black text-white mb-5 leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#D4AF37", color: "#080B16" }}
                  >
                    SM
                  </div>
                  <span className="text-sm text-white font-medium">
                    {featuredArticle.author}
                  </span>
                </div>
                <span className="text-gray-500 text-sm">{featuredArticle.date}</span>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime} read
                </div>
              </div>

              <div
                className="flex items-center gap-2 font-bold text-sm w-fit"
                style={{ color: "#D4AF37" }}
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ─── CATEGORY FILTER ──────────────────────────────────────── */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={
                  activeCategory === cat
                    ? {
                        background: "linear-gradient(135deg, #D4AF37 0%, #F5D56A 100%)",
                        color: "#080B16",
                      }
                    : {
                        background: "rgba(212,175,55,0.06)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        color: "rgba(212,175,55,0.8)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLES GRID ────────────────────────────────────────── */}
      <section className="section-divider px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No articles match your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((article, index) => (
                <motion.a
                  key={article.title}
                  href="/contact"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer block"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,11,22,0.6) 0%, transparent 60%)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category badge */}
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit"
                      style={{
                        border: "1px solid rgba(212,175,55,0.3)",
                        color: "#D4AF37",
                        background: "rgba(212,175,55,0.06)",
                      }}
                    >
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </div>

                    <h3 className="text-base font-bold text-white mb-3 leading-tight line-clamp-2 flex-1">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 mt-auto"
                      style={{ borderTop: "1px solid rgba(212,175,55,0.08)" }}
                    >
                      <span className="font-medium" style={{ color: "rgba(212,175,55,0.7)" }}>
                        {article.author}
                      </span>
                      <div className="flex items-center gap-3">
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-1.5 mt-4 text-xs font-bold"
                      style={{ color: "#D4AF37" }}
                    >
                      Read Article <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER SIGNUP ────────────────────────────────────── */}
      <section className="section-divider px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-10 lg:p-14"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}
            >
              <BookOpen className="w-7 h-7" style={{ color: "#D4AF37" }} />
            </div>

            <h2 className="text-3xl font-black text-white mb-3">
              Get tech insights in{" "}
              <span className="text-gold-gradient">your inbox</span>
            </h2>
            <p className="text-gray-400 mb-8 text-base leading-relaxed">
              Join 500+ Nigerian business owners and tech enthusiasts who get
              our bi-weekly deep-dives — no spam, just actionable knowledge.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4 rounded-2xl"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}
              >
                <span className="text-lg">🎉</span>
                <span className="font-bold" style={{ color: "#D4AF37" }}>
                  You're subscribed! Welcome aboard.
                </span>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-2xl text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    background: "rgba(8,11,22,0.8)",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)")
                  }
                />
                <button
                  type="submit"
                  className="btn-gold px-8 py-4 rounded-2xl font-bold whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-xs text-gray-600 mt-4">
              No spam. Unsubscribe anytime. Your privacy is respected.
            </p>
          </motion.div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}
