import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ImagePlus } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { Button } from "../components/ui/button";

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
  },
  {
    title: "Movie Search & Discovery App",
    description: "A React movie browser to search films, view details and save favourites between visits.",
    tags: ["React.js", "TMDb API", "React Hooks", "LocalStorage"],
  },
  {
    title: "To-Do Task Manager",
    description: "An internship project pairing a task interface with MySQL storage and task-status tracking.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
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
            <div className="grid aspect-[14/9] place-items-center border-b border-dashed border-border bg-secondary/60 text-muted-foreground" role="img" aria-label={`${project.title} screenshot placeholder`}>
              <div className="flex flex-col items-center gap-2 text-center">
                <ImagePlus className="size-8 text-primary/70" aria-hidden="true" />
                <span className="text-sm">Project screenshot</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h2 className="font-display text-xl font-bold leading-snug">{project.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Button asChild variant="link" className="h-11 justify-start px-0 text-primary">
                  <a href="https://github.com/madhumidhaCse" target="_blank" rel="noreferrer">View code <ArrowUpRight className="size-4" /></a>
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