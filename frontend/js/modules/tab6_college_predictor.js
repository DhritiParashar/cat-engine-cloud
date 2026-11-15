window.CAT_CALL_STATE = window.CAT_CALL_STATE || {
  varcRaw: 38, dilrRaw: 30, qaRaw: 32,
  catPct: 99.15, varcPct: 98.4, dilrPct: 98.1, qaPct: 98.6,
  classX: 92, classXII: 90, gradCgpa: 8.7, gradPct: 82, workExMonths: 24,
  category: "GEN", isNonEngineer: false, isFemale: true
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
    alert("Complete and submit a mock in Tab 4 first to import your live CAT score.");
    return;
  }
  const latest = hist[0];
  const scaled198 = Math.round((Math.max(0, Number(latest.score || 0)) / Math.max(1, Number(latest.maxScore || 198))) * 198);
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
  if (field === "isNonEngineer" || field === "isFemale") s[field] = Boolean(val);
  else if (field === "category") s[field] = String(val);
  else {
    s[field] = Number(val);
    if (["varcRaw", "dilrRaw", "qaRaw"].includes(field)) window.recalcCatPercentilesFromRaw();
    if (field === "gradCgpa") { s.gradCgpa = Math.min(10, Math.max(4, s.gradCgpa)); s.gradPct = Number(Math.min(100, (s.gradCgpa - 0.5) * 10).toFixed(1)); }
    if (field === "gradPct") { s.gradCgpa = Number(Math.min(10, (s.gradPct / 10) + 0.5).toFixed(2)); }
  }
  window.renderActiveTab();
};

window.renderTab6 = function (el) {
  const s = window.CAT_CALL_STATE;
  const totalRaw = Number(s.varcRaw) + Number(s.dilrRaw) + Number(s.qaRaw);
  const catRelax = { GEN: 0, EWS: -2.0, NCOBC: -3.5, SC: -10.0, ST: -15.0 }[s.category] || 0;
  const secRelax = { GEN: 0, EWS: -4.0, NCOBC: -6.0, SC: -14.0, ST: -18.0 }[s.category] || 0;
  const wxNorm = s.workExMonths <= 6 ? 2 : (s.workExMonths <= 12 ? 5 : (s.workExMonths <= 36 ? 10 : 7));
  const divBonus = (s.isNonEngineer ? 4.0 : 0) + (s.isFemale ? 4.5 : 0);

  const programs = [
    { name: "IIM Ahmedabad — PGP (MBA)", roi: "Fee ₹25L • Avg CTC ₹34.5L", formula: "65% CAT + 35% AR (Undergrad, XII, X, WorkEx, Diversity)", secMin: 85 + secRelax, overallMin: 99.35 + catRelax, cs: (s.catPct * 0.65) + ((s.classX * 0.10 + s.classXII * 0.10 + s.gradPct * 0.10 + wxNorm * 0.5) + divBonus * 0.6), cut: 87.2 + catRelax * 0.45 },
    { name: "IIM Bangalore — PGP (MBA)", roi: "Fee ₹24.5L • Avg CTC ₹35.3L", formula: "55% CAT + 10% Grad + 10% XII + 10% X + 10% WorkEx + 5% Gender", secMin: 85 + secRelax, overallMin: 99.10 + catRelax, cs: (s.catPct * 0.55) + (s.classX * 0.10) + (s.classXII * 0.10) + (s.gradPct * 0.10) + wxNorm + (s.isFemale ? 5 : 0), cut: 87.8 + catRelax * 0.45 },
    { name: "IIM Calcutta — MBA", roi: "Fee ₹27L • Avg CTC ₹35.0L", formula: "56% CAT + 15% XII + 10% X + 8% WorkEx + 7% AcadDiv + 4% Gender", secMin: 85 + secRelax, overallMin: 99.25 + catRelax, cs: (s.catPct * 0.56) + (s.classX * 0.10) + (s.classXII * 0.15) + (wxNorm * 0.8) + (s.isFemale ? 4 : 0) + (s.isNonEngineer ? 7 : 0), cut: 86.5 + catRelax * 0.45 },
    { name: "FMS Delhi — MBA (Flagship)", roi: "Fee ₹2.0L • Avg CTC ₹34.1L (17x ROI)", formula: "100% CAT (40% VARC + 30% DILR + 30% QA) + 5 Women Bonus", secMin: 80 + secRelax, overallMin: 98.90 + catRelax, cs: ((s.varcRaw / 72) * 40 + (s.dilrRaw / 60) * 30 + (s.qaRaw / 66) * 30) * 1.65 + (s.isFemale ? 5.0 : 0), cut: 84.0 + catRelax * 0.45 },
    { name: "IIM Lucknow — PGP (MBA)", roi: "Fee ₹20.7L • Avg CTC ₹32.2L", formula: "60% CAT + 10% Grad + 10% XII + 10% WorkEx + 10% Diversity", secMin: 85 + secRelax, overallMin: 98.40 + catRelax, cs: (s.catPct * 0.60) + (s.classXII * 0.10) + (s.gradPct * 0.10) + wxNorm + (s.isNonEngineer ? 5 : 0) + (s.isFemale ? 5 : 0), cut: 85.4 + catRelax * 0.45 },
    { name: "IIM Kozhikode — PGP (MBA)", roi: "Fee ₹20.5L • Avg CTC ₹31.0L", formula: "45% CAT + 20% XII + 15% X + 10% Diversity + 10% WorkEx", secMin: 80 + secRelax, overallMin: 97.80 + catRelax, cs: (s.catPct * 0.45) + (s.classX * 0.15) + (s.classXII * 0.20) + wxNorm + (s.isFemale || s.isNonEngineer ? 10 : 0), cut: 85.0 + catRelax * 0.45 },
    { name: "IIM Mumbai — MBA", roi: "Fee ₹21.0L • Avg CTC ₹31.5L", formula: "60% CAT + 20% Past Academics + 10% WorkEx + 10% Diversity", secMin: 88 + secRelax, overallMin: 98.20 + catRelax, cs: (s.catPct * 0.60) + ((s.classX + s.classXII) * 0.10) + wxNorm + (s.isFemale ? 5 : 0), cut: 85.8 + catRelax * 0.45 },
    { name: "XLRI Jamshedpur — PGDM (BM)", roi: "Fee ₹28.6L • Avg CTC ₹32.7L", formula: "XAT Overall + Decision Making Gate (Zero Past-Acad Penalty)", secMin: 80 + secRelax, overallMin: 96.50 + catRelax, cs: s.catPct * 0.88 + (s.isFemale ? 3 : 0), cut: 84.5 + catRelax * 0.45 }
  ];

  const rowsHtml = programs.map(p => {
    const failsSec = s.varcPct < p.secMin || s.dilrPct < p.secMin || s.qaPct < p.secMin;
    const gap = p.cs - p.cut;
    const badge = failsSec
      ? `<span class="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold">Sectional Gate Risk (&lt;${p.secMin.toFixed(0)}%ile)</span>`
      : (gap >= 1.5 && s.catPct >= p.overallMin
          ? `<span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">High WAT-PI Call (&ge;88%)</span>`
          : (gap >= -1.2 && s.catPct >= p.overallMin - 0.8
              ? `<span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold">PI Bubble (Strong WAT/PI Needed)</span>`
              : `<span class="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-[11px] font-bold">Reach (+${Math.max(0.5, p.overallMin - s.catPct).toFixed(1)}%ile CAT)</span>`));
    return `
      <tr class="border-b border-slate-800/80 hover:bg-slate-950/60">
        <td class="py-3 px-3.5"><div class="font-bold text-white">${p.name}</div><div class="text-[11px] text-emerald-400 font-semibold">${p.roi}</div><div class="text-[11px] text-slate-400">${p.formula}</div></td>
        <td class="py-3 px-3 font-mono text-xs text-slate-300">${p.secMin.toFixed(0)}%ile / ${p.overallMin.toFixed(1)}%ile</td>
        <td class="py-3 px-3 font-bold text-indigo-300">${p.cs.toFixed(1)} <span class="text-[11px] text-slate-500 font-normal">/ ${p.cut.toFixed(1)}</span></td>
        <td class="py-3 px-3">${badge}</td>
      </tr>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-5">
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold uppercase">Postgraduate MBA / PGP Admissions &amp; ROI Command Center</span>
          <h2 class="text-xl font-extrabold text-white mt-1">IIM A/B/C/L/K/M, FMS Delhi &amp; XLRI Shortlist &amp; ROI Strategy</h2>
          <p class="text-xs text-slate-400">Evaluates your CAT 2026 score alongside Undergraduate GPA, Full-Time Work Experience, Past Academic Weightings &amp; Diversity Multipliers for Postgraduate Management Programs.</p>
        </div>
        <button type="button" onclick="window.syncPredictorFromLatestMock()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer">&#8635; Import Latest Mock Score</button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">1. CAT 2026 Sectional Raw Score (198 Max)</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>VARC (/72)</span><strong>${s.varcRaw} (${s.varcPct}%ile)</strong></div><input type="range" min="0" max="72" value="${s.varcRaw}" oninput="window.updateCatCallField('varcRaw', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>DILR (/60)</span><strong>${s.dilrRaw} (${s.dilrPct}%ile)</strong></div><input type="range" min="0" max="60" value="${s.dilrRaw}" oninput="window.updateCatCallField('dilrRaw', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>QA (/66)</span><strong>${s.qaRaw} (${s.qaPct}%ile)</strong></div><input type="range" min="0" max="66" value="${s.qaRaw}" oninput="window.updateCatCallField('qaRaw', this.value)" class="w-full accent-indigo-500"></div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 flex justify-between text-xs"><span class="text-slate-300">Projected CAT Overall:</span><strong class="text-emerald-300">${totalRaw}/198 (${s.catPct}%ile)</strong></div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">2. Undergraduate &amp; Work-Ex Profile (MBA Inputs)</div>
          <div class="grid grid-cols-3 gap-2 text-xs">
            <label><span class="text-slate-400">UG CGPA (/10)</span><input type="number" step="0.1" min="4" max="10" value="${s.gradCgpa || 8.7}" onchange="window.updateCatCallField('gradCgpa', this.value)" class="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold"></label>
     <label><span class="text-slate-400">UG Equiv %</span><input type="number" min="50" max="100" value="${s.gradPct}" onchange="window.updateCatCallField('gradPct', this.value)" class="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold"></label>
            <label><span class="text-slate-400">Class XII %</span><input type="number" min="50" max="100" value="${s.classXII}" onchange="window.updateCatCallField('classXII', this.value)" class="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold"></label>
            <label><span class="text-slate-400">Class X %</span><input type="number" min="50" max="100" value="${s.classX}" onchange="window.updateCatCallField('classX', this.value)" class="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold"></label>
          </div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Post-Grad Work Experience</span><strong>${s.workExMonths} Months</strong></div><input type="range" min="0" max="60" value="${s.workExMonths}" oninput="window.updateCatCallField('workExMonths', this.value)" class="w-full accent-indigo-500"></div>
          <div class="text-[11px] text-slate-400">Note: Class X/XII marks act only as historical AR weights in IIM MBA shortlists; FMS &amp; XLRI assign 0% weight to school marks.</div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">3. Category &amp; Diversity Multipliers</div>
          <select onchange="window.updateCatCallField('category', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="GEN" ${s.category==="GEN"?"selected":""}>General (Open)</option>
            <option value="EWS" ${s.category==="EWS"?"selected":""}>EWS</option>
            <option value="NCOBC" ${s.category==="NCOBC"?"selected":""}>NC-OBC</option>
            <option value="SC" ${s.category==="SC"?"selected":""}>SC</option>
            <option value="ST" ${s.category==="ST"?"selected":""}>ST</option>
          </select>
          <label class="flex items-center gap-2 text-xs text-slate-200 cursor-pointer"><input type="checkbox" ${s.isNonEngineer?"checked":""} onchange="window.updateCatCallField('isNonEngineer', this.checked)"><span>Non-Engineer Academic Diversity Bonus</span></label>
          <label class="flex items-center gap-2 text-xs text-slate-200 cursor-pointer"><input type="checkbox" ${s.isFemale?"checked":""} onchange="window.updateCatCallField('isFemale', this.checked)"><span>Female / Gender Diversity Bonus</span></label>
        </div>
      </div>
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 overflow-x-auto shadow-xl">
        <table class="w-full text-left text-xs border-collapse">
          <thead><tr class="border-b border-slate-800 text-[11px] uppercase text-slate-400"><th class="py-2.5 px-3.5">Postgraduate MBA / PGP Program &amp; ROI</th><th class="py-2.5 px-3">Sec / Overall Gate</th><th class="py-2.5 px-3">Composite Score vs Cutoff</th><th class="py-2.5 px-3">Shortlist Verdict</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    </div>
  `;
};
// ==============================================================================
// POSTGRADUATE REGISTRATION ENRICHER & REGISTERED PROFILE HEADER SYNC
// ==============================================================================
window.getPostgradProfile = function () {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("goalisb_postgrad_profile_v1") || localStorage.getItem("ipm_user") || "{}");
  } catch (e) {}

  return {
    name: saved.name || "Dina Shah",
    classXII: Number(saved.classXII || saved.class12 || 90),
    ugCgpa10: Number(saved.ugCgpa10 || (exam === "GRE" ? 9.25 : (exam === "GMAT" ? 9.1 : 8.7))),
    ugGpa4: Number(saved.ugGpa4 || (exam === "GRE" ? 3.70 : 3.64)),
    ugPct: Number(saved.ugPct || 82),
    workExMonths: Number(saved.workExMonths !== undefined ? saved.workExMonths : (exam === "GMAT" ? 48 : 24)),
    targetTrack: saved.targetTrack || (exam === "GRE" ? "MS CS / AI" : (exam === "GMAT" ? "Global MBA / MiM" : "IIM A/B/C PGP")),
    researchTier: saved.researchTier || "PUB",
    category: saved.category || "GEN"
  };
};

window.savePostgradProfile = function (updates) {
  const cur = window.getPostgradProfile();
  const next = { ...cur, ...updates };
  if (updates.ugCgpa10 !== undefined) {
    const c10 = Math.min(10, Math.max(4, Number(updates.ugCgpa10)));
    next.ugCgpa10 = Number(c10.toFixed(2));
    next.ugGpa4 = Number(((c10 / 10) * 4.0).toFixed(2));
    next.ugPct = Number(Math.min(100, (c10 - 0.5) * 10).toFixed(1));
  }
  localStorage.setItem("goalisb_postgrad_profile_v1", JSON.stringify(next));

  // Sync into Tab 6 state automatically
  if (window.CAT_CALL_STATE) {
    window.CAT_CALL_STATE.classXII = next.classXII;
    window.CAT_CALL_STATE.gradCgpa = next.ugCgpa10;
    window.CAT_CALL_STATE.gradPct = next.ugPct;
    window.CAT_CALL_STATE.workExMonths = next.workExMonths;
    window.CAT_CALL_STATE.category = next.category;
  }
  if (window.GMAT_ADMIT_STATE) {
    window.GMAT_ADMIT_STATE.ugCgpa10 = next.ugCgpa10;
    window.GMAT_ADMIT_STATE.ugGpa = next.ugGpa4;
    window.GMAT_ADMIT_STATE.workExYears = Number((next.workExMonths / 12).toFixed(1));
  }
  if (window.GRE_GRAD_STATE) {
    window.GRE_GRAD_STATE.ugCgpa10 = next.ugCgpa10;
    window.GRE_GRAD_STATE.ugGpa = next.ugGpa4;
    window.GRE_GRAD_STATE.researchTier = next.researchTier;
  }
  window.syncRegisteredHeaderAndForms();
  if (typeof window.renderActiveTab === "function") window.renderActiveTab();
};

window.openPostgradProfileModal = function () {
  const p = window.getPostgradProfile();
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  let modal = document.getElementById("postgrad-profile-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "postgrad-profile-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-5 space-y-4 text-xs text-slate-200 shadow-2xl">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2.5">
        <div>
          <span class="text-[10px] uppercase font-bold text-indigo-400">Registered Candidate Profile</span>
          <h3 class="text-base font-extrabold text-white">Postgraduate Academic &amp; Experience Credentials</h3>
        </div>
        <button type="button" onclick="document.getElementById('postgrad-profile-modal').remove()" class="text-slate-400 hover:text-white text-lg font-bold">&times;</button>
      </div>
      <div class="space-y-3">
        <label class="block"><span class="text-slate-400">Candidate Full Name</span>
          <input id="pg-prof-name" type="text" value="${p.name}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
        </label>
        <div class="grid grid-cols-2 gap-2.5">
          <label class="block"><span class="text-slate-400">Undergrad CGPA (10-Pt)</span>
            <input id="pg-prof-cgpa" type="number" step="0.05" min="4" max="10" value="${p.ugCgpa10}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
          <label class="block"><span class="text-slate-400">${exam === "CAT" ? "Class XII Board %" : "Work Experience (Months)"}</span>
            <input id="pg-prof-sec" type="number" min="0" max="120" value="${exam === "CAT" ? p.classXII : p.workExMonths}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
        </div>
        ${exam === "CAT" ? `
        <div class="grid grid-cols-2 gap-2.5">
          <label class="block"><span class="text-slate-400">Work Experience (Months)</span>
            <input id="pg-prof-wx" type="number" min="0" max="96" value="${p.workExMonths}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
          <label class="block"><span class="text-slate-400">Category</span>
            <select id="pg-prof-cat" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
              <option value="GEN" ${p.category==="GEN"?"selected":""}>General</option>
              <option value="EWS" ${p.category==="EWS"?"selected":""}>EWS</option>
              <option value="NCOBC" ${p.category==="NCOBC"?"selected":""}>NC-OBC</option>
              <option value="SC" ${p.category==="SC"?"selected":""}>SC</option>
              <option value="ST" ${p.category==="ST"?"selected":""}>ST</option>
            </select>
          </label>
        </div>` : `
        <label class="block"><span class="text-slate-400">Target Postgraduate Track</span>
          <input id="pg-prof-track" type="text" value="${p.targetTrack}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
        </label>`}
      </div>
      <div class="flex justify-end gap-2 pt-2 border-t border-slate-800">
        <button type="button" onclick="document.getElementById('postgrad-profile-modal').remove()" class="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold">Cancel</button>
        <button type="button" onclick="
          const exam = window.location.host.includes('gmat') ? 'GMAT' : (window.location.host.includes('gre') ? 'GRE' : 'CAT');
          window.savePostgradProfile({
            name: document.getElementById('pg-prof-name').value.trim() || 'Dina Shah',
            ugCgpa10: Number(document.getElementById('pg-prof-cgpa').value || 8.8),
            classXII: exam === 'CAT' ? Number(document.getElementById('pg-prof-sec').value || 90) : 90,
            workExMonths: exam === 'CAT' ? Number(document.getElementById('pg-prof-wx').value || 24) : Number(document.getElementById('pg-prof-sec').value || 24),
            category: document.getElementById('pg-prof-cat') ? document.getElementById('pg-prof-cat').value : 'GEN',
            targetTrack: document.getElementById('pg-prof-track') ? document.getElementById('pg-prof-track').value : 'Postgrad'
          });
          document.getElementById('postgrad-profile-modal').remove();
        " class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold cursor-pointer">Save &amp; Sync Profile</button>
      </div>
    </div>
  `;
};

window.syncRegisteredHeaderAndForms = function () {
  const p = window.getPostgradProfile();
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  const latest = hist[0];

  let summary = "";
  if (exam === "GMAT") {
    const est = latest && latest.maxScore ? Math.min(805, Math.max(205, Math.round((205 + (latest.score / latest.maxScore) * 600) / 10) * 10 + 5)) : null;
    summary = `CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugGpa4.toFixed(2)} GPA) | WX: ${(p.workExMonths/12).toFixed(1)}y &bull; ${est ? `Mock &rarr; ${est}/805` : "Target: 715+ Focus"}`;
  } else if (exam === "GRE") {
    const est = latest && latest.maxScore ? Math.min(340, Math.max(260, Math.round(260 + (latest.score / latest.maxScore) * 80))) : null;
    summary = `CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugGpa4.toFixed(2)} GPA) | ${p.targetTrack} &bull; ${est ? `Mock &rarr; ${est}/340` : "Target: 328+ GRE"}`;
  } else {
    const scaled198 = latest && latest.maxScore ? Math.round((latest.score / latest.maxScore) * 198) : null;
    summary = `XII: ${p.classXII}% | CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugPct}%) | WX: ${p.workExMonths}m &bull; ${scaled198 !== null ? `Mock &rarr; ${scaled198}/198` : "Target: 99.2+%ile"}`;
  }

  // Update the top-bar candidate profile pill & make it clickable to edit Postgraduate credentials
  document.querySelectorAll("header span, header div, nav span, nav div").forEach(el => {
    if (el.children.length <= 3 && (/Class\s*(X|XII|10|12)/i.test(el.textContent || "") || el.dataset.pgSynced === "1")) {
      el.dataset.pgSynced = "1";
      el.style.cursor = "pointer";
      el.title = "Click to edit Registered Postgraduate Profile (CGPA, Work-Ex, Target Track)";
      el.onclick = window.openPostgradProfileModal;
      el.innerHTML = `<span class="font-bold">&#128100; ${p.name}</span> <span class="mx-1.5 opacity-50">|</span> <span class="text-indigo-600 dark:text-indigo-300 font-semibold">${summary}</span> <span class="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-400">Edit</span>`;
    }
  });

  // Also upgrade any Registration Modal inputs labeled 'Class 10 %' / 'Class 12 %' to Postgraduate fields
  document.querySelectorAll("label, input").forEach(node => {
    if (node.tagName === "LABEL" && /Class\s*10/i.test(node.textContent || "")) {
      node.innerHTML = node.innerHTML.replace(/Class\s*10\s*%/gi, "Undergrad CGPA (10-Pt Scale)");
    }
    if (node.tagName === "LABEL" && /Class\s*12/i.test(node.textContent || "") && exam !== "CAT") {
      node.innerHTML = node.innerHTML.replace(/Class\s*12\s*%/gi, "Work Experience (Months)");
    }
  });
};

setInterval(window.syncRegisteredHeaderAndForms, 500);