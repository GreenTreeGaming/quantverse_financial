"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -20 },
        background: {
          color: {
            value: "#000000",
          },
        },
        particles: {
          color: { value: "#6DFF9E" },
          links: {
            color: "#6DFF9E",
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.3 },
        },
        detectRetina: true,
      }}
    />
  );
}