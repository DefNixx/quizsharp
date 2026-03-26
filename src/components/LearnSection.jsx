import { SECTIONS } from "../constants";
import { useI18n } from "../i18n/index";

export default function LearnSection({ learnData, onBack, onStartPractice }) {
  const { t } = useI18n();
  const prac = learnData.key === SECTIONS.LEARN_PS ? SECTIONS.PRACTICE_PS
    : learnData.key === SECTIONS.LEARN_DS ? SECTIONS.PRACTICE_DS : SECTIONS.PRACTICE_CR;

  return (
    <div className="section-container fade-in">
      <button onClick={onBack} className="btn-back" style={{
        background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer",
        fontSize: 13, marginBottom: 16, padding: 0,
      }}>{t("back")}</button>
      <h1 style={{ color: learnData.color, fontSize: 28, fontWeight: 800, marginBottom: 24 }}>
        {learnData.icon} {learnData.title}
      </h1>
      {learnData.content.map((c, i) => (
        <div key={i} style={{
          background: "var(--bg-card)", borderRadius: 14, padding: "20px 22px",
          marginBottom: 12, border: "1px solid var(--border)",
        }}>
          <h3 style={{ color: learnData.color, fontSize: 15, fontWeight: 700, marginTop: 0, marginBottom: 10 }}>
            {c.h}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, margin: 0, whiteSpace: "pre-line" }}>
            {c.p}
          </p>
        </div>
      ))}
      <button onClick={() => onStartPractice(prac)} className="btn-primary" style={{
        marginTop: 12, width: "100%", padding: 16, background: learnData.color,
        border: "none", borderRadius: 10, cursor: "pointer",
        fontSize: 14, fontWeight: 700, color: "#0a1628",
      }}>
        {t("practice_button", { type: learnData.title })}
      </button>
    </div>
  );
}
