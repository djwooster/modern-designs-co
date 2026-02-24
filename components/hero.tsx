"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimate } from "framer-motion";
import { AnimatedCTA } from "@/components/animated-cta";
import { HeroDevice } from "@/components/hero-device";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// Comet streaks travelling along grid lines (grid is 48px × 48px)
// pos = pixel position of the grid line; len = streak length in px
const GRID_STREAKS: {
  id: string;
  type: "v" | "h";
  pos: number;
  len: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  opacity: number;
}[] = [
  // Vertical (downward)
  {
    id: "v1",
    type: "v",
    pos: 96,
    len: 72,
    duration: 2.8,
    delay: 0,
    repeatDelay: 6.4,
    opacity: 0.22,
  },
  {
    id: "v2",
    type: "v",
    pos: 288,
    len: 52,
    duration: 3.4,
    delay: 2.4,
    repeatDelay: 5.8,
    opacity: 0.16,
  },
  {
    id: "v3",
    type: "v",
    pos: 480,
    len: 88,
    duration: 2.5,
    delay: 5.1,
    repeatDelay: 7.2,
    opacity: 0.2,
  },
  {
    id: "v4",
    type: "v",
    pos: 720,
    len: 60,
    duration: 3.6,
    delay: 1.3,
    repeatDelay: 6.0,
    opacity: 0.18,
  },
  {
    id: "v5",
    type: "v",
    pos: 960,
    len: 56,
    duration: 2.9,
    delay: 3.8,
    repeatDelay: 5.5,
    opacity: 0.14,
  },
  // Horizontal (rightward)
  {
    id: "h1",
    type: "h",
    pos: 96,
    len: 80,
    duration: 3.4,
    delay: 1.1,
    repeatDelay: 6.8,
    opacity: 0.18,
  },
  {
    id: "h2",
    type: "h",
    pos: 288,
    len: 56,
    duration: 2.7,
    delay: 4.2,
    repeatDelay: 5.3,
    opacity: 0.22,
  },
  {
    id: "h3",
    type: "h",
    pos: 432,
    len: 72,
    duration: 3.1,
    delay: 0.7,
    repeatDelay: 7.5,
    opacity: 0.15,
  },
];

export function Hero() {
  const deviceRef = useRef<HTMLDivElement>(null);
  const [periodRef, animatePeriod] = useAnimate();

  useEffect(() => {
    let active = true;

    const loop = async () => {
      // Let the hero entrance settle before starting
      await new Promise<void>((r) => setTimeout(r, 1000));
      if (!active) return;

      // Phase 1: spin fast → decelerate to stop
      await animatePeriod(
        periodRef.current,
        { rotate: 3600 },
        { duration: 4.5, ease: [0, 0.85, 0.75, 1] },
      );
      if (!active) return;

      // Phase 2a: walk step 1 — hop right and up, then land
      await animatePeriod(
        periodRef.current,
        { x: 18, y: -9 },
        { duration: 0.5, ease: "easeOut" },
      );
      await animatePeriod(
        periodRef.current,
        { y: 0 },
        { duration: 0.5, ease: "easeIn" },
      );
      if (!active) return;

      // Phase 2b: walk step 2 — hop right and up, then land
      await animatePeriod(
        periodRef.current,
        { x: 36, y: -9 },
        { duration: 0.5, ease: "easeOut" },
      );
      await animatePeriod(
        periodRef.current,
        { y: 0 },
        { duration: 0.5, ease: "easeIn" },
      );
      if (!active) return;

      // Phase 3: return home and shrink to half size
      await animatePeriod(
        periodRef.current,
        { x: 0, y: 0, scale: 0.5 },
        { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
      );
    };

    loop();
    return () => {
      active = false;
    };
  }, []);
  const { scrollYProgress } = useScroll({
    target: deviceRef,
    offset: ["start end", "center center"],
  });
  const deviceWidth = useTransform(scrollYProgress, [0, 1], ["30vw", "90vw"]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="pt-40 pb-0 relative overflow-hidden">
      {/* Static grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 3.5, delay: 0.4, ease: "easeOut" }}
      />

      {/* Comet streaks along grid lines */}
      {GRID_STREAKS.map((streak) =>
        streak.type === "v" ? (
          <motion.div
            key={streak.id}
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              left: streak.pos,
              top: 0,
              width: 1,
              height: streak.len,
              background: `linear-gradient(to bottom, transparent 0%, var(--foreground) 75%, transparent 100%)`,
              opacity: streak.opacity,
            }}
            animate={{ y: [-streak.len, 900] }}
            transition={{
              duration: streak.duration,
              delay: streak.delay,
              repeat: Infinity,
              repeatDelay: streak.repeatDelay,
              ease: "linear",
            }}
          />
        ) : (
          <motion.div
            key={streak.id}
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              top: streak.pos,
              left: 0,
              height: 1,
              width: streak.len,
              background: `linear-gradient(to right, transparent 0%, var(--foreground) 75%, transparent 100%)`,
              opacity: streak.opacity,
            }}
            animate={{ x: [-streak.len, 1800] }}
            transition={{
              duration: streak.duration,
              delay: streak.delay,
              repeat: Infinity,
              repeatDelay: streak.repeatDelay,
              ease: "linear",
            }}
          />
        ),
      )}

      {/* Hero content */}
      <div className="mx-auto max-w-350 px-6 lg:px-24 relative">
        <h1 className="mb-6">
          <motion.span
            className="block font-bold leading-[0.9] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(3rem, 12vw, 11rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Modern Designs Co
            <span
              ref={periodRef}
              aria-hidden
              className="text-primary"
              style={{ display: "inline-block" }}
            >
              .
            </span>
          </motion.span>
        </h1>

        <motion.p
          className="font-semibold text-primary mb-12"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.95rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease }}
        >
          Your creative partner for world class website &amp; product design
        </motion.p>

        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <AnimatedCTA
            href="#services"
            size="lg"
            direction="down"
            iconSize="lg"
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-transparent px-0 text-md"
          >
            <span className="inline-flex items-center gap-2">
              <span className="size-3 bg-foreground shrink-0 inline-block" />
              Check us out
            </span>
          </AnimatedCTA>
        </motion.div>
      </div>

      {/* HeroDevice — fixed 90vw on mobile; scroll-driven 30→90vw on desktop */}
      <div className="mt-16 lg:mt-40 pb-16 lg:pb-28">
        <div ref={deviceRef} className="flex justify-center">
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ width: isMobile ? "90vw" : deviceWidth }}
          >
            <HeroDevice />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
