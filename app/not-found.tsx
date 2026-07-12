import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 text-center">
      <div className="font-display text-outline mb-2 text-[120px] leading-none font-extrabold select-none">
        404
      </div>
      <h1 className="font-display mb-3 text-3xl font-extrabold text-[var(--ink)]">
        This route was never shipped.
      </h1>
      <p className="mb-8 text-sm text-[var(--mute)]">
        The page you&apos;re after doesn&apos;t exist - but the work does.
      </p>
      <Link
        href="/"
        className="border border-[rgba(var(--accent-rgb),0.4)] px-7 py-3.5 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[rgba(var(--accent-rgb),0.06)]"
      >
        Back to the portfolio
      </Link>
    </div>
  );
}
