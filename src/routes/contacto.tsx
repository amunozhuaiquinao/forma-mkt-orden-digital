import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Agenda tu diagnóstico | Forma Mkt" },
      { name: "description", content: "Agenda una sesión de diagnóstico gratuita. 30 minutos para mapear tu negocio y decidir el siguiente paso con foco." },
      { property: "og:title", content: "Contacto — Agenda tu diagnóstico | Forma Mkt" },
      { property: "og:description", content: "Responde el formulario y te contactamos en menos de 24 horas hábiles." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Empecemos por <span className="text-primary">entender</span> tu negocio.</>}
        lede="Completa el formulario y te contactamos en menos de 24 horas hábiles para agendar tu sesión de diagnóstico. Sin costo, sin compromiso."
      />

      <section className="forma-section">
        <div className="forma-container grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm source="contacto-page" />
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-10">
            <div>
              <p className="forma-eyebrow">Otros canales</p>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Mail className="size-5 mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email directo</p>
                    <a href="mailto:hola@forma.cl" className="font-display text-lg hover:text-primary">hola@forma.cl</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="size-5 mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/56900000000?text=Hola%20Forma%2C%20quiero%20agendar%20un%20diagn%C3%B3stico."
                      target="_blank" rel="noreferrer"
                      className="font-display text-lg hover:text-primary"
                    >
                      Escríbenos
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="size-5 mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Tiempo de respuesta</p>
                    <p className="font-display text-lg">&lt; 24 horas hábiles</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-5">
              <p className="forma-eyebrow !text-foreground/60">Qué esperar</p>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><span className="font-medium text-foreground">1.</span> Confirmación por email.</li>
                <li><span className="font-medium text-foreground">2.</span> Agendamos sesión de 30 min.</li>
                <li><span className="font-medium text-foreground">3.</span> Mapeamos tu negocio juntos.</li>
                <li><span className="font-medium text-foreground">4.</span> Sales con foco, decidas o no trabajar con nosotros.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
