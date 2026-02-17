"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { Zap, Eye, Key } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    heading: "Custom apps used to cost millions.",
    body: "A decade ago, building a custom web app meant 12–18 months, a team of 20, and a budget most businesses couldn't justify. We build them in weeks — using modern tools, tight process, and none of the agency overhead.",
  },
  {
    icon: Eye,
    heading: "You see exactly what you're getting.",
    body: "You approve the design before we write a line of code. You get a live demo every sprint. There are no black boxes here — no handwaving, no jargon, no surprises on the invoice.",
  },
  {
    icon: Key,
    heading: "Everything belongs to you.",
    body: "Figma files, source code, credentials, brand assets — all yours from day one. Nothing is locked in our systems. When the project ends, you walk away with full ownership and the freedom to do whatever you want with it.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 px-6 bg-secondary/40">
      <div className="mx-auto max-w-[52rem]">
        {/* Centered header */}
        <FadeIn className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Why work with us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            The world has changed.
            <br />
            Your agency should have too.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            We use modern tools and tight collaboration to deliver what used to
            require a large team, a long timeline, and a seven-figure budget.
          </p>
        </FadeIn>

        {/* 3-card grid */}
        <FadeInStagger className="grid sm:grid-cols-3 gap-4" staggerDelay={0.1}>
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.heading}
                variants={staggerItem}
                className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4"
              >
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-snug mb-2">
                    {reason.heading}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
