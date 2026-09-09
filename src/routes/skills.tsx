import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PageWrap, Heading } from "../components/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Madhumidha S" },
      {
        name: "description",
        content: "Technical proficiency across frontend, backend, 3D, databases and tooling.",
      },
      { property: "og:title", content: "Skills — Madhumidha S" },
      { property: "og:description", content: "Frontend, backend, 3D, databases and tooling." },
    ],
  }),
  component: Skills;
});

const SKILLS = [
  { name: "React / TypeScript", value: 92 },
  { name: "Framer Motion & UI Animation", value: 88 },
  { name: "Three.js / WebGL", value: 78 },
  { name: "Node.js & APIs", value: 84 },
  { name: "Python", value: 80 },
  { name: "SQL & Databases", value: 82 },
  { name: "Java / DSA", value: 86 },
  { name: "Git, CI & Cloud", value: 75 },
];

function Counter({ to }: { to: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{val}%</span>;
}

function Skills() {
  return (
    <PageWrap>
      <Heading
        kicker="Toolkit"
        title="My Skills"
        sub="What I reach for when building products — and how confident I am with each."
      />

      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
            className="min-w-0"
          >
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <span className="truncate font-medium">{s.name}</span>
              <span className="shrink-0 font-display text-sm text-primary">
                <Counter to={s.value} />
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        {["Tailwind", "Next.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Figma", "Linux"].map(
          (tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 16 }}
              whileHover={{ scale: 1.12, rotate: -3 }}
              className="rounded-full glass px-4 py-2 text-sm text-muted-foreground hover:text-primary"
            >
              {tag}
            </motion.span>
          ),
        )}
      </div>
    </PageWrap>
  );
}
