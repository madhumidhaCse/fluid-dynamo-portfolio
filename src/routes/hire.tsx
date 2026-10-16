import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import { PageWrap } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";
import { Button } from "../components/ui/button";

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
      <div className="relative grid min-h-[60vh] place-items-center text-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
            Let&apos;s build something useful.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            I&apos;m open to full-time opportunities and collaborations. Reach me directly by email or phone.
          </motion.p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg"><a href={`mailto:${EMAIL}`}><Mail /> {EMAIL}</a></Button>
            <Button asChild variant="outline" size="lg"><a href={PHONE_TEL}><Phone /> {PHONE}</a></Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" /> Chennai, Tamil Nadu — open to remote
          </motion.p>

          <div aria-hidden="true" className="mx-auto mt-10 h-px w-2/3 bg-border" />

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
