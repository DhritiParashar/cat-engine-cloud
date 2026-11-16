window.CAT_TRAPS_18 = [
  { cat: "CAT Quantitative Aptitude", title: "Trap 1: Squaring |f(x)| = g(x) Without Checking g(x) >= 0", bait: "Squaring |2x - 7| = x - 5 to get x = 2 or x = 4, missing that x - 5 < 0 for both.", fix: "Enforce RHS >= 0 BEFORE squaring or opening modulus bars." },
  { cat: "CAT Quantitative Aptitude", title: "Trap 2: Dividing by a Variable Expression in Equations", bait: "Canceling (x - 3) from both sides and losing the root x = 3.", fix: "Factorize (x - 3)(...) = 0 instead of dividing by variable terms." },
  { cat: "CAT Quantitative Aptitude", title: "Trap 3: Logarithm Domain Blindspot", bait: "Accepting roots where the log argument becomes <= 0 or base becomes 1.", fix: "Check argument > 0 and base > 0, base != 1 on every log solution." },
  { cat: "CAT Quantitative Aptitude", title: "Trap 4: Weighted AM-GM Applied to Negative Variables", bait: "Applying AM >= GM when variables can take negative values.", fix: "Verify all terms are strictly positive before applying AM >= GM." },
  { cat: "CAT Quantitative Aptitude", title: "Trap 5: Remainder Negative-Modulus Misread", bait: "Leaving remainder as -2 instead of converting to +5 (mod 7).", fix: "Add the divisor to any negative remainder so 0 <= r < d." },
  { cat: "CAT Quantitative Aptitude", title: "Trap 6: Geometry Scale Assumption", bait: "Assuming triangles are right-angled or isosceles from visual appearance.", fix: "Rely strictly on Pythagoras, Stewart's Theorem, or coordinate bounds." },
  { cat: "CAT DILR Caselets", title: "Trap 7: Committing to a 12-Minute Dead-End Set", bait: "Spending 14 minutes on an unsolvable arrangement set in a 40-min section.", fix: "Use the 5-minute triage rule: scan all 4 sets first and lock the 2 cleanest sets." },
  { cat: "CAT DILR Caselets", title: "Trap 8: 'At Least' vs. 'Exactly' Constraint Misread", bait: "Treating 'at least 2' in a Venn/Grid puzzle as 'exactly 2'.", fix: "Underline every quantifier ('at least', 'at most', 'distinct') before building the grid." },
  { cat: "CAT DILR Caselets", title: "Trap 9: Overlooking TITA Questions Inside Hard Sets", bait: "Skipping easy TITA sub-questions (zero penalty) in Set 3.", fix: "Even if a set is partially solved, attempt its TITA items with bounded estimates." },
  { cat: "CAT DILR Caselets", title: "Trap 10: Circular vs. Linear Seating Orientation", bait: "Confusing 'facing center' vs. 'facing outward' left/right directions.", fix: "Draw directional arrows on every seat node before placing clues." },
  { cat: "CAT DILR Caselets", title: "Trap 11: Percentage-Point vs. Percentage Growth in DI", bait: "Computing relative % change when the chart asks for percentage-point gap.", fix: "Check axis units (% vs absolute) before calculating ratios." },
  { cat: "CAT DILR Caselets", title: "Trap 12: Missing Symmetric Case Splits", bait: "Stopping at Case 1 when Case 2 gives the unique answer to Question 4.", fix: "Branch cleanly into Case A / Case B the moment a binary split arises." },
  { cat: "CAT VARC (RC & TITA)", title: "Trap 13: True-In-Passage But Irrelevant to Question Stem", bait: "Selecting a factually accurate detail from Paragraph 2 that doesn't answer 'main purpose'.", fix: "Match the scope of the choice strictly to what the stem asks." },
  { cat: "CAT VARC (RC & TITA)", title: "Trap 14: Extreme Distortions ('All', 'Never', 'Solely')", bait: "Picking a choice that exaggerates the author's cautious claim into an absolute rule.", fix: "Eliminate choices with unsubstantiated absolutes unless the passage explicitly states them." },
  { cat: "CAT VARC (RC & TITA)", title: "Trap 15: Outside Real-World Knowledge Bias", bait: "Choosing an answer based on external economics/history knowledge contradicting the author.", fix: "Answer strictly from the author's premises inside the passage." },
  { cat: "CAT VARC (RC & TITA)", title: "Trap 16: Leaving TITA Para-Jumbles Blank", bait: "Skipping TITA verbal items out of uncertainty.", fix: "CAT TITA carries 0 negative penalty—always enter your best 4-digit sequence." },
  { cat: "CAT VARC (RC & TITA)", title: "Trap 17: Odd-One-Out Theme Drift", bait: "Grouping sentences by shared keywords rather than central argument flow.", fix: "Identify the 4-sentence cohesive paragraph first; the sentence outside that arc is the odd one." },
  { cat: "CAT VARC (RC & TITA)", title: "Trap 18: Over-Attempting Low-Confidence RC MCQs", bait: "Guessing between 2 close RC options and losing -1 net marks repeatedly.", fix: "Only mark an RC MCQ when you can concretely eliminate 3 options." }
];

window.renderTrapClinic5 = function (el) {
  const cards = window.CAT_TRAPS_18.map((t, i) => `
    <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 space-y-2 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">${t.cat}</span>
        <span class="text-[11px] font-mono text-slate-400">#${i + 1} / 18</span>
      </div>
      <h4 class="font-extrabold text-sm text-slate-900 dark:text-white">${t.title}</h4>
      <div class="text-xs text-rose-600 dark:text-rose-300"><strong>CAT MCQ Bait (-1 Penalty):</strong> ${t.bait}</div>
      <div class="text-xs text-emerald-700 dark:text-emerald-300"><strong>99.5+ %ile Defense:</strong> ${t.fix}</div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-4">
      <div class="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-lg">
        <span class="text-[10px] uppercase font-bold text-amber-300">CAT 198-Mark Negative-Marking Shield</span>
        <h2 class="text-xl font-extrabold mt-1">18 High-Frequency CAT QA, DILR &amp; VARC Examiner Traps</h2>
        <p class="text-xs text-slate-300 mt-1">Every MCQ trap costs a 4-mark swing (+3 vs -1), whereas TITA carries 0 penalty. Master all 18 examiner defenses.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
    </div>
  `;
};
window.renderTab5 = window.renderTrapClinic5;