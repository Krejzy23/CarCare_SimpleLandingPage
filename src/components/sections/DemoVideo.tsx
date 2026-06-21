import SectionHeader from "../ui/SectionHeader";

const demoVideoSrc = "/app-demo.mp4";
const demoVideoPoster = "/hero-app-screenshot.png";

function DemoVideo() {
  return (
    <section id="demo" className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="App demo"
            title="A quick look at the everyday ownership flow."
            text="A short walkthrough shows how CarCare keeps vehicles, service tasks, fuel entries and records close at hand."
          />
        </div>

        <figure className="mx-auto w-full max-w-[360px] rounded-[30px] border border-line bg-rubber p-2 shadow-phone">
          <video
            className="aspect-[9/19] w-full rounded-[24px] bg-paper object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={demoVideoPoster}
            aria-label="CarCare app demo video"
          >
            <source src={demoVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
      </div>
    </section>
  );
}

export default DemoVideo;
