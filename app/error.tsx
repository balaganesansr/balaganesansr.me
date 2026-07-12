"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 text-center">
      <div className="font-mono mb-4 text-[11px] tracking-[0.3em] text-[var(--accent)] uppercase">
        Runtime error
      </div>
      <h1 className="font-display mb-6 text-4xl font-extrabold text-[var(--ink)]">
        Something broke - that&apos;s on me.
      </h1>
      <button
        onClick={reset}
        className="border border-[rgba(var(--accent-rgb),0.4)] px-7 py-3.5 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[rgba(var(--accent-rgb),0.06)]"
      >
        Try again
      </button>
    </div>
  );
}
