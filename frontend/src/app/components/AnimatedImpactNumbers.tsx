"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface ImpactNumberProps {
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}

function AnimatedCounter({ value, suffix, label, color, delay }: ImpactNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [isInView, value, delay, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: delay / 1000, type: "spring" }}
      className="relative group"
    >
      {/* Holographic Background */}
      <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <motion.div
          className="w-full h-full rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${color}20 0%, ${color}10 50%, ${color}20 100%)`,
          }}
          animate={{
            background: [
              `linear-gradient(135deg, ${color}20 0%, ${color}10 50%, ${color}20 100%)`,
              `linear-gradient(225deg, ${color}30 0%, ${color}15 50%, ${color}25 100%)`,
              `linear-gradient(135deg, ${color}20 0%, ${color}10 50%, ${color}20 100%)`,
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${color}40, transparent 70%)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-40"
              style={{ backgroundColor: color }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              initial={{
                left: `${20 + i * 15}%`,
                top: `${60 + i * 5}%`,
              }}
            />
          ))}
        </div>

        {/* Icon Background */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
          style={{ backgroundColor: color }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Number Display */}
        <div className="relative z-10 text-center">
          <motion.div
            className="text-5xl md:text-6xl font-black mb-2 relative"
            style={{ 
              color: '#000000',
              textShadow: `0 0 20px ${color}40, 2px 2px 4px rgba(0,0,0,0.1)`
            }}
          >
            <motion.span
              className="inline-block"
              animate={isInView ? {
                textShadow: [
                  `0 0 20px ${color}40, 2px 2px 4px rgba(0,0,0,0.1)`,
                  `0 0 30px ${color}60, 2px 2px 4px rgba(0,0,0,0.1)`,
                  `0 0 20px ${color}40, 2px 2px 4px rgba(0,0,0,0.1)`,
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span>{displayValue}</motion.span>
            </motion.span>
            <span className="text-4xl md:text-5xl" style={{ color }}>{suffix}</span>
            
            {/* Glitch Effect Overlay */}
            <motion.div
              className="absolute inset-0 text-5xl md:text-6xl font-black opacity-0"
              style={{ color }}
              animate={{
                opacity: [0, 0.3, 0],
                x: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <motion.span>{displayValue}</motion.span>{suffix}
            </motion.div>
          </motion.div>

          <motion.div
            className="text-sm font-bold tracking-wide uppercase"
            style={{ color: '#1f2937' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: (delay / 1000) + 0.5 }}
          >
            {label}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 1.5, delay: delay / 1000 }}
        />

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${color}60 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function AnimatedImpactNumbers() {
  const impactData = [
    { value: 150, suffix: "+", label: "Projects Delivered", color: "#0066FF", delay: 200 },
    { value: 50, suffix: "+", label: "Happy Clients", color: "#00D4FF", delay: 400 },
    { value: 5, suffix: "+", label: "Years Experience", color: "#8B5CF6", delay: 600 },
    { value: 24, suffix: "/7", label: "Support", color: "#00FF88", delay: 800 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 pt-16 border-t border-white/20"
    >
      {impactData.map((item, index) => (
        <AnimatedCounter
          key={index}
          value={item.value}
          suffix={item.suffix}
          label={item.label}
          color={item.color}
          delay={item.delay}
        />
      ))}
    </motion.div>
  );
}