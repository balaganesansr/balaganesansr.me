"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { IDENTITY, STATS } from "@/constants/content";
import { Counter } from "@/components/motion/Counter";
import { Magnetic } from "@/components/motion/Magnetic";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative z-[2] flex min-h-[100svh] items-center overflow-hidden px-6 md:px-14"
      aria-label="Introduction"
    >
      {/* depth field */}
      {!reduced && (
        <div className="absolute inset-0 z-0 opacity-80" aria-hidden>
          <ParticleField />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-28 pb-20 md:pt-24">
        <motion.div
          className="font-mono mb-9 inline-flex items-center gap-3 border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-2 text-[11px] tracking-[0.18em] text-[var(--accent)] uppercase"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <span className="ping-dot green" aria-hidden />
          {IDENTITY.availability}
        </motion.div>

        <h1 className="font-display mb-7 font-extrabold leading-[0.96] tracking-[-0.035em]">
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="text-sheen block text-[clamp(46px,10vw,124px)]"
              initial={{ y: reduced ? 0 : "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
            >
              {IDENTITY.firstName}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-outline block text-[clamp(46px,10vw,124px)]"
              initial={{ y: reduced ? 0 : "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease }}
            >
              {IDENTITY.lastName}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mb-12 max-w-xl text-lg font-light text-[var(--text-body)] md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          <strong className="font-medium text-[var(--ink)]">
            {IDENTITY.role}
          </strong>{" "}
          - {IDENTITY.tagline}
          <span className="mt-4 block text-[15px] leading-relaxed text-[var(--mute)]">
            {IDENTITY.about}
          </span>
        </motion.p>

        <motion.p
          className="font-mono -mt-6 mb-10 text-[11px] tracking-[0.18em] text-[var(--mute)] uppercase"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease }}
        >
          {IDENTITY.locationLine}
        </motion.p>

        <motion.dl
          className="mb-12 flex flex-wrap gap-x-12 gap-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[42px] leading-none font-extrabold text-[var(--accent)]">
                <Counter end={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-2 text-[11px] tracking-[0.16em] text-[var(--mute)] uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
        >
          <Magnetic>
            <a
              href={`mailto:${IDENTITY.email}`}
              className="group flex items-center justify-center gap-2 bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Get In Touch
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={IDENTITY.resume}
              download="Balaganesan-SR-Resume.pdf"
              className="flex items-center justify-center gap-2 border border-[rgba(var(--accent-rgb),0.45)] px-8 py-4 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[rgba(var(--accent-rgb),0.07)]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={IDENTITY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[var(--line)] px-8 py-4 text-sm font-medium transition-colors hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-[var(--accent)]"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#journey"
        className="font-mono absolute bottom-9 left-6 hidden items-center gap-3 text-[11px] tracking-[0.2em] text-[var(--mute)] uppercase transition-colors hover:text-[var(--accent)] md:left-14 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        aria-label="Scroll to the journey section"
      >
        <span className="block h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent" />
        Scroll to explore
        <ArrowDown size={12} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
