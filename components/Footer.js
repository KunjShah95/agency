export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/14 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-page flex-col items-center gap-6 text-center">
        <div className="display text-3xl font-semibold">
          Srijan<span className="text-vermillion">.</span>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-ink-500">
          A solo design and tech studio in Ahmedabad. Web, design, AI, and
          video, built by one person.
        </p>
        <a
          href="mailto:kkshah2005@gmail.com"
          className="link-underline pb-0.5 font-mono text-sm text-ink-600"
        >
          kkshah2005@gmail.com
        </a>
        <span className="mt-2 font-mono text-xs text-ink-400">
          © {year} Srijan Studio. Ahmedabad, working global.
        </span>
      </div>
    </footer>
  );
}
