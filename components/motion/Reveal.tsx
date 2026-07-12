"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, delay, ease },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word headline reveal for section titles. */
export function RevealTitle({
  text,
  accent,
  className,
}: {
  text: string;
  accent?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <h2
      className={`font-display text-[clamp(34px,5.4vw,64px)] font-extrabold leading-[1.02] tracking-[-0.03em] ${className ?? ""}`}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top">
          <motion.span
            className="inline-block"
            initial={{ y: reduced ? 0 : "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.7, delay: 0.06 * i, ease }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
      {accent && (
        <span className="block overflow-hidden pb-2 align-top">
          <motion.span
            className="text-sheen inline-block"
            initial={{ y: reduced ? 0 : "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.7, delay: 0.06 * words.length, ease }}
          >
            {accent}
          </motion.span>
        </span>
      )}
    </h2>
  );
}
