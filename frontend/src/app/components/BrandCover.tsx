"use client";

import type { LucideIcon } from "lucide-react";

/**
 * Branded cover art for portfolio projects and blog posts — replaces
 * generic stock photos with an on-brand generative panel: layered gold
 * gradients on navy, dot texture, watermark icon, and a display-type
 * monogram. `seed` varies the gradient geometry so covers differ.
 */
export default function BrandCover({
  title,
  icon: Icon,
  label,
  seed = 0,
  className = "",
}: {
  title: string;
  icon?: LucideIcon;
  label?: string;
  seed?: number;
  className?: string;
}) {
  const monogram = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const angles = [125, 145, 105, 160, 115, 135];
  const positions = [
    ["82% 18%", "12% 88%"],
    ["18% 22%", "88% 82%"],
    ["85% 80%", "15% 15%"],
    ["50% 10%", "70% 95%"],
    ["10% 55%", "90% 40%"],
    ["75% 30%", "25% 75%"],
  ];
  const angle = angles[seed % angles.length];
  const [p1, p2] = positions[seed % positions.length];

  // NOTE: caller must size & position this (e.g. `absolute inset-0`) —
  // no `relative` here so the caller's position class always applies.
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(ellipse 60% 55% at ${p1}, rgba(212,175,55,0.16) 0%, transparent 65%),
          radial-gradient(ellipse 50% 45% at ${p2}, rgba(212,175,55,0.07) 0%, transparent 60%),
          linear-gradient(${angle}deg, #101830 0%, #0B1020 55%, #080B16 100%)
        `,
      }}
    >
      {/* Dot texture */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Fine grid lines */}
      <div className="absolute inset-0 mesh-grid opacity-30" />

      {/* Watermark icon */}
      {Icon && (
        <Icon
          className="absolute -bottom-5 -right-4 w-28 h-28 sm:w-32 sm:h-32"
          style={{ color: "rgba(212,175,55,0.10)" }}
          strokeWidth={1.2}
          aria-hidden
        />
      )}

      {/* Monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display font-black select-none"
          style={{
            fontSize: "clamp(3rem, 9vw, 4.5rem)",
            background: "linear-gradient(135deg, rgba(212,175,55,0.9) 0%, rgba(245,213,106,0.55) 60%, rgba(212,175,55,0.25) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
          aria-hidden
        >
          {monogram}
        </span>
      </div>

      {/* Label chip */}
      {label && (
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{ background: "rgba(8,11,22,0.75)", border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", backdropFilter: "blur(8px)" }}
        >
          {label}
        </span>
      )}

      {/* Bottom fade for text overlays */}
      <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(8,11,22,0.55), transparent)" }} />
    </div>
  );
}
