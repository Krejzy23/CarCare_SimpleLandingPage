import type { Feature } from "../../constants";

type FeatureCardProps = {
  feature: Feature;
};

function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="group rounded-lg border border-line bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-signal/60">
      <div className="grid h-12 w-12 place-items-center rounded-lg border border-signal/20 bg-panel text-signal">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-black text-ink">{feature.title}</h3>
      <p className="mt-3 leading-7 text-muted">{feature.text}</p>
    </article>
  );
}

export default FeatureCard;
