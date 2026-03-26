import { useI18n } from "../i18n/index";
import QuestionCard from "./QuestionCard";
import Confetti from "./Confetti";

export default function Results({ simuladoQuestions, simuladoAnswers, onBack }) {
  const { t } = useI18n();
  const total = simuladoQuestions.length;
  let correct = 0;
  let byType = { PS: { total: 0, correct: 0 }, DS: { total: 0, correct: 0 }, CR: { total: 0, correct: 0 } };
  simuladoQuestions.forEach((q, i) => {
    byType[q.type].total++;
    if (simuladoAnswers[i] === q.answer) { correct++; byType[q.type].correct++; }
  });
  const pct = Math.round((correct / total) * 100);
  return (
    <div className="home-container fade-in">
      {pct >= 70 && <Confetti />}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div className="score-number" style={{
          background: pct >= 70 ? "linear-gradient(135deg, #69f0ae, #00c2ff)" : pct >= 40 ? "linear-gradient(135deg, #ffab40, #ffd740)" : "linear-gradient(135deg, #ff5252, #ff8a80)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          {pct}%
        </div>
        <div style={{ color: "var(--text-secondary)", fontSize: 16 }}>
          {t("correct_count", { correct, total })}
        </div>
      </div>
      <div className="grid-3-results">
        {[
          { label: t("problem_solving"), d: byType.PS, c: "#00c2ff" },
          { label: t("data_sufficiency"), d: byType.DS, c: "#b388ff" },
          { label: t("critical_reasoning"), d: byType.CR, c: "#69f0ae" },
        ].map(tp => (
          <div key={tp.label} style={{
            background: "var(--bg-card)", borderRadius: 12, padding: 16,
            textAlign: "center", border: "1px solid var(--border)",
          }}>
            <div style={{ color: tp.c, fontSize: 24, fontWeight: 800 }}>
              {tp.d.correct}/{tp.d.total}
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 4 }}>{tp.label}</div>
          </div>
        ))}
      </div>
      {/* Show all questions with answers */}
      <h3 style={{ color: "var(--text)", fontSize: 16, marginBottom: 16 }}>{t("detailed_answers")}</h3>
      {simuladoQuestions.map((q, i) => (
        <QuestionCard
          key={i} question={q} index={i} total={total}
          selected={simuladoAnswers[i]} onSelect={() => {}}
          showResult={true} type={q.type}
        />
      ))}
      <button onClick={onBack} className="btn-primary" style={{
        width: "100%", padding: 16, background: "#00c2ff", border: "none",
        borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#0a1628",
        marginTop: 16,
      }}>
        {t("back_to_start")}
      </button>
    </div>
  );
}
