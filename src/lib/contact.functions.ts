import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Nombre requerido").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  empresa: z.string().trim().max(160).optional().or(z.literal("")),
  telefono: z.string().trim().max(40).optional().or(z.literal("")),
  rubro: z.string().trim().max(80).optional().or(z.literal("")),
  presupuesto: z.string().trim().max(80).optional().or(z.literal("")),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más").max(2000),
  fuente: z.string().trim().max(40).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_leads").insert({
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa || null,
      telefono: data.telefono || null,
      rubro: data.rubro || null,
      presupuesto: data.presupuesto || null,
      mensaje: data.mensaje,
      fuente: data.fuente || "web",
    });

    if (error) {
      console.error("[contact] insert error:", error);
      throw new Error("No pudimos guardar tu mensaje. Intenta de nuevo.");
    }

    return { ok: true as const };
  });
