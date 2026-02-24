"use client";

import { useAnimation, motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
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
  direction?: "right" | "down";
  iconSize?: "sm" | "base" | "lg";
}

export function AnimatedCTA({
  href,
  children,
  variant = "default",
  size = "sm",
  className,
  target,
  rel,
  direction = "right",
  iconSize = "base",
}: AnimatedCTAProps) {
  const iconClass = iconSize === "sm" ? "size-3" : iconSize === "lg" ? "size-5" : "size-4";
  const iconBox = iconSize === "sm" ? "w-3 h-3" : iconSize === "lg" ? "w-5 h-5" : "w-4 h-4";
  const arrowControls = useAnimation();
  const textControls = useAnimation();

  const isDown = direction === "down";

  const onEnter = async () => {
    // Text nudges in the direction of travel
    textControls.start({
      ...(isDown ? { y: 3 } : { x: 3 }),
      transition: { duration: 0.18, ease: "easeOut" },
    });
    // Arrow exits in direction
    await arrowControls.start({
      ...(isDown ? { y: 14 } : { x: 14 }),
      opacity: 0,
      transition: { duration: 0.13, ease: "easeIn" },
    });
    // Instantly reset to opposite side, hidden
    arrowControls.set({ ...(isDown ? { y: -14 } : { x: -14 }), opacity: 0 });
    // Arrow enters from opposite side
    arrowControls.start({
      ...(isDown ? { y: 0 } : { x: 0 }),
      opacity: 1,
      transition: { duration: 0.16, ease: "easeOut" },
    });
  };

  const onLeave = () => {
    textControls.start({
      ...(isDown ? { y: 0 } : { x: 0 }),
      transition: { duration: 0.18, ease: "easeOut" },
    });
    arrowControls.stop();
    arrowControls.start({
      ...(isDown ? { y: 0 } : { x: 0 }),
      opacity: 1,
      transition: { duration: 0.12 },
    });
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(buttonVariants({ variant, size }), "rounded-lg", className)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.span animate={textControls} className="flex items-center gap-2">
        <span>{children}</span>
        {/* overflow-hidden clips arrow as it exits/enters */}
        <span className={cn("relative flex overflow-hidden shrink-0", iconBox)}>
          <motion.span
            animate={arrowControls}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDown ? <ArrowDown className={iconClass} /> : <ArrowRight className={iconClass} />}
          </motion.span>
        </span>
      </motion.span>
    </a>
  );
}
