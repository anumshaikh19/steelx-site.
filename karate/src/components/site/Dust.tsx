import { useMemo } from "react";

/** CSS-only dojo dust: cheap, no canvas, respects reduced motion via global rule. */
export function Dust({ count = 26, className = "" }: { count?: number; className?: string }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: 55 + ((i * 17) % 45),
        size: 1 + ((i * 7) % 3),
        dur: 14 + ((i * 13) % 20),
        delay: -((i * 3) % 22),
        op: 0.18 + ((i % 5) * 0.11),
      })),
    [count],
  );

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {motes.map((m) => (
        <span
          key={m.id}
          className="dust absolute rounded-full bg-gold"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            opacity: m.op,
            animationDuration: `${m.dur}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
