window.CAT_DILR_MODULES = [
  {
    id: "cat_lr_arrangements",
    badge: "CAT DILR CASELET LAB • PILLAR 1",
    title: "Multi-Variable Arrangements, Tournaments & Scheduling Grids",
    subtitle: "2 Full Sets per Slot (10 Qs) • 5-Minute Set Triage & Case Branching",
    overview: "CAT DILR no longer splits into isolated DI and LR halves—every 5-question caselet blends logical constraints with quantitative totals. Solving 2 out of 4 sets with 90%+ accuracy in 40 minutes reliably clears the 98.5+ sectional percentile.",
    bridge: "Spend the first 4 minutes scanning all 4 sets. Pick sets with deterministic anchors (fixed positions, unique sums, or bounded integer ranges) and avoid open-ended multi-case networks on Pass 1.",
    drills: [
      { q: "In a 6-team round-robin tournament (each team plays every other team once, 2 points for a win, 1 for a tie, 0 for a loss), what is the total sum of points across all 6 teams if exactly 3 matches end in a tie?", opts: ["27", "30", "33", "36"], ans: 1, exp: "Total matches = 6C2 = 15. Every match awards 2 total points (either 2+0 or 1+1), so total points = 15 * 2 = 30 regardless of ties." },
      { q: "Four analysts (P, Q, R, S) sit in a row facing North. P is not at either end, Q is immediately to the right of P, and S is not adjacent to Q. Who must sit at the extreme right end?", opts: ["P", "Q", "R", "S"], ans: 2, exp: "P cannot be at ends (positions 1 or 4). Since Q is immediately right of P, (P, Q) is either (2, 3) or (3, 4). If (P, Q) = (2, 3), S cannot be at 4 (adjacent to Q), so S = 1 and R = 4. If (P, Q) = (3, 4), Q is at 4; wait—S cannot be adjacent to Q (so S != 2), leaving S = 1 and R = 2 -> R is at 4 in the unique non-adjacent case (1:S, 2:P, 3:Q, 4:R)." }
    ]
  },
  {
    id: "cat_di_games",
    badge: "CAT DILR CASELET LAB • PILLAR 2",
    title: "Quantitative Reasoning DI: Venn Maxima/Minima, Routes & Networks",
    subtitle: "2 Full Sets per Slot (10 Qs) • TITA + MCQ Hybrid Sets",
    overview: "Quantitative DI sets combine 3-set or 4-set Venn overlaps, weighted averages, and directed network flows with 2–3 TITA questions per set.",
    bridge: "For 3-set Venn maxima/minima with fixed individual totals A, B, C and universe U: maximize 'all three' by setting 'none' = 0 and balancing pairwise intersections; minimize 'all three' using max(0, A + B + C - 2U).",
    drills: [
      { q: "[TITA] In a batch of 100 MBA candidates, 75 cleared QA, 80 cleared DILR, and 85 cleared VARC. What is the minimum possible number of candidates who cleared all three sections?", opts: ["35", "40", "45", "50"], ans: 1, exp: "Minimum triple overlap = max(0, 75 + 80 + 85 - 2*100) = 240 - 200 = 40." }
    ]
  }
];

window.renderTab2 = function (el) {
  window._CAT_DILR_IDX = window._CAT_DILR_IDX || 0;
  const m = window.CAT_DILR_MODULES[window._CAT_DILR_IDX];
  const nav = window.CAT_DILR_MODULES.map((item, idx) => `
    <button type="button" onclick="window._CAT_DILR_IDX=${idx}; window.renderTab2(document.getElementById('main-workspace'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._CAT_DILR_IDX ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.subtitle}</div>
    </button>
  `).join("");

  const drillsHtml = m.drills.map((d, i) => `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
      <div class="text-xs font-bold text-slate-900 dark:text-white">Q${i+1}. ${d.q}</div>
      <div class="flex flex-wrap gap-2">
        ${d.opts.map((o) => `<button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:border-indigo-500 cursor-pointer">${o}</button>`).join("")}
      </div>
      <div class="hidden text-xs text-emerald-700 dark:text-emerald-300 pt-1"><strong>Correct Answer: ${d.opts[d.ans]}</strong> — ${d.exp}</div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">CAT DILR CASELET LAB (2 CORE PILLARS)</div>
        ${nav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.badge}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.title}</h2>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <div class="font-extrabold uppercase text-[11px] text-indigo-600">CAT DILR Architecture &amp; 99+ Percentile Triage</div>
          <p>${m.overview}</p>
          <p><strong>Execution Heuristic:</strong> ${m.bridge}</p>
        </div>
        <div class="space-y-3">${drillsHtml}</div>
      </div>
    </div>
  `;
};