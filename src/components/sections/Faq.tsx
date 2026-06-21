import { faqItems } from "../../constants";
import SectionHeader from "../ui/SectionHeader";

function Faq() {
  return (
    <section id="faq" className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Short answers for testers and app review."
          center
        />

        <div className="mt-10 grid gap-3">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-lg border border-line bg-surface p-5 shadow-soft">
              <summary className="cursor-pointer list-none text-lg font-black text-ink">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {item.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-signal/20 bg-panel text-signal">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
