import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Github, Terminal, Trophy, Binary } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Coding Profiles — Madhumidha S" },
      {
        name: "description",
        content: "Find me on GitHub, LeetCode, SkillRack, HackerRank and CodeChef.",
      },
      { property: "og:title", content: "Coding Profiles — Madhumidha S" },
      { property: "og:description", content: "GitHub, LeetCode, SkillRack, HackerRank, CodeChef." },
    ],
  }),
  component: Profiles,
});

const PROFILES = [
  { name: "GitHub", stat: "80+ repositories", href: "https://github.com/", Icon: Github },
  { name: "LeetCode", stat: "500+ problems solved", href: "https://leetcode.com/", Icon: Code2 },
  { name: "SkillRack", stat: "1200+ points", href: "https://www.skillrack.com/", Icon: Terminal },
  { name: "HackerRank", stat: "5★ Problem Solving", href: "https://www.hackerrank.com/", Icon: Trophy },
  { name: "CodeChef", stat: "3★ competitive coder", href: "https://www.codechef.com/", Icon: Binary },
];

function Profiles() {
  return (
    <PageWrap>
      <Heading
        kicker="Where I code"
        title="Coding Profiles"
        sub="Proof of work — practice, contests and open source."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROFILES.map(({ name, stat, href, Icon }, i) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
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
