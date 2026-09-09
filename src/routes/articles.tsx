import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Featured Articles — Madhumidha S" },
      {
        name: "description",
        content: "Writing on frontend architecture, animation, WebGL and developer craft.",
      },
      { property: "og:title", content: "Featured Articles — Madhumidha S" },
      { property: "og:description", content: "Writing on frontend, animation and WebGL." },
    ],
  }),
  component: Articles,
});

const ARTICLES = [
  {
    title: "Building buttery page transitions in React",
    date: "Aug 2026",
    read: "7 min",
    excerpt: "A practical guide to orchestrating exit and enter animations without layout jank.",
  },
  {
    title: "Three.js on a budget: 60fps on mid-range phones",
    date: "Jun 2026",
    read: "9 min",
    excerpt: "Draw calls, DPR clamping and instancing — the levers that actually matter.",
  },
  {
    title: "Designing a component API you won't regret",
    date: "Apr 2026",
    read: "6 min",
    excerpt: "Composition over configuration, and how to know when a prop is a smell.",
  },
  {
    title: "From LeetCode to production thinking",
    date: "Feb 2026",
    read: "5 min",
    excerpt: "What competitive programming teaches you — and what it definitely doesn't.",
  },
];

function Articles() {
  return (
    <PageWrap>
      <Heading
        kicker="Writing"
        title="Featured Articles"
        sub="Notes from the build log — lessons, deep dives and opinions."
      />

      <div className="grid gap-5">
        {ARTICLES.map((a, i) => (
          <motion.a
            key={a.title}
            href="#"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 10 }}
            className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 rounded-3xl glass p-6 hover:glow sm:p-8"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="text-primary">{a.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" /> {a.read}
                </span>
              </div>
              <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">{a.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
            </div>
            <motion.span
              className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"
              whileHover={{ rotate: 45, scale: 1.1 }}
            >
              <ArrowUpRight className="size-5" />
            </motion.span>
          </motion.a>
        ))}
      </div>
    </PageWrap>
  );
}
