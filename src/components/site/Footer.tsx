import { Link } from "@tanstack/react-router";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="forma-container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="forma-eyebrow text-primary">Forma Mkt</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              Antes de mover plata,<br />
              <span className="text-white/60">ordenemos el negocio.</span>
            </h2>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Agendar diagnóstico
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="forma-eyebrow !text-white/50">Navegar</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/metodologia" className="text-white/80 hover:text-white">Metodología</Link></li>
              <li><Link to="/servicios" className="text-white/80 hover:text-white">Servicios</Link></li>
              <li><Link to="/casos" className="text-white/80 hover:text-white">Casos</Link></li>
              <li><Link to="/nosotros" className="text-white/80 hover:text-white">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-white/80 hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="forma-eyebrow !text-white/50">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:hola@forma.cl" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Mail className="size-4" /> hola@forma.cl
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/forma.mkt"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Instagram className="size-4" /> @forma.mkt
                </a>
              </li>
              <li className="text-white/50">Santiago · Chile</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">© {year} Forma Mkt. Todos los derechos reservados.</p>
          <p className="text-xs text-white/40">Agencia consultora de marketing digital · Chile</p>
        </div>
      </div>
    </footer>
  );
}
