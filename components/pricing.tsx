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
      {
        icon: Smile,
        text: "Low stress for you — we handle every detail so you can stay focused on your work",
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
      {/* Diagonal hatching texture */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 24px)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      {/* Top fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-350 relative z-10">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Design that makes you proud.
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
