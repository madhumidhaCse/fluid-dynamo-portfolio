import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { Button } from "../components/ui/button";
import mentalHealthImage from "../assets/mental-health-bot.jpg";
import movieDiscoveryImage from "../assets/movie-discovery.jpg";
import taskManagerImage from "../assets/task-manager.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Madhumidha S | React & Python" },
      { name: "description", content: "Explore React, Python and MySQL projects by Madhumidha S." },
      { property: "og:title", content: "Projects — Madhumidha S | React & Python" },
      { property: "og:description", content: "Mental Health Bot, Movie Search & Discovery App, and To-Do Task Manager." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "Mental Health Bot",
    description: "A Python chatbot project exploring supportive conversations, sentiment analysis and mood tracking.",
    tags: ["Python", "NLP", "CNN"],
    image: mentalHealthImage,
    imageAlt: "Concept illustration for the Mental Health Bot, not an app screenshot",
  },
  {
    title: "Movie Search & Discovery App",
    description: "A React movie browser to search films, view details and save favourites between visits.",
    tags: ["React.js", "TMDb API", "React Hooks", "LocalStorage"],
    image: movieDiscoveryImage,
    imageAlt: "Concept illustration for the Movie Search and Discovery App, not an app screenshot",
  },
  {
    title: "To-Do Task Manager",
    description: "An internship project pairing a task interface with MySQL storage and task-status tracking.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    image: taskManagerImage,
    imageAlt: "Concept illustration for the To-Do Task Manager, not an app screenshot",
  },
];

function Projects() {
  return (
    <PageWrap>
      <Heading kicker="Selected work" title="Projects" sub="A selection of web and application projects." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            whileHover={{ y: -4 }}
            className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-glow"
          >
            <div className="relative grid aspect-[14/9] place-items-center overflow-hidden border-b border-border bg-secondary/60">
              <img src={project.image} alt={project.imageAlt} width={1408} height={912} loading="lazy" className="h-full w-full object-contain" />
              <span className="absolute bottom-3 left-3 rounded-sm border border-border bg-background/95 px-2.5 py-1 text-xs font-medium text-muted-foreground">Concept illustration</span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h2 className="font-display text-xl font-bold leading-snug">{project.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Button asChild variant="link" className="h-11 justify-start px-0 text-primary">
                  <a href="https://github.com/madhumidhaCse" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight className="size-4" /></a>
                </Button>
                <Button variant="outline" size="sm" disabled title="No live demo link is available yet">Live Demo</Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageWrap>
  );
}