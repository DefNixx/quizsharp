import { SECTIONS } from "../../../constants";
import { shuffle } from "../../../data/questions";

// ─── Problem Solving (30 questions) ───

export const PS_QUESTIONS = [
  // #1 — Sequential discounts
  {
    q: "A store offers a 20% discount on a product that costs $150. If the customer has an additional 10% coupon on the already discounted price, what is the final price?",
    options: ["$105.00", "$108.00", "$112.50", "$110.00", "$100.00"],
    answer: 1,
    explanation: "First discount: 150 × 0.80 = $120. Second discount on $120: 120 × 0.90 = $108. Be careful: discounts are applied sequentially, not added (20%+10% ≠ 30%).",
  },
  // #2 — Proportional production
  {
    q: "If 3 machines produce 120 parts in 4 hours, how many parts do 5 machines produce in 6 hours?",
    options: ["200", "250", "300", "360", "400"],
    answer: 2,
    explanation: "Rate per machine per hour: 120 / (3 × 4) = 10 parts. With 5 machines for 6 hours: 5 × 6 × 10 = 300 parts.",
  },
  // #3 — Weighted percentage
  {
    q: "In a room, 60% are women. If 75% of the women and 40% of the men approved a proposal, what is the total approval percentage?",
    options: ["55%", "57%", "59%", "61%", "63%"],
    answer: 3,
    explanation: "Consider 100 people: 60 women, 40 men. Approved: 60×0.75 + 40×0.40 = 45 + 16 = 61. Total = 61/100 = 61%.",
  },
  // #4 — Compound interest
  {
    q: "An investment yields 8% per year with compound interest. What is the approximate value of $10,000 after 2 years?",
    options: ["$11,600", "$11,664", "$11,800", "$12,000", "$10,800"],
    answer: 1,
    explanation: "Compound interest: 10,000 × (1.08)² = 10,000 × 1.1664 = $11,664.00.",
  },
  // #5 — Arrangement
  {
    q: "In how many different ways can 5 people sit in a row of 3 chairs?",
    options: ["10", "15", "20", "60", "120"],
    answer: 3,
    explanation: "Arrangement A(5,3) = 5!/(5-3)! = 5×4×3 = 60.",
  },
  // #6 — Quadratic equation roots
  {
    q: "If x² - 5x + 6 = 0, what is the sum of the possible values of 2x?",
    options: ["5", "6", "10", "12", "8"],
    answer: 2,
    explanation: "The roots are x=2 and x=3 (sum of roots = 5). Sum of 2x: 2(2) + 2(3) = 4 + 6 = 10.",
  },
  // #7 — Combined work (faucets)
  {
    q: "A tank is filled by faucet A in 6 hours and by faucet B in 4 hours. If both are opened at the same time, how long does it take to fill the tank?",
    options: ["2h", "2h12min", "2h24min", "2h30min", "3h"],
    answer: 2,
    explanation: "Rate A = 1/6 per hour, Rate B = 1/4 per hour. Together: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 12/5 = 2.4 hours = 2h24min.",
  },
  // #8 — Complementary probability
  {
    q: "The probability of rain on Monday is 30% and on Tuesday is 40%, independently. What is the probability of rain on at least one of the two days?",
    options: ["58%", "60%", "70%", "42%", "50%"],
    answer: 0,
    explanation: "P(at least one) = 1 - P(none) = 1 - (0.70 × 0.60) = 1 - 0.42 = 0.58 = 58%.",
  },
  // #9 — Ratio and proportion
  {
    q: "A cake recipe uses flour and sugar in a 3:1 ratio. If John used 450 g of flour, how much sugar did he use?",
    options: ["100 g", "150 g", "200 g", "225 g", "300 g"],
    answer: 1,
    explanation: "Flour to sugar ratio = 3:1. If flour = 450, sugar = 450/3 = 150 g.",
  },
  // #10 — Average speed
  {
    q: "A car travels 120 km at 60 km/h going and 120 km at 40 km/h returning. What is the average speed for the entire trip?",
    options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h", "55 km/h"],
    answer: 0,
    explanation: "Total distance = 240 km. Total time = 120/60 + 120/40 = 2 + 3 = 5 h. Average speed = 240/5 = 48 km/h. It is not the arithmetic mean of the speeds!",
  },
  // #11 — Combined work (workers)
  {
    q: "Ana finishes a job in 10 days and Beatriz in 15 days. Working together, in how many days do they complete the job?",
    options: ["5 days", "6 days", "7 days", "8 days", "12 days"],
    answer: 1,
    explanation: "Ana's rate = 1/10 per day. Beatriz's rate = 1/15 per day. Together: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Time = 6 days.",
  },
  // #12 — Mixture of solutions
  {
    q: "Solution A has 20% salt and solution B has 50% salt. To obtain 600 ml of a 30% solution, how many ml of A should be used?",
    options: ["200 ml", "300 ml", "350 ml", "400 ml", "450 ml"],
    answer: 3,
    explanation: "0.20x + 0.50(600 - x) = 0.30 × 600 → 0.20x + 300 - 0.50x = 180 → -0.30x = -120 → x = 400 ml of A.",
  },
  // #13 — Combination
  {
    q: "In how many ways can a committee of 3 people be chosen from a group of 7?",
    options: ["21", "35", "42", "105", "210"],
    answer: 1,
    explanation: "Combination C(7,3) = 7! / (3! × 4!) = (7×6×5) / (3×2×1) = 35.",
  },
  // #14 — Conditional probability (without replacement)
  {
    q: "In an urn with 5 red balls and 3 blue balls, one ball is drawn without replacement. If the first ball drawn is red, what is the probability that the second is also red?",
    options: ["4/7", "5/8", "2/7", "5/7", "1/2"],
    answer: 0,
    explanation: "After drawing 1 red: 4 red and 3 blue remain = 7 balls. P(2nd red) = 4/7.",
  },
  // #15 — Right triangle (area)
  {
    q: "A right triangle has legs of 6 cm and 8 cm. What is the area of this triangle?",
    options: ["14 cm²", "24 cm²", "28 cm²", "48 cm²", "10 cm²"],
    answer: 1,
    explanation: "Area = (base × height) / 2 = (6 × 8) / 2 = 24 cm².",
  },
  // #16 — Circle (area increase)
  {
    q: "If the radius of a circle is increased by 50%, by what percentage does the area increase?",
    options: ["50%", "75%", "100%", "125%", "150%"],
    answer: 3,
    explanation: "New radius = 1.5r. New area = π(1.5r)² = 2.25πr². Original area is πr². Increase = (2.25 - 1)/1 = 1.25 = 125%.",
  },
  // #17 — Arithmetic progression (sum)
  {
    q: "In an arithmetic progression, the first term is 3 and the common difference is 4. What is the sum of the first 10 terms?",
    options: ["200", "210", "220", "230", "240"],
    answer: 1,
    explanation: "S₁₀ = (10/2) × [2×3 + (10-1)×4] = 5 × (6 + 36) = 5 × 42 = 210.",
  },
  // #18 — Geometric progression (term)
  {
    q: "The first term of a geometric progression is 2 and the common ratio is 3. What is the 5th term?",
    options: ["54", "81", "162", "243", "486"],
    answer: 2,
    explanation: "a₅ = a₁ × r⁴ = 2 × 3⁴ = 2 × 81 = 162.",
  },
  // #19 — Weighted average
  {
    q: "A student scored 7 on a test with weight 3 and 9 on a test with weight 2. What is the weighted average?",
    options: ["7.5", "7.8", "8.0", "8.2", "8.5"],
    answer: 1,
    explanation: "Weighted average = (7×3 + 9×2) / (3+2) = (21 + 18) / 5 = 39/5 = 7.8.",
  },
  // #20 — Simple interest
  {
    q: "A principal of $5,000 is invested at simple interest of 12% per year for 3 years. What is the final amount?",
    options: ["$5,600", "$6,200", "$6,400", "$6,800", "$7,000"],
    answer: 3,
    explanation: "Interest = 5,000 × 0.12 × 3 = $1,800. Amount = 5,000 + 1,800 = $6,800.",
  },
  // #21 — Absolute value
  {
    q: "If |2x - 6| = 10, what is the sum of all possible values of x?",
    options: ["3", "4", "6", "8", "10"],
    answer: 2,
    explanation: "Case 1: 2x - 6 = 10 → x = 8. Case 2: 2x - 6 = -10 → x = -2. Sum = 8 + (-2) = 6.",
  },
  // #22 — Exponents
  {
    q: "If 2ˣ = 32, what is the value of 2ˣ⁻²?",
    options: ["4", "8", "16", "30", "128"],
    answer: 1,
    explanation: "2ˣ = 32 = 2⁵, so x = 5. 2⁵⁻² = 2³ = 8.",
  },
  // #23 — Factoring
  {
    q: "If x² - 9 = 0 and x > 0, what is the value of x³ - 27?",
    options: ["0", "9", "18", "27", "54"],
    answer: 0,
    explanation: "x² = 9 and x > 0 → x = 3. x³ - 27 = 27 - 27 = 0.",
  },
  // #24 — Increase and decrease (round trip)
  {
    q: "The price of a stock rose 25% in one month and fell 20% the following month. Relative to the original price, the stock is:",
    options: ["5% more expensive", "At the same price", "5% cheaper", "1% more expensive", "1% cheaper"],
    answer: 1,
    explanation: "Price × 1.25 × 0.80 = Price × 1.00. The stock returned to the original price.",
  },
  // #25 — Profit percentage
  {
    q: "A merchant bought a product for $80 and sold it for $100. What is the profit percentage based on the cost price?",
    options: ["15%", "20%", "25%", "30%", "80%"],
    answer: 2,
    explanation: "Profit = 100 - 80 = $20. Percentage on cost = 20/80 = 0.25 = 25%.",
  },
  // #26 — Meeting of moving objects (speed)
  {
    q: "Two trains depart at the same time from cities 300 km apart, heading toward each other. One travels at 80 km/h and the other at 70 km/h. How long until they meet?",
    options: ["1h30min", "2h", "2h30min", "3h", "3h30min"],
    answer: 1,
    explanation: "Closing speed = 80 + 70 = 150 km/h. Time = 300/150 = 2 h.",
  },
  // #27 — Sets (inclusion-exclusion)
  {
    q: "How many integers between 1 and 100 (inclusive) are divisible by 3 or by 5?",
    options: ["33", "39", "40", "46", "47"],
    answer: 4,
    explanation: "Divisible by 3: 33. Divisible by 5: 20. Divisible by 15 (both): 6. Total = 33 + 20 - 6 = 47.",
  },
  // #28 — Sets (Venn)
  {
    q: "In a class of 40 students, 25 speak English, 18 speak Spanish, and 7 speak both. How many speak neither language?",
    options: ["2", "4", "5", "7", "10"],
    answer: 1,
    explanation: "Speak at least one: 25 + 18 - 7 = 36. Speak neither: 40 - 36 = 4.",
  },
  // #29 — Probability (dice)
  {
    q: "What is the probability that when rolling two dice, the sum equals 7?",
    options: ["1/6", "1/12", "5/36", "1/9", "7/36"],
    answer: 0,
    explanation: "Combinations with sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total = 36. P = 6/36 = 1/6.",
  },
  // #30 — Inequality with integers
  {
    q: "If 3x - 7 > 5 and x < 6, how many integer values can x take?",
    options: ["1", "2", "3", "4", "5"],
    answer: 0,
    explanation: "3x > 12 → x > 4. With x < 6, we have 4 < x < 6. The only integer in this range is x = 5. Total: 1.",
  },
];

// ─── Data Sufficiency (30 questions) ───

const DS_OPTIONS = [
  "Statement (1) alone is sufficient, but (2) is not",
  "Statement (2) alone is sufficient, but (1) is not",
  "Neither alone is sufficient, but both together are sufficient",
  "Each statement alone is sufficient",
  "Both statements together are still not sufficient",
];

export const DS_QUESTIONS = [
  // #1 — Simple linear equation
  {
    q: "What is the value of x?\n\n(1) 2x + 3 = 11\n(2) x is a positive integer",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Statement (1): 2x + 3 = 11 → 2x = 8 → x = 4. Sufficient! Statement (2): x could be 1, 2, 3... infinite possibilities. Insufficient. Answer: (1) alone is sufficient.",
  },
  // #2 — Simple comparison
  {
    q: "Is A greater than B?\n\n(1) A = B + 5\n(2) B > 0",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Statement (1): If A = B + 5, then A is always 5 units greater than B, regardless of B's value. Sufficient! Statement (2): Knowing B > 0 tells us nothing about A. Insufficient.",
  },
  // #3 — Root with sign
  {
    q: "What is the value of y?\n\n(1) y² = 16\n(2) y > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Statement (1): y² = 16 → y = 4 or y = -4. Two possible values. Insufficient! Statement (2): y > 0 doesn't define the value. Insufficient! Together: y² = 16 AND y > 0 → y = 4. Sufficient!",
  },
  // #4 — Relative ages
  {
    q: "Is John older than Mary?\n\n(1) John is 3 years younger than Peter\n(2) Peter is 5 years older than Mary",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Statement (1): J = P - 3. No info about Mary. Insufficient. Statement (2): P = M + 5. No info about John. Insufficient. Together: J = P - 3 = (M + 5) - 3 = M + 2. John is 2 years older than Mary. Sufficient!",
  },
  // #5 — Divisibility by 6
  {
    q: "Is x divisible by 6?\n\n(1) x is divisible by 3\n(2) x is divisible by 2",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "6 = 2 × 3. Must be divisible by both. Statement (1) alone: divisible by 3, but not necessarily by 2 (e.g., 9). Insufficient. Statement (2) alone: divisible by 2, but not necessarily by 3 (e.g., 8). Insufficient. Together: divisible by 2 AND by 3 → divisible by 6. Sufficient!",
  },
  // #6 — Price with discount (each sufficient)
  {
    q: "What is the price of the product?\n\n(1) With a 15% discount, the price is $170\n(2) With a $30 discount, the price is $170",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Statement (1): P × 0.85 = 170 → P = 200. Sufficient! Statement (2): P - 30 = 170 → P = 200. Sufficient! Each one alone solves it. Answer: D.",
  },
  // #7 — Equation with root and sign
  {
    q: "What is the value of x?\n\n(1) x² = 25\n(2) x < 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Statement (1): x = 5 or x = -5. Two values. Insufficient. Statement (2): x < 0, but which value? Insufficient. Together: x² = 25 and x < 0 → x = -5. Sufficient!",
  },
  // #8 — Quadratic equation (real roots)
  {
    q: "Does the equation x² + bx + 1 = 0 have real roots?\n\n(1) b = 3\n(2) b > 2",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Discriminant = b² - 4. (1): b=3, Δ=9-4=5>0. Yes, real roots. Sufficient! (2): b>2 → b²>4 → Δ>0. Yes. Sufficient! Each one solves it.",
  },
  // #9 — Area of triangle
  {
    q: "What is the area of the triangle?\n\n(1) The base measures 10 cm\n(2) The height relative to the base measures 6 cm",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1) Only the base: without the height, insufficient. (2) Only the height: without the base, insufficient. Together: Area = 10×6/2 = 30 cm². Sufficient!",
  },
  // #10 — Divisibility by 12
  {
    q: "Is the positive integer n divisible by 12?\n\n(1) n is divisible by 4\n(2) n is divisible by 6",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "12 = 4 × 3. (1): divisible by 4, but may not be by 3 (e.g., 8). Insufficient. (2): divisible by 6, but may not be by 4 (e.g., 18). Insufficient. Together: divisible by 4 and 6 → LCM(4,6)=12. Sufficient!",
  },
  // #11 — Parity of product
  {
    q: "Is the product m × n even?\n\n(1) m is even\n(2) n is odd",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): m is even → m×n is even, regardless of n. Sufficient! (2): n is odd, but m could be even (even product) or odd (odd product). Insufficient.",
  },
  // #12 — Inequality
  {
    q: "Is x > 5?\n\n(1) x > 3\n(2) x > 7",
    options: [...DS_OPTIONS],
    answer: 1,
    explanation: "(1): x > 3 — could be 4 (not > 5) or 6 (> 5). Insufficient. (2): x > 7 → certainly x > 5. Sufficient!",
  },
  // #13 — Absolute value of difference
  {
    q: "What is the value of |a - b|?\n\n(1) a = 3\n(2) b = 8",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): only a, without b. Insufficient. (2): only b, without a. Insufficient. Together: |3 - 8| = 5. Sufficient!",
  },
  // #14 — Arithmetic mean
  {
    q: "What is the arithmetic mean of three numbers?\n\n(1) The sum of the three numbers is 27\n(2) The largest number is 12",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): Mean = 27/3 = 9. Sufficient! (2): Knowing only the largest doesn't define the sum. Insufficient.",
  },
  // #15 — Median
  {
    q: "What is the median of the set {a, 7, 12}?\n\n(1) a < 5\n(2) a > 15",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): a<5 → sorted: a, 7, 12. Median = 7. Sufficient! (2): a>15 → sorted: 7, 12, a. Median = 12. Sufficient! Each one solves it.",
  },
  // #16 — Sets (French and German)
  {
    q: "How many students study only French?\n\n(1) 30 students study French\n(2) 10 students study both French and German",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): 30 total in French, but without knowing the intersection. Insufficient. (2): 10 in both, without the total. Insufficient. Together: 30 - 10 = 20 study only French. Sufficient!",
  },
  // #17 — Fraction greater than 1
  {
    q: "Is a/b > 1?\n\n(1) a > b\n(2) b > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): a > b, but if both are negative (e.g., a=-1, b=-2), a/b = 0.5 < 1. Insufficient. (2): b > 0, no info about a. Insufficient. Together: a > b > 0, so a/b > 1. Sufficient!",
  },
  // #18 — Ratio
  {
    q: "What is the ratio x/y?\n\n(1) 2x = 5y\n(2) x - y = 9",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): 2x = 5y → x/y = 5/2. Sufficient! (2): x - y = 9 — infinite solutions, ratio is indeterminate. Insufficient.",
  },
  // #19 — Area of circle
  {
    q: "What is the area of the circle?\n\n(1) The circumference measures 10π\n(2) The diameter measures 10",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): 2πr = 10π → r = 5. Area = 25π. Sufficient! (2): d = 10 → r = 5. Area = 25π. Sufficient! Each one solves it.",
  },
  // #20 — Prime number
  {
    q: "Is the integer n > 1 prime?\n\n(1) n is odd\n(2) n is divisible only by 1 and itself",
    options: [...DS_OPTIONS],
    answer: 1,
    explanation: "(1): n odd could be 3 (prime) or 9 (not prime). Insufficient. (2): That is the definition of prime! Sufficient.",
  },
  // #21 — Consecutive integers
  {
    q: "What is the smallest of three consecutive integers?\n\n(1) The sum of the three is 42\n(2) The largest is 15",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): n+(n+1)+(n+2) = 42 → 3n+3=42 → n=13. Sufficient! (2): n+2=15 → n=13. Sufficient! Each one solves it.",
  },
  // #22 — Salary
  {
    q: "What is Mary's salary?\n\n(1) 20% of Mary's salary is $600\n(2) Mary's salary is $1,000 less than John's",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): 0.20 × S = 600 → S = $3,000. Sufficient! (2): Without knowing John's salary, insufficient.",
  },
  // #23 — Profit or loss
  {
    q: "Did the store make a profit on the sale?\n\n(1) The selling price was $120\n(2) The cost price was $150",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): Only the selling price, without the cost. Insufficient. (2): Only the cost, without the selling price. Insufficient. Together: 120 < 150 → loss (no profit). We can answer 'no'. Sufficient!",
  },
  // #24 — Speed
  {
    q: "What is the speed of the train?\n\n(1) The train traveled 180 km\n(2) The trip lasted 2 hours",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): distance without time. Insufficient. (2): time without distance. Insufficient. Together: v = 180/2 = 90 km/h. Sufficient!",
  },
  // #25 — Sum of inequalities
  {
    q: "Is x + y > 10?\n\n(1) x > 7\n(2) y > 3",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): x > 7, but y is unknown. Insufficient. (2): y > 3, but x is unknown. Insufficient. Together: x + y > 7 + 3 = 10. Sufficient!",
  },
  // #26 — Linear function
  {
    q: "What is the value of f(3), given that f(x) = ax + b?\n\n(1) a = 2\n(2) b = -1",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): f(3) = 6 + b, b unknown. Insufficient. (2): f(3) = 3a - 1, a unknown. Insufficient. Together: f(3) = 2×3 + (-1) = 5. Sufficient!",
  },
  // #27 — Point on a line
  {
    q: "Is the point (3, k) on the line y = 2x + 1?\n\n(1) k = 7\n(2) k is an odd positive number less than 10",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): If k=7, we check: y=2(3)+1=7. Yes, it is on the line! Sufficient. (2): k could be 1,3,5,7,9. Not all satisfy y=2(3)+1=7. Insufficient.",
  },
  // #28 — Exponents
  {
    q: "What is the value of 3ⁿ?\n\n(1) 3ⁿ⁺¹ = 81\n(2) 9ⁿ = 729",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): 3ⁿ⁺¹=81=3⁴ → n+1=4 → n=3. 3³=27. Sufficient! (2): 9ⁿ=(3²)ⁿ=3²ⁿ=729=3⁶ → 2n=6 → n=3. 3³=27. Sufficient! Each one solves it.",
  },
  // #29 — Probability (balls)
  {
    q: "A box contains only red and blue balls. What is the probability of drawing a red ball?\n\n(1) There are 4 red balls\n(2) There are 6 blue balls",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): 4 red, but total unknown. Insufficient. (2): 6 blue, but total unknown. Insufficient. Together: total = 4+6 = 10. P = 4/10 = 2/5. Sufficient!",
  },
  // #30 — Concentration
  {
    q: "What is the salt concentration in the solution?\n\n(1) There are 30 g of dissolved salt\n(2) The total volume of the solution is 500 ml",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): salt without total volume. Insufficient. (2): volume without amount of salt. Insufficient. Together: 30/500 = 6%. Sufficient!",
  },
];

// ─── Critical Reasoning (30 questions) ───

export const CR_QUESTIONS = [
  // #1 — Weaken (remote work)
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
    explanation: "The conclusion assumes remote work caused the productivity increase. Option B shows an alternative cause (new software), weakening the causal link between remote work and productivity.",
  },
  // #2 — Assumed premise (tablets)
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
    explanation: "The argument assumes the tablet-to-grades correlation is causal. But there may be selection bias: perhaps families that give tablets to their children also offer more support. The hidden premise is that the two groups are comparable.",
  },
  // #3 — Paradox (plastic bags)
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
  // #4 — Weaken (company security)
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
  // #5 — Correlation-causation fallacy (bookstores)
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
  // #6 — Strengthen (night shift)
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
  // #7 — Weaken (advertising campaign)
  {
    q: "A retail chain claims that its new social media advertising campaign was responsible for the 40% increase in sales last quarter.\n\nWhich of the following most weakens this claim?",
    options: [
      "The campaign cost $500,000",
      "The last quarter coincided with the Christmas season, when sales historically rise 35-45%",
      "The company also has television advertisements",
      "Competitors did not invest in social media",
      "The company hired a renowned advertising agency",
    ],
    answer: 1,
    explanation: "If sales already rise 35-45% every Christmas, the 40% increase may have nothing to do with the campaign — it's the seasonal effect.",
  },
  // #8 — Strengthen (green tea)
  {
    q: "Researchers found that rats fed green tea extract had 30% fewer tumors than the control group. They concluded that green tea has anti-cancer properties.\n\nWhich of the following most strengthens this conclusion?",
    options: [
      "Green tea is popular in several Asian countries",
      "The study was replicated in three other laboratories with similar results",
      "The rats in the experiment were of a specific breed",
      "The extract was administered in high doses",
      "Previous studies had already investigated other types of tea",
    ],
    answer: 1,
    explanation: "Replication in other laboratories strengthens the conclusion, as it reduces the chance that the result was an artifact of the original study.",
  },
  // #9 — Assumed premise (medical records)
  {
    q: "Hospitals that adopted electronic medical records report 25% fewer medical errors. Therefore, all hospitals should digitize their records to reduce errors.\n\nWhat assumption is being made?",
    options: [
      "Electronic records are more expensive than paper records",
      "The hospitals that adopted electronic records did not previously have quality control systems superior to the others",
      "Doctors prefer digital records",
      "Technology eventually fails",
      "Medical errors are the leading cause of death in hospitals",
    ],
    answer: 1,
    explanation: "If the hospitals that digitized were already more organized, the error reduction might be due to that, not the records. It is assumed that the groups are comparable.",
  },
  // #10 — Paradox (laptops)
  {
    q: "A technology company offered free laptops to all its employees for personal use. After six months, employee satisfaction with the company decreased.\n\nWhich of the following best explains this paradoxical result?",
    options: [
      "The laptops were from various brands",
      "Employees began being contacted to work outside of business hours, as the company argued they had the equipment for it",
      "Not all employees needed a laptop",
      "The company also offered computer courses",
      "Some employees already had personal laptops",
    ],
    answer: 1,
    explanation: "The 'gift' became a tool for demands: the company began requiring work outside of hours, worsening quality of life.",
  },
  // #11 — Conclusion (school assessments)
  {
    q: "Schools that eliminated traditional exams and adopted project-based assessments report that students feel less anxious. However, average scores on national standardized exams at those schools dropped 10%.\n\nWhich conclusion can be most reasonably inferred?",
    options: [
      "Project-based assessments are always better than traditional exams",
      "Reducing anxiety and performing well on standardized exams may require different approaches",
      "The schools should return to the traditional exam system",
      "National standardized exams measure nothing useful",
      "The teachers at those schools are less qualified",
    ],
    answer: 1,
    explanation: "The balanced conclusion recognizes that different objectives (well-being vs. test performance) may require distinct strategies.",
  },
  // #12 — Weaken (tree planting)
  {
    q: "The government claims that its tree-planting program fully offset the country's carbon emissions, as 5 million trees were planted last year.\n\nWhich of the following most weakens this claim?",
    options: [
      "Young trees absorb much less carbon than mature trees and will take decades to reach full absorption capacity",
      "Other countries also planted trees",
      "The program cost $200 million",
      "The trees were planted in different regions",
      "The program relied on volunteers",
    ],
    answer: 0,
    explanation: "If young trees absorb little carbon, the recent planting does not offset current emissions — the compensation will take decades.",
  },
  // #13 — Strengthen (bike lanes)
  {
    q: "The city implemented bike lanes on all main avenues. The mayor claims this reduced traffic congestion.\n\nWhich information would most strengthen the mayor's claim?",
    options: [
      "Opinion polls show that residents approve of the bike lanes",
      "The average car commute time decreased 18% since implementation, even with an increase in the number of vehicles",
      "The bike lanes cost $50 million",
      "Other cities have also implemented bike lanes",
      "The number of cyclists increased by 200%",
    ],
    answer: 1,
    explanation: "Concrete data showing reduced commute time, even with more vehicles, directly strengthens the claim.",
  },
  // #14 — Assumed premise (meetings)
  {
    q: "A company decided to eliminate meetings longer than 30 minutes, as it found that employees who attend many long meetings are less productive.\n\nWhat assumption is being made?",
    options: [
      "Short meetings are more pleasant",
      "It is the long meetings that cause low productivity, rather than more complex projects requiring both more meetings and different productivity metrics",
      "All employees attend meetings",
      "The company has many employees",
      "30-minute meetings are sufficient for any topic",
    ],
    answer: 1,
    explanation: "The company assumes causation (meetings → low productivity), but the reverse may be true: complex projects require more meetings and have different productivity metrics.",
  },
  // #15 — Paradox (vitamins)
  {
    q: "A study showed that people who take vitamins daily have the same rate of illness as people who don't.\n\nWhich of the following best explains this apparent contradiction with the idea that vitamins improve health?",
    options: [
      "Vitamins are sold without a prescription",
      "People who take vitamins tend to have worse eating habits because they believe the supplement compensates for a poor diet",
      "There are many vitamin brands on the market",
      "Some vitamins are more expensive than others",
      "Doctors don't always recommend vitamins",
    ],
    answer: 1,
    explanation: "'Moral licensing': people who take vitamins relax their diet, canceling out the potential benefit of the supplement.",
  },
  // #16 — Conclusion (twins)
  {
    q: "A 20-year study followed identical twins raised separately. The twins showed very similar intelligence levels despite completely different environments.\n\nWhich conclusion is most supported by these data?",
    options: [
      "The environment has absolutely no influence on intelligence",
      "Genetic factors play a significant role in determining intelligence",
      "Identical twins are always equally intelligent",
      "Intelligence cannot be measured accurately",
      "Twins raised together would be more intelligent",
    ],
    answer: 1,
    explanation: "The careful conclusion: genetics plays a 'significant' (not absolute) role. It doesn't eliminate environmental influence, only demonstrates the weight of genetics.",
  },
  // #17 — Weaken (AI diagnosis)
  {
    q: "A company claims that its AI for medical diagnostics is more accurate than human doctors, as in a test with 1,000 X-rays, the AI was correct 95% of the time versus 88% for doctors.\n\nWhich information would most weaken this claim?",
    options: [
      "The AI is expensive to implement",
      "The test images were of clear, typical cases, while doctors frequently deal with ambiguous and atypical cases in real practice",
      "The company has well-known investors",
      "Other companies also develop AIs for healthcare",
      "Doctors sometimes disagree with each other",
    ],
    answer: 1,
    explanation: "If the test used only easy cases, the AI's performance may not hold in real situations. The test doesn't reflect the complexity of medical practice.",
  },
  // #18 — Strengthen (tutoring)
  {
    q: "An individual tutoring program for low-income students resulted in an average increase of 2 points in grades. Critics say the investment isn't justified by the modest result.\n\nWhich information would most strengthen the defense of the program?",
    options: [
      "The program employs 200 tutors",
      "Participating students had a 60% lower dropout rate and a 3 times higher university enrollment rate than the control group",
      "The program has been running for 5 years",
      "The tutors are volunteers",
      "Other countries have similar programs",
    ],
    answer: 1,
    explanation: "The impact goes beyond grades: reduced dropout rates and increased university access show that the program is much more effective than grades alone suggest.",
  },
  // #19 — Assumed premise (electric cars)
  {
    q: "The government encourages replacing gasoline cars with electric cars to reduce carbon emissions from transportation.\n\nWhat premise is necessary for this policy to be effective?",
    options: [
      "Electric cars are more modern than gasoline cars",
      "The energy grid that powers electric cars is not predominantly based on fossil fuels",
      "Consumers prefer electric cars",
      "Electric cars are cheaper",
      "Automakers support the policy",
    ],
    answer: 1,
    explanation: "If electricity comes from coal power plants, switching to electric cars may not reduce emissions — it just transfers pollution to the power plants.",
  },
  // #20 — Paradox (coffee price)
  {
    q: "A coffee shop raised the price of coffee by 30%. Surprisingly, the number of daily customers increased by 15% the following month.\n\nWhich of the following best explains this unexpected result?",
    options: [
      "Coffee is a popular beverage worldwide",
      "Customers interpreted the higher price as a sign of superior quality and began preferring the coffee shop over cheaper competitors",
      "The coffee shop is located in a busy area",
      "The price of tea also increased",
      "The coffee shop employees are friendly",
    ],
    answer: 1,
    explanation: "Veblen effect: a higher price can be perceived as a sign of superior quality, attracting customers who associate high price with a premium product.",
  },
  // #21 — Conclusion (speed cameras)
  {
    q: "The number of traffic accidents in a city dropped 40% after the installation of speed cameras. However, the number of speeding tickets tripled.\n\nWhich conclusion is most logically supported?",
    options: [
      "The speed cameras are malfunctioning",
      "The cameras are detecting violations that previously went unnoticed, and the increased enforcement is contributing to the reduction in serious accidents",
      "Drivers are driving faster",
      "The city should remove the speed cameras",
      "The fines are too expensive",
    ],
    answer: 1,
    explanation: "More tickets = more detection. Effective enforcement causes drivers to reduce speed over time, decreasing accidents.",
  },
  // #22 — Weaken (wine and longevity)
  {
    q: "People who drink one glass of wine per day live an average of 3 years longer than abstainers. Therefore, drinking wine moderately increases longevity.\n\nWhich option most weakens this conclusion?",
    options: [
      "Red wine contains antioxidants",
      "People who drink moderately tend to have higher income, better access to healthcare, and generally healthier lifestyle habits",
      "Some people are allergic to alcohol",
      "Excessive alcohol consumption is harmful",
      "The research was published in a scientific journal",
    ],
    answer: 1,
    explanation: "Confounding variables: moderate drinkers may have a generally healthier lifestyle. The longevity may not be caused by the wine.",
  },
  // #23 — Strengthen (chatbots)
  {
    q: "A company replaced human agents with chatbots and claims that customer satisfaction improved.\n\nWhich information most strengthens this claim?",
    options: [
      "Chatbots are cheaper than human agents",
      "Independent customer surveys show that 78% prefer the speed of chatbots and the NPS score increased by 20 points",
      "The company is a leader in the technology sector",
      "The human agents were reassigned",
      "Other companies also use chatbots",
    ],
    answer: 1,
    explanation: "Independent surveys with concrete data (78% preference, NPS +20) provide objective evidence of improved satisfaction.",
  },
  // #24 — Assumed premise (medication)
  {
    q: "Scientists tested a new medication on 500 volunteers and reported 85% efficacy. They recommend that the medication be approved for general use.\n\nWhat assumption is being made?",
    options: [
      "The medication is easy to produce",
      "The 500 volunteers are representative of the general population in terms of age, sex, ethnicity, and health conditions",
      "Other medications exist on the market",
      "The study lasted one year",
      "The scientists are renowned",
    ],
    answer: 1,
    explanation: "If the volunteers are not representative (e.g., only young healthy people), the efficacy may not hold in the general population.",
  },
  // #25 — Paradox (attendance)
  {
    q: "A university eliminated mandatory attendance. Average student attendance increased by 10%.\n\nWhich of the following best explains this paradoxical result?",
    options: [
      "The university has a good reputation",
      "Without the requirement, professors made more effort to make classes engaging, and students began attending out of genuine interest",
      "Students live close to the university",
      "The university also changed class schedules",
      "Some classes are in large auditoriums",
    ],
    answer: 1,
    explanation: "Eliminating the requirement created incentives for professors to improve their classes and for students to attend out of genuine motivation.",
  },
  // #26 — Conclusion (pollution and biodiversity)
  {
    q: "Pollution levels in river X dropped 50% after factory Y was closed. However, the river's biodiversity showed no significant improvement two years later.\n\nWhich conclusion is most reasonable?",
    options: [
      "The factory should be reopened",
      "Biodiversity recovery in degraded ecosystems may require significantly more time than simply reducing pollution",
      "Pollution does not affect biodiversity",
      "The biodiversity measurement is incorrect",
      "Other factories pollute the same river",
    ],
    answer: 1,
    explanation: "Ecosystems need much more time to recover than it takes for pollution to decrease. Biological recovery is a slow process.",
  },
  // #27 — Weaken (policing)
  {
    q: "The crime rate dropped 20% since the city increased the number of police officers on the streets. The security secretary claims that more officers is the solution to crime.\n\nWhich option most weakens the secretary's conclusion?",
    options: [
      "The new officers are well-trained",
      "During the same period, unemployment in the city was cut in half and social programs were significantly expanded",
      "The neighboring city did not increase policing",
      "The city's population grew by 5%",
      "The security budget is high",
    ],
    answer: 1,
    explanation: "Alternative causes: reduced unemployment and social programs may be the real reasons behind the drop in crime.",
  },
  // #28 — Strengthen (Mediterranean diet)
  {
    q: "A nutritionist claims that the Mediterranean diet reduces the risk of heart disease.\n\nWhich information would most strengthen this claim?",
    options: [
      "The Mediterranean diet includes many fruits",
      "A randomized clinical trial with 10,000 participants over 10 years showed that the Mediterranean diet group had 35% fewer cardiac events",
      "Doctors frequently recommend dietary changes",
      "The Mediterranean diet is tasty",
      "Many people in the Mediterranean region live long lives",
    ],
    answer: 1,
    explanation: "A large, long-term randomized clinical trial is the gold standard of medical evidence, providing the strongest possible proof.",
  },
  // #29 — Assumed premise (books vs tablets)
  {
    q: "A school decided to replace all paper books with tablets, arguing that this will improve student learning.\n\nWhat assumption is being made?",
    options: [
      "Tablets are lighter than books",
      "The digital format is at least as effective as the printed format for knowledge absorption and retention",
      "All students want to use tablets",
      "The tablets have long battery life",
      "The school has fast internet",
    ],
    answer: 1,
    explanation: "If the digital format is less effective for learning, the switch would harm students. The school assumes that digital is at least as good as print in terms of learning.",
  },
  // #30 — Paradox (recycling and consumption)
  {
    q: "A city launched a comprehensive recycling program. The total amount of waste sent to landfills increased the following year.\n\nWhich of the following best explains this paradox?",
    options: [
      "Recycling is a complex process",
      "Feeling less guilty about consuming, people began consuming significantly more, generating waste in volume that exceeded what was recycled",
      "The program included new collection points",
      "Not all materials are recyclable",
      "The city's population grew by 1%",
    ],
    answer: 1,
    explanation: "Rebound effect / moral licensing: recycling made people consume more, negating the benefit of the program.",
  },
];

// ─── Dynamic Simulado ───

export function buildSimulado() {
  return [
    ...shuffle(PS_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "PS" })),
    ...shuffle(DS_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "DS" })),
    ...shuffle(CR_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "CR" })),
  ];
}

// ─── Learn Sections ───

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
