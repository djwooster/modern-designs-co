"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Project One",
    type: "Product Design · Web App",
    description:
      "A placeholder for your first featured case study. Drop in a real screenshot and description here.",
    gradient: "from-orange-100 to-amber-100",
  },
  {
    name: "Project Two",
    type: "Web Development · Marketing Site",
    description:
      "Another standout project. Replace with a real screenshot and a one-sentence outcome.",
    gradient: "from-stone-100 to-orange-50",
  },
  {
    name: "Project Three",
    type: "Full-Stack · SaaS",
    description:
      "A third featured work. Each card can link to a detailed case study page.",
    gradient: "from-amber-50 to-stone-100",
  },
];

export function Work() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[52rem]">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Selected work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            We let the work
            <br />
            speak for itself.
          </h2>
        </FadeIn>

        <FadeInStagger className="flex flex-col gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300 cursor-pointer"
            >
              {/* Placeholder image area */}
              <div
                className={`aspect-[16/7] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <div className="flex flex-col items-center gap-2 text-stone-400">
                  <div className="size-10 rounded-xl bg-white/60 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5 fill-none stroke-current stroke-[1.5]"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Replace with screenshot</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {project.type}
                  </p>
                  <h3 className="font-semibold text-sm mb-1">{project.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
              </div>
            </motion.div>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.2} className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Full case studies & client references available on request.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
