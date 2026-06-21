import { features } from "../../constants";
import FeatureCard from "../ui/FeatureCard";
import SectionHeader from "../ui/SectionHeader";

function Features() {
  return (
    <section id="features" className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Core features"
          title="A practical garage app for the records drivers actually need."
          text="CarCare is built for the everyday ownership loop: record, remember, review and export."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
