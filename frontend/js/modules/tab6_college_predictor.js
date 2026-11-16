window.CAT_PREP_STATE = window.CAT_PREP_STATE || {
  varcRaw: 36, dilrRaw: 27, qaRaw: 30,
  targetPct: 99.50, attemptsCount: 0,
  syncNote: "Synced with Tab 4 Mock Ledger (Adjust sliders or click Sync Mock)"
};

window.rawToCatPercentile = function (raw, maxMarks) {
  const ratio = Math.max(0, Math.min(1, raw / maxMarks));
  if (ratio >= 0.72) return Number((99.5 + (ratio - 0.72) * 1.75).toFixed(2));
  if (ratio >= 0.55) return Number((98.0 + ((ratio - 0.55) / 0.17) * 1.5).toFixed(2));
  if (ratio >= 0.42) return Number((94.0 + ((ratio - 0.42) / 0.13) * 4.0).toFixed(2));
  if (ratio >= 0.30) return Number((85.0 + ((ratio - 0.30) / 0.12) * 9.0).toFixed(2));
  return Number(Math.max(40, (ratio / 0.30) * 85).toFixed(2));
};

window.syncCatPrepFromMock = function () {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  if (!hist.length) {
    alert("Complete and submit a Timed Mock in Tab 4 first to load your live CAT diagnostic telemetry.");
    return;
  }
  const latest = hist[0];
  const scaled198 = Math.round((Math.max(0, Number(latest.score || 0)) / Math.max(1, Number(latest.maxScore || 198))) * 198);
  window.CAT_PREP_STATE.varcRaw = Math.min(72, Math.round(scaled198 * 0.38));
  window.CAT_PREP_STATE.dilrRaw = Math.min(60, Math.round(scaled198 * 0.29));
  window.CAT_PREP_STATE.qaRaw   = Math.min(66, Math.max(0, scaled198 - window.CAT_PREP_STATE.varcRaw - window.CAT_PREP_STATE.dilrRaw));
  window.CAT_PREP_STATE.attemptsCount = hist.length;
  window.CAT_PREP_STATE.syncNote = `Synced from Mock #${hist.length} (${latest.score}/${latest.maxScore}) → Scaled ${scaled198}/198`;
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.updateCatPrepField = function (field, val) {
  window.CAT_PREP_STATE[field] = Number(val);
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.renderTab6 = function (el) {
  if (!el) return;
  window._LAST_TAB6_EL = el;
  const s = window.CAT_PREP_STATE;
  const totalRaw = Number(s.varcRaw) + Number(s.dilrRaw) + Number(s.qaRaw);
  const varcPct = window.rawToCatPercentile(s.varcRaw, 72);
  const dilrPct = window.rawToCatPercentile(s.dilrRaw, 60);
  const qaPct   = window.rawToCatPercentile(s.qaRaw, 66);
  const overallPct = window.rawToCatPercentile(totalRaw, 198);

  const benchmarks = [
    { band: "99.8+ Percentile Elite Zone", reqRaw: 112, varcReq: 44, dilrReq: 33, qaReq: 35, pace: "16+ VARC attempts • 2.5 DILR sets • 13+ QA net", action: "Eliminate negative marks on inference RC traps; prioritize TITA QA items." },
    { band: "99.5 Percentile Benchmark", reqRaw: 103, varcReq: 40, dilrReq: 30, qaReq: 33, pace: "15 VARC • 2 full DILR sets • 12 QA net", action: "Lock 100% accuracy on 2 selected DILR sets in first 28 mins before touching Set 3." },
    { band: "99.0 Percentile Benchmark", reqRaw: 95,  varcReq: 37, dilrReq: 27, qaReq: 31, pace: "14 VARC • 9 DILR Qs • 11 QA net", action: "Cut unverified MCQ guesses; convert 2–3 Arithmetic/Algebra TITA questions cleanly." },
    { band: "97.0 Percentile Benchmark", reqRaw: 82,  varcReq: 32, dilrReq: 23, qaReq: 27, pace: "12 VARC • 8 DILR Qs • 10 QA net", action: "Master Tab 1 Arithmetic & Algebra core ratios + Tab 5 Trap Clinic." }
  ];

  const weakest = [
    { name: "VARC", gap: 40 - s.varcRaw, fix: "Focus on 3 high-yield RC passages + 4 TITA Para-Summaries in Tab 3." },
    { name: "DILR", gap: 30 - s.dilrRaw, fix: "Practice 5-minute set-selection triage in Tab 2 DILR Caselet Lab." },
    { name: "QA",   gap: 33 - s.qaRaw,   fix: "Drill Tab 1 Arithmetic & Algebra speed shortcuts + eliminate -1 MCQ traps." }
  ].sort((a, b) => b.gap - a.gap)[0];

  const cardsHtml = benchmarks.map(b => {
    const delta = totalRaw - b.reqRaw;
    const status = delta >= 0
      ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">Achieved (+${delta} Marks Cushion)</span>`
      : `<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold">Need +${Math.abs(delta)} Net Marks (~${Math.ceil(Math.abs(delta)/3)} Qs)</span>`;
    return `
      <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 space-y-1.5 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="font-extrabold text-sm text-slate-900 dark:text-white">${b.band} (~${b.reqRaw}/198 Raw)</div>
          <div>${status}</div>
        </div>
        <div class="text-[11px] font-mono text-indigo-600 dark:text-indigo-300 font-semibold">Target Split: VARC ${b.varcReq}/72 &bull; DILR ${b.dilrReq}/60 &bull; QA ${b.qaReq}/66</div>
        <div class="text-xs text-slate-600 dark:text-slate-300"><strong>Execution Pace:</strong> ${b.pace}</div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400"><strong>Next Drill Focus:</strong> ${b.action}</div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">CAT Exam Readiness Engine</span>
            <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">Score, Percentile &amp; Pacing Forecaster</h2>
          </div>
          <button type="button" onclick="window.syncCatPrepFromMock()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer">&#8635; Sync Mock</button>
        </div>
        <div class="text-[11px] text-emerald-600 font-semibold">${s.syncNote}</div>

        <div class="space-y-3">
          <div><div class="flex justify-between text-xs"><span>VARC Raw (/72 • 40 Mins)</span><strong>${s.varcRaw} &rarr; ${varcPct}%ile</strong></div><input type="range" min="0" max="72" value="${s.varcRaw}" oninput="window.updateCatPrepField('varcRaw', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>DILR Raw (/60 • 40 Mins)</span><strong>${s.dilrRaw} &rarr; ${dilrPct}%ile</strong></div><input type="range" min="0" max="60" value="${s.dilrRaw}" oninput="window.updateCatPrepField('dilrRaw', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>QA Raw (/66 • 40 Mins)</span><strong>${s.qaRaw} &rarr; ${qaPct}%ile</strong></div><input type="range" min="0" max="66" value="${s.qaRaw}" oninput="window.updateCatPrepField('qaRaw', this.value)" class="w-full accent-indigo-600"></div>
        </div>

        <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
          <div class="flex justify-between text-xs"><span class="font-bold">Projected CAT Scaled Score:</span><strong class="text-indigo-700 dark:text-indigo-300 text-sm">${totalRaw} / 198 (${overallPct}%ile)</strong></div>
          <div class="text-[11px] text-slate-600 dark:text-slate-300"><strong>Primary Bottleneck (${weakest.name}):</strong> ${weakest.fix}</div>
        </div>
      </div>
      <div class="lg:col-span-7 space-y-2.5">${cardsHtml}</div>
    </div>
  `;
};
window.renderCollegePredictor = window.renderTab6;