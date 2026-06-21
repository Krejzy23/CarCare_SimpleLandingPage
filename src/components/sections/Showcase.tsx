import { showcaseItems } from "../../constants";
import SectionHeader from "../ui/SectionHeader";
import ShowcasePreview from "../ui/ShowcasePreview";

function Showcase() {
  return (
    <section id="dashboard" className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Product preview"
          title="Less spreadsheet energy. More useful vehicle memory."
          text="The landing page now works as a small product tour while keeping store-review links easy to find."
        />

        <div className="mt-14 space-y-16 lg:space-y-20">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={item.title}
                className={`grid items-center gap-8 lg:gap-14 ${
                  reverse ? "lg:grid-cols-[0.96fr_1.04fr]" : "lg:grid-cols-[1.04fr_0.96fr]"
                }`}
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-black text-ink">
                    <Icon size={17} className="text-signal" />
                    {item.eyebrow}
                  </div>
                  <h3 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-ink lg:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                    {item.description}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" />
                        <p className="leading-7 text-muted">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <ShowcasePreview item={item} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
