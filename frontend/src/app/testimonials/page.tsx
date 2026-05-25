"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Users, Briefcase, TrendingUp, Award, ArrowRight, CheckCircle } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const stats = [
  { value: "Premium", label: "Client Partners", icon: Users },
  { value: "Verified", label: "Project Success", icon: Briefcase },
  { value: "Proven", label: "Technical Insight", icon: TrendingUp },
  { value: "World-Class", label: "Quality Standard", icon: Award },
];

const featuredTestimonial = {
  quote:
    "SMAT Concept & Innovative Solutions helped transform our workflow from a manual documentation and spreadsheet-based process into a centralized digital workspace tailored to our operations. The custom dashboard introduced real-time case tracking, operational analytics, SLA monitoring, and improved workflow visibility, allowing management to make faster and more informed decisions. We highly recommend them to organizations looking to modernize.",
  name: "Management Team",
  role: "Operations Division",
  company: "TheRecord Consults",
  service: "Digital Workspace",
  rating: 5,
};

const testimonials = [
  {
    quote:
      "We had thousands of paper files going back fifteen years. SMAT digitalized everything in under a month — searchable, secured, and backed up. I honestly didn't think it was possible at that scale. Our admin team now saves hours every single day.",
    name: "Ngozi E.",
    role: "Director of Admin, Emeka & Sons Ltd",
    service: "Document Digitalization",
    rating: 5,
  },
  {
    quote:
      "The smart irrigation system they installed on my 12-acre farm in Ogun State has been a game changer. I used to lose at least 30% of my crops to over or under-watering. This season was the best we've ever had. SMAT truly understands Nigerian agriculture.",
    name: "Bello A.",
    role: "Farmer & Agri-entrepreneur, Ogun State",
    service: "Smart Farming",
    rating: 5,
  },
  {
    quote:
      "Our new website launched on time, looks stunning, and actually converts visitors into enquiries. The team at SMAT understood exactly what we needed as a Nigerian professional services firm. Highly recommended.",
    name: "Chukwuemeka I.",
    role: "Managing Partner, CI & Co. Solicitors",
    service: "Web Development",
    rating: 5,
  },
  {
    quote:
      "I was sceptical about home automation — thought it was just for tech people. SMAT set up my entire home in Lekki and now I control everything from my phone. My electricity bills dropped by 40% in just two months.",
    name: "Fatimah K.",
    role: "Private Client, Lekki Lagos",
    service: "Home Automation",
    rating: 5,
  },
  {
    quote:
      "Our company's network was a mess — slow, insecure, and always going down. SMAT redesigned our entire infrastructure. We haven't had a single outage in eight months. Peace of mind is priceless.",
    name: "Tunde B.",
    role: "IT Manager, Brightfield Manufacturing",
    service: "Networking & Security",
    rating: 5,
  },
  {
    quote:
      "The IoT dashboard they built for our warehouse gives us live inventory tracking, temperature monitoring, and automated alerts. We avoided a ₦2M spoilage incident because the system flagged a cold room fault before it became critical.",
    name: "Amaka O.",
    role: "Operations Lead, FreshStore Nigeria",
    service: "IoT Solutions",
    rating: 5,
  },
  {
    quote:
      "Before SMAT, our task assignments were a WhatsApp nightmare. Now every project has a clear owner, deadline, and status. Our clients even noticed the improvement in delivery. This is how businesses should operate.",
    name: "Olumide F.",
    role: "Founder, Fems Creative Agency",
    service: "Task Management",
    rating: 4,
  },
  {
    quote:
      "They deployed a hybrid solar and grid monitoring system in our school. We now have uninterrupted power and can see our energy consumption in real time. The investment paid for itself within the first year.",
    name: "Mrs. Lawal R.",
    role: "Principal, Greenleaf Academy Ibadan",
    service: "Energy Solutions",
    rating: 5,
  },
  {
    quote:
      "SMAT built us a full e-commerce platform that handles our product catalogue, orders, and customer data. Their ongoing support has been exceptional — they treat our business like it's their own. Worth every naira.",
    name: "Precious N.",
    role: "Founder, TrendzHub Online Store",
    service: "Web Development",
    rating: 5,
  },
];

const clientBadges = [
  "Orisun Logistics Ltd",
  "Emeka & Sons Ltd",
  "CI & Co. Solicitors",
  "FreshStore Nigeria",
  "Brightfield Manufacturing",
  "Greenleaf Academy",
  "TrendzHub",
  "Fems Creative Agency",
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className="w-4 h-4"
          fill={n <= count ? "#D4AF37" : "transparent"}
          style={{ color: "#D4AF37" }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const serviceFilters = [
    "All",
    "Task Management",
    "Web Development",
    "Smart Farming",
    "Home Automation",
    "Document Digitalization",
    "IoT Solutions",
    "Networking & Security",
    "Energy Solutions",
  ];

  const filtered =
    activeFilter === "All"
      ? testimonials
      : testimonials.filter((t) => t.service === activeFilter);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#080B16", color: "#F9FAFB" }}
    >
      <TechHeader />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080B16 0%, #0C0F1E 100%)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(212,175,55,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#D4AF37",
            }}
          >
            <Star className="w-4 h-4" fill="#D4AF37" />
            Verified Success Stories Across Nigeria
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight"
          >
            What Our{" "}
            <span className="text-gold-gradient">Clients Say</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Real results. Real people. Real Nigerian businesses transformed by
            technology that actually works.
          </motion.p>

          {/* quality display */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className="w-7 h-7"
                  fill="#D4AF37"
                  style={{ color: "#D4AF37" }}
                />
              ))}
            </div>
            <span className="text-3xl font-black" style={{ color: "#D4AF37" }}>
              Verified
            </span>
            <span className="text-gray-400 text-base"> Excellence</span>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────── */}
      <section className="section-divider px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <p className="text-3xl font-black text-gold-gradient mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED TESTIMONIAL ─────────────────────────────────── */}
      <section className="section-divider px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest mb-8 text-center"
            style={{ color: "rgba(212,175,55,0.6)" }}
          >
            Featured Testimonial
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-5 sm:p-10 lg:p-14 relative overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
              }}
            />

            <Quote
              className="w-14 h-14 mb-8 opacity-30"
              style={{ color: "#D4AF37" }}
            />

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 font-light italic">
              "{featuredTestimonial.quote}"
            </p>

            <div className="flex flex-wrap items-center gap-6">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #D4AF37 0%, #F5D56A 100%)", color: "#080B16" }}
              >
                {featuredTestimonial.name.split(" ")[0][0]}
                {featuredTestimonial.name.split(" ")[1][0]}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-lg">{featuredTestimonial.name}</p>
                <p className="text-gray-400 text-sm">{featuredTestimonial.role} • {featuredTestimonial.company}</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <StarRating count={featuredTestimonial.rating} />
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                    background: "rgba(212,175,55,0.06)",
                  }}
                >
                  {featuredTestimonial.service}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTER TABS ──────────────────────────────────────────── */}
      <section className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {serviceFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={
                  activeFilter === filter
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
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS GRID ────────────────────────────────────── */}
      <section className="section-divider px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((testimonial, index) => (
              <motion.div
                key={testimonial.name + index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col gap-5 relative"
              >
                {/* Quote icon */}
                <Quote
                  className="w-7 h-7 opacity-20 flex-shrink-0"
                  style={{ color: "#D4AF37" }}
                />

                {/* Stars */}
                <StarRating count={testimonial.rating} />

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{
                      background: "rgba(212,175,55,0.15)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      color: "#D4AF37",
                    }}
                  >
                    {testimonial.name.split(" ")[0][0]}
                    {testimonial.name.split(" ")[1][0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Service badge */}
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full w-fit"
                  style={{
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "rgba(212,175,55,0.8)",
                    background: "rgba(212,175,55,0.05)",
                  }}
                >
                  {testimonial.service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ─────────────────────────────────────────── */}
      <section className="section-divider px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "rgba(212,175,55,0.6)" }}
          >
            Trusted by businesses across Nigeria
          </motion.p>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-black text-white mb-12"
          >
            Companies that chose to grow with{" "}
            <span className="text-gold-gradient">SMAT</span>
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {clientBadges.map((name) => (
              <div
                key={name}
                className="px-6 py-3 rounded-full text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-white"
                style={{
                  border: "1px solid rgba(212,175,55,0.2)",
                  background: "rgba(212,175,55,0.04)",
                }}
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="section-divider px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-12 lg:p-16 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className="w-8 h-8"
                    fill="#D4AF37"
                    style={{ color: "#D4AF37" }}
                  />
                ))}
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Ready to become our next{" "}
                <span className="text-gold-gradient">success story?</span>
              </h2>

              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Join our growing list of Nigerian businesses that have already transformed their
                operations with SMAT Concept. Let's build something great together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  rel="noopener noreferrer"
                  className="btn-gold px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  rel="noopener noreferrer"
                  className="btn-gold-outline px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <CheckCircle className="w-5 h-5" /> View Our Work
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}
