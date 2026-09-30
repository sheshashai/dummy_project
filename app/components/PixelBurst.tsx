import type { CSSProperties } from "react";

// Echoes the pixels breaking off the "T" in the logo. Positions are generated
// from a fixed seed so server and client render the same squares.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const colors = ["var(--cyan)", "var(--blue)", "var(--violet)"];

const squares = (() => {
  const rand = rng(42);
  return Array.from({ length: 64 }, (_, i) => {
    // Skew towards the logo (x = 100%) so the cluster thins out as it drifts left.
    const t = Math.pow(rand(), 0.6);
    const x = t * 100;
    const y = 34 + (rand() - 0.5) * (18 + (1 - t) * 44);
    const size = 4 + Math.round(t * 14 * rand() + 2 * t);
    return {
      key: i,
      style: {
        "--x": `${x}%`,
        "--y": `${y}%`,
        "--s": `${size}px`,
        "--o": (0.25 + t * 0.75).toFixed(2),
        "--c": colors[Math.floor(rand() * colors.length)],
        "--d": `${(0.15 + (1 - t) * 0.9).toFixed(2)}s`,
      } as CSSProperties,
    };
  });
})();

export function PixelBurst() {
  return (
    <div className="pixels" aria-hidden="true">
      {squares.map((sq) => (
        <span key={sq.key} style={sq.style} />
      ))}
    </div>
  );
}
