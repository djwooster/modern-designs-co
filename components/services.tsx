"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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


// ─── Types & data ──────────────────────────────────────────────────────────────

type Feature = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const webDesign: Feature[] = [
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
];

const productDesign: Feature[] = [
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

// ─── Feature item (static) ─────────────────────────────────────────────────────

function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="flex gap-4 items-start py-3 px-1">
      <div className="size-7 rounded-lg bg-muted/60 border border-border/60 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm font-semibold leading-snug mb-1">
          {feature.label}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {feature.detail}
        </p>
      </div>
    </div>
  );
}

// ─── Ornamental brushstroke ────────────────────────────────────────────────────

function OrnamentalBrushstroke({ isInView }: { isInView: boolean }) {
  return (
    <motion.svg
      className="absolute top-0 left-0 w-full pointer-events-none select-none"
      viewBox="0 0 1440 60"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
    >
      <motion.g
        style={{ transformOrigin: "40px 30px" }}
        initial={{ opacity: 0, scale: 0.55 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.55 }
        }
        transition={{ duration: 0.9, ease: [0.34, 1.4, 0.64, 1], delay: 0.1 }}
      >
        <path
          d="M 40,17 L 53,30 L 40,43 L 27,30 Z"
          fill="none"
          stroke="#C8941A"
          strokeWidth="0.6"
          style={{ opacity: 0.48 }}
        />
        <path
          d="M 40,23 L 47,30 L 40,37 L 33,30 Z"
          fill="#C8941A"
          style={{ opacity: 0.28 }}
        />
        <line x1="14" y1="30" x2="27" y2="30" stroke="#C8941A" strokeWidth="0.55" style={{ opacity: 0.35 }} />
        <line x1="40" y1="6" x2="40" y2="17" stroke="#C8941A" strokeWidth="0.55" style={{ opacity: 0.28 }} />
        <line x1="40" y1="43" x2="40" y2="54" stroke="#C8941A" strokeWidth="0.55" style={{ opacity: 0.28 }} />
        <circle cx="12" cy="30" r="1.4" fill="#C8941A" style={{ opacity: 0.38 }} />
        <circle cx="40" cy="4" r="1.1" fill="#C8941A" style={{ opacity: 0.26 }} />
        <circle cx="40" cy="56" r="1.1" fill="#C8941A" style={{ opacity: 0.26 }} />
        <circle cx="31" cy="21" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
        <circle cx="49" cy="21" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
        <circle cx="49" cy="39" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
        <circle cx="31" cy="39" r="0.75" fill="#C8941A" style={{ opacity: 0.24 }} />
      </motion.g>
      <motion.path
        d="M 54,30 L 1440,30"
        fill="none"
        stroke="#C8941A"
        strokeWidth="0.65"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 0.26 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.55 }}
      />
      <motion.path
        d="M 54,27.5 L 1440,27.5"
        fill="none"
        stroke="#D4A827"
        strokeWidth="0.35"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 0.14 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 1.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.72 }}
      />
    </motion.svg>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const productGroupRef = useRef<HTMLDivElement>(null);
  const isProductInView = useInView(productGroupRef, {
    once: false,
    margin: "-30% 0px -30% 0px",
  });

  return (
    <section ref={sectionRef} className="relative py-20 px-6 lg:px-24">
      <OrnamentalBrushstroke isInView={isInView} />
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <FadeIn className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4  ">
            What we do
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            We deliver what you need. Fast.
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
            {/* Website Design group */}
            <div className="">
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">
                Website Design
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Conversion-focused websites built fast — custom code, polished
                craft, and a live URL in under two weeks.
              </p>
              <div className="flex flex-col">
                {webDesign.map((f) => (
                  <FeatureItem key={f.label} feature={f} />
                ))}
              </div>
            </div>

            {/* Divider */}
            {/* <div className="h-px bg-border/60 mb-8" /> */}

            {/* Product Design group */}
            {/* <div ref={productGroupRef}>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">
                Product Design
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Design systems and Figma-to-browser handoffs that give your
                engineers everything they need to ship on day one.
              </p>
              <div className="flex flex-col">
                {productDesign.map((f) => (
                  <FeatureItem key={f.label} feature={f} />
                ))}
              </div>
            </div> */}
            </div>{/* end sticky wrapper */}
          </div>{/* end left grid item */}

          {/* Right: sticky image panel */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/10 bg-muted/20 aspect-[3/4]">
                <AnimatePresence mode="wait">
                  {!isProductInView ? (
                    <motion.div
                      key="website"
                      className="w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
                        alt="Website design example"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="product"
                      className="w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
                        alt="Product design example"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
