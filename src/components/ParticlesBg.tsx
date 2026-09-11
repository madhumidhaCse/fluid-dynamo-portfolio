import { useCallback, useMemo } from "react";
import type { Engine } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBg() {
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
          color: { value: ["#66e6e0", "#a884ff", "#ffffff"] },
          links: { enable: true, color: "#7de3e0", distance: 130, opacity: 0.18, width: 1 },
          move: { enable: true, speed: 0.7, outModes: { default: "out" } },
          opacity: { value: { min: 0.15, max: 0.6 } },
          size: { value: { min: 0.6, max: 2.4 } },
        },
      }) as const,
    [],
  );

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
