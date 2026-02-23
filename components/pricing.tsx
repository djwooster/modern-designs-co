"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { AnimatedCTA } from "@/components/animated-cta";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Website Design & Development",
    tagline: "A site you can't wait to share.",
    description:
      "That feeling when you open your finished site for the first time — clean, sharp, unmistakably you. We build websites that make you genuinely excited to send your URL, confident walking into every sales call, and proud of how your business shows up in the world.",
    cta: "Start a website project",
    variant: "default" as const,
    highlight: true,
    features: [
      "Send your URL with confidence — every single time",
      "A first impression as strong as the work you do",
      "Win clients before you say a word",
      "Feels completely like you — nothing generic, nothing borrowed",
      "Silky animations that make visitors stay and explore",
      "Loads in under a second — because slow sites lose clients",
      "Looks flawless on every phone, tablet, and screen",
      "Yours to own outright — no platform fees, ever",
    ],
  },
  {
    name: "Product Design",
    tagline: "See every screen before we write a line of code.",
    description:
      "For teams that need a dedicated design partner — someone who's in it with you, not just delivering files.",
    cta: "Start a design project",
    variant: "secondary" as const,
    highlight: false,
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
            Design that makes
            <br />
            you proud.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Every project is scoped to your goals — we&apos;ll give you a
            clear, fixed quote before anything begins.
          </p>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative flex flex-col rounded-2xl border p-6 gap-6 ${
                plan.highlight
                  ? "border-primary/40 bg-card shadow-sm"
                  : "border-border bg-card"
              }`}
            >
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

              <AnimatedCTA
                href="#contact"
                variant={plan.variant}
                size="default"
                className="w-full justify-center font-medium"
              >
                {plan.cta}
              </AnimatedCTA>

              <FeatureList features={plan.features} />
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
