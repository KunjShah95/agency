import Reveal from "./fx/Reveal";
import { Section, Heading, Serif } from "./fx/Section";

const rows = [
  ["Starting price", "₹4,00,000 and up", "₹15,000 for a sprint"],
  ["Who you talk to", "Sales rep, then a PM", "The person building it"],
  ["Web, design, AI, video", "Four departments", "One pair of hands"],
  ["Time to go live", "Two to three months", "7 days for a website"],
  ["Who it's built for", "Enterprise accounts", "Founders and local businesses"],
];

export default function Compare() {
  return (
    <Section id="why">
      <Heading
        eyebrow="Why one person"
        title={<>Ahmedabad has plenty of 200 person agencies. <Serif>You don&apos;t need one.</Serif></>}
      />

      <Reveal className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900">
          {/* highlighted column glow */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[37%] border-l border-ember/30 bg-gradient-to-b from-ember/10 via-ember/[0.03] to-transparent sm:block" />
          <table className="relative w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 font-mono text-[11px] uppercase tracking-[0.14em]">
                <th scope="col" className="w-[26%] p-4 font-normal text-neutral-500 sm:p-6"><span className="sr-only">Compare</span></th>
                <th scope="col" className="p-4 font-normal text-neutral-500 sm:p-6">Typical agency</th>
                <th scope="col" className="p-4 font-normal text-ember sm:p-6">Srijan</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, them, me]) => (
                <tr key={k} className="border-b border-white/5 last:border-0">
                  <th scope="row" className="p-4 align-top font-normal text-neutral-500 sm:p-6">{k}</th>
                  <td className="p-4 align-top text-neutral-500 line-through decoration-white/20 sm:p-6">{them}</td>
                  <td className="p-4 align-top font-medium text-white sm:p-6">{me}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
