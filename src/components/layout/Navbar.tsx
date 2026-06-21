import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import appIcon from "../../../src/assets/icon.png";
import { appName, navItems, supportEmail } from "../../constants";
import { pageUrl, type Page } from "../../lib/routes";

type NavbarProps = {
  currentPage: Page;
};

function Navbar({ currentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition sm:px-5 ${
          scrolled
            ? "border-line bg-surface/95 shadow-panel backdrop-blur-xl"
            : "border-line/70 bg-surface/80 backdrop-blur-md"
        } rounded-lg`}
      >
        <a className="flex items-center gap-3" href={pageUrl()}>
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-lg border border-line bg-rubber">
            <img
              src={appIcon}
              alt={`${appName} app icon`}
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block text-sm font-bold uppercase text-muted">
              Vehicle care
            </span>
            <span className="block text-xl font-black text-ink">{appName}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="rounded-md px-4 py-2 text-sm font-bold text-muted transition hover:bg-panel hover:text-ink"
              href={pageUrl(`#${item.id}`)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="nav-link" href={pageUrl("privacy-policy/")}>
            Privacy
          </a>
          <a className="button-primary min-h-11 px-4 py-2 text-sm" href={`mailto:${supportEmail}`}>
            Support
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-line bg-surface p-3 shadow-panel lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                className="rounded-md px-4 py-3 text-sm font-bold text-muted hover:bg-panel hover:text-ink"
                href={pageUrl(`#${item.id}`)}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="rounded-md px-4 py-3 text-sm font-bold text-muted hover:bg-panel hover:text-ink"
              href={pageUrl("privacy-policy/")}
            >
              Privacy Policy
            </a>
            <a
              className="rounded-md px-4 py-3 text-sm font-bold text-muted hover:bg-panel hover:text-ink"
              href={pageUrl("delete-account/")}
            >
              Delete Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
