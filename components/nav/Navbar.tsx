"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, IDENTITY } from "@/constants/content";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // lock scroll while the overlay menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-14 ${
          scrolled
            ? "bg-[rgba(var(--bg-rgb),0.82)] backdrop-blur-xl border-b border-[var(--line-soft)]"
            : "bg-transparent"
        }`}
      >
        <a
          href="#hero"
          className="font-display text-xl font-extrabold tracking-tight text-[var(--accent)]"
          aria-label="Back to top"
        >
          SRB<span className="text-[var(--hl)]">.</span>
        </a>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
                active === l.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--mute)] hover:text-[var(--ink)]"
              }`}
            >
              <span className="mr-1.5 text-[9px] text-[var(--node-dim)]">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[rgba(var(--accent-rgb),0.4)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col justify-center bg-[rgba(var(--bg-rgb),0.97)] px-8 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.45 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b border-[var(--line-soft)] py-5 text-3xl font-bold text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="font-mono mr-4 text-xs text-[var(--accent)]">
                      0{i + 1}
                    </span>
                    {l.label}
                  </a>
                </motion.div>
              ))}
            </nav>
            <motion.a
              href={`mailto:${IDENTITY.email}`}
              className="font-mono mt-10 text-sm text-[var(--accent)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {IDENTITY.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
