export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
      <div className="text-center">
        <div
          className="font-display text-2xl font-extrabold text-[var(--accent)] motion-safe:animate-pulse"
          aria-label="Loading"
        >
          SRB<span className="text-[var(--hl)]">.</span>
        </div>
      </div>
    </div>
  );
}
