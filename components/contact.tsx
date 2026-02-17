"use client";

import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ArrowRight, Calendar } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const budgetOptions = [
  { value: "0-5000", label: "$0 – $5,000" },
  { value: "5000-15000", label: "$5,000 – $15,000" },
  { value: "15000-30000", label: "$15,000 – $30,000" },
  { value: "30000+", label: "$30,000+" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const arrowControls = useAnimation();
  const textControls = useAnimation();

  const onArrowEnter = async () => {
    if (status === "loading") return;
    textControls.start({ x: 3, transition: { duration: 0.18, ease: "easeOut" } });
    await arrowControls.start({ x: 14, opacity: 0, transition: { duration: 0.13, ease: "easeIn" } });
    arrowControls.set({ x: -14, opacity: 0 });
    arrowControls.start({ x: 0, opacity: 1, transition: { duration: 0.16, ease: "easeOut" } });
  };

  const onArrowLeave = () => {
    textControls.start({ x: 0, transition: { duration: 0.18, ease: "easeOut" } });
    arrowControls.stop();
    arrowControls.start({ x: 0, opacity: 1, transition: { duration: 0.12 } });
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Wire up to your preferred email API (e.g. Resend, SendGrid)
    // Example with Resend:
    //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to build
            <br />
            something great?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
        </FadeIn>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="bg-card border border-border rounded-2xl p-10 flex flex-col items-center text-center gap-4"
            >
              <CheckCircle className="size-10 text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Message received!
                </h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll be in touch within one business day. Talk soon.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="rounded-xl bg-background border-border"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-xl bg-background border-border"
                  />
                </div>
              </div>

              {/* Company + Budget */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company or project name"
                    value={form.company}
                    onChange={handleChange}
                    className="rounded-xl bg-background border-border"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="budget" className="text-sm font-medium">
                    Budget range <span className="text-primary">*</span>
                  </Label>
                  <Select
                    required
                    value={form.budget}
                    onValueChange={(val) =>
                      setForm((prev) => ({ ...prev, budget: val }))
                    }
                  >
                    <SelectTrigger
                      id="budget"
                      className="rounded-xl bg-background border-border"
                    >
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {budgetOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Tell us about your project{" "}
                  <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are you building? What's the challenge or goal? The more context, the better."
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-xl bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="rounded-full font-medium w-full sm:w-auto"
                onMouseEnter={onArrowEnter}
                onMouseLeave={onArrowLeave}
              >
                <motion.span animate={textControls} className="flex items-center gap-2">
                  <span>{status === "loading" ? "Sending…" : "Send inquiry"}</span>
                  {status !== "loading" && (
                    <span className="relative flex w-4 h-4 overflow-hidden flex-shrink-0">
                      <motion.span
                        animate={arrowControls}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <ArrowRight className="size-4" />
                      </motion.span>
                    </span>
                  )}
                </motion.span>
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Cal.com alternative */}
        <FadeIn delay={0.15} className="mt-8">
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-dashed border-border bg-card/40">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="size-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium mb-0.5">
                Prefer to chat first?
              </p>
              <p className="text-xs text-muted-foreground">
                Book a free 30-min discovery call — no commitment, just a
                conversation.
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="rounded-full flex-shrink-0 text-xs font-medium"
            >
              {/* Replace YOUR_CAL_LINK with your actual cal.com URL */}
              <a
                href="https://cal.com/YOUR_CAL_LINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
