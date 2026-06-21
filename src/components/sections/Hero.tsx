import { ArrowRight, FileText, ShieldCheck } from "lucide-react";

import { heroPills } from "../../constants";
import { pageUrl } from "../../lib/routes";

const heroScreenshotSrc = "/hero-app-screenshot.png";

function Hero() {
  return (
    <section className="relative px-5 pb-10 pt-8 md:px-8 lg:px-12 lg:pb-8 lg:pt-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-black text-ink shadow-soft">
            <span className="h-2 w-2 rounded-full bg-signal" />
            Android app in Google Play testing
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            Car ownership, neatly logged before the next service light.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            CarCare helps drivers track maintenance, fuel usage, mileage,
            reminders and real ownership costs across a private mobile garage.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="button-primary" href={pageUrl("#features")}>
              Explore features
              <ArrowRight size={18} />
            </a>
            <a className="button-secondary" href={pageUrl("privacy-policy/")}>
              <FileText size={18} />
              Privacy Policy
            </a>
          </div>

          <div className="mt-5 hidden flex-wrap gap-3 sm:flex">
            {heroPills.map((pill) => (
              <span key={pill} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold text-muted">
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-5 hidden max-w-2xl gap-2 sm:grid sm:grid-cols-3">
            {[
              "No ad tracking",
              "Firebase sync",
              "Delete anytime",
            ].map((title) => (
              <div key={title} className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 shadow-soft">
                <ShieldCheck className="shrink-0 text-signal" size={18} />
                <span className="text-sm font-black text-ink">{title}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative hidden justify-center lg:flex">
          <img
            className="w-full max-w-[340px] rounded-[28px] border border-line bg-rubber shadow-phone"
            src={heroScreenshotSrc}
            alt="CarCare app screenshot"
          />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
