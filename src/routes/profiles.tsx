import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "../components/BrandIcons";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Profiles — Madhumidha S | GitHub & LinkedIn" },
      {
        name: "description",
        content: "Find Madhumidha Santhosham on GitHub and LinkedIn, or reach out by email.",
      },
      { property: "og:title", content: "Coding Profiles — Madhumidha S" },
      { property: "og:description", content: "GitHub, LinkedIn and email for Madhumidha Santhosham." },
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
    stat: "Madhumidha Santhosham — experience & updates",
    href: "https://www.linkedin.com/in/madhumidha-santhosham-7189a4279/",
    Icon: Linkedin,
  },
  {
    name: "Email",
    stat: "madhumidhacse883@gmail.com",
    href: "mailto:madhumidhacse883@gmail.com",
    Icon: Mail,
  },
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
          <article key={name} className="min-w-0 border-t border-border py-5">
            <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary">
              <Icon className="size-6" />
            </span>
            <h2 className="mt-4 font-display text-lg font-bold">{name}</h2>
            {href !== "#" ? (
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 inline-block break-words text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{stat}</a>
            ) : <p className="mt-1 text-sm text-muted-foreground">{stat}</p>}
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-5 font-display text-lg font-bold">Elsewhere on the internet</h2>
        <SocialLinks />
      </div>
    </PageWrap>
  );
}
