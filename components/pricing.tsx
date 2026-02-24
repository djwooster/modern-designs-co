"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { AnimatedCTA } from "@/components/animated-cta";
import {
  Sparkles,
  Smile,
  Zap,
  Users,
  Monitor,
  Layers,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; text: string };

type Plan = {
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceMeta: string;
  cta: string;
  variant: "default" | "secondary";
  highlight: boolean;
  features: Feature[];
};

// TODO: Update price values to match your actual starting rates
const plans: Plan[] = [
  {
    name: "Website Design & Development",
    tagline: "Website Design & Development",
    description:
      "For business owners and startups who want a beautiful, professional website — built to reflect their brand and delivered without the headache.",
    price: "From $3,000",
    priceMeta: "Fixed quote · no surprises",
    cta: "Start a website project",
    variant: "default" as const,
    highlight: false,
    features: [
      {
        icon: Sparkles,
        text: "Beautifully crafted to reflect the true calibre of your brand — nothing off-the-shelf",
      },
      // {
      //   icon: BadgeCheck,
      //   text: "Walk into every sales conversation knowing your site makes the right first impression",
      // },
      {
        icon: Smile,
        text: "Low stres for you — we handle every detail so you can stay focused on your work",
      },
      {
        icon: Zap,
        text: "Blazing fast, flawless on every device, and no endless platform fees",
      },
    ],
  },
  {
    name: "Product Design",
    tagline: "UX & Product Design",
    description:
      "For teams that need a dedicated design partner — someone who's in it with you, not just delivering files.",
    price: "From $3,500",
    priceMeta: "Per month · pause or cancel anytime",
    cta: "Start a design project",
    variant: "secondary" as const,
    highlight: false,
    features: [
      {
        icon: Users,
        text: "A dedicated design partner embedded in your process — invested in your outcome",
      },
      {
        icon: Monitor,
        text: "See every screen fully designed and approved before development begins",
      },
      {
        icon: Layers,
        text: "A cohesive design system your team can build on with confidence",
      },
      {
        icon: RefreshCw,
        text: "Pause or cancel any month — flexibility built in, no strings attached",
      },
    ],
  },
];

// Organic blob SVG paths — 200×200 viewBox
const blobs = [
  {
    // Large — top-right, partially off-screen
    path: "M 100 22 C 126 10 165 28 178 68 C 191 108 174 155 138 170 C 102 185 52 172 28 138 C 4 104 12 55 42 36 C 62 24 74 34 100 22 Z",
    wrapperClass: "absolute -top-24 -right-24",
    size: "w-[420px] h-[420px]",
    animate: { rotate: [0, 6, -3, 2, 0], scale: [1, 1.04, 0.97, 1.02, 1] },
    transition: { duration: 22, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    // Medium — bottom-left, partially off-screen
    path: "M 105 25 C 128 12 158 35 165 72 C 172 109 155 148 122 162 C 89 176 50 168 30 138 C 10 108 15 65 40 44 C 58 28 82 38 105 25 Z",
    wrapperClass: "absolute -bottom-20 -left-20",
    size: "w-[340px] h-[340px]",
    animate: {
      rotate: [0, -8, 3, -4, 0],
      scale: [1, 0.96, 1.05, 0.98, 1],
      y: [0, 10, -6, 4, 0],
    },
    transition: {
      duration: 26,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 5,
    },
  },
  {
    // Small — center-left, adds mid-section depth
    path: "M 95 30 C 115 15 150 30 162 65 C 174 100 158 140 128 155 C 98 170 58 162 38 132 C 18 102 22 62 48 42 C 65 28 75 45 95 30 Z",
    wrapperClass: "absolute top-1/2 -left-16 -translate-y-1/2",
    size: "w-[240px] h-[240px]",
    animate: { rotate: [0, 10, -5, 7, 0], y: [0, -10, 8, -4, 0] },
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 10,
    },
  },
];

function FeatureList({ features }: { features: Feature[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <ul ref={ref} className="flex flex-col gap-3">
      {features.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <motion.li
            key={feature.text}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -6 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          >
            <motion.span
              className="shrink-0 mt-0.5"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.35,
                delay: i * 0.05 + 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <Icon className="size-4 text-primary" />
            </motion.span>
            <span className="text-sm text-muted-foreground leading-snug">
              {feature.text}
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}

export function Pricing() {
  return (
    <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
      {/* Decorative organic blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {blobs.map((blob, i) => (
          <div key={i} className={blob.wrapperClass}>
            <motion.div
              className={blob.size}
              animate={blob.animate}
              transition={blob.transition}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full fill-foreground opacity-[0.06]"
              >
                <path d={blob.path} />
              </svg>
              </motion.div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-350 relative z-10">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Design that makes
            <br />
            you proud.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Every project is scoped to your goals — we&apos;ll give you a
            clear, fixed quote before anything begins.
          </p>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.highlight
                  ? "border-primary/40 bg-card shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              {/* Header */}
              <div className="mb-6">
                <p className="text-2xl font-semibold tracking-tight leading-snug mb-3">
                  {plan.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="border-t border-border mb-6" />

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className="text-xs text-muted-foreground mt-2 tracking-wide">
                  {plan.priceMeta}
                </p>
              </div>

              <div className="border-t border-border mb-6" />

              {/* Features — flex-1 pushes CTA to the bottom */}
              <div className="flex-1 mb-8">
                <FeatureList features={plan.features} />
              </div>

              <AnimatedCTA
                href="#contact"
                variant={plan.variant}
                size="default"
                className="w-full justify-center font-medium"
              >
                {plan.cta}
              </AnimatedCTA>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
