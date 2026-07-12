"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, Download, FileText } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { IDENTITY } from "@/constants/content";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

const PLACES = [
  "Singapore.",
  "Remote.",
  "USA / Canada.",
  "Europe.",
  "Australia.",
  "UAE / Dubai.",
  "Worldwide.",
  "Anywhere That Builds.",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[words.length - 2] ?? words[0]);
      return;
    }
    let wi = 0;
    let ci = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wi];
      ci = deleting ? ci - 1 : ci + 1;
      setText(word.slice(0, ci));
      let delay = deleting ? 42 : 82;
      if (!deleting && ci === word.length) {
        deleting = true;
        delay = 2100;
      } else if (deleting && ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        delay = 300;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

const LINKS = [
  { href: `mailto:${IDENTITY.email}`, label: "Email", icon: Mail, external: false },
  { href: IDENTITY.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
  { href: IDENTITY.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: IDENTITY.phoneHref, label: "+91-9025-78-8989", icon: Phone, external: false },
];

export function Contact() {
  const typed = useTypewriter(PLACES);

  return (
    <section
      id="contact"
      className="relative z-[2] overflow-hidden px-6 py-32 text-center md:px-14 md:py-44"
      aria-label="Contact"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(var(--accent-rgb),0.08), rgba(var(--hl-rgb),0.05) 55%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <div className="eyebrow mb-8 justify-center">
            Act V · Let&apos;s Build Together
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mb-4 text-[clamp(38px,7vw,84px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            Open to Roles
            <span className="block min-h-[1.1em] text-sheen">
              {typed}
              <span className="motion-safe:animate-pulse text-[var(--accent)]">
                |
              </span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${IDENTITY.email}`}
            className="font-display mt-6 mb-14 inline-block text-[clamp(17px,3.4vw,40px)] font-bold tracking-tight text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
          >
            {IDENTITY.email}
          </a>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Magnetic strength={10}>
              <a
                href={IDENTITY.resume}
                download="Balaganesan-SR-Resume.pdf"
                className="group flex items-center justify-center gap-2.5 bg-[var(--accent)] px-7 py-4 text-sm font-semibold text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                <Download size={16} aria-hidden />
                Download Resume
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href={IDENTITY.biodataRequest}
                className="flex items-center justify-center gap-2.5 border border-[rgba(var(--accent-rgb),0.45)] px-7 py-4 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[rgba(var(--accent-rgb),0.07)]"
              >
                <FileText size={16} aria-hidden />
                Request Detailed Biodata
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {LINKS.map((l) => (
              <Magnetic key={l.label} strength={10}>
                <a
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center justify-center gap-2.5 border border-[var(--line)] px-6 py-3.5 text-[13px] text-[var(--text-body)] transition-all hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-[var(--accent)]"
                >
                  <l.icon size={15} aria-hidden />
                  {l.label}
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-[2] flex flex-col items-center justify-between gap-3 border-t border-[var(--line-soft)] px-6 py-8 md:flex-row md:px-14">
      <span className="font-mono text-[11px] text-[var(--mute)]">
        © 2026 {IDENTITY.name}
      </span>
      <span className="font-mono text-[11px] text-[var(--mute)]">
        {IDENTITY.role} · India → Worldwide
      </span>
      <span className="font-mono text-[11px] text-[var(--mute)]">
        Designed & built end-to-end
      </span>
    </footer>
  );
}
