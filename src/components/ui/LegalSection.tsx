import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

function LegalSection({ id, eyebrow, title, intro, children }: LegalSectionProps) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-28 px-5 py-16 md:px-8 lg:py-20">
      <p className="text-sm font-black uppercase text-signal">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <div className="mt-7 rounded-lg border border-line bg-surface p-5 shadow-soft">
        <p className="text-lg leading-8 text-muted">{intro}</p>
      </div>
      <div className="legal-copy mt-9">{children}</div>
    </section>
  );
}

export default LegalSection;
