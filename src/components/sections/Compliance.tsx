import { ArrowRight } from "lucide-react";

import { complianceLinks, legalHighlights } from "../../constants";
import { pageUrl } from "../../lib/routes";
import SectionHeader from "../ui/SectionHeader";

function Compliance() {
  return (
    <section id="compliance" className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Google Play essentials"
          title="Privacy and account deletion stay visible from the first visit."
          text="The site can still serve as the required policy destination, while feeling like the front door for the app."
          center
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {complianceLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                className="group rounded-lg border border-line bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-signal/60"
                href={pageUrl(item.path)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-signal/20 bg-panel text-signal">
                    <Icon size={24} />
                  </div>
                  <ArrowRight className="text-signal/80 transition group-hover:translate-x-1 group-hover:text-signal" size={21} />
                </div>
                <h3 className="mt-5 text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {legalHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-lg border border-line bg-paper p-5">
                <Icon className="text-signal" size={24} />
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 leading-7 text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Compliance;
