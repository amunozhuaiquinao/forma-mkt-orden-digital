import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { toast } from "sonner";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const PRESUPUESTOS = [
  "Aún por definir",
  "Hasta $500.000 CLP / mes",
  "$500.000 – $1.500.000 CLP / mes",
  "$1.500.000 – $4.000.000 CLP / mes",
  "+ $4.000.000 CLP / mes",
];

export function ContactForm({ source = "web" }: { source?: string }) {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      nombre: String(fd.get("nombre") ?? ""),
      email: String(fd.get("email") ?? ""),
      empresa: String(fd.get("empresa") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      rubro: String(fd.get("rubro") ?? ""),
      presupuesto: String(fd.get("presupuesto") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
      fuente: source,
    };
    setLoading(true);
    try {
      await submit({ data: payload });
      setDone(true);
      toast.success("Recibido. Te respondemos en menos de 24h hábiles.");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Algo falló";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-sm border border-border bg-secondary p-10 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-6" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold">Mensaje recibido.</h3>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          Lo revisamos hoy mismo y te contactamos en menos de 24 horas hábiles para coordinar tu diagnóstico.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
        <Field label="Email" name="email" type="email" required placeholder="tu@empresa.cl" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Empresa" name="empresa" placeholder="Razón social o marca" />
        <Field label="Teléfono" name="telefono" placeholder="+56 9 ..." />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Rubro / industria" name="rubro" placeholder="Retail, B2B, servicios..." />
        <SelectField label="Presupuesto mensual estimado" name="presupuesto" options={PRESUPUESTOS} />
      </div>
      <div>
        <label htmlFor="mensaje" className="forma-eyebrow !text-foreground/60">¿Qué necesitas ordenar?</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          minLength={10}
          rows={5}
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Cuéntanos en qué momento está tu negocio y qué te gustaría resolver."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60"
      >
        {loading ? <Loader2 className="size-4 animate-spin" /> : null}
        {loading ? "Enviando..." : "Enviar y agendar diagnóstico"}
        {!loading && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
      </button>
      <p className="text-xs text-muted-foreground">
        Tus datos solo se usan para responder tu solicitud. Nada de spam.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="forma-eyebrow !text-foreground/60">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function SelectField({
  label, name, options,
}: { label: string; name: string; options: readonly string[] }) {
  return (
    <div>
      <label htmlFor={name} className="forma-eyebrow !text-foreground/60">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>Selecciona una opción</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
