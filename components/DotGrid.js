export default function DotGrid({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_72%)]" />
    </div>
  );
}
