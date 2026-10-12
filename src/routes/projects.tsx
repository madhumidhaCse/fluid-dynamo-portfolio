import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "../components/BrandIcons";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { PageWrap, Heading } from "../components/Section";
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
          "Selected work by Madhumidha S: a mental wellbeing chatbot, a React movie discovery app, and a task manager.",
      },
      { property: "og:title", content: "Projects — Madhumidha S" },
      { property: "og:description", content: "A selection of web and AI project work by Madhumidha S." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "Mental Health Bot",
    desc: "A Python chatbot concept focused on empathetic conversations, sentiment analysis, mood tracking and crisis-language detection.",
    tags: ["Python", "NLP", "CNN"],
    href: "https://github.com/madhumidhaCse",
    image: mentalHealthImage,
    imageAlt: "Concept illustration of a friendly wellbeing chatbot with conversation bubbles and a heart",
  },
  {
    title: "Movie Search & Discovery App",
    desc: "A React movie browser using the TMDb API to search films, view details and save favourites between visits.",
    tags: ["React.js", "TMDb API", "React Hooks", "LocalStorage"],
    href: "https://github.com/madhumidhaCse",
    image: movieDiscoveryImage,
    imageAlt: "Concept illustration of a film reel, clapperboard and magnifying glass for movie discovery",
  },
  {
    title: "To-Do Task Manager",
    desc: "Built during my internship at Atlanwa Pvt Ltd, this task manager pairs a web interface with MySQL storage and task-status tracking.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    href: "https://github.com/madhumidhaCse",
    image: taskManagerImage,
    imageAlt: "Concept illustration of a task checklist on a clipboard with a pencil and progress bar",
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
      className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-[transform,box-shadow] duration-300 ease-out hover:glow"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/25 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative aspect-[14/9] overflow-hidden border-b border-border bg-secondary/70">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          Concept illustration
        </span>
        <img
          src={p.image}
          alt={p.imageAlt}
          loading="lazy"
          width={1408}
          height={912}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="font-display text-xl font-bold leading-snug">{p.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{p.desc}</p>
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
            className="inline-flex min-h-11 items-center gap-2 font-medium text-primary"
          >
            <Github className="size-4" /> View code <ArrowUpRight className="size-4" />
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
        <Heading
          kicker="Selected work"
          title="Projects"
          sub="A few projects spanning web development, data and thoughtful user experiences."
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
