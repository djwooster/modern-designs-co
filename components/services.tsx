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

export function Services() {
  return (
    <section className="py-20 px-6 lg:px-24">
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
