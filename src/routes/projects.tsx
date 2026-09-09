import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { PageWrap, Heading } from "../components/Section";
import { Lazy3D } from "../components/Lazy3D";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Madhumidha S" },
      {
        name: "description",
        content: "Selected engineering projects: web apps, tools and experiments.",
      },
      { property: "og:title", content: "Projects — Madhumidha S" },
      { property: "og:description", content: "Selected web apps, tools and experiments." },
    ],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "Nebula Dashboard",
    desc: "Real-time analytics dashboard with streaming charts and role-based access.",
    tags: ["React", "WebSocket", "Postgres"],
  },
  {
    title: "Orbit Commerce",
    desc: "Headless storefront with instant search, cart persistence and Stripe checkout.",
    tags: ["Next.js", "Stripe", "Redis"],
  },
  {
    title: "Shader Playground",
    desc: "Browser-based GLSL editor with live preview and shareable snippets.",
    tags: ["Three.js", "GLSL", "Vite"],
  },
  {
    title: "DevTrack CLI",
    desc: "Terminal tool that tracks coding streaks across GitHub and LeetCode.",
    tags: ["Node", "CLI", "APIs"],
  },
  {
    title: "MediSense",
    desc: "ML-assisted symptom triage app with an explainable results view.",
    tags: ["Python", "FastAPI", "React"],
  },
  {
    title: "Campus Connect",
    desc: "Event and club platform used by 2k+ students, with realtime RSVPs.",
    tags: ["React", "Supabase", "PWA"],
  },
];

function TiltCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg) translateZ(18px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (i % 3) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-[transform,box-shadow] duration-300 ease-out hover:glow"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/25 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <h2 className="font-display text-xl font-bold">{p.title}</h2>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4 text-sm">
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 3 }}
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
        >
          <Github className="size-4" /> Code
        </motion.a>
        <motion.a
          href="https://example.com/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 3 }}
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
        >
          <ExternalLink className="size-4" /> Live
        </motion.a>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <PageWrap>
      <div className="relative">
        <Lazy3D
          variant="orbs"
          className="pointer-events-none absolute -top-16 right-0 hidden h-64 w-1/2 opacity-70 md:block"
        />
        <Heading
          kicker="Selected work"
          title="Projects"
          sub="Things I've designed, built and shipped. Hover a card to tilt it in 3D."
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <TiltCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </PageWrap>
  );
}
