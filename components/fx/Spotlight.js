/*
 * Aceternity-style spotlight: a soft cone of light that sweeps in once on
 * load. Pure SVG + CSS, no JS.
 */
export default function Spotlight({ className = "", fill = "white" }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 h-[169%] w-[138%] animate-spotlight opacity-0 lg:w-[84%] ${className}`}
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spot-blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter id="spot-blur" x="0.86" y="0.84" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="bg" />
          <feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape" />
          <feGaussianBlur stdDeviation="151" result="blur" />
        </filter>
      </defs>
    </svg>
  );
}
