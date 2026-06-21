import type { ReactNode } from "react";

type BackgroundLayoutProps = {
  children: ReactNode;
};

function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <div aria-hidden="true" className="road-grid fixed inset-0" />
      <div aria-hidden="true" className="fixed inset-x-0 top-0 h-2 bg-signal" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BackgroundLayout;
