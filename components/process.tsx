"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FadeIn } from "@/components/fade-in";

const designSteps = [
  {
    n: "01",
    name: "Discover & Align",
    summary:
      "We learn your users, goals, and where the current experience breaks down. Sharp questions, honest conversations — we get aligned before touching any design tool.",
  },
  {
    n: "02",
    name: "Design & Refine",
    summary:
      "High-fidelity Figma screens you can actually react to. We present, you give feedback, we refine — until you're genuinely excited about what we've made together.",
  },
  {
    n: "03",
    name: "Handoff & Support",
    summary:
      "Dev-ready specs, annotated files, and exported assets. We stay available through implementation so nothing gets lost when design meets code.",
  },
];

const devSteps = [
  {
    n: "01",
    name: "Discover & Scope",
    summary:
      "A clear scope with real milestones you can hold us to. No vague deliverables, no surprise invoices — just an honest plan for what we're building and when it ships.",
  },
  {
    n: "02",
    name: "Design, Build & Test",
    summary:
      "We design the full interface before writing a line of code, then build in two-week sprints with live demos at each milestone. You see progress — always.",
  },
  {
    n: "03",
    name: "Launch & Handover",
    summary:
      "Deployed, documented, and fully yours — with 90 days of post-launch support included. Code, credentials, everything: handed over completely.",
  },
];

function ScrollTrack({ steps }: { steps: typeof designSteps }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 55, damping: 22 });

  return (
    <ol ref={ref} className="relative flex flex-col gap-8">
      {/* Track background — runs from center of dot 1 to center of dot 3 */}
      <div className="absolute left-[7px] top-[11px] bottom-[11px] w-[2px] bg-border" />
      {/* Animated fill */}
      <motion.div
        className="absolute left-[7px] top-[11px] w-[2px] bg-primary origin-top"
        style={{ scaleY: progress, height: "calc(100% - 22px)" }}
      />

      {steps.map((step) => (
        <li key={step.n} className="flex gap-4 items-start">
          {/* Dot — 14px so center sits at left: 7px */}
          <div className="relative z-10 size-[14px] mt-[3px] flex-shrink-0 rounded-full border border-border bg-background flex items-center justify-center">
            <div className="size-[5px] rounded-full bg-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-semibold text-primary tabular-nums">
                {step.n}
              </span>
              <p className="text-sm font-semibold leading-snug">{step.name}</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {step.summary}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted">
    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
      <div className="size-12 rounded-xl bg-border/60 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="size-5 fill-none stroke-current stroke-[1.5]"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  </div>
);

export function Process() {
  return (
    <div>
      {/* ── Product Design ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="mx-auto max-w-[52rem]">
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Text */}
            <FadeIn className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
                  Product Design
                </p>
                <h2 className="text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
                  From fuzzy idea to
                  <br />
                  polished interface.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A collaborative process where you always know what&apos;s coming
                  next — and nothing ships until you love it.
                </p>
              </div>
              <ScrollTrack steps={designSteps} />
            </FadeIn>

            {/* Image */}
            <FadeIn delay={0.15} className="order-first sm:order-last">
              <ImagePlaceholder label="Product design process screenshot" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── App Development ────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[52rem]">
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Image */}
            <FadeIn delay={0.15} className="order-first">
              <ImagePlaceholder label="App development process screenshot" />
            </FadeIn>

            {/* Text */}
            <FadeIn className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
                  App Development
                </p>
                <h2 className="text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
                  From whiteboard sketch
                  <br />
                  to live product.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A structured build with no surprises — you know exactly
                  what&apos;s being built, when it ships, and what you&apos;re
                  paying for.
                </p>
              </div>
              <ScrollTrack steps={devSteps} />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
