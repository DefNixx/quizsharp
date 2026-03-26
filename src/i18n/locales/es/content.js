import { SECTIONS } from "../../../constants";

export const PS_QUESTIONS = [
  {
    q: "Una tienda ofrece un 20% de descuento en un producto que cuesta $150. Si el cliente tiene un cupón adicional del 10% sobre el precio ya con descuento, ¿cuál es el valor final?",
    options: ["$105,00", "$108,00", "$112,50", "$110,00", "$100,00"],
    answer: 1,
    explanation: "Primer descuento: 150 × 0,80 = $120. Segundo descuento sobre $120: 120 × 0,90 = $108. Cuidado: los descuentos se aplican secuencialmente, no se suman (20%+10% ≠ 30%).",
  },
  {
    q: "Si 3 máquinas producen 120 piezas en 4 horas, ¿cuántas piezas producen 5 máquinas en 6 horas?",
    options: ["200", "250", "300", "360", "400"],
    answer: 2,
    explanation: "Tasa por máquina por hora: 120 / (3 × 4) = 10 piezas. Con 5 máquinas por 6 horas: 5 × 6 × 10 = 300 piezas.",
  },
  {
    q: "En una sala, el 60% son mujeres. Si el 75% de las mujeres y el 40% de los hombres aprobaron una propuesta, ¿cuál es el porcentaje total de aprobación?",
    options: ["55%", "57%", "59%", "61%", "63%"],
    answer: 3,
    explanation: "Considere 100 personas: 60 mujeres, 40 hombres. Aprobaron: 60×0,75 + 40×0,40 = 45 + 16 = 61. Entonces 61/100 = 61%.",
  },
  {
    q: "Una inversión rinde un 8% anual con interés compuesto. ¿Cuál es el valor aproximado de $10.000 después de 2 años?",
    options: ["$11.600", "$11.664", "$11.800", "$12.000", "$10.800"],
    answer: 1,
    explanation: "Interés compuesto: 10.000 × (1,08)² = 10.000 × 1,1664 = $11.664,00.",
  },
  {
    q: "¿De cuántas maneras diferentes pueden sentarse 5 personas en una fila de 3 sillas?",
    options: ["10", "15", "20", "60", "120"],
    answer: 3,
    explanation: "Arreglo A(5,3) = 5!/(5-3)! = 5×4×3 = 60.",
  },
  {
    q: "Si x² - 5x + 6 = 0, ¿cuál es la suma de los valores posibles de 2x?",
    options: ["5", "6", "10", "12", "8"],
    answer: 2,
    explanation: "Las raíces son x=2 y x=3 (suma de raíces = 5). La suma de 2x: 2(2) + 2(3) = 4 + 6 = 10.",
  },
  {
    q: "Un tanque se llena con el grifo A en 6 horas y con el grifo B en 4 horas. Si ambos se abren al mismo tiempo, ¿en cuánto tiempo se llena el tanque?",
    options: ["2h", "2h12min", "2h24min", "2h30min", "3h"],
    answer: 2,
    explanation: "Tasa A = 1/6 por hora, Tasa B = 1/4 por hora. Juntos: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 por hora. Tiempo = 12/5 = 2,4 horas = 2h24min.",
  },
  {
    q: "La probabilidad de lluvia el lunes es del 30% y el martes del 40%, de forma independiente. ¿Cuál es la probabilidad de que llueva en al menos uno de los dos días?",
    options: ["58%", "60%", "70%", "42%", "50%"],
    answer: 0,
    explanation: "P(al menos uno) = 1 - P(ninguno) = 1 - (0,70 × 0,60) = 1 - 0,42 = 0,58 = 58%.",
  },
];

const DS_OPTIONS = [
  "La afirmación (1) sola es suficiente, pero la (2) no",
  "La afirmación (2) sola es suficiente, pero la (1) no",
  "Ninguna sola es suficiente, pero las dos juntas sí lo son",
  "Cada afirmación sola ya es suficiente",
  "Las dos afirmaciones juntas aún no son suficientes",
];

export const DS_QUESTIONS = [
  {
    q: "¿Cuál es el valor de x?\n\n(1) 2x + 3 = 11\n(2) x es un número entero positivo",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Afirmación (1): 2x + 3 = 11 → 2x = 8 → x = 4. ¡Suficiente! Afirmación (2): x puede ser 1, 2, 3... infinitas posibilidades. Insuficiente. Respuesta: (1) sola es suficiente.",
  },
  {
    q: "¿Es A mayor que B?\n\n(1) A = B + 5\n(2) B > 0",
    options: [...DS_OPTIONS],
    answer: 0,
    explanation: "Afirmación (1): Si A = B + 5, entonces A siempre es 5 unidades mayor que B, sin importar el valor de B. ¡Suficiente! Afirmación (2): Saber que B > 0 no nos dice nada sobre A. Insuficiente.",
  },
  {
    q: "¿Cuál es el valor de y?\n\n(1) y² = 16\n(2) y > 0",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmación (1): y² = 16 → y = 4 o y = -4. Dos valores posibles. ¡Insuficiente! Afirmación (2): y > 0 no define el valor. ¡Insuficiente! Juntas: y² = 16 Y y > 0 → y = 4. ¡Suficiente!",
  },
  {
    q: "¿Juan es mayor que María?\n\n(1) Juan es 3 años menor que Pedro\n(2) Pedro es 5 años mayor que María",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "Afirmación (1): J = P - 3. Sin información sobre María. Insuficiente. Afirmación (2): P = M + 5. Sin información sobre Juan. Insuficiente. Juntas: J = P - 3 = (M + 5) - 3 = M + 2. Juan es 2 años mayor que María. ¡Suficiente!",
  },
  {
    q: "¿Es x divisible por 6?\n\n(1) x es divisible por 3\n(2) x es divisible por 2",
    options: [...DS_OPTIONS],
    answer: 2,
    explanation: "6 = 2 × 3. Debe ser divisible por ambos. Afirmación (1) sola: divisible por 3, pero no necesariamente por 2 (ej: 9). Insuficiente. Afirmación (2) sola: divisible por 2, pero no necesariamente por 3 (ej: 8). Insuficiente. Juntas: divisible por 2 Y por 3 → divisible por 6. ¡Suficiente!",
  },
  {
    q: "¿Cuál es el precio del producto?\n\n(1) Con un 15% de descuento, el precio es $170\n(2) Con $30 de descuento, el precio es $170",
    options: [...DS_OPTIONS],
    answer: 3,
    explanation: "Afirmación (1): P × 0,85 = 170 → P = 200. ¡Suficiente! Afirmación (2): P - 30 = 170 → P = 200. ¡Suficiente! Cada una sola resuelve el problema. Respuesta: D.",
  },
];

export const CR_QUESTIONS = [
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
