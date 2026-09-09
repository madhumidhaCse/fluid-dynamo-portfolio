import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Rocket, Users } from "lucide-react";
import { Lazy3D } from "../components/Lazy3D";
import { PageWrap } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhumidha S — Creative Developer & Engineer" },
      {
        name: "description",
        content:
          "Full-stack developer crafting immersive, motion-rich web experiences with React, Three.js and modern tooling.",
      },
      { property: "og:title", content: "Madhumidha S — Creative Developer & Engineer" },
      {
        property: "og:description",
        content: "Full-stack developer crafting immersive, motion-rich web experiences.",
      },
    ],
  }),
  component: Home,
});

const ACHIEVEMENTS = [
  { icon: Award, value: "12+", label: "Hackathon wins & certifications" },
  { icon: Rocket, value: "25+", label: "Projects shipped end-to-end" },
  { icon: Users, value: "500+", label: "Coding problems solved" },
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
            <Sparkles className="size-3.5" /> Available for opportunities
          </motion.span>

          <motion.h1 variants={item} className="mt-6 text-5xl font-bold sm:text-7xl">
            Hi, I&apos;m <span className="text-gradient animate-shimmer">Madhumidha</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-display text-xl text-primary sm:text-2xl">
            Full-Stack Developer · Creative Engineer
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-muted-foreground">
            I design and build immersive digital products — blending clean engineering with 3D,
            motion and interaction design. I care about performance, accessibility and the small
            details that make an interface feel alive.
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
              I&apos;m a computer science engineer who fell in love with the web. My work sits at
              the intersection of solid backend thinking and expressive frontend craft — from
              designing APIs and data models to sculpting shaders and micro-interactions.
            </p>
            <p className="mt-4">
              Recently I&apos;ve been focused on React, TypeScript, real-time systems and WebGL. When
              I&apos;m not building, I&apos;m solving algorithm problems, writing about what I learn,
              or mentoring juniors getting into tech.
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
