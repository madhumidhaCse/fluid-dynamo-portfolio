import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Zap } from "lucide-react";
import { PageWrap } from "../components/Section";
import { Lazy3D } from "../components/Lazy3D";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire Me — Madhumidha S" },
      {
        name: "description",
        content: "Let's build something exceptional together. Available for roles and freelance work.",
      },
      { property: "og:title", content: "Hire Me — Madhumidha S" },
      {
        property: "og:description",
        content: "Available for full-time roles and freelance product work.",
      },
    ],
  }),
  component: Hire,
});

function Hire() {
  return (
    <PageWrap className="relative">
      <Lazy3D variant="orbs" className="pointer-events-none absolute inset-x-0 top-10 h-[420px] opacity-60" />

      <div className="relative grid min-h-[60vh] place-items-center text-center">
        <div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-xs font-semibold uppercase text-primary"
          >
            Let&apos;s work together
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl"
          >
            Got an idea that deserves to{" "}
            <span className="text-gradient animate-shimmer">feel incredible?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            I&apos;m open to full-time roles, internships and freelance collaborations. Fast replies,
            honest timelines, and work I&apos;m proud to put my name on.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 18 }}
                whileHover={{ scale: 1.08, filter: "blur(0px)" }}
                whileTap={{ scale: 0.94 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-9 py-4 text-lg font-semibold text-primary-foreground glow-strong"
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-accent"
                  initial={{ x: "-110%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
                <Zap className="size-5" /> Hire me
              </motion.span>
            </Link>

            <motion.a
              href="mailto:hello@example.com"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-lg font-medium hover:glow"
            >
              <Mail className="size-5" /> Contact
            </motion.a>
          </div>

          <motion.div
            aria-hidden
            className="mx-auto mt-16 h-px w-2/3 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </div>
    </PageWrap>
  );
}
