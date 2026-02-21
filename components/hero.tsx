"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCTA } from "@/components/animated-cta";

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
  { id: "v1", type: "v", pos: 96,  len: 72, duration: 2.8, delay: 0,   repeatDelay: 6.4, opacity: 0.22 },
  { id: "v2", type: "v", pos: 288, len: 52, duration: 3.4, delay: 2.4, repeatDelay: 5.8, opacity: 0.16 },
  { id: "v3", type: "v", pos: 480, len: 88, duration: 2.5, delay: 5.1, repeatDelay: 7.2, opacity: 0.20 },
  { id: "v4", type: "v", pos: 720, len: 60, duration: 3.6, delay: 1.3, repeatDelay: 6.0, opacity: 0.18 },
  { id: "v5", type: "v", pos: 960, len: 56, duration: 2.9, delay: 3.8, repeatDelay: 5.5, opacity: 0.14 },
  // Horizontal (rightward)
  { id: "h1", type: "h", pos: 96,  len: 80, duration: 3.4, delay: 1.1, repeatDelay: 6.8, opacity: 0.18 },
  { id: "h2", type: "h", pos: 288, len: 56, duration: 2.7, delay: 4.2, repeatDelay: 5.3, opacity: 0.22 },
  { id: "h3", type: "h", pos: 432, len: 72, duration: 3.1, delay: 0.7, repeatDelay: 7.5, opacity: 0.15 },
];

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-24 relative overflow-hidden">
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
              // head at bottom, tail fades upward
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
              // head at right, tail fades leftward
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
        )
      )}

      <div className="mx-auto max-w-[1400px] relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Badge
            variant="secondary"
            className="mb-6 text-xs font-medium tracking-wide rounded-full px-3 py-1"
          >
            Boutique Web Design & Development Studio
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          You deserve a website worth 
          <br />
          <span className="text-primary">bragging about.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          Your business deserves a digital presence that feels luxurious, moves beautifully, 
          and launches faster than you thought possible — so you can stop settling and start winning.
          You get a completely custom website or application that is fully yours. No monthly fees,
          no platform limits, no compromises.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-3 mb-10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <AnimatedCTA href="#contact" size="lg">
            Start a project
          </AnimatedCTA>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-full font-medium text-muted-foreground hover:text-foreground"
          >
            {/* Replace YOUR_CAL_LINK with your actual cal.com URL */}
            <a
              href="https://cal.com/YOUR_CAL_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free call
            </a>
          </Button>
        </motion.div>

        {/* Trust signal */}
        {/* <motion.p
          className="text-xs text-muted-foreground mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          Honest process · Clean code · No agency jargon
        </motion.p> */}

        {/* Placeholder — swap with a real product screenshot */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-border bg-muted aspect-[16/10] flex items-center justify-center relative"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
          <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground">
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
            <p className="text-sm font-medium">Product screenshot coming soon</p>
            <p className="text-xs opacity-60">Replace with your best UI or mockup</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
