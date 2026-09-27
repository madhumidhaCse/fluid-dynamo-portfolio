import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import { PageWrap } from "../components/Section";
import { Lazy3D } from "../components/Lazy3D";
import { SocialLinks } from "../components/SocialLinks";

const EMAIL = "madhumidhacse883@gmail.com";
const PHONE = "+91 81489 95967";
const PHONE_TEL = "tel:+918148995967";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire Me — Madhumidha S" },
      {
        name: "description",
        content: "Reach Madhumidha S directly by email or phone for roles and freelance work.",
      },
      { property: "og:title", content: "Hire Me — Madhumidha S" },
      {
        property: "og:description",
        content: "Available for full-time roles and freelance product work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
            I&apos;m open to full-time roles, internships and freelance collaborations. Reach me
            directly — fast replies, honest timelines.
          </motion.p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 18 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground glow-strong"
            >
              <Mail className="size-5" /> {EMAIL}
            </motion.a>

            <motion.a
              href={PHONE_TEL}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-lg font-medium hover:glow"
            >
              <Phone className="size-5" /> {PHONE}
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" /> Chennai, Tamil Nadu — open to remote
          </motion.p>

          <motion.div
            aria-hidden
            className="mx-auto mt-10 h-px w-2/3 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            <p className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Zap className="size-4 text-primary" /> Find me online
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrap>
  );
}
