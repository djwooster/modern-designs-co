"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { AnimatedCTA } from "@/components/animated-cta";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const websiteDesignPlan = {
  name: "Website Design & Development",
  tagline: "One-time build. Zero monthly fees. Yours forever.",
  badge: null,
  description:
    "Stop renting your website from a platform that limits what you can do and charges you every single month. We build you something custom — something that actually belongs to you, reflects your brand perfectly, and makes people stop and look.",
  cta: "Start a website project",
  variant: "default" as const,
  features: [
    "A site that's 100% yours — no Squarespace or Wix fees, ever",
    "Silky animations that make visitors feel something",
    "Contact forms that send leads straight to your inbox",
    "Loads in under a second — fast sites rank higher",
    "Looks flawless on every phone, tablet, and screen",
    "Built around your brand — not a template you're stuck with",
    "Fully custom — no feature restrictions, no platform limits",
    "You own the code completely, from day one",
    "Easy to grow and update as your business evolves",
  ],
};

const plans = [
  {
    name: "Product Design",
    tagline: "See every screen before we write a line of code.",
    badge: null,
    description:
      "For teams that need a dedicated design partner — someone who's in it with you, not just delivering files.",
    cta: "Start a design project",
    variant: "secondary" as const,
    features: [
      "A designer who's fully focused on your product",
      "Unlimited design requests and revisions",
      "See every screen before anything gets built",
      "A brand and interface that makes people stop and look",
      "Figma files that are yours to keep — always",
      "A design system your team can build on forever",
      "Weekly reviews so you're never in the dark",
      "Direct access — no account managers in between",
      "Pause or cancel any month, no penalties",
    ],
  },
  {
    name: "Custom App Development",
    tagline: "You own the code. Completely and always.",
    badge: "Most popular",
    description:
      "For founders and businesses ready to ship a real product — not a template, not a prototype. Something you're proud to put your name on.",
    cta: "Start a dev project",
    variant: "default" as const,
    features: [
      "Full product design included — no extra cost",
      "A working app your customers can actually use",
      "Looks and works beautifully on every device",
      "Connects to the tools your business already runs on",
      "Scales as your user base and business grows",
      "Clear milestones with demos at every stage",
      "90 days of post-launch support — we don't disappear",
      "You own the code, fully and completely",
      "Built for speed — fast pages, happy users",
    ],
  },
];

function FeatureList({ features }: { features: string[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <ul ref={ref} className="flex flex-col gap-3 pt-2 border-t border-border">
      {features.map((feature, i) => (
        <motion.li
          key={feature}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -6 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: i * 0.05,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="flex-shrink-0 mt-0.5"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.35,
              delay: i * 0.05 + 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <Check className="size-4 text-primary" />
          </motion.span>
          <span className="text-sm text-muted-foreground leading-snug">
            {feature}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Invest once.
            <br />
            Own it forever.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            No subscriptions. No platform fees. No limits. Every project is
            scoped to your goals — we&apos;ll give you a clear, fixed quote
            before anything begins.
          </p>
        </FadeIn>

        {/* Website Design — full-width hero card */}
        <FadeIn className="mb-5">
          <motion.div
            className="relative flex flex-col sm:flex-row rounded-2xl border border-primary/40 bg-card shadow-sm p-6 gap-8"
          >
            {/* Left: header + CTA */}
            <div className="flex flex-col gap-6 sm:w-[340px] flex-shrink-0">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {websiteDesignPlan.name}
                </p>
                <p className="text-2xl font-semibold tracking-tight leading-snug mb-3">
                  {websiteDesignPlan.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {websiteDesignPlan.description}
                </p>
              </div>
              <AnimatedCTA
                href="#contact"
                variant={websiteDesignPlan.variant}
                size="default"
                className="w-full justify-center font-medium"
              >
                {websiteDesignPlan.cta}
              </AnimatedCTA>
            </div>

            {/* Right: features in 2-col grid */}
            <div className="flex-1">
              <FeatureList features={websiteDesignPlan.features} />
            </div>
          </motion.div>
        </FadeIn>

        {/* Product Design + Custom App — 2-col grid */}
        <FadeInStagger className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative flex flex-col rounded-2xl border p-6 gap-6 ${
                plan.badge
                  ? "border-primary/40 bg-card shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <Badge className="rounded-full text-xs px-3 py-0.5 font-medium">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {plan.name}
                </p>
                <p className="text-xl font-semibold tracking-tight leading-snug mb-3">
                  {plan.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <AnimatedCTA
                href="#contact"
                variant={plan.variant}
                size="default"
                className="w-full justify-center font-medium"
              >
                {plan.cta}
              </AnimatedCTA>

              {/* Features — staggered fade-in */}
              <FeatureList features={plan.features} />
            </motion.div>
          ))}
        </FadeInStagger>

        {/* Bundled note */}
        <FadeIn delay={0.2} className="mt-8">
          <p className="text-sm text-center text-muted-foreground">
            Need a website plus a custom app?{" "}
            <a
              href="#contact"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              Ask us about bundled engagements.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
