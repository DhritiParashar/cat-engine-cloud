// ==============================================================================
// TAB 6: IIM / FMS / XLRI COMPOSITE SCORE & CAT 2026 CALL PREDICTOR ENGINE
// ==============================================================================
window.CAT_CALL_STATE = window.CAT_CALL_STATE || {
  varcRaw: 38,
  dilrRaw: 30,
  qaRaw: 32,
  catPct: 99.15,
  varcPct: 98.4,
  dilrPct: 98.1,
  qaPct: 98.6,
  classX: 92,
  classXII: 90,
  gradPct: 82,
  workExMonths: 18,
  category: "GEN",       // GEN | EWS | NCOBC | SC | ST
  isNonEngineer: false,
  isFemale: true
};

window.rawToCatPercentile = function (raw, maxMarks) {
  const ratio = Math.max(0, Math.min(1, raw / maxMarks));
  if (ratio >= 0.72) return Number((99.5 + (ratio - 0.72) * 1.75).toFixed(2));
  if (ratio >= 0.55) return Number((98.0 + ((ratio - 0.55) / 0.17) * 1.5).toFixed(2));
  if (ratio >= 0.42) return Number((94.0 + ((ratio - 0.42) / 0.13) * 4.0).toFixed(2));
  if (ratio >= 0.30) return Number((85.0 + ((ratio - 0.30) / 0.12) * 9.0).toFixed(2));
  return Number(Math.max(40, (ratio / 0.30) * 85).toFixed(2));
};

window.syncPredictorFromLatestMock = function () {
  const hist = (typeof window.getLocalMockHistory === "function") ? window.getLocalMockHistory() : [];
  if (!hist.length) {
    alert("No mock attempt logged in Tab 4 yet. Adjust sliders manually or complete a mock first.");
    return;
  }
  const latest = hist[0];
  const maxS = Number(latest.maxScore || 198);
  const netS = Math.max(0, Number(latest.score || 0));
  const scaled198 = Math.round((netS / Math.max(1, maxS)) * 198);
  window.CAT_CALL_STATE.varcRaw = Math.min(72, Math.round(scaled198 * 0.38));
  window.CAT_CALL_STATE.dilrRaw = Math.min(60, Math.round(scaled198 * 0.30));
  window.CAT_CALL_STATE.qaRaw   = Math.min(66, Math.max(0, scaled198 - window.CAT_CALL_STATE.varcRaw - window.CAT_CALL_STATE.dilrRaw));
  window.recalcCatPercentilesFromRaw();
  window.renderActiveTab();
};

window.recalcCatPercentilesFromRaw = function () {
  const s = window.CAT_CALL_STATE;
  const totalRaw = Number(s.varcRaw) + Number(s.dilrRaw) + Number(s.qaRaw);
  s.varcPct = window.rawToCatPercentile(s.varcRaw, 72);
  s.dilrPct = window.rawToCatPercentile(s.dilrRaw, 60);
  s.qaPct   = window.rawToCatPercentile(s.qaRaw, 66);
  s.catPct  = window.rawToCatPercentile(totalRaw, 198);
};

window.updateCatCallField = function (field, val) {
  const s = window.CAT_CALL_STATE;
  if (field === "isNonEngineer" || field === "isFemale") {
    s[field] = Boolean(val);
  } else if (field === "category") {
    s[field] = String(val);
  } else {
    s[field] = Number(val);
    if (field === "varcRaw" || field === "dilrRaw" || field === "qaRaw") {
      window.recalcCatPercentilesFromRaw();
    }
  }
  window.renderActiveTab();
};

window.renderTab6 = function (el) {
  const s = window.CAT_CALL_STATE;
  const totalRaw = Number(s.varcRaw) + Number(s.dilrRaw) + Number(s.qaRaw);

  const catRelax = { GEN: 0, EWS: -2.0, NCOBC: -3.5, SC: -10.0, ST: -15.0 }[s.category] || 0;
  const secRelax = { GEN: 0, EWS: -4.0, NCOBC: -6.0, SC: -14.0, ST: -18.0 }[s.category] || 0;

  // Work-Ex Curve (Optimal 18-36 months = 10/10)
  const wxNorm = s.workExMonths <= 6 ? 2 : (s.workExMonths <= 12 ? 5 : (s.workExMonths <= 36 ? 10 : 7));
  const divBonus = (s.isNonEngineer ? 4.0 : 0) + (s.isFemale ? 4.5 : 0);

  const institutes = [
    {
      name: "IIM Ahmedabad (PGP)",
      formula: "65% CAT Normalized + 35% AR (X, XII, Grad, WorkEx, Diversity)",
      secMin: 85 + secRelax,
      overallMin: 99.35 + catRelax,
      csScore: (s.catPct * 0.65) + ((s.classX * 0.10 + s.classXII * 0.10 + s.gradPct * 0.10 + wxNorm * 0.5) + divBonus * 0.6),
      csCutoff: 87.2 + catRelax * 0.45,
      safeRaw: "104+ / 198"
    },
    {
      name: "IIM Bangalore (PGP)",
      formula: "55% CAT + 10% X + 10% XII + 10% Grad + 10% WorkEx + 5% Gender",
      secMin: 85 + secRelax,
      overallMin: 99.10 + catRelax,
      csScore: (s.catPct * 0.55) + (s.classX * 0.10) + (s.classXII * 0.10) + (s.gradPct * 0.10) + wxNorm + (s.isFemale ? 5 : 0),
      csCutoff: 87.8 + catRelax * 0.45,
      safeRaw: "100+ / 198"
    },
    {
      name: "IIM Calcutta (MBA)",
      formula: "56% CAT + 10% X + 15% XII + 8% WorkEx + 4% Gender + 7% Academic Div",
      secMin: 85 + secRelax,
      overallMin: 99.25 + catRelax,
      csScore: (s.catPct * 0.56) + (s.classX * 0.10) + (s.classXII * 0.15) + (wxNorm * 0.8) + (s.isFemale ? 4 : 0) + (s.isNonEngineer ? 7 : 0),
      csCutoff: 86.5 + catRelax * 0.45,
      safeRaw: "102+ / 198"
    },
    {
      name: "FMS Delhi (MBA)",
      formula: "100% CAT Weighted (40% VARC + 30% DILR + 30% QA) + 5 Marks Women Bonus",
      secMin: 80 + secRelax,
      overallMin: 98.90 + catRelax,
      csScore: ((s.varcRaw / 72) * 40 + (s.dilrRaw / 60) * 30 + (s.qaRaw / 66) * 30) * 1.65 + (s.isFemale ? 5.0 : 0),
      csCutoff: 84.0 + catRelax * 0.45,
      safeRaw: "98+ / 198 (High VARC)"
    },
    {
      name: "IIM Lucknow (PGP)",
      formula: "60% CAT + 10% XII + 10% Grad + 10% WorkEx + 5% Academic + 5% Gender",
      secMin: 85 + secRelax,
      overallMin: 98.40 + catRelax,
      csScore: (s.catPct * 0.60) + (s.classXII * 0.10) + (s.gradPct * 0.10) + wxNorm + (s.isNonEngineer ? 5 : 0) + (s.isFemale ? 5 : 0),
      csCutoff: 85.4 + catRelax * 0.45,
      safeRaw: "93+ / 198"
    },
    {
      name: "IIM Kozhikode (PGP)",
      formula: "45% CAT + 15% X + 20% XII + 10% Gender/Acad Diversity + 10% WorkEx",
      secMin: 80 + secRelax,
      overallMin: 97.80 + catRelax,
      csScore: (s.catPct * 0.45) + (s.classX * 0.15) + (s.classXII * 0.20) + wxNorm + (s.isFemale || s.isNonEngineer ? 10 : 0),
      csCutoff: 85.0 + catRelax * 0.45,
      safeRaw: "89+ / 198"
    },
    {
      name: "IIM Mumbai (MBA)",
      formula: "60% CAT + 20% Academic Profile + 10% WorkEx + 10% Diversity (High DILR/QA)",
      secMin: 88 + secRelax,
      overallMin: 98.20 + catRelax,
      csScore: (s.catPct * 0.60) + ((s.classX + s.classXII) * 0.10) + wxNorm + (s.isFemale ? 5 : 0),
      csCutoff: 85.8 + catRelax * 0.45,
      safeRaw: "92+ / 198"
    },
    {
      name: "IIM Indore (PGP)",
      formula: "35% CAT + 20% Class X + 39% Class XII + 6% Diversity (Acad-Heavy)",
      secMin: 80 + secRelax,
      overallMin: 97.20 + catRelax,
      csScore: (s.catPct * 0.35) + (s.classX * 0.20) + (s.classXII * 0.39) + (s.isFemale ? 6 : 0),
      csCutoff: 86.2 + catRelax * 0.45,
      safeRaw: "86+ / 198 (90%+ X/XII)"
    },
    {
      name: "XLRI Jamshedpur (BM via XAT)",
      formula: "XAT Overall + Decision Making Sectional Gate (No Class X/XII Weight)",
      secMin: 80 + secRelax,
      overallMin: 96.50 + catRelax,
      csScore: s.catPct * 0.88 + (s.isFemale ? 3 : 0),
      csCutoff: 84.5 + catRelax * 0.45,
      safeRaw: "96.5+%ile XAT"
    }
  ];

  const rowsHtml = institutes.map(inst => {
    const failsSec = s.varcPct < inst.secMin || s.dilrPct < inst.secMin || s.qaPct < inst.secMin;
    const gap = inst.csScore - inst.csCutoff;
    let badge = "";
    if (failsSec) {
      badge = `<span class="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold">Sectional Gate Risk (&lt;${inst.secMin.toFixed(0)}%ile)</span>`;
    } else if (gap >= 1.5 && s.catPct >= inst.overallMin) {
      badge = `<span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">High PI Call (&ge;88%)</span>`;
    } else if (gap >= -1.2 && s.catPct >= inst.overallMin - 0.8) {
      badge = `<span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold">Borderline / WAT-PI Bubble</span>`;
    } else {
      badge = `<span class="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-[11px] font-bold">Reach (+${Math.max(0.5, inst.overallMin - s.catPct).toFixed(1)}%ile needed)</span>`;
    }

    return `
      <tr class="border-b border-slate-800/80 hover:bg-slate-950/60">
        <td class="py-3 px-3.5">
          <div class="font-bold text-white">${inst.name}</div>
          <div class="text-[11px] text-slate-400">${inst.formula}</div>
        </td>
        <td class="py-3 px-3 font-mono text-xs text-slate-300">${inst.secMin.toFixed(0)}%ile / ${inst.overallMin.toFixed(1)}%ile</td>
        <td class="py-3 px-3 font-bold text-indigo-300">${inst.csScore.toFixed(1)} <span class="text-[11px] text-slate-500 font-normal">/ ${inst.csCutoff.toFixed(1)}</span></td>
        <td class="py-3 px-3 text-xs text-slate-300">${inst.safeRaw}</td>
        <td class="py-3 px-3">${badge}</td>
      </tr>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-5">
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold uppercase">Composite Score &amp; Dual-Gate Shortlist Engine</span>
          <h2 class="text-xl font-extrabold text-white mt-1">IIM A/B/C/L/K/I/M, FMS Delhi &amp; XLRI Call Predictor</h2>
          <p class="text-xs text-slate-400">Simulates sectional percentile gates, Class X/XII/Grad Application Rating (AR), Work-Ex curve, and Academic/Gender Diversity.</p>
        </div>
        <button type="button" onclick="window.syncPredictorFromLatestMock()"
          class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer">
          &#8635; Import Latest Tab 4 Mock Score
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">1. CAT 2026 Raw Marks Simulator (Out of 198)</div>
          <div>
            <div class="flex justify-between text-xs text-slate-300"><span>VARC Raw (Max 72)</span><strong>${s.varcRaw} / 72 (${s.varcPct}%ile)</strong></div>
            <input type="range" min="0" max="72" value="${s.varcRaw}" oninput="window.updateCatCallField('varcRaw', this.value)" class="w-full accent-indigo-500">
          </div>
          <div>
            <div class="flex justify-between text-xs text-slate-300"><span>DILR Raw (Max 60)</span><strong>${s.dilrRaw} / 60 (${s.dilrPct}%ile)</strong></div>
            <input type="range" min="0" max="60" value="${s.dilrRaw}" oninput="window.updateCatCallField('dilrRaw', this.value)" class="w-full accent-indigo-500">
          </div>
          <div>
            <div class="flex justify-between text-xs text-slate-300"><span>QA Raw (Max 66)</span><strong>${s.qaRaw} / 66 (${s.qaPct}%ile)</strong></div>
            <input type="range" min="0" max="66" value="${s.qaRaw}" oninput="window.updateCatCallField('qaRaw', this.value)" class="w-full accent-indigo-500">
          </div>
          <div class="p-3 rounded-xl bg-slate-950 border border-indigo-500/30 flex justify-between items-center text-xs">
            <span class="text-slate-300">Projected Overall CAT:</span>
            <strong class="text-base text-emerald-300">${totalRaw} / 198 &bull; ${s.catPct}%ile</strong>
          </div>
        </div>

        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">2. Academic Profile &amp; Work-Ex (AR Rating)</div>
          <div class="grid grid-cols-3 gap-2 text-xs">
            <label class="space-y-1"><span class="text-slate-400">Class X %</span>
              <input type="number" min="50" max="100" value="${s.classX}" onchange="window.updateCatCallField('classX', this.value)" class="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold">
            </label>
            <label class="space-y-1"><span class="text-slate-400">Class XII %</span>
              <input type="number" min="50" max="100" value="${s.classXII}" onchange="window.updateCatCallField('classXII', this.value)" class="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold">
            </label>
            <label class="space-y-1"><span class="text-slate-400">Grad %</span>
              <input type="number" min="50" max="100" value="${s.gradPct}" onchange="window.updateCatCallField('gradPct', this.value)" class="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold">
            </label>
          </div>
          <div>
            <div class="flex justify-between text-xs text-slate-300"><span>Full-Time Work Experience</span><strong>${s.workExMonths} Months</strong></div>
            <input type="range" min="0" max="60" value="${s.workExMonths}" oninput="window.updateCatCallField('workExMonths', this.value)" class="w-full accent-indigo-500">
          </div>
          <div class="text-[11px] text-slate-400">Sweet spot: 18–36 months earns maximum Work-Ex points at IIM B, L, K &amp; M.</div>
        </div>

        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">3. Category &amp; Diversity Multipliers</div>
          <label class="block text-xs space-y-1">
            <span class="text-slate-400">Admission Category</span>
            <select onchange="window.updateCatCallField('category', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
              <option value="GEN" ${s.category === "GEN" ? "selected" : ""}>General (Open)</option>
              <option value="EWS" ${s.category === "EWS" ? "selected" : ""}>EWS (Economically Weaker Section)</option>
              <option value="NCOBC" ${s.category === "NCOBC" ? "selected" : ""}>NC-OBC</option>
              <option value="SC" ${s.category === "SC" ? "selected" : ""}>SC</option>
              <option value="ST" ${s.category === "ST" ? "selected" : ""}>ST</option>
            </select>
          </label>
          <label class="flex items-center gap-2 text-xs text-slate-200 cursor-pointer pt-1">
            <input type="checkbox" ${s.isNonEngineer ? "checked" : ""} onchange="window.updateCatCallField('isNonEngineer', this.checked)">
            <span>Academic Diversity (Non-Engineer: Commerce / Arts / Science / Med)</span>
          </label>
          <label class="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
            <input type="checkbox" ${s.isFemale ? "checked" : ""} onchange="window.updateCatCallField('isFemale', this.checked)">
            <span>Gender Diversity (Female / Transgender Candidate Bonus)</span>
          </label>
        </div>
      </div>

      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 overflow-x-auto shadow-xl">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-800 text-[11px] uppercase text-slate-400">
              <th class="py-2.5 px-3.5">Target Campus &amp; Weighting Formula</th>
              <th class="py-2.5 px-3">Sec / Overall Gate</th>
              <th class="py-2.5 px-3">Your CS vs Cutoff</th>
              <th class="py-2.5 px-3">Target Raw Score</th>
              <th class="py-2.5 px-3">Shortlist Verdict</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    </div>
  `;
};