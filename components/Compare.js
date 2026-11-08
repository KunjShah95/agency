import Reveal from "./fx/Reveal";
import { Section, Heading, Serif } from "./fx/Section";

const rows = [
  ["Starting price", "₹4,00,000 and up", "₹15,000 for a sprint"],
  ["Who you talk to", "Sales rep, then a PM", "The person building it"],
  ["Web, design, AI, video", "Four departments", "One pair of hands"],
  ["Time to go live", "Two to three months", "7 days for a website"],
  ["Who it's built for", "Enterprise accounts", "Founders and local businesses"],
];

function Cross() {
  return (
    <svg viewBox="0 0 12 12" className="mt-[3px] h-3 w-3 shrink-0 text-neutral-600" aria-hidden="true">
      <path d="M3 3l6 6M9 3 3 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Check() {
  return (
    <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember/15" aria-hidden="true">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-ember">
        <path d="M2.5 6.5 5 9l4.5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/*
 * The Srijan column is a raised panel that sits inside the table's own
 * grid, so its edges always line up with the cells. Orange is used only
 * for the small ticks; everything else stays neutral.
 */
export default function Compare() {
  const last = rows.length - 1;
  return (
    <Section id="why">
      <Heading
        eyebrow="Why one person"
        title={<>Ahmedabad has plenty of 200 person agencies. <Serif>You don&apos;t need one.</Serif></>}
      />

      <Reveal className="mt-16">
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-night-900 p-2 sm:p-3">
          <table className="w-full min-w-[34rem] border-separate border-spacing-0 text-left text-sm">
            <caption className="sr-only">Srijan Studio compared with a typical agency</caption>
            <thead>
              <tr className="font-mono text-[11px] uppercase tracking-[0.14em]">
                <th scope="col" className="w-[28%] px-4 pb-4 pt-5 font-normal sm:px-5">
                  <span className="sr-only">Compare</span>
                </th>
                <th scope="col" className="w-[34%] px-4 pb-4 pt-5 font-normal text-neutral-500 sm:px-5">Typical agency</th>
                <th scope="col" className="rounded-t-2xl border-x border-t border-white/10 bg-night-800 px-4 pb-4 pt-5 font-normal text-white sm:px-5">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
                    Srijan
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, them, me], i) => (
                <tr key={k}>
                  <th scope="row" className={`px-4 py-4 align-top font-normal text-neutral-400 sm:px-5 sm:py-5 ${i < last ? "border-b border-white/5" : ""}`}>
                    {k}
                  </th>
                  <td className={`px-4 py-4 align-top text-neutral-500 sm:px-5 sm:py-5 ${i < last ? "border-b border-white/5" : ""}`}>
                    <span className="flex gap-2.5"><Cross />{them}</span>
                  </td>
                  <td
                    className={`border-x border-white/10 bg-night-800 px-4 py-4 align-top font-medium text-white sm:px-5 sm:py-5 ${
                      i < last ? "border-b border-b-white/5" : "rounded-b-2xl border-b"
                    }`}
                  >
                    <span className="flex gap-2.5"><Check />{me}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
