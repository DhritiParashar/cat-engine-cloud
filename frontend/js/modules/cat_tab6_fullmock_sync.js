// ==============================================================================
// CAT 2026 FULL-LENGTH-MOCK-ONLY SCORE & IIM CALL PREDICTOR (TAB 6)
// - Calibrated strictly from completed Full-Length 68-Q Mocks (score > 0)
// - Excludes practice drills, sectional mocks, and 0-score unattempted runs
// ==============================================================================
(function () {
  window.renderCatFullMockForecaster6 = function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;

    const rawHist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const fullMocks = rawHist.filter(h =>
      (Number(h.maxScore || 0) >= 66 || String(h.blueprint || "").toLowerCase().includes("full")) &&
      Number(h.score || 0) > 0
    );

    const hasMocks = fullMocks.length > 0;
    const latest = hasMocks ? fullMocks[0] : null;
    const getCatScore = (m) => Number(m.scaledScore || m.score || 0);
    const getCatPct = (m) => {
      const s = getCatScore(m);
      if (s >= 105) return 99.6;
      if (s >= 92) return 99.0;
      if (s >= 80) return 97.5;
      if (s >= 68) return 95.0;
      if (s >= 55) return 90.0;
      return Math.max(40.0, Math.round((s / 198) * 100 * 10) / 10);
    };

    const latestScore = hasMocks ? getCatScore(latest) : null;
    const avgScore = hasMocks ? Math.round(fullMocks.reduce((a, m) => a + getCatScore(m), 0) / fullMocks.length) : null;
    const bestScore = hasMocks ? Math.max(...fullMocks.map(getCatScore)) : null;
    const projectedScore = hasMocks ? Math.round(0.60 * latestScore + 0.25 * avgScore + 0.15 * bestScore) : null;
    const projectedPct = hasMocks ? getCatPct({ score: projectedScore }) : null;

    const tiers = [
      { band: "99.5+ %ile • IIM A / B / C Calls", req: "Target Raw Score: 102+ / 198 (VARC 38+ • DILR 32+ • QA 32+)", target: 102 },
      { band: "98.5+ %ile • IIM L / K / I / FMS", req: "Target Raw Score: 88+ / 198 (VARC 34+ • DILR 27+ • QA 27+)", target: 88 },
      { band: "95.0+ %ile • New & Baby IIMs / MDI", req: "Target Raw Score: 70+ / 198 (Balanced Sectional Cutoffs ≥85%ile)", target: 70 },
      { band: "90.0+ %ile • CAP & Tier-1 PGDM", req: "Target Raw Score: 56+ / 198 (Zero Negative-Marking Blowups)", target: 56 }
    ];

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <div class="flex items-center justify-between gap-2">
            <div>
              <div class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">FULL-MOCK-ONLY CALL PREDICTOR</div>
              <h2 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">CAT Percentile Forecast (0–198)</h2>
            </div>
            <button type="button" onclick="window.renderCatFullMockForecaster6();"
              class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">&#8635; Refresh Full Mocks</button>
          </div>

          <div class="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-[11px] text-indigo-900 dark:text-indigo-200 font-semibold">
            Calibrated <strong>exclusively</strong> from completed Full-Length 68-Question CAT Mocks (+3 / -1). Practice drills and sectional sprints do not alter this forecast.
          </div>

          ${hasMocks ? `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-baseline justify-between">
                <span class="text-xs font-extrabold uppercase text-slate-500">Projected CAT Score &amp; %ile</span>
                <span class="text-3xl font-extrabold text-indigo-600">${projectedScore} / 198 <span class="text-base text-emerald-600">(${projectedPct}%ile)</span></span>
              </div>
              <div class="text-xs font-bold text-slate-700 dark:text-slate-300">
                Latest Full Mock (<strong>${latest.serialId || "CAT-MOCK"}</strong>): <span class="text-emerald-600 font-extrabold">${latestScore} / 198</span> (${latest.accuracy || 0}% accuracy)
              </div>
              <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border"><div class="text-[10px] font-bold text-slate-400">FULL MOCKS</div><div class="font-extrabold mt-0.5">${fullMocks.length} Valid</div></div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border"><div class="text-[10px] font-bold text-slate-400">FULL-MOCK AVG</div><div class="font-extrabold text-indigo-600 mt-0.5">${avgScore} / 198</div></div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border"><div class="text-[10px] font-bold text-slate-400">PEAK FULL MOCK</div><div class="font-extrabold text-emerald-600 mt-0.5">${bestScore} / 198</div></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="text-xs font-extrabold uppercase text-slate-500">Verified Full-Length CAT Mock Trajectory</div>
              ${fullMocks.slice(0, 5).map(m => `
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                  <div><span class="font-mono font-extrabold text-indigo-600">${m.serialId || "CAT-2026"}</span> <span class="text-slate-500 ml-1.5">${m.date || ""}</span></div>
                  <div class="font-extrabold">${getCatScore(m)} / 198 <span class="text-[11px] font-semibold text-emerald-600">(${getCatPct(m)}%ile)</span></div>
                </div>
              `).join("")}
            </div>
          ` : `
            <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-3 text-xs">
              <div class="font-extrabold text-amber-900 dark:text-amber-200 text-sm">No Scored Full-Length 68-Q CAT Mocks Completed Yet</div>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Practice drills and unattempted (0-score) launches are excluded. Complete at least one Full-Length 68-Question CAT Mock to unlock your calibrated IIM Call &amp; Percentile Forecast.</p>
            </div>
          `}

          ${rawHist.some(h => Number(h.score || 0) <= 0) ? `
            <button type="button" onclick="const clean=JSON.parse(localStorage.getItem('ipm_mock_history_v1')||'[]').filter(h=>Number(h.score||0)>0); localStorage.setItem('ipm_mock_history_v1',JSON.stringify(clean)); window.renderCatFullMockForecaster6();"
              class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-[11px] font-extrabold cursor-pointer">Remove Unattempted (0-Score) Test Entries</button>
          ` : ""}
        </div>

        <div class="lg:col-span-7 space-y-3">
          ${tiers.map(t => {
            const gap = hasMocks ? (t.target - projectedScore) : null;
            return `
              <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-1.5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-white">${t.band}</h3>
                  <span class="px-3 py-1 rounded-full text-xs font-extrabold ${!hasMocks ? "bg-slate-100 text-slate-600" : (gap <= 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800")}">
                    ${!hasMocks ? "Awaiting Full 68-Q Mock" : (gap <= 0 ? "Call Cutoff Cleared ✓" : `Need +${gap} Raw Marks`)}
                  </span>
                </div>
                <div class="text-xs font-bold text-indigo-600">${t.req}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  };

  window.renderTab6 = window.renderCatFullMockForecaster6;
  window.renderCallPredictor6 = window.renderCatFullMockForecaster6;
})();