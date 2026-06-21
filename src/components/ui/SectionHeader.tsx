type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
};

function SectionHeader({ eyebrow, title, text, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase text-signal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-muted">{text}</p>}
    </div>
  );
}

export default SectionHeader;
