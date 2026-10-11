import { useCallback, useEffect, useMemo, useState } from "react";
import type { Engine } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBg() {
  const [palette, setPalette] = useState<string[]>([]);
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setPalette(["--particle-primary", "--particle-accent", "--particle-neutral"].map((token) => styles.getPropertyValue(token).trim()));
  }, []);
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () =>
      ({
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        background: { color: "transparent" },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["grab", "bubble"] },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.5 } },
            bubble: { distance: 180, size: 5, duration: 2, opacity: 0.9 },
          },
        },
        particles: {
          number: { value: 70, density: { enable: true, width: 1200, height: 900 } },
          color: { value: palette },
          links: { enable: true, color: palette[0], distance: 130, opacity: 0.08, width: 1 },
          move: { enable: true, speed: 0.7, outModes: { default: "out" } },
          opacity: { value: { min: 0.08, max: 0.25 } },
          size: { value: { min: 0.6, max: 2.4 } },
        },
      }) as const,
    [palette],
  );

  if (palette.length === 0) return null;

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        className="pointer-events-none fixed inset-0 -z-10"
        options={options}
      />
    </ParticlesProvider>
  );
}

export default ParticlesBg;
