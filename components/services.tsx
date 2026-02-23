"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import {
  Globe,
  Layers,
  PhoneOff,
  Rocket,
  Sparkles,
  Code2,
  LayoutGrid,
  BadgeCheck,
} from "lucide-react";

const featureContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
  cardHover: {
    transition: { staggerChildren: 0.12 },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  cardHover: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Globe,
    animKey: "Globe" as const,
    name: "Website Design",
    tagline: "Your brand, beautifully online.",
    description:
      "You can feel the difference when you visit a website that's built with smooth interactions, thoughtful details, and intuitive experience that make you excited to show it off. That's what we build for you.",
    features: [
      {
        icon: PhoneOff,
        label: "Skip the calls",
        detail: "async-first, we move at your pace",
      },
      {
        icon: Rocket,
        label: "Live in 1–2 weeks",
        detail: "from kickoff to shipped",
      },
      {
        icon: Sparkles,
        label: "Craft worth showing off",
        detail: "animations and details that feel alive",
      },
    ],
  },
  {
    icon: Layers,
    animKey: "Layers" as const,
    name: "Product Design",
    tagline: "Beautiful interfaces that convert.",
    description:
      "Beautiful interfaces aren't just about aesthetics — they reduce churn, build trust, and make your product feel inevitable. We design with your users and business goals at the center.",
    features: [
      {
        icon: Code2,
        label: "Figma to browser",
        detail: "React prototypes, not just static comps",
      },
      {
        icon: LayoutGrid,
        label: "Systems that scale",
        detail: "design tokens, components, docs",
      },
      {
        icon: BadgeCheck,
        label: "Ready to ship",
        detail: "pixel-perfect specs and dev handoff",
      },
    ],
  },
];

const iconVariants = {
  Layers: {
    initial: { y: 0, rotate: 0, scale: 1 },
    cardHover: { y: -4, rotate: -8, scale: 1.15 },
  },
  Globe: {
    initial: { y: 0, rotate: 0, scale: 1 },
    cardHover: { y: -4, rotate: -5, scale: 1.2 },
  },
};

const iconTransition = { type: "spring" as const, stiffness: 360, damping: 13 };

export function Services() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Everything you need,
            <br />
            nothing you don&apos;t.
          </h2>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const variants = iconVariants[service.animKey];

            return (
              <motion.div
                key={service.name}
                variants={staggerItem}
                whileHover="cardHover"
                className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors duration-300 cursor-default"
              >
                <motion.div
                  className="size-10 rounded-xl bg-primary/10 flex items-center justify-center"
                  variants={variants}
                  transition={iconTransition}
                >
                  <Icon className="size-5 text-primary" />
                </motion.div>

                <div>
                  <h3 className="font-semibold text-base mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <motion.ul
                  className="flex flex-col gap-3 mt-auto pt-4 border-t border-border"
                  variants={featureContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {service.features.map((feature) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <motion.li
                        key={feature.label}
                        variants={featureItemVariants}
                        className="flex items-center gap-3"
                      >
                        <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FeatureIcon className="size-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground leading-tight">
                            {feature.label}
                          </p>
                          <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                            {feature.detail}
                          </p>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
