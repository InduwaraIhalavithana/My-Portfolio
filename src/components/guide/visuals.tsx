"use client";

import { ArrowDown, ArrowRight, RotateCw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ChartId, DeckColor } from "@/data/guide";
import { deckStyle } from "./guide-style";

type Labels = readonly string[];

// Children pop in one after another.
function Pop({ i, children, className }: { i: number; children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.15 + i * 0.12, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** A → B → C, sideways on wide screens and downwards on phones. */
export function FlowVisual({ labels, color }: { labels: Labels; color: DeckColor }) {
  const s = deckStyle[color];
  return (
    <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center">
      {labels.map((label, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5 sm:flex-row">
          <Pop i={i}>
            <div
              className={cn(
                "rounded-xl border-2 px-3 py-2 text-center text-sm font-semibold shadow-sm",
                i === 0 ? cn(s.bg, "border-transparent text-white") : cn("bg-card", s.border),
                i === labels.length - 1 && i !== 0 && cn(s.soft, s.text),
              )}
            >
              {label}
            </div>
          </Pop>
          {i < labels.length - 1 && (
            <Pop i={i + 0.5}>
              <ArrowRight className={cn("hidden size-5 sm:block", s.text)} />
              <ArrowDown className={cn("size-5 sm:hidden", s.text)} />
            </Pop>
          )}
        </div>
      ))}
    </div>
  );
}

/** Steps arranged on a circle, for loops that repeat. */
export function CycleVisual({ labels, color }: { labels: Labels; color: DeckColor }) {
  const s = deckStyle[color];
  const n = labels.length;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[19rem]">
      <div className={cn("absolute inset-[16%] rounded-full border-2 border-dashed", s.border)} />
      <RotateCw className={cn("absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] motion-reduce:animate-none", s.text)} />
      {labels.map((label, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(a) * 36;
        const y = 50 + Math.sin(a) * 36;
        return (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <Pop i={i}>
              <div className={cn("w-max max-w-[8.5rem] rounded-xl border-2 bg-card px-2.5 py-1.5 text-center text-xs font-semibold shadow-sm sm:text-sm", s.border)}>
                <span className={cn("mr-1 font-mono", s.text)}>{i + 1}</span>
                {label}
              </div>
            </Pop>
          </div>
        );
      })}
    </div>
  );
}

/** Stacked layers, top to bottom, each a little wider than the one above. */
export function LayersVisual({ labels, color }: { labels: Labels; color: DeckColor }) {
  const s = deckStyle[color];
  return (
    <div className="flex flex-col items-center gap-1.5">
      {labels.map((label, i) => (
        <Pop key={i} i={i} className="w-full">
          <div
            className={cn("mx-auto rounded-xl px-3 py-2.5 text-center text-sm font-semibold", i === 0 ? cn(s.bg, "text-white") : cn(s.soft, s.text))}
            style={{ width: `${55 + (i / Math.max(labels.length - 1, 1)) * 45}%`, opacity: 1 - i * 0.08 }}
          >
            {label}
          </div>
        </Pop>
      ))}
    </div>
  );
}

export function TableVisual({ head, rows, color }: { head: Labels; rows: readonly Labels[]; color: DeckColor }) {
  const s = deckStyle[color];
  return (
    <Pop i={0}>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead className={cn(s.soft)}>
            <tr>
              {head.map((h, i) => (
                <th key={i} className={cn("px-3 py-2 font-bold whitespace-nowrap", s.text)}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t odd:bg-muted/30">
                {r.map((c, j) => (
                  <td key={j} className={cn("px-3 py-2", j === 0 && "font-semibold")}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Pop>
  );
}

/** A root, two children and four grandchildren. */
export function TreeVisual({ labels, color }: { labels?: Labels; color: DeckColor }) {
  const s = deckStyle[color];
  const L = labels && labels.length >= 7 ? labels : ["8", "4", "12", "2", "6", "10", "14"];
  const pos = [
    [50, 12],
    [27, 45],
    [73, 45],
    [13, 82],
    [38, 82],
    [62, 82],
    [87, 82],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ];
  return (
    <div className="relative mx-auto aspect-[5/3] w-full max-w-md">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden>
        {edges.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={pos[a][0]} y1={pos[a][1]} x2={pos[b][0]} y2={pos[b][1]} className={cn(s.stroke, "opacity-50")} strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {pos.map(([x, y], i) => (
        <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
          <Pop i={i}>
            <div
              className={cn(
                "w-max max-w-[7rem] rounded-lg border-2 px-2 py-1 text-center text-[0.7rem] font-semibold shadow-sm sm:text-xs",
                i === 0 ? cn(s.bg, "border-transparent text-white") : i < 3 ? cn("bg-card", s.border) : cn(s.soft, "border-transparent", s.text),
              )}
            >
              {L[i]}
            </div>
          </Pop>
        </div>
      ))}
    </div>
  );
}

// ---------- Charts ----------

function Frame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <Pop i={0}>
      <figure className="mx-auto w-full max-w-md">
        {children}
        {label && <figcaption className="mt-1 text-center font-mono text-xs text-muted-foreground">{label}</figcaption>}
      </figure>
    </Pop>
  );
}

const draw = { initial: { pathLength: 0 }, animate: { pathLength: 1 } };

function Curve({ d, className, delay = 0 }: { d: string; className: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      strokeWidth={2.5}
      strokeLinecap="round"
      className={className}
      initial={reduce ? false : draw.initial}
      animate={draw.animate}
      transition={{ duration: 1, delay: 0.2 + delay, ease: "easeOut" }}
    />
  );
}

function Axes() {
  return (
    <g className="stroke-muted-foreground/50" strokeWidth={1}>
      <line x1={20} y1={180} x2={290} y2={180} />
      <line x1={20} y1={180} x2={20} y2={10} />
    </g>
  );
}

function BigOChart() {
  const curves = [
    { d: "M20 165 L290 165", c: "stroke-agri", t: "O(1)", y: 160 },
    { d: "M20 176 Q90 150 290 128", c: "stroke-conf", t: "O(log n)", y: 122 },
    { d: "M20 178 L290 40", c: "stroke-share", t: "O(n)", y: 48 },
    { d: "M20 178 Q100 160 175 12", c: "stroke-spark", t: "O(n²)", y: 22 },
  ];
  return (
    <Frame label="n →  ·  t ↑">
      <svg viewBox="0 0 300 190" className="w-full">
        <Axes />
        {curves.map((c, i) => (
          <g key={c.t}>
            <Curve d={c.d} className={c.c} delay={i * 0.2} />
            <text x={c.t === "O(n²)" ? 184 : 240} y={c.y} className={cn("font-mono text-[11px] font-bold", c.c.replace("stroke", "fill"))}>
              {c.t}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}

function BinarySearchChart({ color }: { color: DeckColor }) {
  const s = deckStyle[color];
  const nums = [3, 8, 12, 17, 21, 26, 30, 35, 41, 46, 52, 58, 63, 70, 77, 84];
  const steps = [
    [0, 15, 7],
    [8, 15, 11],
    [8, 10, 9],
  ];
  return (
    <div className="space-y-2">
      {steps.map(([lo, hi, mid], k) => (
        <Pop key={k} i={k}>
          <div className="flex items-center gap-2">
            <span className={cn("w-6 shrink-0 font-mono text-xs font-bold", s.text)}>{k + 1}</span>
            <div className="grid flex-1 grid-cols-16 gap-0.5">
              {nums.map((n, i) => (
                <div
                  key={n}
                  className={cn(
                    "rounded-sm py-1 text-center font-mono text-[0.6rem] sm:text-[0.7rem]",
                    i < lo || i > hi ? "bg-muted/40 text-muted-foreground/40" : "bg-muted",
                    i === mid && cn(s.bg, "font-bold text-white"),
                    k === 2 && i === mid && "ring-2 ring-agri",
                  )}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </Pop>
      ))}
      <p className="text-center font-mono text-xs text-muted-foreground">46: 🔍 ×3 · 🐢 ×10</p>
    </div>
  );
}

function StackQueueChart({ color }: { color: DeckColor }) {
  const s = deckStyle[color];
  return (
    <div className="grid grid-cols-2 gap-4">
      <Pop i={0}>
        <div className="flex flex-col items-center">
          <span className="mb-1 text-lg">⬇⬆</span>
          {[4, 3, 2, 1].map((n, i) => (
            <div key={n} className={cn("mb-1 w-24 rounded-md py-1.5 text-center font-mono text-xs font-bold", i === 0 ? cn(s.bg, "text-white") : cn(s.soft, s.text))}>
              {n}
            </div>
          ))}
          <span className="mt-1 font-mono text-xs text-muted-foreground">LIFO</span>
        </div>
      </Pop>
      <Pop i={1}>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <span className="text-lg">⬅</span>
            {[1, 2, 3, 4].map((n, i) => (
              <div key={n} className={cn("rounded-md px-2.5 py-1.5 font-mono text-xs font-bold", i === 0 ? cn(s.bg, "text-white") : cn(s.soft, s.text))}>
                {n}
              </div>
            ))}
            <span className="text-lg">⬅</span>
          </div>
          <span className="mt-2 font-mono text-xs text-muted-foreground">FIFO</span>
        </div>
      </Pop>
    </div>
  );
}

const dots: [number, number][] = [
  [30, 160], [50, 150], [70, 128], [90, 132], [110, 108], [130, 112], [150, 90], [170, 96], [190, 70], [210, 76], [230, 54], [250, 58], [270, 36],
];

function Scatter({ className = "fill-muted-foreground/60" }: { className?: string }) {
  return (
    <>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} className={className} />
      ))}
    </>
  );
}

function RegressionChart() {
  return (
    <Frame>
      <svg viewBox="0 0 300 190" className="w-full">
        <Axes />
        <Scatter />
        <Curve d="M25 168 L285 34" className="stroke-primary" />
      </svg>
    </Frame>
  );
}

function OverfitChart({ names }: { names: Labels }) {
  const lines = ["M25 110 L285 110", "M25 168 L285 34", "M30 160 L50 150 L70 128 L90 132 L110 108 L130 112 L150 90 L170 96 L190 70 L210 76 L230 54 L250 58 L270 36"];
  const colors = ["stroke-share", "stroke-agri", "stroke-spark"];
  return (
    <div className="grid grid-cols-3 gap-2">
      {lines.map((d, i) => (
        <Pop key={i} i={i}>
          <figure>
            <svg viewBox="0 0 300 190" className="w-full rounded-lg bg-muted/40">
              <Scatter />
              <Curve d={d} className={colors[i]} delay={i * 0.2} />
            </svg>
            <figcaption className={cn("mt-1 text-center text-xs font-bold", colors[i].replace("stroke", "text"))}>{names[i]}</figcaption>
          </figure>
        </Pop>
      ))}
    </div>
  );
}

function Dartboard({ spread, offset }: { spread: number; offset: [number, number] }) {
  const hits: [number, number][] = [
    [0.2, -0.6], [-0.7, 0.3], [0.5, 0.5], [-0.3, -0.4], [0.8, -0.1], [-0.1, 0.8],
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full">
      {[45, 32, 19, 7].map((r, i) => (
        <circle key={r} cx={50} cy={50} r={r} className={i % 2 ? "fill-muted" : "fill-card stroke-border"} />
      ))}
      {hits.map(([x, y], i) => (
        <circle key={i} cx={50 + offset[0] + x * spread} cy={50 + offset[1] + y * spread} r={3.2} className="fill-spark" />
      ))}
    </svg>
  );
}

function BiasVarianceChart({ names }: { names: Labels }) {
  const boards: { spread: number; offset: [number, number]; label: string }[] = [
    { spread: 6, offset: [0, 0], label: "✓" },
    { spread: 6, offset: [22, -18], label: names[0] },
    { spread: 34, offset: [0, 0], label: names[1] },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {boards.map((b, i) => (
        <Pop key={i} i={i}>
          <Dartboard spread={b.spread} offset={b.offset} />
          <p className="mt-1 text-center text-xs font-bold">{b.label}</p>
        </Pop>
      ))}
    </div>
  );
}

function GradientChart() {
  const reduce = useReducedMotion();
  const pts: [number, number][] = [
    [40, 40], [80, 98], [115, 136], [140, 152], [155, 158],
  ];
  return (
    <Frame label="w →  ·  loss ↑">
      <svg viewBox="0 0 300 190" className="w-full">
        <Axes />
        <Curve d="M30 25 Q160 290 290 25" className="stroke-conf" />
        {pts.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y - 6}
            r={6}
            className={i === pts.length - 1 ? "fill-agri" : "fill-share"}
            initial={reduce ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: i === pts.length - 1 ? 1 : 0.35 + i * 0.12, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.25 }}
          />
        ))}
      </svg>
    </Frame>
  );
}

function ActivationChart() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Frame label="ReLU">
        <svg viewBox="0 0 200 120" className="w-full rounded-lg bg-muted/40">
          <line x1={0} y1={100} x2={200} y2={100} className="stroke-muted-foreground/40" />
          <line x1={100} y1={0} x2={100} y2={120} className="stroke-muted-foreground/40" />
          <Curve d="M5 100 L100 100 L190 12" className="stroke-share" />
        </svg>
      </Frame>
      <Frame label="Sigmoid">
        <svg viewBox="0 0 200 120" className="w-full rounded-lg bg-muted/40">
          <line x1={0} y1={100} x2={200} y2={100} className="stroke-muted-foreground/40" />
          <line x1={100} y1={0} x2={100} y2={120} className="stroke-muted-foreground/40" />
          <Curve d="M5 98 C80 98 85 60 100 58 S120 18 195 16" className="stroke-spark" delay={0.2} />
        </svg>
      </Frame>
    </div>
  );
}

function ConfusionChart({ names }: { names: Labels }) {
  const cells = [
    { t: "TP", n: names[0], c: "bg-agri/20 text-agri" },
    { t: "FP", n: names[1], c: "bg-share/20 text-share" },
    { t: "FN", n: names[2], c: "bg-spark/20 text-spark" },
    { t: "TN", n: names[3], c: "bg-agri/20 text-agri" },
  ];
  return (
    <div className="mx-auto grid max-w-sm grid-cols-2 gap-2">
      {cells.map((c, i) => (
        <Pop key={c.t} i={i}>
          <div className={cn("rounded-xl p-3 text-center", c.c)}>
            <p className="font-mono text-2xl font-bold">{c.t}</p>
            <p className="text-xs font-semibold">{c.n}</p>
          </div>
        </Pop>
      ))}
    </div>
  );
}

function ClustersChart() {
  const groups = [
    { c: "fill-conf", pts: [[60, 50], [72, 62], [50, 68], [66, 40], [80, 48]] },
    { c: "fill-agri", pts: [[200, 50], [214, 40], [226, 58], [210, 66], [190, 60]] },
    { c: "fill-share", pts: [[130, 140], [146, 150], [120, 156], [140, 130], [158, 142]] },
  ];
  return (
    <Frame>
      <svg viewBox="0 0 300 190" className="w-full rounded-lg bg-muted/30">
        {groups.map((g, gi) =>
          g.pts.map(([x, y], i) => (
            <motion.circle key={`${gi}-${i}`} cx={x} cy={y} r={6} className={g.c} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + gi * 0.2 + i * 0.05 }} />
          )),
        )}
        <motion.circle cx={265} cy={160} r={7} className="fill-spark" initial={{ scale: 0 }} animate={{ scale: [0, 1.4, 1] }} transition={{ delay: 1.1 }} />
        <motion.circle cx={265} cy={160} r={15} fill="none" strokeWidth={2} strokeDasharray="4 3" className="stroke-spark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
        <text x={236} y={186} className="fill-spark font-mono text-[11px] font-bold">?!</text>
      </svg>
    </Frame>
  );
}

function ScalingChart({ names }: { names: Labels }) {
  return (
    <div className="grid grid-cols-2 items-end gap-4">
      <Pop i={0}>
        <div className="flex flex-col items-center">
          <div className="grid size-28 place-items-center rounded-2xl bg-conf/20 text-4xl">🖥️</div>
          <p className="mt-2 text-center text-xs font-bold">{names[0]}</p>
        </div>
      </Pop>
      <Pop i={1}>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="grid size-10 place-items-center rounded-lg bg-agri/20 text-lg">
                🖥️
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs font-bold">{names[1]}</p>
        </div>
      </Pop>
    </div>
  );
}

function BellChart() {
  return (
    <Frame label="−1σ · μ · +1σ  ≈ 68%">
      <svg viewBox="0 0 300 170" className="w-full">
        <motion.path d="M105 160 C120 70 135 20 150 20 S180 70 195 160 Z" className="fill-conf/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        <Curve d="M10 160 C80 160 110 20 150 20 S220 160 290 160" className="stroke-conf" />
        <line x1={150} y1={15} x2={150} y2={162} className="stroke-share" strokeDasharray="4 3" strokeWidth={1.5} />
        <line x1={10} y1={160} x2={290} y2={160} className="stroke-muted-foreground/50" />
      </svg>
    </Frame>
  );
}

export function Chart({ id, color, names, labels }: { id: ChartId; color: DeckColor; names: Labels; labels?: Labels }) {
  switch (id) {
    case "big-o":
      return <BigOChart />;
    case "binary-search":
      return <BinarySearchChart color={color} />;
    case "stack-queue":
      return <StackQueueChart color={color} />;
    case "tree":
      return <TreeVisual labels={labels} color={color} />;
    case "overfit":
      return <OverfitChart names={names} />;
    case "bias-variance":
      return <BiasVarianceChart names={names} />;
    case "gradient":
      return <GradientChart />;
    case "activation":
      return <ActivationChart />;
    case "confusion":
      return <ConfusionChart names={names} />;
    case "regression":
      return <RegressionChart />;
    case "clusters":
      return <ClustersChart />;
    case "scaling":
      return <ScalingChart names={names} />;
    case "bell":
      return <BellChart />;
  }
}
