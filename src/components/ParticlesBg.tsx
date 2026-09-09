import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

let enginePromise: Promise<void> | null = null;

export function ParticlesBg() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    enginePromise ??= initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    let active = true;
    enginePromise.then(() => active && setReady(true)).catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 -z-10"
      options={{
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
      }}
    />
  );
}

export default ParticlesBg;
