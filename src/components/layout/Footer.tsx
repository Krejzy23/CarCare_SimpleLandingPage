import { Mail, ShieldCheck } from "lucide-react";

import { appName, supportEmail } from "../../constants";
import { pageUrl } from "../../lib/routes";

function Footer() {
  return (
    <footer className="px-5 pb-8 pt-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-line pt-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a className="text-2xl font-black text-ink" href={pageUrl()}>
              {appName}
            </a>
            <p className="mt-3 max-w-md leading-7 text-muted">
              A focused mobile garage for vehicle maintenance, reminders, fuel
              entries, mileage history and ownership costs.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase text-ink">Pages</h2>
            <div className="mt-4 grid gap-2 text-sm font-bold text-muted">
              <a className="hover:text-ink" href={pageUrl("#features")}>
                Features
              </a>
              <a className="hover:text-ink" href={pageUrl("privacy-policy/")}>
                Privacy Policy
              </a>
              <a className="hover:text-ink" href={pageUrl("delete-account/")}>
                Delete Account
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase text-ink">Support</h2>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <a
                className="inline-flex items-center gap-2 font-bold text-ink hover:text-signal"
                href={`mailto:${supportEmail}`}
              >
                <Mail size={16} />
                {supportEmail}
              </a>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} />
                Privacy-first vehicle records
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
          <p>Created by Ales Krejzl.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
