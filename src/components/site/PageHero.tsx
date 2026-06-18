import type { ReactNode } from "react";

export function PageHero({
  eyebrow, title, lede, children,
}: { eyebrow: string; title: ReactNode; lede?: ReactNode; children?: ReactNode }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="forma-container pt-20 pb-16 md:pt-32 md:pb-24">
        <p className="forma-eyebrow">{eyebrow}</p>
        <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight max-w-4xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {lede}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
