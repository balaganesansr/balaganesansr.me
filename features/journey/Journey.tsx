"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, FlaskConical } from "lucide-react";
import { JOURNEY } from "@/constants/content";
import { Reveal, RevealTitle } from "@/components/motion/Reveal";
import type { JourneyChapter } from "@/types/content";

const kindIcon = {
  role: Briefcase,
  internship: FlaskConical,
  education: GraduationCap,
};

function Chapter({ c, index }: { c: JourneyChapter; index: number }) {
  const Icon = kindIcon[c.kind];
  const left = index % 2 === 0;

  return (
    <div
      className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
        left ? "" : "md:[direction:rtl]"
      }`}
    >
      {/* node on the spine */}
      <div
        className="absolute top-2 left-[-37px] hidden h-3.5 w-3.5 -translate-x-1/2 rotate-45 border border-[var(--accent)] bg-[var(--bg)] md:left-1/2 md:block"
        aria-hidden
      />

      <Reveal className="md:[direction:ltr]" delay={0.05}>
        <div
          className={`glass glass-hover relative overflow-hidden p-8 md:p-9 ${
            c.kind === "education"
              ? "border-[rgba(var(--hl-rgb),0.28)]"
              : ""
          }`}
        >
          <div className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-[var(--hl)] transition-transform duration-500 [div:hover>&]:scale-x-100" />
          <div className="font-mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.18em] text-[var(--accent)]">
            <Icon size={13} aria-hidden />
            {c.period}
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">
            {c.title}
          </h3>
          <div className="mt-1 mb-5 text-[13px] text-[var(--mute)]">
            {c.org} · {c.location}
          </div>
          <p className="mb-5 text-[14px] leading-relaxed text-[var(--text-body)]">
            {c.summary}
          </p>
          <ul className="mb-6 space-y-2.5">
            {c.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-[13px] leading-relaxed text-[var(--text-hi)]"
              >
                <span
                  className="mt-[7px] h-1 w-1 flex-none rotate-45 bg-[var(--accent)]"
                  aria-hidden
                />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span
                key={t}
                className="font-mono border border-[rgba(var(--accent-rgb),0.18)] bg-[rgba(var(--accent-rgb),0.04)] px-2.5 py-1 text-[10px] text-[var(--accent)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* oversized year on the opposite column */}
      <div className="hidden items-start justify-center pt-4 md:flex md:[direction:ltr]">
        <Reveal delay={0.15}>
          <span className="font-display text-outline text-[110px] leading-none font-extrabold select-none">
            {c.year}
          </span>
        </Reveal>
      </div>
    </div>
  );
}

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const spine = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const glow = useTransform(spine, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      className="relative z-[2] px-6 py-28 md:px-14 md:py-36"
      aria-label="Engineering journey"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow mb-5">Act I · Career</div>
        <RevealTitle text="The Engineering" accent="Journey" className="mb-24" />

        <div ref={ref} className="relative">
          {/* spine */}
          <div
            className="absolute top-0 bottom-0 left-[-30px] hidden w-px bg-[var(--line-mid)] md:left-1/2 md:block"
            aria-hidden
          >
            <motion.div
              className="w-px origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent2)] to-[var(--hl)]"
              style={{ height: glow }}
            />
          </div>

          <div className="space-y-20 md:space-y-28">
            {JOURNEY.map((c, i) => (
              <Chapter key={c.id} c={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
