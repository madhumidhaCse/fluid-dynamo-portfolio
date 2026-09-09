import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageWrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`mx-auto w-full max-w-6xl px-4 pt-28 pb-24 sm:px-6 sm:pt-32 ${className}`}>
      {children}
    </main>
  );
}

export function Heading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, letterSpacing: "0.28em" }}
        transition={{ duration: 0.8 }}
        className="mb-3 text-xs font-semibold uppercase text-primary"
      >
        {kicker}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl font-bold sm:text-6xl"
      >
        <span className="text-gradient animate-shimmer">{title}</span>
      </motion.h1>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
