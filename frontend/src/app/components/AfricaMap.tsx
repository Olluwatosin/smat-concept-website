"use client";

/**
 * Stylised dotted map of Africa with pulsing network hubs — decorative
 * hero art (aria-hidden). Gold-on-navy, pure SVG, no external assets.
 */
export default function AfricaMap({ className = "" }: { className?: string }) {
  const hubs = [
    { x: 103, y: 236, r: 5, d: "0s" }, // Lagos
    { x: 80, y: 242, r: 3, d: "0.6s" }, // Accra
    { x: 281, y: 72, r: 3, d: "1.1s" }, // Cairo
    { x: 305, y: 252, r: 3.5, d: "1.6s" }, // Nairobi
    { x: 243, y: 388, r: 3, d: "2.2s" }, // Johannesburg
  ];
  const links = [
    [103, 236, 281, 72],
    [103, 236, 305, 252],
    [103, 236, 243, 388],
    [103, 236, 80, 242],
    [305, 252, 281, 72],
  ];

  return (
    <svg viewBox="0 0 400 450" className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="af-dots" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#D4AF37" />
        </pattern>
        <mask id="af-mask">
          {/* Simplified Africa silhouette */}
          <path
            fill="#fff"
            d="M85,60
               C120,42 160,38 200,42
               C240,46 262,50 285,58
               L300,95
               C305,120 315,140 330,155
               L358,172 L345,190
               C330,215 315,235 300,260
               L295,290
               C288,320 280,345 268,370
               C255,400 240,420 215,428
               C195,433 180,425 172,408
               C165,385 168,360 172,340
               C175,315 170,295 160,278
               L150,262
               C140,255 128,252 118,248
               L55,238
               C42,230 32,215 28,198
               L30,180
               C32,150 45,115 60,95
               C70,80 78,68 85,60 Z"
          />
          {/* Madagascar */}
          <path
            fill="#fff"
            d="M330,300
               C340,290 350,295 352,310
               C354,330 348,355 338,368
               C330,375 322,368 322,352
               C322,335 324,315 330,300 Z"
          />
        </mask>
        <radialGradient id="af-fade" cx="35%" cy="45%" r="75%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.25" />
        </radialGradient>
      </defs>

      {/* Dotted landmass */}
      <g mask="url(#af-mask)">
        <rect width="400" height="450" fill="url(#af-dots)" opacity="0.32" />
        <rect width="400" height="450" fill="url(#af-fade)" opacity="0.06" />
      </g>

      {/* Network links */}
      {links.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#D4AF37"
          strokeWidth="0.75"
          strokeDasharray="3 5"
          opacity="0.35"
        />
      ))}

      {/* Pulsing hubs */}
      {hubs.map((h, i) => (
        <g key={i}>
          <circle className="map-dot" style={{ animationDelay: h.d }} cx={h.x} cy={h.y} r={h.r * 2.4} fill="#D4AF37" opacity="0.12" />
          <circle cx={h.x} cy={h.y} r={h.r} fill="#D4AF37" opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}
