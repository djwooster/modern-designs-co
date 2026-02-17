"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { AnimatedCTA } from "@/components/animated-cta";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Product Design",
    price: "$5,000",
    cadence: "/ month",
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
    price: "$12,000",
    cadence: "starting at",
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
          <Check className="size-4 text-primary flex-shrink-0 mt-0.5" />
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
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[52rem]">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Straightforward pricing.
            <br />
            No surprises.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Every project is different — these are starting points. We&apos;ll
            give you a clear, fixed quote before anything begins.
          </p>
        </FadeIn>

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
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.cadence}
                  </span>
                </div>
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
            Need both design and development?{" "}
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
