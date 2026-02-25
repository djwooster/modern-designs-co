"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCTA } from "@/components/animated-cta";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// ─── Data ───────────────────────────────────────────────────────────────────────

type Plan = {
  num: string;
  name: string;
  headingLines: [string, string];
  description: string;
  price: string;
  priceMeta: string;
  cta: string;
  variant: "default" | "secondary";
  features: string[];
};

const plans: Plan[] = [
  {
    num: "01",
    name: "Website Design & Development",
    headingLines: ["Website Design", "& Development"],
    description:
      "For business owners and startups who want a beautiful, professional website — built to reflect their brand and delivered without the headache.",
    price: "From $3,000",
    priceMeta: "Fixed quote · no surprises",
    cta: "Start a website project",
    variant: "default",
    features: [
      "Beautifully crafted to reflect the true calibre of your brand — nothing off-the-shelf",
      "Low stress for you — we handle every detail so you can stay focused on your work",
      "Blazing fast, flawless on every device, and no endless platform fees",
    ],
  },
  {
    num: "02",
    name: "Product Design",
    headingLines: ["UX & Product", "Design"],
    description:
      "For teams that need a dedicated design partner — someone who's in it with you, not just delivering files.",
    price: "From $3,500",
    priceMeta: "Per month · pause or cancel anytime",
    cta: "Start a design project",
    variant: "secondary",
    features: [
      "A dedicated design partner embedded in your process — invested in your outcome",
      "See every screen fully designed and approved before development begins",
      "A cohesive design system your team can build on with confidence",
      "Pause or cancel any month — flexibility built in, no strings attached",
    ],
  },
];

// ─── Plan card ───────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  isFirst,
}: {
  plan: Plan;
  isFirst: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className={[
        "flex flex-col",
        isFirst
          ? "pb-12 lg:pb-0 lg:pr-12 xl:pr-16"
          : "pt-12 lg:pt-0 lg:pl-12 xl:pl-16",
      ].join(" ")}
    >
      {/* Label */}
      <motion.p
        className="text-[10px] font-semibold tracking-[0.42em] uppercase text-muted-foreground mb-5"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease }}
      >
        {plan.num} — {plan.name}
      </motion.p>

      {/* Heading */}
      <div className="overflow-hidden mb-0.5">
        <motion.h3
          className="font-black tracking-tight leading-[0.87] text-foreground"
          style={{ fontSize: "clamp(2rem, 3.5vw, 4.5rem)" }}
          initial={{ opacity: 0, y: "110%" }}
          animate={inView ? { opacity: 1, y: "0%" } : {}}
          transition={{ duration: 0.72, delay: 0.06, ease }}
        >
          {plan.headingLines[0]}
        </motion.h3>
      </div>
      <div className="mb-7">
        <motion.h3
          className="font-black tracking-tight leading-[0.87] text-foreground"
          style={{ fontSize: "clamp(2rem, 3.5vw, 4.5rem)" }}
          initial={{ opacity: 0, y: "110%" }}
          animate={inView ? { opacity: 1, y: "0%" } : {}}
          transition={{ duration: 0.72, delay: 0.13, ease }}
        >
          {plan.headingLines[1]}
          <span className="text-primary">.</span>
        </motion.h3>
      </div>

      {/* Description */}
      <motion.p
        className="text-base text-muted-foreground leading-relaxed mb-8"
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.22, ease }}
      >
        {plan.description}
      </motion.p>

      {/* Features */}
      <motion.ul
        className="flex flex-col gap-2.5"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease }}
      >
        {plan.features.map((text) => (
          <li
            key={text}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="shrink-0 text-primary mt-0.5 font-medium"
            >
              —
            </span>
            {text}
          </li>
        ))}
      </motion.ul>

      {/* Price + CTA — pinned to bottom */}
      <motion.div
        className="mt-auto pt-10"
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.18, ease }}
      >
        <p
          className="font-black tracking-tight text-foreground leading-none mb-1.5"
          style={{ fontSize: "clamp(1.8rem, 3vw, 3.5rem)" }}
        >
          {plan.price}
        </p>
        <p className="text-xs text-muted-foreground tracking-wide mb-8">
          {plan.priceMeta}
        </p>
        <AnimatedCTA
          href="#contact"
          variant={plan.variant}
          size="default"
          className="font-medium"
        >
          {plan.cta}
        </AnimatedCTA>
      </motion.div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────────

export function Pricing() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 px-6 lg:px-24"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="mx-auto max-w-350">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-24">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.45em] uppercase text-muted-foreground mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            Pricing
          </motion.p>

          <div className="overflow-hidden mb-1">
            <motion.h2
              className="font-black tracking-tight leading-[0.87] text-foreground"
              style={{ fontSize: "clamp(3.2rem, 9vw, 9rem)" }}
              initial={{ opacity: 0, y: "100%" }}
              animate={headerInView ? { opacity: 1, y: "0%" } : {}}
              transition={{ duration: 0.72, delay: 0.08, ease }}
            >
              Transparent
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="font-black tracking-tight leading-[0.87] text-foreground"
              style={{ fontSize: "clamp(3.2rem, 9vw, 9rem)" }}
              initial={{ opacity: 0, y: "100%" }}
              animate={headerInView ? { opacity: 1, y: "0%" } : {}}
              transition={{ duration: 0.72, delay: 0.15, ease }}
            >
              Pricing<span className="text-primary">.</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28, ease }}
          >
            Every project is scoped to your goals — we&apos;ll give you a
            clear, fixed quote before anything begins.
          </motion.p>
        </div>

        {/* Plans — two panels with dividers */}
        <div>
          <div aria-hidden="true" className="h-px bg-border -mx-6 lg:-mx-24" />

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border py-16 lg:py-24">
            {plans.map((plan, i) => (
              <PlanCard key={plan.num} plan={plan} isFirst={i === 0} />
            ))}
          </div>

          <div aria-hidden="true" className="h-px bg-border -mx-6 lg:-mx-24" />
        </div>
      </div>
    </section>
  );
}
