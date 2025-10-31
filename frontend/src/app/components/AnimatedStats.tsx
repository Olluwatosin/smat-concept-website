"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, label, suffix = "", duration = 2 }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Impact in Numbers
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          <AnimatedCounter end={150} label="Projects Completed" suffix="+" />
          <AnimatedCounter end={50} label="Happy Clients" suffix="+" />
          <AnimatedCounter end={5} label="Years Experience" />
          <AnimatedCounter end={24} label="Support Hours" suffix="/7" />
        </div>
      </div>
    </section>
  );
}