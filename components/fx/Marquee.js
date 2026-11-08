import { cn } from "@/lib/cn";

/* Infinite strip: the list is rendered twice and slid by -50%. */
export default function Marquee({ children, duration = "40s", reverse = false, className = "" }) {
  return (
    <div className={cn("fade-x group flex overflow-hidden", className)}>
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          style={{ "--duration": duration, animationDirection: reverse ? "reverse" : "normal" }}
          className="flex shrink-0 animate-marquee items-center gap-[var(--gap,3rem)] pr-[var(--gap,3rem)] group-hover:[animation-play-state:paused]"
        >
          {children}
        </div>
      ))}
    </div>
  );
}
