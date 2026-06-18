import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="forma-eyebrow">Error 404</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">Página no encontrada</h1>
          <p className="mt-4 text-muted-foreground">
            La ruta que buscas no existe o fue movida.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="forma-eyebrow">Algo se cayó</p>
        <h1 className="mt-4 font-display text-3xl font-semibold">Esta página no cargó.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Intenta de nuevo o vuelve al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Reintentar
          </button>
          <a href="/" className="rounded-sm border border-border px-5 py-3 text-sm font-medium hover:bg-accent">
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Forma Mkt — Consultoría de marketing que ordena tu negocio" },
      { name: "description", content: "Agencia consultora chilena de marketing digital, estrategia y branding. Ordenamos tu negocio antes de ejecutar." },
      { name: "author", content: "Forma Mkt" },
      { name: "theme-color", content: "#ff0000" },
      { property: "og:title", content: "Forma Mkt — Consultoría de marketing que ordena tu negocio" },
      { property: "og:description", content: "Diagnóstico, orden y ejecución para empresas que necesitan claridad antes que campañas." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CL" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" richColors closeButton />
    </QueryClientProvider>
  );
}
