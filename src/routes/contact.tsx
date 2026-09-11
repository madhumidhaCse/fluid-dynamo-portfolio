import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Madhumidha S" },
      {
        name: "description",
        content: "Get in touch for roles, freelance projects or collaborations.",
      },
      { property: "og:title", content: "Contact — Madhumidha S" },
      { property: "og:description", content: "Reach out by email or on social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageWrap>
      <Heading
        kicker="Say hello"
        title="Contact"
        sub="Tell me about your idea — I usually reply within a day."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl glass p-7"
        >
          <label className="block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl bg-secondary px-4 py-3 outline-none ring-primary/50 focus:ring-2"
          />

          <label className="mt-5 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl bg-secondary px-4 py-3 outline-none ring-primary/50 focus:ring-2"
          />

          <label className="mt-5 block text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-xl bg-secondary px-4 py-3 outline-none ring-primary/50 focus:ring-2"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground glow"
          >
            <Send className="size-4" /> Send message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-8 rounded-3xl glass p-7"
        >
          <div className="space-y-5">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary"
            >
              <Mail className="size-5" /> hello@example.com
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-5" /> India — open to remote
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-lg font-bold">Find me online</h2>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </PageWrap>
  );
}
