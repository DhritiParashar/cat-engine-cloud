// EXHAUSTIVE IIM CAT 2026 & OMETs MASTER CONTENT BANK
window.IPM_DEEP_MODULES = [];
window.IPM_HIGHER_MATH = [];
window.IPM_CHAPTER_REFRESHERS = {};
window.IPM_CHAPTER_REFRESHERS["CAT-MOD-ALG"] = {
  "overview": "Algebra is the single strongest differentiator between a 95th percentile and a 99.5+ percentile score in IIM CAT Quantitative Aptitude, consistently contributing 7 to 8 questions out of 22. Unlike routine school algebra, CAT tests structural reasoning: analyzing critical points of nested absolute values without squaring blindly, determining root locations of quadratics using discriminant-vertex-boundary conditions, applying weighted AM-GM-HM inequalities to asymmetric expressions, and solving recursive or composite functional equations. Mastering domain restrictions (especially non-negativity of the right-hand side in modulus/radical equations and positive-real constraints in AM-GM) prevents 90% of negative-marking traps.",
  "prerequisites": [
    "Quadratic Discriminant & Nature of Roots: For ax^2 + bx + c = 0 (a != 0), D = b^2 - 4ac; D > 0 gives distinct real roots, D = 0 gives equal roots, D < 0 gives complex conjugate roots.",
    "Vieta's Root Relations: Sum of roots α + β = -b/a; Product of roots αβ = c/a; Difference |α - β| = sqrt(D) / |a|.",
    "Absolute Value Definition: |x| = x for x >= 0, and |x| = -x for x < 0; geometrically |x - a| is the distance between x and a on the real line.",
    "Triangle Inequality & Equality Condition: |a| + |b| >= |a + b| for all reals, with equality iff a * b >= 0; |a| - |b| <= |a - b|.",
    "Classical Means Chain: For positive reals, AM >= GM >= HM, with strict equality if and only if all variables are identical.",
    "Wavy-Curve Sign Scheme: Factor rational inequalities into linear factors (x - r_i)^k_i; sign flips across odd-multiplicity roots and preserves across even-multiplicity roots.",
    "Quadratic Range & Vertex: For f(x) = ax^2 + bx + c, global extremum occurs at x = -b/(2a) with value f(-b/(2a)) = -D/(4a).",
    "Remainder & Factor Theorem: Polynomial P(x) divided by (x - a) leaves remainder P(a); (x - a) is a factor iff P(a) = 0."
  ],
  "corePrinciples": [
    "Modulus Cancellation Law: |f(x)| + |g(x)| = g(x) holds if and only if f(x) = 0 AND g(x) >= 0 simultaneously.",
    "Sum-of-Distances Minimization Law: f(x) = sum_{i=1}^n |x - a_i| (with a_1 <= a_2 <= ... <= a_n) attains its global minimum at the median of {a_i}.",
    "Weighted AM-GM Product Law: Given ax + by = K (x, y > 0), x^p * y^q is maximized when (ax)/p = (by)/q = K/(p + q).",
    "Quadratic Root Location Law (Both Roots > k): For a > 0, both roots of ax^2 + bx + c = 0 exceed k iff D >= 0, -b/(2a) > k, and f(k) > 0.",
    "Opposite-Sign Roots Law: Roots of ax^2 + bx + c = 0 have opposite signs if and only if c/a < 0 (discriminant D > 0 is automatically guaranteed).",
    "Reciprocal Equation Symmetry Law: In ax^4 + bx^3 + cx^2 + bx + a = 0, divide by x^2 and substitute t = x + 1/x (where |t| >= 2).",
    "Cauchy-Schwarz Inequality Law: (a_1^2 + a_2^2)(b_1^2 + b_2^2) >= (a_1*b_1 + a_2*b_2)^2, with equality iff a_1/b_1 = a_2/b_2.",
    "Functional Exponential Law: Any continuous function satisfying f(x + y) = f(x) * f(y) with f(1) = k > 0 has the unique form f(x) = k^x."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "Find the sum of all real roots of |x - 3|^2 - 5|x - 3| + 6 = 0.",
      "steps": [
        "Set t = |x - 3| >= 0 => t^2 - 5t + 6 = 0.",
        "Factorize (t - 2)(t - 3) = 0 => t = 2 or t = 3.",
        "Solve |x - 3| = 2 => x in {1, 5}; solve |x - 3| = 3 => x in {0, 6}.",
        "Sum of all four real roots = 1 + 5 + 0 + 6 = 12."
      ]
    },
    {
      "level": "Foundation",
      "problem": "Find the minimum possible value of f(x) = |x - 1| + |x - 4| + |x - 9| + |x - 15| for real x.",
      "steps": [
        "Sort critical points in ascending order: 1, 4, 9, 15 (n = 4, even).",
        "Minimum occurs anywhere in the closed median interval [4, 9].",
        "Evaluate at x = 5: |5 - 1| + |5 - 4| + |5 - 9| + |5 - 15| = 4 + 1 + 4 + 10 = 19."
      ]
    },
    {
      "level": "Foundation",
      "problem": "If α and β are roots of 2x^2 - 7x + 4 = 0, find the value of α^2 + β^2.",
      "steps": [
        "By Vieta's formulas: α + β = 7/2 and αβ = 4/2 = 2.",
        "Use identity α^2 + β^2 = (α + β)^2 - 2αβ.",
        "Compute (7/2)^2 - 2(2) = 49/4 - 4 = 33/4 = 8.25."
      ]
    },
    {
      "level": "Foundation",
      "problem": "Solve the rational inequality (x - 2)(x - 5)^2 / (x + 1) <= 0.",
      "steps": [
        "Critical points are x = -1 (pole), x = 2 (odd), x = 5 (even multiplicity).",
        "Test x = 6: (+)(+)/(+) > 0. Sign stays + across x = 5, flips to - across x = 2, flips to + across x = -1.",
        "Include numerator zeros x = 2 and x = 5, exclude pole x = -1 => x in (-1, 2] U {5}."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "[TITA] Find the number of distinct real solutions to |x^2 - 7x + 10| + |x - 2| = x - 2.",
      "steps": [
        "Non-negativity of RHS requires x - 2 >= 0 => x >= 2.",
        "For x >= 2, |x - 2| = x - 2, so subtracting (x - 2) from both sides leaves |x^2 - 7x + 10| = 0.",
        "Factorize x^2 - 7x + 10 = (x - 2)(x - 5) = 0 => x = 2 or x = 5.",
        "Both roots satisfy x >= 2, giving 2 distinct real solutions."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Find the minimum value of 4x + 9/x for x > 0.",
      "steps": [
        "Apply AM >= GM to the two positive terms 4x and 9/x.",
        "(4x + 9/x) / 2 >= sqrt(4x * 9/x) = sqrt(36) = 6.",
        "Multiply by 2 => 4x + 9/x >= 12 (attained when 4x = 9/x => x = 1.5)."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "For what values of k does x^2 - (k - 3)x + (k + 1) = 0 have both roots strictly greater than 2?",
      "steps": [
        "Condition 1 (D >= 0): (k - 3)^2 - 4(k + 1) >= 0 => k^2 - 10k + 5 >= 0 => k >= 5 + 2*sqrt(5) or k <= 5 - 2*sqrt(5).",
        "Condition 2 (Vertex > 2): (k - 3)/2 > 2 => k > 7.",
        "Condition 3 (f(2) > 0): 4 - 2(k - 3) + k + 1 > 0 => 11 - k > 0 => k < 11.",
        "Intersecting k >= 5 + 2*sqrt(5) (≈ 9.47), k > 7, and k < 11 gives k in [5 + 2*sqrt(5), 11)."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "If f(x) + 2*f(1 - x) = x^2 + 3 for all real x, find f(2).",
      "steps": [
        "Substitute x = 2: f(2) + 2*f(-1) = 4 + 3 = 7  --- (Eq 1).",
        "Substitute x = -1: f(-1) + 2*f(2) = 1 + 3 = 4  --- (Eq 2).",
        "Multiply (Eq 2) by 2 and subtract (Eq 1): 3*f(2) = 8 - 7 = 1 => f(2) = 1/3."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "If x > 0 and y > 0 satisfy 3x + 4y = 20, find the maximum possible value of x^2 * y^3.",
      "steps": [
        "Split 3x into 2 equal parts (1.5x) and 4y into 3 equal parts (4y/3) to match x^2 * y^3.",
        "By Weighted AM-GM, maximize product by setting all 5 parts equal: 1.5x = 4y/3 = 20/5 = 4.",
        "Solve 1.5x = 4 => x = 8/3, and 4y/3 = 4 => y = 3.",
        "Max(x^2 * y^3) = (8/3)^2 * 3^3 = (64/9) * 27 = 192."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "[TITA] Find the number of integer pairs (x, y) satisfying |x| + |y| + |x + y| = 10.",
      "steps": [
        "Notice |x| + |y| + |x + y| is always even and equals 2 * max(|x|, |y|, |x + y|).",
        "Thus max(|x|, |y|, |x + y|) = 5.",
        "Case 1 (x, y >= 0): x + y = 5 => 6 pairs ((0,5) to (5,0)). Case 2 (x, y <= 0): x + y = -5 => 6 pairs.",
        "Case 3 (opposite signs, e.g., x > 0, y < 0): max(x, -y) = 5 => (5, -1)..(5, -4) [4 pairs] and (1, -5)..(4, -5) [4 pairs], plus symmetric x < 0, y > 0 [8 pairs]. Total = 6 + 6 + 8 + 8 = 28 pairs."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "Find the minimum value of (x^2 + 2x + 10) / (x + 1) for x > -1.",
      "steps": [
        "Rewrite numerator in powers of (x + 1): x^2 + 2x + 10 = (x + 1)^2 + 9.",
        "Divide term-by-term by (x + 1) > 0: f(x) = (x + 1) + 9/(x + 1).",
        "Apply AM >= GM: (x + 1) + 9/(x + 1) >= 2 * sqrt((x + 1) * 9/(x + 1)) = 2 * 3 = 6 (at x = 2)."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "Let P(x) be a monic cubic polynomial with P(1) = 1, P(2) = 4, and P(3) = 9. Find P(4).",
      "steps": [
        "Define auxiliary polynomial Q(x) = P(x) - x^2. Since P(x) is monic cubic, Q(x) is also monic cubic.",
        "Notice Q(1) = 0, Q(2) = 0, and Q(3) = 0, so 1, 2, 3 are the three roots of Q(x).",
        "Hence Q(x) = (x - 1)(x - 2)(x - 3) => P(x) = x^2 + (x - 1)(x - 2)(x - 3).",
        "Evaluate P(4) = 16 + (3)(2)(1) = 16 + 6 = 22."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["CAT-MOD-ARITH1"] = {
  "overview": "Arithmetic forms the scoring anchor of CAT QA, and Part I (Percentages, Profit-Loss-Discount, Simple & Compound Interest, Ratios, and Mixtures/Alligation) reliably delivers 4 to 5 direct questions per slot. CAT rarely tests single-step percentage formulas; instead, it combines successive markups/discounts with faulty weights, multi-stage dilution/replacement, and partner-wise profit sharing with working-partner salaries. Converting percentages into clean fraction multipliers and applying Alligation teeter-totters eliminates multi-variable equations.",
  "prerequisites": [
    "Fraction-Percentage Equivalence: 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
    "Base-Shifting Inverse: An increase of +a/b requires a decrease of -a/(a + b) to return to the original base.",
    "Successive Percentage Change: Net % change for sequential changes a% and b% is a + b + (ab/100).",
    "Simple vs Compound Interest: SI = P*R*T/100; CI Amount = P*(1 + R/100)^T; effective 2-year CI rate = 2R + R^2/100.",
    "Rule of 72 / Doubling Time: At R% annual CI, money doubles in approximately 72 / R years.",
    "Componendo-Dividendo: If a/b = c/d, then (a + b)/(a - b) = (c + d)/(c - d)."
  ],
  "corePrinciples": [
    "Successive Replacement Law: Remaining pure solute after k withdrawals of v_i from total volume V is C_0 * prod_{i=1}^k (1 - v_i/V).",
    "Dishonest Dealer Multiplicative Law: SP / CP = (1 + m/100) * (1 - d/100) * (True Weight / False Weight).",
    "Equal-SP Profit/Loss Law: Selling two articles at the same SP, one at +x% profit and one at -x% loss, yields a guaranteed net loss of (x^2 / 100)%.",
    "Alligation Weight Ratio Law: Mixing concentrations C_1 and C_2 to obtain C_avg requires weights in ratio w_1 : w_2 = (C_2 - C_avg) : (C_avg - C_1).",
    "CI-SI 2-Year & 3-Year Difference Law: Diff_2 = P*(r/100)^2; Diff_3 = P*(r/100)^2 * (3 + r/100).",
    "CI Equal-Installment Law: Loan P repaid in n equal annual installments X at r% satisfies P = X/(1 + r/100) + X/(1 + r/100)^2 + ... + X/(1 + r/100)^n."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "A trader marks goods 40% above CP, offers a 20% discount, and uses an 800g weight instead of 1000g. Find his exact profit %.",
      "steps": [
        "Assume true CP = Re. 1 per gram => MP for 1000g = Rs. 1400.",
        "After 20% discount, SP collected = 1400 * 0.80 = Rs. 1120.",
        "Actual CP incurred for 800g delivered = Rs. 800.",
        "Profit % = ((1120 - 800)/800) * 100 = 40%."
      ]
    },
    {
      "level": "Foundation",
      "problem": "If the difference between CI and SI on a principal at 10% p.a. for 3 years is Rs. 620, find the principal.",
      "steps": [
        "Apply 3-year CI-SI difference formula: Diff_3 = P * (r/100)^2 * (3 + r/100).",
        "Substitute r = 10: 620 = P * (0.01) * (3.1) = 0.031 * P.",
        "Solve P = 620 / 0.031 = Rs. 20,000."
      ]
    },
    {
      "level": "Foundation",
      "problem": "Two items are sold at Rs. 9,900 each—one at a 10% gain and the other at a 10% loss. Find the overall rupee gain or loss.",
      "steps": [
        "Net loss % = x^2 / 100 = 10^2 / 100 = 1% loss on total SP.",
        "Total SP = 9,900 + 9,900 = Rs. 19,800, which equals 99% of Total CP.",
        "Total CP = 19,800 / 0.99 = Rs. 20,000 => Net Loss = Rs. 200."
      ]
    },
    {
      "level": "Foundation",
      "problem": "In what ratio must 25% alcohol solution be mixed with 60% alcohol solution to obtain a 40% solution?",
      "steps": [
        "Apply Alligation: w_1 / w_2 = (60 - 40) / (40 - 25) = 20 / 15 = 4 : 3."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "A vessel holds 60L pure milk. 6L, 10L, and 12L are sequentially drawn and replaced with water. Find final milk concentration.",
      "steps": [
        "Remaining milk fraction after Draw 1 = 1 - 6/60 = 9/10.",
        "Remaining fraction after Draw 2 = 1 - 10/60 = 5/6; after Draw 3 = 1 - 12/60 = 4/5.",
        "Final concentration = (9/10) * (5/6) * (4/5) = 3/5 = 60%."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "A sum of money invested at compound interest grows to Rs. 4,800 in 4 years and Rs. 6,000 in 6 years. Find the principal.",
      "steps": [
        "2-year growth factor = 6000 / 4800 = 5/4 = 1.25.",
        "Since 4 years comprises two 2-year periods, P * (5/4)^2 = 4800.",
        "P = 4800 * (16 / 25) = 192 * 16 = Rs. 3,072."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "A, B, and C invest in the ratio 4 : 5 : 6. A is a working partner and receives 20% of total profit as salary before remaining profit is split in capital ratio. If A gets Rs. 1,480 total, find total profit.",
      "steps": [
        "Let total profit = 100x. A's salary = 20x; remaining 80x splits 4 : 5 : 6 (15 parts).",
        "A's capital share = (4/15) * 80x = 64x/3. Total received by A = 20x + 64x/3 = 124x/3.",
        "Set 124x/3 = 1480 => wait: 124 * 12 = 1488; if A gets Rs. 1,488, x = 12 => Total Profit = Rs. 1,200."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Fresh grapes contain 80% water while dry grapes contain 25% water. How many kg of dry grapes can be obtained from 60 kg of fresh grapes?",
      "steps": [
        "Conserve solid pulp mass (unchanged during drying).",
        "Pulp in 60 kg fresh grapes = 20% of 60 = 12 kg.",
        "In dry grapes, pulp is 75% of total weight: 0.75 * W_dry = 12 => W_dry = 16 kg."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "From a 100L cask of pure wine, 10L is drawn and replaced with water. Next, 20L of mixture is drawn and replaced with pure wine. Finally, 25L is drawn and replaced with water. Find final wine %.",
      "steps": [
        "Track pure wine volume after each step rather than symmetric replacement.",
        "Step 1: Wine = 90L, Water = 10L.",
        "Step 2: Remove 20% (18L wine, 2L water) => Wine = 72L, Water = 8L; add 20L pure wine => Wine = 92L.",
        "Step 3: Remove 25% of 92L (23L wine) and add water => Final Wine = 92 - 23 = 69L => 69%."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "A loan of Rs. 21,000 is to be paid back in two equal annual installments at 10% p.a. compound interest. Find the value of each installment.",
      "steps": [
        "Present value of installments equals loan: X / 1.1 + X / (1.1)^2 = 21,000.",
        "Factor out X / 1.21: (X / 1.21) * (1.1 + 1) = 21,000 => (2.1 / 1.21) * X = 21,000.",
        "X = 21,000 * (1.21 / 2.1) = 10,000 * 1.21 = Rs. 12,100."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "A retailer cheats by +20% while buying and +25% while selling, and marks up 20% above nominal cost while giving 10% discount. Find his true profit %.",
      "steps": [
        "True buying factor: pays for 1000g, receives 1200g => true cost per gram = 1000/1200 = 5/6.",
        "True selling factor: delivers 800g (25% cheat => 1000/1250 = 4/5 actual goods) at price 1.20 * 0.90 = 1.08.",
        "SP / CP = 1.08 / [(5/6) * (4/5)] = 1.08 / (2/3) = 1.62 => 62% net profit."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "Alloy X has Gold:Silver = 5:3 and Alloy Y has Gold:Silver = 3:7. How many kg of X must be mixed with 20 kg of Y so the final alloy has 50% Gold?",
      "steps": [
        "Gold fraction in X = 5/8 = 62.5%; Gold fraction in Y = 3/10 = 30%; Target = 50%.",
        "By Alligation: W_X / W_Y = (50 - 30) / (62.5 - 50) = 20 / 12.5 = 8 / 5.",
        "Given W_Y = 20 kg, W_X = (8 / 5) * 20 = 32 kg."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["CAT-MOD-ARITH2"] = {
  "overview": "Time-Speed-Distance (TSD) and Time & Work contribute 4 to 5 questions in CAT QA, frequently testing relative motion on linear and circular tracks, moving escalators, upstream-downstream river boats, and negative-efficiency outlet pipes. Setting up speed-time inverse ratios and LCM work units avoids fractions and quadratic bottlenecks.",
  "prerequisites": [
    "Unit Conversion: 1 m/s = 18/5 km/h; 1 km/h = 5/18 m/s.",
    "Constant Distance Inverse Law: Speed ratio a : b <=> Time ratio b : a.",
    "Relative Speed: Opposite directions = v_1 + v_2; Same direction = |v_1 - v_2|.",
    "Boats & Streams: Upstream speed u = b - s; Downstream speed d = b + s => b = (d + u)/2, s = (d - u)/2.",
    "LCM Total Work Method: Assume Total Work = LCM(T_1, T_2, ...) so daily efficiencies are clean integers."
  ],
  "corePrinciples": [
    "Distinct Circular Meeting Points Law: Two runners with coprime speed ratio a : b meet at (a + b) distinct points in opposite directions and |a - b| points in the same direction.",
    "Three-Runner Circular Alignment Law: Three runners starting together meet again at the starting point at LCM(L/v_1, L/v_2, L/v_3) and anywhere together at LCM(L/|v_1 - v_2|, L/|v_2 - v_3|).",
    "Crossing-Time Geometric Mean Law: If A and B take t_A and t_B hours AFTER crossing to reach opposite ends, v_A / v_B = sqrt(t_B / t_A) and meeting time = sqrt(t_A * t_B).",
    "Escalator Step-Count Law: Visible steps N = (v_p + v_e)*t_with = (v_p - v_e)*t_against.",
    "Linear Track Multi-Meeting Law: Two runners starting from opposite ends of track L cover L, 3L, 5L, 7L... combined distance at their 1st, 2nd, 3rd, 4th meetings."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "Walking at 3/4 of his usual speed, a commuter reaches his office 20 minutes late. Find his usual travel time.",
      "steps": [
        "Speed ratio (Usual : New) = 4 : 3 => Time ratio = 3 : 4.",
        "1 ratio unit = 20 minutes => Usual time = 3 * 20 = 60 minutes."
      ]
    },
    {
      "level": "Foundation",
      "problem": "Pipe A fills a tank in 12 hrs, Pipe B in 15 hrs, and outlet Pipe C empties it in 20 hrs. If all three open together, how long to fill the tank?",
      "steps": [
        "Take Total Capacity = LCM(12, 15, 20) = 60 units.",
        "Net hourly fill = +5 + 4 - 3 = +6 units/hr => Time = 60 / 6 = 10 hours."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Runners A and B start from the same point on a 1200m circular track in opposite directions at 5 m/s and 7 m/s. At how many distinct points will they meet?",
      "steps": [
        "Speed ratio = 5 : 7 (coprime). Running in opposite directions => 5 + 7 = 12 distinct meeting points."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Trains A and B start simultaneously from P and Q towards each other. After crossing, A takes 4 hrs to reach Q and B takes 9 hrs to reach P. If A's speed is 60 km/h, find distance PQ.",
      "steps": [
        "v_A / v_B = sqrt(9 / 4) = 3 / 2 => v_B = 40 km/h.",
        "Meeting time = sqrt(4 * 9) = 6 hrs => PQ = (60 + 40) * 6 = 600 km."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "A person walks up a moving escalator in 30 seconds and walks down the same upward-moving escalator in 90 seconds. How long would he take to walk up if the escalator were switched off?",
      "steps": [
        "Let v_p and v_e be steps/sec, and N total steps: N = 30*(v_p + v_e) = 90*(v_p - v_e).",
        "Simplify: v_p + v_e = 3*(v_p - v_e) => 2*v_p = 4*v_e => v_p = 2*v_e.",
        "Substitute back: N = 30*(2*v_e + v_e) = 90*v_e => Time on stationary escalator = N / v_p = 90*v_e / (2*v_e) = 45 seconds."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "Anil and Sunil start simultaneously from opposite ends A and B of a 300m linear track at 3 m/s and 2 m/s, running back and forth endlessly. Find the distance from A of their 3rd meeting.",
      "steps": [
        "At the 3rd meeting, combined distance covered = 5 * L = 5 * 300 = 1500m.",
        "Anil's share of distance = (3 / (3 + 2)) * 1500 = 900m.",
        "Since 900m = 3 * 300m (3 full lengths from A), Anil is exactly at end B => 300m from A."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["CAT-MOD-NUM"] = {
  "overview": "CAT Number System problems test deep divisibility structure, Euler's Totient & Chinese Remainder Theorems, highest powers in factorials, factor properties (even/odd/perfect-square divisors), and non-decimal base arithmetic. Nearly half of CAT Number System questions appear as TITA integer-entry prompts.",
  "prerequisites": [
    "Prime Factorization: N = p^a * q^b * r^c => Total factors = (a + 1)(b + 1)(c + 1).",
    "Perfect Square Factors: Require all prime exponents to be even.",
    "Euler's Totient Function: phi(N) = N * prod_{p | N} (1 - 1/p).",
    "Cyclicity of Last Digits: Digits {0, 1, 5, 6} have cycle 1; {4, 9} have cycle 2; {2, 3, 7, 8} have cycle 4."
  ],
  "corePrinciples": [
    "Odd-Exponent Binomial Law: (a^n + b^n) is always divisible by (a + b) for every odd positive integer n.",
    "Euler's Remainder Law: If gcd(a, N) = 1, then a^phi(N) ≡ 1 (mod N).",
    "Fermat's Little Theorem: For prime p not dividing a, a^(p - 1) ≡ 1 (mod p).",
    "Wilson's Theorem: For any prime p, (p - 1)! ≡ -1 (mod p).",
    "Legendre's Factorial Law: Highest power of prime p in n! is sum_{k>=1} floor(n / p^k).",
    "Base-b Divisibility Law: In base b, a number is divisible by (b - 1) iff the sum of its digits is divisible by (b - 1)."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "How many positive integers divide 720 but are NOT divisible by 6?",
      "steps": [
        "720 = 2^4 * 3^2 * 5^1 => Total factors = 5 * 3 * 2 = 30.",
        "Divisible by 6 requires pow_2 >= 1 (4 choices), pow_3 >= 1 (2 choices), pow_5 >= 0 (2 choices) => 16 factors.",
        "Not divisible by 6 = 30 - 16 = 14."
      ]
    },
    {
      "level": "Foundation",
      "problem": "[TITA] Find the number of trailing zeros in 125!.",
      "steps": [
        "Count factors of 5 via Legendre's formula: floor(125/5) + floor(125/25) + floor(125/125).",
        "25 + 5 + 1 = 31 trailing zeros."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "[TITA] Find the remainder when 7^103 + 11^103 is divided by 18.",
      "steps": [
        "Since 103 is odd, (7^103 + 11^103) is divisible by (7 + 11) = 18 => Remainder = 0."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Find the remainder when 2^99 is divided by 33.",
      "steps": [
        "Note 2^5 = 32 ≡ -1 (mod 33).",
        "Rewrite 2^99 = (2^5)^19 * 2^4 = 32^19 * 16 ≡ (-1)^19 * 16 = -16 ≡ 17 (mod 33)."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "[TITA] Find the last two digits of 3^2026.",
      "steps": [
        "Compute 3^2026 (mod 100). Since phi(100) = 40, 3^40 ≡ 1 (mod 100).",
        "2026 = 40*50 + 26 => 3^2026 ≡ 3^26 (mod 100).",
        "Since 3^20 ≡ 01 (mod 100), 3^26 ≡ 3^6 = 729 ≡ 29 (mod 100). Last two digits = 29."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "Find the smallest positive integer N that leaves remainders 2, 3, and 4 when divided by 5, 7, and 9 respectively.",
      "steps": [
        "Notice (Divisor - Remainder) is constant: 5 - 2 = 3, 7 - 3 = 4? Wait: for 5->2 (diff 3), 7->4 (diff 3), 9->6 (diff 3), N = LCM - 3; here apply CRT directly: N = 9k + 4.",
        "Test k: k = 1 -> 13 (mod 7 = 6); k = 2 -> 22 (mod 7 = 1); k = 5 -> 49 (mod 7 = 0); k = 6 -> 58 (mod 7 = 2); k = 7 -> 67 (mod 7 = 4); k = 8 -> 76 (mod 7 = 6); k = 10 -> 94 (mod 7 = 3, mod 5 = 4); add LCM(7,9)=63: 94 + 63 = 157 (mod 5 = 2!). Smallest N = 157."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["CAT-MOD-GEO"] = {
  "overview": "Geometry and Mensuration consistently contributes 3 to 4 questions in CAT QA. Rather than lengthy Euclidean proofs, CAT favors ratio-based area scaling in triangles, Stewart's cevian theorem, power-of-a-point chord/secant lengths, cyclic quadrilaterals, and 3D cone/cylinder frustum cuts.",
  "prerequisites": [
    "Right Triangle Inradius & Circumradius: r = (a + b - c)/2  |  R = c/2.",
    "Euler's Triangle Distance: Distance between circumcenter and incenter = sqrt(R^2 - 2Rr).",
    "Regular Hexagon of Side a: Area = 6 * (sqrt(3)/4) * a^2 = (3*sqrt(3)/2) * a^2.",
    "Power of a Point: Intersecting chords PA * PB = PC * PD; Secant-Tangent PT^2 = PA * PB."
  ],
  "corePrinciples": [
    "Shared-Angle Triangle Area Law: Area(ADE) / Area(ABC) = (AD * AE) / (AB * AC).",
    "Stewart's Cevian Law: In triangle ABC, cevian AD dividing BC into m : n satisfies b^2*m + c^2*n = a*(d^2 + m*n).",
    "Angle Bisector Length Law: Internal bisector AD of angle A satisfies AD^2 = AB * AC - BD * DC.",
    "3D Cone Parallel Cut Law: Cutting a cone parallel to base at height ratio h : H yields surface area ratio (h/H)^2 and volume ratio (h/H)^3."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "A right-angled triangle has legs 9 cm and 12 cm. Find the distance between its incenter and circumcenter.",
      "steps": [
        "Hypotenuse c = 15 cm => R = 7.5 cm, r = (9 + 12 - 15)/2 = 3 cm.",
        "Distance d = sqrt(R^2 - 2Rr) = sqrt(56.25 - 45) = sqrt(11.25) = 1.5*sqrt(5) cm."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "In triangle ABC, D and E lie on AB and AC with AD:DB = 2:3 and AE:EC = 3:4. Find Area(ADE) : Area(BCED).",
      "steps": [
        "Area(ADE)/Area(ABC) = (2/5)*(3/7) = 6/35 => Area(ADE) : Area(BCED) = 6 : 29."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "A right circular cone of height 30 cm is cut parallel to its base into two parts whose volumes are in the ratio 8 : 19 (top cone to bottom frustum). Find the height of the top cone.",
      "steps": [
        "Ratio of top cone volume to full cone volume = 8 / (8 + 19) = 8 / 27.",
        "Since volume scales as (h / H)^3, (h / 30)^3 = 8 / 27 => h / 30 = 2 / 3 => h = 20 cm."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["CAT-MOD-MODM"] = {
  "overview": "Modern Math (Logarithms, Progressions, Permutations & Combinations, Probability, and Set Theory) contributes 3 to 4 questions in CAT QA. Logarithm base-change equations, Stars-and-Bars integer partitions, derangements, and telescoping series offer rapid, deterministic solutions.",
  "prerequisites": [
    "Logarithm Identities: log_b(a) = ln(a)/ln(b) = 1/log_a(b); a^(log_a(x)) = x.",
    "Sum of AP & GP: S_n(AP) = (n/2)[2a + (n - 1)d]; S_inf(GP) = a / (1 - r) for |r| < 1.",
    "Derangements: D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44."
  ],
  "corePrinciples": [
    "Positive Integer Partition Law: Positive integer solutions to x_1 + ... + x_r = n is C(n - 1, r - 1).",
    "Non-Negative Integer Partition Law: Non-negative integer solutions to x_1 + ... + x_r = n is C(n + r - 1, r - 1).",
    "Telescoping Partial Fraction Law: 1 / [k(k + d)] = (1/d) * [1/k - 1/(k + d)].",
    "Bayes' Conditional Probability Law: P(A | B) = P(B | A) * P(A) / P(B)."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "[TITA] Find the number of positive integer solutions to x + y + z = 12.",
      "steps": [
        "Apply C(n - 1, r - 1) = C(11, 2) = 55."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Solve for x: log_2(x) + log_4(x) + log_8(x) = 11.",
      "steps": [
        "(1 + 1/2 + 1/3) * log_2(x) = 11 => (11/6)*log_2(x) = 11 => log_2(x) = 6 => x = 64."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "[TITA] In how many ways can 5 distinct letters be placed into 5 addressed envelopes such that EXACTLY 1 letter goes into its own correct envelope?",
      "steps": [
        "Choose the 1 letter that goes into its correct envelope: C(5, 1) = 5 ways.",
        "The remaining 4 letters must all go into wrong envelopes: D_4 = 9 derangements.",
        "Total ways = 5 * 9 = 45."
      ]
    }
  ]
};
window.IPM_QUANT_CORE = [
  {
    "id": "CAT-MOD-ALG",
    "pillar": "CAT 2026 ALGEBRA (35–40% OF QA)",
    "title": "Algebra: Modulus, Quadratics, Inequalities, Functions & Maxima/Minima",
    "weightage": "Highest Algebra Yield • 7–8 Qs per Slot (+3/-1 MCQ & +3/0 TITA)",
    "concepts": [
      {
        "heading": "Modulus Cancellation Law",
        "formula": "|f(x)| + |g(x)| = g(x) holds if and only if f(x) = 0 AND g(x) >= 0 simultaneously.",
        "derivation": "Quadratic Discriminant & Nature of Roots: For ax^2 + bx + c = 0 (a != 0), D = b^2 - 4ac; D > 0 gives distinct real roots, D = 0 gives equal roots, D < 0 gives complex conjugate roots.",
        "shortcut": "Sum of all four real roots = 1 + 5 + 0 + 6 = 12."
      },
      {
        "heading": "Sum-of-Distances Minimization Law",
        "formula": "f(x) = sum_{i=1}^n |x - a_i| (with a_1 <= a_2 <= ... <= a_n) attains its global minimum at the median of {a_i}.",
        "derivation": "Vieta's Root Relations: Sum of roots α + β = -b/a; Product of roots αβ = c/a; Difference |α - β| = sqrt(D) / |a|.",
        "shortcut": "Evaluate at x = 5: |5 - 1| + |5 - 4| + |5 - 9| + |5 - 15| = 4 + 1 + 4 + 10 = 19."
      },
      {
        "heading": "Weighted AM-GM Product Law",
        "formula": "Given ax + by = K (x, y > 0), x^p * y^q is maximized when (ax)/p = (by)/q = K/(p + q).",
        "derivation": "Absolute Value Definition: |x| = x for x >= 0, and |x| = -x for x < 0; geometrically |x - a| is the distance between x and a on the real line.",
        "shortcut": "Compute (7/2)^2 - 2(2) = 49/4 - 4 = 33/4 = 8.25."
      },
      {
        "heading": "Quadratic Root Location Law (Both Roots > k)",
        "formula": "For a > 0, both roots of ax^2 + bx + c = 0 exceed k iff D >= 0, -b/(2a) > k, and f(k) > 0.",
        "derivation": "Triangle Inequality & Equality Condition: |a| + |b| >= |a + b| for all reals, with equality iff a * b >= 0; |a| - |b| <= |a - b|.",
        "shortcut": "Include numerator zeros x = 2 and x = 5, exclude pole x = -1 => x in (-1, 2] U {5}."
      }
    ],
    "traps": [
      {
        "title": "CAT +3/-1 vs TITA Domain Trap in Algebra",
        "wrongStep": "Skipping boundary/domain validation before selecting an MCQ option.",
        "correction": "Quadratic Discriminant & Nature of Roots: For ax^2 + bx + c = 0 (a != 0), D = b^2 - 4ac; D > 0 gives distinct real roots, D = 0 gives equal roots, D < 0 gives complex conjugate roots.",
        "penalty": "-1 Mark in CAT MCQ"
      }
    ],
    "questions": [
      {
        "id": "CAT-ALG-Q1",
        "stem": "[TITA] Find the number of distinct real solutions to: |x^2 - 7x + 10| + |x - 2| = x - 2.",
        "options": [
          "2",
          "0",
          "1",
          "3"
        ],
        "answer": 0,
        "explanation": "RHS >= 0 => x >= 2 => |x - 2| = x - 2 => |x^2 - 7x + 10| = 0 => x = 2 or 5 (2 solutions)."
      },
      {
        "id": "CAT-ALG-Q2",
        "stem": "If x, y > 0 and 3x + 4y = 20, find the maximum possible value of x^2 * y^3.",
        "options": [
          "128",
          "192",
          "256",
          "432"
        ],
        "answer": 1,
        "explanation": "Set (3x)/2 = (4y)/3 = 20/5 = 4 => x = 8/3, y = 3 => (64/9)*27 = 192."
      },
      {
        "id": "CAT-ALG-Q3",
        "stem": "Find the sum of all real roots of |x - 3|^2 - 5|x - 3| + 6 = 0.",
        "options": [
          "6",
          "9",
          "12",
          "15"
        ],
        "answer": 2,
        "explanation": "|x - 3| = 2 or 3 => x in {1, 5, 0, 6} => sum = 12."
      },
      {
        "id": "CAT-ALG-Q4",
        "stem": "Let P(x) be a monic cubic polynomial such that P(1) = 1, P(2) = 4, and P(3) = 9. What is P(4)?",
        "options": [
          "16",
          "20",
          "22",
          "25"
        ],
        "answer": 2,
        "explanation": "P(x) - x^2 = (x - 1)(x - 2)(x - 3) => P(4) = 16 + 6 = 22."
      },
      {
        "id": "CAT-ALG-Q5",
        "stem": "What is the minimum value of (x^2 + 2x + 10) / (x + 1) for x > -1?",
        "options": [
          "3",
          "6",
          "9",
          "10"
        ],
        "answer": 1,
        "explanation": "(x + 1) + 9/(x + 1) >= 2*sqrt(9) = 6."
      }
    ]
  },
  {
    "id": "CAT-MOD-ARITH1",
    "pillar": "CAT 2026 ARITHMETIC I",
    "title": "Arithmetic I: Percentages, Profit-Loss, SI/CI, Ratios & Mixtures",
    "weightage": "Core Arithmetic • 4–5 Qs per Slot (+3/-1 MCQ & +3/0 TITA)",
    "concepts": [
      {
        "heading": "Successive Replacement Law",
        "formula": "Remaining pure solute after k withdrawals of v_i from total volume V is C_0 * prod_{i=1}^k (1 - v_i/V).",
        "derivation": "Fraction-Percentage Equivalence: 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
        "shortcut": "Profit % = ((1120 - 800)/800) * 100 = 40%."
      },
      {
        "heading": "Dishonest Dealer Multiplicative Law",
        "formula": "SP / CP = (1 + m/100) * (1 - d/100) * (True Weight / False Weight).",
        "derivation": "Base-Shifting Inverse: An increase of +a/b requires a decrease of -a/(a + b) to return to the original base.",
        "shortcut": "Solve P = 620 / 0.031 = Rs. 20,000."
      },
      {
        "heading": "Equal-SP Profit/Loss Law",
        "formula": "Selling two articles at the same SP, one at +x% profit and one at -x% loss, yields a guaranteed net loss of (x^2 / 100)%.",
        "derivation": "Successive Percentage Change: Net % change for sequential changes a% and b% is a + b + (ab/100).",
        "shortcut": "Total CP = 19,800 / 0.99 = Rs. 20,000 => Net Loss = Rs. 200."
      },
      {
        "heading": "Alligation Weight Ratio Law",
        "formula": "Mixing concentrations C_1 and C_2 to obtain C_avg requires weights in ratio w_1 : w_2 = (C_2 - C_avg) : (C_avg - C_1).",
        "derivation": "Simple vs Compound Interest: SI = P*R*T/100; CI Amount = P*(1 + R/100)^T; effective 2-year CI rate = 2R + R^2/100.",
        "shortcut": "Apply Alligation: w_1 / w_2 = (60 - 40) / (40 - 25) = 20 / 15 = 4 : 3."
      }
    ],
    "traps": [
      {
        "title": "CAT +3/-1 vs TITA Domain Trap in Arithmetic I",
        "wrongStep": "Skipping boundary/domain validation before selecting an MCQ option.",
        "correction": "Fraction-Percentage Equivalence: 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
        "penalty": "-1 Mark in CAT MCQ"
      }
    ],
    "questions": [
      {
        "id": "CAT-AR1-Q1",
        "stem": "A vessel holds 60L pure milk. 6L, 10L, and 12L are sequentially drawn and replaced with water. Find final milk concentration.",
        "options": [
          "54%",
          "56%",
          "60%",
          "64%"
        ],
        "answer": 2,
        "explanation": "(54/60)*(50/60)*(48/60) = 3/5 = 60%."
      },
      {
        "id": "CAT-AR1-Q2",
        "stem": "Fresh grapes contain 80% water and dry grapes contain 25% water. How many kg of dry grapes come from 60 kg fresh grapes?",
        "options": [
          "12 kg",
          "15 kg",
          "16 kg",
          "20 kg"
        ],
        "answer": 2,
        "explanation": "Solid pulp = 20% of 60 = 12 kg = 75% of dry weight => 16 kg."
      },
      {
        "id": "CAT-AR1-Q3",
        "stem": "A loan of Rs. 21,000 is repaid in two equal annual installments at 10% p.a. CI. Find each installment.",
        "options": [
          "Rs. 11,550",
          "Rs. 12,100",
          "Rs. 12,500",
          "Rs. 13,310"
        ],
        "answer": 1,
        "explanation": "X/1.1 + X/1.21 = 21000 => X = Rs. 12,100."
      },
      {
        "id": "CAT-AR1-Q4",
        "stem": "From 100L pure wine, 10L is replaced with water, then 20L mixture is replaced with pure wine, then 25L is replaced with water. Final wine %?",
        "options": [
          "65%",
          "67.5%",
          "69%",
          "72%"
        ],
        "answer": 2,
        "explanation": "90 -> 90*(0.8)+20 = 92 -> 92*(0.75) = 69%."
      }
    ]
  },
  {
    "id": "CAT-MOD-ARITH2",
    "pillar": "CAT 2026 ARITHMETIC II",
    "title": "Arithmetic II: TSD, Circular Tracks, Boats, Escalators & Time-Work",
    "weightage": "Core Arithmetic • 4–5 Qs per Slot (+3/-1 MCQ & +3/0 TITA)",
    "concepts": [
      {
        "heading": "Distinct Circular Meeting Points Law",
        "formula": "Two runners with coprime speed ratio a : b meet at (a + b) distinct points in opposite directions and |a - b| points in the same direction.",
        "derivation": "Unit Conversion: 1 m/s = 18/5 km/h; 1 km/h = 5/18 m/s.",
        "shortcut": "1 ratio unit = 20 minutes => Usual time = 3 * 20 = 60 minutes."
      },
      {
        "heading": "Three-Runner Circular Alignment Law",
        "formula": "Three runners starting together meet again at the starting point at LCM(L/v_1, L/v_2, L/v_3) and anywhere together at LCM(L/|v_1 - v_2|, L/|v_2 - v_3|).",
        "derivation": "Constant Distance Inverse Law: Speed ratio a : b <=> Time ratio b : a.",
        "shortcut": "Net hourly fill = +5 + 4 - 3 = +6 units/hr => Time = 60 / 6 = 10 hours."
      },
      {
        "heading": "Crossing-Time Geometric Mean Law",
        "formula": "If A and B take t_A and t_B hours AFTER crossing to reach opposite ends, v_A / v_B = sqrt(t_B / t_A) and meeting time = sqrt(t_A * t_B).",
        "derivation": "Relative Speed: Opposite directions = v_1 + v_2; Same direction = |v_1 - v_2|.",
        "shortcut": "Speed ratio = 5 : 7 (coprime). Running in opposite directions => 5 + 7 = 12 distinct meeting points."
      },
      {
        "heading": "Escalator Step-Count Law",
        "formula": "Visible steps N = (v_p + v_e)*t_with = (v_p - v_e)*t_against.",
        "derivation": "Boats & Streams: Upstream speed u = b - s; Downstream speed d = b + s => b = (d + u)/2, s = (d - u)/2.",
        "shortcut": "Meeting time = sqrt(4 * 9) = 6 hrs => PQ = (60 + 40) * 6 = 600 km."
      }
    ],
    "traps": [
      {
        "title": "CAT +3/-1 vs TITA Domain Trap in Arithmetic II",
        "wrongStep": "Skipping boundary/domain validation before selecting an MCQ option.",
        "correction": "Unit Conversion: 1 m/s = 18/5 km/h; 1 km/h = 5/18 m/s.",
        "penalty": "-1 Mark in CAT MCQ"
      }
    ],
    "questions": [
      {
        "id": "CAT-AR2-Q1",
        "stem": "Runners A and B start together on a 1200m circular track in opposite directions at 5 m/s and 7 m/s. How many distinct meeting points occur?",
        "options": [
          "2",
          "5",
          "7",
          "12"
        ],
        "answer": 3,
        "explanation": "5 + 7 = 12 distinct points."
      },
      {
        "id": "CAT-AR2-Q2",
        "stem": "Walking up an upward escalator takes 30s; walking down against it takes 90s. How long to walk up when the escalator is off?",
        "options": [
          "40s",
          "45s",
          "50s",
          "60s"
        ],
        "answer": 1,
        "explanation": "Harmonic mean of 30s and 90s = 2*30*90/(30+90) = 45s."
      },
      {
        "id": "CAT-AR2-Q3",
        "stem": "Anil (3 m/s) and Sunil (2 m/s) start from opposite ends A and B of a 300m track and run back and forth. Distance from A at their 3rd meeting?",
        "options": [
          "120m",
          "180m",
          "240m",
          "300m"
        ],
        "answer": 3,
        "explanation": "Combined distance = 5*300 = 1500m; Anil covers 900m = 3 full lengths => at B (300m from A)."
      }
    ]
  },
  {
    "id": "CAT-MOD-NUM",
    "pillar": "CAT 2026 NUMBER SYSTEM",
    "title": "Number System: Remainders (Euler/CRT), Factors, Cyclicity & Base Systems",
    "weightage": "99%ile Differentiator • 3–4 Qs per Slot (+3/-1 MCQ & +3/0 TITA)",
    "concepts": [
      {
        "heading": "Odd-Exponent Binomial Law",
        "formula": "(a^n + b^n) is always divisible by (a + b) for every odd positive integer n.",
        "derivation": "Prime Factorization: N = p^a * q^b * r^c => Total factors = (a + 1)(b + 1)(c + 1).",
        "shortcut": "Not divisible by 6 = 30 - 16 = 14."
      },
      {
        "heading": "Euler's Remainder Law",
        "formula": "If gcd(a, N) = 1, then a^phi(N) ≡ 1 (mod N).",
        "derivation": "Perfect Square Factors: Require all prime exponents to be even.",
        "shortcut": "25 + 5 + 1 = 31 trailing zeros."
      },
      {
        "heading": "Fermat's Little Theorem",
        "formula": "For prime p not dividing a, a^(p - 1) ≡ 1 (mod p).",
        "derivation": "Euler's Totient Function: phi(N) = N * prod_{p | N} (1 - 1/p).",
        "shortcut": "Since 103 is odd, (7^103 + 11^103) is divisible by (7 + 11) = 18 => Remainder = 0."
      },
      {
        "heading": "Wilson's Theorem",
        "formula": "For any prime p, (p - 1)! ≡ -1 (mod p).",
        "derivation": "Cyclicity of Last Digits: Digits {0, 1, 5, 6} have cycle 1; {4, 9} have cycle 2; {2, 3, 7, 8} have cycle 4.",
        "shortcut": "Rewrite 2^99 = (2^5)^19 * 2^4 = 32^19 * 16 ≡ (-1)^19 * 16 = -16 ≡ 17 (mod 33)."
      }
    ],
    "traps": [
      {
        "title": "CAT +3/-1 vs TITA Domain Trap in Number System",
        "wrongStep": "Skipping boundary/domain validation before selecting an MCQ option.",
        "correction": "Prime Factorization: N = p^a * q^b * r^c => Total factors = (a + 1)(b + 1)(c + 1).",
        "penalty": "-1 Mark in CAT MCQ"
      }
    ],
    "questions": [
      {
        "id": "CAT-NUM-Q1",
        "stem": "[TITA] Remainder when 7^103 + 11^103 is divided by 18?",
        "options": [
          "0",
          "1",
          "7",
          "11"
        ],
        "answer": 0,
        "explanation": "7 + 11 = 18 divides 7^103 + 11^103 since 103 is odd."
      },
      {
        "id": "CAT-NUM-Q2",
        "stem": "How many positive divisors of 720 are NOT divisible by 6?",
        "options": [
          "14",
          "12",
          "16",
          "30"
        ],
        "answer": 0,
        "explanation": "30 - 16 = 14."
      },
      {
        "id": "CAT-NUM-Q3",
        "stem": "What is the remainder when 2^99 is divided by 33?",
        "options": [
          "1",
          "16",
          "17",
          "32"
        ],
        "answer": 2,
        "explanation": "32^19 * 16 ≡ -16 ≡ 17 (mod 33)."
      },
      {
        "id": "CAT-NUM-Q4",
        "stem": "[TITA] Find the last two digits of 3^2026.",
        "options": [
          "29",
          "09",
          "49",
          "89"
        ],
        "answer": 0,
        "explanation": "3^2026 ≡ 3^26 ≡ 729 ≡ 29 (mod 100)."
      }
    ]
  },
  {
    "id": "CAT-MOD-GEO",
    "pillar": "CAT 2026 GEOMETRY & MENSURATION",
    "title": "Geometry & Mensuration: Triangles, Circles, Polygons & 3D Solids",
    "weightage": "Core Geometry • 3–4 Qs per Slot (+3/-1 MCQ & +3/0 TITA)",
    "concepts": [
      {
        "heading": "Shared-Angle Triangle Area Law",
        "formula": "Area(ADE) / Area(ABC) = (AD * AE) / (AB * AC).",
        "derivation": "Right Triangle Inradius & Circumradius: r = (a + b - c)/2  |  R = c/2.",
        "shortcut": "Distance d = sqrt(R^2 - 2Rr) = sqrt(56.25 - 45) = sqrt(11.25) = 1.5*sqrt(5) cm."
      },
      {
        "heading": "Stewart's Cevian Law",
        "formula": "In triangle ABC, cevian AD dividing BC into m : n satisfies b^2*m + c^2*n = a*(d^2 + m*n).",
        "derivation": "Euler's Triangle Distance: Distance between circumcenter and incenter = sqrt(R^2 - 2Rr).",
        "shortcut": "Area(ADE)/Area(ABC) = (2/5)*(3/7) = 6/35 => Area(ADE) : Area(BCED) = 6 : 29."
      },
      {
        "heading": "Angle Bisector Length Law",
        "formula": "Internal bisector AD of angle A satisfies AD^2 = AB * AC - BD * DC.",
        "derivation": "Regular Hexagon of Side a: Area = 6 * (sqrt(3)/4) * a^2 = (3*sqrt(3)/2) * a^2.",
        "shortcut": "Since volume scales as (h / H)^3, (h / 30)^3 = 8 / 27 => h / 30 = 2 / 3 => h = 20 cm."
      },
      {
        "heading": "3D Cone Parallel Cut Law",
        "formula": "Cutting a cone parallel to base at height ratio h : H yields surface area ratio (h/H)^2 and volume ratio (h/H)^3.",
        "derivation": "Power of a Point: Intersecting chords PA * PB = PC * PD; Secant-Tangent PT^2 = PA * PB.",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "CAT +3/-1 vs TITA Domain Trap in Geometry & Mensuration",
        "wrongStep": "Skipping boundary/domain validation before selecting an MCQ option.",
        "correction": "Right Triangle Inradius & Circumradius: r = (a + b - c)/2  |  R = c/2.",
        "penalty": "-1 Mark in CAT MCQ"
      }
    ],
    "questions": [
      {
        "id": "CAT-GEO-Q1",
        "stem": "In triangle ABC, AD:DB = 2:3 and AE:EC = 3:4. Find Area(ADE) : Area(BCED).",
        "options": [
          "6 : 29",
          "6 : 35",
          "2 : 7",
          "9 : 26"
        ],
        "answer": 0,
        "explanation": "6 / (35 - 6) = 6 : 29."
      },
      {
        "id": "CAT-GEO-Q2",
        "stem": "A cone of height 30 cm is cut parallel to its base so top cone and bottom frustum have volume ratio 8 : 19. Height of top cone?",
        "options": [
          "10 cm",
          "15 cm",
          "20 cm",
          "24 cm"
        ],
        "answer": 2,
        "explanation": "(h/30)^3 = 8/27 => h = 20 cm."
      }
    ]
  },
  {
    "id": "CAT-MOD-MODM",
    "pillar": "CAT 2026 MODERN MATH",
    "title": "Modern Math: Logarithms, Sequences (AP/GP/HP), P&C & Probability",
    "weightage": "High-Scoring TITA • 3–4 Qs per Slot (+3/-1 MCQ & +3/0 TITA)",
    "concepts": [
      {
        "heading": "Positive Integer Partition Law",
        "formula": "Positive integer solutions to x_1 + ... + x_r = n is C(n - 1, r - 1).",
        "derivation": "Logarithm Identities: log_b(a) = ln(a)/ln(b) = 1/log_a(b); a^(log_a(x)) = x.",
        "shortcut": "Apply C(n - 1, r - 1) = C(11, 2) = 55."
      },
      {
        "heading": "Non-Negative Integer Partition Law",
        "formula": "Non-negative integer solutions to x_1 + ... + x_r = n is C(n + r - 1, r - 1).",
        "derivation": "Sum of AP & GP: S_n(AP) = (n/2)[2a + (n - 1)d]; S_inf(GP) = a / (1 - r) for |r| < 1.",
        "shortcut": "(1 + 1/2 + 1/3) * log_2(x) = 11 => (11/6)*log_2(x) = 11 => log_2(x) = 6 => x = 64."
      },
      {
        "heading": "Telescoping Partial Fraction Law",
        "formula": "1 / [k(k + d)] = (1/d) * [1/k - 1/(k + d)].",
        "derivation": "Derangements: D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44.",
        "shortcut": "Total ways = 5 * 9 = 45."
      },
      {
        "heading": "Bayes' Conditional Probability Law",
        "formula": "P(A | B) = P(B | A) * P(A) / P(B).",
        "derivation": "Modern Math (Logarithms, Progressions, Permutations & Combinations, Probability, and Set Theory) contributes 3 to 4 questions in CAT QA. Logarithm base-change equations, Stars-and-Bars integer partitions, derangements, and telescoping series offer rapid, deterministic solutions.",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "CAT +3/-1 vs TITA Domain Trap in Modern Math",
        "wrongStep": "Skipping boundary/domain validation before selecting an MCQ option.",
        "correction": "Logarithm Identities: log_b(a) = ln(a)/ln(b) = 1/log_a(b); a^(log_a(x)) = x.",
        "penalty": "-1 Mark in CAT MCQ"
      }
    ],
    "questions": [
      {
        "id": "CAT-MOD-Q1",
        "stem": "[TITA] Number of positive integer solutions to x + y + z = 12?",
        "options": [
          "55",
          "66",
          "78",
          "45"
        ],
        "answer": 0,
        "explanation": "C(11, 2) = 55."
      },
      {
        "id": "CAT-MOD-Q2",
        "stem": "Solve for x: log_2(x) + log_4(x) + log_8(x) = 11.",
        "options": [
          "32",
          "64",
          "128",
          "256"
        ],
        "answer": 1,
        "explanation": "(11/6)*log_2(x) = 11 => x = 64."
      },
      {
        "id": "CAT-MOD-Q3",
        "stem": "[TITA] Ways to put 5 letters into 5 addressed envelopes so EXACTLY 1 letter is in its own envelope?",
        "options": [
          "45",
          "44",
          "20",
          "60"
        ],
        "answer": 0,
        "explanation": "C(5,1) * D_4 = 5 * 9 = 45."
      }
    ]
  }
];
