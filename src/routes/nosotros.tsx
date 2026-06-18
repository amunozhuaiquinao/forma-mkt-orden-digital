import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Forma Mkt" },
      { name: "description", content: "Somos una agencia consultora chilena. Mitad estrategia, mitad ejecución. Sin grasa, sin teatro." },
      { property: "og:title", content: "Nosotros — Forma Mkt" },
      { property: "og:description", content: "Quiénes somos, en qué creemos y cómo trabajamos." },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title={<>Una consultora boutique con cabeza de <span className="text-primary">agencia</span> y disciplina de <span className="text-primary">estudio</span>.</>}
        lede="Somos un equipo pequeño, en Chile, que trabaja con empresas y profesionales que necesitan orden antes que volumen. Nuestra ventaja: entrar antes y decidir bien."
      />

      <section className="forma-section">
        <div className="forma-container grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7 space-y-8">
            <Paragraph
              eyebrow="Por qué existimos"
              text="Vimos demasiados negocios buenos perdiendo tiempo y plata en marketing mal enfocado: pauta sin oferta clara, redes sin estrategia, cambios de identidad cada año. Forma nace para entrar antes de todo eso."
            />
            <Paragraph
              eyebrow="Cómo trabajamos"
              text="Sin estructura inflada. Trabajamos con quienes deciden, no con intermediarios. Cada proyecto lo lleva un consultor senior de principio a fin."
            />
            <Paragraph
              eyebrow="En qué creemos"
              text="En que el marketing serio empieza por entender el negocio. En que menos es más cuando lo que hay está bien hecho. Y en que la honestidad estratégica vale más que un deck bonito."
            />
          </div>

          <aside className="md:col-span-5">
            <div className="border border-border p-8 md:p-10 bg-secondary">
              <p className="forma-eyebrow">Principios</p>
              <ul className="mt-6 space-y-5">
                {PRINCIPIOS.map((p, i) => (
                  <li key={p} className="flex gap-4">
                    <span className="font-mono text-sm text-primary mt-0.5">0{i + 1}</span>
                    <span className="font-display text-lg leading-tight">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="forma-container py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-8">
              <p className="forma-eyebrow !text-primary">Trabajemos juntos</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
                Si tu negocio necesita orden antes que volumen, estamos para eso.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
              >
                Conversemos <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Paragraph({ eyebrow, text }: { eyebrow: string; text: string }) {
  return (
    <div>
      <p className="forma-eyebrow">{eyebrow}</p>
      <p className="mt-4 text-lg md:text-xl leading-relaxed text-foreground/85">{text}</p>
    </div>
  );
}

const PRINCIPIOS = [
  "Entrar antes para ordenar y decidir bien qué mover.",
  "Honestidad estratégica por sobre un deck bonito.",
  "Hacer poco, hecho bien. Cortar lo que no aporta.",
  "Métricas reales, no vanity metrics.",
  "Trabajar con quien decide, no con intermediarios.",
] as const;
