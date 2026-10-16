import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Download, GraduationCap, Rocket } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageWrap } from "../components/Section";
import portraitUrl from "../assets/madhumidha-portrait.jpg";
import mentalHealthImage from "../assets/mental-health-bot.jpg";
import movieDiscoveryImage from "../assets/movie-discovery.jpg";
import taskManagerImage from "../assets/task-manager.jpg";
import resumeUrl from "../assets/Madhumidha_S_Resume.pdf";

const PAGE_TITLE = "Madhumidha S - Full-Stack Developer | React, Python, REST APIs";
const PAGE_DESCRIPTION = "Madhumidha S is a full-stack developer building practical applications with React, Python, REST APIs and MySQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ACHIEVEMENTS = [
  { icon: GraduationCap, value: "7.53", label: "CGPA · B.E. Computer Science (2022–2026)" },
  { icon: Rocket, value: "3", label: "Projects across web and task management" },
  { icon: Award, value: "2", label: "Certifications and training" },
];

const PROJECTS = [
  {
    title: "Mental Health Bot",
    description: "A Python chatbot exploring supportive conversations and mood tracking.",
    tags: ["Python", "NLP", "CNN"],
    image: mentalHealthImage,
    alt: "Concept illustration for the Mental Health Bot project",
  },
  {
    title: "Movie Search & Discovery App",
    description: "A React app to search films, view details and save favourites.",
    tags: ["React.js", "TMDb API", "LocalStorage"],
    image: movieDiscoveryImage,
    alt: "Concept illustration for the Movie Search and Discovery project",
  },
  {
    title: "To-Do Task Manager",
    description: "A task manager with MySQL storage and task-status tracking.",
    tags: ["JavaScript", "MySQL", "HTML", "CSS"],
    image: taskManagerImage,
    alt: "Concept illustration for the To-Do Task Manager project",
  },
];

const SKILL_GROUPS = [
  { name: "Frontend", skills: ["React.js & Hooks", "JavaScript", "HTML5 & CSS3"] },
  { name: "Backend", skills: ["Python", "Java", "REST APIs"] },
  { name: "Database", skills: ["SQL / MySQL"] },
  { name: "Core CS", skills: ["Data Structures & Algorithms", "OOPS"] },
];

const EXPERIENCE = [
  {
    title: "Web Development Intern",
    company: "Atlanwa Pvt Ltd",
    detail: "Developed a To-Do task manager using HTML, CSS, JavaScript and MySQL, with task-status tracking.",
  },
  {
    title: "In-plant Trainee",
    company: "Codebind Technologies",
    detail: "Project-based training in HTML, CSS and JavaScript fundamentals.",
  },
];

function Home() {
  return (
    <PageWrap className="max-w-7xl">
      <section className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="min-w-0">
          <p className="mb-4 text-sm font-semibold text-primary">Full-Stack Developer · Chennai, India</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Full-stack developer building React + Python apps
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            I build practical apps with React, Python, REST APIs and MySQL—from the interface to the data behind it.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/contact">Get in touch <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg"><a href={resumeUrl} download="Madhumidha_S_Resume.pdf"><Download /> Download résumé</a></Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border-4 border-primary/20 bg-secondary p-1">
            <img src={portraitUrl} alt="Portrait of Madhumidha S" width={413} height={529} fetchPriority="high" className="h-full w-full rounded-lg object-cover object-top" />
          </div>
        </motion.div>
      </section>

      <section aria-label="At a glance" className="mt-14 border-y border-border py-6 sm:mt-16 sm:py-8">
        <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {ACHIEVEMENTS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" /></span>
              <div><p className="font-display text-xl font-bold">{value}</p><p className="text-sm text-muted-foreground">{label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-16" aria-labelledby="projects-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase text-primary">Selected work</p><h2 id="projects-heading" className="mt-2 text-3xl font-bold">Projects</h2></div>
          <Button asChild variant="link" className="h-auto px-0"><Link to="/projects">View all projects <ArrowRight /></Link></Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -4 }} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-glow">
              <div className="aspect-[14/9] overflow-hidden bg-secondary">
                <img src={project.image} alt={project.alt} width={1408} height={912} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}</ul>
                <Button asChild variant="link" className="mt-3 h-auto justify-start px-0"><Link to="/projects">View project <ArrowRight /></Link></Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-8 sm:mt-16" aria-labelledby="skills-preview-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase text-primary">Toolkit</p><h2 id="skills-preview-heading" className="mt-2 text-3xl font-bold">Skills</h2></div>
          <Button asChild variant="link" className="h-auto px-0"><Link to="/skills">All skills <ArrowRight /></Link></Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => <div key={group.name}><h3 className="mb-3 font-semibold">{group.name}</h3><ul className="flex flex-wrap gap-2">{group.skills.map((skill) => <li key={skill} className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-sm text-primary">{skill}</li>)}</ul></div>)}
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-8 sm:mt-16" aria-labelledby="experience-heading">
        <p className="text-xs font-semibold uppercase text-primary">Experience</p>
        <h2 id="experience-heading" className="mt-2 text-3xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((entry) => <article key={entry.company} className="border-l-2 border-primary pl-5">
            <h3 className="font-display text-lg font-bold">{entry.title}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{entry.company}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{entry.detail}</p>
          </article>)}
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-8 sm:mt-16" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl font-bold">About</h2>
        <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">
          I earned my B.E. in Computer Science and Engineering from Velammal Engineering College (2022–2026). I’m NPTEL-certified in Java and trained in the MERN stack. I enjoy building React and Python projects from the interface to the database.
        </p>
      </section>
    </PageWrap>
  );
}