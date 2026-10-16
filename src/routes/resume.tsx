import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { Button } from "../components/ui/button";
import resumeUrl from "../assets/Madhumidha_S_Resume.pdf";

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

      <div className="mb-10 flex flex-wrap gap-3">
        <Button asChild>
          <a href={resumeUrl} download="Madhumidha_S_Resume.pdf"><Download /> Download résumé</a>
        </Button>
        <Button asChild variant="outline">
          <a href={resumeUrl} target="_blank" rel="noreferrer"><Eye /> Open PDF</a>
        </Button>
      </div>

      <section aria-labelledby="experience-title" className="max-w-3xl">
        <h2 id="experience-title" className="mb-5 font-display text-xl font-bold">Experience & education</h2>
        <ol className="border-l border-border pl-6">
          {TIMELINE.map((t) => (
            <li key={t.title} className="relative border-b border-border py-5 first:pt-0 last:border-0">
              <span aria-hidden="true" className="absolute -left-[1.9rem] top-6 size-2.5 rounded-full bg-primary" />
              <p className="text-xs font-semibold text-primary">{t.year}</p>
              <h3 className="mt-1 font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{t.detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageWrap>
  );
}
