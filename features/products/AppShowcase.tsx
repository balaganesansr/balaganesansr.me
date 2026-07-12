"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { APPS } from "@/constants/content";
import { Reveal, RevealTitle } from "@/components/motion/Reveal";
import { PhoneFrame } from "./PhoneFrame";
import type { PlayApp } from "@/types/content";

function AppSection({ app, index }: { app: PlayApp; index: number }) {
  const left = index % 2 === 0;
  return (
    <article
      className="grid items-center gap-12 md:grid-cols-2 md:gap-20"
      aria-label={app.name}
    >
      <Reveal className={left ? "" : "md:order-2"} delay={0.1}>
        <PhoneFrame app={app} />
      </Reveal>

      <div className={left ? "" : "md:order-1"}>
        <Reveal>
          <div className="font-mono mb-4 flex items-center gap-4 text-[11px] tracking-[0.2em] text-[var(--mute)]">
            <span style={{ color: app.hue }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            / {String(APPS.length).padStart(2, "0")}
            <span className="inline-flex items-center gap-2 border border-[rgba(var(--live-rgb),0.3)] bg-[rgba(var(--live-rgb),0.06)] px-2.5 py-1 text-[10px] text-[var(--live)]">
              <span className="ping-dot green !h-[5px] !w-[5px]" aria-hidden />
              LIVE ON PLAY STORE
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="font-display mb-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            {app.name}
          </h3>
          <p className="mb-5 text-[15px]" style={{ color: app.hue }}>
            {app.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mb-7 max-w-md text-[15px] leading-relaxed text-[var(--text-body)]">
            {app.description}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <ul className="mb-7 space-y-2.5">
            {app.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-[14px] text-[var(--text-hi)]"
              >
                <Check size={14} style={{ color: app.hue }} aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mb-8 flex flex-wrap gap-2">
            {app.stack.map((s) => (
              <span
                key={s}
                className="font-mono border border-[var(--line)] px-2.5 py-1 text-[10px] text-[var(--mute)]"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5"
            style={{ borderColor: `${app.hue}55`, color: app.hue }}
          >
            View on Google Play
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export function AppShowcase() {
  return (
    <section
      id="apps"
      className="relative z-[2] bg-[var(--bg2)] px-6 py-28 md:px-14 md:py-36"
      aria-label="Published mobile apps"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow mb-5">Act II · Products</div>
        <RevealTitle text="Seven Apps, Live on" accent="Google Play" />
        <Reveal delay={0.2}>
          <p className="mt-6 mb-24 max-w-lg text-[15px] leading-relaxed text-[var(--mute)]">
            Seven releases - four distinct products plus a white-label course
            platform running for three separate clients - every one designed,
            built, published and maintained end-to-end: architecture, state
            management, release pipeline, post-launch support. Visuals below
            are stylised motifs, not screenshots; the real thing is one tap
            away on each store listing.
          </p>
        </Reveal>

        <div className="space-y-32 md:space-y-44">
          {APPS.map((app, i) => (
            <AppSection key={app.id} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
