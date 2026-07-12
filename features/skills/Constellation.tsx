"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, SKILL_DOMAINS } from "@/constants/content";
import { Reveal, RevealTitle } from "@/components/motion/Reveal";
import type { SkillNode } from "@/types/content";

const RING_PCT = [15, 24, 33, 41.5, 49];
const RING_SPIN = [70, 95, 120, 150, 180];

type Positioned = SkillNode & { xPct: number; yPct: number; ring: number };

function usePositioned(): Positioned[] {
  return useMemo(() => {
    return SKILL_DOMAINS.flatMap((domain, dIdx) => {
      const nodes = SKILLS.filter((s) => s.domain === domain.id);
      return nodes.map((s, i) => {
        const angle =
          (i / nodes.length) * Math.PI * 2 + dIdx * 0.9; /* stagger rings */
        const r = RING_PCT[domain.ring - 1];
        return {
          ...s,
          ring: domain.ring,
          xPct: 50 + r * Math.cos(angle),
          yPct: 50 + r * Math.sin(angle),
        };
      });
    });
  }, []);
}

export function Constellation() {
  const nodes = usePositioned();
  const [activeId, setActiveId] = useState<string>("flutter");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];
  const activeDomain = SKILL_DOMAINS.find((d) => d.id === active.domain);

  return (
    <section
      id="skills"
      className="relative z-[2] bg-[var(--bg2)] px-6 py-28 md:px-14 md:py-36"
      aria-label="Technical skills"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow mb-5">Act IV · Expertise</div>
        <RevealTitle text="A Working" accent="Constellation" />
        <Reveal delay={0.2}>
          <p className="mt-6 mb-16 max-w-lg text-[15px] leading-relaxed text-[var(--mute)]">
            Every skill here is tied to something that shipped. Hover or focus
            a node to see exactly where it was used.
          </p>
        </Reveal>

        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
          {/* orbit system - desktop */}
          <Reveal className="hidden md:block">
            <div className="relative mx-auto aspect-square w-full max-w-[620px]">
              {/* rings */}
              {RING_PCT.map((r, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-[var(--line-mid)]"
                  style={{
                    left: `${50 - r}%`,
                    top: `${50 - r}%`,
                    width: `${r * 2}%`,
                    height: `${r * 2}%`,
                  }}
                  aria-hidden
                />
              ))}

              {/* core */}
              <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                <div
                  className="mx-auto mb-2 h-3 w-3 rotate-45 bg-[var(--accent)]"
                  style={{ boxShadow: "0 0 24px rgba(var(--accent-rgb),0.8)" }}
                />
                <div className="font-mono text-[9px] tracking-[0.3em] text-[var(--mute)] uppercase">
                  Shipped
                  <br />
                  Work
                </div>
              </div>

              {/* rotating ring groups */}
              {SKILL_DOMAINS.map((domain) => {
                const ringNodes = nodes.filter((n) => n.domain === domain.id);
                const dur = RING_SPIN[domain.ring - 1];
                const reverse = domain.ring % 2 === 0;
                return (
                  <div
                    key={domain.id}
                    className="absolute inset-0 motion-safe:animate-[spin_var(--dur)_linear_infinite] hover:[animation-play-state:paused]"
                    style={
                      {
                        "--dur": `${dur}s`,
                        animationDirection: reverse ? "reverse" : "normal",
                      } as React.CSSProperties
                    }
                  >
                    {ringNodes.map((n) => (
                      <button
                        key={n.id}
                        type="button"
                        onMouseEnter={() => setActiveId(n.id)}
                        onFocus={() => setActiveId(n.id)}
                        onClick={() => setActiveId(n.id)}
                        className="group absolute -translate-x-1/2 -translate-y-1/2 motion-safe:animate-[spin_var(--dur)_linear_infinite]"
                        style={
                          {
                            left: `${n.xPct}%`,
                            top: `${n.yPct}%`,
                            "--dur": `${dur}s`,
                            animationDirection: reverse ? "normal" : "reverse",
                          } as React.CSSProperties
                        }
                        aria-label={`${n.label} - show where it was used`}
                      >
                        <span
                          className={`mx-auto block h-2 w-2 rotate-45 transition-all duration-300 ${
                            activeId === n.id
                              ? "scale-150 bg-[var(--accent)] shadow-[0_0_16px_rgba(var(--accent-rgb),0.9)]"
                              : "bg-[var(--node-dim)] group-hover:bg-[var(--accent)]"
                          }`}
                        />
                        <span
                          className={`font-mono mt-1.5 block text-[10px] whitespace-nowrap transition-colors ${
                            activeId === n.id
                              ? "text-[var(--accent)]"
                              : "text-[var(--mute)] group-hover:text-[var(--ink)]"
                          }`}
                        >
                          {n.label}
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* mobile: domain clusters, same node language */}
          <Reveal className="md:hidden">
            <div className="space-y-7">
              {SKILL_DOMAINS.map((domain) => (
                <div key={domain.id}>
                  <div className="font-mono mb-3 text-[10px] tracking-[0.26em] text-[var(--accent)] uppercase">
                    {domain.label}
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-3">
                    {nodes
                      .filter((n) => n.domain === domain.id)
                      .map((n) => (
                        <button
                          key={n.id}
                          type="button"
                          onClick={() => setActiveId(n.id)}
                          className={`flex items-center gap-2 text-[13px] transition-colors ${
                            activeId === n.id
                              ? "text-[var(--accent)]"
                              : "text-[var(--text-body)]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rotate-45 ${
                              activeId === n.id
                                ? "bg-[var(--accent)]"
                                : "bg-[var(--node-dim)]"
                            }`}
                            aria-hidden
                          />
                          {n.label}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* detail panel */}
          <div aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="glass relative overflow-hidden p-8 md:p-9"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-[var(--hl)]" />
                <div className="font-mono mb-3 text-[10px] tracking-[0.26em] text-[var(--mute)] uppercase">
                  {activeDomain?.label}
                </div>
                <h3 className="font-display mb-6 text-3xl font-extrabold tracking-tight">
                  {active.label}
                </h3>
                <div className="font-mono mb-3 text-[10px] tracking-[0.26em] text-[var(--accent)] uppercase">
                  Proven in
                </div>
                <ul className="space-y-2.5">
                  {active.usedIn.map((u) => (
                    <li
                      key={u}
                      className="flex items-center gap-3 text-[14px] text-[var(--text-hi)]"
                    >
                      <span
                        className="h-1 w-1 rotate-45 bg-[var(--accent)]"
                        aria-hidden
                      />
                      {u}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
