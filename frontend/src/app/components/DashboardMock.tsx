"use client";

/**
 * Native dark-theme dashboard mockups rendered as SVG/HTML inside a
 * browser-chrome frame. Replaces raw screenshot images so the product
 * visuals match the site's design system.
 *
 * Chart palette (validated for the dark card surface #0F1629 —
 * lightness band, chroma, CVD separation, and contrast all pass):
 *   gold #B08A2A · blue #3B82F6 · teal #0D9488 · purple #9333EA
 * Text stays in text tokens; color marks carry identity.
 */

const MARK = {
  gold: "#B08A2A",
  blue: "#3B82F6",
  teal: "#0D9488",
  purple: "#9333EA",
};

const INK = {
  primary: "#E5E7EB",
  secondary: "#9CA3AF",
  muted: "#6B7280",
  grid: "rgba(148, 163, 184, 0.09)",
};

/* ── Browser chrome frame ─────────────────────────────────── */
function Frame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        background: "#0F1629",
        border: "1px solid rgba(212,175,55,0.14)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.05)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-3.5 py-2.5"
        style={{ background: "rgba(8,11,22,0.7)", borderBottom: "1px solid rgba(148,163,184,0.08)" }}
      >
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FBBF24" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#34D399" }} />
        </span>
        <span
          className="ml-2 px-3 py-0.5 rounded-md text-[10px] font-medium truncate"
          style={{ background: "rgba(148,163,184,0.08)", color: INK.muted }}
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ── KPI stat tile ────────────────────────────────────────── */
function Kpi({ label, value, delta, accent }: { label: string; value: string; delta?: string; accent: string }) {
  return (
    <div
      className="rounded-lg px-3 py-2.5 min-w-0"
      style={{ background: "rgba(148,163,184,0.05)", border: "1px solid rgba(148,163,184,0.08)" }}
    >
      <div className="text-[9px] uppercase tracking-wider font-semibold truncate" style={{ color: INK.muted }}>
        {label}
      </div>
      <div className="flex items-baseline gap-1.5 mt-0.5">
        <span className="font-display text-sm sm:text-base font-bold" style={{ color: INK.primary }}>
          {value}
        </span>
        {delta && (
          <span className="text-[9px] font-bold" style={{ color: accent }}>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Bar chart: weekly orders ─────────────────────────────── */
function Bars() {
  const data = [42, 58, 47, 71, 64, 88, 79]; // Mon–Sun
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const max = 100;
  const bw = 22;
  const gap = 14;
  const h = 96;
  return (
    <svg viewBox={`0 0 ${data.length * (bw + gap)} ${h + 18}`} className="w-full h-auto" aria-label="Orders per day, Monday to Sunday">
      {/* recessive gridlines */}
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={data.length * (bw + gap)} y1={h - h * f} y2={h - h * f} stroke={INK.grid} strokeWidth="1" />
      ))}
      {data.map((v, i) => {
        const bh = (v / max) * h;
        const highlight = i === 5; // best day gets the direct label
        return (
          <g key={i}>
            <rect
              className="chart-bar"
              style={{ animationDelay: `${i * 70}ms` }}
              x={i * (bw + gap) + gap / 2}
              y={h - bh}
              width={bw}
              height={bh}
              rx="4"
              fill={MARK.gold}
              opacity={highlight ? 1 : 0.55}
            />
            {highlight && (
              <text x={i * (bw + gap) + gap / 2 + bw / 2} y={h - bh - 6} textAnchor="middle" fontSize="10" fontWeight="700" fill={INK.primary}>
                {v}
              </text>
            )}
            <text x={i * (bw + gap) + gap / 2 + bw / 2} y={h + 13} textAnchor="middle" fontSize="8.5" fill={INK.muted}>
              {days[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Line chart: revenue trend ────────────────────────────── */
function Trend() {
  const pts = [18, 26, 24, 38, 44, 41, 58, 66]; // indexed revenue
  const w = 240;
  const h = 96;
  const step = w / (pts.length - 1);
  const max = 80;
  const xy = pts.map((v, i) => [i * step, h - (v / max) * h] as const);
  const path = xy.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  const last = xy[xy.length - 1];
  return (
    <svg viewBox={`0 0 ${w + 34} ${h + 16}`} className="w-full h-auto" aria-label="Revenue trend, last 8 months">
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={w} y1={h - h * f} y2={h - h * f} stroke={INK.grid} strokeWidth="1" />
      ))}
      <path d={area} fill={MARK.blue} opacity="0.10" />
      <path className="chart-line" d={path} fill="none" stroke={MARK.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* end marker + direct label only on the latest point */}
      <circle cx={last[0]} cy={last[1]} r="4" fill={MARK.blue} stroke="#0F1629" strokeWidth="2" />
      <text x={last[0] + 8} y={last[1] + 3} fontSize="10" fontWeight="700" fill={INK.primary}>
        +66%
      </text>
      <text x="0" y={h + 13} fontSize="8.5" fill={INK.muted}>
        Jan
      </text>
      <text x={w - 4} y={h + 13} fontSize="8.5" fill={INK.muted} textAnchor="end">
        Aug
      </text>
    </svg>
  );
}

/* ── Donut: workload by division ──────────────────────────── */
function Donut() {
  const segs = [
    { label: "Data & AI", v: 42, c: MARK.gold },
    { label: "Web & Apps", v: 33, c: MARK.blue },
    { label: "IoT & Energy", v: 25, c: MARK.teal },
  ];
  const R = 34;
  const C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 88 88" className="w-20 h-20 flex-shrink-0" aria-label="Delivery share by division">
        <g transform="rotate(-90 44 44)">
          {segs.map((s) => {
            const frac = s.v / 100;
            const el = (
              <circle
                key={s.label}
                cx="44"
                cy="44"
                r={R}
                fill="none"
                stroke={s.c}
                strokeWidth="10"
                strokeDasharray={`${frac * C - 2.5} ${C - frac * C + 2.5}`}
                strokeDashoffset={-acc * C}
                strokeLinecap="butt"
              />
            );
            acc += frac;
            return el;
          })}
        </g>
        <text x="44" y="41" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK.primary}>
          128
        </text>
        <text x="44" y="53" textAnchor="middle" fontSize="7" fill={INK.muted}>
          DELIVERIES
        </text>
      </svg>
      <ul className="space-y-1.5 min-w-0">
        {segs.map((s) => (
          <li key={s.label} className="flex items-center gap-1.5 text-[10px]" style={{ color: INK.secondary }}>
            <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: s.c }} />
            <span className="truncate">{s.label}</span>
            <span className="font-bold ml-auto pl-2" style={{ color: INK.primary }}>
              {s.v}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Panel wrapper ────────────────────────────────────────── */
function Panel({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-lg p-3 min-w-0 ${className}`}
      style={{ background: "rgba(148,163,184,0.04)", border: "1px solid rgba(148,163,184,0.07)" }}
    >
      <div className="text-[10px] font-bold mb-2 uppercase tracking-wide" style={{ color: INK.secondary }}>
        {title}
      </div>
      {children}
    </div>
  );
}

/* ── Full dashboard ───────────────────────────────────────── */
export default function DashboardMock({ className = "" }: { className?: string }) {
  return (
    <Frame url="app.smatconcept.com.ng/operations" className={className}>
      <div className="p-3 sm:p-4 space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Kpi label="Revenue MTD" value="₦4.2M" delta="+18%" accent={MARK.teal} />
          <Kpi label="Orders" value="1,284" delta="+9%" accent={MARK.teal} />
          <Kpi label="On-time" value="96.4%" accent={MARK.gold} />
          <Kpi label="Active clients" value="38" delta="+4" accent={MARK.teal} />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <Panel title="Orders · this week">
            <Bars />
          </Panel>
          <Panel title="Revenue · indexed">
            <Trend />
          </Panel>
        </div>
      </div>
    </Frame>
  );
}

/* ── Compact variant (bento cards / side panels) ──────────── */
export function DashboardMockCompact({ className = "" }: { className?: string }) {
  return (
    <Frame url="app.smatconcept.com.ng/insights" className={className}>
      <div className="p-3 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Kpi label="Revenue MTD" value="₦4.2M" delta="+18%" accent={MARK.teal} />
          <Kpi label="On-time" value="96.4%" accent={MARK.gold} />
        </div>
        <Panel title="Orders · this week">
          <Bars />
        </Panel>
        <Panel title="Delivery share">
          <Donut />
        </Panel>
      </div>
    </Frame>
  );
}

/* ── Trend-only variant ───────────────────────────────────── */
export function DashboardMockTrend({ className = "" }: { className?: string }) {
  return (
    <Frame url="app.smatconcept.com.ng/growth" className={className}>
      <div className="p-3 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Kpi label="Growth YTD" value="+66%" accent={MARK.blue} />
          <Kpi label="Churn" value="1.8%" delta="−0.4" accent={MARK.teal} />
        </div>
        <Panel title="Revenue · indexed">
          <Trend />
        </Panel>
      </div>
    </Frame>
  );
}
