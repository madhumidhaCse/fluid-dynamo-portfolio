import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "../components/BrandIcons";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Coding Profiles — Madhumidha S" },
      {
        name: "description",
        content: "Find Madhumidha S on GitHub and LinkedIn, or reach out by email or phone.",
      },
      { property: "og:title", content: "Coding Profiles — Madhumidha S" },
      { property: "og:description", content: "GitHub, LinkedIn and direct contact details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Profiles,
});

const PROFILES = [
  {
    name: "GitHub",
    stat: "madhumidhaCse — project source code",
    href: "https://github.com/madhumidhaCse",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    stat: "Madhumidha Santosh — experience & updates",
    href: "https://www.linkedin.com/in/madhumidha-santosh-7189a4279/",
    Icon: Linkedin,
  },
  {
    name: "Email",
    stat: "madhumidhacse883@gmail.com",
    href: "mailto:madhumidhacse883@gmail.com",
    Icon: Mail,
  },
  { name: "Phone", stat: "+91 81489 95967", href: "tel:+918148995967", Icon: Phone },
  { name: "Location", stat: "Chennai, Tamil Nadu", href: "#", Icon: MapPin },
];

function Profiles() {
  return (
    <PageWrap>
      <Heading
        kicker="Where to find me"
        title="Coding Profiles"
        sub="Proof of work and the fastest ways to reach me."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROFILES.map(({ name, stat, href, Icon }, i) => (
          <motion.a
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.09, type: "spring", stiffness: 240, damping: 18 }}
            whileHover={{ y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-3xl glass p-7 hover:glow-strong"
          >
            <span
              aria-hidden
              className="absolute -right-10 -top-10 size-32 rounded-full bg-accent/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <motion.span
              whileHover={{ rotate: 12 }}
              className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary"
            >
              <Icon className="size-6" />
            </motion.span>
            <h2 className="mt-5 font-display text-xl font-bold">{name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{stat}</p>
          </motion.a>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-5 font-display text-lg font-bold">Elsewhere on the internet</h2>
        <SocialLinks />
      </div>
    </PageWrap>
  );
}
