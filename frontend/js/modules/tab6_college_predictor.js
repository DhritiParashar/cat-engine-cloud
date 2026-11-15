window.CAT_CALL_STATE = window.CAT_CALL_STATE || {
  varcRaw: 38, dilrRaw: 30, qaRaw: 32,
  catPct: 99.15, varcPct: 98.4, dilrPct: 98.1, qaPct: 98.6,
  classX: 92, classXII: 90, gradCgpa: 8.7, gradPct: 82, workExMonths: 24,
  category: "GEN", isNonEngineer: false, isFemale: true,
  mockSyncLabel: "Synced with Registered Profile"
};

window.rawToCatPercentile = function (raw, maxMarks) {
  const ratio = Math.max(0, Math.min(1, raw / maxMarks));
  if (ratio >= 0.72) return Number((99.5 + (ratio - 0.72) * 1.75).toFixed(2));
  if (ratio >= 0.55) return Number((98.0 + ((ratio - 0.55) / 0.17) * 1.5).toFixed(2));
  if (ratio >= 0.42) return Number((94.0 + ((ratio - 0.42) / 0.13) * 4.0).toFixed(2));
  if (ratio >= 0.30) return Number((85.0 + ((ratio - 0.30) / 0.12) * 9.0).toFixed(2));
  return Number(Math.max(40, (ratio / 0.30) * 85).toFixed(2));
};

window.recalcCatPercentilesFromRaw = function () {
  const s = window.CAT_CALL_STATE;
  const totalRaw = Number(s.varcRaw) + Number(s.dilrRaw) + Number(s.qaRaw);
  s.varcPct = window.rawToCatPercentile(s.varcRaw, 72);
  s.dilrPct = window.rawToCatPercentile(s.dilrRaw, 60);
  s.qaPct   = window.rawToCatPercentile(s.qaRaw, 66);
  s.catPct  = window.rawToCatPercentile(totalRaw, 198);
};

window.syncPredictorFromLatestMock = function () {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  if (!hist.length) {
    alert("Complete and submit a mock in Tab 4 first to import your live CAT score.");
    return;
  }
  const latest = hist[0];
  const scaled198 = Math.round((Math.max(0, Number(latest.score || 0)) / Math.max(1, Number(latest.maxScore || 198))) * 198);
  window.CAT_CALL_STATE.varcRaw = Math.min(72, Math.round(scaled198 * 0.38));
  window.CAT_CALL_STATE.dilrRaw = Math.min(60, Math.round(scaled198 * 0.30));
  window.CAT_CALL_STATE.qaRaw   = Math.min(66, Math.max(0, scaled198 - window.CAT_CALL_STATE.varcRaw - window.CAT_CALL_STATE.dilrRaw));
  window.recalcCatPercentilesFromRaw();
  window.CAT_CALL_STATE.mockSyncLabel = `Imported Tab 4 Mock (${latest.score}/${latest.maxScore}) → Scaled ${scaled198}/198`;
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.updateCatCallField = function (field, val) {
  const s = window.CAT_CALL_STATE;
  if (field === "isNonEngineer" || field === "isFemale") s[field] = Boolean(val);
  else if (field === "category") s[field] = String(val);
  else {
    s[field] = Number(val);
    if (["varcRaw", "dilrRaw", "qaRaw"].includes(field)) window.recalcCatPercentilesFromRaw();
    if (field === "gradCgpa") { s.gradCgpa = Math.min(10, Math.max(4, s.gradCgpa)); s.gradPct = Number(Math.min(100, (s.gradCgpa - 0.5) * 10).toFixed(1)); }
    if (field === "gradPct")  { s.gradCgpa = Number(Math.min(10, (s.gradPct / 10) + 0.5).toFixed(2)); }
  }
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.renderTab6 = function (el) {
  if (!el) return;
  window._LAST_TAB6_EL = el;
  try {
    const p = JSON.parse(localStorage.getItem("goalisb_postgrad_profile_v1") || "{}");
    if (p.classXII) window.CAT_CALL_STATE.classXII = Number(p.classXII);
    if (p.ugCgpa10) { window.CAT_CALL_STATE.gradCgpa = Number(p.ugCgpa10); window.CAT_CALL_STATE.gradPct = Number(p.ugPct || (p.ugCgpa10 - 0.5)*10); }
    if (p.workExMonths !== undefined) window.CAT_CALL_STATE.workExMonths = Number(p.workExMonths);
  } catch (e) {}

  const s = window.CAT_CALL_STATE;
  const totalRaw = Number(s.varcRaw) + Number(s.dilrRaw) + Number(s.qaRaw);
  const catRelax = { GEN: 0, EWS: -2.0, NCOBC: -3.5, SC: -10.0, ST: -15.0 }[s.category] || 0;
  const secRelax = { GEN: 0, EWS: -4.0, NCOBC: -6.0, SC: -14.0, ST: -18.0 }[s.category] || 0;
  const wxNorm = s.workExMonths <= 6 ? 2 : (s.workExMonths <= 12 ? 5 : (s.workExMonths <= 36 ? 10 : 7));
  const divBonus = (s.isNonEngineer ? 4.0 : 0) + (s.isFemale ? 4.5 : 0);

  const programs = [
    { name: "IIM Ahmedabad — PGP (MBA)", roi: "Fee ₹25L • Avg CTC ₹34.5L", formula: "65% CAT + 35% AR (UG CGPA, XII, X, WorkEx, Diversity)", secMin: 85 + secRelax, overallMin: 99.35 + catRelax, cs: (s.catPct * 0.65) + ((s.classX * 0.10 + s.classXII * 0.10 + s.gradPct * 0.10 + wxNorm * 0.5) + divBonus * 0.6), cut: 87.2 + catRelax * 0.45 },
    { name: "IIM Bangalore — PGP (MBA)", roi: "Fee ₹24.5L • Avg CTC ₹35.3L", formula: "55% CAT + 10% UG + 10% XII + 10% X + 10% WorkEx + 5% Gender", secMin: 85 + secRelax, overallMin: 99.10 + catRelax, cs: (s.catPct * 0.55) + (s.classX * 0.10) + (s.classXII * 0.10) + (s.gradPct * 0.10) + wxNorm + (s.isFemale ? 5 : 0), cut: 87.8 + catRelax * 0.45 },
    { name: "IIM Calcutta — MBA", roi: "Fee ₹27L • Avg CTC ₹35.0L", formula: "56% CAT + 15% XII + 10% X + 8% WorkEx + 7% AcadDiv + 4% Gender", secMin: 85 + secRelax, overallMin: 99.25 + catRelax, cs: (s.catPct * 0.56) + (s.classX * 0.10) + (s.classXII * 0.15) + (wxNorm * 0.8) + (s.isFemale ? 4 : 0) + (s.isNonEngineer ? 7 : 0), cut: 86.5 + catRelax * 0.45 },
    { name: "FMS Delhi — MBA (17x ROI Flagship)", roi: "Fee ₹2.0L • Avg CTC ₹34.1L", formula: "100% CAT Weighted (40% VARC + 30% DILR + 30% QA) + 5 Women Bonus", secMin: 80 + secRelax, overallMin: 98.90 + catRelax, cs: ((s.varcRaw / 72) * 40 + (s.dilrRaw / 60) * 30 + (s.qaRaw / 66) * 30) * 1.65 + (s.isFemale ? 5.0 : 0), cut: 84.0 + catRelax * 0.45 },
    { name: "IIM Lucknow — PGP (MBA)", roi: "Fee ₹20.7L • Avg CTC ₹32.2L", formula: "60% CAT + 10% UG + 10% XII + 10% WorkEx + 10% Diversity", secMin: 85 + secRelax, overallMin: 98.40 + catRelax, cs: (s.catPct * 0.60) + (s.classXII * 0.10) + (s.gradPct * 0.10) + wxNorm + (s.isNonEngineer ? 5 : 0) + (s.isFemale ? 5 : 0), cut: 85.4 + catRelax * 0.45 },
    { name: "IIM Kozhikode — PGP (MBA)", roi: "Fee ₹20.5L • Avg CTC ₹31.0L", formula: "45% CAT + 20% XII + 15% X + 10% Diversity + 10% WorkEx", secMin: 80 + secRelax, overallMin: 97.80 + catRelax, cs: (s.catPct * 0.45) + (s.classX * 0.15) + (s.classXII * 0.20) + wxNorm + (s.isFemale || s.isNonEngineer ? 10 : 0), cut: 85.0 + catRelax * 0.45 },
    { name: "IIM Mumbai — MBA", roi: "Fee ₹21.0L • Avg CTC ₹31.5L", formula: "60% CAT + 20% Past Academics + 10% WorkEx + 10% Diversity", secMin: 88 + secRelax, overallMin: 98.20 + catRelax, cs: (s.catPct * 0.60) + ((s.classX + s.classXII) * 0.10) + wxNorm + (s.isFemale ? 5 : 0), cut: 85.8 + catRelax * 0.45 },
    { name: "XLRI Jamshedpur — PGDM (BM via XAT)", roi: "Fee ₹28.6L • Avg CTC ₹32.7L", formula: "XAT Overall + Decision Making Gate (0% School Marks Weight)", secMin: 80 + secRelax, overallMin: 96.50 + catRelax, cs: s.catPct * 0.88 + (s.isFemale ? 3 : 0), cut: 84.5 + catRelax * 0.45 }
  ];

  const cardsHtml = programs.map(p => {
    const failsSec = s.varcPct < p.secMin || s.dilrPct < p.secMin || s.qaPct < p.secMin;
    const gap = p.cs - p.cut;
    const badge = failsSec
      ? `<span class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">Sectional Gate Risk (&lt;${p.secMin.toFixed(0)}%ile)</span>`
      : (gap >= 1.5 && s.catPct >= p.overallMin
          ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">High PI Call (&ge;88%)</span>`
          : (gap >= -1.2 && s.catPct >= p.overallMin - 0.8
              ? `<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold">WAT-PI Bubble Zone</span>`
              : `<span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">Reach (+${Math.max(0.5, p.overallMin - s.catPct).toFixed(1)}%ile CAT)</span>`));
    return `
      <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="space-y-0.5">
          <div class="font-extrabold text-sm text-slate-900 dark:text-white">${p.name}</div>
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">${p.roi} &bull; Gate: ${p.secMin.toFixed(0)}%ile Sec / ${p.overallMin.toFixed(1)}%ile Overall</div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400">${p.formula}</div>
        </div>
        <div class="text-right space-y-1">
          <div>${badge}</div>
          <div class="text-[11px] font-mono text-indigo-600 dark:text-indigo-300 font-bold">CS: ${p.cs.toFixed(1)} / ${p.cut.toFixed(1)} Cutoff</div>
        </div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">Postgraduate MBA / PGP Engine</span>
            <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">IIM A/B/C/L/K/M, FMS &amp; XLRI Predictor</h2>
          </div>
          <button type="button" onclick="window.syncPredictorFromLatestMock()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer">&#8635; Sync Mock</button>
        </div>
        <div class="text-[11px] text-emerald-600 font-semibold">${s.mockSyncLabel}</div>

        <div class="grid grid-cols-3 gap-2 text-xs">
          <label><span class="text-slate-500 font-semibold">UG CGPA (/10)</span><input type="number" step="0.1" min="4" max="10" value="${s.gradCgpa}" onchange="window.updateCatCallField('gradCgpa', this.value)" class="mt-1 w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold"></label>
          <label><span class="text-slate-500 font-semibold">Class XII %</span><input type="number" min="50" max="100" value="${s.classXII}" onchange="window.updateCatCallField('classXII', this.value)" class="mt-1 w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold"></label>
          <label><span class="text-slate-500 font-semibold">Work-Ex (Mo)</span><input type="number" min="0" max="72" value="${s.workExMonths}" onchange="window.updateCatCallField('workExMonths', this.value)" class="mt-1 w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold"></label>
        </div>

        <div class="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div><div class="flex justify-between text-xs"><span>VARC Raw (/72)</span><strong>${s.varcRaw} (${s.varcPct}%ile)</strong></div><input type="range" min="0" max="72" value="${s.varcRaw}" oninput="window.updateCatCallField('varcRaw', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>DILR Raw (/60)</span><strong>${s.dilrRaw} (${s.dilrPct}%ile)</strong></div><input type="range" min="0" max="60" value="${s.dilrRaw}" oninput="window.updateCatCallField('dilrRaw', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>QA Raw (/66)</span><strong>${s.qaRaw} (${s.qaPct}%ile)</strong></div><input type="range" min="0" max="66" value="${s.qaRaw}" oninput="window.updateCatCallField('qaRaw', this.value)" class="w-full accent-indigo-600"></div>
          <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex justify-between text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-200">Projected CAT 2026:</span>
            <strong class="text-indigo-700 dark:text-indigo-300">${totalRaw}/198 (${s.catPct}%ile)</strong>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <select onchange="window.updateCatCallField('category', this.value)" class="px-2.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-semibold">
            <option value="GEN" ${s.category==="GEN"?"selected":""}>General (Open)</option>
            <option value="EWS" ${s.category==="EWS"?"selected":""}>EWS</option>
            <option value="NCOBC" ${s.category==="NCOBC"?"selected":""}>NC-OBC</option>
            <option value="SC" ${s.category==="SC"?"selected":""}>SC</option>
            <option value="ST" ${s.category==="ST"?"selected":""}>ST</option>
          </select>
          <label class="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" ${s.isNonEngineer?"checked":""} onchange="window.updateCatCallField('isNonEngineer', this.checked)"><span>Non-Engineer</span></label>
        </div>
        <label class="flex items-center gap-1.5 text-xs cursor-pointer"><input type="checkbox" ${s.isFemale?"checked":""} onchange="window.updateCatCallField('isFemale', this.checked)"><span>Female / Gender Diversity Bonus</span></label>
      </div>

      <div class="lg:col-span-7 space-y-2.5">${cardsHtml}</div>
    </div>
  `;
};
window.renderCollegePredictor = window.renderTab6;