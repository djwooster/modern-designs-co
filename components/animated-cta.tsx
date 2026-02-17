"use client";

import { useAnimation, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  target?: string;
  rel?: string;
}

export function AnimatedCTA({
  href,
  children,
  variant = "default",
  size = "lg",
  className,
  target,
  rel,
}: AnimatedCTAProps) {
  const arrowControls = useAnimation();
  const textControls = useAnimation();

  const onEnter = async () => {
    // Text nudges right as arrow leaves
    textControls.start({ x: 3, transition: { duration: 0.18, ease: "easeOut" } });
    // Arrow exits right
    await arrowControls.start({
      x: 14,
      opacity: 0,
      transition: { duration: 0.13, ease: "easeIn" },
    });
    // Instantly reset to left, hidden
    arrowControls.set({ x: -14, opacity: 0 });
    // Arrow enters from left
    arrowControls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.16, ease: "easeOut" },
    });
  };

  const onLeave = () => {
    textControls.start({ x: 0, transition: { duration: 0.18, ease: "easeOut" } });
    arrowControls.stop();
    arrowControls.start({ x: 0, opacity: 1, transition: { duration: 0.12 } });
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(buttonVariants({ variant, size }), "rounded-full", className)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.span animate={textControls} className="flex items-center gap-2">
        <span>{children}</span>
        {/* overflow-hidden clips arrow as it exits/enters */}
        <span className="relative flex w-4 h-4 overflow-hidden flex-shrink-0">
          <motion.span
            animate={arrowControls}
            className="absolute inset-0 flex items-center justify-center"
          >
            <ArrowRight className="size-4" />
          </motion.span>
        </span>
      </motion.span>
    </a>
  );
}
