// ============= Full file contents =============

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

const EMAIL = "madhumidhacse883@gmail.com";
const PHONE = "+91 81489 95967";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Madhumidha S" },
      {
        name: "description",
        content: "Reach Madhumidha S by email, phone or on social for roles and collaborations.",
      },
      { property: "og:title", content: "Contact — Madhumidha S" },
      { property: "og:description", content: "Email, phone and social links — reach out directly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const CONTACTS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
  { label: "Phone", value: PHONE, href: "tel:+918148995967", Icon: Phone },
  { label: "Location", value: "Chennai, India — open to remote", href: undefined, Icon: MapPin },
];

function Contact() {
  return (
    <PageWrap>
      <Heading
        kicker="Say hello"
        title="Contact"
        sub="Reach me directly — email, phone or social. I usually reply within a day."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACTS.map(({ label, value, href, Icon }, i) => {
          const Tag = (href ? "a" : "div") as "a";
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.09, type: "spring", stiffness: 240, damping: 18 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-3xl glass p-7 hover:glow-strong"
              >
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-accent/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <Tag
                  {...(href ? { href } : {})}
                  {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="block"
                >
                  <motion.span
                    whileHover={{ rotate: 12 }}
                    className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary"
                  >
                    <Icon className="size-6" />
                  </motion.span>
                  <h2 className="mt-5 font-display text-xl font-bold">{label}</h2>
                  <p className="mt-1 break-words text-sm text-muted-foreground">{value}</p>
                </Tag>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16">
        <h2 className="mb-5 font-display text-lg font-bold">Find me online</h2>
        <SocialLinks />
      </div>
    </PageWrap>
  );
}
