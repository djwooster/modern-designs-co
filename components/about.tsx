"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";

const values = [
  {
    label: "Small team, big accountability",
    text: "You work directly with the people doing the work — not a project manager relaying messages.",
  },
  {
    label: "Honesty over comfort",
    text: "We'll tell you when something won't work, and why. Our reputation depends on your success.",
  },
  {
    label: "Quality without bloat",
    text: "Fast doesn't mean sloppy. We ship clean, maintainable work that holds up over time.",
  },
];

export function About() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-secondary/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <div>
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                About the studio
              </p>
              <h2 className="text-3xl font-semibold tracking-tight mb-5">
                A studio built on
                <br />
                craft and honesty.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Modern Designs Co was built on one belief: that startups and
                growing businesses deserve the same quality of product design
                and development that top-tier companies get. We&apos;re a small,
                focused studio — which means every project gets real attention,
                not just hours billed.
              </p>
            </FadeIn>

            <FadeInStagger className="flex flex-col gap-4" staggerDelay={0.1}>
              {values.map((value) => (
                <motion.div
                  key={value.label}
                  variants={staggerItem}
                  className="flex gap-4 py-4 border-t border-border"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1">{value.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </FadeInStagger>
          </div>

          {/* Right: image */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=1100&fit=crop&q=80"
                alt="Team collaborating in a bright studio workspace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
