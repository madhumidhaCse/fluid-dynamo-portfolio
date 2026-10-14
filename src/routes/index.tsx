import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Download, GraduationCap, Rocket } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageWrap } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";
import portraitUrl from "../assets/madhumidha-portrait.jpg";
import mentalHealthImage from "../assets/mental-health-bot.jpg";
import resumeUrl from "../assets/Madhumidha_S_Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhumidha S — Full-Stack Web Developer" },
      {
        name: "description",
        content:
          "B.E. Computer Science graduate in Chennai building practical web applications with React, Python and REST APIs.",
      },
      { property: "og:title", content: "Madhumidha S — Full-Stack Web Developer" },
      {
        property: "og:description",
        content: "React, Python and REST API developer based in Chennai, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ACHIEVEMENTS = [
  { icon: Rocket, value: "3", label: "Projects across AI, web and task management" },
  { icon: Award, value: "2", label: "Certifications — NPTEL Java & MERN stack" },
  { icon: GraduationCap, value: "7.53", label: "CGPA, B.E. Computer Science (2022–2026)" },
];

function Home() {
  return (
    <PageWrap className="max-w-7xl">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="min-w-0">
          <p className="mb-5 text-sm font-semibold text-primary">Full-Stack Web Developer · Chennai, India</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-6xl">
            Madhumidha S.
            <span className="mt-2 block text-2xl font-medium text-muted-foreground sm:text-3xl">Building useful, thoughtful web experiences.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Computer Science graduate focused on React, Python and REST APIs, with experience building projects from interface to database.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/hire">Get in touch <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg"><a href={resumeUrl} download="Madhumidha_S_Resume.pdf"><Download /> Download résumé</a></Button>
          </div>
          <div className="mt-7"><SocialLinks /></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] overflow-hidden border border-border bg-secondary">
            <img src={portraitUrl} alt="Portrait of Madhumidha S" width={413} height={529} fetchPriority="high" className="h-full w-full object-cover object-top" />
          </div>
        </motion.div>
      </section>

      <section className="mt-20 border-y border-border py-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {ACHIEVEMENTS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="grid size-10 shrink-0 place-items-center bg-secondary text-primary"><Icon className="size-5" /></span>
              <div><p className="font-display text-xl font-bold">{value}</p><p className="text-sm text-muted-foreground">{label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden border border-border bg-secondary">
          <img src={mentalHealthImage} alt="Concept illustration for a mental wellbeing chatbot project" width={1408} height={912} loading="lazy" className="aspect-[14/9] h-full w-full object-contain" />
        </div>
        <div className="py-2">
          <p className="text-xs font-semibold uppercase text-primary">Selected project</p>
          <h2 className="mt-3 text-3xl font-bold">Mental Health Bot</h2>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">A Python chatbot concept focused on empathetic conversations, sentiment analysis, mood tracking and crisis-language detection.</p>
          <Button asChild variant="link" className="mt-4 h-auto px-0 text-base">
            <Link to="/projects">Explore selected work <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-8">
        <h2 className="text-2xl font-bold">About</h2>
        <div className="mt-5 grid gap-8 text-muted-foreground md:grid-cols-[1fr_1fr]">
          <p className="leading-7">I graduated with a B.E. in Computer Science and Engineering from Velammal Engineering College, Chennai (2022–2026). I completed a web development internship at Atlanwa Pvt Ltd and in-plant training at Codebind Technologies.</p>
          <p className="leading-7">My work includes React.js, React Hooks and REST APIs, alongside Java, Python and MySQL. I am NPTEL-certified in Java and trained in the MERN stack.</p>
        </div>
      </section>
    </PageWrap>
  );
}
