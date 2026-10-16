// ============= Full file contents =============

import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";
import { Button } from "../components/ui/button";

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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACTS.map(({ label, value, href, Icon }) => (
          <article key={label} className="border-t border-border py-5">
            <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" /></span>
            <h2 className="mt-4 font-display text-lg font-bold">{label}</h2>
            <p className="mt-1 break-words text-sm text-muted-foreground">{value}</p>
            {href && <Button asChild variant="link" className="mt-2 h-auto justify-start px-0">
              <a href={href}>{label === "Email" ? "Write an email" : "Call me"}</a>
            </Button>}
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-5 font-display text-lg font-bold">Find me online</h2>
        <SocialLinks />
      </div>
    </PageWrap>
  );
}
