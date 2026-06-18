import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/casos")({
  head: () => ({
    meta: [
      { title: "Casos — Forma Mkt" },
      { name: "description", content: "Proyectos reales de estrategia, branding y presencia digital. Negocios que pasaron de improvisar a operar con foco." },
      { property: "og:title", content: "Casos — Forma Mkt" },
      { property: "og:description", content: "Resultados que importan: foco, claridad y crecimiento medible." },
    ],
  }),
  component: Casos,
});

function Casos() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title={<>Negocios que pasaron de <span className="text-primary">improvisar</span> a operar con foco.</>}
        lede="Estos son algunos de los procesos que hemos acompañado. La mayoría no busca premios: busca decisiones acertadas y números reales."
      />

      <section className="forma-section">
        <div className="forma-container space-y-px bg-border border border-border">
          {CASOS.map((c, i) => (
            <article key={c.cliente} className="grid gap-8 bg-background p-8 md:p-12 md:grid-cols-12 md:gap-12 items-center">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-primary">CASO 0{i + 1}</p>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold leading-tight">{c.cliente}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.rubro}</p>
              </div>
              <div className="md:col-span-5">
                <p className="forma-eyebrow !text-foreground/60">Lo que hicimos</p>
                <p className="mt-3 text-base leading-relaxed">{c.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li key={t} className="text-xs font-mono uppercase tracking-wider border border-border px-2 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 md:border-l md:border-border md:pl-8">
                <p className="forma-eyebrow !text-foreground/60">Resultado</p>
                <p className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary leading-none">
                  {c.metrica}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{c.metricaDesc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="forma-container mt-16 text-center">
          <p className="text-muted-foreground">
            ¿Quieres ver propuestas similares para tu rubro?
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Conversemos <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

const CASOS = [
  {
    cliente: "Estudio Jurídico Boutique",
    rubro: "Servicios profesionales · Santiago",
    desc: "Reposicionamiento completo. Pasamos de un perfil corporativo genérico a una marca con foco específico en una vertical, narrativa propia y un sitio web que califica leads.",
    tags: ["Estrategia", "Branding", "Sitio web"],
    metrica: "+180%",
    metricaDesc: "Leads calificados en 6 meses",
  },
  {
    cliente: "Marca DTC de bienestar",
    rubro: "E-commerce · LATAM",
    desc: "Ordenamos la oferta (de 14 productos a 4 líneas claras), reescribimos la narrativa y reestructuramos la pauta con foco en margen, no en volumen.",
    tags: ["Estrategia", "Contenidos", "Ads"],
    metrica: "−42%",
    metricaDesc: "Costo por adquisición",
  },
  {
    cliente: "Consultora B2B",
    rubro: "Tecnología · Chile + Perú",
    desc: "Diagnóstico completo, plan de orden y acompañamiento continuo durante 12 meses. Hoy operan con un mapa estratégico vivo y sesiones quincenales con dirección.",
    tags: ["Consultoría continua", "Estrategia"],
    metrica: "3x",
    metricaDesc: "Pipeline calificado año a año",
  },
] as const;
