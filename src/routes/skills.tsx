import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, Heading } from "../components/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Madhumidha S | React, Python & MySQL" },
      {
        name: "description",
        content: "Skills of Madhumidha S: React.js, JavaScript, Python, Java, REST APIs, MySQL and core computer science.",
      },
      { property: "og:title", content: "Skills — Madhumidha S" },
      { property: "og:description", content: "Frontend, backend, database and core computer science skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

const SKILL_GROUPS = [
  { name: "Frontend", skills: ["React.js & Hooks", "JavaScript (ES6+)", "HTML5 & CSS3"] },
  { name: "Backend", skills: ["Python", "Java", "REST API Integration"] },
  { name: "Database", skills: ["SQL / MySQL", "MySQL Workbench"] },
  { name: "Core CS", skills: ["Data Structures & Algorithms", "OOPS"] },
];

const FAMILIAR = ["NLP (basics)", "CNN (basics)", "MERN stack", "LocalStorage", "TMDb API", "VS Code"];

function Skills() {
  return (
    <PageWrap>
      <Heading
        kicker="Toolkit"
        title="My Skills"
        sub="What I build with — from interfaces and APIs down to databases."
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <section key={group.name} aria-labelledby={`skill-${group.name}`}>
            <h2 id={`skill-${group.name}`} className="mb-4 font-display text-lg font-bold">{group.name}</h2>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => <li key={skill} className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm text-primary">{skill}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-5 font-display text-lg font-bold">Also familiar with</h2>
        <div className="flex flex-wrap gap-3">
          {FAMILIAR.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/20 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </PageWrap>
  );
}
