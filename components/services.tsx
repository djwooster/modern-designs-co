"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { Layers, Code2, Globe } from "lucide-react";

const services = [
  {
    icon: Globe,
    animKey: "Globe" as const,
    name: "Website Design",
    tagline: "Your brand, beautifully online.",
    description:
      "A website that looks great and works even better. We craft custom sites built specifically for you — with smooth animations, intuitive layouts, and the features your visitors actually need.",
    deliverables: [
      "Beautiful animations & interactions",
      "Custom-built for your brand",
      "Contact forms & lead capture",
      "Mobile-responsive & SEO-ready",
    ],
  },
  {
    icon: Layers,
    animKey: "Layers" as const,
    name: "Product Design",
    tagline: "Beautiful interfaces that convert.",
    description:
      "Beautiful interfaces aren't just about aesthetics — they reduce churn, build trust, and make your product feel inevitable. We design with your users and business goals at the center.",
    deliverables: [
      "UX research & flows",
      "Figma wireframes & prototypes",
      "Design systems",
      "Handoff-ready specs",
    ],
  },
  {
    icon: Code2,
    animKey: "Code2" as const,
    name: "Web Development",
    tagline: "Fast, clean, built to scale.",
    description:
      "We write code that's a joy to work with — fast, accessible, and built for the long run. No bloat, no shortcuts. Just clean Next.js applications your team can actually maintain.",
    deliverables: [
      "Next.js & TypeScript",
      "Full-stack & API integration",
      "Vercel deployments",
      "Performance optimization",
    ],
  },
];

// Icon variants keyed by "cardHover" so they respond to the parent card's whileHover
const iconVariants = {
  Layers: {
    initial: { y: 0, rotate: 0, scale: 1 },
    cardHover: { y: -4, rotate: -8, scale: 1.15 },
  },
  Code2: {
    initial: { y: 0, rotate: 0, scale: 1 },
    cardHover: { y: -3, rotate: 6, scale: 1.15 },
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

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            const variants = iconVariants[service.animKey];

            return (
              <motion.div
                key={service.name}
                variants={staggerItem}
                // whileHover propagates "cardHover" down to child motion elements
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
                <ul className="flex flex-col gap-1.5 mt-auto pt-2 border-t border-border">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
