"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const projects = [
  {
    num: "01",
    name: "We Love Laguna",
    type: "Website Redesign · Branding",
    description:
      "A redesign for a Laguna Beach blog — updated brand identity and a fully rebuilt site that finally matches the soul of the place.",
    src: "/project1.png",
    url: "https://we-love-laguna-ozjk.vercel.app",
    dark: true,
  },
  {
    num: "02",
    name: "Summit B&B",
    type: "Website Design · Marketing Site",
    description:
      "A conversion-focused marketing site for a short-term rental company — clean, clear, and built to turn visitors into bookings.",
    src: "/project2.png",
    url: "https://summit-bnb.vercel.app",
    dark: false,
  },
  {
    num: "03",
    name: "Flower Bunny",
    type: "Website Design · Portfolio",
    description:
      "An elegant luxury portfolio for a high-end floral designer — editorial, delicate, and exactly as beautiful as the work it represents.",
    src: "/project3.png",
    url: "https://flower-bunny-website.vercel.app/",
    dark: true,
  },
];

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // odd index → image on left, even → image on right
  const imageRight = index % 2 === 0;

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group relative flex flex-col lg:flex-row overflow-hidden",
        "min-h-88 lg:min-h-152",
        imageRight ? "" : "lg:flex-row-reverse",
        project.dark
          ? "bg-foreground"
          : "bg-card border-t border-b border-border",
      ].join(" ")}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover="hover"
    >
      {/* Massive watermark number — bleeds off the edge */}
      <div
        aria-hidden="true"
        className={[
          "absolute z-10 pointer-events-none select-none leading-none font-black bottom-0",
          imageRight ? "-right-6" : "-left-6",
          project.dark ? "text-white/4" : "text-foreground/4",
        ].join(" ")}
        style={{ fontSize: "clamp(8rem, 24vw, 26rem)" }}
      >
        {project.num}
      </div>

      {/* Image — 60% width */}
      <div className="lg:w-[60%] aspect-video lg:aspect-auto overflow-hidden">
        <motion.img
          src={project.src}
          alt={`${project.name} project screenshot`}
          className="w-full h-full object-cover object-top"
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>

      {/* Content — 40% width */}
      <div className="lg:w-[40%] flex flex-col justify-between p-8 lg:p-14 relative z-20">
        <div>
          {/* Small counter in top-right corner */}
          <div className="flex items-center justify-between mb-8">
            <p
              className={[
                "text-xs font-medium tracking-widest uppercase",
                project.dark ? "text-white/40" : "text-muted-foreground",
              ].join(" ")}
            >
              {project.type}
            </p>
            <span
              className={[
                "text-xs font-mono tabular-nums",
                project.dark ? "text-white/20" : "text-foreground/20",
              ].join(" ")}
            >
              {project.num} / 03
            </span>
          </div>

          <h3
            className={[
              "text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05] mb-6",
              project.dark ? "text-white" : "text-foreground",
            ].join(" ")}
          >
            {project.name}
          </h3>

          <p
            className={[
              "text-base leading-relaxed max-w-xs",
              project.dark ? "text-white/55" : "text-muted-foreground",
            ].join(" ")}
          >
            {project.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <span
            className={[
              "inline-flex items-center gap-2 text-sm font-semibold border-b-2 pb-1",
              "transition-all duration-300 group-hover:gap-3",
              project.dark
                ? "border-white/20 text-white group-hover:border-white/50"
                : "border-foreground/20 text-foreground group-hover:border-foreground/50",
            ].join(" ")}
          >
            View project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function Work() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="overflow-hidden">
      {/* ── Section header ──────────────────────────────────────────── */}
      <div ref={headerRef} className="px-6 lg:px-24 pt-16 pb-4 overflow-hidden">
        <div className="mx-auto max-w-350">
          <motion.p
            className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Selected work
          </motion.p>
        </div>

        {/* Giant "WORK" — intentionally fills viewport, bleeds right */}
        <motion.h2
          className="font-black leading-[0.85] tracking-tighter text-foreground select-none whitespace-nowrap"
          style={{ fontSize: "clamp(4.5rem, 18vw, 18rem)" }}
          initial={{ opacity: 0, x: -30 }}
          animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          WORK
        </motion.h2>
      </div>

      {/* ── Full-bleed project cards ─────────────────────────────────── */}
      <div className="flex flex-col mt-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
