// EXHAUSTIVE IIM CAT 2026 & OMETs MASTER CONTENT BANK
// Covers QA (6 Pillars: Algebra, Arithmetic I, Arithmetic II, Number System, Geometry & Mensuration, Modern Math),
// DILR (Multi-Question Caselet Sets), and VARC (Academic RC + TITA Parajumbles, Odd-One-Out & Para-Summary)

window.IPM_DEEP_MODULES = [];
window.IPM_CHAPTER_REFRESHERS = {};

window.IPM_CHAPTER_REFRESHERS["CAT-MOD-ALG"] = {
  overview: "Algebra accounts for 35–40% of IIM CAT Quantitative Aptitude (7–8 questions out of 22). High-percentile CAT aspirants master critical-point interval analysis for nested modulus, AM-GM-HM inequality optimization, quadratic root location, and functional equations.",
  prerequisites: [
    "Triangle Inequality Equality Condition: |a| + |b| = |a + b| if and only if a * b >= 0.",
    "AM >= GM >= HM for positive reals: (x_1 + ... + x_n)/n >= (x_1 * ... * x_n)^(1/n), with equality iff all terms are equal.",
    "Quadratic Root Location: For f(x) = ax^2 + bx + c (a > 0), both roots exceed k iff D >= 0, -b/(2a) > k, and f(k) > 0."
  ],
  corePrinciples: [
    "Modulus Cancellation Law: |f(x)| + |g(x)| = g(x) holds if and only if f(x) = 0 and g(x) >= 0 simultaneously.",
    "Weighted AM-GM Optimization: To maximize x^p * y^q subject to ax + by = K, split ax into p equal parts and by into q equal parts so all (p + q) parts equal K / (p + q).",
    "Symmetric Polynomial Vieta Law: For roots α, β of ax^2 + bx + c = 0, α^3 + β^3 = (α + β)^3 - 3αβ(α + β).",
    "Functional Recursion Law: If f(x + y) = f(x) * f(y) for all reals with f(1) = k, then f(x) = k^x."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "Find the sum of all real roots of the equation |x - 3|^2 - 5|x - 3| + 6 = 0.",
      steps: [
        "Substitute t = |x - 3| >= 0 to transform into a standard quadratic: t^2 - 5t + 6 = 0.",
        "Factorize: (t - 2)(t - 3) = 0 => t = 2 or t = 3 (both valid since t >= 0).",
        "Solve |x - 3| = 2 => x = 5 or x = 1; solve |x - 3| = 3 => x = 6 or x = 0.",
        "Sum of all four real roots = 5 + 1 + 6 + 0 = 12."
      ]
    },
    {
      level: "CAT 95%ile",
      problem: "[TITA] Find the number of distinct real solutions to |x^2 - 7x + 10| + |x - 2| = x - 2.",
      steps: [
        "For the RHS (x - 2) to be non-negative, we must have x >= 2.",
        "When x >= 2, |x - 2| simplifies identically to (x - 2).",
        "Canceling (x - 2) from both sides leaves |x^2 - 7x + 10| = 0 => (x - 2)(x - 5) = 0.",
        "Both x = 2 and x = 5 satisfy x >= 2, yielding 2 distinct real solutions."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "If x > 0 and y > 0 satisfy 3x + 4y = 20, find the maximum possible value of x^2 * y^3.",
      steps: [
        "Split 3x into 2 equal parts (1.5x each) and 4y into 3 equal parts (4y/3 each) to match powers x^2 and y^3.",
        "The sum of these 5 positive parts is 1.5x + 1.5x + 4y/3 + 4y/3 + 4y/3 = 3x + 4y = 20.",
        "By AM >= GM, maximum product occurs when all 5 parts equal 20 / 5 = 4: 1.5x = 4 => x = 8/3, and 4y/3 = 4 => y = 3.",
        "Maximum value of x^2 * y^3 = (8/3)^2 * 3^3 = (64/9) * 27 = 192."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-MOD-ARITH1"] = {
  overview: "Arithmetic Part I (Percentages, Profit-Loss-Discount, SI/CI, Mixtures & Alligation) accounts for 4–5 questions in every CAT slot. Mastering multiplying factors and alligation teeter-totters cuts calculation time by over 50%.",
  prerequisites: [
    "Successive Replacement: Remaining pure solute = Initial * (1 - v_1/V)(1 - v_2/V)...(1 - v_k/V).",
    "Dishonest Dealer Ratio: SP / CP = (1 + markup%) * (1 - discount%) * (True Weight / False Weight).",
    "Compound Interest Growth Factor: Amount after n years = P * (1 + r/100)^n."
  ],
  corePrinciples: [
    "Same-SP Equal Profit/Loss Law: Selling two items at identical SP, one at +x% profit and one at -x% loss, always produces a net loss of (x^2 / 100)%.",
    "Alligation Conservation Law: Mixing two solutions of concentrations C_1 and C_2 in ratio w_1 : w_2 = (C_2 - C_avg) : (C_avg - C_1) yields C_avg.",
    "CI Difference Law: For 2 years, CI - SI = P * (r/100)^2; for 3 years, CI - SI = P * (r/100)^2 * (3 + r/100)."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "A trader marks goods 40% above CP and allows a 20% discount while using an 800g weight instead of 1000g. Find his exact profit %.",
      steps: [
        "Assume true cost = Re. 1 per gram. Marked Price for 1000g = Rs. 1400.",
        "After 20% discount, Selling Price collected = 1400 * 0.80 = Rs. 1120.",
        "Actual Cost Price incurred for 800g delivered = Rs. 800.",
        "Net Profit % = ((1120 - 800) / 800) * 100 = (320 / 800) * 100 = 40%."
      ]
    },
    {
      level: "CAT 95%ile",
      problem: "A vessel holds 60L pure milk. 6L, 10L, and 12L are sequentially removed and replaced with water. Find final milk concentration.",
      steps: [
        "Remaining pure milk fraction after Draw 1 (6L of 60L) = 1 - 6/60 = 9/10.",
        "Remaining fraction after Draw 2 (10L of 60L) = 1 - 10/60 = 5/6.",
        "Remaining fraction after Draw 3 (12L of 60L) = 1 - 12/60 = 4/5.",
        "Final concentration = (9/10) * (5/6) * (4/5) = 3/5 = 60%."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "Vessel A (40L) has milk:water = 3:1, and Vessel B (60L) has milk:water = 2:3. x liters from A and y liters from B are mixed to get 50L of a 1:1 mixture. Find x.",
      steps: [
        "Milk concentration in A = 3/4 = 75%; in B = 2/5 = 40%; target = 1/2 = 50%.",
        "By Alligation: x / y = (50 - 40) / (75 - 50) = 10 / 25 = 2 / 5.",
        "Since x + y = 50 liters, x = (2 / 7) * 50 = 100/7 ≈ 14.28 liters (both <= 40L and y = 250/7 <= 60L are feasible)."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-MOD-ARITH2"] = {
  overview: "Arithmetic Part II (Time-Speed-Distance, Circular Tracks, Boats/Escalators, and Time & Work) contributes 4–5 high-value questions in CAT QA. Ratio-based inverse proportionality between speed and time eliminates heavy algebra.",
  prerequisites: [
    "Inverse Proportionality: For fixed distance, Speed Ratio a : b <=> Time Ratio b : a.",
    "Circular Track First Meeting: Opposite directions = L / (v_1 + v_2); Same direction = L / |v_1 - v_2|.",
    "Man-Days Efficiency Law: (M_1 * D_1 * H_1) / W_1 = (M_2 * D_2 * H_2) / W_2."
  ],
  corePrinciples: [
    "Distinct Circular Meeting Points Law: Two runners with coprime speed ratio a : b meet at (a + b) distinct points in opposite directions and |a - b| points in the same direction.",
    "Escalator Step-Count Law: Total visible steps N = (v_person + v_escalator) * t_with = (v_person - v_escalator) * t_against.",
    "Crossing-Time Geometric Mean Law: If A and B take t_A and t_B hours AFTER crossing each other to reach opposite ends, then v_A / v_B = sqrt(t_B / t_A)."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "Walking at 3/4 of his usual speed, a commuter reaches his office 20 minutes late. Find his usual travel time.",
      steps: [
        "Speed ratio (Usual : New) = 4 : 3 => Time ratio (Usual : New) = 3 : 4.",
        "Difference in ratio units = 4 - 3 = 1 unit, which corresponds to 20 minutes.",
        "Usual time = 3 units = 3 * 20 = 60 minutes."
      ]
    },
    {
      level: "CAT 95%ile",
      problem: "Runners A and B start simultaneously from the same point on a 1200m circular track in opposite directions at 5 m/s and 7 m/s. At how many distinct points on the track will they meet?",
      steps: [
        "Reduce the speeds to lowest integer ratio: 5 m/s : 7 m/s = 5 : 7 (gcd = 1).",
        "Since they run in opposite directions, they meet at (a + b) = 5 + 7 = 12 distinct points around the circumference."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "Trains A and B start simultaneously from P and Q towards each other. After crossing, A takes 4 hours to reach Q and B takes 9 hours to reach P. If A's speed is 60 km/h, find distance PQ.",
      steps: [
        "Apply Crossing-Time Law: v_A / v_B = sqrt(t_B / t_A) = sqrt(9 / 4) = 3 / 2.",
        "Since v_A = 60 km/h, v_B = 60 * (2/3) = 40 km/h.",
        "Meeting time from start = sqrt(t_A * t_B) = sqrt(4 * 9) = 6 hours.",
        "Total distance PQ = (v_A + v_B) * 6 = (60 + 40) * 6 = 600 km."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-MOD-NUM"] = {
  overview: "CAT Number System questions reward structural theorems (Euler's Totient, Fermat's Little Theorem, Chinese Remainder Theorem, Wilson's Theorem, and binomial parity) rather than brute-force arithmetic.",
  prerequisites: [
    "Number of Positive Factors of N = p^a * q^b * r^c: tau(N) = (a + 1)(b + 1)(c + 1).",
    "Sum of Factors of N: sigma(N) = [(p^(a+1) - 1)/(p - 1)] * [(q^(b+1) - 1)/(q - 1)] * ...",
    "Euler's Totient Function: phi(N) = N * (1 - 1/p)(1 - 1/q)..."
  ],
  corePrinciples: [
    "Odd-Power Binomial Law: (a^n + b^n) is always divisible by (a + b) for every odd positive integer n.",
    "Euler's Remainder Law: If gcd(a, N) = 1, then a^phi(N) ≡ 1 (mod N).",
    "Legendre's Factorial Exponent Law: Highest power of prime p dividing n! is sum_{k>=1} floor(n / p^k)."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "How many positive integers divide 720 but are NOT divisible by 6?",
      steps: [
        "Prime factorize 720 = 2^4 * 3^2 * 5^1 => Total factors = (4 + 1)(2 + 1)(1 + 1) = 30.",
        "Factors divisible by 6 = 2^1 * 3^1 require pow_2 >= 1 (4 choices), pow_3 >= 1 (2 choices), pow_5 >= 0 (2 choices) => 4 * 2 * 2 = 16 factors.",
        "Factors NOT divisible by 6 = 30 - 16 = 14."
      ]
    },
    {
      level: "CAT 95%ile",
      problem: "[TITA] Find the remainder when 7^103 + 11^103 is divided by 18.",
      steps: [
        "Recognize the form a^n + b^n where exponent n = 103 is odd.",
        "For any odd n, (a^n + b^n) is algebraically divisible by (a + b) = 7 + 11 = 18.",
        "Therefore, 7^103 + 11^103 leaves remainder 0 when divided by 18."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "Find the last two digits of 3^2026.",
      steps: [
        "Finding the last two digits is equivalent to finding 3^2026 (mod 100). Since gcd(3, 100) = 1, compute phi(100) = 100*(1 - 1/2)*(1 - 1/5) = 40.",
        "By Euler's Theorem, 3^40 ≡ 1 (mod 100).",
        "Divide exponent 2026 by 40: 2026 = 40 * 50 + 26 => 3^2026 ≡ 3^26 (mod 100).",
        "Note 3^20 = (3^10)^2 = (59049)^2 ≡ 49^2 = 2401 ≡ 01 (mod 100), so 3^26 ≡ 1 * 3^6 = 729 ≡ 29 (mod 100). Last two digits = 29."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-MOD-GEO"] = {
  overview: "Geometry & Mensuration contributes 3–4 questions in CAT QA. Triangle similarity, inradius/circumradius identities, cyclic quadrilaterals, and intersecting-chord theorems unlock multi-step figures cleanly.",
  prerequisites: [
    "Right Triangle Inradius & Circumradius: r = (a + b - c) / 2  |  R = c / 2.",
    "Area via Inradius: Area = r * s, where s = (a + b + c) / 2.",
    "Power of a Point (Secant-Tangent): PT^2 = PA * PB."
  ],
  corePrinciples: [
    "Mass-Point / Stewart's Cevian Law: In triangle ABC, a cevian AD dividing BC into m : n satisfies b^2*m + c^2*n = a*(d^2 + m*n).",
    "Similar Triangle Area Scaling Law: If two triangles are similar with side ratio k, their area ratio is k^2.",
    "3D Frustum & Cone Cut Law: Cutting a cone parallel to its base at height ratio h : H yields volume ratio (h / H)^3."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "A right-angled triangle has legs 9 cm and 12 cm. Find the distance between its incenter and circumcenter.",
      steps: [
        "Hypotenuse c = sqrt(9^2 + 12^2) = 15 cm.",
        "Circumradius R = c / 2 = 7.5 cm; Inradius r = (9 + 12 - 15) / 2 = 3 cm.",
        "By Euler's Triangle Formula, distance d = sqrt(R^2 - 2Rr) = sqrt(7.5^2 - 2*7.5*3) = sqrt(56.25 - 45) = sqrt(11.25) = 1.5*sqrt(5) cm."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "In triangle ABC, points D and E lie on AB and AC such that AD:DB = 2:3 and AE:EC = 3:4. Find the ratio of Area(ADE) to Area(BCED).",
      steps: [
        "Area(ADE) / Area(ABC) = (AD / AB) * (AE / AC) = (2 / 5) * (3 / 7) = 6 / 35.",
        "Area of quadrilateral BCED = Area(ABC) - Area(ADE) = 35 - 6 = 29 parts.",
        "Therefore, Area(ADE) : Area(BCED) = 6 : 29."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-MOD-MODM"] = {
  overview: "Modern Math (Logarithms, AP/GP/HP Sequences, Permutations & Combinations, Probability, and Set Theory) contributes 3–4 questions in CAT QA, frequently appearing as TITA integer-entry items.",
  prerequisites: [
    "Logarithm Change-of-Base: log_b(a) = log_c(a) / log_c(b) = 1 / log_a(b).",
    "Stars and Bars (Non-Negative Integer Solutions): x_1 + x_2 + ... + x_r = n has C(n + r - 1, r - 1) solutions.",
    "Derangements of n Items: D_n = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!] (D_3 = 2, D_4 = 9, D_5 = 44)."
  ],
  corePrinciples: [
    "Positive Integer Partition Law: Number of positive integer solutions to x_1 + x_2 + ... + x_r = n is C(n - 1, r - 1).",
    "Telescoping Series Law: 1 / [k(k + 1)] = 1/k - 1/(k + 1), collapsing partial sums to First Term - Last Term.",
    "3-Set Inclusion-Exclusion Law: n(A U B U C) = sum n(A) - sum n(A ∩ B) + n(A ∩ B ∩ C)."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "[TITA] Find the number of positive integer solutions to x + y + z = 12.",
      steps: [
        "Apply Positive Integer Partition Law C(n - 1, r - 1) with n = 12 and r = 3.",
        "Number of solutions = C(12 - 1, 3 - 1) = C(11, 2) = (11 * 10) / 2 = 55."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "Solve for x: log_2(x) + log_4(x) + log_8(x) = 11.",
      steps: [
        "Convert all bases to base 2: log_4(x) = (1/2)*log_2(x) and log_8(x) = (1/3)*log_2(x).",
        "Factor out log_2(x): (1 + 1/2 + 1/3) * log_2(x) = (11/6) * log_2(x) = 11.",
        "Divide by 11/6: log_2(x) = 6 => x = 2^6 = 64."
      ]
    }
  ]
};

// Build All 6 Exhaustive CAT 2026 Quant Modules in Left Sidebar
window.IPM_QUANT_CORE = [
  {
    id: "CAT-MOD-ALG",
    pillar: "CAT 2026 ALGEBRA (35–40% QA)",
    title: "Algebra: Modulus, Quadratics, Inequalities & Maxima/Minima",
    weightage: "High Weightage • 7–8 Qs in CAT QA (+3 / -1 MCQ, +3 / 0 TITA)",
    concepts: [
      {
        heading: "Nested Modulus Domain Pruning",
        formula: "|f(x)| + |g(x)| = g(x)  <=>  f(x) = 0  AND  g(x) >= 0",
        derivation: "Since |f(x)| >= 0 and |g(x)| >= g(x), equality holds iff both hold with equality simultaneously.",
        shortcut: "Check RHS >= 0 first to prune half the domain before opening modulus bars."
      },
      {
        heading: "Weighted AM-GM Product Optimization",
        formula: "If ax + by = K (x, y > 0), x^p * y^q is maximized when (ax)/p = (by)/q = K/(p + q)",
        derivation: "Splitting ax into p equal terms and by into q equal terms makes all (p + q) terms equal at the AM-GM boundary.",
        shortcut: "Set (ax)/p = (by)/q directly to find optimal x and y in 10 seconds."
      }
    ],
    traps: [
      {
        title: "Forgetting RHS >= 0 in Modulus Equations",
        wrongStep: "Squaring |x - 5| = 2x - 10 without restricting 2x - 10 >= 0.",
        correction: "Verify every candidate root satisfies RHS >= 0.",
        penalty: "-1 Mark in CAT MCQ"
      }
    ],
    questions: [
      {
        id: "CAT-ALG-1",
        stem: "[TITA] Find the number of distinct real solutions to: |x^2 - 7x + 10| + |x - 2| = x - 2.",
        options: ["2", "0", "1", "3"],
        answer: 0,
        explanation: "Requires x >= 2 => |x^2 - 7x + 10| = 0 => x = 2 or x = 5 (both >= 2) -> 2 solutions."
      },
      {
        id: "CAT-ALG-2",
        stem: "If x > 0 and y > 0 such that 3x + 4y = 20, what is the maximum possible value of x^2 * y^3?",
        options: ["128", "192", "256", "432"],
        answer: 1,
        explanation: "Set (3x)/2 = (4y)/3 = 20/5 = 4 => x = 8/3, y = 3 => x^2 * y^3 = (64/9)*27 = 192."
      },
      {
        id: "CAT-ALG-3",
        stem: "Find the sum of all real roots of |x - 3|^2 - 5|x - 3| + 6 = 0.",
        options: ["6", "9", "12", "15"],
        answer: 2,
        explanation: "|x - 3| = 2 or 3 => x in {1, 5, 0, 6} => Sum = 12."
      }
    ]
  },
  {
    id: "CAT-MOD-ARITH1",
    pillar: "CAT 2026 ARITHMETIC I",
    title: "Arithmetic I: Percentages, Profit-Loss, SI/CI & Mixtures",
    weightage: "Core Weightage • 4–5 Qs in CAT QA",
    concepts: [
      {
        heading: "Successive Dilution & Replacement",
        formula: "C_final = C_initial * (1 - v_1/V) * (1 - v_2/V) * ... * (1 - v_k/V)",
        derivation: "Each removal of volume v_i removes v_i/V of current pure solute.",
        shortcut: "Multiply remaining fractions directly without tracking intermediate water."
      },
      {
        heading: "Dishonest Trader Multiplicative Chain",
        formula: "SP / CP = (1 + m/100) * (1 - d/100) * (True Weight / False Weight)",
        derivation: "Markup, discount, and weight cheating act as independent multiplicative revenue/cost factors.",
        shortcut: "Multiply all three ratios sequentially to get net profit factor in one line."
      }
    ],
    traps: [
      {
        title: "Adding Removed Volumes Instead of Multiplying Fractions",
        wrongStep: "Subtracting (6 + 10 + 12)/60 from 100%.",
        correction: "Multiply remaining fractions: (54/60)*(50/60)*(48/60) = 60%.",
        penalty: "-1 Mark in CAT MCQ"
      }
    ],
    questions: [
      {
        id: "CAT-AR1-1",
        stem: "A vessel holds 60L pure milk. 6L, 10L, and 12L are sequentially drawn and replaced with water. Find the final milk concentration.",
        options: ["54%", "56%", "60%", "64%"],
        answer: 2,
        explanation: "(54/60)*(50/60)*(48/60) = (9/10)*(5/6)*(4/5) = 3/5 = 60%."
      },
      {
        id: "CAT-AR1-2",
        stem: "A merchant marks goods 40% above CP, gives a 20% discount, and uses an 800g weight instead of 1000g. What is his net profit percentage?",
        options: ["25%", "32%", "40%", "44%"],
        answer: 2,
        explanation: "(1.40) * (0.80) * (1000/800) = 1.12 * 1.25 = 1.40 => 40% profit."
      }
    ]
  },
  {
    id: "CAT-MOD-ARITH2",
    pillar: "CAT 2026 ARITHMETIC II",
    title: "Arithmetic II: TSD, Circular Tracks, Boats & Time-Work",
    weightage: "Core Weightage • 4–5 Qs in CAT QA",
    concepts: [
      {
        heading: "Distinct Circular Meeting Points",
        formula: "Opposite Directions: (a + b) points  |  Same Direction: |a - b| points (where a:b is reduced speed ratio)",
        derivation: "Relative lap completion occurs (a ± b) times during one full common cycle.",
        shortcut: "Divide speeds by their GCD first, then add or subtract."
      }
    ],
    traps: [
      {
        title: "Using Raw Speeds Instead of Coprime Reduced Ratio for Meeting Points",
        wrongStep: "Adding 10 m/s + 14 m/s = 24 meeting points.",
        correction: "Reduce 10 : 14 to 5 : 7 first => 5 + 7 = 12 distinct points.",
        penalty: "-1 Mark in CAT MCQ"
      }
    ],
    questions: [
      {
        id: "CAT-AR2-1",
        stem: "Two runners start from the same point on a 1200m circular track in opposite directions at 5 m/s and 7 m/s. At how many distinct points on the track will they meet?",
        options: ["2", "5", "7", "12"],
        answer: 3,
        explanation: "Speed ratio 5 : 7 (coprime) in opposite directions => 5 + 7 = 12 distinct points."
      },
      {
        id: "CAT-AR2-2",
        stem: "Trains A and B start simultaneously from P and Q towards each other. After crossing, A takes 4 hours to reach Q and B takes 9 hours to reach P. If A's speed is 60 km/h, find distance PQ.",
        options: ["480 km", "540 km", "600 km", "720 km"],
        answer: 2,
        explanation: "v_A / v_B = sqrt(9/4) = 3/2 => v_B = 40 km/h; meeting time = sqrt(4*9) = 6 hrs => PQ = (60 + 40)*6 = 600 km."
      }
    ]
  },
  {
    id: "CAT-MOD-NUM",
    pillar: "CAT 2026 NUMBER SYSTEM",
    title: "Number System: Remainders (Euler/Binomial), Factors & Base Systems",
    weightage: "99%ile Differentiator • 3–4 Qs in CAT QA",
    concepts: [
      {
        heading: "Odd-Exponent Binomial Divisibility",
        formula: "For odd n: (a^n + b^n) is always divisible by (a + b)",
        derivation: "Substituting a = -b makes a^n + b^n = 0 whenever n is odd.",
        shortcut: "Check if bases sum to the divisor immediately when exponents are odd."
      }
    ],
    traps: [
      {
        title: "Applying (a + b) Divisibility to Even Exponents",
        wrongStep: "Assuming a^2 + b^2 is divisible by a + b.",
        correction: "Divisibility by (a + b) holds ONLY for odd exponents n.",
        penalty: "0 Marks on TITA"
      }
    ],
    questions: [
      {
        id: "CAT-NUM-1",
        stem: "[TITA] What is the remainder when 7^103 + 11^103 is divided by 18?",
        options: ["0", "1", "7", "11"],
        answer: 0,
        explanation: "103 is odd => 7^103 + 11^103 is divisible by 7 + 11 = 18 -> remainder 0."
      },
      {
        id: "CAT-NUM-2",
        stem: "How many positive integers divide 720 but are NOT divisible by 6?",
        options: ["14", "12", "16", "30"],
        answer: 0,
        explanation: "Total factors of 720 (2^4 * 3^2 * 5^1) = 30; divisible by 6 = 4 * 2 * 2 = 16; remaining = 30 - 16 = 14."
      }
    ]
  },
  {
    id: "CAT-MOD-GEO",
    pillar: "CAT 2026 GEOMETRY & MENSURATION",
    title: "Geometry & Mensuration: Triangles, Circles & 3D Solids",
    weightage: "Core Weightage • 3–4 Qs in CAT QA",
    concepts: [
      {
        heading: "Area Ratio via Adjacent Side Products",
        formula: "Area(ADE) / Area(ABC) = (AD * AE) / (AB * AC)",
        derivation: "Both triangles share angle A, so (1/2 * AD * AE * sin A) / (1/2 * AB * AC * sin A) cancels sin A.",
        shortcut: "Multiply fractional side ratios directly without needing parallel lines."
      }
    ],
    traps: [
      {
        title: "Assuming DE is Parallel to BC Without Statement",
        wrongStep: "Using (AD/AB)^2 when AD:DB != AE:EC.",
        correction: "Use (AD/AB) * (AE/AC) whenever angle A is shared.",
        penalty: "-1 Mark in CAT MCQ"
      }
    ],
    questions: [
      {
        id: "CAT-GEO-1",
        stem: "In triangle ABC, points D and E lie on AB and AC such that AD:DB = 2:3 and AE:EC = 3:4. What is the ratio of Area(ADE) to Area(BCED)?",
        options: ["6 : 29", "6 : 35", "2 : 7", "9 : 26"],
        answer: 0,
        explanation: "Area(ADE)/Area(ABC) = (2/5)*(3/7) = 6/35 => Area(ADE) : Area(BCED) = 6 : (35 - 6) = 6 : 29."
      }
    ]
  },
  {
    id: "CAT-MOD-MODM",
    pillar: "CAT 2026 MODERN MATH",
    title: "Modern Math: Logarithms, Sequences, P&C & Probability",
    weightage: "High Scoring TITA • 3–4 Qs in CAT QA",
    concepts: [
      {
        heading: "Positive Integer Solutions (Stars & Bars)",
        formula: "x_1 + x_2 + ... + x_r = n (x_i >= 1)  =>  C(n - 1, r - 1)",
        derivation: "Placing (r - 1) dividers among (n - 1) gaps between n unit stars.",
        shortcut: "For non-negative solutions (x_i >= 0), use C(n + r - 1, r - 1)."
      }
    ],
    traps: [
      {
        title: "Confusing Positive (>=1) vs Non-Negative (>=0) Integer Solutions",
        wrongStep: "Using C(14, 2) instead of C(11, 2) for positive integers.",
        correction: "Subtract r from n first when variables must be strictly positive (>= 1).",
        penalty: "0 Marks on TITA"
      }
    ],
    questions: [
      {
        id: "CAT-MOD-1",
        stem: "[TITA] Find the number of positive integer solutions to x + y + z = 12.",
        options: ["55", "66", "78", "45"],
        answer: 0,
        explanation: "C(12 - 1, 3 - 1) = C(11, 2) = 55."
      },
      {
        id: "CAT-MOD-2",
        stem: "Solve for x: log_2(x) + log_4(x) + log_8(x) = 11.",
        options: ["32", "64", "128", "256"],
        answer: 1,
        explanation: "(1 + 1/2 + 1/3) * log_2(x) = 11 => (11/6) * log_2(x) = 11 => log_2(x) = 6 => x = 64."
      }
    ]
  }
];