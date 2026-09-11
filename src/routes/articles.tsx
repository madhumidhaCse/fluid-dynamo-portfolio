import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Certifications & Training — Madhumidha S" },
      {
        name: "description",
        content:
          "NPTEL IIT Java certification, MERN stack training at Imarticus Learning, a web development internship and an in-plant training program.",
      },
      { property: "og:title", content: "Certifications & Training — Madhumidha S" },
      {
        property: "og:description",
        content: "Java (NPTEL, IIT), MERN stack, internship and in-plant training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Articles,
});

const ITEMS = [
  {
    title: "Programming in Java — NPTEL, IIT",
    date: "Jan – Apr 2024",
    read: "Certification",
    excerpt:
      "A full semester course covering core Java, object-oriented design and problem solving, certified by IIT through NPTEL.",
  },
  {
    title: "MERN Stack Development — Imarticus Learning",
    date: "Jan 22 – Jan 31, 2024",
    read: "Certification",
    excerpt:
      "Intensive training across MongoDB, Express, React and Node, building and connecting full-stack applications.",
  },
  {
    title: "Web Development Intern — Atlanwa Pvt Ltd",
    date: "Nov 2024 – Dec 2024",
    read: "Internship",
    excerpt:
      "Built a To-Do task manager with HTML, CSS, JavaScript and MySQL, implementing real-time task status updates and end-to-end data storage.",
  },
  {
    title: "In-Plant Trainee — Codebind Technologies",
    date: "Training program",
    read: "Training",
    excerpt:
      "Project-based training in core web development, with practical exposure to HTML, CSS and JavaScript fundamentals.",
  },
];

function Articles() {
  return (
    <PageWrap>
      <Heading
        kicker="Learning"
        title="Certifications & Training"
        sub="Courses, internships and programs that shaped how I build."
      />

      <div className="grid gap-5">
        {ITEMS.map((a, i) => (
          <motion.article
            key={a.title}
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
              whileHover={{ rotate: 12, scale: 1.1 }}
            >
              <BadgeCheck className="size-5" />
            </motion.span>
          </motion.article>
        ))}
      </div>
    </PageWrap>
  );
}
