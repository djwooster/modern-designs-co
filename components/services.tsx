"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PhoneOff,
  Rocket,
  Sparkles,
  Code2,
  LayoutGrid,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const websiteFeatures: Feature[] = [
  {
    icon: PhoneOff,
    label: "Skip the calls.",
    detail:
      "No kickoff calls, no weekly syncs, no status meetings. We work async — you share your thoughts when it suits you, we respond thoughtfully and keep building. It keeps the project moving and respects the fact that your time is finite.",
  },
  {
    icon: Rocket,
    label: "Live in 1–2 weeks.",
    detail:
      "Most agencies stretch projects across months and bill you for every hour of back-and-forth. We've refined our process so that from the day we start, you're looking at a live, shipped website in 1–2 weeks — without cutting a single corner on craft.",
  },
  {
    icon: Sparkles,
    label: "Craft worth showing off.",
    detail:
      "Every hover state, every transition, every micro-interaction is considered. We build websites that feel alive — the kind clients screenshot and send to their friends asking who made it. This isn't decoration. It's the thing that makes people trust you before you've said a word.",
  },
];

const productFeatures: Feature[] = [
  {
    icon: Code2,
    label: "Figma to browser.",
    detail:
      "We don't hand over static screens and disappear. Every design we make is built to actually work — React-ready prototypes with specs that leave nothing to interpretation. Your engineers get files they can build from on day one, not a puzzle to decode.",
  },
  {
    icon: LayoutGrid,
    label: "Systems that scale.",
    detail:
      "A good design system means your team can build new features without starting from scratch every time. We create token-based systems with full component libraries and documentation — the kind of foundation that pays off compounding dividends as your product grows.",
  },
  {
    icon: BadgeCheck,
    label: "Ready to ship.",
    detail:
      "We've worked closely enough with engineers to know exactly what makes a handoff painful. Every spec we deliver is pixel-perfect, every interaction is annotated, and every edge case is covered — so nothing gets lost in translation between design and the final product.",
  },
];

function FeatureRows({ features }: { features: Feature[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex flex-col gap-10">
      {features.map((feature, i) => {
        const Icon = feature.icon;
        const base = i * 0.18;

        return (
          <div key={feature.label} className="flex gap-4 items-start">
            {/* Icon — clip-path wipe left-to-right (draw reveal) */}
            <motion.div
              className="flex-shrink-0 mt-0.5 overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 0.5, delay: base, ease: [0.4, 0, 0.2, 1] }}
            >
              <Icon className="size-5 text-foreground" strokeWidth={1.5} />
            </motion.div>

            <div>
              {/* Label */}
              <motion.p
                className="text-base font-semibold leading-snug"
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: base + 0.12, ease: "easeOut" }}
              >
                {feature.label}
              </motion.p>

              {/* Detail */}
              <motion.p
                className="text-sm text-muted-foreground mt-2 leading-relaxed"
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: base + 0.22, ease: "easeOut" }}
              >
                {feature.detail}
              </motion.p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type ServiceSectionProps = {
  heading: string;
  features: Feature[];
  imageUrl: string;
  imageAlt: string;
  flipImage?: boolean;
};

function ServiceSection({
  heading,
  features,
  imageUrl,
  imageAlt,
  flipImage = false,
}: ServiceSectionProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-40px" });

  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-40px" });

  const content = (
    <div className={`sticky top-20 flex flex-col gap-10 ${flipImage ? "order-2 lg:order-2" : "order-1"}`}>
      <motion.h2
        ref={headingRef}
        className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
        initial={{ opacity: 0, y: 24 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {heading}
      </motion.h2>
      <FeatureRows features={features} />
    </div>
  );

  const image = (
    <motion.div
      ref={imageRef}
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden ${flipImage ? "order-1 lg:order-1" : "order-2"}`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={imageInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
    </motion.div>
  );

  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start`}>
          {flipImage ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function WebsiteDesignService() {
  return (
    <ServiceSection
      heading="Website Design."
      features={websiteFeatures}
      imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Website design workspace"
    />
  );
}

export function ProductDesignService() {
  return (
    <ServiceSection
      heading="Product Design."
      features={productFeatures}
      imageUrl="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Product design work"
      flipImage
    />
  );
}
