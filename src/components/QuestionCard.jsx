export default function QuestionCard({ question, index, total, selected, onSelect, showResult, type }) {
  const isCorrect = selected === question.answer;
  const optionLabels = ["A", "B", "C", "D", "E"];
  return (
    <div className="question-card fade-in" role="region" aria-label={`Questão ${index + 1} de ${total}`}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 16,
      }}>
        <span style={{
          background: type === "PS" ? "#00365c" : type === "DS" ? "#2d1a4e" : "#1a3a2a",
          color: type === "PS" ? "#00c2ff" : type === "DS" ? "#b388ff" : "#69f0ae",
          padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
          letterSpacing: 1, textTransform: "uppercase",
        }}>
          {type === "PS" ? "Problem Solving" : type === "DS" ? "Data Sufficiency" : "Critical Reasoning"}
        </span>
        <span style={{ color: "var(--text-muted)", fontSize: 13 }} aria-hidden="true">
          Questão {index + 1} de {total}
        </span>
      </div>
      <p style={{
        color: "var(--text)", fontSize: 15, lineHeight: 1.7,
        whiteSpace: "pre-line", marginBottom: 20,
      }}>
        {question.q}
      </p>
      <div role="radiogroup" aria-label="Alternativas" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {question.options.map((opt, i) => {
          let bg = "var(--bg-deep)";
          let border = "var(--border)";
          let color = "var(--text-secondary)";
          if (showResult) {
            if (i === question.answer) { bg = "var(--correct-bg)"; border = "#00cc66"; color = "#69f0ae"; }
            else if (i === selected && !isCorrect) { bg = "var(--incorrect-bg)"; border = "#cc3333"; color = "#ff6666"; }
          } else if (i === selected) {
            bg = "#0a2a4e"; border = "#00c2ff"; color = "var(--text)";
          }
          return (
            <button key={i} onClick={() => !showResult && onSelect(i)}
              className="btn-option" data-locked={showResult ? "true" : "false"}
              role="radio" aria-checked={i === selected}
              aria-label={`Alternativa ${optionLabels[i]}: ${opt}`}
              aria-disabled={showResult}
              style={{
              display: "flex", alignItems: "flex-start", gap: 12,
              background: bg, border: `1.5px solid ${border}`,
              borderRadius: 10, padding: "12px 16px", cursor: showResult ? "default" : "pointer",
              textAlign: "left", width: "100%",
              color, fontSize: 14, lineHeight: 1.6,
            }}>
              <span aria-hidden="true" style={{
                fontWeight: 700, fontSize: 13, minWidth: 24, height: 24,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 6, background: i === selected ? (showResult ? (i === question.answer ? "#00cc66" : "#cc3333") : "#00c2ff") : "var(--bg-subtle)",
                color: i === selected ? "#fff" : "var(--text-muted)",
                flexShrink: 0, marginTop: 1,
              }}>
                {optionLabels[i]}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      {showResult && (
        <div role="alert" style={{
          marginTop: 16, padding: 16, borderRadius: 10,
          background: isCorrect ? "var(--correct-bg)" : "var(--incorrect-bg)",
          border: `1px solid ${isCorrect ? "var(--correct-border)" : "var(--incorrect-border)"}`,
        }}>
          <div style={{
            fontSize: 13, fontWeight: 700, marginBottom: 8,
            color: isCorrect ? "#69f0ae" : "#ff6666",
          }}>
            {isCorrect ? "✓ Correto!" : "✗ Incorreto"}
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
