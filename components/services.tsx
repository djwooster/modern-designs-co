"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import {
  PhoneOff,
  Rocket,
  Sparkles,
  Code2,
  LayoutGrid,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const features: Feature[] = [
  {
    icon: PhoneOff,
    label: "Skip the calls.",
    detail:
      "Async-first from day one. You share your thoughts when it suits you — no kickoff calls, no weekly syncs, no chasing anyone.",
  },
  {
    icon: Rocket,
    label: "Live in 1–2 weeks.",
    detail:
      "From the day we start, you're looking at a shipped website in 1–2 weeks. No drawn-out timelines, no padded hours.",
  },
  {
    icon: Sparkles,
    label: "Craft worth showing off.",
    detail:
      "Every hover state, every transition considered. The kind of site clients screenshot and send to their friends asking who made it.",
  },
  {
    icon: Code2,
    label: "Figma to browser.",
    detail:
      "React-ready prototypes with specs that leave nothing to interpretation. Files your engineers can build from on day one.",
  },
  {
    icon: LayoutGrid,
    label: "Systems that scale.",
    detail:
      "Token-based design systems with full component libraries — the kind of foundation that compounds in value as your product grows.",
  },
  {
    icon: BadgeCheck,
    label: "Ready to ship.",
    detail:
      "Pixel-perfect specs, annotated interactions, every edge case covered. Nothing gets lost between design and the final product.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {/* Icon block */}
      <motion.div
        className="w-[15%] aspect-4/4 rounded-lg  bg-primary/5 border border-primary/10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: (index % 3) * 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {/* Icon — clip-path draw reveal */}
        <motion.div
          className="overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{
            duration: 0.55,
            delay: (index % 3) * 0.1 + 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Icon className="size-8 text-foreground" strokeWidth={1.25} />
        </motion.div>
      </motion.div>

      {/* Label */}
      <motion.p
        className="text-base font-semibold leading-snug"
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.4,
          delay: (index % 3) * 0.1 + 0.15,
          ease: "easeOut",
        }}
      >
        {feature.label}
      </motion.p>

      {/* Detail */}
      <motion.p
        className="text-sm text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.4,
          delay: (index % 3) * 0.1 + 0.25,
          ease: "easeOut",
        }}
      >
        {feature.detail}
      </motion.p>
    </motion.div>
  );
}

function OrnamentalBrushstroke({ isInView }: { isInView: boolean }) {
  return (
    <motion.svg
      className="absolute top-0 left-0 w-full pointer-events-none select-none"
      viewBox="0 0 1440 60"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
    >
      {/* ── Diamond crosshair ornament ── */}
      <motion.g
        style={{ transformOrigin: "40px 30px" }}
        initial={{ opacity: 0, scale: 0.55 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.55 }}
        transition={{ duration: 0.9, ease: [0.34, 1.4, 0.64, 1], delay: 0.1 }}
      >
        {/* Outer diamond */}
        <path
          d="M 40,17 L 53,30 L 40,43 L 27,30 Z"
          fill="none"
          stroke="#C8941A"
          strokeWidth="0.6"
          style={{ opacity: 0.48 }}
        />
        {/* Inner filled diamond */}
        <path
          d="M 40,23 L 47,30 L 40,37 L 33,30 Z"
          fill="#C8941A"
          style={{ opacity: 0.28 }}
        />
        {/* Left crosshair arm */}
        <line x1="14" y1="30" x2="27" y2="30" stroke="#C8941A" strokeWidth="0.55" style={{ opacity: 0.35 }} />
        {/* Top crosshair arm */}
        <line x1="40" y1="6"  x2="40" y2="17" stroke="#C8941A" strokeWidth="0.55" style={{ opacity: 0.28 }} />
        {/* Bottom crosshair arm */}
        <line x1="40" y1="43" x2="40" y2="54" stroke="#C8941A" strokeWidth="0.55" style={{ opacity: 0.28 }} />
        {/* Terminal dots */}
        <circle cx="12" cy="30" r="1.4" fill="#C8941A" style={{ opacity: 0.38 }} />
        <circle cx="40" cy="4"  r="1.1" fill="#C8941A" style={{ opacity: 0.26 }} />
        <circle cx="40" cy="56" r="1.1" fill="#C8941A" style={{ opacity: 0.26 }} />
        {/* Diagonal corner accent dots */}
        <circle cx="31" cy="21" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
        <circle cx="49" cy="21" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
        <circle cx="49" cy="39" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
        <circle cx="31" cy="39" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
      </motion.g>

      {/* ── Primary rule — draws out from ornament ── */}
      <motion.path
        d="M 54,30 L 1440,30"
        fill="none"
        stroke="#C8941A"
        strokeWidth="0.65"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.26 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.55 }}
      />

      {/* ── Hairline rule above — offset 2.5px, slightly brighter ── */}
      <motion.path
        d="M 54,27.5 L 1440,27.5"
        fill="none"
        stroke="#D4A827"
        strokeWidth="0.35"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.14 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.72 }}
      />
    </motion.svg>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative py-20 px-6 lg:px-24 overflow-hidden">
      <OrnamentalBrushstroke isInView={isInView} />
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <FadeIn className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            What we do
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            We deliver what you need.
            <br />
            Fast.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Premium design with lightning fast execution — delivering you exactly 
            what you're envisioning, on a quick timeline that keeps your project 
            moving forward. Design you can count on, when you need it.
          </p>
        </FadeIn>

        {/* 3-col feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <FeatureCard key={feature.label} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
