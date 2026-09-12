import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Rocket, GraduationCap } from "lucide-react";
import { Lazy3D } from "../components/Lazy3D";
import { PageWrap } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhumidha S — Full-Stack & AI Web Developer" },
      {
        name: "description",
        content:
          "B.E. CSE graduate from Chennai building full-stack and AI-driven web apps with React, Python and REST APIs.",
      },
      { property: "og:title", content: "Madhumidha S — Full-Stack & AI Web Developer" },
      {
        property: "og:description",
        content: "React, Python and REST API developer seeking an entry-level software role.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ACHIEVEMENTS = [
  { icon: Rocket, value: "2", label: "AI & React projects built end to end" },
  { icon: Award, value: "2", label: "Certifications — NPTEL Java & MERN stack" },
  { icon: GraduationCap, value: "7.53", label: "CGPA, B.E. Computer Science (2022–2026)" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Home() {
  return (
    <PageWrap>
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-primary"
          >
            <Sparkles className="size-3.5" /> Open to entry-level developer roles
          </motion.span>

          <motion.h1 variants={item} className="mt-6 text-5xl font-bold sm:text-7xl">
            Hi, I&apos;m <span className="text-gradient animate-shimmer">Madhumidha</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-display text-xl text-primary sm:text-2xl">
            Full-Stack Web Developer · AI Enthusiast · Chennai
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-muted-foreground">
            B.E. Computer Science and Engineering graduate with hands-on experience building
            full-stack and AI-driven web applications using React, Python and REST APIs. Certified
            in Java (NPTEL, IIT) and the MERN stack.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link to="/hire">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground glow"
              >
                Hire me <ArrowRight className="size-4" />
              </motion.span>
            </Link>
            <Link to="/projects">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium"
              >
                View projects
              </motion.span>
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[320px] w-full sm:h-[440px]"
        >
          <Lazy3D variant="hero" className="absolute inset-0" />
        </motion.div>
      </section>

      <section className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About me
        </motion.h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl glass p-7 text-muted-foreground"
          >
            <p>
              I graduated with a B.E. in Computer Science and Engineering from Velammal Engineering
              College, Chennai (2022–2026). I completed a web development internship at Atlanwa Pvt
              Ltd and an in-plant training program at Codebind Technologies, delivering real-time
              applications from the interface down to the database.
            </p>
            <p className="mt-4">
              I work mostly with React.js, React Hooks and REST APIs on the front end, and Java,
              Python, MySQL and the basics of NLP and CNNs behind the scenes. I&apos;m a quick,
              independent learner with strong problem-solving skills built through consistent
              practice in data structures and algorithms.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {ACHIEVEMENTS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 rounded-2xl glass p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
