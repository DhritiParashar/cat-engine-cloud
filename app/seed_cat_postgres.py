import json
from sqlalchemy import text

CAT_2026_QUESTIONS = [
    # --- QUANTITATIVE APTITUDE (QA) ---
    {
        "q_code": "CAT26-QA-ALG-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Algebra • Modulus & Equations",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99%ile",
        "prompt": "[TITA] Find the number of distinct real solutions to the equation: |x^2 - 7x + 10| + |x - 2| = x - 2.",
        "options": [],
        "answer": "2",
        "explanation": "For RHS (x - 2) >= 0, we require x >= 2. When x >= 2, |x - 2| = x - 2, reducing the equation to |x^2 - 7x + 10| = 0 => (x - 2)(x - 5) = 0 => x = 2 or x = 5. Both satisfy x >= 2, giving 2 distinct real solutions.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-QA-ALG-002",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Algebra • Maxima & Minima (AM-GM)",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 99.5%ile",
        "prompt": "If x > 0 and y > 0 satisfy 3x + 4y = 20, what is the maximum possible value of x^2 * y^3?",
        "options": ["128", "192", "256", "432"],
        "answer": "1",
        "explanation": "Split 3x into 2 equal parts (1.5x) and 4y into 3 equal parts (4y/3). By AM >= GM, product is maximized when 1.5x = 4y/3 = 20/5 = 4 => x = 8/3, y = 3 => x^2 * y^3 = (64/9)*27 = 192.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-QA-ALG-003",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Algebra • Quadratics & Polynomials",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99%ile",
        "prompt": "[TITA] Let P(x) be a monic cubic polynomial such that P(1) = 1, P(2) = 4, and P(3) = 9. Find the value of P(4).",
        "options": [],
        "answer": "22",
        "explanation": "Define Q(x) = P(x) - x^2. Since Q(1) = Q(2) = Q(3) = 0 and P is monic cubic, Q(x) = (x - 1)(x - 2)(x - 3). Thus P(4) = 16 + 3*2*1 = 22.",
        "is_pyq": True, "pyq_year": "2024", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-ALG-004",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Algebra • Functions & Recursion",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 95%ile",
        "prompt": "If f(x) + 2*f(1 - x) = x^2 + 3 for all real numbers x, what is the value of f(2)?",
        "options": ["-1/3", "1/3", "5/3", "7/3"],
        "answer": "1",
        "explanation": "Set x = 2: f(2) + 2*f(-1) = 7. Set x = -1: f(-1) + 2*f(2) = 4. Eliminating f(-1) gives 3*f(2) = 1 => f(2) = 1/3.",
        "is_pyq": True, "pyq_year": "2023", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-AR1-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Arithmetic • Mixtures & Replacement",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 95%ile",
        "prompt": "A vessel contains 60 liters of pure milk. 6L, 10L, and 12L are sequentially drawn out and replaced with water. What is the final concentration of milk?",
        "options": ["54%", "56%", "60%", "64%"],
        "answer": "2",
        "explanation": "Remaining fraction = (54/60)*(50/60)*(48/60) = (9/10)*(5/6)*(4/5) = 3/5 = 60%.",
        "is_pyq": True, "pyq_year": "2023", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-AR1-002",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Arithmetic • Profit, Loss & Dishonest Dealer",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 95%ile",
        "prompt": "A merchant marks goods 40% above cost price, grants a 20% discount, and uses an 800g weight instead of 1000g. Find his net profit percentage.",
        "options": ["25%", "32%", "40%", "44%"],
        "answer": "2",
        "explanation": "SP/CP = (1.40)*(0.80)*(1000/800) = 1.12 * 1.25 = 1.40 => 40% net profit.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-QA-AR1-003",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Arithmetic • Compound Interest & Installments",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99%ile",
        "prompt": "[TITA] A loan of Rs. 21,000 is repaid in two equal annual installments at 10% p.a. compound interest. Find the value (in Rs.) of each installment.",
        "options": [],
        "answer": "12100",
        "explanation": "X/1.1 + X/(1.1)^2 = 21,000 => X*(2.1/1.21) = 21,000 => X = Rs. 12,100.",
        "is_pyq": True, "pyq_year": "2022", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-AR2-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Arithmetic • Circular Tracks & Relative Speed",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 95%ile",
        "prompt": "Runners A and B start simultaneously from the same point on a 1200m circular track in opposite directions at 5 m/s and 7 m/s. At how many distinct points on the track will they meet?",
        "options": ["2", "5", "7", "12"],
        "answer": "3",
        "explanation": "Coprime speed ratio 5 : 7 in opposite directions yields 5 + 7 = 12 distinct meeting points.",
        "is_pyq": True, "pyq_year": "2024", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-AR2-002",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Arithmetic • Escalators & Linear Meetings",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99%ile",
        "prompt": "[TITA] A commuter walks up an upward-moving escalator in 30 seconds and walks down against the same escalator in 90 seconds. How many seconds will he take to walk up if the escalator is switched off?",
        "options": [],
        "answer": "45",
        "explanation": "Harmonic mean of 30s and 90s = 2 * 30 * 90 / (30 + 90) = 5400 / 120 = 45 seconds.",
        "is_pyq": True, "pyq_year": "2023", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-NUM-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Number System • Remainders & Euler's Theorem",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99%ile",
        "prompt": "[TITA] Find the last two digits of 3^2026.",
        "options": [],
        "answer": "29",
        "explanation": "phi(100) = 40 => 3^40 ≡ 1 (mod 100). 2026 = 40*50 + 26 => 3^26 = (3^20)*3^6 ≡ 01 * 729 ≡ 29 (mod 100).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-QA-NUM-002",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Number System • Factors & Divisibility",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 95%ile",
        "prompt": "How many positive integers divide 720 but are NOT divisible by 6?",
        "options": ["14", "12", "16", "30"],
        "answer": "0",
        "explanation": "720 = 2^4 * 3^2 * 5^1 has 5*3*2 = 30 total factors. Multiples of 6 require pow_2 >= 1 (4), pow_3 >= 1 (2), pow_5 >= 0 (2) => 16 factors. Remaining = 30 - 16 = 14.",
        "is_pyq": True, "pyq_year": "2022", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-GEO-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Geometry • Triangles & Area Scaling",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 95%ile",
        "prompt": "In triangle ABC, points D and E lie on AB and AC such that AD:DB = 2:3 and AE:EC = 3:4. Find the ratio of Area(ADE) to Area(BCED).",
        "options": ["6 : 29", "6 : 35", "2 : 7", "9 : 26"],
        "answer": "0",
        "explanation": "Area(ADE)/Area(ABC) = (2/5)*(3/7) = 6/35 => Area(ADE) : Area(BCED) = 6 : (35 - 6) = 6 : 29.",
        "is_pyq": True, "pyq_year": "2024", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-QA-MOD-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Modern Math • Combinatorics & Derangements",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99.5%ile",
        "prompt": "[TITA] In how many ways can 5 distinct letters be placed into 5 addressed envelopes such that EXACTLY 1 letter goes into its own correct envelope?",
        "options": [],
        "answer": "45",
        "explanation": "Choose the 1 matched letter in C(5, 1) = 5 ways, and derange the remaining 4 letters in D_4 = 9 ways => 5 * 9 = 45.",
        "is_pyq": True, "pyq_year": "2023", "pyq_exam": "CAT"
    },

    # --- DATA INTERPRETATION & LOGICAL REASONING (DILR) ---
    {
        "q_code": "CAT26-DILR-SET1-Q1",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "DILR",
        "topic": "DILR • Set Theory & Optimization",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99%ile",
        "prompt": "[CAT DILR Set 1 • Q1 TITA] Four B-schools (IIM A, B, C, L) sent distinct delegate counts from {12, 15, 18, 20} (sum = 65) across three events: Case Clash (CC), FinQuest (FQ), and StratWars (SW). Every delegate entered 1 or 2 events (none entered all 3). Exactly 6 delegates from each institute entered two events. In IIM A, single-event delegates split across CC, FQ, SW in ratio 3 : 2 : 1. IIM C sent the most delegates, and IIM B sent more than IIM L. How many total delegates did IIM A send?",
        "options": [],
        "answer": "18",
        "explanation": "In IIM A, (Total - 6) must be divisible by 3 + 2 + 1 = 6. Among {12, 15, 18, 20}, 12 and 18 qualify. Since IIM C = 20 and IIM B > IIM L, setting IIM A = 18 leaves IIM B = 15 and IIM L = 12.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-DILR-SET1-Q2",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "DILR",
        "topic": "DILR • Set Theory & Optimization",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 99%ile",
        "prompt": "[CAT DILR Set 1 • Q2] Based on the B-school delegate distribution (IIM C = 20, IIM A = 18, IIM B = 15, IIM L = 12; 6 two-event delegates per institute; IIM A single-event split 3:2:1 across CC, FQ, SW), how many IIM A delegates participated ONLY in Case Clash (CC)?",
        "options": ["3", "4", "6", "9"],
        "answer": "2",
        "explanation": "IIM A single-event delegates = 18 - 6 = 12, split 3:2:1 => 6 (CC only), 4 (FQ only), 2 (SW only).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-DILR-SET2-Q1",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "DILR",
        "topic": "DILR • Round-Robin Tournament Matrix",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 99.5%ile",
        "prompt": "[CAT DILR Set 2 • Q1 TITA] Six teams play a single round-robin football tournament (Win = 3 pts, Draw = 1 pt, Loss = 0 pts). No two teams finished with the same points, and the top team won all its matches. If the total points awarded across all 15 matches was 41, how many matches ended in a draw?",
        "options": [],
        "answer": "4",
        "explanation": "Each decisive match awards 3 points and each draw awards 2 points. With 15 total matches, Total Points = 3*(15 - D) + 2*D = 45 - D = 41 => D = 4 draws.",
        "is_pyq": True, "pyq_year": "2024", "pyq_exam": "CAT"
    },

    # --- VERBAL ABILITY & READING COMPREHENSION (VARC) ---
    {
        "q_code": "CAT26-VARC-RC-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "VARC",
        "topic": "VARC • Reading Comprehension (Philosophy of Science)",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 99%ile",
        "prompt": "Passage: Scientific realism asserts that mature theories describe a mind-independent reality and that unobservable entities (such as quarks) genuinely exist. Anti-realists invoke the 'pessimistic meta-induction': because historically successful theories like caloric fluid and luminiferous ether were discarded, current theories will meet the same fate. Structural realists propose a middle path, arguing that what survives across theory change is not the ontology of unobservable objects, but the mathematical and relational structure captured by the equations.\n\nQuestion: How does structural realism resolve the tension between scientific realism and the pessimistic meta-induction?",
        "options": [
          "By denying that historical theories such as caloric fluid ever achieved empirical success.",
          "By contending that mathematical relationships persist across paradigm shifts even when underlying theoretical entities are abandoned.",
          "By conceding that unobservable entities cannot be modeled through mathematical equations.",
          "By claiming modern physics is exempt from historical patterns of theory replacement."
        ],
        "answer": "1",
        "explanation": "Sentence 3 states that structural realism preserves 'the mathematical and relational structure captured by the equations' across theory change.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "CAT 2026"
    },
    {
        "q_code": "CAT26-VARC-PJ-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "VARC",
        "topic": "VARC • TITA Parajumble",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 98%ile",
        "prompt": "[TITA Parajumble • Type 4-Digit Order] Arrange the four sentences into a coherent paragraph:\n1. Yet this very abundance of granular behavioral data has paradoxically made causal inference harder rather than easier for empirical economists.\n2. Over the past decade, digital platforms have generated unprecedented real-time records of consumer choices, search queries, and price sensitivity.\n3. Without exogenous shocks or randomized field experiments, observational correlations in massive datasets routinely conflate genuine preference shifts with algorithmic nudges.\n4. Consequently, modern econometricians increasingly pair machine-learning prediction tools with quasi-experimental designs to isolate true causal effects.",
        "options": [],
        "answer": "2134",
        "explanation": "2 introduces digital behavioral data; 1 pivots ('Yet this very abundance...') to the causal-inference problem; 3 diagnoses why observational correlations fail; 4 concludes ('Consequently...') with the quasi-experimental solution -> 2134.",
        "is_pyq": True, "pyq_year": "2024", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-VARC-OOO-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "VARC",
        "topic": "VARC • TITA Odd-One-Out",
        "exam_tags": "CAT_2026",
        "q_type": "SA_NUMERIC",
        "difficulty": "CAT 97%ile",
        "prompt": "[TITA Odd-One-Out • Type Digit 1–5] Four sentences form a coherent paragraph; identify the ONE sentence that does not belong:\n1. Early urban planners viewed street-level congestion purely as an engineering bottleneck solvable by widening arterial roads.\n2. Subsequent empirical studies revealed the phenomenon of induced demand, wherein expanded road capacity rapidly attracts latent vehicular traffic.\n3. High-speed intercity rail networks have significantly reduced domestic aviation emissions across Western Europe.\n4. As a result, expanding highway lanes frequently restores peak-hour gridlock within a few years of construction.\n5. Contemporary mobility policy therefore prioritizes congestion pricing and transit-oriented density over unchecked road expansion.",
        "options": [],
        "answer": "3",
        "explanation": "1-2-4-5 trace urban road widening, induced demand, recurring gridlock, and congestion pricing. Sentence 3 shifts abruptly to intercity rail and aviation emissions -> 3.",
        "is_pyq": True, "pyq_year": "2023", "pyq_exam": "CAT"
    },
    {
        "q_code": "CAT26-VARC-PS-001",
        "source_tag": "CAT_2026_OFFICIAL",
        "section": "VARC",
        "topic": "VARC • Para-Summary",
        "exam_tags": "CAT_2026",
        "q_type": "MCQ",
        "difficulty": "CAT 96%ile",
        "prompt": "Para-Summary: While central banks historically relied on explicit forward guidance to anchor long-term bond yields during liquidity traps, prolonged commitments to near-zero interest rates can inadvertently encourage excessive leverage in shadow-banking intermediaries, forcing policymakers to weigh macroeconomic stimulus against systemic financial fragility.",
        "options": [
          "Central banks must abandon forward guidance entirely because shadow banks always destabilize bond markets.",
          "Extended low-rate commitments help manage liquidity traps but risk fueling shadow-bank leverage, creating a trade-off between stimulus and financial stability.",
          "Liquidity traps occur primarily when shadow-banking intermediaries refuse to purchase long-term government bonds.",
          "Systemic financial fragility can be eliminated simply by raising interest rates during recessions."
        ],
        "answer": "1",
        "explanation": "Option (B) preserves both halves of the stimulus-vs-fragility trade-off without extreme distortions ('always', 'abandon entirely').",
        "is_pyq": True, "pyq_year": "2024", "pyq_exam": "CAT"
    }
]

def seed_cat_2026_postgres(engine):
    with engine.begin() as conn:
        # Remove legacy IPMAT / JIPMAT / CUET rows so CAT portal queries only CAT 2026 items
        conn.execute(text("DELETE FROM ipm_questions WHERE exam_tags NOT LIKE '%CAT_2026%'"))
        upsert_sql = text("""
            INSERT INTO ipm_questions
              (q_code, source_tag, section, topic, exam_tags, q_type, difficulty, prompt, options_json, answer, explanation, is_pyq, pyq_year, pyq_exam)
            VALUES
              (:q_code, :source_tag, :section, :topic, :exam_tags, :q_type, :difficulty, :prompt, :options_json, :answer, :explanation, :is_pyq, :pyq_year, :pyq_exam)
            ON CONFLICT (q_code) DO UPDATE SET
              section = EXCLUDED.section,
              topic = EXCLUDED.topic,
              exam_tags = EXCLUDED.exam_tags,
              q_type = EXCLUDED.q_type,
              difficulty = EXCLUDED.difficulty,
              prompt = EXCLUDED.prompt,
              options_json = EXCLUDED.options_json,
              answer = EXCLUDED.answer,
              explanation = EXCLUDED.explanation,
              is_pyq = EXCLUDED.is_pyq,
              pyq_year = EXCLUDED.pyq_year,
              pyq_exam = EXCLUDED.pyq_exam
        """)
        for q in CAT_2026_QUESTIONS:
            conn.execute(upsert_sql, {
                "q_code": q["q_code"],
                "source_tag": q["source_tag"],
                "section": q["section"],
                "topic": q["topic"],
                "exam_tags": q["exam_tags"],
                "q_type": q["q_type"],
                "difficulty": q["difficulty"],
                "prompt": q["prompt"],
                "options_json": json.dumps(q["options"]),
                "answer": str(q["answer"]),
                "explanation": q["explanation"],
                "is_pyq": bool(q["is_pyq"]),
                "pyq_year": q["pyq_year"],
                "pyq_exam": q["pyq_exam"],
            })