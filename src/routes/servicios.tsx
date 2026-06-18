import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Forma Mkt" },
      { name: "description", content: "Estrategia, branding, presencia digital y consultoría continua. Diseñamos solo lo que tu negocio realmente necesita." },
      { property: "og:title", content: "Servicios — Forma Mkt" },
      { property: "og:description", content: "Cuatro líneas de trabajo para ordenar y mover tu negocio con foco." },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={<>Cuatro líneas. <span className="text-primary">Cero relleno.</span></>}
        lede="Cada servicio se contrata por separado o como parte de un plan integral. Siempre se diseña a la medida del momento del negocio, no del paquete."
      />

      <section className="forma-section">
        <div className="forma-container">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2">
            {SERVICIOS.map((s, i) => (
              <article key={s.title} className="bg-background p-8 md:p-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-primary">0{i + 1}</span>
                  <span className="forma-eyebrow">{s.tag}</span>
                </div>
                <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-8 space-y-3">
                  {s.entregables.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-sm">
                      <Check className="size-4 mt-0.5 flex-none text-primary" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Ideal para: <span className="text-foreground">{s.idealPara}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary forma-section">
        <div className="forma-container max-w-3xl">
          <p className="forma-eyebrow">¿No sabes por dónde partir?</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Empieza por el diagnóstico.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Es una conversación de 30 minutos donde mapeamos tu negocio y te decimos exactamente qué tiene sentido hacer
            primero. Sin costo y sin compromiso.
          </p>
          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Agendar diagnóstico <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

const SERVICIOS = [
  {
    tag: "Estrategia",
    title: "Estrategia comercial y de marca",
    desc: "El trabajo de base. Definimos foco, oferta, posicionamiento y mensajes clave. Es lo que ordena todo lo demás.",
    entregables: [
      "Diagnóstico 360° del negocio",
      "Definición de foco comercial y propuesta de valor",
      "Arquitectura de oferta (qué se vende y en qué orden)",
      "Documento maestro de marca y mensajes",
    ],
    idealPara: "Negocios que sienten que comunican mucho pero venden poco.",
  },
  {
    tag: "Branding",
    title: "Branding e identidad",
    desc: "Identidad visual y verbal que refleja lo que realmente eres y respalda tu venta. Nada decorativo: todo funcional.",
    entregables: [
      "Naming y verbal identity",
      "Sistema visual completo (logo, tipografías, color, grilla)",
      "Manual de marca aplicable",
      "Templates clave (presentación, propuestas, RRSS)",
    ],
    idealPara: "Marcas nuevas o que necesitan un reposicionamiento serio.",
  },
  {
    tag: "Digital",
    title: "Presencia digital",
    desc: "Sitios web, redes y campañas que apoyan la venta de verdad. Con métricas reales y sin contenido por inercia.",
    entregables: [
      "Sitio web optimizado para conversión y SEO",
      "Sistema de contenidos para RRSS (no calendarios infinitos)",
      "Campañas de pauta con medición real",
      "Set-up de analítica y dashboards",
    ],
    idealPara: "Negocios listos para ejecutar con base estratégica clara.",
  },
  {
    tag: "Consultoría",
    title: "Consultoría continua",
    desc: "Acompañamiento mensual para que las decisiones importantes no se tomen solos. Somos tu equipo estratégico externo.",
    entregables: [
      "Sesiones quincenales con dirección",
      "Revisión de métricas y oportunidades",
      "Hoja de ruta viva (priorizada)",
      "Acceso a equipo creativo cuando se necesita",
    ],
    idealPara: "Equipos in-house que necesitan mirada externa con criterio.",
  },
] as const;
