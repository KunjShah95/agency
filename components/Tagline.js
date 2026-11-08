import ScrollWords from "./fx/ScrollWords";

/* The mid-page tagline moment (design skill A6). */
export default function Tagline() {
  return (
    <section aria-label="Why Srijan" className="relative mx-auto max-w-page px-5 py-28 sm:px-8 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.07] blur-[100px]" />
      <ScrollWords
        as="h2"
        accent="same person"
        text="The person you talk to on day one is the same person who designs it, builds it and answers your WhatsApp on day seven."
        className="relative mx-auto max-w-4xl text-center text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
      />
    </section>
  );
}
