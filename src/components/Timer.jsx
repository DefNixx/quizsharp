import { useState, useEffect } from "react";
import { useI18n } from "../i18n/index";

export default function Timer({ seconds, onEnd }) {
  const { t } = useI18n();
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) { onEnd(); return; }
    const timer = setTimeout(() => setLeft(l => l - 1), 1000);
    return () => clearTimeout(timer);
  }, [left]);
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  const pct = (left / seconds) * 100;
  const urgent = pct < 15;
  const timeLabel = h > 0
    ? t("time_hms", { h, m, s })
    : t("time_ms", { m, s });
  return (
    <div role="timer" aria-label={t("time_remaining", { time: timeLabel })} style={{
      position: "sticky", top: 0, zIndex: 100,
      background: urgent ? "var(--timer-urgent-bg)" : "var(--timer-bg)",
      borderBottom: `2px solid ${urgent ? "#ff4444" : "var(--border)"}`,
      padding: "12px 20px", display: "flex", alignItems: "center", gap: 16,
    }}>
      <div style={{ flex: 1, height: 6, borderRadius: 3, background: "var(--bg-subtle)" }}>
        <div style={{
          height: "100%", borderRadius: 3,
          width: `${pct}%`,
          background: urgent ? "#ff4444" : "linear-gradient(90deg, #00c2ff, #00ff88)",
          transition: "width 1s linear, background 0.5s",
        }} />
      </div>
      <span style={{
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: 18, fontWeight: 700, letterSpacing: 2,
        color: urgent ? "#ff6666" : "#00c2ff",
        minWidth: 90, textAlign: "right",
      }}>
        {h > 0 && `${h}:`}{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
      </span>
    </div>
  );
}
