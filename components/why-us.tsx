"use client";

import { FadeIn } from "@/components/fade-in";
import { Coffee, Zap, Key } from "lucide-react";

const bullets = [
  {
    icon: Coffee,
    heading: "No endless check-ins.",
    body: "We work independently and surface what matters. You stay focused on running your business.",
  },
  {
    icon: Zap,
    heading: "Live in weeks, not years.",
    body: "A working product before your competitors catch up.",
  },
  {
    icon: Key,
    heading: "Stop renting your website.",
    body: "Custom code, built for you, owned by you. No subscriptions, no lock-in.",
  },
];

function BrowserMockup() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/10">
      {/* Browser chrome */}
      <div className="bg-muted/60 border-b border-border px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="size-3 rounded-full bg-red-400/60" />
          <div className="size-3 rounded-full bg-yellow-400/60" />
          <div className="size-3 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1">
          <div className="bg-background/70 rounded-md h-6 w-full max-w-[280px] mx-auto flex items-center px-3">
            <span className="text-[10px] text-muted-foreground/50 truncate">
              https://yourcustomsite.com
            </span>
          </div>
        </div>
      </div>

      {/* Fake site content */}
      <div className="bg-background h-80 lg:h-[420px] relative overflow-hidden">
        {/* Nav */}
        <div className="border-b border-border/40 px-5 py-3.5 flex items-center justify-between">
          <div className="h-3 w-20 rounded-full bg-foreground/20" />
          <div className="flex items-center gap-4">
            <div className="h-2 w-10 rounded-full bg-muted-foreground/20" />
            <div className="h-2 w-10 rounded-full bg-muted-foreground/20" />
            <div className="h-2 w-10 rounded-full bg-muted-foreground/20" />
            <div className="h-7 w-20 rounded-lg bg-primary/70" />
          </div>
        </div>

        {/* Hero */}
        <div className="px-5 pt-7 pb-5">
          <div className="h-2 w-16 rounded-full bg-primary/30 mb-4" />
          <div className="h-5 w-4/5 rounded-full bg-foreground/20 mb-2.5" />
          <div className="h-5 w-3/5 rounded-full bg-foreground/15 mb-5" />
          <div className="h-3 w-2/3 rounded-full bg-muted-foreground/15 mb-1.5" />
          <div className="h-3 w-1/2 rounded-full bg-muted-foreground/10 mb-6" />
          <div className="flex gap-3">
            <div className="h-9 w-28 rounded-xl bg-primary/60" />
            <div className="h-9 w-28 rounded-xl bg-muted/80 border border-border" />
          </div>
        </div>

        {/* Card row */}
        <div className="px-5 grid grid-cols-3 gap-3">
          {[40, 52, 44].map((h, i) => (
            <div
              key={i}
              className="rounded-xl bg-muted/30 border border-border/40"
              style={{ height: h }}
            />
          ))}
        </div>

        {/* Fade out at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-secondary/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <FadeIn className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Why work with us
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                The business world is evolving.
                <br />
                <span className="text-primary">We help you keep up.</span>
              </h2>
            </div>

            <ul className="flex flex-col gap-5">
              {bullets.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.heading} className="flex gap-4 items-start">
                    <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-snug">
                        {b.heading}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          {/* Right: browser mockup */}
          <FadeIn delay={0.15}>
            <BrowserMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
