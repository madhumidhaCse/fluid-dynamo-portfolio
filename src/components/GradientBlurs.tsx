export function GradientBlurs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="animate-blob absolute -top-40 -left-32 h-[45rem] w-[45rem] rounded-full bg-primary/20 blur-[140px]" />
      <div
        className="animate-blob absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-accent/25 blur-[150px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute -bottom-52 left-1/4 h-[38rem] w-[38rem] rounded-full bg-violet/20 blur-[160px]"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}
