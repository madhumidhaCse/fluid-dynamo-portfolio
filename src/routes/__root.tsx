import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { GradientBlurs } from "../components/GradientBlurs";
import { ParticlesBg } from "../components/ParticlesBg";
import { ClientOnly } from "../components/ClientOnly";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "Madhumidha S — Creative Developer Portfolio" },
      {
        name: "description",
        content:
          "Immersive dark-themed portfolio of Madhumidha S: projects, skills, articles and coding profiles.",
      },
      { name: "author", content: "Madhumidha S" },
      { property: "og:title", content: "Madhumidha S — Creative Developer Portfolio" },
      {
        property: "og:description",
        content: "Immersive 3D & motion-driven developer portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap",
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
    <html lang="en">
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

const EASE = [0.22, 1, 0.36, 1] as const;

const TRANSITIONS: Record<string, { initial: object; animate: object; exit: object }> = {
  "/": {
    initial: { opacity: 0, scale: 1.06, filter: "blur(14px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  },
  "/hire": {
    initial: { opacity: 0, y: 80, rotateX: 12 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -60, rotateX: -8 },
  },
  "/resume": {
    initial: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    animate: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
    exit: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
  },
  "/projects": {
    initial: { opacity: 0, x: 120, skewY: 3 },
    animate: { opacity: 1, x: 0, skewY: 0 },
    exit: { opacity: 0, x: -120, skewY: -3 },
  },
  "/skills": {
    initial: { opacity: 0, scale: 0.9, rotate: -2 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 1.08, rotate: 2 },
  },
  "/contact": {
    initial: { opacity: 0, y: -70, filter: "blur(12px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 70, filter: "blur(12px)" },
  },
  "/articles": {
    initial: { opacity: 0, x: -100, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: 100, filter: "blur(8px)" },
  },
  "/profiles": {
    initial: { opacity: 0, scale: 0.82, y: 60 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: -40 },
  },
};

const DEFAULT_T = TRANSITIONS["/"]!;

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = TRANSITIONS[pathname] ?? DEFAULT_T;

  return (
    <QueryClientProvider client={queryClient}>
      <GradientBlurs />
      <ClientOnly>
        <ParticlesBg />
      </ClientOnly>
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={t.initial}
          animate={t.animate}
          exit={t.exit}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ transformPerspective: 1200 }}
        >
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

