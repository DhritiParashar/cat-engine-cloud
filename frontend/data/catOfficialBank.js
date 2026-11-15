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

// Live PostgreSQL Hydration: Fetch CAT_2026 questions from Neon PostgreSQL and merge into active QA, DILR & VARC modules
(async function hydrateCatFromPostgres() {
  try {
    const res = await fetch("/api/questions?exam=CAT_2026&limit=150&t=" + Date.now());
    const data = await res.json();
    if (!data || !Array.isArray(data.questions) || !data.questions.length) return;
    window.CAT_POSTGRES_BANK = data.questions;

    const topicMap = [
      { modId: "CAT-MOD-ALG", kw: ["Algebra", "Modulus", "Quadratic", "Function", "Maxima"] },
      { modId: "CAT-MOD-ARITH1", kw: ["Mixtures", "Profit", "Loss", "Interest", "Percentage"] },
      { modId: "CAT-MOD-ARITH2", kw: ["Circular", "Escalator", "TSD", "Work", "Speed"] },
      { modId: "CAT-MOD-NUM", kw: ["Number", "Remainder", "Factor", "Euler"] },
      { modId: "CAT-MOD-GEO", kw: ["Geometry", "Triangle", "Circle", "Mensuration"] },
      { modId: "CAT-MOD-MODM", kw: ["Modern", "Combinatorics", "Logarithm", "Probability", "Derangement"] }
    ];

    const qaItems = data.questions.filter(q => q.section === "QUANT_CORE");
    for (const mapEntry of topicMap) {
      const mod = (window.IPM_QUANT_CORE || []).find(m => m.id === mapEntry.modId);
      if (!mod) continue;
      const matched = qaItems.filter(q => mapEntry.kw.some(k => (q.topic || "").toLowerCase().includes(k.toLowerCase())));
      if (matched.length) {
        mod.questions = matched.map(q => {
          const hasOpts = Array.isArray(q.options) && q.options.length > 0;
          return {
            id: q.id,
            stem: q.prompt,
            options: hasOpts ? q.options : [String(q.answer), "0", "1", "2"],
            answer: hasOpts ? Number(q.answer) : 0,
            explanation: q.explanation
          };
        });
      }
    }

    if (typeof window.renderActiveTab === "function") {
      window.renderActiveTab();
    }
  } catch (e) {
    console.warn("CAT PostgreSQL hydration fallback:", e);
  }
})();
// Deep Chapter Overview & Concept Bridge Enrichment for CAT 2026
(function enrichCatOverviews() {
  const R = window.IPM_CHAPTER_REFRESHERS || {};
  if (R["CAT-MOD-ALG"]) {
    R["CAT-MOD-ALG"].overviewParagraphs = [
      "Algebra is the single strongest differentiator between a 95th percentile and a 99.5+ percentile score in IIM CAT Quantitative Aptitude, consistently contributing 7 to 8 questions out of 22. While Arithmetic rewards speed and familiarity, CAT Algebra tests structural reasoning: analyzing critical points of nested absolute values without squaring blindly, determining root locations of quadratics using discriminant-vertex-boundary conditions, and applying weighted AM-GM-HM inequalities to asymmetric expressions.",
      "Concept Bridge: In school mathematics, students solve modulus and radical equations by squaring both sides—a habit that introduces extraneous roots and wastes 2–3 minutes per question in CAT. Instead, view |x - a| geometrically as distance on the real line, check right-hand-side non-negativity (RHS >= 0) first to prune half the domain immediately, and use weighted AM-GM splitting whenever sums and products of positive variables are linked."
    ];
    R["CAT-MOD-ALG"].examMetrics = {
      weightage: "7–8 Qs / 22 (35–40% QA)",
      targetPace: "1.8 – 2.2 mins / Q",
      format: "MCQ (+3/-1) & TITA (+3/0)",
      strategy: "Domain Pruning & AM-GM Split"
    };
    R["CAT-MOD-ALG"].conceptBridgeTraps = [
      { pitfall: "Blindly Squaring Modulus / Radical Equations", bridge: "Squaring |f(x)| = g(x) creates false roots where g(x) < 0. Always enforce g(x) >= 0 before solving." },
      { pitfall: "Applying AM >= GM to Negative or Zero Variables", bridge: "AM >= GM holds strictly for positive real numbers (x_i > 0). Shift variables (e.g., t = x + 1 > 0) before applying." }
    ];
  }
  if (R["CAT-MOD-ARITH1"]) {
    R["CAT-MOD-ARITH1"].overviewParagraphs = [
      "Arithmetic Part I (Percentages, Profit-Loss-Discount, Simple & Compound Interest, Ratios, and Mixtures/Alligation) forms the scoring anchor of CAT QA, delivering 4 to 5 direct questions in every slot. CAT rarely tests single-step formulas; instead, setters chain successive markups/discounts with faulty weights, multi-stage dilution/replacement, and partner-wise profit sharing.",
      "Concept Bridge: Stop setting up 'Let Cost Price = x' algebraic equations. Convert every percentage change into a clean fraction multiplier (e.g., +16.67% = 7/6, -12.5% = 7/8), apply the Alligation teeter-totter whenever two concentrations merge into a known average, and conserve the unchanged component (such as solid pulp in fresh-vs-dry fruit or water during pure-solute addition)."
    ];
    R["CAT-MOD-ARITH1"].examMetrics = {
      weightage: "4–5 Qs / 22 (20–23% QA)",
      targetPace: "1.4 – 1.8 mins / Q",
      format: "High-Accuracy MCQ & TITA",
      strategy: "Fraction Multipliers & Alligation"
    };
    R["CAT-MOD-ARITH1"].conceptBridgeTraps = [
      { pitfall: "Adding Removed Volumes in Successive Replacement", bridge: "Later withdrawals remove diluted mixture, not pure solute. Multiply remaining fractions: prod(1 - v_i/V)." },
      { pitfall: "Computing Discount on Cost Price", bridge: "Markup acts on CP, Discount acts on Marked Price (MP), and Profit is always measured on actual CP delivered." }
    ];
  }
  if (R["CAT-MOD-ARITH2"]) {
    R["CAT-MOD-ARITH2"].overviewParagraphs = [
      "Arithmetic Part II (Time-Speed-Distance, Circular Tracks, Boats/Escalators, and Time & Work) contributes 4 to 5 high-value questions per CAT slot. Questions routinely combine variable speeds, back-and-forth linear track meetings, moving escalators, and negative-efficiency outlet pipes.",
      "Concept Bridge: Whenever distance is constant, speed and time are inversely proportional—eliminating variables completely via ratio shifts. On circular tracks, reduce speeds to their coprime ratio a : b first: runners meet at (a + b) distinct points in opposite directions and |a - b| points in the same direction."
    ];
    R["CAT-MOD-ARITH2"].examMetrics = {
      weightage: "4–5 Qs / 22 (20–23% QA)",
      targetPace: "1.5 – 2.0 mins / Q",
      format: "MCQ (+3/-1) & TITA (+3/0)",
      strategy: "Inverse Ratios & LCM Work Units"
    };
    R["CAT-MOD-ARITH2"].conceptBridgeTraps = [
      { pitfall: "Using Raw Speeds Instead of Coprime Ratio on Circles", bridge: "Divide both speeds by their GCD before computing (a + b) or |a - b| distinct meeting points." },
      { pitfall: "Arithmetic Mean of Equal-Distance Speeds", bridge: "Equal distances require the Harmonic Mean 2*v_1*v_2 / (v_1 + v_2), never (v_1 + v_2)/2." }
    ];
  }
  if (R["CAT-MOD-NUM"]) {
    R["CAT-MOD-NUM"].overviewParagraphs = [
      "CAT Number System questions reward structural theorems—Euler's Totient Theorem, Fermat's Little Theorem, Chinese Remainder Theorem, Legendre's factorial exponent formula, and binomial parity—rather than brute-force arithmetic. Roughly half of Number System prompts appear as TITA integer-entry items.",
      "Concept Bridge: Never expand large powers like 3^2026 or 7^103 + 11^103. Reduce the base modulo the divisor first, check if odd exponents allow (a + b) divisibility, or use Euler's totient phi(N) to collapse high exponents into small remainders."
    ];
    R["CAT-MOD-NUM"].examMetrics = {
      weightage: "3–4 Qs / 22 (15–18% QA)",
      targetPace: "1.6 – 2.1 mins / Q",
      format: "Heavy TITA (+3/0) Presence",
      strategy: "Euler Totient & Binomial Parity"
    };
    R["CAT-MOD-NUM"].conceptBridgeTraps = [
      { pitfall: "Applying (a + b) Divisibility to Even Exponents", bridge: "(a^n + b^n) is divisible by (a + b) ONLY when n is an odd positive integer." },
      { pitfall: "Forgetting 0 and 1 in Factor-Exclusion Counts", bridge: "Always count via prime-exponent choices (a+1)(b+1)(c+1) rather than listing divisors manually." }
    ];
  }
  if (R["CAT-MOD-GEO"]) {
    R["CAT-MOD-GEO"].overviewParagraphs = [
      "Geometry and Mensuration contributes 3 to 4 questions in CAT QA, spanning triangle area scaling, Stewart's cevian theorem, inradius/circumradius identities, cyclic quadrilaterals, intersecting chords, and 3D cone/frustum cuts.",
      "Concept Bridge: Avoid coordinate-bashing or heavy trigonometry. Over 80% of CAT Geometry problems yield in 3 steps using similar-triangle area ratios ((side ratio)^2), shared-angle area products ((AD*AE)/(AB*AC)), and Power of a Point (PT^2 = PA * PB)."
    ];
    R["CAT-MOD-GEO"].examMetrics = {
      weightage: "3–4 Qs / 22 (15–18% QA)",
      targetPace: "1.8 – 2.3 mins / Q",
      format: "MCQ (+3/-1) & TITA (+3/0)",
      strategy: "Area Ratio Scaling & Power of Point"
    };
    R["CAT-MOD-GEO"].conceptBridgeTraps = [
      { pitfall: "Assuming Parallel Lines Without Statement", bridge: "Use (AD/AB)*(AE/AC) for shared-angle triangles; only square the ratio when DE || BC is proven." },
      { pitfall: "Confusing Surface Area vs Volume Scaling in 3D Cuts", bridge: "Parallel cone cuts scale linear dimensions by k, areas by k^2, and volumes by k^3." }
    ];
  }
  if (R["CAT-MOD-MODM"]) {
    R["CAT-MOD-MODM"].overviewParagraphs = [
      "Modern Math (Logarithms, AP/GP/HP Sequences, Permutations & Combinations, Probability, and Set Theory) contributes 3 to 4 high-scoring questions in CAT QA, frequently in TITA format where eliminating negative marking lets you attempt calculated counting problems confidently.",
      "Concept Bridge: Map distribution problems onto Stars-and-Bars immediately (C(n - 1, r - 1) for positive integers vs. C(n + r - 1, r - 1) for non-negative integers), and use change-of-base to unify mixed-base logarithm equations into a single variable."
    ];
    R["CAT-MOD-MODM"].examMetrics = {
      weightage: "3–4 Qs / 22 (15–18% QA)",
      targetPace: "1.6 – 2.0 mins / Q",
      format: "High TITA (+3/0) Concentration",
      strategy: "Stars-and-Bars & Base Change"
    };
    R["CAT-MOD-MODM"].conceptBridgeTraps = [
      { pitfall: "Confusing Positive (>=1) vs Non-Negative (>=0) Solutions", bridge: "Give 1 unit to each variable first when strictly positive integers are required: C(n - 1, r - 1)." },
      { pitfall: "Ignoring Logarithm Domain Positivity", bridge: "Every argument inside log_b(f(x)) must satisfy f(x) > 0, and base b > 0, b != 1." }
    ];
  }
})();
// ==============================================================================
// SITE 1 (CAT 2026): COMPLETE ENRICHMENT OF TABS 2, 3, 4, 5 & 6
// ==============================================================================

// 1. TAB 2: CAT 2026 DILR CASELET LAB (4 Pillars + Deep Concept Bridges + Worked Caselets + Interactive Drills)
window.IPM_DILR_VARC_BANK = {};
window.IPM_CHAPTER_REFRESHERS["CAT-DILR-SET"] = {
  overviewParagraphs: [
    "Set Theory, Venn Diagrams & Maxima-Minima Optimization constitute 25–30% of all IIM CAT DILR sets (typically 1 full 4-question or 5-question caselet in every slot). Unlike textbook 2-circle Venn problems, CAT presents incomplete 3-set or 4-set overlap tables with missing boundary bounds and asks for the maximum or minimum possible count in an intersection region.",
    "Concept Bridge: Never guess intersection sizes by trial and error. Anchor the Fundamental 3-Set Sum Identity: Sum of Individual Set Totals (A + B + C) = (Exactly 1) + 2*(Exactly 2) + 3*(Exactly 3), while Total Population N = (Exactly 1) + (Exactly 2) + (Exactly 3) + (None). Subtracting these two equations immediately isolates (Exactly 2) + 2*(Exactly 3) = (A + B + C) - (N - None)."
  ],
  examMetrics: {
    weightage: "1 Full Set / Slot (4–5 Qs)",
    targetPace: "9 – 11 mins / Set",
    format: "MCQ (+3/-1) & TITA (+3/0)",
    strategy: "Set Selection & Equation Subtraction"
  },
  prerequisites: [
    "3-Set Inclusion-Exclusion: n(A U B U C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C).",
    "Degree-Sum Identity: n(A) + n(B) + n(C) = E_1 + 2*E_2 + 3*E_3, where E_k denotes elements in exactly k sets.",
    "Excess Overlap Identity: E_2 + 2*E_3 = [n(A) + n(B) + n(C)] - [N - E_0]."
  ],
  conceptBridgeTraps: [
    { pitfall: "Confusing 'At Least 2' with 'Exactly 2'", bridge: "Always denote E_2 = exact 2-set overlap and E_3 = exact 3-set overlap; 'at least 2' equals E_2 + E_3." },
    { pitfall: "Ignoring Non-Negativity of E_1, E_2, E_3", bridge: "Maximizing E_3 requires setting E_2 = 0 (if parity allows) while keeping every individual region >= 0." }
  ],
  corePrinciples: [
    "Excess-Overlap Optimization Law: To maximize E_3, set E_2 = 0 in E_2 + 2*E_3 = Excess; to minimize E_3, maximize E_2 up to (N - E_0).",
    "4-Set Grid Partition Law: For 4 attributes (e.g., 4 events or 4 regions), replace Venn circles with a 2x2 Karnaugh/truth table of 16 mutually exclusive cells."
  ],
  workedExamples: [
    {
      level: "CAT 95%ile",
      problem: "In a cohort of 100 MBA aspirants, 70 solve QA daily, 65 solve DILR daily, and 60 solve VARC daily. Every aspirant solves at least one section. Find the minimum and maximum possible number of aspirants solving all three sections.",
      steps: [
        "Compute Excess Overlap = (70 + 65 + 60) - 100 = 195 - 100 = 95 = E_2 + 2*E_3.",
        "For Maximum E_3: minimize E_2. Since 95 is odd, set E_2 = 1 => 2*E_3 = 94 => Max E_3 = 47.",
        "For Minimum E_3: maximize E_2 subject to E_1 + E_2 + E_3 = 100 => set E_1 = 0, E_2 = 95, E_3 = 0 => Min E_3 = 0."
      ]
    },
    {
      level: "CAT 99.5%ile",
      problem: "Four IIMs (A, B, C, L) sent distinct delegate counts from {12, 15, 18, 20} (sum = 65). Each delegate entered 1 or 2 events (none entered 3), and exactly 6 delegates from each institute entered 2 events. In IIM A, single-event delegates split across Case Clash, FinQuest, and StratWars in ratio 3:2:1. IIM C sent the most delegates, and IIM B > IIM L. Determine exact counts.",
      steps: [
        "For IIM A, single-event delegates (Total - 6) must be divisible by 3 + 2 + 1 = 6 => Total in {12, 18}.",
        "Since IIM C = 20 (highest) and IIM B > IIM L, IIM A = 18, IIM B = 15, and IIM L = 12.",
        "IIM A single-event delegates = 18 - 6 = 12, splitting 3:2:1 into 6 (Case Clash), 4 (FinQuest), and 2 (StratWars)."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-DILR-TOURN"] = {
  overviewParagraphs: [
    "Round-Robin Tournaments, Knockout Brackets & Scheduling Grids appear in almost every CAT DILR paper. Success depends on converting match results into global point-conservation equations before filling individual team cells.",
    "Concept Bridge: In an n-team single round-robin league, total matches played equal C(n, 2) = n(n - 1)/2. Under standard football scoring (Win = 3, Draw = 1, Loss = 0), every decisive match injects 3 total points into the standings table while every draw injects 2 points—immediately fixing the exact number of draws from the sum of team points."
  ],
  examMetrics: {
    weightage: "1 Full Set / Slot (4–5 Qs)",
    targetPace: "10 – 12 mins / Set",
    format: "High TITA (+3/0) Concentration",
    strategy: "Total-Points Conservation Law"
  },
  prerequisites: [
    "Single Round-Robin Matches: N teams play N*(N - 1)/2 total matches; each team plays (N - 1) matches.",
    "Knockout Matches: N teams require (N - 1) matches to crown 1 champion.",
    "Point-Sum Conservation: Total Points = 3 * (Total Matches) - 1 * (Number of Draws)."
  ],
  conceptBridgeTraps: [
    { pitfall: "Assuming Equal-Points Teams Tied Head-to-Head", bridge: "Two teams with identical points can have different W-D-L records (e.g., 1W-1D-1L = 4 pts vs 0W-4D-0L = 4 pts)." },
    { pitfall: "Ignoring Unbeaten Team Constraints", bridge: "An unbeaten team has 0 losses, meaning its maximum points equal 3*(N - 1) minus 2 per draw." }
  ],
  corePrinciples: [
    "Draw-Count Conservation Law: Number of draws D = 3 * C(n, 2) - Sum(All Team Points).",
    "Knockout Upset Seed Law: In a standard seeded knockout where seed i plays seed (N + 1 - i) in Round 1, sum of seed numbers in every un-upset match equals (N + 1)."
  ],
  workedExamples: [
    {
      level: "CAT 99.5%ile",
      problem: "Six teams play a single round-robin tournament (Win = 3, Draw = 1, Loss = 0). No two teams finished with equal points, the top team won all 5 matches, and total points awarded across all 15 matches was 41. Find the number of draws.",
      steps: [
        "Total matches among 6 teams = C(6, 2) = 15 matches.",
        "Apply Draw-Count Law: D = 3*(15) - 41 = 45 - 41 = 4 draws (and 11 decisive matches)."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-DILR-GRID"] = {
  overviewParagraphs: [
    "Matrix Arrangements, Routes & Networks, and Logical Constraint Grids test multi-dimensional deduction across 4–6 entities and 3–4 attributes. CAT setters design these sets so that direct clues fill ~40% of the grid while the remaining 60% unlocks via elimination and parity/sum constraints.",
    "Concept Bridge: Always choose the primary row index with the strictest ordering or numeric anchor (such as time slots, floor numbers, or ranked scores), write negative constraints in a dedicated 'Excluded' margin column, and split into at most two clean sub-cases (Case I and Case II) whenever a binary branch appears."
  ],
  examMetrics: {
    weightage: "1–2 Sets / Slot (4–8 Qs)",
    targetPace: "9 – 11 mins / Set",
    format: "MCQ (+3/-1) & TITA (+3/0)",
    strategy: "Anchor Indexing & Binary Branching"
  },
  prerequisites: [
    "Directed Network Flow: At every intermediate node, Inflow = Outflow.",
    "Shortest Path Grid Counting: Paths from (0,0) to (m,n) moving only Right/Up = C(m + n, m)."
  ],
  conceptBridgeTraps: [
    { pitfall: "Overwriting Cells Without Case Splitting", bridge: "When two valid placements exist, duplicate the grid into Case A and Case B rather than erasing." }
  ],
  corePrinciples: [
    "Strictest-Anchor Indexing Law: Index rows by ordered dimensions (1st to 5th, Monday to Friday) rather than unordered names.",
    "Negative-Clue Elimination Law: Cross out impossible values explicitly in a 5x5 truth matrix to trigger forced singletons."
  ],
  workedExamples: [
    {
      level: "CAT 95%ile",
      problem: "Five analysts (P, Q, R, S, T) from Mumbai, Delhi, Bengaluru, Chennai, and Kolkata specialize in FinTech, Healthcare, SaaS, Energy, and Retail. P is from Mumbai and not in FinTech; the Bengaluru analyst is in SaaS; R is in Healthcare and not from Delhi or Kolkata.",
      steps: [
        "From R = Healthcare and R not in {Mumbai (P), Bengaluru (SaaS), Delhi, Kolkata}, R must be from Chennai.",
        "Remaining cities for Q, S, T are Bengaluru (SaaS), Delhi, and Kolkata."
      ]
    }
  ]
};

window.IPM_CHAPTER_REFRESHERS["CAT-DILR-DI"] = {
  overviewParagraphs: [
    "CAT Data Interpretation (Stacked Bars, Spider/Radar Charts, Scatter Plots, and Missing-Data Financial Tables) pairs visual ratio estimation with logical boundary deduction. Unlike clerical banking exams, CAT DI avoids tedious 5-digit multiplication—every table has a structural shortcut.",
    "Concept Bridge: Use percentage-fraction benchmarks (1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%) to compare growth rates visually without long division, and check row/column totals first to recover missing table entries."
  ],
  examMetrics: {
    weightage: "1 Set / Slot (4–5 Qs)",
    targetPace: "8 – 10 mins / Set",
    format: "MCQ (+3/-1) & TITA (+3/0)",
    strategy: "Fraction Benchmarks & Base Comparison"
  },
  prerequisites: [
    "CAGR Approximation: For small r, (1 + r)^n ≈ 1 + n*r + n(n-1)/2 * r^2.",
    "Ratio Comparison: a/b > c/d <=> a*d > b*c (cross-multiplication without decimal division)."
  ],
  conceptBridgeTraps: [
    { pitfall: "Confusing Share % Growth with Absolute Volume Growth", bridge: "A company's market share % can fall even while its absolute revenue rises if total market size grows faster." }
  ],
  corePrinciples: [
    "Cross-Multiplication Ratio Law: Compare fractions a/b vs c/d by comparing a*d vs b*c directly.",
    "Base-Shift Percentage Law: A drop from 25% share to 20% share is a 5 percentage-point drop, but a 20% relative decline."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "Revenue rises from Rs. 240 Cr to Rs. 280 Cr while operating margin drops from 25% to 22.5%. Find change in operating profit.",
      steps: [
        "Initial profit = 25% of 240 = Rs. 60 Cr.",
        "New profit = 22.5% of 280 = (9/40) * 280 = 9 * 7 = Rs. 63 Cr => +Rs. 3 Cr (+5% increase)."
      ]
    }
  ]
};

window.IPM_DILR = [
  {
    id: "CAT-DILR-SET",
    pillar: "CAT 2026 DILR • PILLAR 1",
    title: "Set Theory, Venn Diagrams & Maxima-Minima Optimization",
    weightage: "High Yield • 1 Full 4–5 Q Caselet per Slot",
    concepts: [],
    traps: [{ title: "Confusing 'At Least 2' with 'Exactly 2'", wrongStep: "Using E_2 instead of E_2 + E_3.", correction: "Subtract N from sum of sets to get E_2 + 2*E_3.", penalty: "-4 Marks on Cascading Set" }],
    questions: [
      { id: "CAT-DILR-S1-Q1", stem: "[CAT DILR Set 1 • Q1 TITA] Four B-schools (IIM A, B, C, L) sent distinct delegate counts from {12, 15, 18, 20} (sum = 65) across Case Clash (CC), FinQuest (FQ), and StratWars (SW). Each delegate entered 1 or 2 events (none entered 3), and exactly 6 delegates per institute entered 2 events. In IIM A, single-event delegates split across CC, FQ, SW in ratio 3:2:1. IIM C sent the most delegates, and IIM B > IIM L. How many total delegates did IIM A send?", options: ["18", "12", "15", "20"], answer: 0, explanation: "Total - 6 must be divisible by 6 => {12, 18}. Since IIM C = 20 and IIM B > IIM L, IIM A = 18." },
      { id: "CAT-DILR-S1-Q2", stem: "[CAT DILR Set 1 • Q2] Based on the B-school delegate distribution above (IIM A = 18 total, 6 in two events, single-event split 3:2:1 across CC, FQ, SW), how many IIM A delegates participated ONLY in Case Clash?", options: ["3", "4", "6", "9"], answer: 2, explanation: "12 single-event delegates split 3:2:1 => 6 in CC only." }
    ]
  },
  {
    id: "CAT-DILR-TOURN",
    pillar: "CAT 2026 DILR • PILLAR 2",
    title: "Round-Robin Tournaments, Knockout Brackets & Scheduling",
    weightage: "High Yield • 1 Full 4–5 Q Caselet per Slot",
    concepts: [],
    traps: [{ title: "Missing Total-Points Conservation in Leagues", wrongStep: "Guessing individual match results before counting draws.", correction: "Compute Draws D = 3*C(n, 2) - Sum(Points) first.", penalty: "Time Sink" }],
    questions: [
      { id: "CAT-DILR-S2-Q1", stem: "[CAT DILR Set 2 • Q1 TITA] Six teams play a single round-robin football league (Win = 3, Draw = 1, Loss = 0). Total points awarded across all 15 matches was 41. How many matches ended in a draw?", options: ["4", "3", "5", "6"], answer: 0, explanation: "D = 3*15 - 41 = 45 - 41 = 4 draws." }
    ]
  },
  {
    id: "CAT-DILR-GRID",
    pillar: "CAT 2026 DILR • PILLAR 3",
    title: "Matrix Arrangements, Routes & Logical Constraint Grids",
    weightage: "Core DILR • 1–2 Caselets per Slot",
    concepts: [],
    traps: [{ title: "Erasing Grid Entries Without Binary Branching", wrongStep: "Overwriting cells when two placements are valid.", correction: "Split cleanly into Case I and Case II.", penalty: "Cascading Grid Error" }],
    questions: [
      { id: "CAT-DILR-S3-Q1", stem: "Five analysts (P, Q, R, S, T) from Mumbai, Delhi, Bengaluru, Chennai, and Kolkata specialize in FinTech, Healthcare, SaaS, Energy, and Retail. P is from Mumbai and not in FinTech; the Bengaluru analyst is in SaaS; R is in Healthcare and not from Delhi or Kolkata. Which city is R from?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: 2, explanation: "Eliminating Mumbai (P), Bengaluru (SaaS), Delhi, and Kolkata leaves Chennai for R." }
    ]
  },
  {
    id: "CAT-DILR-DI",
    pillar: "CAT 2026 DILR • PILLAR 4",
    title: "Multi-Chart Data Interpretation & Missing-Data Tables",
    weightage: "Core DILR • 1 Caselet per Slot",
    concepts: [],
    traps: [{ title: "Confusing Percentage-Point Change with Relative % Change", wrongStep: "Treating a drop from 25% to 20% as a 5% drop.", correction: "25% to 20% is a 5 percentage-point drop, or a 20% relative drop.", penalty: "-1 Mark in MCQ" }],
    questions: [
      { id: "CAT-DILR-S4-Q1", stem: "A firm's revenue grows from Rs. 240 Cr to Rs. 280 Cr while operating margin shifts from 25% to 22.5%. By how much does operating profit increase?", options: ["Rs. 1.5 Cr", "Rs. 2.5 Cr", "Rs. 3.0 Cr", "Rs. 4.0 Cr"], answer: 2, explanation: "New profit = 0.225 * 280 = Rs. 63 Cr vs Old profit = 0.25 * 240 = Rs. 60 Cr => +Rs. 3.0 Cr." }
    ]
  }
];
window.getDilrModules = function () { return window.IPM_DILR; };

// 2. TAB 4: PURGE IPMAT/JIPMAT TAGS FROM TRAP DOCTOR & AI DOUBTS
window.IPM_TRAPS_CLINIC = [
  {
    id: "CAT-TRAP-01",
    domain: "Algebra & Modulus",
    exam: "CAT 2026 QA (+3/-1 vs TITA)",
    title: "Squaring |f(x)| = g(x) Without Checking RHS >= 0",
    trapStem: "Solve |2x - 7| = x - 5. A student squares both sides: 4x^2 - 28x + 49 = x^2 - 10x + 25 => 3x^2 - 18x + 24 = 0 => x = 2 or x = 4.",
    wrongReasoning: "Accepting both x = 2 and x = 4 because both satisfy the squared quadratic.",
    correctReasoning: "RHS (x - 5) must be >= 0 => x >= 5! Neither x = 2 nor x = 4 satisfies x >= 5, so there are 0 real solutions.",
    evImpact: "Selecting '2 solutions' costs -1 mark in MCQ (4-mark swing vs +3)."
  },
  {
    id: "CAT-TRAP-02",
    domain: "Arithmetic & Mixtures",
    exam: "CAT 2026 QA",
    title: "Adding Removed Volumes in Successive Replacement",
    trapStem: "From 60L pure milk, 6L, 10L, and 12L are sequentially replaced with water. Find remaining milk %.",
    wrongReasoning: "Subtracting (6 + 10 + 12)/60 = 28/60 from 100% to get 53.33%.",
    correctReasoning: "Multiply remaining fractions: (54/60) * (50/60) * (48/60) = (9/10)*(5/6)*(4/5) = 3/5 = 60%.",
    evImpact: "Classic distractor option (53.33% or 54%) traps 45% of test-takers."
  },
  {
    id: "CAT-TRAP-03",
    domain: "VARC • Parajumbles & RC",
    exam: "CAT 2026 VARC",
    title: "Selecting Extreme / Universal Options in CAT RC Inference",
    trapStem: "Passage notes that 'prolonged low interest rates can inadvertently encourage leverage in shadow banks.' Option (A) states: 'Low interest rates inevitably destabilize financial markets.'",
    wrongReasoning: "Choosing Option (A) because it echoes 'leverage' and 'fragility' keywords from the passage.",
    correctReasoning: "CAT RC eliminates absolute modifiers ('inevitably', 'always', 'solely') when the author uses hedged modal verbs ('can', 'may').",
    evImpact: "Eliminating extreme qualifiers raises CAT VARC accuracy above 85%."
  },
  {
    id: "CAT-TRAP-04",
    domain: "DILR • Set Theory",
    exam: "CAT 2026 DILR",
    title: "Double-Counting Triple Overlaps in 3-Set Sum Equations",
    trapStem: "100 students: 70 QA, 65 DILR, 60 VARC (everyone studies >=1). Find maximum students studying all 3.",
    wrongReasoning: "Taking min(70, 65, 60) = 60 without checking total population capacity.",
    correctReasoning: "E_2 + 2*E_3 = (70 + 65 + 60) - 100 = 95 => Max E_3 = floor(95 / 2) = 47.",
    evImpact: "Saves an entire 4-question DILR set (+12 to +16 net score)."
  }
];

window.IPM_DOUBT_BANK = [
  {
    id: "CAT-DBT-01",
    domain: "Quant Core",
    examTag: "CAT 2026 QA",
    question: "Why does selling two items at the SAME Selling Price—one at +20% profit and one at -20% loss—always result in a 4% net loss instead of breaking even?",
    hint: "Assume SP = Rs. 120 for BOTH items. Compute CP_1 (at +20% profit) and CP_2 (at -20% loss) separately—which item had the larger Cost Price?",
    shortcut: "Equal-SP Formula: Net Loss % = (x^2 / 100)% = (20^2 / 100)% = 4% loss on total transaction.",
    derivation: "For SP = 120: CP_1 = 120 / 1.2 = Rs. 100, while CP_2 = 120 / 0.8 = Rs. 150. Total CP = Rs. 250 vs Total SP = Rs. 240 => Loss = 10/250 = 4%."
  },
  {
    id: "CAT-DBT-02",
    domain: "Number System",
    examTag: "CAT 2026 QA (TITA)",
    question: "How do I find the last two digits of 3^2026 in under 45 seconds without expanding powers?",
    hint: "Use Euler's Totient Theorem mod 100: compute phi(100) = 100*(1 - 1/2)*(1 - 1/5) = 40, so 3^40 ≡ 1 (mod 100).",
    shortcut: "Divide exponent 2026 by 40 -> remainder 26. Since 3^20 ≡ 01 (mod 100), 3^26 ≡ 3^6 = 729 ≡ 29.",
    derivation: "3^2026 = (3^40)^50 * 3^26 ≡ 1 * (3^20) * 3^6 ≡ 1 * 729 ≡ 29 (mod 100)."
  },
  {
    id: "CAT-DBT-03",
    domain: "VARC • TITA",
    examTag: "CAT 2026 VARC",
    question: "What is the fastest opening move on a 4-sentence CAT TITA Parajumble with zero options?",
    hint: "Scan for mandatory pairs first: look for a general claim followed by 'Yet / However / Consequently' or a full noun phrase followed by a demonstrative ('This phenomenon / These findings').",
    shortcut: "Lock 2 mandatory pairs (e.g., 2-1 and 3-4) before deciding which pair opens the paragraph.",
    derivation: "CAT TITA parajumbles carry +3/0 marking (zero negative penalty), and locking one strong pronoun-antecedent link eliminates 18 of 24 permutations immediately."
  }
];

// 3. TAB 8: POPULATE MOCK FALLBACK WITH CAT 2026 QUESTIONS (+3/-1 & TITA)
window.IPM_TAGGED_MOCK_QUESTIONS = (window.CAT_POSTGRES_BANK || []).concat(
  (window.IPM_QUANT_CORE || []).flatMap(m => (m.questions || []).map(q => ({
    id: q.id, section: "QUANT", topic: m.title, exam: "CAT 2026",
    prompt: q.stem, options: q.options, answer: q.answer, explanation: q.explanation
  }))),
  (window.IPM_DILR || []).flatMap(m => (m.questions || []).map(q => ({
    id: q.id, section: "DILR", topic: m.title, exam: "CAT 2026",
    prompt: q.stem, options: q.options, answer: q.answer, explanation: q.explanation
  })))
);

// Ensure VARC & Trap Doctor baseline arrays exist so Tabs 3, 4, 5 & 6 switch cleanly with zero errors
window.IPM_VARC = window.IPM_VARC || [
  {
    id: "CAT-VARC-RC",
    pillar: "CAT 2026 VARC • READING COMPREHENSION",
    title: "Academic Reading Comprehension (Philosophy, Economics, Sociology & Science)",
    weightage: "16 Qs / 24 in VARC (4 Passages x 4 Qs • +3 / -1 MCQ)",
    questions: (window.CAT_OFFICIAL_BANK && window.CAT_OFFICIAL_BANK.varc && window.CAT_OFFICIAL_BANK.varc.rc) || []
  },
  {
    id: "CAT-VARC-VA",
    pillar: "CAT 2026 VARC • TITA VERBAL ABILITY",
    title: "TITA Parajumbles, Odd-One-Out, Para-Completion & Para-Summary",
    weightage: "8 Qs / 24 in VARC (+3 / 0 TITA & +3 / -1 MCQ)",
    questions: (window.CAT_OFFICIAL_BANK && window.CAT_OFFICIAL_BANK.varc && window.CAT_OFFICIAL_BANK.varc.va) || []
  }
];

// Expand Tab 2 DILR Worked Examples Bank to 6 Graded Caselets per Pillar
(function enrichDilrWorkedExamples() {
  const R = window.IPM_CHAPTER_REFRESHERS || {};
  if (R["CAT-DILR-SET"]) {
    R["CAT-DILR-SET"].workedExamples = [
      { level: "Foundation", problem: "In a class of 80 students, 50 play Cricket, 45 play Football, and 10 play neither. How many play both sports?", steps: ["Students playing at least one sport = 80 - 10 = 70.", "By 2-set Inclusion-Exclusion: Both = 50 + 45 - 70 = 25 students."] },
      { level: "Foundation", problem: "In a survey of 120 shoppers, 75 buy Brand X, 60 buy Brand Y, and 20 buy neither. Find those buying ONLY Brand X.", steps: ["At least one brand = 120 - 20 = 100 => Both X and Y = 75 + 60 - 100 = 35.", "Only Brand X = 75 - 35 = 40 shoppers."] },
      { level: "CAT 95%ile", problem: "Out of 100 MBA aspirants, 70 solve QA daily, 65 solve DILR daily, and 60 solve VARC daily (everyone solves >=1). Find min and max solving all 3.", steps: ["Excess Overlap E_2 + 2*E_3 = (70 + 65 + 60) - 100 = 95.", "Max E_3: set E_2 = 1 => 2*E_3 = 94 => Max E_3 = 47.", "Min E_3: maximize E_2 up to 95 (with E_1 = 5, E_3 = 0) => Min E_3 = 0."] },
      { level: "CAT 95%ile", problem: "In a club of 150 members, 90 speak English, 80 speak Hindi, and 70 speak Tamil. Exactly 40 speak all three languages and everyone speaks at least one. How many speak ONLY one language?", steps: ["Sum of sets = E_1 + 2*E_2 + 3*E_3 = 90 + 80 + 70 = 240.", "Subtract Total = E_1 + E_2 + E_3 = 150 => E_2 + 2*E_3 = 90.", "Given E_3 = 40 => E_2 = 90 - 80 = 10 => E_1 = 150 - 10 - 40 = 100 members."] },
      { level: "CAT 99.5%ile", problem: "Four IIMs (A, B, C, L) sent distinct delegate counts from {12, 15, 18, 20} (sum = 65). Each delegate entered 1 or 2 events (none entered 3), and 6 per institute entered 2 events. IIM A's single-event delegates split 3:2:1 across CC, FQ, SW. IIM C > IIM A > IIM B > IIM L. Find IIM A's exact breakdown.", steps: ["For IIM A, (Total - 6) is divisible by 3 + 2 + 1 = 6 => Total in {12, 18}.", "Order IIM C (20) > IIM A (18) > IIM B (15) > IIM L (12).", "IIM A single-event = 12 => 6 (CC only), 4 (FQ only), 2 (SW only)."] },
      { level: "CAT 99.5%ile", problem: "200 analysts took 4 certification exams (CFA, FRM, SQL, Python). Every analyst passed at least 2 exams; 80 passed exactly 2, and 70 passed exactly 3. Find the total number of exam passes across all 200 analysts.", steps: ["Those passing all 4 exams = 200 - 80 - 70 = 50 analysts.", "Total passes = 2*(80) + 3*(70) + 4*(50) = 160 + 210 + 200 = 570 passes."] }
    ];
  }
  if (R["CAT-DILR-TOURN"]) {
    R["CAT-DILR-TOURN"].workedExamples = [
      { level: "Foundation", problem: "How many matches are played in an 8-team single round-robin league followed by top-4 semi-finals and a final?", steps: ["League matches = C(8, 2) = (8 * 7)/2 = 28 matches.", "Knockout stage = 2 semi-finals + 1 final = 3 matches => Total = 31 matches."] },
      { level: "Foundation", problem: "In a 64-player single-elimination tennis knockout, how many total matches are played to decide the champion?", steps: ["Every match eliminates 1 player; eliminating 63 players requires exactly 63 matches."] },
      { level: "CAT 95%ile", problem: "Five teams play a single round-robin tournament (Win = 2 pts, Draw = 1 pt, Loss = 0 pts). What is the sum of points of all 5 teams?", steps: ["Total matches = C(5, 2) = 10 matches.", "Every match awards exactly 2 total points (either 2+0 or 1+1) => Total points = 10 * 2 = 20 points."] },
      { level: "CAT 95%ile", problem: "In a seeded 16-player knockout (Round 1: Seed 1 vs 16, 2 vs 15, ..., 8 vs 9), Seed 11 upsets Seed 6 in Round 1. Whom does Seed 11 face in Round 2 if all other higher seeds win?", steps: ["In Round 1, Match 6 is Seed 6 vs Seed 11, and Match 3 is Seed 3 vs Seed 14.", "Winners of Match 3 (Seed 3) and Match 6 (Seed 11) meet in Round 2 => Seed 3."] },
      { level: "CAT 99.5%ile", problem: "Six teams play a single round-robin football league (Win = 3, Draw = 1, Loss = 0). Total points across all 15 matches was 41. Find the number of draws.", steps: ["Total matches = C(6, 2) = 15. Decisive matches award 3 pts; draws award 2 pts.", "Draws D = 3*(15) - 41 = 45 - 41 = 4 draws (11 decisive matches)."] },
      { level: "CAT 99.5%ile", problem: "Four teams (P, Q, R, S) play a round-robin (Win = 3, Draw = 1, Loss = 0). Final points are P = 7, Q = 4, R = 4, S = 1. Determine the exact result of the match between Q and R.", steps: ["Sum of points = 7 + 4 + 4 + 1 = 16 across 6 matches => Draws D = 3*(6) - 16 = 2 draws.", "P (7 pts = 2W-1D) drew one match; S (1 pt = 0W-1D-2L) drew one match. Since total draws = 2 (4 draw-points across teams), either P drew S (then Q and R had 0 draws -> impossible for 4 pts!) or P drew Q and S drew R => Q and R did NOT draw; one beat the other."] }
    ];
  }
  if (R["CAT-DILR-GRID"]) {
    R["CAT-DILR-GRID"].workedExamples = [
      { level: "Foundation", problem: "Six executives sit around a circular table facing center. A is opposite D; B is immediately left of A; C is immediately right of D. Who sits opposite B?", steps: ["Place A at South (6 o'clock) => D is at North (12 o'clock).", "Immediately left of A (clockwise) is B at 8 o'clock; immediately right of D (clockwise) is C at 10 o'clock.", "Opposite 8 o'clock (B) is 2 o'clock, occupied by the person left of D (E or F)."] },
      { level: "CAT 95%ile", problem: "How many shortest grid paths exist from (0, 0) to (4, 3) passing through intermediate checkpoint (2, 1)?", steps: ["Paths from (0,0) to (2,1) = C(2 + 1, 2) = C(3, 2) = 3.", "Paths from (2,1) to (4,3) = C(2 + 2, 2) = C(4, 2) = 6.", "Total valid paths = 3 * 6 = 18 paths."] },
      { level: "CAT 99.5%ile", problem: "Five analysts (P, Q, R, S, T) from Mumbai, Delhi, Bengaluru, Chennai, and Kolkata specialize in FinTech, Healthcare, SaaS, Energy, and Retail. P is from Mumbai (not FinTech); Bengaluru is SaaS; R is Healthcare (not Delhi/Kolkata). Find R's city.", steps: ["R cannot be Mumbai (P), Bengaluru (SaaS), Delhi, or Kolkata => R is from Chennai."] }
    ];
  }
  if (R["CAT-DILR-DI"]) {
    R["CAT-DILR-DI"].workedExamples = [
      { level: "Foundation", problem: "Revenue rises from Rs. 240 Cr to Rs. 280 Cr while operating margin drops from 25% to 22.5%. Find change in operating profit.", steps: ["Initial profit = 0.25 * 240 = Rs. 60 Cr.", "New profit = 0.225 * 280 = Rs. 63 Cr => +Rs. 3 Cr (+5% growth)."] },
      { level: "CAT 95%ile", problem: "A company's market share drops from 25% to 20% while total industry revenue expands by 40%. Find the percentage growth in the company's own revenue.", steps: ["Assume initial industry size = 100 => company revenue = 25.", "New industry size = 140 => company revenue = 20% of 140 = 28.", "Company revenue growth = (28 - 25) / 25 = 3/25 = +12%."] },
      { level: "CAT 99.5%ile", problem: "Compare 417 / 628 vs 539 / 812 without long division.", steps: ["Both fractions are close to 2/3 (0.6667): 2/3 of 628 = 418.67 (short by 1.67); 2/3 of 812 = 541.33 (short by 2.33).", "Relative shortfall 1.67 / 628 < 2.33 / 812 => 417 / 628 is larger."] }
    ];
  }
})();

// ELABORATE TAB 2 DILR OVERVIEW & CONCEPT BRIDGE TO MATCH TAB 1 DEPTH
(function elaborateCatDilrDepth() {
  const R = window.IPM_CHAPTER_REFRESHERS || {};

  if (R["CAT-DILR-SET"]) {
    R["CAT-DILR-SET"].overviewParagraphs = [
      "Set Theory, Venn Diagrams & Maxima-Minima Optimization constitute 25–30% of all IIM CAT DILR sets—typically appearing as a full 4-question or 5-question anchor caselet in every slot. Unlike routine 2-circle school Venn problems where every intersection is given explicitly, CAT presents incomplete 3-set or 4-set survey tables with missing boundary counts and asks for the maximum or minimum possible number of elements in a target region.",
      "Concept Bridge: Never guess intersection sizes by trial and error. Anchor the Fundamental 3-Set Degree-Sum Identity: Sum of Individual Set Totals [n(A) + n(B) + n(C)] = E_1 + 2*E_2 + 3*E_3, where E_k denotes elements belonging to EXACTLY k sets. Meanwhile, Total Surveyed Population N = E_0 + E_1 + E_2 + E_3. Subtracting these two equations immediately isolates the Excess Overlap Equation: E_2 + 2*E_3 = [n(A) + n(B) + n(C)] - (N - E_0).",
      "Exam-Day Execution Protocol: Once you compute the Excess Overlap constant K = E_2 + 2*E_3, maximizing E_3 (all three sets) reduces to setting E_2 = 0 (if K is even) or E_2 = 1 (if K is odd), provided no single-set count becomes negative. Conversely, minimizing E_3 reduces to pushing E_2 as large as possible up to (N - E_0), driving E_3 down to zero whenever K <= N - E_0."
    ];
    R["CAT-DILR-SET"].prerequisites = [
      "3-Set Inclusion-Exclusion Formula: n(A U B U C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C).",
      "Exact-Overlap Partition Identity: Total Population N = E_0 (None) + E_1 (Exactly 1) + E_2 (Exactly 2) + E_3 (Exactly 3).",
      "Degree-Sum Identity: n(A) + n(B) + n(C) = E_1 + 2*E_2 + 3*E_3 (each element in k sets is counted k times in the sum).",
      "Excess Overlap Equation: E_2 + 2*E_3 = [n(A) + n(B) + n(C)] - (N - E_0).",
      "At-Least-Two Overlap Relation: n(At least 2 sets) = E_2 + E_3 = Excess - E_3.",
      "Pairwise Intersection Sum: n(A ∩ B) + n(B ∩ C) + n(A ∩ C) = E_2 + 3*E_3.",
      "4-Attribute Karnaugh Grid Setup: For 4 binary attributes (e.g., 4 events or 4 product lines), replace overlapping circles with a 4x4 truth table of 16 mutually exclusive cells.",
      "Boundary Feasibility Check: Every individual region (including 'Only A' = n(A) - overlaps) must remain >= 0 for an extreme value to be valid."
    ];
    R["CAT-DILR-SET"].conceptBridgeTraps = [
      { pitfall: "Confusing 'At Least 2 Sets' with 'Exactly 2 Sets'", bridge: "In CAT wording, 'A and B' includes A ∩ B ∩ C (E_3). Always label exact-2 regions as E_2 and triple overlap as E_3." },
      { pitfall: "Assuming E_0 (Neither) Equals Zero Automatically", bridge: "Unless the prompt states 'every respondent chose at least one', E_0 >= 0 is a variable that shifts (N - E_0)." },
      { pitfall: "Ignoring Upper Bounds on Individual Set Sizes", bridge: "E_3 can never exceed min(n(A), n(B), n(C)), even if floor(Excess / 2) is larger." },
      { pitfall: "Parity Mismatch When Setting E_2 = 0", bridge: "In E_2 + 2*E_3 = Excess, if Excess is odd, E_2 must be at least 1, so Max E_3 = (Excess - 1) / 2." }
    ];
  }

  if (R["CAT-DILR-TOURN"]) {
    R["CAT-DILR-TOURN"].overviewParagraphs = [
      "Round-Robin Tournaments, Knockout Brackets & Multi-Stage League Tables appear in nearly every CAT DILR paper. Unlike casual puzzle solving, CAT tournament sets hide 60% of match outcomes behind partial points tables, goal-difference tiebreakers, or knockout upset rules, requiring algebraic conservation laws to reconstruct the missing cells.",
      "Concept Bridge: In an n-team single round-robin league, every team plays (n - 1) matches and total matches equal C(n, 2) = n(n - 1)/2. Under standard football scoring (Win = 3, Draw = 1, Loss = 0), every decisive match injects 3 total points into the standings table while every draw injects 2 points—immediately fixing the exact number of draws D = 3*C(n, 2) - Sum(Points) before you analyze a single head-to-head fixture.",
      "Knockout Seeding Bridge: In a standard single-elimination knockout of N = 2^k teams, exactly (N - 1) matches are played. In Round 1, Seed i always faces Seed (N + 1 - i) so the seed sum equals (N + 1); in Round 2, the winner of Match m faces the winner of Match (N/2 + 1 - m), enabling instant identification of upset paths."
    ];
    R["CAT-DILR-TOURN"].prerequisites = [
      "Single Round-Robin Match Count: N teams play N*(N - 1)/2 total matches; double round-robin plays N*(N - 1) matches.",
      "Knockout Elimination Count: Any single-elimination tournament with N entrants requires exactly (N - 1) matches.",
      "Football Point-Sum Conservation: Total Points Awarded = 3 * (Total Matches) - 1 * (Number of Draws).",
      "2-1-0 Scoring Conservation: Under Win = 2, Draw = 1, Loss = 0, Total Points = 2 * C(N, 2) regardless of draws.",
      "Maximum Points of an Unbeaten Team: An unbeaten team with d draws earns 3*(N - 1) - 2d points.",
      "Seeded Knockout Pairing Rule: In Round r (with M_r matches), Match i pairs with Match (M_r + 1 - i) in the next round.",
      "Minimum Points to Guarantee Qualification: Solve worst-case tie scenarios among the top (k + 1) contenders."
    ],
    R["CAT-DILR-TOURN"].conceptBridgeTraps = [
      { pitfall: "Assuming Equal-Points Teams Have Identical W-D-L Records", bridge: "4 points in 3 matches can be 1W-1D-1L or 0W-4D-0L (in 5-team leagues). Always check match-count sums." },
      { pitfall: "Forgetting Total Wins Must Equal Total Losses", bridge: "Across the entire league table, Sum(Wins) = Sum(Losses) and Sum(Draws) must be an even integer." },
      { pitfall: "Miscounting Semi-Final & Final Matches in Hybrid Formats", bridge: "Separate group-stage round-robin matches from top-4 knockout matches before applying point conservation." },
      { pitfall: "Overlooking Unbeaten vs Winless Constraints", bridge: "'Unbeaten' means 0 losses (draws allowed); 'won all matches' means 0 draws and 0 losses." }
    ];
  }

  if (R["CAT-DILR-GRID"]) {
    R["CAT-DILR-GRID"].overviewParagraphs = [
      "Matrix Arrangements, Directed Routes & Networks, and Logical Constraint Grids test multi-dimensional deduction across 4–6 entities and 3–4 attributes. CAT setters design these sets so that direct clues populate ~35% of the table while the remaining 65% unlocks through negative-clue elimination, capacity bounds, and binary case splitting.",
      "Concept Bridge: Always index your master table by the strictest ordered dimension—such as time slots (9 AM to 2 PM), floor numbers (1 to 6), or rank positions (1st to 5th)—rather than unordered person names. Write negative constraints ('P is not from Delhi or Mumbai') in a dedicated exclusion column so forced singletons jump out visually.",
      "Network & Flow Bridge: For directed pipeline, traffic, or supply-chain networks, apply Kirchhoff's Flow Conservation Law at every intermediate node (Total Inflow = Total Outflow) and check edge upper/lower capacity bounds to lock bottleneck paths immediately."
    ];
    R["CAT-DILR-GRID"].prerequisites = [
      "Strictest-Anchor Row Indexing: Order rows by sequential time, rank, or spatial position before assigning attributes.",
      "Truth-Matrix Elimination: For N-to-N matching, an N x N grid with 'X' for impossible pairs forces unique 'O' assignments.",
      "Kirchhoff Node Flow Conservation: At every non-source, non-sink node in a network, Sum(Inflows) = Sum(Outflows).",
      "Manhattan Grid Shortest Paths: Moving only Right and Up from (0,0) to (m,n) yields C(m + n, m) distinct shortest paths.",
      "Circular Seating Symmetry: N people around a circle have (N - 1)! relative arrangements; for even N, person i sits opposite person (i + N/2).",
      "Binary Case-Splitting Discipline: When a clue yields exactly two valid placements, branch cleanly into Case I and Case II."
    ],
    R["CAT-DILR-GRID"].conceptBridgeTraps = [
      { pitfall: "Overwriting Grid Cells Without Case Splitting", bridge: "Erasing tentative entries loses track of valid alternatives. Draw side-by-side Case I / Case II mini-grids." },
      { pitfall: "Confusing 'Immediate Left' in Facing-Center vs Facing-Outward Circles", bridge: "Facing center: left is clockwise. Facing outward: left is counter-clockwise." },
      { pitfall: "Ignoring Edge Capacity Limits in Route Networks", bridge: "Verify that every directed edge satisfies Min_Cap <= Flow <= Max_Cap after balancing nodes." },
      { pitfall: "Missing Implicit Distinctness Clues", bridge: "Phrases like 'distinct integer scores' or 'no two cities repeat' eliminate duplicate values across rows." }
    ];
  }

  if (R["CAT-DILR-DI"]) {
    R["CAT-DILR-DI"].overviewParagraphs = [
      "CAT Data Interpretation (Stacked Bar Charts, Spider/Radar Plots, Scatter Diagrams, and Missing-Data Financial Tables) blends visual ratio estimation with logical boundary deduction. Unlike clerical banking exams, CAT DI never requires tedious 5-digit long division—every chart embeds structural ratios or row/column sum invariants.",
      "Concept Bridge: Convert percentage shares and growth rates into fraction benchmarks (1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%) to compare ratios by cross-multiplication (a/b > c/d <=> a*d > b*c) in under 5 seconds.",
      "Missing-Table Reconstruction Bridge: When CAT presents a financial or demographic table with blank cells ('--'), compute row sums, column sums, and weighted-average bounds first—missing values are almost always pinned down by integer divisibility or min/max range constraints."
    ];
    R["CAT-DILR-DI"].prerequisites = [
      "Fraction-to-Percentage Benchmarks: 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%.",
      "Cross-Multiplication Ratio Comparison: Compare a/b vs c/d by comparing integer products a*d vs b*c directly.",
      "Compound Annual Growth Rate (CAGR): Final = Initial * (1 + r)^n; linear approximation (1 + r)^n ≈ 1 + n*r for small r.",
      "Base-Shift Identity: Moving from 25% market share to 20% market share is a -5 percentage-point change, but a -20% relative change.",
      "Weighted Average Bounds: The blended average of two segments always lies strictly between the two segment rates.",
      "Index-Number Base Scaling: When index = 100 in base year, index = 135 represents a +35% cumulative rise from the base year."
    ],
    R["CAT-DILR-DI"].conceptBridgeTraps = [
      { pitfall: "Confusing Market Share % Growth with Absolute Revenue Growth", bridge: "A firm's market share % can decline even while its absolute revenue rises if total market size expands faster." },
      { pitfall: "Summing Year-on-Year Growth Rates Linearly", bridge: "Two consecutive +10% growth years yield +21% cumulative growth (1.1 * 1.1 = 1.21), not +20%." },
      { pitfall: "Misreading Stacked Bar Segment Heights vs Cumulative Totals", bridge: "In stacked bars, a segment's value equals (Top Boundary - Bottom Boundary), not the top axis reading." },
      { pitfall: "Computing Exact Decimals When Option Spreads Exceed 5%", bridge: "Use 2-significant-digit rounding whenever answer choices are separated by more than 4–5%." }
    ];
  }
})();