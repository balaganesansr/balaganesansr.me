"use client";

import type { PlayApp } from "@/types/content";

/* Stylized, obviously-abstract UI motifs - deliberately not screenshots.   */
/* Each motif is composed of blocks/shapes tinted with the app's hue.      */

function Rows({ hue, count = 4 }: { hue: string; count?: number }) {
  return (
    <div className="space-y-2.5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-lg p-2"
          style={{ background: "rgba(255,255,255,0.045)" }}
        >
          <div
            className="h-8 w-8 flex-none rounded-md"
            style={{ background: `${hue}26`, border: `1px solid ${hue}40` }}
          />
          <div className="flex-1 space-y-1.5">
            <div
              className="h-1.5 rounded-full"
              style={{ width: `${72 - i * 9}%`, background: "rgba(255,255,255,0.16)" }}
            />
            <div
              className="h-1.5 rounded-full"
              style={{ width: `${38 - i * 4}%`, background: `${hue}55` }}
            />
          </div>
          <div
            className="h-4 w-9 flex-none rounded-full"
            style={{ background: `${hue}33` }}
          />
        </div>
      ))}
    </div>
  );
}

function Motif({ app }: { app: PlayApp }) {
  const { motif, hue, hue2 } = app;

  if (motif === "compass") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-6 p-5">
        <div
          className="relative flex h-44 w-44 items-center justify-center rounded-full"
          style={{ border: `1px solid ${hue}50` }}
        >
          <div
            className="absolute inset-3 rounded-full"
            style={{ border: `1px dashed ${hue}30` }}
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-px"
              style={{
                background: i % 3 === 0 ? hue : "rgba(255,255,255,0.25)",
                transform: `rotate(${i * 30}deg) translateY(-84px)`,
              }}
            />
          ))}
          <div
            className="absolute h-24 w-1 origin-bottom rounded-full motion-safe:animate-[spin_9s_linear_infinite]"
            style={{
              background: `linear-gradient(to top, transparent, ${hue})`,
              bottom: "50%",
              transformOrigin: "bottom center",
            }}
          />
          <div
            className="h-3 w-3 rounded-full"
            style={{ background: hue, boxShadow: `0 0 14px ${hue}` }}
          />
        </div>
        <div className="w-full space-y-2 px-2">
          <div className="h-1.5 w-3/4 rounded-full" style={{ background: `${hue}45` }} />
          <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
        </div>
      </div>
    );
  }

  if (motif === "numerology") {
    const digits = [3, 1, 8, 5, 9, 2, 7, 4, 6];
    return (
      <div className="flex h-full flex-col justify-center gap-5 p-5">
        <div className="grid grid-cols-3 gap-2.5">
          {digits.map((d, i) => (
            <div
              key={i}
              className="font-mono flex aspect-square items-center justify-center rounded-lg text-lg"
              style={{
                background: i === 4 ? `${hue}22` : "rgba(255,255,255,0.045)",
                border: `1px solid ${i === 4 ? hue : "rgba(255,255,255,0.08)"}`,
                color: i === 4 ? hue : "rgba(255,255,255,0.5)",
                boxShadow: i === 4 ? `0 0 18px ${hue}44` : undefined,
              }}
            >
              {d}
            </div>
          ))}
        </div>
        <div
          className="space-y-2 rounded-lg p-3"
          style={{ background: `${hue2}14`, border: `1px solid ${hue2}30` }}
        >
          <div className="h-1.5 w-2/3 rounded-full" style={{ background: `${hue2}66` }} />
          <div className="h-1.5 w-5/6 rounded-full bg-white/15" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (motif === "astrology") {
    return (
      <div className="relative flex h-full flex-col justify-end overflow-hidden p-5">
        {[70, 110, 150].map((r) => (
          <div
            key={r}
            className="absolute left-1/2 rounded-full"
            style={{
              width: r * 2,
              height: r * 2,
              top: 30 - r,
              marginLeft: -r,
              border: `1px solid ${hue}22`,
            }}
          />
        ))}
        <div
          className="absolute top-10 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${hue}, ${hue2})`,
            boxShadow: `0 0 30px ${hue}66`,
          }}
        />
        {[
          { t: 26, l: 24 },
          { t: 54, l: 78 },
          { t: 84, l: 30 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/70"
            style={{ top: `${s.t}%`, left: `${s.l}%` }}
          />
        ))}
        <Rows hue={hue} count={3} />
      </div>
    );
  }

  if (motif === "course") {
    return (
      <div className="flex h-full flex-col justify-center gap-4 p-5">
        <div
          className="relative flex aspect-video items-center justify-center rounded-xl"
          style={{ background: `${hue}18`, border: `1px solid ${hue}35` }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: hue }}
          >
            <div
              className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent"
              style={{ borderLeftColor: "#0a0806" }}
            />
          </div>
          <div
            className="absolute right-3 bottom-3 left-3 h-1 overflow-hidden rounded-full bg-white/10"
          >
            <div className="h-full w-2/3 rounded-full" style={{ background: hue }} />
          </div>
        </div>
        <Rows hue={hue2} count={3} />
      </div>
    );
  }

  // grocery
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-5">
      <div
        className="flex items-center gap-2 rounded-full px-3 py-2"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        <div className="h-3 w-3 rounded-full" style={{ border: `1.5px solid ${hue}` }} />
        <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
      </div>
      <Rows hue={hue} />
      <div
        className="flex items-center justify-between rounded-lg p-3"
        style={{ background: `${hue}1c`, border: `1px solid ${hue}40` }}
      >
        <div className="space-y-1.5">
          <div className="h-1.5 w-20 rounded-full" style={{ background: `${hue}88` }} />
          <div className="h-1.5 w-12 rounded-full bg-white/15" />
        </div>
        <div
          className="h-2 w-2 rounded-full motion-safe:animate-pulse"
          style={{ background: hue, boxShadow: `0 0 10px ${hue}` }}
        />
      </div>
    </div>
  );
}

export function PhoneFrame({ app }: { app: PlayApp }) {
  return (
    <div
      className="relative mx-auto w-[248px] motion-safe:animate-[drift_5s_ease-in-out_infinite_alternate]"
      aria-hidden
    >
      {/* halo */}
      <div
        className="absolute -inset-10 rounded-full opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${app.hue}55, transparent 65%)`,
        }}
      />
      <div
        className="relative aspect-[9/19] overflow-hidden rounded-[38px] border border-[#2e2517] bg-[#0e0b07] p-2.5"
        style={{ boxShadow: `0 40px 90px rgba(0,0,0,0.6)` }}
      >
        <div className="absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="h-full overflow-hidden rounded-[28px] bg-[#141008] pt-10">
          <div className="px-4 pb-3">
            <div
              className="font-display text-sm font-bold"
              style={{ color: app.hue }}
            >
              {app.name}
            </div>
          </div>
          <Motif app={app} />
        </div>
      </div>
    </div>
  );
}
