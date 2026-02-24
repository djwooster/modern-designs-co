"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import {
  PhoneOff,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";


// ─── Types & data ──────────────────────────────────────────────────────────────

type Feature = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const webDesign: Feature[] = [
  {
    icon: Rocket,
    label: "Live in 1–2 weeks.",
    detail:
      "From the day we start, you're looking at a shipped website in 1–2 weeks. No drawn-out timelines, no padded hours.",
  },
  {
    icon: PhoneOff,
    label: "Skip the calls.",
    detail:
      "Async-first from day one. You share your thoughts when it suits you — no kickoff calls, no weekly syncs, no chasing anyone.",
  },
  {
    icon: Sparkles,
    label: "Craft worth showing off.",
    detail:
      "Every hover state, every transition considered. The kind of site clients screenshot and send to their friends asking who made it.",
  },
];

// ─── Feature item (static) ─────────────────────────────────────────────────────

function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <motion.div variants={staggerItem} className="flex flex-col gap-3 py-4 px-1">
      <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
        <Icon className="size-5 text-primary" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm font-semibold leading-snug mb-1">
          {feature.label}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feature.detail}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Ripple divider ────────────────────────────────────────────────────────────

function RippleDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const lineControls = useAnimation();
  const rippleControls = useAnimation();

  useEffect(() => {
    if (!isInView) return;

    async function runLines() {
      await lineControls.start({
        scaleX: 1,
        opacity: 0.2,
        transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] },
      });
      lineControls.start({
        opacity: [0.2, 0.06, 0.2],
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
      });
    }

    async function runRipple() {
      await rippleControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, delay: 0.5, ease: [0.34, 1.4, 0.64, 1] },
      });
      rippleControls.start({
        opacity: [1, 0.28, 1],
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
      });
    }

    runLines();
    runRipple();
  }, [isInView, lineControls, rippleControls]);

  return (
    <div ref={ref} aria-hidden="true" className="mt-20 flex items-center">
      <motion.div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--primary))",
          transformOrigin: "left center",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={lineControls}
      />
      <motion.svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        className="shrink-0 mx-3"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={rippleControls}
      >
        <circle cx="22" cy="22" r="18" stroke="var(--primary)" strokeWidth="0.8" opacity="0.12" />
        <circle cx="22" cy="22" r="11" stroke="var(--primary)" strokeWidth="0.8" opacity="0.22" />
        <circle cx="22" cy="22" r="4"  fill="var(--primary)"   opacity="0.4" />
      </motion.svg>
      <motion.div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to left, transparent, var(--primary))",
          transformOrigin: "right center",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={lineControls}
      />
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function Services() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="mx-auto max-w-350">
        {/* Header */}
        <FadeIn className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4  ">
            What we do
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            Beautiful website design. Delivered fast.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Premium design with lightning fast execution — delivering you exactly
            what you&apos;re envisioning, on a quick timeline that keeps your project
            moving forward. Design you can count on, when you need it.
          </p>
        </FadeIn>

        {/* Body */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: feature list */}
          <div>
            <div className="lg:sticky lg:top-20 flex flex-col">
              <div>
                {/* <h3 className="text-2xl lg:text-2xl font-semibold tracking-tight mb-2">
                  Website Design
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Conversion-focused websites built fast — custom code, polished
                  craft, and a live URL in under two weeks.
                </p> */}
                <FadeInStagger className="flex flex-col" staggerDelay={0.15}>
                  {webDesign.map((f) => (
                    <FeatureItem key={f.label} feature={f} />
                  ))}
                </FadeInStagger>
              </div>
            </div>
          </div>

          {/* Right: sticky image panel */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/10 bg-muted/20 aspect-3/4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
                  alt="Website design example"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <RippleDivider />
    </section>
  );
}
