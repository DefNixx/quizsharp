import { SECTIONS } from "../../../constants";
import { shuffle } from "../../../data/questions";

// ─── Problem Solving (30 questions) ───

export const PS_QUESTIONS = [
  // #1 — Descuentos secuenciales
  {
    q: "Una tienda ofrece un 20% de descuento en un producto que cuesta $150. Si el cliente tiene un cupón adicional del 10% sobre el precio ya con descuento, ¿cuál es el valor final?",
    options: ["$105,00", "$108,00", "$112,50", "$110,00", "$100,00"],
    answer: 1,
    explanation: "Primer descuento: 150 × 0,80 = $120. Segundo descuento sobre $120: 120 × 0,90 = $108. Cuidado: los descuentos se aplican secuencialmente, no se suman (20%+10% ≠ 30%).",
  },
  // #2 — Producción proporcional
  {
    q: "Si 3 máquinas producen 120 piezas en 4 horas, ¿cuántas piezas producen 5 máquinas en 6 horas?",
    options: ["200", "250", "300", "360", "400"],
    answer: 2,
    explanation: "Tasa por máquina por hora: 120 / (3 × 4) = 10 piezas. Con 5 máquinas por 6 horas: 5 × 6 × 10 = 300 piezas.",
  },
  // #3 — Porcentaje ponderado
  {
    q: "En una sala, el 60% son mujeres. Si el 75% de las mujeres y el 40% de los hombres aprobaron una propuesta, ¿cuál es el porcentaje total de aprobación?",
    options: ["55%", "57%", "59%", "61%", "63%"],
    answer: 3,
    explanation: "Considere 100 personas: 60 mujeres, 40 hombres. Aprobaron: 60×0,75 + 40×0,40 = 45 + 16 = 61. Entonces 61/100 = 61%.",
  },
  // #4 — Interés compuesto
  {
    q: "Una inversión rinde un 8% anual con interés compuesto. ¿Cuál es el valor aproximado de $10.000 después de 2 años?",
    options: ["$11.600", "$11.664", "$11.800", "$12.000", "$10.800"],
    answer: 1,
    explanation: "Interés compuesto: 10.000 × (1,08)² = 10.000 × 1,1664 = $11.664,00.",
  },
  // #5 — Arreglo
  {
    q: "¿De cuántas maneras diferentes pueden sentarse 5 personas en una fila de 3 sillas?",
    options: ["10", "15", "20", "60", "120"],
    answer: 3,
    explanation: "Arreglo A(5,3) = 5!/(5-3)! = 5×4×3 = 60.",
  },
  // #6 — Raíces de ecuación cuadrática
  {
    q: "Si x² - 5x + 6 = 0, ¿cuál es la suma de los valores posibles de 2x?",
    options: ["5", "6", "10", "12", "8"],
    answer: 2,
    explanation: "Las raíces son x=2 y x=3 (suma de raíces = 5). La suma de 2x: 2(2) + 2(3) = 4 + 6 = 10.",
  },
  // #7 — Trabajo conjunto (grifos)
  {
    q: "Un tanque se llena con el grifo A en 6 horas y con el grifo B en 4 horas. Si ambos se abren al mismo tiempo, ¿en cuánto tiempo se llena el tanque?",
    options: ["2h", "2h12min", "2h24min", "2h30min", "3h"],
    answer: 2,
    explanation: "Tasa A = 1/6 por hora, Tasa B = 1/4 por hora. Juntos: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 por hora. Tiempo = 12/5 = 2,4 horas = 2h24min.",
  },
  // #8 — Probabilidad complementaria
  {
    q: "La probabilidad de lluvia el lunes es del 30% y el martes del 40%, de forma independiente. ¿Cuál es la probabilidad de que llueva en al menos uno de los dos días?",
    options: ["58%", "60%", "70%", "42%", "50%"],
    answer: 0,
    explanation: "P(al menos uno) = 1 - P(ninguno) = 1 - (0,70 × 0,60) = 1 - 0,42 = 0,58 = 58%.",
  },
  // #9 — Razón y proporción
  {
    q: "Una receta de pastel usa harina y azúcar en la razón 3:1. Si Juan usó 450 g de harina, ¿cuánto azúcar usó?",
    options: ["100 g", "150 g", "200 g", "225 g", "300 g"],
    answer: 1,
    explanation: "Razón harina:azúcar = 3:1. Si harina = 450, azúcar = 450/3 = 150 g.",
  },
  // #10 — Velocidad media
  {
    q: "Un auto recorre 120 km a 60 km/h en la ida y 120 km a 40 km/h en la vuelta. ¿Cuál es la velocidad media de todo el viaje?",
    options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h", "55 km/h"],
    answer: 0,
    explanation: "Distancia total = 240 km. Tiempo total = 120/60 + 120/40 = 2 + 3 = 5 h. Velocidad media = 240/5 = 48 km/h. ¡No es la media aritmética de las velocidades!",
  },
  // #11 — Trabajo conjunto (trabajadores)
  {
    q: "Ana termina un trabajo en 10 días y Beatriz en 15 días. Trabajando juntas, ¿en cuántos días completan el trabajo?",
    options: ["5 días", "6 días", "7 días", "8 días", "12 días"],
    answer: 1,
    explanation: "Tasa de Ana = 1/10 por día. Tasa de Beatriz = 1/15 por día. Juntas: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Tiempo = 6 días.",
  },
  // #12 — Mezcla de soluciones
  {
    q: "Una solución A tiene 20% de sal y una solución B tiene 50% de sal. Para obtener 600 ml de solución al 30%, ¿cuántos ml de A se deben usar?",
    options: ["200 ml", "300 ml", "350 ml", "400 ml", "450 ml"],
    answer: 3,
    explanation: "0,20x + 0,50(600 - x) = 0,30 × 600 → 0,20x + 300 - 0,50x = 180 → -0,30x = -120 → x = 400 ml de A.",
  },
  // #13 — Combinación
  {
    q: "¿De cuántas maneras se puede elegir un comité de 3 personas de un grupo de 7?",
    options: ["21", "35", "42", "105", "210"],
    answer: 1,
    explanation: "Combinación C(7,3) = 7! / (3! × 4!) = (7×6×5) / (3×2×1) = 35.",
  },
  // #14 — Probabilidad condicional (sin reposición)
  {
    q: "En una urna con 5 bolas rojas y 3 azules, se extrae una bola sin reposición. Si la primera bola extraída es roja, ¿cuál es la probabilidad de que la segunda también sea roja?",
    options: ["4/7", "5/8", "2/7", "5/7", "1/2"],
    answer: 0,
    explanation: "Después de extraer 1 roja: quedan 4 rojas y 3 azules = 7 bolas. P(2.ª roja) = 4/7.",
  },
  // #15 — Triángulo rectángulo (área)
  {
    q: "Un triángulo rectángulo tiene catetos de 6 cm y 8 cm. ¿Cuál es el área de ese triángulo?",
    options: ["14 cm²", "24 cm²", "28 cm²", "48 cm²", "10 cm²"],
    answer: 1,
    explanation: "Área = (base × altura) / 2 = (6 × 8) / 2 = 24 cm².",
  },
  // #16 — Círculo (aumento de área)
  {
    q: "Si el radio de un círculo se aumenta en un 50%, ¿en qué porcentaje aumenta el área?",
    options: ["50%", "75%", "100%", "125%", "150%"],
    answer: 3,
    explanation: "Nuevo radio = 1,5r. Nueva área = π(1,5r)² = 2,25πr². El área original es πr². Aumento = (2,25 - 1)/1 = 1,25 = 125%.",
  },
  // #17 — Progresión aritmética (suma)
  {
    q: "En una progresión aritmética, el primer término es 3 y la razón es 4. ¿Cuál es la suma de los 10 primeros términos?",
    options: ["200", "210", "220", "230", "240"],
    answer: 1,
    explanation: "S₁₀ = (10/2) × [2×3 + (10-1)×4] = 5 × (6 + 36) = 5 × 42 = 210.",
  },
  // #18 — Progresión geométrica (término)
  {
    q: "El primer término de una PG es 2 y la razón es 3. ¿Cuál es el 5.º término?",
    options: ["54", "81", "162", "243", "486"],
    answer: 2,
    explanation: "a₅ = a₁ × q⁴ = 2 × 3⁴ = 2 × 81 = 162.",
  },
  // #19 — Media ponderada
  {
    q: "Un alumno obtuvo 7 en el examen con peso 3 y 9 en el examen con peso 2. ¿Cuál es su media ponderada?",
    options: ["7,5", "7,8", "8,0", "8,2", "8,5"],
    answer: 1,
    explanation: "Media ponderada = (7×3 + 9×2) / (3+2) = (21 + 18) / 5 = 39/5 = 7,8.",
  },
  // #20 — Interés simple
  {
    q: "Un capital de $5.000 se invierte a interés simple del 12% anual por 3 años. ¿Cuál es el monto final?",
    options: ["$5.600", "$6.200", "$6.400", "$6.800", "$7.000"],
    answer: 3,
    explanation: "Intereses = 5.000 × 0,12 × 3 = $1.800. Monto = 5.000 + 1.800 = $6.800.",
  },
  // #21 — Módulo (valor absoluto)
  {
    q: "Si |2x - 6| = 10, ¿cuál es la suma de todos los valores posibles de x?",
    options: ["3", "4", "6", "8", "10"],
    answer: 2,
    explanation: "Caso 1: 2x - 6 = 10 → x = 8. Caso 2: 2x - 6 = -10 → x = -2. Suma = 8 + (-2) = 6.",
  },
  // #22 — Exponentes
  {
    q: "Si 2ˣ = 32, ¿cuál es el valor de 2ˣ⁻²?",
    options: ["4", "8", "16", "30", "128"],
    answer: 1,
    explanation: "2ˣ = 32 = 2⁵, entonces x = 5. 2⁵⁻² = 2³ = 8.",
  },
  // #23 — Factorización
  {
    q: "Si x² - 9 = 0 y x > 0, ¿cuál es el valor de x³ - 27?",
    options: ["0", "9", "18", "27", "54"],
    answer: 0,
    explanation: "x² = 9 y x > 0 → x = 3. x³ - 27 = 27 - 27 = 0.",
  },
  // #24 — Aumento y descuento (ida y vuelta)
  {
    q: "El precio de una acción subió un 25% en un mes y bajó un 20% en el mes siguiente. En relación al precio original, la acción está:",
    options: ["5% más cara", "Al mismo precio", "5% más barata", "1% más cara", "1% más barata"],
    answer: 1,
    explanation: "Precio × 1,25 × 0,80 = Precio × 1,00. La acción volvió al precio original.",
  },
  // #25 — Porcentaje de ganancia
  {
    q: "Un comerciante compró un producto por $80 y lo vendió por $100. ¿Cuál es el porcentaje de ganancia sobre el precio de costo?",
    options: ["15%", "20%", "25%", "30%", "80%"],
    answer: 2,
    explanation: "Ganancia = 100 - 80 = $20. Porcentaje sobre el costo = 20/80 = 0,25 = 25%.",
  },
  // #26 — Encuentro de móviles (velocidad)
  {
    q: "Dos trenes parten al mismo tiempo de ciudades distantes 300 km, en sentidos opuestos (uno al encuentro del otro). Uno va a 80 km/h y el otro a 70 km/h. ¿En cuánto tiempo se encuentran?",
    options: ["1h30min", "2h", "2h30min", "3h", "3h30min"],
    answer: 1,
    explanation: "Velocidad de aproximación = 80 + 70 = 150 km/h. Tiempo = 300/150 = 2 h.",
  },
  // #27 — Conjuntos (inclusión-exclusión)
  {
    q: "¿Cuántos números enteros entre 1 y 100 (inclusive) son divisibles por 3 o por 5?",
    options: ["33", "39", "40", "46", "47"],
    answer: 4,
    explanation: "Divisibles por 3: 33. Divisibles por 5: 20. Divisibles por 15 (ambos): 6. Total = 33 + 20 - 6 = 47.",
  },
  // #28 — Conjuntos (Venn)
  {
    q: "En una clase de 40 alumnos, 25 hablan inglés, 18 hablan español y 7 hablan ambos. ¿Cuántos no hablan ninguno de los dos?",
    options: ["2", "4", "5", "7", "10"],
    answer: 1,
    explanation: "Hablan al menos uno: 25 + 18 - 7 = 36. No hablan ninguno: 40 - 36 = 4.",
  },
  // #29 — Probabilidad (dados)
  {
    q: "¿Cuál es la probabilidad de que, al lanzar dos dados, la suma sea igual a 7?",
    options: ["1/6", "1/12", "5/36", "1/9", "7/36"],
    answer: 0,
    explanation: "Combinaciones con suma 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total = 36. P = 6/36 = 1/6.",
  },
  // #30 — Desigualdad con enteros
  {
    q: "Si 3x - 7 > 5 y x < 6, ¿cuántos valores enteros puede tomar x?",
    options: ["1", "2", "3", "4", "5"],
    answer: 0,
    explanation: "3x > 12 → x > 4. Con x < 6, tenemos 4 < x < 6. El único entero en ese intervalo es x = 5. Total: 1.",
  },
];

// ─── Data Sufficiency (30 questions) ───

const DS_OPTIONS = [
  "La afirmación (1) sola es suficiente, pero la (2) no",
  "La afirmación (2) sola es suficiente, pero la (1) no",
  "Ninguna sola es suficiente, pero las dos juntas sí lo son",
  "Cada afirmación sola ya es suficiente",
  "Las dos afirmaciones juntas aún no son suficientes",
];

export const DS_QUESTIONS = [
  // #1 — Ecuación lineal simple
  {
    q: "¿Cuál es el valor de x?\n\n(1) 2x + 3 = 11\n(2) x es un número entero positivo",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Afirmación (1): 2x + 3 = 11 → 2x = 8 → x = 4. ¡Suficiente! Afirmación (2): x puede ser 1, 2, 3... infinitas posibilidades. Insuficiente. Respuesta: (1) sola es suficiente.",
  },
  // #2 — Comparación simple
  {
    q: "¿Es A mayor que B?\n\n(1) A = B + 5\n(2) B > 0",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Afirmación (1): Si A = B + 5, entonces A siempre es 5 unidades mayor que B, sin importar el valor de B. ¡Suficiente! Afirmación (2): Saber que B > 0 no nos dice nada sobre A. Insuficiente.",
  },
  // #3 — Raíz con signo
  {
    q: "¿Cuál es el valor de y?\n\n(1) y² = 16\n(2) y > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmación (1): y² = 16 → y = 4 o y = -4. Dos valores posibles. ¡Insuficiente! Afirmación (2): y > 0 no define el valor. ¡Insuficiente! Juntas: y² = 16 Y y > 0 → y = 4. ¡Suficiente!",
  },
  // #4 — Edades relativas
  {
    q: "¿Juan es mayor que María?\n\n(1) Juan es 3 años menor que Pedro\n(2) Pedro es 5 años mayor que María",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmación (1): J = P - 3. Sin información sobre María. Insuficiente. Afirmación (2): P = M + 5. Sin información sobre Juan. Insuficiente. Juntas: J = P - 3 = (M + 5) - 3 = M + 2. Juan es 2 años mayor que María. ¡Suficiente!",
  },
  // #5 — Divisibilidad por 6
  {
    q: "¿Es x divisible por 6?\n\n(1) x es divisible por 3\n(2) x es divisible por 2",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "6 = 2 × 3. Debe ser divisible por ambos. Afirmación (1) sola: divisible por 3, pero no necesariamente por 2 (ej: 9). Insuficiente. Afirmación (2) sola: divisible por 2, pero no necesariamente por 3 (ej: 8). Insuficiente. Juntas: divisible por 2 Y por 3 → divisible por 6. ¡Suficiente!",
  },
  // #6 — Precio con descuento (cada una suficiente)
  {
    q: "¿Cuál es el precio del producto?\n\n(1) Con un 15% de descuento, el precio es $170\n(2) Con $30 de descuento, el precio es $170",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Afirmación (1): P × 0,85 = 170 → P = 200. ¡Suficiente! Afirmación (2): P - 30 = 170 → P = 200. ¡Suficiente! Cada una sola resuelve el problema. Respuesta: D.",
  },
  // #7 — Ecuación con raíz y signo
  {
    q: "¿Cuál es el valor de x?\n\n(1) x² = 25\n(2) x < 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmación (1): x = 5 o x = -5. Dos valores. Insuficiente. Afirmación (2): x < 0, pero ¿cuál valor? Insuficiente. Juntas: x² = 25 y x < 0 → x = -5. ¡Suficiente!",
  },
  // #8 — Ecuación cuadrática (raíces reales)
  {
    q: "¿La ecuación x² + bx + 1 = 0 tiene raíces reales?\n\n(1) b = 3\n(2) b > 2",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Discriminante = b² - 4. (1): b=3, Δ=9-4=5>0. Sí, raíces reales. ¡Suficiente! (2): b>2 → b²>4 → Δ>0. Sí. ¡Suficiente! Cada una resuelve.",
  },
  // #9 — Área del triángulo
  {
    q: "¿Cuál es el área del triángulo?\n\n(1) La base mide 10 cm\n(2) La altura relativa a la base mide 6 cm",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1) Solo la base: sin altura, insuficiente. (2) Solo la altura: sin base, insuficiente. Juntas: Área = 10×6/2 = 30 cm². ¡Suficiente!",
  },
  // #10 — Divisibilidad por 12
  {
    q: "¿El entero positivo n es divisible por 12?\n\n(1) n es divisible por 4\n(2) n es divisible por 6",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "12 = 4 × 3. (1): div por 4, pero puede no serlo por 3 (ej: 8). Insuficiente. (2): div por 6, pero puede no serlo por 4 (ej: 18). Insuficiente. Juntas: div por 4 y 6 → MCM(4,6)=12. ¡Suficiente!",
  },
  // #11 — Paridad del producto
  {
    q: "¿El producto m × n es par?\n\n(1) m es par\n(2) n es impar",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): m es par → m×n es par, independientemente de n. ¡Suficiente! (2): n es impar, pero m puede ser par (producto par) o impar (producto impar). Insuficiente.",
  },
  // #12 — Desigualdad
  {
    q: "¿x > 5?\n\n(1) x > 3\n(2) x > 7",
    options: [...DS_OPTIONS],
    answer: 1,
    explanation: "(1): x > 3 — puede ser 4 (no > 5) o 6 (> 5). Insuficiente. (2): x > 7 → con certeza x > 5. ¡Suficiente!",
  },
  // #13 — Módulo de la diferencia
  {
    q: "¿Cuál es el valor de |a - b|?\n\n(1) a = 3\n(2) b = 8",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): solo a, sin b. Insuficiente. (2): solo b, sin a. Insuficiente. Juntas: |3 - 8| = 5. ¡Suficiente!",
  },
  // #14 — Media aritmética
  {
    q: "¿Cuál es la media aritmética de tres números?\n\n(1) La suma de los tres números es 27\n(2) El mayor número es 12",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): Media = 27/3 = 9. ¡Suficiente! (2): Saber solo el mayor no define la suma. Insuficiente.",
  },
  // #15 — Mediana
  {
    q: "¿Cuál es la mediana del conjunto {a, 7, 12}?\n\n(1) a < 5\n(2) a > 15",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): a<5 → ordenado: a, 7, 12. Mediana = 7. ¡Suficiente! (2): a>15 → ordenado: 7, 12, a. Mediana = 12. ¡Suficiente! Cada una resuelve.",
  },
  // #16 — Conjuntos (francés y alemán)
  {
    q: "¿Cuántos alumnos estudian solo francés?\n\n(1) 30 alumnos estudian francés\n(2) 10 alumnos estudian francés y alemán",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): 30 total en francés, pero sin saber la intersección. Insuficiente. (2): 10 en ambos, sin total. Insuficiente. Juntas: 30 - 10 = 20 solo francés. ¡Suficiente!",
  },
  // #17 — Fracción mayor que 1
  {
    q: "¿a/b > 1?\n\n(1) a > b\n(2) b > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): a > b, pero si ambos son negativos (ej: a=-1, b=-2), a/b = 0,5 < 1. Insuficiente. (2): b > 0, sin info de a. Insuficiente. Juntas: a > b > 0, luego a/b > 1. ¡Suficiente!",
  },
  // #18 — Razón
  {
    q: "¿Cuál es la razón x/y?\n\n(1) 2x = 5y\n(2) x - y = 9",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): 2x = 5y → x/y = 5/2. ¡Suficiente! (2): x - y = 9 — infinitas soluciones, razón indeterminada. Insuficiente.",
  },
  // #19 — Área del círculo
  {
    q: "¿Cuál es el área del círculo?\n\n(1) La circunferencia mide 10π\n(2) El diámetro mide 10",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): 2πr = 10π → r = 5. Área = 25π. ¡Suficiente! (2): d = 10 → r = 5. Área = 25π. ¡Suficiente! Cada una resuelve.",
  },
  // #20 — Número primo
  {
    q: "¿El entero n > 1 es primo?\n\n(1) n es impar\n(2) n es divisible solo por 1 y por sí mismo",
    options: [...DS_OPTIONS],
    answer: 1,
    explanation: "(1): n impar puede ser 3 (primo) o 9 (no primo). Insuficiente. (2): Esa es la definición de primo. ¡Suficiente!",
  },
  // #21 — Enteros consecutivos
  {
    q: "¿Cuál es el menor de tres enteros consecutivos?\n\n(1) La suma de los tres es 42\n(2) El mayor es 15",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): n+(n+1)+(n+2) = 42 → 3n+3=42 → n=13. ¡Suficiente! (2): n+2=15 → n=13. ¡Suficiente! Cada una resuelve.",
  },
  // #22 — Salario
  {
    q: "¿Cuál es el salario de María?\n\n(1) El 20% del salario de María es $600\n(2) El salario de María es $1.000 menos que el de Juan",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): 0,20 × S = 600 → S = $3.000. ¡Suficiente! (2): Sin saber el salario de Juan, insuficiente.",
  },
  // #23 — Ganancia o pérdida
  {
    q: "¿La tienda tuvo ganancia en la venta?\n\n(1) El precio de venta fue $120\n(2) El precio de costo fue $150",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): Solo el precio de venta, sin costo. Insuficiente. (2): Solo el costo, sin venta. Insuficiente. Juntas: 120 < 150 → pérdida (no ganancia). Podemos responder 'no'. ¡Suficiente!",
  },
  // #24 — Velocidad
  {
    q: "¿Cuál es la velocidad del tren?\n\n(1) El tren recorrió 180 km\n(2) El viaje duró 2 horas",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): distancia sin tiempo. Insuficiente. (2): tiempo sin distancia. Insuficiente. Juntas: v = 180/2 = 90 km/h. ¡Suficiente!",
  },
  // #25 — Suma de desigualdades
  {
    q: "¿x + y > 10?\n\n(1) x > 7\n(2) y > 3",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): x > 7, pero y desconocido. Insuficiente. (2): y > 3, pero x desconocido. Insuficiente. Juntas: x + y > 7 + 3 = 10. ¡Suficiente!",
  },
  // #26 — Función lineal
  {
    q: "¿Cuál es el valor de f(3), dado que f(x) = ax + b?\n\n(1) a = 2\n(2) b = -1",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): f(3) = 6 + b, b desconocido. Insuficiente. (2): f(3) = 3a - 1, a desconocido. Insuficiente. Juntas: f(3) = 2×3 + (-1) = 5. ¡Suficiente!",
  },
  // #27 — Punto en la recta
  {
    q: "¿El punto (3, k) está en la recta y = 2x + 1?\n\n(1) k = 7\n(2) k es un número impar positivo menor que 10",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "(1): Si k=7, verificamos: y=2(3)+1=7. Sí, está en la recta. ¡Suficiente! (2): k puede ser 1,3,5,7,9. No todos satisfacen y=2(3)+1=7. Insuficiente.",
  },
  // #28 — Exponentes
  {
    q: "¿Cuál es el valor de 3ⁿ?\n\n(1) 3ⁿ⁺¹ = 81\n(2) 9ⁿ = 729",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "(1): 3ⁿ⁺¹=81=3⁴ → n+1=4 → n=3. 3³=27. ¡Suficiente! (2): 9ⁿ=(3²)ⁿ=3²ⁿ=729=3⁶ → 2n=6 → n=3. 3³=27. ¡Suficiente! Cada una resuelve.",
  },
  // #29 — Probabilidad (bolas)
  {
    q: "Una caja contiene solo bolas rojas y azules. ¿Cuál es la probabilidad de sacar una bola roja?\n\n(1) Hay 4 bolas rojas\n(2) Hay 6 bolas azules",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): 4 rojas, pero total desconocido. Insuficiente. (2): 6 azules, pero total desconocido. Insuficiente. Juntas: total = 4+6 = 10. P = 4/10 = 2/5. ¡Suficiente!",
  },
  // #30 — Concentración
  {
    q: "¿Cuál es la concentración de sal en la solución?\n\n(1) Hay 30 g de sal disuelta\n(2) El volumen total de la solución es 500 ml",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "(1): sal sin volumen total. Insuficiente. (2): volumen sin cantidad de sal. Insuficiente. Juntas: 30/500 = 6%. ¡Suficiente!",
  },
];

// ─── Critical Reasoning (30 questions) ───

export const CR_QUESTIONS = [
  // #1 — Debilitar (trabajo remoto)
  {
    q: "Una empresa implementó trabajo remoto a tiempo completo y observó un aumento del 20% en la productividad. El director concluyó que el trabajo presencial era el principal obstáculo para la productividad de los empleados.\n\n¿Cuál de las alternativas debilita más la conclusión del director?",
    options: [
      "Algunos empleados reportaron sentirse aislados trabajando desde casa",
      "Durante el mismo período, la empresa también reemplazó todo el software de gestión por herramientas más modernas",
      "La empresa competidora mantuvo el trabajo presencial y tuvo una caída en la productividad",
      "Los empleados en trabajo remoto trabajan en promedio 2 horas más por día",
      "El director trabaja presencialmente en la sede de la empresa",
    ],
    answer: 1,
    explanation: "La conclusión asume que el trabajo remoto causó el aumento de productividad. La alternativa B muestra una causa alternativa (nuevo software), debilitando la relación causal entre trabajo remoto y productividad.",
  },
  // #2 — Premisa asumida (tablets)
  {
    q: "Investigaciones muestran que los alumnos que usan tablets en la escuela tienen notas un 15% más altas que los que no las usan. Por lo tanto, proporcionar tablets a todos los alumnos mejoraría el rendimiento académico general.\n\n¿Qué premisa se está asumiendo en este argumento?",
    options: [
      "Las tablets son más baratas que los libros de texto",
      "Los alumnos que ya usan tablets no son, sistemáticamente, de familias con más recursos y apoyo educativo",
      "Los profesores necesitan capacitación para usar tablets en el aula",
      "La tecnología en la educación es siempre beneficiosa",
      "Las notas son la mejor medida del aprendizaje",
    ],
    answer: 1,
    explanation: "El argumento asume que la correlación tablet→notas es causal. Pero puede haber sesgo de selección: tal vez las familias que dan tablets a sus hijos también ofrecen más apoyo. La premisa oculta es que los dos grupos son comparables.",
  },
  // #3 — Paradoja (bolsas plásticas)
  {
    q: "La municipalidad prohibió las bolsas plásticas en los supermercados. Después de 1 año, la cantidad de plástico en los vertederos de la ciudad no disminuyó.\n\n¿Cuál de las alternativas explica mejor este resultado aparentemente contradictorio?",
    options: [
      "La población de la ciudad creció un 2% en el período",
      "Los consumidores comenzaron a comprar bolsas de basura de plástico más grueso para reemplazar las bolsas que antes reutilizaban",
      "Algunas personas todavía guardan bolsas plásticas antiguas en casa",
      "El reciclaje de plástico es ineficiente",
      "Los supermercados ofrecen bolsas de papel como alternativa",
    ],
    answer: 1,
    explanation: "La alternativa B resuelve la paradoja: la prohibición eliminó las bolsas finas, pero las personas compensaron comprando bolsas plásticas más gruesas (usando más plástico en total). Es el llamado 'efecto rebote'.",
  },
  // #4 — Debilitar (seguridad empresa)
  {
    q: "La empresa X gasta un 30% más en seguridad que la empresa Y, pero tiene el doble de incidentes de seguridad. Por lo tanto, la inversión en seguridad de la Empresa X es ineficiente.\n\n¿Qué información, si fuera verdadera, debilitaría más esta conclusión?",
    options: [
      "La empresa X tiene un departamento de TI más grande",
      "La empresa X opera en un sector con un riesgo 5 veces mayor que el de la empresa Y",
      "La empresa Y terceriza parte de su seguridad",
      "El CEO de la empresa X es ingeniero de formación",
      "Ambas empresas siguen normas ISO de seguridad",
    ],
    answer: 1,
    explanation: "Si la empresa X opera en un sector mucho más riesgoso, tener solo el doble de incidentes en ese contexto puede significar que la inversión es, en realidad, eficiente. La comparación directa sin considerar el nivel de riesgo es injusta.",
  },
  // #5 — Falacia correlación-causalidad (librerías)
  {
    q: "Las ciudades con más librerías per cápita presentan menores índices de criminalidad. Un concejal propone abrir 50 nuevas librerías en la ciudad para reducir la violencia.\n\n¿Cuál de las alternativas identifica la principal falla en el razonamiento del concejal?",
    options: [
      "Las librerías pueden no ser económicamente viables en todas las regiones",
      "Confunde correlación con causalidad — ambos factores probablemente son causados por un tercer factor, como el ingreso y la educación",
      "La criminalidad depende de factores estacionales",
      "Las bibliotecas públicas serían una alternativa más barata",
      "La cantidad de librerías ha ido disminuyendo globalmente",
    ],
    answer: 1,
    explanation: "Clásica falacia de correlación vs. causalidad. No son las librerías las que reducen la criminalidad. Probablemente, los barrios con mayor ingreso y educación tienen más librerías Y menos crimen. Abrir librerías no ataca la causa real.",
  },
  // #6 — Fortalecer (turno nocturno)
  {
    q: "Una fábrica reemplazó el turno nocturno de 8 horas por dos turnos de 4 horas con un intervalo de 2 horas entre ellos. La producción nocturna cayó un 30%.\n\n¿Cuál alternativa fortalece más la decisión de la fábrica, a pesar de la caída en la producción?",
    options: [
      "Los empleados del turno nocturno reciben un adicional del 20%",
      "Los accidentes laborales en el turno nocturno cayeron un 80% después del cambio",
      "La fábrica produce bienes de consumo no esenciales",
      "Otras fábricas del sector mantienen el turno de 8 horas",
      "El costo de la energía eléctrica es menor durante la noche",
    ],
    answer: 1,
    explanation: "La caída drástica del 80% en accidentes justifica el cambio incluso con la pérdida de producción. La seguridad del trabajador y los costos por accidentes (indemnizaciones, licencias) pueden compensar fácilmente la caída del 30% en la producción.",
  },
  // #7 — Debilitar (campaña publicitaria)
  {
    q: "Una cadena de tiendas afirma que su nueva campaña publicitaria en redes sociales fue responsable del aumento del 40% en las ventas del último trimestre.\n\n¿Cuál de las alternativas debilita más esta afirmación?",
    options: [
      "La campaña costó $500.000",
      "El último trimestre coincidió con el período navideño, cuando las ventas históricamente suben entre un 35% y un 45%",
      "La empresa también tiene anuncios en televisión",
      "Los competidores no invirtieron en redes sociales",
      "La empresa contrató una agencia de publicidad reconocida",
    ],
    answer: 1,
    explanation: "Si las ventas ya suben entre un 35% y un 45% cada Navidad, el aumento del 40% puede no tener relación con la campaña — es el efecto estacional.",
  },
  // #8 — Fortalecer (té verde)
  {
    q: "Investigadores descubrieron que ratas alimentadas con extracto de té verde tuvieron un 30% menos de tumores que el grupo de control. Concluyeron que el té verde tiene propiedades anticancerígenas.\n\n¿Cuál de las alternativas fortalece más esta conclusión?",
    options: [
      "El té verde es popular en varios países asiáticos",
      "El estudio fue replicado en otros tres laboratorios con resultados similares",
      "Las ratas del experimento eran de una raza específica",
      "El extracto fue administrado en dosis altas",
      "Estudios anteriores ya habían investigado otros tipos de té",
    ],
    answer: 1,
    explanation: "La replicación en otros laboratorios fortalece la conclusión, pues reduce la posibilidad de que el resultado sea un artefacto del estudio original.",
  },
  // #9 — Premisa asumida (expedientes médicos)
  {
    q: "Los hospitales que adoptaron expedientes médicos electrónicos reportan un 25% menos de errores médicos. Por lo tanto, todos los hospitales deberían digitalizar sus expedientes para reducir errores.\n\n¿Qué premisa se está asumiendo?",
    options: [
      "Los expedientes electrónicos son más caros que los de papel",
      "Los hospitales que adoptaron expedientes electrónicos no tenían, previamente, sistemas de control de calidad superiores a los demás",
      "Los médicos prefieren expedientes digitales",
      "La tecnología eventualmente falla",
      "Los errores médicos son la principal causa de muertes en hospitales",
    ],
    answer: 1,
    explanation: "Si los hospitales que digitalizaron ya eran más organizados, la reducción de errores puede deberse a eso, no a los expedientes. Se asume que los grupos son comparables.",
  },
  // #10 — Paradoja (laptops)
  {
    q: "Una empresa de tecnología ofreció laptops gratuitas a todos sus empleados para uso personal. Después de seis meses, la satisfacción de los empleados con la empresa disminuyó.\n\n¿Cuál de las alternativas explica mejor este resultado paradójico?",
    options: [
      "Las laptops eran de marcas variadas",
      "Los empleados empezaron a ser contactados para trabajar fuera del horario laboral, ya que la empresa argumentaba que tenían el equipo para ello",
      "No todos los empleados necesitaban una laptop",
      "La empresa también ofreció cursos de informática",
      "Algunos empleados ya tenían laptops personales",
    ],
    answer: 1,
    explanation: "El 'regalo' se convirtió en un instrumento de presión: la empresa pasó a exigir trabajo fuera del horario, empeorando la calidad de vida.",
  },
  // #11 — Conclusión (evaluaciones escolares)
  {
    q: "Escuelas que eliminaron los exámenes tradicionales y adoptaron evaluaciones por proyectos reportan que los alumnos se sienten menos ansiosos. Sin embargo, las notas promedio en exámenes estandarizados nacionales de esas escuelas cayeron un 10%.\n\n¿Qué conclusión puede inferirse más razonablemente?",
    options: [
      "Las evaluaciones por proyectos son siempre mejores que los exámenes tradicionales",
      "La reducción de la ansiedad y el desempeño en exámenes estandarizados pueden requerir enfoques diferentes",
      "Las escuelas deberían volver al sistema de exámenes tradicionales",
      "Los exámenes estandarizados nacionales no miden nada útil",
      "Los profesores de esas escuelas están menos calificados",
    ],
    answer: 1,
    explanation: "La conclusión equilibrada reconoce que diferentes objetivos (bienestar vs. desempeño en pruebas) pueden exigir estrategias distintas.",
  },
  // #12 — Debilitar (plantación de árboles)
  {
    q: "El gobierno afirma que el programa de plantación de árboles compensó totalmente las emisiones de carbono del país, ya que se plantaron 5 millones de árboles en el último año.\n\n¿Cuál de las alternativas debilita más esta afirmación?",
    options: [
      "Los árboles jóvenes absorben mucho menos carbono que los árboles maduros y tardarán décadas en alcanzar su capacidad plena de absorción",
      "Otros países también plantaron árboles",
      "El programa costó $200 millones",
      "Los árboles fueron plantados en diferentes regiones",
      "El programa contó con voluntarios",
    ],
    answer: 0,
    explanation: "Si los árboles jóvenes absorben poco carbono, la plantación reciente no compensa las emisiones actuales — la compensación tardará décadas.",
  },
  // #13 — Fortalecer (ciclovías)
  {
    q: "La ciudad implementó ciclovías en todas las avenidas principales. El alcalde afirma que esto redujo la congestión del tránsito.\n\n¿Qué información fortalecería más la afirmación del alcalde?",
    options: [
      "Las encuestas de opinión muestran que los residentes aprueban las ciclovías",
      "El tiempo promedio de desplazamiento en auto disminuyó un 18% desde la implementación, incluso con un aumento en el número de vehículos",
      "Las ciclovías costaron $50 millones",
      "Otras ciudades también implementaron ciclovías",
      "El número de ciclistas aumentó un 200%",
    ],
    answer: 1,
    explanation: "Datos concretos que muestran una reducción en el tiempo de desplazamiento, incluso con más vehículos, fortalecen directamente la afirmación.",
  },
  // #14 — Premisa asumida (reuniones)
  {
    q: "Una empresa decidió eliminar las reuniones de más de 30 minutos, ya que constató que los empleados que participan en muchas reuniones largas son menos productivos.\n\n¿Qué premisa se está asumiendo?",
    options: [
      "Las reuniones cortas son más agradables",
      "Son las reuniones largas las que causan la baja productividad, y no que los proyectos más complejos requieran tanto más reuniones como métricas diferentes de productividad",
      "Todos los empleados participan en reuniones",
      "La empresa tiene muchos empleados",
      "Las reuniones de 30 minutos son suficientes para cualquier tema",
    ],
    answer: 1,
    explanation: "La empresa asume causalidad (reuniones → baja productividad), pero puede ser al revés: los proyectos complejos exigen más reuniones y tienen una productividad diferente.",
  },
  // #15 — Paradoja (vitaminas)
  {
    q: "Un estudio mostró que las personas que toman vitaminas diariamente tienen la misma tasa de enfermedades que las personas que no las toman.\n\n¿Cuál de las alternativas explica mejor esta aparente contradicción con la idea de que las vitaminas mejoran la salud?",
    options: [
      "Las vitaminas se venden sin receta médica",
      "Las personas que toman vitaminas tienden a tener peores hábitos alimenticios, ya que creen que el suplemento compensa una dieta inadecuada",
      "Existen muchas marcas de vitaminas en el mercado",
      "Algunas vitaminas son más caras que otras",
      "Los médicos no siempre recomiendan vitaminas",
    ],
    answer: 1,
    explanation: "El 'licenciamiento moral': quien toma vitaminas se relaja en la dieta, anulando el posible beneficio del suplemento.",
  },
  // #16 — Conclusión (gemelos)
  {
    q: "Un estudio de 20 años siguió a gemelos idénticos criados por separado. Los gemelos presentaron niveles de inteligencia muy similares, a pesar de ambientes completamente diferentes.\n\n¿Qué conclusión está más sustentada por estos datos?",
    options: [
      "El ambiente no tiene absolutamente ninguna influencia en la inteligencia",
      "Los factores genéticos desempeñan un papel significativo en la determinación de la inteligencia",
      "Los gemelos idénticos son siempre igualmente inteligentes",
      "La inteligencia no puede medirse con precisión",
      "Los gemelos criados juntos serían más inteligentes",
    ],
    answer: 1,
    explanation: "La conclusión cuidadosa: la genética tiene un papel 'significativo' (no absoluto). No elimina la influencia del ambiente, solo demuestra el peso genético.",
  },
  // #17 — Debilitar (IA diagnóstico)
  {
    q: "Una empresa afirma que su IA para diagnósticos médicos es más precisa que los médicos humanos, ya que en una prueba con 1.000 radiografías, la IA acertó el 95% frente al 88% de los médicos.\n\n¿Qué información debilitaría más esta afirmación?",
    options: [
      "La IA es costosa de implementar",
      "Las imágenes de la prueba eran de casos claros y típicos, mientras que los médicos frecuentemente enfrentan casos ambiguos y atípicos en la práctica real",
      "La empresa tiene inversores de renombre",
      "Otras empresas también desarrollan IAs para salud",
      "Los médicos a veces discrepan entre sí",
    ],
    answer: 1,
    explanation: "Si la prueba usó solo casos fáciles, el desempeño de la IA puede no mantenerse en situaciones reales. La prueba no refleja la complejidad de la práctica médica.",
  },
  // #18 — Fortalecer (tutoría)
  {
    q: "Un programa de tutoría individual para alumnos de bajos ingresos resultó en un aumento promedio de 2 puntos en las notas. Los críticos dicen que la inversión no se justifica por el resultado modesto.\n\n¿Qué información fortalecería más la defensa del programa?",
    options: [
      "El programa emplea a 200 tutores",
      "Los alumnos participantes tuvieron una tasa de deserción escolar un 60% menor y una tasa de ingreso a la universidad 3 veces mayor que el grupo de control",
      "El programa funciona desde hace 5 años",
      "Los tutores son voluntarios",
      "Otros países tienen programas similares",
    ],
    answer: 1,
    explanation: "El impacto va más allá de las notas: la reducción de la deserción y el aumento del acceso a la universidad muestran que el programa es mucho más eficaz de lo que las notas sugieren.",
  },
  // #19 — Premisa asumida (autos eléctricos)
  {
    q: "El gobierno incentiva el cambio de autos a gasolina por autos eléctricos para reducir las emisiones de carbono del transporte.\n\n¿Qué premisa es necesaria para que esta política sea eficaz?",
    options: [
      "Los autos eléctricos son más modernos que los autos a gasolina",
      "La matriz energética que abastece a los autos eléctricos no es predominantemente basada en combustibles fósiles",
      "Los consumidores prefieren los autos eléctricos",
      "Los autos eléctricos son más baratos",
      "Las automotrices apoyan la política",
    ],
    answer: 1,
    explanation: "Si la electricidad proviene de termoeléctricas a carbón, cambiar a auto eléctrico puede no reducir las emisiones — solo transfiere la contaminación a las centrales.",
  },
  // #20 — Paradoja (precio del café)
  {
    q: "Una cafetería aumentó el precio del café un 30%. Sorprendentemente, la cantidad de clientes diarios aumentó un 15% al mes siguiente.\n\n¿Cuál de las alternativas explica mejor este resultado inesperado?",
    options: [
      "El café es una bebida popular mundialmente",
      "Los clientes interpretaron el precio más alto como señal de calidad superior y pasaron a preferir la cafetería en vez de competidores más baratos",
      "La cafetería está en una zona concurrida",
      "El precio del té también aumentó",
      "Los empleados de la cafetería son amables",
    ],
    answer: 1,
    explanation: "Efecto Veblen: un precio más alto puede ser percibido como señal de calidad superior, atrayendo clientes que asocian precio alto con producto premium.",
  },
  // #21 — Conclusión (radares)
  {
    q: "La cantidad de accidentes de tránsito en una ciudad bajó un 40% tras la instalación de radares de velocidad. Sin embargo, la cantidad de multas por exceso de velocidad se triplicó.\n\n¿Qué conclusión está más lógicamente sustentada?",
    options: [
      "Los radares están defectuosos",
      "Los radares están detectando infracciones que antes pasaban desapercibidas, y la mayor fiscalización está contribuyendo a la reducción de accidentes graves",
      "Los conductores están manejando más rápido",
      "La ciudad debería retirar los radares",
      "Las multas son muy caras",
    ],
    answer: 1,
    explanation: "Más multas = más detección. La fiscalización efectiva hace que los conductores reduzcan la velocidad con el tiempo, disminuyendo los accidentes.",
  },
  // #22 — Debilitar (vino y longevidad)
  {
    q: "Las personas que beben una copa de vino al día viven en promedio 3 años más que las abstemias. Por lo tanto, beber vino moderadamente aumenta la longevidad.\n\n¿Cuál alternativa debilita más esta conclusión?",
    options: [
      "El vino tinto contiene antioxidantes",
      "Las personas que beben moderadamente tienden a tener mayores ingresos, mejor acceso a la salud y hábitos de vida más saludables en general",
      "Algunas personas son alérgicas al alcohol",
      "El consumo excesivo de alcohol es perjudicial",
      "La investigación fue publicada en una revista científica",
    ],
    answer: 1,
    explanation: "Variables de confusión: quienes beben moderadamente pueden tener un estilo de vida general más saludable. La longevidad puede no ser causada por el vino.",
  },
  // #23 — Fortalecer (chatbots)
  {
    q: "Una empresa reemplazó a los agentes de atención humanos por chatbots y afirma que la satisfacción del cliente mejoró.\n\n¿Qué información fortalece más esta afirmación?",
    options: [
      "Los chatbots son más baratos que los agentes humanos",
      "Encuestas independientes con clientes muestran que el 78% prefiere la rapidez del chatbot y el índice NPS subió 20 puntos",
      "La empresa es líder en el sector tecnológico",
      "Los agentes humanos fueron reubicados",
      "Otras empresas también usan chatbots",
    ],
    answer: 1,
    explanation: "Encuestas independientes con datos concretos (78% de preferencia, NPS +20) proporcionan evidencia objetiva de mejora en la satisfacción.",
  },
  // #24 — Premisa asumida (medicamento)
  {
    q: "Científicos probaron un nuevo medicamento en 500 voluntarios y reportaron una eficacia del 85%. Recomiendan que el medicamento sea aprobado para uso general.\n\n¿Qué premisa se está asumiendo?",
    options: [
      "El medicamento es fácil de producir",
      "Los 500 voluntarios son representativos de la población general en términos de edad, sexo, etnia y condiciones de salud",
      "Existen otros medicamentos en el mercado",
      "El estudio duró un año",
      "Los científicos son reconocidos",
    ],
    answer: 1,
    explanation: "Si los voluntarios no son representativos (ej: solo jóvenes sanos), la eficacia puede no mantenerse en la población general.",
  },
  // #25 — Paradoja (lista de asistencia)
  {
    q: "Una universidad eliminó la lista de asistencia obligatoria. La asistencia promedio de los alumnos aumentó un 10%.\n\n¿Cuál de las alternativas explica mejor este resultado paradójico?",
    options: [
      "La universidad tiene buena reputación",
      "Sin la obligatoriedad, los profesores se esforzaron más por hacer las clases atractivas, y los alumnos empezaron a asistir por interés genuino",
      "Los alumnos viven cerca de la universidad",
      "La universidad también cambió el horario de las clases",
      "Algunas clases son en auditorios grandes",
    ],
    answer: 1,
    explanation: "La eliminación de la obligatoriedad creó incentivos para que los profesores mejoraran las clases y para que los alumnos asistieran por motivación real.",
  },
  // #26 — Conclusión (contaminación y biodiversidad)
  {
    q: "El nivel de contaminación en el río X bajó un 50% tras el cierre de la fábrica Y. Sin embargo, la biodiversidad del río no presentó una mejora significativa dos años después.\n\n¿Qué conclusión es más razonable?",
    options: [
      "La fábrica debería reabrirse",
      "La recuperación de la biodiversidad en ecosistemas degradados puede requerir un tiempo significativamente mayor que la simple reducción de la contaminación",
      "La contaminación no afecta la biodiversidad",
      "La medición de la biodiversidad es incorrecta",
      "Otras fábricas contaminan el mismo río",
    ],
    answer: 1,
    explanation: "Los ecosistemas necesitan mucho más tiempo para recuperarse que lo que tarda la contaminación en disminuir. La recuperación biológica es un proceso lento.",
  },
  // #27 — Debilitar (policiamiento)
  {
    q: "La tasa de criminalidad bajó un 20% desde que la ciudad aumentó la cantidad de policías en las calles. El secretario de seguridad afirma que más policías es la solución para la criminalidad.\n\n¿Cuál alternativa debilita más la conclusión del secretario?",
    options: [
      "Los nuevos policías están bien entrenados",
      "En el mismo período, el desempleo en la ciudad se redujo a la mitad y los programas sociales se ampliaron significativamente",
      "La ciudad vecina no aumentó el policiamiento",
      "La población de la ciudad creció un 5%",
      "El presupuesto de seguridad es elevado",
    ],
    answer: 1,
    explanation: "Causas alternativas: la reducción del desempleo y los programas sociales pueden ser los verdaderos responsables de la caída de la criminalidad.",
  },
  // #28 — Fortalecer (dieta mediterránea)
  {
    q: "Un nutricionista afirma que la dieta mediterránea reduce el riesgo de enfermedades cardíacas.\n\n¿Qué información fortalecería más esta afirmación?",
    options: [
      "La dieta mediterránea incluye muchas frutas",
      "Un ensayo clínico aleatorizado con 10.000 participantes durante 10 años mostró que el grupo con dieta mediterránea tuvo un 35% menos de eventos cardíacos",
      "Los médicos frecuentemente recomiendan cambios en la dieta",
      "La dieta mediterránea es sabrosa",
      "Muchas personas en el Mediterráneo viven bastante",
    ],
    answer: 1,
    explanation: "Un ensayo clínico aleatorizado grande y prolongado es el estándar de oro de la evidencia médica, proporcionando la comprobación más fuerte posible.",
  },
  // #29 — Premisa asumida (libros vs tablets)
  {
    q: "Una escuela decidió sustituir todos los libros de papel por tablets, argumentando que esto mejorará el aprendizaje de los alumnos.\n\n¿Qué premisa se está asumiendo?",
    options: [
      "Las tablets son más livianas que los libros",
      "El formato digital es al menos tan eficaz como el formato impreso para la absorción y retención del conocimiento",
      "Todos los alumnos quieren usar tablets",
      "Las tablets tienen batería de larga duración",
      "La escuela tiene internet rápida",
    ],
    answer: 1,
    explanation: "Si el formato digital fuera menos eficaz para aprender, el cambio perjudicaría a los alumnos. La escuela asume que digital ≥ impreso en términos de aprendizaje.",
  },
  // #30 — Paradoja (reciclaje y consumo)
  {
    q: "Una ciudad inició un programa de reciclaje integral. La cantidad total de basura enviada a los vertederos aumentó al año siguiente.\n\n¿Cuál de las alternativas explica mejor esta paradoja?",
    options: [
      "El reciclaje es un proceso complejo",
      "Al sentirse menos culpables por consumir, las personas pasaron a consumir significativamente más, generando basura en un volumen que superó lo que se recicló",
      "El programa incluyó nuevos puntos de recolección",
      "No todo material es reciclable",
      "La población de la ciudad creció un 1%",
    ],
    answer: 1,
    explanation: "Efecto rebote / licenciamiento moral: el reciclaje hizo que las personas consumieran más, anulando el beneficio del programa.",
  },
];

// ─── Simulado dinámico ───

export function buildSimulado() {
  return [
    ...shuffle(PS_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "PS" })),
    ...shuffle(DS_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "DS" })),
    ...shuffle(CR_QUESTIONS).slice(0, 5).map(q => ({ ...q, type: "CR" })),
  ];
}

export const learnSections = [
  {
    key: SECTIONS.LEARN_PS, title: "Problem Solving", color: "#00c2ff", icon: "🧮",
    content: [
      { h: "¿Qué es?", p: "Son preguntas de matemáticas y lógica con 5 alternativas. Necesitas encontrar la respuesta correcta. Parece simple, pero el desafío está en el tiempo — cada pregunta debería resolverse en ~2 minutos." },
      { h: "¿Qué temas incluye?", p: "Aritmética (porcentajes, proporciones, promedios), Álgebra (ecuaciones, inecuaciones, funciones), Geometría básica (áreas, perímetros, ángulos), Probabilidad y Combinatoria, Interpretación de datos (tablas, gráficos)." },
      { h: "Estrategias clave", p: "1) BACKSOLVING: prueba las alternativas en la ecuación en vez de resolver algebraicamente. Comienza por la alternativa C (la del medio).\n2) PICKING NUMBERS: sustituye las variables por números fáciles (2, 3, 10, 100) para probar.\n3) ELIMINACIÓN: muchas veces puedes eliminar 2-3 alternativas absurdas de inmediato.\n4) ESTIMACIÓN: si las alternativas están muy separadas, redondea los números y calcula rápido." },
    ],
  },
  {
    key: SECTIONS.LEARN_DS, title: "Data Sufficiency", color: "#b388ff", icon: "📊",
    content: [
      { h: "¿Qué es?", p: "El formato más diferente del examen. Recibes una pregunta y dos afirmaciones. NO necesitas resolver el problema — solo necesitas determinar si la información es suficiente para resolverlo." },
      { h: "Las 5 alternativas (¡SIEMPRE las mismas!)", p: "(A) La afirmación 1 sola es suficiente, pero la 2 sola NO\n(B) La afirmación 2 sola es suficiente, pero la 1 sola NO\n(C) Ninguna sola es suficiente, pero las dos JUNTAS son suficientes\n(D) CADA UNA sola ya es suficiente\n(E) Incluso las dos JUNTAS aún NO son suficientes" },
      { h: "MEMORIZA ESTO", p: "Las alternativas anteriores son FIJAS en TODA pregunta de DS. Si memorizas esto antes del examen, ahorras tiempo valioso. Durante el examen, ya conoces las opciones y te concentras en el razonamiento." },
      { h: "Método de resolución", p: "1) Analiza la afirmación (1) SOLA → ¿suficiente o no?\n2) Analiza la afirmación (2) SOLA → ¿suficiente o no?\n3) Si ninguna sola fue suficiente, analiza las DOS JUNTAS.\n\nConsejo crucial: 'suficiente' significa que llegas a UN ÚNICO valor/respuesta. Si la afirmación permite 2 o más respuestas, es INSUFICIENTE." },
      { h: "Trampa común", p: "¡No calcules el valor final! Mucha gente pierde tiempo resolviendo toda la cuenta. Solo necesitas saber SI ES POSIBLE resolver, no CUÁL es la respuesta." },
    ],
  },
  {
    key: SECTIONS.LEARN_CR, title: "Critical Reasoning", color: "#69f0ae", icon: "🧠",
    content: [
      { h: "¿Qué es?", p: "Lees un argumento corto (2-5 frases) y respondes sobre su estructura lógica. No necesitas matemáticas — necesitas pensamiento crítico." },
      { h: "Tipos de pregunta", p: "DEBILITAR: ¿Cuál opción hace la conclusión menos probable?\nFORTALECER: ¿Cuál opción hace la conclusión más probable?\nPREMISA ASUMIDA: ¿Qué suposición oculta hace el argumento?\nPARADOJA/EXPLICAR: ¿Cuál opción resuelve una contradicción aparente?\nCONCLUSIÓN: ¿Cuál es la conclusión que se sigue lógicamente?" },
      { h: "Cómo analizar un argumento", p: "1) Identifica la CONCLUSIÓN (lo que el autor defiende)\n2) Identifica las PREMISAS (las evidencias/datos presentados)\n3) Encuentra la BRECHA (el salto lógico entre premisas y conclusión)\n4) La respuesta correcta generalmente ataca esa brecha" },
      { h: "Falacias clásicas que aparecen", p: "• Correlación ≠ Causalidad (A y B ocurren juntos, por lo tanto A causa B)\n• Causa alternativa (tal vez otro factor está causando el efecto)\n• Muestra no representativa (la investigación se hizo con un grupo específico)\n• Generalización indebida (un caso no prueba la regla)\n• Sesgo de selección (los grupos comparados son diferentes en la base)" },
    ],
  },
];
