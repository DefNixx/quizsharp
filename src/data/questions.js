export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Problem Solving (30 questions) ───

export const PS_QUESTIONS = [
  // #1 — Descontos sequenciais
  {
    q: "Uma loja oferece 20% de desconto em um produto que custa R$150. Se o cliente tem um cupom adicional de 10% sobre o preço já com desconto, qual o valor final?",
    options: ["R$105,00", "R$108,00", "R$112,50", "R$110,00", "R$100,00"],
    answer: 1,
    explanation: "Primeiro desconto: 150 × 0,80 = R$120. Segundo desconto sobre R$120: 120 × 0,90 = R$108. Cuidado: os descontos são aplicados sequencialmente, não somados (20%+10% ≠ 30%).",
  },
  // #2 — Produção proporcional
  {
    q: "Se 3 máquinas produzem 120 peças em 4 horas, quantas peças 5 máquinas produzem em 6 horas?",
    options: ["200", "250", "300", "360", "400"],
    answer: 2,
    explanation: "Taxa por máquina por hora: 120 / (3 × 4) = 10 peças. Com 5 máquinas por 6 horas: 5 × 6 × 10 = 300 peças.",
  },
  // #3 — Porcentagem ponderada
  {
    q: "Em uma sala, 60% são mulheres. Se 75% das mulheres e 40% dos homens aprovaram uma proposta, qual a porcentagem total de aprovação?",
    options: ["55%", "57%", "59%", "61%", "63%"],
    answer: 3,
    explanation: "Considere 100 pessoas: 60 mulheres, 40 homens. Aprovaram: 60×0,75 + 40×0,40 = 45 + 16 = 61. Total = 61/100 = 61%.",
  },
  // #4 — Juros compostos
  {
    q: "Um investimento rende 8% ao ano com juros compostos. Qual o valor aproximado de R$10.000 após 2 anos?",
    options: ["R$11.600", "R$11.664", "R$11.800", "R$12.000", "R$10.800"],
    answer: 1,
    explanation: "Juros compostos: 10.000 × (1,08)² = 10.000 × 1,1664 = R$11.664,00.",
  },
  // #5 — Arranjo
  {
    q: "De quantas maneiras diferentes 5 pessoas podem se sentar em uma fila de 3 cadeiras?",
    options: ["10", "15", "20", "60", "120"],
    answer: 3,
    explanation: "Arranjo A(5,3) = 5!/(5-3)! = 5×4×3 = 60.",
  },
  // #6 — Raízes de equação quadrática
  {
    q: "Se x² - 5x + 6 = 0, qual é a soma dos valores possíveis de 2x?",
    options: ["5", "6", "10", "12", "8"],
    answer: 2,
    explanation: "As raízes são x=2 e x=3 (soma das raízes = 5). A soma de 2x: 2(2) + 2(3) = 4 + 6 = 10.",
  },
  // #7 — Trabalho conjunto (torneiras)
  {
    q: "Um tanque é preenchido pela torneira A em 6 horas e pela torneira B em 4 horas. Se ambas são abertas ao mesmo tempo, em quanto tempo o tanque enche?",
    options: ["2h", "2h12min", "2h24min", "2h30min", "3h"],
    answer: 2,
    explanation: "Taxa A = 1/6 por hora, Taxa B = 1/4 por hora. Juntas: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 por hora. Tempo = 12/5 = 2,4 horas = 2h24min.",
  },
  // #8 — Probabilidade complementar
  {
    q: "A probabilidade de chover na segunda é 30% e na terça é 40%, de forma independente. Qual a probabilidade de chover em pelo menos um dos dois dias?",
    options: ["58%", "60%", "70%", "42%", "50%"],
    answer: 0,
    explanation: "P(pelo menos um) = 1 - P(nenhum) = 1 - (0,70 × 0,60) = 1 - 0,42 = 0,58 = 58%.",
  },
  // #9 — Razão e proporção
  {
    q: "Uma receita de bolo usa farinha e açúcar na razão 3:1. Se João usou 450 g de farinha, quanto de açúcar ele usou?",
    options: ["100 g", "150 g", "200 g", "225 g", "300 g"],
    answer: 1,
    explanation: "Razão farinha:açúcar = 3:1. Se farinha = 450, açúcar = 450/3 = 150 g.",
  },
  // #10 — Velocidade média
  {
    q: "Um carro percorre 120 km a 60 km/h na ida e 120 km a 40 km/h na volta. Qual a velocidade média de toda a viagem?",
    options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h", "55 km/h"],
    answer: 0,
    explanation: "Distância total = 240 km. Tempo total = 120/60 + 120/40 = 2 + 3 = 5 h. Velocidade média = 240/5 = 48 km/h. Não é a média aritmética das velocidades!",
  },
  // #11 — Trabalho conjunto (trabalhadores)
  {
    q: "Ana termina um trabalho em 10 dias e Beatriz em 15 dias. Trabalhando juntas, em quantos dias completam o trabalho?",
    options: ["5 dias", "6 dias", "7 dias", "8 dias", "12 dias"],
    answer: 1,
    explanation: "Taxa de Ana = 1/10 por dia. Taxa de Beatriz = 1/15 por dia. Juntas: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Tempo = 6 dias.",
  },
  // #12 — Mistura de soluções
  {
    q: "Uma solução A tem 20% de sal e uma solução B tem 50% de sal. Para obter 600 ml de solução a 30%, quantos ml de A devem ser usados?",
    options: ["200 ml", "300 ml", "350 ml", "400 ml", "450 ml"],
    answer: 3,
    explanation: "0,20x + 0,50(600 - x) = 0,30 × 600 → 0,20x + 300 - 0,50x = 180 → -0,30x = -120 → x = 400 ml de A.",
  },
  // #13 — Combinação
  {
    q: "De quantas maneiras um comitê de 3 pessoas pode ser escolhido de um grupo de 7?",
    options: ["21", "35", "42", "105", "210"],
    answer: 1,
    explanation: "Combinação C(7,3) = 7! / (3! × 4!) = (7×6×5) / (3×2×1) = 35.",
  },
  // #14 — Probabilidade condicional (sem reposição)
  {
    q: "Em uma urna com 5 bolas vermelhas e 3 azuis, retira-se uma bola sem reposição. Se a primeira bola retirada for vermelha, qual a probabilidade de a segunda também ser vermelha?",
    options: ["4/7", "5/8", "2/7", "5/7", "1/2"],
    answer: 0,
    explanation: "Após retirar 1 vermelha: restam 4 vermelhas e 3 azuis = 7 bolas. P(2ª vermelha) = 4/7.",
  },
  // #15 — Triângulo retângulo (área)
  {
    q: "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Qual é a área desse triângulo?",
    options: ["14 cm²", "24 cm²", "28 cm²", "48 cm²", "10 cm²"],
    answer: 1,
    explanation: "Área = (base × altura) / 2 = (6 × 8) / 2 = 24 cm².",
  },
  // #16 — Círculo (aumento de área)
  {
    q: "Se o raio de um círculo é aumentado em 50%, em quantos por cento a área aumenta?",
    options: ["50%", "75%", "100%", "125%", "150%"],
    answer: 3,
    explanation: "Novo raio = 1,5r. Nova área = π(1,5r)² = 2,25πr². A área original é πr². Aumento = (2,25 - 1)/1 = 1,25 = 125%.",
  },
  // #17 — Progressão aritmética (soma)
  {
    q: "Em uma progressão aritmética, o primeiro termo é 3 e a razão é 4. Qual é a soma dos 10 primeiros termos?",
    options: ["200", "210", "220", "230", "240"],
    answer: 1,
    explanation: "S₁₀ = (10/2) × [2×3 + (10-1)×4] = 5 × (6 + 36) = 5 × 42 = 210.",
  },
  // #18 — Progressão geométrica (termo)
  {
    q: "O primeiro termo de uma PG é 2 e a razão é 3. Qual é o 5º termo?",
    options: ["54", "81", "162", "243", "486"],
    answer: 2,
    explanation: "a₅ = a₁ × q⁴ = 2 × 3⁴ = 2 × 81 = 162.",
  },
  // #19 — Média ponderada
  {
    q: "Um aluno tirou 7 na prova com peso 3 e 9 na prova com peso 2. Qual sua média ponderada?",
    options: ["7,5", "7,8", "8,0", "8,2", "8,5"],
    answer: 1,
    explanation: "Média ponderada = (7×3 + 9×2) / (3+2) = (21 + 18) / 5 = 39/5 = 7,8.",
  },
  // #20 — Juros simples
  {
    q: "Um capital de R$5.000 é aplicado a juros simples de 12% ao ano por 3 anos. Qual o montante final?",
    options: ["R$5.600", "R$6.200", "R$6.400", "R$6.800", "R$7.000"],
    answer: 3,
    explanation: "Juros = 5.000 × 0,12 × 3 = R$1.800. Montante = 5.000 + 1.800 = R$6.800.",
  },
  // #21 — Módulo (valor absoluto)
  {
    q: "Se |2x - 6| = 10, qual é a soma de todos os valores possíveis de x?",
    options: ["3", "4", "6", "8", "10"],
    answer: 2,
    explanation: "Caso 1: 2x - 6 = 10 → x = 8. Caso 2: 2x - 6 = -10 → x = -2. Soma = 8 + (-2) = 6.",
  },
  // #22 — Expoentes
  {
    q: "Se 2ˣ = 32, qual o valor de 2ˣ⁻²?",
    options: ["4", "8", "16", "30", "128"],
    answer: 1,
    explanation: "2ˣ = 32 = 2⁵, então x = 5. 2⁵⁻² = 2³ = 8.",
  },
  // #23 — Fatoração
  {
    q: "Se x² - 9 = 0 e x > 0, qual o valor de x³ - 27?",
    options: ["0", "9", "18", "27", "54"],
    answer: 0,
    explanation: "x² = 9 e x > 0 → x = 3. x³ - 27 = 27 - 27 = 0.",
  },
  // #24 — Aumento e desconto (ida e volta)
  {
    q: "O preço de uma ação subiu 25% em um mês e caiu 20% no mês seguinte. Em relação ao preço original, a ação está:",
    options: ["5% mais cara", "No mesmo preço", "5% mais barata", "1% mais cara", "1% mais barata"],
    answer: 1,
    explanation: "Preço × 1,25 × 0,80 = Preço × 1,00. A ação voltou ao preço original.",
  },
  // #25 — Lucro percentual
  {
    q: "Um comerciante comprou um produto por R$80 e o vendeu por R$100. Qual o percentual de lucro sobre o preço de custo?",
    options: ["15%", "20%", "25%", "30%", "80%"],
    answer: 2,
    explanation: "Lucro = 100 - 80 = R$20. Percentual sobre custo = 20/80 = 0,25 = 25%.",
  },
  // #26 — Encontro de móveis (velocidade)
  {
    q: "Dois trens partem ao mesmo tempo de cidades distantes 300 km, em sentidos opostos (um ao encontro do outro). Um vai a 80 km/h e o outro a 70 km/h. Em quanto tempo se encontram?",
    options: ["1h30min", "2h", "2h30min", "3h", "3h30min"],
    answer: 1,
    explanation: "Velocidade de aproximação = 80 + 70 = 150 km/h. Tempo = 300/150 = 2 h.",
  },
  // #27 — Conjuntos (inclusão-exclusão)
  {
    q: "Quantos números inteiros entre 1 e 100 (inclusive) são divisíveis por 3 ou por 5?",
    options: ["33", "39", "40", "46", "47"],
    answer: 4,
    explanation: "Divisíveis por 3: 33. Divisíveis por 5: 20. Divisíveis por 15 (ambos): 6. Total = 33 + 20 - 6 = 47.",
  },
  // #28 — Conjuntos (Venn)
  {
    q: "Em uma turma de 40 alunos, 25 falam inglês, 18 falam espanhol e 7 falam ambos. Quantos não falam nenhum dos dois?",
    options: ["2", "4", "5", "7", "10"],
    answer: 1,
    explanation: "Falam pelo menos um: 25 + 18 - 7 = 36. Não falam nenhum: 40 - 36 = 4.",
  },
  // #29 — Probabilidade (dados)
  {
    q: "Qual a probabilidade de, ao lançar dois dados, a soma ser igual a 7?",
    options: ["1/6", "1/12", "5/36", "1/9", "7/36"],
    answer: 0,
    explanation: "Combinações com soma 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total = 36. P = 6/36 = 1/6.",
  },
  // #30 — Desigualdade com inteiros
  {
    q: "Se 3x - 7 > 5 e x < 6, quantos valores inteiros x pode assumir?",
    options: ["1", "2", "3", "4", "5"],
    answer: 0,
    explanation: "3x > 12 → x > 4. Com x < 6, temos 4 < x < 6. O único inteiro nesse intervalo é x = 5. Total: 1.",
  },
];

// ─── Data Sufficiency (30 questions) ───

const DS_OPTIONS = [
  "A afirmação (1) sozinha é suficiente, mas a (2) não",
  "A afirmação (2) sozinha é suficiente, mas a (1) não",
  "Nenhuma sozinha basta, mas as duas juntas são suficientes",
  "Cada afirmação sozinha já é suficiente",
  "As duas afirmações juntas ainda não são suficientes",
];

export const DS_QUESTIONS = [
  // #1 — Equação linear simples
  {
    q: "Qual é o valor de x?\n\n(1) 2x + 3 = 11\n(2) x é um número inteiro positivo",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Afirmação (1): 2x + 3 = 11 → 2x = 8 → x = 4. Suficiente! Afirmação (2): x pode ser 1, 2, 3... infinitas possibilidades. Insuficiente. Resposta: (1) sozinha basta.",
  },
  // #2 — Comparação simples
  {
    q: "A é maior que B?\n\n(1) A = B + 5\n(2) B > 0",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Afirmação (1): Se A = B + 5, então A é sempre 5 unidades maior que B. Suficiente! Afirmação (2): Saber que B > 0 não nos diz nada sobre A. Insuficiente.",
  },
  // #3 — Raiz com sinal
  {
    q: "Qual é o valor de y?\n\n(1) y² = 16\n(2) y > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmação (1): y² = 16 → y = 4 ou y = -4. Dois valores possíveis. Insuficiente! Afirmação (2): y > 0 não define o valor. Insuficiente! Juntas: y² = 16 E y > 0 → y = 4. Suficiente!",
  },
  // #4 — Idades relativas
  {
    q: "João é mais velho que Maria?\n\n(1) João é 3 anos mais novo que Pedro\n(2) Pedro é 5 anos mais velho que Maria",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmação (1): J = P - 3. Sem info sobre Maria. Insuficiente. Afirmação (2): P = M + 5. Sem info sobre João. Insuficiente. Juntas: J = P - 3 = (M + 5) - 3 = M + 2. João é 2 anos mais velho. Suficiente!",
  },
  // #5 — Divisibilidade por 6
  {
    q: "x é divisível por 6?\n\n(1) x é divisível por 3\n(2) x é divisível por 2",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "6 = 2 × 3. Afirmação (1): divisível por 3, mas não necessariamente por 2 (ex: 9). Insuficiente. Afirmação (2): divisível por 2, mas não necessariamente por 3 (ex: 8). Insuficiente. Juntas: divisível por 2 e 3 → divisível por 6. Suficiente!",
  },
  // #6 — Preço com desconto (cada suficiente)
  {
    q: "Qual é o preço do produto?\n\n(1) Com 15% de desconto, o preço fica R$170\n(2) Com R$30 de desconto, o preço fica R$170",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Afirmação (1): P × 0,85 = 170 → P = 200. Suficiente! Afirmação (2): P - 30 = 170 → P = 200. Suficiente! Cada uma sozinha resolve.",
  },
  // #7 — Equação com raiz e sinal
  {
    q: "Qual é o valor de x?\n\n(1) x² = 25\n(2) x < 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmação (1): x = 5 ou x = -5. Dois valores. Insuficiente. Afirmação (2): x < 0, mas qual valor? Insuficiente. Juntas: x² = 25 e x < 0 → x = -5. Suficiente!",
  },
  // #8 — Equação quadrática (raízes reais)
  {
    q: "A equação x² + bx + 1 = 0 tem raízes reais?\n\n(1) b = 3\n(2) b > 2",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Discriminante = b² - 4. (1): b=3, Δ=9-4=5>0. Sim, raízes reais. Suficiente! (2): b>2 → b²>4 → Δ>0. Sim. Suficiente! Cada uma resolve.",
  },
  // #9 — Área do triângulo
  {
    q: "Qual é a área do triângulo?\n\n(1) A base mede 10 cm\n(2) A altura relativa à base mede 6 cm",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1) Só a base: sem altura, insuficiente. (2) Só a altura: sem base, insuficiente. Juntas: Área = 10×6/2 = 30 cm². Suficiente!",
  },
  // #10 — Divisibilidade por 12
  {
    q: "O inteiro positivo n é divisível por 12?\n\n(1) n é divisível por 4\n(2) n é divisível por 6",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "12 = 4 × 3. (1): div por 4, mas pode não ser por 3 (ex: 8). Insuficiente. (2): div por 6, mas pode não ser por 4 (ex: 18). Insuficiente. Juntas: div por 4 e 6 → MMC(4,6)=12. Suficiente!",
  },
  // #11 — Paridade do produto
  {
    q: "O produto m × n é par?\n\n(1) m é par\n(2) n é ímpar",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): m é par → m×n é par, independente de n. Suficiente! (2): n é ímpar, mas m pode ser par (produto par) ou ímpar (produto ímpar). Insuficiente.",
  },
  // #12 — Desigualdade
  {
    q: "x > 5?\n\n(1) x > 3\n(2) x > 7",
    options: [...DS_OPTIONS],
    answer: 1,
    explanation: "(1): x > 3 — pode ser 4 (não > 5) ou 6 (> 5). Insuficiente. (2): x > 7 → com certeza x > 5. Suficiente!",
  },
  // #13 — Módulo da diferença
  {
    q: "Qual o valor de |a - b|?\n\n(1) a = 3\n(2) b = 8",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): só a, sem b. Insuficiente. (2): só b, sem a. Insuficiente. Juntas: |3 - 8| = 5. Suficiente!",
  },
  // #14 — Média aritmética
  {
    q: "Qual é a média aritmética de três números?\n\n(1) A soma dos três números é 27\n(2) O maior número é 12",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): Média = 27/3 = 9. Suficiente! (2): Saber apenas o maior não define a soma. Insuficiente.",
  },
  // #15 — Mediana
  {
    q: "Qual é a mediana do conjunto {a, 7, 12}?\n\n(1) a < 5\n(2) a > 15",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): a<5 → ordenado: a, 7, 12. Mediana = 7. Suficiente! (2): a>15 → ordenado: 7, 12, a. Mediana = 12. Suficiente! Cada uma resolve.",
  },
  // #16 — Conjuntos (francês e alemão)
  {
    q: "Quantos alunos estudam apenas francês?\n\n(1) 30 alunos estudam francês\n(2) 10 alunos estudam francês e alemão",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): 30 total em francês, mas sem saber a interseção. Insuficiente. (2): 10 em ambos, sem total. Insuficiente. Juntas: 30 - 10 = 20 apenas francês. Suficiente!",
  },
  // #17 — Fração maior que 1
  {
    q: "a/b > 1?\n\n(1) a > b\n(2) b > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): a > b, mas se ambos negativos (ex: a=-1, b=-2), a/b = 0,5 < 1. Insuficiente. (2): b > 0, sem info de a. Insuficiente. Juntas: a > b > 0, logo a/b > 1. Suficiente!",
  },
  // #18 — Razão
  {
    q: "Qual é a razão x/y?\n\n(1) 2x = 5y\n(2) x - y = 9",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): 2x = 5y → x/y = 5/2. Suficiente! (2): x - y = 9 — infinitas soluções, razão indeterminada. Insuficiente.",
  },
  // #19 — Área do círculo
  {
    q: "Qual é a área do círculo?\n\n(1) A circunferência mede 10π\n(2) O diâmetro mede 10",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): 2πr = 10π → r = 5. Área = 25π. Suficiente! (2): d = 10 → r = 5. Área = 25π. Suficiente! Cada uma resolve.",
  },
  // #20 — Número primo
  {
    q: "O inteiro n > 1 é primo?\n\n(1) n é ímpar\n(2) n é divisível apenas por 1 e por ele mesmo",
    options: [...DS_OPTIONS],
    answer: 1,
    explanation: "(1): n ímpar pode ser 3 (primo) ou 9 (não primo). Insuficiente. (2): Essa é a definição de primo! Suficiente.",
  },
  // #21 — Inteiros consecutivos
  {
    q: "Qual é o menor de três inteiros consecutivos?\n\n(1) A soma dos três é 42\n(2) O maior é 15",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): n+(n+1)+(n+2) = 42 → 3n+3=42 → n=13. Suficiente! (2): n+2=15 → n=13. Suficiente! Cada uma resolve.",
  },
  // #22 — Salário
  {
    q: "Qual é o salário de Maria?\n\n(1) 20% do salário de Maria é R$600\n(2) O salário de Maria é R$1.000 a menos que o de João",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): 0,20 × S = 600 → S = R$3.000. Suficiente! (2): Sem saber o salário de João, insuficiente.",
  },
  // #23 — Lucro ou prejuízo
  {
    q: "A loja teve lucro na venda?\n\n(1) O preço de venda foi R$120\n(2) O preço de custo foi R$150",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): Só o preço de venda, sem custo. Insuficiente. (2): Só o custo, sem venda. Insuficiente. Juntas: 120 < 150 → prejuízo (não lucro). Podemos responder 'não'. Suficiente!",
  },
  // #24 — Velocidade
  {
    q: "Qual a velocidade do trem?\n\n(1) O trem percorreu 180 km\n(2) A viagem durou 2 horas",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): distância sem tempo. Insuficiente. (2): tempo sem distância. Insuficiente. Juntas: v = 180/2 = 90 km/h. Suficiente!",
  },
  // #25 — Soma de desigualdades
  {
    q: "x + y > 10?\n\n(1) x > 7\n(2) y > 3",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): x > 7, mas y desconhecido. Insuficiente. (2): y > 3, mas x desconhecido. Insuficiente. Juntas: x + y > 7 + 3 = 10. Suficiente!",
  },
  // #26 — Função linear
  {
    q: "Qual o valor de f(3), dado que f(x) = ax + b?\n\n(1) a = 2\n(2) b = -1",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): f(3) = 6 + b, b desconhecido. Insuficiente. (2): f(3) = 3a - 1, a desconhecido. Insuficiente. Juntas: f(3) = 2×3 + (-1) = 5. Suficiente!",
  },
  // #27 — Ponto na reta
  {
    q: "O ponto (3, k) está na reta y = 2x + 1?\n\n(1) k = 7\n(2) k é um número ímpar positivo menor que 10",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): Se k=7, verificamos: y=2(3)+1=7. Sim, está na reta! Suficiente. (2): k pode ser 1,3,5,7,9. Nem todos satisfazem y=2(3)+1=7. Insuficiente.",
  },
  // #28 — Expoentes
  {
    q: "Qual o valor de 3ⁿ?\n\n(1) 3ⁿ⁺¹ = 81\n(2) 9ⁿ = 729",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): 3ⁿ⁺¹=81=3⁴ → n+1=4 → n=3. 3³=27. Suficiente! (2): 9ⁿ=(3²)ⁿ=3²ⁿ=729=3⁶ → 2n=6 → n=3. 3³=27. Suficiente! Cada uma resolve.",
  },
  // #29 — Probabilidade (bolas)
  {
    q: "Uma caixa contém apenas bolas vermelhas e azuis. Qual a probabilidade de retirar uma bola vermelha?\n\n(1) Há 4 bolas vermelhas\n(2) Há 6 bolas azuis",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): 4 vermelhas, mas total desconhecido. Insuficiente. (2): 6 azuis, mas total desconhecido. Insuficiente. Juntas: total = 4+6 = 10. P = 4/10 = 2/5. Suficiente!",
  },
  // #30 — Concentração
  {
    q: "Qual a concentração de sal na solução?\n\n(1) Há 30 g de sal dissolvido\n(2) O volume total da solução é 500 ml",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): sal sem volume total. Insuficiente. (2): volume sem quantidade de sal. Insuficiente. Juntas: 30/500 = 6%. Suficiente!",
  },
];

// ─── Critical Reasoning (30 questions) ───

export const CR_QUESTIONS = [
  // #1 — Enfraquecer (home office)
  {
    q: "Uma empresa implementou home office integral e observou aumento de 20% na produtividade. O diretor concluiu que o trabalho presencial era o principal obstáculo à produtividade dos funcionários.\n\nQual das alternativas mais enfraquece a conclusão do diretor?",
    options: [
      "Alguns funcionários relataram se sentir isolados trabalhando de casa",
      "Durante o mesmo período, a empresa também trocou todo o software de gestão por ferramentas mais modernas",
      "A empresa concorrente manteve o trabalho presencial e teve queda de produtividade",
      "Os funcionários em home office trabalham em média 2 horas a mais por dia",
      "O diretor trabalha presencialmente na sede da empresa",
    ],
    answer: 1,
    explanation: "A conclusão assume que o home office causou o aumento. A alternativa B mostra uma causa alternativa (novo software), enfraquecendo a relação causal.",
  },
  // #2 — Premissa assumida (tablets)
  {
    q: "Pesquisas mostram que alunos que usam tablets na escola têm notas 15% maiores que os que não usam. Portanto, fornecer tablets para todos os alunos melhoraria o desempenho acadêmico geral.\n\nQual premissa está sendo assumida neste argumento?",
    options: [
      "Tablets são mais baratos que livros didáticos",
      "Os alunos que já usam tablets não são, sistematicamente, de famílias com mais recursos e apoio educacional",
      "Professores precisam de treinamento para usar tablets em sala",
      "A tecnologia na educação é sempre benéfica",
      "As notas são a melhor medida de aprendizagem",
    ],
    answer: 1,
    explanation: "O argumento assume que a correlação tablet→notas é causal. Pode haver viés de seleção: famílias que dão tablets também oferecem mais suporte. A premissa oculta é que os grupos são comparáveis.",
  },
  // #3 — Paradoxo (sacolas plásticas)
  {
    q: "A prefeitura proibiu sacolas plásticas nos supermercados. Após 1 ano, a quantidade de plástico nos aterros da cidade não diminuiu.\n\nQual das alternativas melhor explica esse resultado aparentemente contraditório?",
    options: [
      "A população da cidade cresceu 2% no período",
      "Os consumidores passaram a comprar sacos de lixo de plástico mais grosso para substituir as sacolas que antes reutilizavam",
      "Algumas pessoas ainda guardam sacolas plásticas antigas em casa",
      "A reciclagem de plástico é ineficiente",
      "Os supermercados oferecem sacolas de papel como alternativa",
    ],
    answer: 1,
    explanation: "A alternativa B resolve o paradoxo: a proibição eliminou sacolas finas, mas as pessoas compensaram comprando sacos plásticos mais grossos (efeito rebote).",
  },
  // #4 — Enfraquecer (segurança empresa)
  {
    q: "Empresa X gasta 30% a mais com segurança que a empresa Y, mas tem o dobro de incidentes de segurança. Portanto, o investimento em segurança da Empresa X é ineficiente.\n\nQual informação, se verdadeira, mais enfraqueceria essa conclusão?",
    options: [
      "A empresa X tem um departamento de TI maior",
      "A empresa X opera em um setor de risco 5 vezes maior que o da empresa Y",
      "A empresa Y terceiriza parte de sua segurança",
      "O CEO da empresa X é engenheiro de formação",
      "Ambas as empresas seguem normas ISO de segurança",
    ],
    answer: 1,
    explanation: "Se a empresa X opera em setor muito mais arriscado, ter apenas o dobro de incidentes pode significar que o investimento é eficiente. A comparação sem considerar o risco é injusta.",
  },
  // #5 — Falácia correlação-causalidade (livrarias)
  {
    q: "Cidades com mais livrarias per capita apresentam menores índices de criminalidade. Um vereador propõe abrir 50 novas livrarias na cidade para reduzir a violência.\n\nQual das alternativas identifica a principal falha no raciocínio do vereador?",
    options: [
      "Livrarias podem não ser economicamente viáveis em todas as regiões",
      "Ele confunde correlação com causalidade — ambos os fatores provavelmente são causados por um terceiro fator, como renda e educação",
      "A criminalidade depende de fatores sazonais",
      "Bibliotecas públicas seriam uma alternativa mais barata",
      "A quantidade de livrarias vem diminuindo globalmente",
    ],
    answer: 1,
    explanation: "Clássica falácia de correlação × causalidade. Bairros com maior renda e educação têm mais livrarias E menos crime. Abrir livrarias não ataca a causa real.",
  },
  // #6 — Fortalecer (turno noturno)
  {
    q: "Uma fábrica trocou o turno noturno de 8 horas por dois turnos de 4 horas com intervalo de 2 horas entre eles. A produção noturna caiu 30%.\n\nQual alternativa mais fortalece a decisão da fábrica, apesar da queda de produção?",
    options: [
      "Os funcionários do turno noturno recebem adicional de 20%",
      "Acidentes de trabalho no turno noturno caíram 80% após a mudança",
      "A fábrica produz bens de consumo não-essenciais",
      "Outras fábricas do setor mantêm o turno de 8 horas",
      "O custo da energia elétrica é menor durante a noite",
    ],
    answer: 1,
    explanation: "A queda de 80% nos acidentes justifica a troca mesmo com perda de produção. Segurança e custos com acidentes compensam a queda de 30%.",
  },
  // #7 — Enfraquecer (campanha publicitária)
  {
    q: "Uma rede de varejo afirma que sua nova campanha publicitária em redes sociais foi responsável pelo aumento de 40% nas vendas no último trimestre.\n\nQual das alternativas mais enfraquece essa afirmação?",
    options: [
      "A campanha custou R$500.000",
      "O último trimestre coincidiu com o período de Natal, quando as vendas historicamente sobem 35-45%",
      "A empresa também tem anúncios em televisão",
      "Concorrentes não investiram em redes sociais",
      "A empresa contratou uma agência de publicidade renomada",
    ],
    answer: 1,
    explanation: "Se as vendas já sobem 35-45% todo Natal, o aumento de 40% pode não ter relação com a campanha — é o efeito sazonal.",
  },
  // #8 — Fortalecer (chá verde)
  {
    q: "Pesquisadores descobriram que ratos alimentados com extrato de chá verde tiveram 30% menos tumores que o grupo de controle. Concluíram que o chá verde tem propriedades anticancerígenas.\n\nQual das alternativas mais fortalece essa conclusão?",
    options: [
      "O chá verde é popular em vários países asiáticos",
      "O estudo foi replicado em outros três laboratórios com resultados semelhantes",
      "Os ratos do experimento eram de uma raça específica",
      "O extrato foi administrado em altas doses",
      "Estudos anteriores já haviam investigado outros tipos de chá",
    ],
    answer: 1,
    explanation: "A replicação em outros laboratórios fortalece a conclusão, pois reduz a chance de o resultado ser um artefato do estudo original.",
  },
  // #9 — Premissa assumida (prontuários)
  {
    q: "Hospitais que adotaram prontuários eletrônicos reportam 25% menos erros médicos. Portanto, todos os hospitais deveriam digitalizar seus prontuários para reduzir erros.\n\nQual premissa está sendo assumida?",
    options: [
      "Prontuários eletrônicos são mais caros que os de papel",
      "Os hospitais que adotaram prontuários eletrônicos não tinham, previamente, sistemas de controle de qualidade superiores aos demais",
      "Médicos preferem prontuários digitais",
      "A tecnologia eventualmente falha",
      "Erros médicos são a principal causa de mortes em hospitais",
    ],
    answer: 1,
    explanation: "Se os hospitais que digitalizaram já eram mais organizados, a redução de erros pode ser por isso, não pelos prontuários. Assume-se que os grupos são comparáveis.",
  },
  // #10 — Paradoxo (laptops)
  {
    q: "Uma empresa de tecnologia ofereceu laptops gratuitos a todos os seus funcionários para uso pessoal. Após seis meses, a satisfação dos funcionários com a empresa diminuiu.\n\nQual das alternativas melhor explica esse resultado paradoxal?",
    options: [
      "Os laptops eram de marcas variadas",
      "Os funcionários passaram a ser contatados para trabalhar fora do expediente, pois a empresa argumentava que eles tinham equipamento para isso",
      "Nem todos os funcionários precisavam de laptop",
      "A empresa também ofereceu cursos de informática",
      "Alguns funcionários já tinham laptops pessoais",
    ],
    answer: 1,
    explanation: "O 'presente' virou um instrumento de cobrança: a empresa passou a exigir trabalho fora do horário, piorando a qualidade de vida.",
  },
  // #11 — Conclusão (avaliações escolares)
  {
    q: "Escolas que eliminaram provas tradicionais e adotaram avaliações por projetos relatam que os alunos se sentem menos ansiosos. Porém, as notas médias em exames padronizados nacionais dessas escolas caíram 10%.\n\nQual conclusão pode ser mais razoavelmente inferida?",
    options: [
      "Avaliações por projetos são sempre melhores que provas tradicionais",
      "A redução da ansiedade e a performance em exames padronizados podem requerer abordagens diferentes",
      "As escolas deveriam voltar ao sistema de provas tradicionais",
      "Exames padronizados nacionais não medem nada de útil",
      "Os professores dessas escolas são menos qualificados",
    ],
    answer: 1,
    explanation: "A conclusão equilibrada reconhece que diferentes objetivos (bem-estar vs. desempenho em testes) podem exigir estratégias distintas.",
  },
  // #12 — Enfraquecer (plantio de árvores)
  {
    q: "O governo afirma que o programa de plantio de árvores compensou totalmente as emissões de carbono do país, já que 5 milhões de árvores foram plantadas no último ano.\n\nQual das alternativas mais enfraquece essa afirmação?",
    options: [
      "Árvores jovens absorvem muito menos carbono que árvores maduras e levarão décadas para atingir capacidade plena de absorção",
      "Outros países também plantaram árvores",
      "O programa custou R$200 milhões",
      "As árvores foram plantadas em diferentes regiões",
      "O programa contou com voluntários",
    ],
    answer: 0,
    explanation: "Se árvores jovens absorvem pouco carbono, o plantio recente não compensa as emissões atuais — a compensação levará décadas.",
  },
  // #13 — Fortalecer (ciclovias)
  {
    q: "A cidade implementou ciclovias em todas as avenidas principais. O prefeito afirma que isso reduziu o congestionamento de trânsito.\n\nQual informação mais fortaleceria a afirmação do prefeito?",
    options: [
      "Pesquisas de opinião mostram que os moradores aprovam as ciclovias",
      "O tempo médio de deslocamento de carro diminuiu 18% desde a implementação, mesmo com aumento do número de veículos",
      "As ciclovias custaram R$50 milhões",
      "Outras cidades também implementaram ciclovias",
      "O número de ciclistas aumentou 200%",
    ],
    answer: 1,
    explanation: "Dados concretos mostrando redução no tempo de deslocamento, mesmo com mais veículos, fortalecem diretamente a afirmação.",
  },
  // #14 — Premissa assumida (reuniões)
  {
    q: "Uma empresa decidiu eliminar reuniões de mais de 30 minutos, pois constatou que funcionários que participam de muitas reuniões longas são menos produtivos.\n\nQual premissa está sendo assumida?",
    options: [
      "Reuniões curtas são mais agradáveis",
      "São as reuniões longas que causam a baixa produtividade, e não que projetos mais complexos exijam tanto mais reuniões quanto métricas diferentes de produtividade",
      "Todos os funcionários participam de reuniões",
      "A empresa tem muitos funcionários",
      "Reuniões de 30 minutos são suficientes para qualquer assunto",
    ],
    answer: 1,
    explanation: "A empresa assume causalidade (reuniões → baixa produtividade), mas pode ser o inverso: projetos complexos exigem mais reuniões e têm produtividade diferente.",
  },
  // #15 — Paradoxo (vitaminas)
  {
    q: "Um estudo mostrou que pessoas que tomam vitaminas diariamente têm a mesma taxa de doenças que pessoas que não tomam.\n\nQual das alternativas melhor explica essa aparente contradição com a ideia de que vitaminas melhoram a saúde?",
    options: [
      "Vitaminas são vendidas sem receita médica",
      "As pessoas que tomam vitaminas tendem a ter hábitos alimentares piores, pois acreditam que o suplemento compensa uma dieta inadequada",
      "Existem muitas marcas de vitaminas no mercado",
      "Algumas vitaminas são mais caras que outras",
      "Médicos nem sempre recomendam vitaminas",
    ],
    answer: 1,
    explanation: "O 'licenciamento moral': quem toma vitamina relaxa na dieta, anulando o possível benefício do suplemento.",
  },
  // #16 — Conclusão (gêmeos)
  {
    q: "Um estudo de 20 anos acompanhou gêmeos idênticos criados separadamente. Os gêmeos apresentaram níveis de inteligência muito semelhantes, apesar de ambientes completamente diferentes.\n\nQual conclusão é mais sustentada por esses dados?",
    options: [
      "O ambiente não tem absolutamente nenhuma influência na inteligência",
      "Fatores genéticos desempenham um papel significativo na determinação da inteligência",
      "Gêmeos idênticos são sempre igualmente inteligentes",
      "A inteligência não pode ser medida com precisão",
      "Gêmeos criados juntos seriam mais inteligentes",
    ],
    answer: 1,
    explanation: "A conclusão cuidadosa: genética tem papel 'significativo' (não absoluto). Não elimina a influência do ambiente, apenas demonstra o peso genético.",
  },
  // #17 — Enfraquecer (IA diagnóstico)
  {
    q: "Uma empresa afirma que sua IA para diagnósticos médicos é mais precisa que médicos humanos, pois em um teste com 1.000 raios-X, a IA acertou 95% contra 88% dos médicos.\n\nQual informação mais enfraqueceria essa afirmação?",
    options: [
      "A IA é cara para implementar",
      "As imagens do teste eram de casos claros e típicos, enquanto médicos frequentemente lidam com casos ambíguos e atípicos na prática real",
      "A empresa tem investidores de renome",
      "Outras empresas também desenvolvem IAs para saúde",
      "Médicos às vezes discordam entre si",
    ],
    answer: 1,
    explanation: "Se o teste usou apenas casos fáceis, o desempenho da IA pode não se manter em situações reais. O teste não reflete a complexidade da prática médica.",
  },
  // #18 — Fortalecer (tutoria)
  {
    q: "Um programa de tutoria individual para alunos de baixa renda resultou em aumento médio de 2 pontos nas notas. Críticos dizem que o investimento não se justifica pelo resultado modesto.\n\nQual informação mais fortaleceria a defesa do programa?",
    options: [
      "O programa emprega 200 tutores",
      "Os alunos participantes tiveram taxa de evasão escolar 60% menor e taxa de ingresso na universidade 3 vezes maior que o grupo de controle",
      "O programa funciona há 5 anos",
      "Os tutores são voluntários",
      "Outros países têm programas semelhantes",
    ],
    answer: 1,
    explanation: "O impacto vai além das notas: redução de evasão e aumento de acesso à universidade mostram que o programa é muito mais eficaz do que as notas sugerem.",
  },
  // #19 — Premissa assumida (carros elétricos)
  {
    q: "O governo incentiva a troca de carros a gasolina por carros elétricos para reduzir as emissões de carbono do transporte.\n\nQual premissa é necessária para que essa política seja eficaz?",
    options: [
      "Carros elétricos são mais modernos que carros a gasolina",
      "A matriz energética que abastece os carros elétricos não é predominantemente baseada em combustíveis fósseis",
      "Os consumidores preferem carros elétricos",
      "Os carros elétricos são mais baratos",
      "As montadoras apoiam a política",
    ],
    answer: 1,
    explanation: "Se a eletricidade vem de termoelétricas a carvão, trocar para carro elétrico pode não reduzir emissões — apenas transfere a poluição para as usinas.",
  },
  // #20 — Paradoxo (preço do café)
  {
    q: "Uma cafeteria aumentou o preço do café em 30%. Surpreendentemente, o número de clientes diários aumentou 15% no mês seguinte.\n\nQual das alternativas melhor explica esse resultado inesperado?",
    options: [
      "O café é uma bebida popular mundialmente",
      "Os clientes interpretaram o preço mais alto como sinal de qualidade superior e passaram a preferir a cafeteria em vez de concorrentes mais baratos",
      "A cafeteria fica em uma região movimentada",
      "O preço do chá também aumentou",
      "Os funcionários da cafeteria são simpáticos",
    ],
    answer: 1,
    explanation: "Efeito Veblen: preço mais alto pode ser percebido como sinal de qualidade superior, atraindo clientes que associam preço alto a produto premium.",
  },
  // #21 — Conclusão (radares)
  {
    q: "O número de acidentes de trânsito em uma cidade caiu 40% após a instalação de radares de velocidade. Entretanto, o número de multas por excesso de velocidade triplicou.\n\nQual conclusão é mais logicamente sustentada?",
    options: [
      "Os radares estão com defeito",
      "Os radares estão detectando infrações que antes passavam despercebidas, e a maior fiscalização está contribuindo para a redução de acidentes graves",
      "Os motoristas estão dirigindo mais rápido",
      "A cidade deveria remover os radares",
      "As multas são muito caras",
    ],
    answer: 1,
    explanation: "Mais multas = mais detecção. A fiscalização efetiva faz motoristas reduzirem a velocidade ao longo do tempo, diminuindo acidentes.",
  },
  // #22 — Enfraquecer (vinho e longevidade)
  {
    q: "Pessoas que bebem uma taça de vinho por dia vivem em média 3 anos a mais que abstêmios. Portanto, beber vinho moderadamente aumenta a longevidade.\n\nQual alternativa mais enfraquece essa conclusão?",
    options: [
      "O vinho tinto contém antioxidantes",
      "As pessoas que bebem moderadamente tendem a ter maior renda, melhor acesso à saúde e hábitos de vida mais saudáveis em geral",
      "Algumas pessoas são alérgicas ao álcool",
      "O consumo excessivo de álcool é prejudicial",
      "A pesquisa foi publicada em uma revista científica",
    ],
    answer: 1,
    explanation: "Variáveis de confusão: quem bebe moderadamente pode ter um estilo de vida geral mais saudável. A longevidade pode não ser causada pelo vinho.",
  },
  // #23 — Fortalecer (chatbots)
  {
    q: "Uma empresa substituiu atendentes humanos por chatbots e afirma que a satisfação do cliente melhorou.\n\nQual informação mais fortalece essa afirmação?",
    options: [
      "Os chatbots são mais baratos que atendentes humanos",
      "Pesquisas independentes com clientes mostram que 78% preferem a rapidez do chatbot e o índice NPS subiu 20 pontos",
      "A empresa é líder no setor de tecnologia",
      "Os atendentes humanos foram realocados",
      "Outras empresas também usam chatbots",
    ],
    answer: 1,
    explanation: "Pesquisas independentes com dados concretos (78% preferência, NPS +20) fornecem evidência objetiva de melhora na satisfação.",
  },
  // #24 — Premissa assumida (medicamento)
  {
    q: "Cientistas testaram um novo medicamento em 500 voluntários e reportaram eficácia de 85%. Recomendam que o medicamento seja aprovado para uso geral.\n\nQual premissa está sendo assumida?",
    options: [
      "O medicamento é fácil de produzir",
      "Os 500 voluntários são representativos da população geral em termos de idade, sexo, etnia e condições de saúde",
      "Existem outros medicamentos no mercado",
      "O estudo durou um ano",
      "Os cientistas são renomados",
    ],
    answer: 1,
    explanation: "Se os voluntários não são representativos (ex: só jovens saudáveis), a eficácia pode não se manter na população geral.",
  },
  // #25 — Paradoxo (lista de presença)
  {
    q: "Uma universidade eliminou a lista de presença obrigatória. A frequência média dos alunos aumentou 10%.\n\nQual das alternativas melhor explica esse resultado paradoxal?",
    options: [
      "A universidade tem boa reputação",
      "Sem a obrigatoriedade, os professores se esforçaram mais para tornar as aulas atraentes, e os alunos passaram a ir por interesse genuíno",
      "Os alunos moram perto da universidade",
      "A universidade também mudou o horário das aulas",
      "Algumas aulas são em auditórios grandes",
    ],
    answer: 1,
    explanation: "A eliminação da obrigatoriedade criou incentivos para professores melhorarem as aulas e para alunos comparecerem por motivação real.",
  },
  // #26 — Conclusão (poluição e biodiversidade)
  {
    q: "O nível de poluição no rio X caiu 50% após o fechamento da fábrica Y. Porém, a biodiversidade do rio não apresentou melhora significativa dois anos depois.\n\nQual conclusão é mais razoável?",
    options: [
      "A fábrica deveria ser reaberta",
      "A recuperação da biodiversidade em ecossistemas degradados pode exigir tempo significativamente maior que a simples redução da poluição",
      "A poluição não afeta a biodiversidade",
      "A medição de biodiversidade está incorreta",
      "Outras fábricas poluem o mesmo rio",
    ],
    answer: 1,
    explanation: "Ecossistemas precisam de muito mais tempo para se recuperar do que para a poluição diminuir. A recuperação biológica é um processo lento.",
  },
  // #27 — Enfraquecer (policiamento)
  {
    q: "A taxa de criminalidade caiu 20% desde que a cidade aumentou o número de policiais nas ruas. O secretário de segurança afirma que mais policiais é a solução para a criminalidade.\n\nQual alternativa mais enfraquece a conclusão do secretário?",
    options: [
      "Os policiais novos são bem treinados",
      "No mesmo período, o desemprego na cidade caiu pela metade e programas sociais foram ampliados significativamente",
      "A cidade vizinha não aumentou o policiamento",
      "A população da cidade cresceu 5%",
      "O orçamento de segurança é elevado",
    ],
    answer: 1,
    explanation: "Causas alternativas: redução do desemprego e programas sociais podem ser os verdadeiros responsáveis pela queda da criminalidade.",
  },
  // #28 — Fortalecer (dieta mediterrânea)
  {
    q: "Um nutricionista afirma que a dieta mediterrânea reduz o risco de doenças cardíacas.\n\nQual informação mais fortaleceria essa afirmação?",
    options: [
      "A dieta mediterrânea inclui muitas frutas",
      "Um ensaio clínico randomizado com 10.000 participantes durante 10 anos mostrou que o grupo com dieta mediterrânea teve 35% menos eventos cardíacos",
      "Médicos frequentemente recomendam mudanças na dieta",
      "A dieta mediterrânea é saborosa",
      "Muitas pessoas no Mediterrâneo vivem bastante",
    ],
    answer: 1,
    explanation: "Um ensaio clínico randomizado grande e longo é o padrão-ouro da evidência médica, fornecendo a mais forte comprovação possível.",
  },
  // #29 — Premissa assumida (livros vs tablets)
  {
    q: "Uma escola decidiu substituir todos os livros de papel por tablets, argumentando que isso melhorará o aprendizado dos alunos.\n\nQual premissa está sendo assumida?",
    options: [
      "Tablets são mais leves que livros",
      "O formato digital é pelo menos tão eficaz quanto o formato impresso para a absorção e retenção do conhecimento",
      "Todos os alunos querem usar tablets",
      "Os tablets têm bateria de longa duração",
      "A escola tem internet rápida",
    ],
    answer: 1,
    explanation: "Se o formato digital for menos eficaz para aprender, a troca prejudicaria os alunos. A escola assume que digital ≥ impresso em termos de aprendizagem.",
  },
  // #30 — Paradoxo (reciclagem e consumo)
  {
    q: "Uma cidade iniciou um programa de reciclagem abrangente. A quantidade total de lixo enviada aos aterros aumentou no ano seguinte.\n\nQual das alternativas melhor explica esse paradoxo?",
    options: [
      "Reciclagem é um processo complexo",
      "Sentindo-se menos culpadas por consumir, as pessoas passaram a consumir significativamente mais, gerando lixo em volume que superou o que foi reciclado",
      "O programa incluiu novos postos de coleta",
      "Nem todo material é reciclável",
      "A população da cidade cresceu 1%",
    ],
    answer: 1,
    explanation: "Efeito rebote / licenciamento moral: a reciclagem fez as pessoas consumirem mais, anulando o benefício do programa.",
  },
];

// ─── Simulado dinâmico ───

export function buildSimulado() {
  return [
    ...shuffle(PS_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "PS" })),
    ...shuffle(DS_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "DS" })),
    ...shuffle(CR_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "CR" })),
  ];
}
