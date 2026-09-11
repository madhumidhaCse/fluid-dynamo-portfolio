import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "./BrandIcons";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", Icon: Github },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  { label: "Twitter", href: "https://twitter.com/", Icon: Twitter },
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
            target="_blank"
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
