"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";

function Sparkle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1 L11.8 8.2 L19 10 L11.8 11.8 L10 19 L8.2 11.8 L1 10 L8.2 8.2 Z" />
    </svg>
  );
}

function Planet() {
  return (
    <svg width="56" height="38" viewBox="0 0 56 38" fill="none">
      {/* Ring back arc */}
      <path
        d="M4 19 Q28 9 52 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Planet body fill */}
      <circle cx="28" cy="19" r="12" fill="currentColor" opacity="0.1" />
      {/* Planet body stroke */}
      <circle cx="28" cy="19" r="12" stroke="currentColor" strokeWidth="1.5" />
      {/* Ring front arc */}
      <path
        d="M4 19 Q28 29 52 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Asterisk({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="4.5" x2="15" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="11.5" x2="15" y2="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Dot({ size = 6 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 6 6">
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  );
}

export function About() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-secondary/40">
      <div className="mx-auto max-w-350">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <div>
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                About the studio
              </p>
              <h2 className="text-3xl font-semibold tracking-tight mb-5">
                A studio built on
                craft and honesty.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                At Modern Designs Co, we believe great design shouldn't be reserved for the biggest budgets.
                Startups and growing businesses deserve the same quality of design that the world's best
                companies get — and that's exactly what we deliver.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We're a small, focused studio by choice. That means when you work with us, you get genuine
                care and attention on your project, not a revolving door of account managers and junior staff.
                Just outstanding work, done with intention.
              </p>
            </FadeIn>
          </div>

          {/* Right: image + celestial decorations */}
          <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-100">

              {/* === Celestial decorations (pointer-events-none, float outside image) === */}

              {/* Large sparkle — top-right */}
              <motion.div
                className="absolute -top-6 -right-3 text-primary opacity-70 pointer-events-none"
                animate={{ y: [0, -7, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkle size={28} />
              </motion.div>

              {/* Small sparkle — upper left */}
              <motion.div
                className="absolute -top-2 left-8 text-primary opacity-45 pointer-events-none"
                animate={{ y: [0, -5, 0], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 4.4, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkle size={13} />
              </motion.div>

              {/* Planet — left side, mid-height */}
              <motion.div
                className="absolute top-1/3 -left-14 text-primary opacity-50 pointer-events-none"
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Planet />
              </motion.div>

              {/* Asterisk — right side, lower third */}
              <motion.div
                className="absolute top-[62%] -right-7 text-primary opacity-40 pointer-events-none"
                animate={{ rotate: [0, 30, 0, -30, 0] }}
                transition={{ duration: 5.2, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Asterisk size={20} />
              </motion.div>

              {/* Tiny dot — bottom-left */}
              <motion.div
                className="absolute -bottom-4 left-10 text-primary opacity-55 pointer-events-none"
                animate={{ scale: [1, 1.4, 1], opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 2.8, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Dot size={7} />
              </motion.div>

              {/* Tiny dot — near top-right sparkle */}
              <motion.div
                className="absolute top-2 right-10 text-primary opacity-35 pointer-events-none"
                animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 3.4, delay: 2.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Dot size={4} />
              </motion.div>

              {/* Small sparkle — bottom-right */}
              <motion.div
                className="absolute -bottom-2 -right-4 text-primary opacity-40 pointer-events-none"
                animate={{ y: [0, 5, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, delay: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkle size={11} />
              </motion.div>

              {/* === Photo with Tilt === */}
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={false}
                transitionSpeed={1800}
                perspective={1200}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-3/4">
                  {/* Photo */}
                  <img
                    src="/headshot1.png"
                    alt="DJ Wooster, Owner of Modern Designs Co"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Diagonal warm rust colour wash */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-primary/10 pointer-events-none"
                    style={{ mixBlendMode: "multiply" }}
                  />

                  {/* Dark bottom gradient — helps frosted card read cleanly */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/55 to-transparent pointer-events-none" />

                  {/* Film grain */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden
                    style={{ opacity: 0.07, mixBlendMode: "overlay" }}
                  >
                    <filter id="grain">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.72"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#grain)" />
                  </svg>

                  {/* Frosted glass name card */}
                  <div className="absolute inset-x-0 bottom-0 px-5 py-4 backdrop-blur-md bg-white/8 border-t border-white/12">
                    <p className="text-white font-semibold text-sm tracking-wide leading-snug">
                      DJ Wooster
                    </p>
                    <p className="text-white/60 text-[10px] font-medium tracking-widest uppercase mt-0.5">
                      Owner
                    </p>
                  </div>
                </div>
              </Tilt>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
