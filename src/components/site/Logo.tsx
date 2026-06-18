import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const fg = inverted ? "text-white" : "text-foreground";
  return (
    <Link
      to="/"
      className={`group inline-flex items-baseline gap-1 font-display text-xl font-semibold tracking-tight ${fg}`}
      aria-label="Forma Mkt — Inicio"
    >
      <span>Forma</span>
      <span className="text-primary">.</span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
        mkt
      </span>
    </Link>
  );
}
