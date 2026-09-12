import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github } from "../components/BrandIcons";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { PageWrap, Heading } from "../components/Section";
import { Lazy3D } from "../components/Lazy3D";
import mentalHealthImage from "../assets/mental-health-bot.jpg";
import movieDiscoveryImage from "../assets/movie-discovery.jpg";
import taskManagerImage from "../assets/task-manager.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Madhumidha S" },
      {
        name: "description",
        content:
          "An AI mental health chatbot built with Python, NLP and CNNs, and a React movie discovery app powered by the TMDb API.",
      },
      { property: "og:title", content: "Projects — Madhumidha S" },
      { property: "og:description", content: "AI mental health bot and a React movie search app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "Mental Health Bot",
    desc: "An AI-driven chatbot for real-time, empathetic text and voice conversations, with sentiment analysis, emotional-state tracking and a crisis-detection module that flags high-risk language and triggers alerts.",
    tags: ["Python", "NLP", "CNN"],
    href: "https://github.com/madhumidhaCse",
    image: mentalHealthImage,
    imageAlt: "Abstract conversational waveforms representing the Mental Health Bot",
  },
  {
    title: "Movie Search & Discovery App",
    desc: "A React app integrating the TMDb API to search and display movie details in real time, with a Favourites feature that persists selections across sessions using React Hooks and LocalStorage.",
    tags: ["React.js", "TMDb API", "React Hooks", "LocalStorage"],
    href: "https://github.com/madhumidhaCse",
    image: movieDiscoveryImage,
    imageAlt: "Cinematic search interface representing the Movie Search and Discovery App",
  },
  {
    title: "To-Do Task Manager",
    desc: "Built during my internship at Atlanwa Pvt Ltd — a task manager covering both the front-end interface and back-end storage, with real-time task status updates and tracking.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    href: "https://github.com/madhumidhaCse",
    image: taskManagerImage,
    imageAlt: "Floating task panels representing the To-Do Task Manager",
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
      className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-[transform,box-shadow] duration-300 ease-out hover:glow"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/25 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="aspect-[14/9] overflow-hidden border-b border-border bg-secondary">
        <img
          src={p.image}
          alt={p.imageAlt}
          loading="lazy"
          width={1400}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
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
            href={p.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
          >
            <Github className="size-4" /> Code
          </motion.a>
        </div>
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
