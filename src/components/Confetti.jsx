import { useEffect, useState } from "react";

const COLORS = ["#69f0ae", "#00c2ff", "#b388ff", "#ffd740", "#ff8a80", "#80d8ff"];
const PARTICLE_COUNT = 40;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function Confetti() {
  const [particles] = useState(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: randomBetween(0, 100),
      delay: randomBetween(0, 1.5),
      duration: randomBetween(2, 4),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(6, 12),
      rotation: randomBetween(0, 360),
    }))
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 1000, overflow: "hidden",
    }}>
      {particles.map(p => (
        <div key={p.id} className="confetti-particle" style={{
          position: "absolute",
          left: `${p.left}%`,
          top: -20,
          width: p.size,
          height: p.size * 0.6,
          background: p.color,
          borderRadius: 2,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          transform: `rotate(${p.rotation}deg)`,
        }} />
      ))}
    </div>
  );
}
