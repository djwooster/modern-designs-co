"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// ─── Data ──────────────────────────────────────────────────────────────────────

const webOutcomes = [
  "Live in 1–2 weeks",
  "No calls required",
  "Craft worth bragging about",
];

const productOutcomes = [
  "Dedicated design partner",
  "Systems, not just screens",
  "Flexible to fit your process",
];

const marqueeItems = [
  "Website Design",
  "Product Design",
  "Quick Delivery",
  "Outstanding Craft",
  "Stress-Free",
  "No Surprises",
];

// ─── Shared primitives ─────────────────────────────────────────────────────────

function OutcomePill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-border rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground bg-background/70">
      <Check className="size-3 text-primary shrink-0" />
      {text}
    </span>
  );
}

function GhostNum({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute font-black leading-none select-none pointer-events-none text-primary/[0.07] ${className}`}
      style={{ fontSize: "clamp(7rem, 22vw, 20rem)" }}
    >
      {children}
    </div>
  );
}

// ─── Service 01: Website Design ────────────────────────────────────────────────

function WebDesignService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative pt-4">
      <GhostNum className="-top-6 -left-4 lg:-left-8">01</GhostNum>

      <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div>
          {/* <motion.p
            className="text-[10px] font-semibold tracking-[0.42em] uppercase text-primary mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            01 — Website Design
          </motion.p> */}

          <div className="overflow-hidden mb-0.5">
            <motion.h3
              className="font-black tracking-tight leading-[0.87] text-foreground"
              style={{ fontSize: "clamp(3rem, 6vw, 7.5rem)" }}
              initial={{ opacity: 0, y: "110%" }}
              animate={inView ? { opacity: 1, y: "0%" } : {}}
              transition={{ duration: 0.72, delay: 0.06, ease }}
            >
              Website
            </motion.h3>
          </div>
          <div className="mb-8">
            <motion.h3
              className="font-black tracking-tight leading-[0.87] text-foreground"
              style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
              initial={{ opacity: 0, y: "110%" }}
              animate={inView ? { opacity: 1, y: "0%" } : {}}
              transition={{ duration: 0.72, delay: 0.13, ease }}
            >
              Design<span className="text-primary">.</span>
            </motion.h3>
          </div>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.24, ease }}
          >
            Premium design with lightning-fast execution. A site that reflects
            the true calibre of your brand — fully live in weeks, not months.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease }}
          >
            {webOutcomes.map((o) => (
              <OutcomePill key={o} text={o} />
            ))}
          </motion.div>
        </div>

        {/* Image — tilted, grid-breaking */}
        <motion.div
          className="hidden lg:block relative w-72 xl:w-88 shrink-0"
          initial={{ opacity: 0, rotate: 3, scale: 0.93 }}
          animate={inView ? { opacity: 1, rotate: 2, scale: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease }}
        >
          <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-black/15">
            <Image
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
              alt="Website design on a laptop"
              fill
              className="object-cover"
              sizes="352px"
            />
          </div>
          {/* Floating chip */}
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground text-[9px] tracking-widest uppercase font-bold px-3 py-2 rounded-lg shadow-xl">
            Progress every 24h
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Service 02: Product Design ────────────────────────────────────────────────

function ProductDesignService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative pt-4 lg:pl-20">
      <GhostNum className="-top-6 right-0 lg:-right-8 text-right">02</GhostNum>

      <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
        {/* Image — tilted opposite direction */}
        <motion.div
          className="hidden lg:block relative w-64 xl:w-80 shrink-0"
          initial={{ opacity: 0, rotate: -3, scale: 0.93 }}
          animate={inView ? { opacity: 1, rotate: -2, scale: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease }}
        >
          <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-black/15">
            <Image
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=85"
              alt="Product design and UX work"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          {/* Floating chip — top-right this time */}
          <div className="absolute -top-4 -right-4 bg-card text-card-foreground border border-border text-[9px] tracking-widest uppercase font-bold px-3 py-2 rounded-lg shadow-xl">
            Embedded partner
          </div>
        </motion.div>

        {/* Text */}
        <div>
          {/* <motion.p
            className="text-[10px] font-semibold tracking-[0.42em] uppercase text-primary mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            02 — Product Design
          </motion.p> */}

          <div className="overflow-hidden mb-0.5">
            <motion.h3
              className="font-black tracking-tight leading-[0.87] text-foreground"
              style={{ fontSize: "clamp(3rem, 6vw, 7.5rem)" }}
              initial={{ opacity: 0, y: "110%" }}
              animate={inView ? { opacity: 1, y: "0%" } : {}}
              transition={{ duration: 0.72, delay: 0.06, ease }}
            >
              UX & Product
            </motion.h3>
          </div>
          <div className=" mb-8">
            <motion.h3
              className="font-black tracking-tight leading-[0.87] text-foreground"
              style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
              initial={{ opacity: 0, y: "110%" }}
              animate={inView ? { opacity: 1, y: "0%" } : {}}
              transition={{ duration: 0.72, delay: 0.13, ease }}
            >
              Design<span className="text-primary">.</span>
            </motion.h3>
          </div>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.24, ease }}
          >
            A dedicated design partner embedded in your process — invested in
            your outcome, not just delivering files. Full UX and a design system
            your whole team can build on.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease }}
          >
            {productOutcomes.map((o) => (
              <OutcomePill key={o} text={o} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Scrolling marquee divider ──────────────────────────────────────────────────

function ScrollingMarquee() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-primary overflow-hidden py-3.5">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-primary-foreground text-[10px] font-semibold tracking-[0.42em] uppercase"
          >
            {item}
            <span
              aria-hidden="true"
              className="text-primary-foreground/30 text-[10px]"
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-muted overflow-hidden">
      {/* Padded content area */}
      <div className="py-28 lg:py-44 px-6 lg:px-24">
        <div className="mx-auto max-w-350">
          {/* ── HEADER ───────────────────────────────────────────────── */}
          <div ref={headerRef} className="mb-24 lg:mb-36">
            <motion.p
              className="text-[10px] font-semibold tracking-[0.45em] uppercase text-muted-foreground mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              What we do
            </motion.p>

            <div className=" mb-1">
              <motion.h2
                className="font-black tracking-tight leading-[0.87] text-foreground"
                style={{ fontSize: "clamp(2.8rem, 8.5vw, 8.5rem)" }}
                initial={{ opacity: 0, y: "100%" }}
                animate={headerInView ? { opacity: 1, y: "0%" } : {}}
                transition={{ duration: 0.72, delay: 0.08, ease }}
              >
                Good design
              </motion.h2>
            </div>
            <div className=" mb-7">
              <motion.h2
                className="font-black tracking-tight leading-[0.87] text-foreground"
                style={{ fontSize: "clamp(2.8rem, 8.5vw, 8.5rem)" }}
                initial={{ opacity: 0, y: "100%" }}
                animate={headerInView ? { opacity: 1, y: "0%" } : {}}
                transition={{ duration: 0.72, delay: 0.15, ease }}
              >
                changes everything<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-xl lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28, ease }}
            >
              Whether you need a site that launches fast or a design partner
              that stays with you for the long haul, we've got you covered.
            </motion.p>
          </div>

          {/* ── SERVICE 01 ───────────────────────────────────────────── */}
          <WebDesignService />

          {/* Inter-service divider — bleeds to padding edge */}
          <div
            aria-hidden="true"
            className="relative h-px bg-border my-20 lg:my-28 -mx-6 lg:-mx-24"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rotate-45 bg-primary" />
          </div>

          {/* ── SERVICE 02 ───────────────────────────────────────────── */}
          <ProductDesignService />
        </div>
      </div>

      {/* ── SCROLLING MARQUEE DIVIDER ─────────────────────────────── */}
      <ScrollingMarquee />
    </section>
  );
}
