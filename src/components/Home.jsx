import { SECTIONS } from "../constants";
import { PS_QUESTIONS, DS_QUESTIONS, CR_QUESTIONS } from "../data/questions";

export default function Home({ learnSections, onNavigate, onStartPractice, onStartSimulado, history = [] }) {
  return (
    <div className="home-container fade-in">
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 className="app-title">
          QuizSharp
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 8 }}>
          Pratique, aprenda e domine qualquer assunto
        </p>
      </div>

      {/* Learn section */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ color: "var(--text)", fontSize: 16, fontWeight: 600, marginBottom: 16, letterSpacing: 1 }}>
          📚 APRENDER
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {learnSections.map(ls => (
            <button key={ls.key} onClick={() => onNavigate(ls.key)} className="btn-card" style={{
              padding: "16px 20px", textAlign: "left",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <span style={{ fontSize: 28 }}>{ls.icon}</span>
              <div>
                <div style={{ color: ls.color, fontSize: 15, fontWeight: 700 }}>{ls.title}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 2 }}>Explicação detalhada + estratégias</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Practice section */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ color: "var(--text)", fontSize: 16, fontWeight: 600, marginBottom: 16, letterSpacing: 1 }}>
          🎯 PRATICAR POR TIPO
        </h2>
        <div className="grid-3">
          {[
            { s: SECTIONS.PRACTICE_PS, label: "Problem Solving", n: PS_QUESTIONS.length, c: "#00c2ff" },
            { s: SECTIONS.PRACTICE_DS, label: "Data Sufficiency", n: DS_QUESTIONS.length, c: "#b388ff" },
            { s: SECTIONS.PRACTICE_CR, label: "Critical Reasoning", n: CR_QUESTIONS.length, c: "#69f0ae" },
          ].map(p => (
            <button key={p.s} onClick={() => onStartPractice(p.s)} className="btn-card" style={{
              padding: "20px 12px", textAlign: "center",
            }}>
              <div style={{ color: p.c, fontSize: 24, fontWeight: 800 }}>{p.n}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 11, marginTop: 4, lineHeight: 1.4 }}>{p.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Simulado */}
      <button onClick={onStartSimulado} className="btn-simulado" style={{
        width: "100%", padding: "20px",
        background: "linear-gradient(135deg, #00365c, #1a0a4e, #0a3a2a)",
        border: "1px solid var(--border-hover)",
        borderRadius: 14, cursor: "pointer", textAlign: "center",
      }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#e8f0f8", letterSpacing: 1 }}>
          🏆 SIMULADO COMPLETO
        </div>
        <div style={{ color: "#8a9aaa", fontSize: 12, marginTop: 6 }}>
          15 questões • 2 horas • Cronometrado • Sem gabarito durante
        </div>
      </button>

      {/* Histórico */}
      {history.length > 0 && (() => {
        const sorted = [...history];
        const avg = Math.round(sorted.reduce((s, h) => s + h.pct, 0) / sorted.length);
        const best = Math.max(...sorted.map(h => h.pct));
        const last = sorted[sorted.length - 1];
        const prev = sorted.length >= 2 ? sorted[sorted.length - 2] : null;
        const trend = prev ? last.pct - prev.pct : 0;
        return (
          <div style={{ marginTop: 32 }}>
            <h2 style={{ color: "var(--text)", fontSize: 16, fontWeight: 600, marginBottom: 16, letterSpacing: 1 }}>
              📈 HISTÓRICO
            </h2>

            {/* Stats cards */}
            <div className="grid-3" style={{ marginBottom: 16 }}>
              <div style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                padding: "14px 12px", textAlign: "center",
              }}>
                <div style={{ color: "#00c2ff", fontSize: 22, fontWeight: 800 }}>{avg}%</div>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}>Média</div>
              </div>
              <div style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                padding: "14px 12px", textAlign: "center",
              }}>
                <div style={{ color: "#69f0ae", fontSize: 22, fontWeight: 800 }}>{best}%</div>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}>Melhor</div>
              </div>
              <div style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                padding: "14px 12px", textAlign: "center",
              }}>
                <div style={{
                  fontSize: 22, fontWeight: 800,
                  color: trend > 0 ? "#69f0ae" : trend < 0 ? "#ff6666" : "var(--text-muted)",
                }}>
                  {trend > 0 ? "↑" : trend < 0 ? "↓" : "→"} {Math.abs(trend)}%
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}>Tendência</div>
              </div>
            </div>

            {/* Mini bar chart */}
            {sorted.length >= 2 && (
              <div style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                padding: "16px", marginBottom: 16,
              }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
                  {sorted.slice(-10).map((h, i) => (
                    <div key={i} style={{
                      flex: 1, borderRadius: "4px 4px 0 0",
                      height: `${Math.max(h.pct, 5)}%`,
                      background: h.pct >= 70 ? "#69f0ae" : h.pct >= 40 ? "#ffd740" : "#ff6666",
                      opacity: 0.7 + (i / sorted.slice(-10).length) * 0.3,
                      transition: "height 0.3s",
                    }} title={`${h.pct}%`} />
                  ))}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: 10, marginTop: 6, textAlign: "center" }}>
                  Últimos {Math.min(sorted.length, 10)} simulados
                </div>
              </div>
            )}

            {/* History list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {sorted.slice().reverse().map((h, i) => (
                <div key={i} style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                  padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>
                    {new Date(h.date).toLocaleDateString("pt-BR")}
                  </span>
                  <span style={{
                    fontSize: 15, fontWeight: 700,
                    color: h.pct >= 70 ? "#69f0ae" : h.pct >= 40 ? "#ffd740" : "#ff6666",
                  }}>
                    {h.correct}/{h.total} ({h.pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
