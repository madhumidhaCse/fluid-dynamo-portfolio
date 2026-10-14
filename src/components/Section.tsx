import type { ReactNode } from "react";

export function PageWrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8 sm:pt-32 ${className}`}>
      {children}
    </main>
  );
}

export function Heading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 border-b border-border pb-8">
      <p className="mb-3 text-xs font-semibold uppercase text-primary">
        {kicker}
      </p>
      <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
      {sub && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}
