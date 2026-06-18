import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Compass, Layers, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forma Mkt — Consultoría que ordena tu negocio antes de ejecutar" },
      { name: "description", content: "Agencia consultora chilena. Diagnóstico, orden y ejecución de marketing digital, estrategia y branding para empresas que necesitan claridad antes que campañas." },
      { property: "og:title", content: "Forma Mkt — Consultoría que ordena tu negocio antes de ejecutar" },
      { property: "og:description", content: "Diagnóstico, orden y ejecución. Marketing que mueve la aguja porque parte por entender el negocio." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="forma-container pt-20 md:pt-32 pb-24 md:pb-40">
          <div className="flex items-center gap-3">
            <span className="forma-rule" />
            <p className="forma-eyebrow">Agencia consultora · Chile</p>
          </div>

          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.98] tracking-tight max-w-5xl">
            Antes de mover plata en marketing,{" "}
            <span className="text-primary">ordenemos</span> el negocio.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Consultoría estratégica para empresas y profesionales que necesitan claridad antes de ejecución.
            Entramos antes para ordenar, decidir bien qué mover y diseñar solo lo que el negocio realmente necesita.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/metodologia"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-4 text-sm font-medium hover:bg-accent"
            >
              Ver metodología
            </Link>
          </div>
        </div>

        {/* Decorative grid */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* PROBLEM BAND */}
      <section className="bg-ink text-white">
        <div className="forma-container py-20 md:py-28">
          <p className="forma-eyebrow !text-primary">¿Te suena?</p>
          <div className="mt-8 grid gap-12 md:grid-cols-3">
            {[
              "Inviertes en pauta sin saber si tu oferta está clara.",
              "Cambias de diseñador o agencia cada seis meses.",
              "Tu marca dice una cosa y tu venta otra.",
            ].map((q) => (
              <p key={q} className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                {q}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="forma-section">
        <div className="forma-container">
          <div className="max-w-3xl">
            <p className="forma-eyebrow">Metodología</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Tres pilares. Un solo objetivo:{" "}
              <span className="text-primary">que las decisiones se tomen bien</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3 border border-border">
            {PILARES.map((p) => (
              <div key={p.num} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-6xl font-semibold text-primary">{p.num}</span>
                  <p.Icon className="size-6 text-foreground/30" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/metodologia" className="inline-flex items-center gap-2 text-sm font-medium forma-link-underline">
              Cómo trabajamos paso a paso <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS bento */}
      <section className="border-y border-border bg-secondary forma-section">
        <div className="forma-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="forma-eyebrow">Servicios</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Diseñamos solo lo que necesita tu negocio.
              </h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-medium forma-link-underline">
              Todos los servicios <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-6 border border-border">
            {SERVICIOS.map((s, i) => (
              <article
                key={s.title}
                className={`group bg-background p-8 transition-colors hover:bg-primary hover:text-primary-foreground ${
                  i === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
                }`}
              >
                <p className="text-xs font-mono text-muted-foreground group-hover:text-primary-foreground/70">
                  0{i + 1} / Servicio
                </p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="size-4 mt-0.5 flex-none text-primary group-hover:text-primary-foreground" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-ink text-white">
        <div className="forma-container py-24 md:py-40 text-center">
          <p className="forma-eyebrow !text-primary">Manifiesto</p>
          <p className="mx-auto mt-8 max-w-4xl font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            No vendemos posts.{" "}
            <span className="text-white/50">Vendemos decisiones bien tomadas.</span>
          </p>
        </div>
      </section>

      {/* PROCESO timeline */}
      <section className="forma-section">
        <div className="forma-container">
          <div className="max-w-2xl">
            <p className="forma-eyebrow">Cómo trabajamos</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Cuatro pasos para que dejes de improvisar.
            </h2>
          </div>

          <ol className="mt-16 grid gap-px bg-border md:grid-cols-4 border border-border">
            {PROCESO.map((p, i) => (
              <li key={p.title} className="bg-background p-8">
                <p className="text-xs font-mono text-primary">PASO 0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary forma-section">
        <div className="forma-container grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="forma-eyebrow">Preguntas</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Lo que más nos preguntan.
            </h2>
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                    <span className="font-display text-lg md:text-xl font-medium">{f.q}</span>
                    <span className="size-8 grid place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed pr-12">{f.a}</p>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary text-primary-foreground">
        <div className="forma-container py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <p className="forma-eyebrow !text-white/70">Próximo paso</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.02] tracking-tight">
                Empecemos por entender tu negocio.
              </h2>
              <p className="mt-6 max-w-xl text-white/85 text-lg leading-relaxed">
                Una conversación de 30 minutos. Sin compromiso. Sales con foco aunque no trabajes con nosotros.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 rounded-sm bg-white px-6 py-4 text-sm font-medium text-ink hover:bg-white/90"
              >
                Agendar diagnóstico
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const PILARES = [
  { num: "01", title: "Diagnóstico", desc: "Entendemos tu negocio en profundidad y dejamos claro qué vale realmente la pena hacer y qué no.", Icon: Compass },
  { num: "02", title: "Orden", desc: "Alineamos oferta, mensajes de marca y materiales de comunicación. Una sola historia consistente.", Icon: Layers },
  { num: "03", title: "Ejecución", desc: "Diseñamos e implementamos solo lo que realmente necesita el negocio. Sin gastos innecesarios.", Icon: Rocket },
] as const;

const SERVICIOS = [
  {
    title: "Estrategia comercial y de marca",
    desc: "Foco, posicionamiento, oferta y mensajes clave. La base sobre la que se construye todo lo demás.",
    bullets: ["Diagnóstico 360°", "Definición de foco", "Arquitectura de oferta"],
  },
  {
    title: "Branding",
    desc: "Identidad visual y verbal coherente con tu negocio.",
    bullets: ["Naming", "Sistema visual", "Tono y narrativa"],
  },
  {
    title: "Presencia digital",
    desc: "Sitios web, redes y contenidos que respaldan la venta.",
    bullets: ["Sitio + SEO", "Sistema de contenidos", "Ads con medición real"],
  },
  {
    title: "Consultoría continua",
    desc: "Acompañamiento mensual para tomar mejores decisiones.",
    bullets: ["Sesiones quincenales", "Métricas que importan", "Hoja de ruta viva"],
  },
] as const;

const PROCESO = [
  { title: "Sesión de diagnóstico", desc: "Una conversación profunda para entender producto, cliente y momento del negocio." },
  { title: "Documento de foco", desc: "Tu negocio en una página: qué vendes, a quién, por qué te eligen y qué duele." },
  { title: "Plan de orden", desc: "Mensajes, materiales y canales priorizados según lo que realmente mueve la aguja." },
  { title: "Ejecución medible", desc: "Implementamos con métricas claras. Solo lo necesario, hecho bien." },
] as const;

const FAQ = [
  { q: "¿Trabajan con empresas pequeñas?", a: "Sí. La mitad de nuestros clientes son pymes y profesionales independientes que necesitan ordenar antes de escalar. La consultoría es justamente lo que falta cuando no hay equipo grande." },
  { q: "¿Hacen pauta y redes sociales?", a: "Sí, pero solo cuando ya está claro qué comunicar, a quién y por qué. Sin esa base, pautar es regalarle plata a Meta." },
  { q: "¿Cuánto demora un diagnóstico?", a: "La sesión inicial es de 30 a 45 minutos y es gratuita. El diagnóstico completo (documento de foco) toma 2 a 3 semanas." },
  { q: "¿Hacen trabajos puntuales o solo asesorías largas?", a: "Ambos. Tenemos proyectos cerrados (branding, sitio, plan estratégico) y acompañamiento continuo mensual." },
  { q: "¿Cuál es el rango de inversión?", a: "Parte desde proyectos compactos de bajo presupuesto hasta acompañamientos integrales. Lo definimos juntos en base al alcance y momento del negocio." },
] as const;
