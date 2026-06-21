import { Mail } from "lucide-react";

import { supportEmail } from "../../constants";
import { pageUrl } from "../../lib/routes";

function LaunchStatus() {
  return (
    <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-line bg-surface p-6 text-ink shadow-panel md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div>
          <p className="text-sm font-black uppercase text-signal">Testing phase</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Built for Google Play review today, ready to promote the app tomorrow.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted">
            The landing page now gives testers a clearer product story while
            keeping support, privacy and deletion pages stable for app store
            requirements.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <a className="button-primary" href={`mailto:${supportEmail}`}>
            <Mail size={18} />
            Contact support
          </a>
          <a className="button-secondary" href={pageUrl("delete-account/")}>
            Account deletion
          </a>
        </div>
      </div>
    </section>
  );
}

export default LaunchStatus;
