"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  const { scrollYProgress } = useScroll({
    target: deviceRef,
    offset: ["start end", "center center"],
  });
  const deviceWidth = useTransform(scrollYProgress, [0, 1], ["30vw", "80vw"]);

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

      {/* Two-column hero content */}
      <div className="mx-auto max-w-350 px-6 lg:px-24 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0">
          {/* Left: headline + copy + CTAs */}
          <div>
            <h1 className="mb-10">
              <motion.span
                className="block text-7xl sm:text-8xl lg:text-9xl font-extrabold leading-[0.88] tracking-tighter text-foreground"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
              >
                Beautiful
              </motion.span>
              <motion.span
                className="block text-7xl sm:text-8xl lg:text-9xl font-extrabold leading-[0.88] tracking-tighter text-foreground"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
              >
                design
              </motion.span>
              <motion.span
                className="block text-2xl sm:text-3xl lg:text-4xl italic text-primary mt-5"
                style={{ fontFamily: "var(--font-playfair)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34, ease }}
              >
                for everyone.
              </motion.span>
            </h1>

            {/* <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              We make brands and websites people actually talk about. Yours will
              be one of them.
            </motion.p> */}

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease }}
            >
              <AnimatedCTA href="#contact" size="lg">
                Start a project
              </AnimatedCTA>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-lg font-medium text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://cal.com/djwooster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a free call
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: hero image */}
          <motion.div
            className="w-full lg:w-97.5 shrink-0 aspect-3/4 relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <Image
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=780&h=1040&fit=crop&q=80"
              alt="Creative design workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 390px"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* HeroDevice — starts 30vw, grows to 60vw centered as user scrolls */}
      <div className="mt-30">
        <div ref={deviceRef} className="flex justify-center">
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ width: deviceWidth }}
          >
            <HeroDevice />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
