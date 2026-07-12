"use client";

import { ArrowUpRight } from "lucide-react";
import { WEB_PROJECTS } from "@/constants/content";
import { Reveal, RevealTitle } from "@/components/motion/Reveal";
import type { WebProject } from "@/types/content";

function CasePanel({ p, index }: { p: WebProject; index: number }) {
  const inner = (
    <div className="glass glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-8 md:p-10">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "rgba(var(--accent-rgb),0.12)" }}
        aria-hidden
      />
      <div>
        <div className="mb-8 flex items-start justify-between">
          <span className="font-display text-outline text-6xl font-extrabold select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono border border-[var(--line)] px-2.5 py-1 text-[10px] tracking-[0.16em] text-[var(--mute)] uppercase">
            {p.sector}
          </span>
        </div>
        <h3 className="font-display mb-1 text-2xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)]">
          {p.name}
        </h3>
        <div className="font-mono mb-5 text-[11px] text-[var(--accent)]">
          {p.urlLabel}
        </div>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--text-body)]">
          {p.built}
        </p>
        <p className="text-[12px] text-[var(--mute)]">{p.role}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono border border-[var(--line)] px-2 py-0.5 text-[10px] text-[var(--mute)]"
            >
              {s}
            </span>
          ))}
        </div>
        {p.url && (
          <ArrowUpRight
            size={20}
            className="flex-none text-[var(--mute)] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
            aria-hidden
          />
        )}
      </div>
    </div>
  );

  return p.url ? (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      aria-label={`${p.name} - open live site`}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export function WebWork() {
  return (
    <section
      id="work"
      className="relative z-[2] px-6 py-28 md:px-14 md:py-36"
      aria-label="Client web projects"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow mb-5">Act III · Client Work</div>
        <RevealTitle text="Web Projects," accent="In Production" />
        <Reveal delay={0.2}>
          <p className="mt-6 mb-20 max-w-lg text-[15px] leading-relaxed text-[var(--mute)]">
            Client sites designed, built and shipped - each one live and
            linked. What you see here is exactly what was delivered.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {WEB_PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * (i % 2)} className="h-full">
              <CasePanel p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
