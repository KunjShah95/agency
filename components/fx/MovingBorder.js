import { cn } from "@/lib/cn";

/*
 * Moving border: a conic gradient spins behind the element and only a
 * 1px ring of it shows. Works for links, buttons and cards.
 */
export default function MovingBorder({
  as: Tag = "a",
  children,
  className = "",
  innerClassName = "",
  radius = "rounded-full",
  ...props
}) {
  return (
    <Tag className={cn("group relative inline-flex overflow-hidden p-px", radius, className)} {...props}>
      <span
        aria-hidden="true"
        className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#ff5b2e_85%,#ffd2c2_92%,transparent_100%)]"
      />
      <span
        className={cn(
          "relative inline-flex h-full w-full items-center justify-center gap-2 bg-night-900 text-sm font-medium text-white backdrop-blur-xl transition-colors group-hover:bg-night-800",
          radius,
          innerClassName
        )}
      >
        {children}
      </span>
    </Tag>
  );
}
