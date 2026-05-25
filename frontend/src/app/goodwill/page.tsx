"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Globe,
  Users,
  Leaf,
  Lightbulb,
  Star,
  ArrowRight,
  Target,
  Zap,
  HandHeart,
  DollarSign,
  Share2,
} from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const initiatives = [
  {
    icon: Lightbulb,
    title: "Free Tech Training",
    description:
      "Every quarter, we open our doors — and our knowledge — to young Nigerians who can't afford tech education. From basic digital literacy to hands-on IoT and web development workshops, we equip the next generation with skills that pay.",
    tag: "Youth Empowerment",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: Users,
    title: "Student Mentorship",
    description:
      "We partner directly with universities across the southwest to mentor final-year engineering and computer science students. Real industry exposure, live projects, and career guidance — because textbooks alone don't build careers.",
    tag: "Education",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Rural Digitalization",
    description:
      "Local government offices in rural communities are drowning in paper. We provide pro-bono document digitalization services to councils and community offices, helping them serve their citizens faster, with less waste and more dignity.",
    tag: "Community Service",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: Leaf,
    title: "Smart Farm for Communities",
    description:
      "Subsistence farmers feed millions, yet they're the last to benefit from modern agriculture technology. We deploy small-scale smart farming sensors and irrigation systems for community farms at no cost — so that food security grows with technology.",
    tag: "AgriTech for Good",
    color: "from-green-500 to-teal-400",
  },
];

const impactNumbers = [
  { value: "200+", label: "People Trained", icon: Users },
  { value: "15", label: "Communities Reached", icon: Globe },
  { value: "30+", label: "Students Mentored", icon: Star },
  { value: "₦5M+", label: "Value Donated", icon: Heart },
];

const involvementOptions = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Are you a developer, designer, or tech professional? Give a few hours a month to teach, mentor, or support our training workshops. Your skills can change someone's entire trajectory.",
    cta: "Join as Volunteer",
  },
  {
    icon: DollarSign,
    title: "Sponsor an Initiative",
    description:
      "Help us scale what we're doing. Sponsoring a workshop, a smart farm deployment, or a student's mentorship programme makes a tangible, trackable difference in real lives.",
    cta: "Become a Sponsor",
  },
  {
    icon: Share2,
    title: "Refer a Community Organisation",
    description:
      "Know a school, NGO, farm cooperative, or local government office that could benefit from our goodwill programmes? Connect them with us — no strings attached.",
    cta: "Make a Referral",
  },
];

export default function GoodwillPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#080B16", color: "#F9FAFB" }}
    >
      <TechHeader />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-28 px-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #080B16 0%, #0a0d18 60%, #0C0F1E 100%)",
        }}
      >
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />

        {/* Ambient glows */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.25)",
              color: "#D4AF37",
            }}
          >
            <Heart className="w-4 h-4" fill="rgba(212,175,55,0.4)" />
            Our Commitment to Africa
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight"
          >
            Beyond Business.{" "}
            <span className="text-gold-gradient">For Africa.</span>
          </motion.h1>

          <motion.blockquote
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light italic relative"
          >
            <span
              className="text-5xl font-serif absolute -top-4 -left-3 opacity-30"
              style={{ color: "#D4AF37" }}
            >
              "
            </span>
            Technology should uplift communities, not just corporations.
            <span
              className="text-5xl font-serif absolute -bottom-8 -right-3 opacity-30"
              style={{ color: "#D4AF37" }}
            >
              "
            </span>
          </motion.blockquote>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mt-8"
          >
            — Salami Muhydeen, Founder, SMAT Concept
          </motion.p>
        </div>
      </section>

      {/* ─── OUR GOODWILL MISSION ─────────────────────────────────── */}
      <section className="section-divider px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text side */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: "rgba(212,175,55,0.6)" }}
              >
                Our Goodwill Mission
              </p>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-7 leading-tight">
                Technology is{" "}
                <span className="text-gold-gradient">a right,</span>
                <br />
                not a privilege.
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed text-base">
                <p>
                  When Salami Muhydeen started SMAT Concept, he wasn't just
                  building a business. He was carrying a conviction — that the
                  widening gap between Nigeria's connected elite and its
                  disconnected majority was not inevitable. Technology, deployed
                  with intention, could bridge that gap.
                </p>
                <p>
                  SMAT Concept earns its revenue by solving real problems for
                  businesses. But a portion of every project — in time, in
                  knowledge, and in resources — flows back into communities that
                  commercial tech companies have largely ignored.
                </p>
                <p>
                  This isn't charity. It's a belief system. We genuinely think
                  Africa's future is built by Africans who have access to the
                  same tools, skills, and systems as anyone else on the planet.
                  Our goodwill work is us putting skin in that game.
                </p>
              </div>

              <motion.a
                href="/contact"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold mt-9"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Partner With Us <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(212,175,55,0.1) 0%, transparent 70%)",
                }}
              />
              <div
                className="rounded-3xl overflow-hidden relative h-[460px]"
                style={{ border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                  alt="Community empowerment through technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,11,22,0.5) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.15)" }}
                  >
                    <Heart className="w-6 h-6" style={{ color: "#D4AF37" }} fill="rgba(212,175,55,0.3)" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Giving back</p>
                    <p className="text-gray-400 text-xs">since Day 1</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INITIATIVES ──────────────────────────────────────────── */}
      <section className="section-divider px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              What We Do
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Our Goodwill{" "}
              <span className="text-gold-gradient">Initiatives</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-5"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Tag */}
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit"
                    style={{
                      border: "1px solid rgba(212,175,55,0.25)",
                      color: "rgba(212,175,55,0.8)",
                      background: "rgba(212,175,55,0.06)",
                    }}
                  >
                    {item.tag}
                  </span>

                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm flex-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── IMPACT NUMBERS ───────────────────────────────────────── */}
      <section className="section-divider px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              Measured Impact
            </p>
            <h2 className="text-4xl font-black text-white">
              Numbers that{" "}
              <span className="text-gold-gradient">tell a story</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {impactNumbers.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative glass-card rounded-2xl p-8 text-center overflow-hidden"
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at top, rgba(212,175,55,0.05) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.2)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#D4AF37" }} />
                    </div>
                    <p className="text-4xl font-black text-gold-gradient mb-2">
                      {item.value}
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MESSAGE FROM THE FOUNDER ─────────────────────────────── */}
      <section className="section-divider px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              A Personal Message
            </p>
            <h2 className="text-4xl font-black text-white">
              From the{" "}
              <span className="text-gold-gradient">Founder</span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-3xl p-10 lg:p-14 relative overflow-hidden"
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(212,175,55,0.05) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10 space-y-6 text-gray-300 leading-relaxed text-base lg:text-lg">
              <p>
                When I was growing up, I watched businesses in my community
                struggle — not because they lacked talent or determination, but
                because they didn't have access to the right tools. Paperwork
                buried small offices. Farmers lost crops to problems that a
                basic sensor could have caught. Students who were brilliant
                enough to change the world never got the exposure they needed.
              </p>
              <p>
                I started SMAT Concept because I believed technology could fix
                some of that — but only if it was in the right hands. The
                commercial work we do funds the goodwill work we love. Every
                enterprise system we build, every website we launch, every IoT
                solution we deploy — it all feeds back into something larger.
              </p>
              <p>
                Africa does not need to wait for the rest of the world to
                include it. We have the minds. We have the hunger. What we need
                is more people choosing to invest in each other. SMAT's goodwill
                work is my small, deliberate contribution to that future.
              </p>
              <p>
                If you're reading this and you believe in the same thing —
                whether you're a business owner, a student, a community leader,
                or just someone who wants to help — reach out. We're not doing
                this alone, and we don't want to.
              </p>

              <div
                className="pt-6 flex items-center gap-5"
                style={{ borderTop: "1px solid rgba(212,175,55,0.12)" }}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #F5D56A 100%)",
                    color: "#080B16",
                  }}
                >
                  SM
                </div>
                <div>
                  <p className="text-white font-black text-lg">Salami Muhydeen</p>
                  <p className="text-gray-400 text-sm">
                    Founder & CEO, SMAT Concept Innovative Solutions Ltd.
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className="w-3.5 h-3.5"
                        fill="#D4AF37"
                        style={{ color: "#D4AF37" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW TO GET INVOLVED ──────────────────────────────────── */}
      <section className="section-divider px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              Join the Movement
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              How to get{" "}
              <span className="text-gold-gradient">involved</span>
            </h2>
            <p className="text-gray-400 mt-5 max-w-xl mx-auto text-base">
              There are many ways to be part of Africa's digital future. Find
              yours below.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {involvementOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-5"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.25)",
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "#D4AF37" }} />
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {option.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm flex-1">
                    {option.description}
                  </p>

                  <motion.a
                    href="/contact"
                    rel="noopener noreferrer"
                    className="btn-gold-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm mt-auto w-fit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {option.cta} <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section-divider px-4 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)",
              }}
            />

            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F5D56A 100%)",
              }}
            >
              <Globe className="w-10 h-10" style={{ color: "#080B16" }} />
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Partner with us for{" "}
              <span className="text-gold-gradient">Africa's future</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you're a business that wants to give back, an organisation
              that needs support, or an individual who believes in this mission
              — there's a place for you in what SMAT is building.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Heart className="w-5 h-5" />
                Let's Talk
              </motion.a>
              <motion.a
                href="/about"
                rel="noopener noreferrer"
                className="btn-gold-outline px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Story <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Trust line */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    key={letter}
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "rgba(212,175,55,0.15)",
                      borderColor: "#080B16",
                      color: "#D4AF37",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Join{" "}
                <span className="font-bold" style={{ color: "#D4AF37" }}>
                  50+ businesses
                </span>{" "}
                already making a difference
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}
