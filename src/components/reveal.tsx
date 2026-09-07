import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "scale" | "left" | "right" | "row" | "text";

const HIDDEN: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-8",
  scale: "opacity-0 scale-[0.96]",
  left: "opacity-0 md:-translate-x-10 translate-y-6 md:translate-y-0",
  right: "opacity-0 md:translate-x-10 translate-y-6 md:translate-y-0",
  row: "opacity-0 translate-y-3",
  text: "opacity-0 translate-y-4 blur-[2px]",
};

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  as?: ElementType;
  className?: string | undefined;
  style?: CSSProperties | undefined;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}

      className={cn(
        "motion-safe:transition-all motion-safe:duration-[900ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0" : HIDDEN[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string | undefined;
  title: string;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <Reveal variant="text" as="p" className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal variant="up" delay={80}>
        <h2 className="mt-4 font-display text-3xl leading-[1.1] text-gold-gradient sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
