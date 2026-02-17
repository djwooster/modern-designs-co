"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCTA } from "@/components/animated-cta";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-[52rem]">
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
            Boutique Design & Development Studio
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          We build awesome products
          <br />
          <span className="text-primary">people love to use.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          From funded startups to growing local businesses — we design and
          develop digital products that look great, feel effortless, and
          drive real results.
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
        <motion.p
          className="text-xs text-muted-foreground mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          Honest process · Clean code · No agency jargon
        </motion.p>

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
