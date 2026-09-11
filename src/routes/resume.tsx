import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import resumeAsset from "../assets/resume.pdf.asset.json";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Madhumidha S" },
      { name: "description", content: "Download the latest resume of Madhumidha S (PDF)." },
      { property: "og:title", content: "Resume — Madhumidha S" },
      { property: "og:description", content: "Download the latest resume (PDF)." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

const TIMELINE = [
  {
    year: "Nov – Dec 2024",
    title: "Web Development Intern — Atlanwa Pvt Ltd",
    detail: "To-Do task manager with HTML, CSS, JavaScript and MySQL; real-time status tracking.",
  },
  {
    year: "2024",
    title: "In-Plant Trainee — Codebind Technologies",
    detail: "Project-based training in HTML, CSS and JavaScript fundamentals.",
  },
  {
    year: "2022 — 2026",
    title: "B.E. Computer Science — Velammal Engineering College",
    detail: "CGPA 7.53 / 10. Coursework in DSA, OOPS, DBMS and AI foundations.",
  },
  {
    year: "2021 — 2022",
    title: "HSC — RMK Matriculation Hr. Sec. School",
    detail: "85.17% · SSLC (2019–2020): 83.60%",
  },
];

function Resume() {
  return (
    <PageWrap>
      <Heading
        kicker="Curriculum Vitae"
        title="My Resume"
        sub="One page, everything that matters. Preview it here or grab the PDF."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.a
          href={resumeAsset.url}
          download="Madhumidha_S_Resume.pdf"
          initial={{ opacity: 0, rotateY: -25, y: 40 }}
          animate={{ opacity: 1, rotateY: 0, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotateY: 8, rotateX: -6, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ transformPerspective: 1000 }}
          className="group relative grid aspect-[3/4] place-items-center overflow-hidden rounded-3xl glass p-8 text-center hover:glow-strong"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-accent/25 opacity-0 transition-opacity group-hover:opacity-100"
          />
          <div>
            <motion.span
              className="mx-auto grid size-20 place-items-center rounded-2xl bg-primary/15 text-primary"
              whileHover={{ rotate: 8 }}
            >
              <FileText className="size-9" />
            </motion.span>
            <p className="mt-6 font-display text-2xl font-bold">Madhumidha_S_Resume.pdf</p>
            <p className="mt-2 text-sm text-muted-foreground">1 page · PDF</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">
              <Download className="size-4" /> Download
            </span>
          </div>
        </motion.a>

        <div>
          <motion.a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-2 text-sm text-primary"
          >
            <Eye className="size-4" /> Open in a new tab
          </motion.a>

          <ol className="relative mt-8 space-y-8 border-l border-border pl-8">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.7 }}
                className="relative"
              >
                <motion.span
                  className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full bg-primary"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(102,230,224,.5)",
                      "0 0 0 10px rgba(102,230,224,0)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.4 }}
                />
                <p className="text-xs uppercase tracking-widest text-primary">{t.year}</p>
                <h2 className="mt-1 font-display text-xl font-bold">{t.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </PageWrap>
  );
}
