import { SECTIONS } from "../../../constants";

export const PS_QUESTIONS = [
  {
    q: "A store offers a 20% discount on a product that costs $150. If the customer has an additional 10% coupon on the already discounted price, what is the final price?",
    options: ["$105.00", "$108.00", "$112.50", "$110.00", "$100.00"],
    answer: 1,
    explanation: "First discount: 150 × 0.80 = $120. Second discount on $120: 120 × 0.90 = $108. Be careful: discounts are applied sequentially, not added (20%+10% ≠ 30%).",
  },
  {
    q: "If 3 machines produce 120 parts in 4 hours, how many parts do 5 machines produce in 6 hours?",
    options: ["200", "250", "300", "360", "400"],
    answer: 2,
    explanation: "Rate per machine per hour: 120 / (3 × 4) = 10 parts. With 5 machines for 6 hours: 5 × 6 × 10 = 300 parts.",
  },
  {
    q: "In a room, 60% are women. If 75% of the women and 40% of the men approved a proposal, what is the total approval percentage?",
    options: ["55%", "57%", "59%", "61%", "63%"],
    answer: 3,
    explanation: "Consider 100 people: 60 women, 40 men. Approved: 60×0.75 + 40×0.40 = 45 + 16 = 61. So 61/100 = 61%.",
  },
  {
    q: "An investment yields 8% per year with compound interest. What is the approximate value of $10,000 after 2 years?",
    options: ["$11,600", "$11,664", "$11,800", "$12,000", "$10,800"],
    answer: 1,
    explanation: "Compound interest: 10,000 × (1.08)² = 10,000 × 1.1664 = $11,664.00.",
  },
  {
    q: "In how many different ways can 5 people sit in a row of 3 chairs?",
    options: ["10", "15", "20", "60", "120"],
    answer: 3,
    explanation: "Arrangement A(5,3) = 5!/(5-3)! = 5×4×3 = 60.",
  },
  {
    q: "If x² - 5x + 6 = 0, what is the sum of the possible values of 2x?",
    options: ["5", "6", "10", "12", "8"],
    answer: 2,
    explanation: "The roots are x=2 and x=3 (sum of roots = 5). Sum of 2x: 2(2) + 2(3) = 4 + 6 = 10.",
  },
  {
    q: "A tank is filled by faucet A in 6 hours and by faucet B in 4 hours. If both are opened at the same time, how long does it take to fill the tank?",
    options: ["2h", "2h12min", "2h24min", "2h30min", "3h"],
    answer: 2,
    explanation: "Rate A = 1/6 per hour, Rate B = 1/4 per hour. Together: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 12/5 = 2.4 hours = 2h24min.",
  },
  {
    q: "The probability of rain on Monday is 30% and on Tuesday is 40%, independently. What is the probability of rain on at least one of the two days?",
    options: ["58%", "60%", "70%", "42%", "50%"],
    answer: 0,
    explanation: "P(at least one) = 1 - P(none) = 1 - (0.70 × 0.60) = 1 - 0.42 = 0.58 = 58%.",
  },
];

const DS_OPTIONS = [
  "Statement (1) alone is sufficient, but (2) is not",
  "Statement (2) alone is sufficient, but (1) is not",
  "Neither alone is sufficient, but both together are sufficient",
  "Each statement alone is sufficient",
  "Both statements together are still not sufficient",
];

export const DS_QUESTIONS = [
  {
    q: "What is the value of x?\n\n(1) 2x + 3 = 11\n(2) x is a positive integer",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Statement (1): 2x + 3 = 11 → 2x = 8 → x = 4. Sufficient! Statement (2): x could be 1, 2, 3... infinite possibilities. Insufficient. Answer: (1) alone is sufficient.",
  },
  {
    q: "Is A greater than B?\n\n(1) A = B + 5\n(2) B > 0",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Statement (1): If A = B + 5, then A is always 5 units greater than B, regardless of B's value. Sufficient! Statement (2): Knowing B > 0 tells us nothing about A. Insufficient.",
  },
  {
    q: "What is the value of y?\n\n(1) y² = 16\n(2) y > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Statement (1): y² = 16 → y = 4 or y = -4. Two possible values. Insufficient! Statement (2): y > 0 doesn't define the value. Insufficient! Together: y² = 16 AND y > 0 → y = 4. Sufficient!",
  },
  {
    q: "Is John older than Mary?\n\n(1) John is 3 years younger than Peter\n(2) Peter is 5 years older than Mary",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Statement (1): J = P - 3. No info about Mary. Insufficient. Statement (2): P = M + 5. No info about John. Insufficient. Together: J = P - 3 = (M + 5) - 3 = M + 2. John is 2 years older than Mary. Sufficient!",
  },
  {
    q: "Is x divisible by 6?\n\n(1) x is divisible by 3\n(2) x is divisible by 2",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "6 = 2 × 3. Must be divisible by both. Statement (1) alone: divisible by 3, but not necessarily by 2 (e.g., 9). Insufficient. Statement (2) alone: divisible by 2, but not necessarily by 3 (e.g., 8). Insufficient. Together: divisible by 2 AND by 3 → divisible by 6. Sufficient!",
  },
  {
    q: "What is the price of the product?\n\n(1) With a 15% discount, the price is $170\n(2) With a $30 discount, the price is $170",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Statement (1): P × 0.85 = 170 → P = 200. Sufficient! Statement (2): P - 30 = 170 → P = 200. Sufficient! Each one alone solves it. Answer: D.",
  },
];

export const CR_QUESTIONS = [
  {
    q: "A company implemented full-time remote work and observed a 20% increase in productivity. The director concluded that in-office work was the main obstacle to employee productivity.\n\nWhich of the following most weakens the director's conclusion?",
    options: [
      "Some employees reported feeling isolated working from home",
      "During the same period, the company also replaced all management software with more modern tools",
      "The competing company maintained in-office work and saw a decrease in productivity",
      "Remote employees work an average of 2 more hours per day",
      "The director works in-person at the company headquarters",
    ],
    answer: 1,
    explanation: "The conclusion assumes remote work caused the productivity increase. Option B shows an alternative cause (new software), weakening the causal link between remote work and productivity. Option D is also strong, but B is more directly an alternative cause.",
  },
  {
    q: "Research shows that students who use tablets in school have 15% higher grades than those who don't. Therefore, providing tablets to all students would improve overall academic performance.\n\nWhat assumption is being made in this argument?",
    options: [
      "Tablets are cheaper than textbooks",
      "Students who already use tablets are not systematically from wealthier families with more educational support",
      "Teachers need training to use tablets in the classroom",
      "Technology in education is always beneficial",
      "Grades are the best measure of learning",
    ],
    answer: 1,
    explanation: "The argument assumes the tablet→grades correlation is causal. But there may be selection bias: perhaps families that give tablets to their children also offer more support. The hidden premise is that the two groups are comparable.",
  },
  {
    q: "The city banned plastic bags in supermarkets. After 1 year, the amount of plastic in the city's landfills did not decrease.\n\nWhich of the following best explains this apparently contradictory result?",
    options: [
      "The city's population grew by 2% during the period",
      "Consumers began buying thicker plastic garbage bags to replace the bags they used to reuse",
      "Some people still keep old plastic bags at home",
      "Plastic recycling is inefficient",
      "Supermarkets offer paper bags as an alternative",
    ],
    answer: 1,
    explanation: "Option B resolves the paradox: the ban eliminated thin bags, but people compensated by buying thicker plastic bags (using more plastic overall). This is known as the 'rebound effect'.",
  },
  {
    q: "Company X spends 30% more on security than Company Y, but has twice as many security incidents. Therefore, Company X's security investment is inefficient.\n\nWhich information, if true, would most weaken this conclusion?",
    options: [
      "Company X has a larger IT department",
      "Company X operates in a sector with 5 times greater risk than Company Y's",
      "Company Y outsources part of its security",
      "The CEO of Company X has an engineering background",
      "Both companies follow ISO security standards",
    ],
    answer: 1,
    explanation: "If Company X operates in a much riskier sector, having only twice the incidents in that context may mean the investment is actually efficient. Direct comparison without considering risk level is unfair.",
  },
  {
    q: "Cities with more bookstores per capita have lower crime rates. A councilman proposes opening 50 new bookstores in the city to reduce violence.\n\nWhich of the following identifies the main flaw in the councilman's reasoning?",
    options: [
      "Bookstores may not be economically viable in all areas",
      "He confuses correlation with causation — both factors are likely caused by a third factor, such as income and education",
      "Crime depends on seasonal factors",
      "Public libraries would be a cheaper alternative",
      "The number of bookstores has been declining globally",
    ],
    answer: 1,
    explanation: "Classic correlation vs. causation fallacy. It's not the bookstores that reduce crime. Likely, neighborhoods with higher income and education have more bookstores AND less crime. Opening bookstores doesn't address the real cause.",
  },
  {
    q: "A factory replaced the 8-hour night shift with two 4-hour shifts with a 2-hour break between them. Night production dropped by 30%.\n\nWhich option most strengthens the factory's decision, despite the production drop?",
    options: [
      "Night shift employees receive a 20% premium",
      "Workplace accidents during the night shift dropped 80% after the change",
      "The factory produces non-essential consumer goods",
      "Other factories in the sector maintain the 8-hour shift",
      "Electricity costs are lower at night",
    ],
    answer: 1,
    explanation: "The drastic 80% drop in accidents justifies the change even with the production loss. Worker safety and accident costs (compensation, leave) can easily offset the 30% production drop.",
  },
];

// Simulado: mix of all types (same indices as original)
export const SIMULADO_QUESTIONS = [
  { ...PS_QUESTIONS[0], type: "PS" },
  { ...PS_QUESTIONS[3], type: "PS" },
  { ...PS_QUESTIONS[7], type: "PS" },
  { ...PS_QUESTIONS[4], type: "PS" },
  { ...PS_QUESTIONS[6], type: "PS" },
  { ...DS_QUESTIONS[0], type: "DS" },
  { ...DS_QUESTIONS[2], type: "DS" },
  { ...DS_QUESTIONS[3], type: "DS" },
  { ...DS_QUESTIONS[4], type: "DS" },
  { ...DS_QUESTIONS[5], type: "DS" },
  { ...CR_QUESTIONS[0], type: "CR" },
  { ...CR_QUESTIONS[1], type: "CR" },
  { ...CR_QUESTIONS[3], type: "CR" },
  { ...CR_QUESTIONS[4], type: "CR" },
  { ...CR_QUESTIONS[5], type: "CR" },
];

export const learnSections = [
  {
    key: SECTIONS.LEARN_PS, title: "Problem Solving", color: "#00c2ff", icon: "🧮",
    content: [
      { h: "What is it?", p: "These are math and logic questions with 5 answer choices. You need to find the correct answer. Sounds simple, but the challenge is time — each question should be solved in ~2 minutes." },
      { h: "What's covered?", p: "Arithmetic (percentages, ratios, averages), Algebra (equations, inequalities, functions), Basic Geometry (areas, perimeters, angles), Probability and Combinatorics, Data Interpretation (tables, charts)." },
      { h: "Killer strategies", p: "1) BACKSOLVING: test the answer choices in the equation instead of solving algebraically. Start with choice C (the middle one).\n2) PICKING NUMBERS: substitute variables with easy numbers (2, 3, 10, 100) to test.\n3) ELIMINATION: you can often eliminate 2-3 absurd options right away.\n4) ESTIMATION: if the options are far apart, round the numbers and calculate quickly." },
    ],
  },
  {
    key: SECTIONS.LEARN_DS, title: "Data Sufficiency", color: "#b388ff", icon: "📊",
    content: [
      { h: "What is it?", p: "The most unique format on the test. You receive a question and two statements. You do NOT need to solve the problem — you only need to determine if the information is sufficient to solve it." },
      { h: "The 5 answer choices (ALWAYS the same!)", p: "(A) Statement 1 alone is sufficient, but 2 alone is NOT\n(B) Statement 2 alone is sufficient, but 1 alone is NOT\n(C) Neither alone is sufficient, but both TOGETHER are sufficient\n(D) EACH ONE alone is sufficient\n(E) Even both TOGETHER are still NOT sufficient" },
      { h: "MEMORIZE THIS", p: "The answer choices above are FIXED for EVERY DS question. If you memorize this before the test, you save precious time. During the test, you already know the options and focus on the reasoning." },
      { h: "Solution method", p: "1) Analyze statement (1) ALONE → sufficient or not?\n2) Analyze statement (2) ALONE → sufficient or not?\n3) If neither alone was sufficient, analyze BOTH TOGETHER.\n\nCrucial tip: 'sufficient' means you arrive at ONE SINGLE value/answer. If the statement allows 2 or more answers, it's INSUFFICIENT." },
      { h: "Common trap", p: "Don't calculate the final answer! Many people waste time solving the entire calculation. You only need to know IF IT'S POSSIBLE to solve, not WHAT the answer is." },
    ],
  },
  {
    key: SECTIONS.LEARN_CR, title: "Critical Reasoning", color: "#69f0ae", icon: "🧠",
    content: [
      { h: "What is it?", p: "You read a short argument (2-5 sentences) and answer about its logical structure. No math needed — you need critical thinking." },
      { h: "Question types", p: "WEAKEN: Which option makes the conclusion less likely?\nSTRENGTHEN: Which option makes the conclusion more likely?\nASSUMED PREMISE: What hidden assumption does the argument make?\nPARADOX/EXPLAIN: Which option resolves an apparent contradiction?\nCONCLUSION: What conclusion logically follows?" },
      { h: "How to analyze an argument", p: "1) Identify the CONCLUSION (what the author argues)\n2) Identify the PREMISES (the evidence/data presented)\n3) Find the GAP (the logical leap between premises and conclusion)\n4) The correct answer usually attacks this gap" },
      { h: "Classic fallacies that appear", p: "• Correlation ≠ Causation (A and B happen together, therefore A causes B)\n• Alternative cause (maybe another factor is causing the effect)\n• Unrepresentative sample (the study was done with a specific group)\n• Undue generalization (one case doesn't prove the rule)\n• Selection bias (the compared groups are fundamentally different)" },
    ],
  },
];
