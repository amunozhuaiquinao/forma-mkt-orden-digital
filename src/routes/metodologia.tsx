import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodología — Forma Mkt" },
      { name: "description", content: "Diagnóstico, orden y ejecución: los tres pilares con los que ordenamos tu negocio antes de mover plata en marketing." },
      { property: "og:title", content: "Metodología — Forma Mkt" },
      { property: "og:description", content: "Cómo entramos antes para ordenar, decidir bien y ejecutar solo lo necesario." },
    ],
  }),
  component: Metodologia,
});

function Metodologia() {
  return (
    <>
      <PageHero
        eyebrow="Metodología"
        title={<>Entramos antes para <span className="text-primary">ordenar</span> y decidir bien qué mover.</>}
        lede="Tres pilares simples. Aplicados con disciplina. Esa es la diferencia entre una agencia que ejecuta y una consultora que cambia el rumbo de tu negocio."
      />

      <section className="forma-section">
        <div className="forma-container space-y-24 md:space-y-32">
          {PILARES.map((p, i) => (
            <article key={p.num} className="grid gap-10 md:grid-cols-12 items-start">
              <div className="md:col-span-4">
                <div className="sticky top-28">
                  <span className="font-display text-[8rem] md:text-[10rem] leading-none font-semibold text-primary block">
                    {p.num}
                  </span>
                  <p className="forma-eyebrow mt-4">Pilar 0{i + 1}</p>
                </div>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{p.intro}</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {p.items.map((it) => (
                    <div key={it.title} className="border-l-2 border-primary pl-5">
                      <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="forma-container py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
            ¿En qué pilar está tu negocio hoy?
          </h2>
          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-4 text-sm font-medium text-ink hover:bg-white/90"
          >
            Agendar diagnóstico <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

const PILARES = [
  {
    num: "01",
    title: "Diagnóstico",
    intro: "No proponemos nada hasta entender qué hace tu negocio, a quién le vende, por qué te eligen y dónde está el cuello de botella real. La mayoría de los problemas de marketing no son de marketing.",
    items: [
      { title: "Sesión profunda", desc: "Conversación estructurada con quien toma decisiones." },
      { title: "Mapa del negocio", desc: "Producto, cliente, canal, competencia y promesa en una sola vista." },
      { title: "Hipótesis priorizadas", desc: "Lo que probablemente está fallando, ordenado por impacto." },
      { title: "Conclusiones claras", desc: "Qué hacer, qué no hacer y por qué." },
    ],
  },
  {
    num: "02",
    title: "Orden",
    intro: "Una vez claro el foco, alineamos todo lo que comunica tu marca: oferta, mensajes, materiales y canales. Todo apuntando a la misma historia.",
    items: [
      { title: "Foco comercial", desc: "Qué venden, en qué orden y a qué precio." },
      { title: "Narrativa de marca", desc: "Cómo lo cuentan en una línea, un párrafo y una presentación." },
      { title: "Sistema visual", desc: "Identidad coherente que respalda la venta." },
      { title: "Materiales clave", desc: "Web, pitch, propuesta, perfiles. Los que realmente usan." },
    ],
  },
  {
    num: "03",
    title: "Ejecución",
    intro: "Implementamos solo lo que el negocio realmente necesita. Sin pauta porque sí, sin contenido por inercia, sin gastos sin retorno claro.",
    items: [
      { title: "Plan priorizado", desc: "Qué se hace primero, segundo, tercero. Y qué se pospone." },
      { title: "Ejecución medible", desc: "Cada acción tiene métrica y responsable." },
      { title: "Iteración mensual", desc: "Lo que funciona se escala, lo que no se corta." },
      { title: "Sin grasa", desc: "Tu inversión se ve. No se diluye en estructura innecesaria." },
    ],
  },
] as const;
