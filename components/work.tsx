"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/fade-in";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "We Love Laguna",
    type: "Website Redesign · Branding",
    description:
      "A redesign for a blog in Laguna Beach to update the brand and website.",
    gradient: "from-orange-100 to-amber-100",
    src: "/project1.png",
    url: "we-love-laguna-ozjk.vercel.app",
  },
  {
    name: "Summit B&B",
    type: "Website Design · Marketing Site",
    description:
      "Redesigning a marketing site for a short-term property management company.",
    gradient: "from-stone-100 to-orange-50",
    src: "/project2.png",
    url: "summit-bnb.vercel.app",
  },
  {
    name: "Flower Bunny",
    type: "Website Design · Portfolio",
    description:
      "An elegant, luxury portfolio website for a high-end floral designer.",
    gradient: "from-amber-50 to-stone-100",
    src: "/project3.png",
    url: "https://flower-bunny-website.vercel.app/",
  },
];

export function Work() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Recent work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Some of our favorite recent projects.
          </h2>
        </FadeIn>

        <FadeInStagger className="flex flex-col gap-4">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.url.startsWith("http") ? project.url : `https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300 cursor-pointer block"
            >
              {/* Project image */}
              <div className={`aspect-[16/7] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
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
            </motion.a>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
