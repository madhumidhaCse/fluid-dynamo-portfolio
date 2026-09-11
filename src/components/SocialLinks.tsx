import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/madhumidha-santosh-7189a4279/",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/madhumidhaCse", Icon: Github },
  { label: "Email", href: "mailto:madhumidhacse883@gmail.com", Icon: Mail },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIALS.map(({ label, href, Icon }, i) => (
        <motion.li
          key={label}
          initial={{ opacity: 0, y: 14, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i, type: "spring", stiffness: 300, damping: 18 }}
        >
          <motion.a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.18, rotate: -8, y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="grid size-11 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-primary hover:glow"
          >
            <Icon className="size-5" />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
