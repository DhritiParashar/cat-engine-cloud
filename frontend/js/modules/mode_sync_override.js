// ==============================================================================
// AUTHORITATIVE 4-MODE SYNC ENGINE: CAT | XAT | NMAT ADAPTIVE | SNAP SPEED SPRINT
// ==============================================================================
(function () {
  window._ACTIVE_CAT_MODE = window._ACTIVE_CAT_MODE || "CAT";

  window.detectActiveCatPortalMode = function () {
    return window._ACTIVE_CAT_MODE || "CAT";
  };

  window.classifyMockEntryMode = function (entry) {
    const sid = String(entry?.serialId || "").toUpperCase();
    const bp = String(entry?.blueprint || "").toUpperCase();
    if (sid.startsWith("XAT") || bp.includes("XAT")) return "XAT";
    if (sid.startsWith("SNAP") || bp.includes("SNAP") || bp.includes("SIBM")) return "SNAP";
    if (sid.startsWith("NMAT") || bp.includes("NMAT") || bp.includes("NMIMS")) return "NMAT";
    return "CAT";
  };

  window.isFullLengthMockRecord = function (entry) {
    const bp = String(entry?.blueprint || "");
    return bp.includes("Full") || bp.includes("66 Qs") || bp.includes("75 Qs") || bp.includes("108 Qs") || bp.includes("60 Qs");
  };

  window.getModeFilteredHistory = function (mode) {
    const targetMode = mode || window.detectActiveCatPortalMode();
    const all = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    return all.filter(item => window.classifyMockEntryMode(item) === targetMode && window.isFullLengthMockRecord(item));
  };

  window.clearModeMockHistory = function (mode) {
    const targetMode = mode || window.detectActiveCatPortalMode();
    if (!confirm(`Clear all logged Full-Length ${targetMode} mocks? (Logs for CAT, XAT, NMAT & SNAP remain isolated.)`)) return;
    const all = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const remaining = all.filter(item => window.classifyMockEntryMode(item) !== targetMode);
    localStorage.setItem("ipm_mock_history_v1", JSON.stringify(remaining));
    window.syncAllModeHeadersAndTabs();
  };

  // Replace the combined NMAT & SNAP pill with two separate pills: NMAT Adaptive & SNAP Speed Sprint
  window.ensureFourModePills = function () {
    const allBtns = Array.from(document.querySelectorAll("button"));
    const combinedBtn = allBtns.find(b => (b.textContent || "").includes("NMAT & SNAP"));
    if (combinedBtn && !document.getElementById("mode-pill-SNAP")) {
      const catBtn = allBtns.find(b => (b.textContent || "").includes("CAT Standard"));
      const xatBtn = allBtns.find(b => (b.textContent || "").includes("XAT & Decision Making"));
      if (catBtn) catBtn.id = "mode-pill-CAT";
      if (xatBtn) xatBtn.id = "mode-pill-XAT";

      combinedBtn.id = "mode-pill-NMAT";
      combinedBtn.innerHTML = `NMAT Adaptive <span class="opacity-80 font-normal">(108 Qs &bull; Zero Neg)</span>`;

      const snapBtn = combinedBtn.cloneNode(true);
      snapBtn.id = "mode-pill-SNAP";
      snapBtn.innerHTML = `SNAP Speed Sprint <span class="opacity-80 font-normal">(60 Qs &bull; 60 Mins)</span>`;
      combinedBtn.insertAdjacentElement("afterend", snapBtn);
    }

    // Highlight active pill and update pattern summary bar
    const mode = window.detectActiveCatPortalMode();
    ["CAT", "XAT", "NMAT", "SNAP"].forEach(m => {
      const p = document.getElementById(`mode-pill-${m}`);
      if (!p) return;
      if (m === mode) {
        p.className = "px-4 py-2 rounded-full text-xs font-extrabold bg-indigo-600 text-white shadow-sm cursor-pointer transition";
      } else {
        p.className = "px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 cursor-pointer transition";
      }
    });

    // Update top pattern strip below pills
    const stripMeta = {
      CAT:  { sec: "VARC (24 Qs • 40m) • DILR (20 Qs • 40m) • QA (22 Qs • 40m) • 198 Marks Scale", pat: "66 Qs | 120 Mins | Strict 40-Min Sectional Timer", mark: "MCQ +3/-1 | TITA +3/0 (Zero Penalty)" },
      XAT:  { sec: "VALR (26 Qs) • Decision Making (21 Qs) • QADI (28 Qs) • 75 Marks Scale", pat: "75 Qs (Part 1) | 165 Mins | Flexible Sectional Pacing", mark: "+1 / -0.25 (5 Options A–E) | -0.10 after 8 Skips" },
      NMAT: { sec: "Language Skills (36 Qs • 28m) • Quant Skills (36 Qs • 52m) • Logical Reasoning (36 Qs • 40m)", pat: "108 Qs | 120 Mins | Strict Sectional Locking (120–360 Scale)", mark: "+3 / 0 (Zero Negative • 4 Options • 100% Attempt)" },
      SNAP: { sec: "General English (15 Qs) • Analytical & LR (25 Qs) • QA, DI & DS (20 Qs) • 60 Marks Scale", pat: "60 Qs | 60 Mins | 1.0 Min/Question Speed Sprint", mark: "+1 / -0.25 (4 Options • No Sectional Lock)" }
    }[mode];

    document.querySelectorAll("div, span").forEach(el => {
      if (el.children.length === 0 && el.textContent) {
        const t = el.textContent.trim();
        if (t.startsWith("Exam Sections:")) el.textContent = `Exam Sections: ${stripMeta.sec}`;
        else if (t.startsWith("Pattern:")) el.textContent = `Pattern: ${stripMeta.pat}`;
        else if (t.startsWith("Marking:")) el.textContent = `Marking: ${stripMeta.mark}`;
      }
    });
  };

  window.syncAllModeHeadersAndTabs = function () {
    window.ensureFourModePills();
    const mode = window.detectActiveCatPortalMode();
    const modeLogs = window.getModeFilteredHistory(mode);

    const scaleMax = mode === "XAT" ? "75" : (mode === "NMAT" ? "360" : (mode === "SNAP" ? "60" : "198"));
    let latestScaled = mode === "NMAT" ? "120" : "0";
    if (modeLogs.length > 0) {
      const latest = modeLogs[0];
      const ratio = latest.maxScore > 0 ? Math.max(0, Math.min(1, latest.score / latest.maxScore)) : 0;
      latestScaled = mode === "XAT"
        ? (ratio * 75).toFixed(1)
        : (mode === "NMAT"
          ? String(Math.round(120 + ratio * 240))
          : (mode === "SNAP" ? (ratio * 60).toFixed(1) : String(Math.round(ratio * 198))));
    }

    document.querySelectorAll("span, div, a").forEach(el => {
      if (el.children.length === 0 && el.textContent && (el.textContent.includes("Mocks:") || el.textContent.includes("Readiness:"))) {
        el.textContent = `${mode} Full Mocks: ${modeLogs.length} • Latest: ${latestScaled}/${scaleMax}`;
      }
    });

    const ws = document.getElementById("main-workspace");
    if (!ws) return;
    const activeTabBtn = Array.from(document.querySelectorAll("button")).find(b =>
      (b.className || "").includes("bg-indigo-600") && /^[1-6]\./.test((b.textContent || "").trim())
    );
    const activeNum = activeTabBtn ? parseInt((activeTabBtn.textContent || "").trim()[0], 10) : 0;
    if (activeNum === 4 && typeof window.renderMockSimulator4 === "function") {
      window.renderMockSimulator4(ws).then(() => window.patchTab4LedgerToActiveMode());
    } else if (activeNum === 6) {
      window.renderAuthoritativeTab6(ws);
    }
  };

  window.patchTab4LedgerToActiveMode = function () {
    const mode = window.detectActiveCatPortalMode();
    const modeLogs = window.getModeFilteredHistory(mode);
    const ws = document.getElementById("main-workspace");
    if (!ws) return;

    if (mode === "NMAT" || mode === "SNAP") {
      ws.querySelectorAll("div").forEach(d => {
        if (d.children.length === 0 && d.textContent.trim() === "4 Choices (A–D) + TITA") {
          d.textContent = mode === "NMAT" ? "4 Choices (A–D) • Zero Neg" : "4 Choices (A–D) • +1/-0.25";
        }
      });
    }

    ws.querySelectorAll("h3").forEach(h => {
      if (h.textContent.includes("Serial Mock ID") || h.textContent.includes("Full-Length Mock Ledger")) {
        h.innerHTML = `${mode} Full-Length Mock Ledger (${modeLogs.length} Full Mocks Logged) <span class="block text-[11px] font-medium text-slate-500 mt-0.5">Only Full-Length ${mode} Mocks are logged here to calibrate Tab 6&#39;s Score &amp; Percentile Forecaster. Short sectionals provide instant scorecards &amp; PDFs without skewing your forecast.</span>`;
      }
    });
    ws.querySelectorAll("button").forEach(b => {
      if (b.textContent.includes("Clear") && b.textContent.includes("Log")) {
        b.innerHTML = `&#128465; Clear ${mode} Log`;
        b.onclick = () => window.clearModeMockHistory(mode);
      }
    });
    const tbody = ws.querySelector("table tbody");
    if (tbody) {
      tbody.innerHTML = modeLogs.length
        ? modeLogs.map(h => `
            <tr class="border-t border-slate-200 dark:border-slate-800 text-xs">
              <td class="py-2.5 px-3 font-mono font-extrabold text-indigo-600">${h.serialId}</td>
              <td class="py-2.5 px-3 text-slate-500">${h.date || ""} ${h.time || ""}</td>
              <td class="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-200">${h.blueprint}</td>
              <td class="py-2.5 px-3 font-extrabold text-emerald-600">${h.score} / ${h.maxScore}</td>
              <td class="py-2.5 px-3 font-bold">${h.accuracy}% (${h.correct || 0}C/${h.wrong || 0}W)</td>
              <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="window.downloadOfficialMarksheet4('${h.serialId}')" class="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold cursor-pointer">PDF</button>
              </td>
            </tr>
          `).join("")
        : `<tr><td colspan="6" class="py-5 text-center text-xs text-slate-400">No Full-Length ${mode} Mocks logged yet. Complete a Full-Length ${mode} Simulation above to generate your ${mode}-2026-XXXX Serial ID and enable Tab 6&#39;s Score &amp; Percentile Forecaster.</td></tr>`;
    }
  };

  window.renderAuthoritativeTab6 = function (el) {
    if (!el) return;
    const mode = window.detectActiveCatPortalMode();
    const modeLogs = window.getModeFilteredHistory(mode);

    let wSum = 0, ratioSum = 0, accSum = 0;
    modeLogs.forEach((h, i) => {
      const w = Math.pow(0.75, i);
      const r = h.maxScore > 0 ? Math.max(0, Math.min(1, h.score / h.maxScore)) : 0;
      wSum += w;
      ratioSum += w * r;
      accSum += w * (h.accuracy || 0);
    });

    const hasMocks = modeLogs.length > 0;
    const avgRatio = hasMocks && wSum > 0 ? ratioSum / wSum : 0.47;
    const avgAcc = hasMocks && wSum > 0 ? Math.round(accSum / wSum) : 0;

    const CFG = {
      CAT: {
        engineTitle: "CAT EXAM READINESS ENGINE (198 MARKS SCALE)",
        cardTitle: "CAT Score, Percentile & Pacing Forecaster",
        s1: { name: "VARC Raw", max: 72, mins: "40 Mins" },
        s2: { name: "DILR Raw", max: 60, mins: "40 Mins" },
        s3: { name: "QA Raw", max: 66, mins: "40 Mins" },
        totalLabel: "Projected CAT Scaled Score",
        formatTotal: (v1, v2, v3) => {
          const tot = v1 + v2 + v3;
          const pct = Math.min(99.9, 52 + Math.pow(tot / 198, 0.82) * 47.9).toFixed(2);
          return `${tot} / 198 (${pct}%ile)`;
        },
        bottleneck: "Primary CAT Focus: Maximize zero-penalty TITA accuracy in VARC & QA while eliminating -1 MCQ guesses on borderline inference items.",
        tiers: [
          { title: "99.8+ Percentile IIM A/B/C Elite Zone (~112/198 Raw)", target: "Target Split: VARC 44/72 • DILR 33/60 • QA 35/66", pace: "Execution Pace: 16+ VARC attempts • 2.5 DILR sets • 13+ QA net", focus: "Eliminate negative marks on inference RC traps; prioritize TITA QA items." },
          { title: "99.5 Percentile Benchmark (~103/198 Raw)", target: "Target Split: VARC 40/72 • DILR 30/60 • QA 33/66", pace: "Execution Pace: 15 VARC • 2 full DILR sets • 12 QA net", focus: "Lock 100% accuracy on 2 selected DILR sets in first 28 mins before touching Set 3." },
          { title: "99.0 Percentile Benchmark (~95/198 Raw)", target: "Target Split: VARC 37/72 • DILR 27/60 • QA 31/66", pace: "Execution Pace: 14 VARC • 9 DILR Qs • 11 QA net", focus: "Cut unverified MCQ guesses; convert 2–3 Arithmetic/Algebra TITA questions cleanly." }
        ]
      },
      XAT: {
        engineTitle: "XAT & DECISION MAKING READINESS ENGINE (75 MARKS SCALE)",
        cardTitle: "XAT Score, Percentile & XLRI Cutoff Forecaster",
        s1: { name: "VALR Raw", max: 26, mins: "55 Mins" },
        s2: { name: "Decision Making Raw", max: 21, mins: "50 Mins" },
        s3: { name: "QADI Raw", max: 28, mins: "60 Mins" },
        totalLabel: "Projected XAT Scaled Score",
        formatTotal: (v1, v2, v3) => {
          const tot = v1 + v2 + v3;
          const pct = Math.min(99.9, 52 + Math.pow(tot / 75, 0.85) * 47.9).toFixed(2);
          return `${tot} / 75 (${pct}%ile)`;
        },
        bottleneck: "Primary XAT Focus (Decision Making): Eliminate extreme ethical choices; balance stakeholder fairness with business viability and cap unattempted skips at <= 8.",
        tiers: [
          { title: "99.0+ Percentile XLRI BM Elite (~40/75 Raw)", target: "Target Split: VALR 14/26 • DM 12/21 • QADI 14/28", pace: "Execution Pace: <= 2.1 mins/Q • Max 6 unattempted skips", focus: "Capitalize on 5-option (A–E) elimination in VALR & Ethical Decision Making." },
          { title: "96.0 Percentile XLRI BM Call Zone (~34/75 Raw)", target: "Target Split: VALR 12/26 • DM 10/21 • QADI 12/28", pace: "Execution Pace: Clear all 3 XAT sectional cutoffs safely", focus: "Avoid the -0.10 unattempted penalty after 8 skips." },
          { title: "94.0 Percentile XLRI HRM Zone (~31/75 Raw)", target: "Target Split: VALR 11/26 • DM 10/21 • QADI 10/28", pace: "Execution Pace: High-accuracy DM & Poem/Abstract RC selection", focus: "Protect positive net marks with zero blind guesses (-0.25)." }
        ]
      },
      NMAT: {
        engineTitle: "NMAT ADAPTIVE READINESS ENGINE (120–360 SCALE • ZERO NEG)",
        cardTitle: "NMAT Scaled Score & NMIMS Cutoff Forecaster",
        s1: { name: "Language Skills Raw", max: 36, mins: "28 Mins" },
        s2: { name: "Logical Reasoning Raw", max: 36, mins: "40 Mins" },
        s3: { name: "Quantitative Skills Raw", max: 36, mins: "52 Mins" },
        totalLabel: "Projected NMAT Scaled Score",
        formatTotal: (v1, v2, v3) => {
          const nmat = Math.round(120 + ((v1 + v2 + v3) / 108) * 240);
          const pct = Math.min(99.9, 45 + Math.pow((v1 + v2 + v3) / 108, 1.1) * 54.8).toFixed(2);
          return `${nmat} / 360 (${pct}%ile)`;
        },
        bottleneck: "Primary NMAT Strategy: Zero negative marking + severe penalty for unanswered items—complete 100% of every section and protect Q1–Q8 adaptive accuracy.",
        tiers: [
          { title: "NMIMS Mumbai Core Elite (~248+ / 360 Scaled)", target: "Target Sectional Scaled: LS 84+ • LR 82+ • QS 82+", pace: "Execution Pace: 46s/Q Language • 66s/Q LR • 86s/Q Quant", focus: "Lock early adaptive Q1–Q8 accuracy in NMAT without over-spending time." },
          { title: "NMIMS Mumbai Safe Call Zone (~235+ / 360 Scaled)", target: "Target Sectional Scaled: LS 78+ • LR 78+ • QS 79+", pace: "Execution Pace: 100% completion sweep in final 45 seconds of each section", focus: "Never leave questions blank when the strict sectional timer expires." },
          { title: "NMIMS Bangalore / Hyderabad / TAPMI (~220+ / 360 Scaled)", target: "Target Sectional Scaled: LS 74+ • LR 73+ • QS 73+", pace: "Execution Pace: Steady 66s/Q average across all 108 questions", focus: "Bank quick Vocabulary Analogies, Syllogisms & Arithmetic first." }
        ]
      },
      SNAP: {
        engineTitle: "SNAP SPEED SPRINT ENGINE (60 MARKS SCALE • +1 / -0.25)",
        cardTitle: "SNAP Scaled Score & SIBM / SCMHRD Forecaster",
        s1: { name: "General English Raw", max: 15, mins: "13 Mins" },
        s2: { name: "Analytical & Logical Reasoning Raw", max: 25, mins: "25 Mins" },
        s3: { name: "Quantitative, DI & DS Raw", max: 20, mins: "22 Mins" },
        totalLabel: "Projected SNAP Raw / Scaled Score",
        formatTotal: (v1, v2, v3) => {
          const tot = v1 + v2 + v3;
          const pct = Math.min(99.9, 50 + Math.pow(tot / 60, 0.9) * 49.8).toFixed(2);
          return `${tot} / 60 (${pct}%ile)`;
        },
        bottleneck: "Primary SNAP Speed Strategy: Strictly 60 seconds per question with -0.25 negative marking—skip time-sink DI sets and bank fast LR & Grammar first.",
        tiers: [
          { title: "99.2+ Percentile SIBM Pune Elite (~45.5+ / 60 Raw)", target: "Target Split: GE 12/15 • A-LR 20/25 • QA-DI 13.5/20", pace: "Execution Pace: 50s/Q GE & LR • 66s/Q QA-DI", focus: "Achieve 90%+ accuracy in the high-weightage 25-mark LR section." },
          { title: "98.5 Percentile SIBM Pune / SCMHRD Call (~42.5+ / 60 Raw)", target: "Target Split: GE 11/15 • A-LR 19/25 • QA-DI 12.5/20", pace: "Execution Pace: Zero 2-minute deadlocks; flag & move at 60s", focus: "Eliminate -0.25 careless guesses on unfamiliar vocabulary or tricky series." },
          { title: "95.0 Percentile SIIB / SIBM Bangalore (~38.0+ / 60 Raw)", target: "Target Split: GE 10/15 • A-LR 17/25 • QA-DI 11/20", pace: "Execution Pace: 46–48 clean attempts with >= 85% accuracy", focus: "Master Clocks, Calendars, Coding-Decoding & Ratio Arithmetic." }
        ]
      }
    }[mode];

    const init1 = Math.round(CFG.s1.max * avgRatio);
    const init2 = Math.round(CFG.s2.max * avgRatio);
    const init3 = Math.round(CFG.s3.max * avgRatio);

    let prepStage = `Stage 1: Complete 1 Full ${mode} Mock`;
    let stageBadge = "bg-slate-100 text-slate-700";
    if (hasMocks) {
      if (avgRatio >= 0.68 && avgAcc >= 80) { prepStage = `Tier 4: 99+ %ile ${mode} Elite Ready`; stageBadge = "bg-emerald-100 text-emerald-800 border-emerald-300"; }
      else if (avgRatio >= 0.52 && avgAcc >= 70) { prepStage = `Tier 3: Top Call ${mode} Contender`; stageBadge = "bg-indigo-100 text-indigo-800 border-indigo-300"; }
      else if (avgRatio >= 0.32) { prepStage = `Tier 2: ${mode} Pacing & Accuracy Build`; stageBadge = "bg-amber-100 text-amber-800 border-amber-300"; }
      else { prepStage = `Tier 1: ${mode} Foundation Calibration`; stageBadge = "bg-rose-100 text-rose-800 border-rose-300"; }
    }

    window.updateForecastSliders6 = function () {
      const v1 = parseInt(document.getElementById("fc-s1")?.value || init1, 10);
      const v2 = parseInt(document.getElementById("fc-s2")?.value || init2, 10);
      const v3 = parseInt(document.getElementById("fc-s3")?.value || init3, 10);
      const l1 = document.getElementById("fc-s1-lbl");
      const l2 = document.getElementById("fc-s2-lbl");
      const l3 = document.getElementById("fc-s3-lbl");
      const totEl = document.getElementById("fc-total-val");
      if (l1) l1.textContent = `${v1} / ${CFG.s1.max}`;
      if (l2) l2.textContent = `${v2} / ${CFG.s2.max}`;
      if (l3) l3.textContent = `${v3} / ${CFG.s3.max}`;
      if (totEl) totEl.textContent = CFG.formatTotal(v1, v2, v3);
    };

    const logRows = modeLogs.length
      ? modeLogs.map(h => `
          <tr class="border-t border-slate-200 dark:border-slate-800 text-xs">
            <td class="py-2.5 px-3 font-mono font-extrabold text-indigo-600">${h.serialId}</td>
            <td class="py-2.5 px-3 text-slate-500">${h.date || ""} ${h.time || ""}</td>
            <td class="py-2.5 px-3 font-bold">${h.blueprint}</td>
            <td class="py-2.5 px-3 font-extrabold text-emerald-600">${h.score} / ${h.maxScore}</td>
            <td class="py-2.5 px-3 font-bold">${h.accuracy}%</td>
            <td class="py-2.5 px-3 text-right">
              <button type="button" onclick="window.downloadOfficialMarksheet4('${h.serialId}')" class="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold cursor-pointer">PDF</button>
            </td>
          </tr>
        `).join("")
      : `<tr><td colspan="6" class="py-6 text-center text-xs text-slate-500"><strong>Action Required:</strong> Complete at least one <strong>Full-Length ${mode} Mock</strong> in Tab 4 to unlock live ${mode} Score &amp; Percentile Forecasting (short sectional drills are excluded so your composite prediction stays accurate).</td></tr>`;

    el.innerHTML = `
      <div class="max-w-7xl mx-auto my-4 space-y-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${CFG.engineTitle}</span>
                <h2 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">${CFG.cardTitle}</h2>
                <p class="text-[11px] text-slate-500 mt-0.5">Calculated strictly from <strong>${modeLogs.length} Full-Length ${mode} Mock(s)</strong></p>
              </div>
              <button type="button" onclick="window.syncAllModeHeadersAndTabs()"
                class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer shrink-0">
                &#8635; Sync ${mode} Mock
              </button>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
              <span class="font-bold text-slate-500">${mode} Preparedness Level:</span>
              <span class="px-2.5 py-1 rounded-full border font-extrabold text-[11px] ${stageBadge}">${prepStage}</span>
            </div>

            <div class="space-y-3 pt-1">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>${CFG.s1.name} (/${CFG.s1.max} &bull; ${CFG.s1.mins})</span><span id="fc-s1-lbl" class="text-indigo-600 font-extrabold">${init1} / ${CFG.s1.max}</span></div>
                <input id="fc-s1" type="range" min="0" max="${CFG.s1.max}" value="${init1}" oninput="window.updateForecastSliders6()" class="w-full accent-indigo-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>${CFG.s2.name} (/${CFG.s2.max} &bull; ${CFG.s2.mins})</span><span id="fc-s2-lbl" class="text-indigo-600 font-extrabold">${init2} / ${CFG.s2.max}</span></div>
                <input id="fc-s2" type="range" min="0" max="${CFG.s2.max}" value="${init2}" oninput="window.updateForecastSliders6()" class="w-full accent-indigo-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>${CFG.s3.name} (/${CFG.s3.max} &bull; ${CFG.s3.mins})</span><span id="fc-s3-lbl" class="text-indigo-600 font-extrabold">${init3} / ${CFG.s3.max}</span></div>
                <input id="fc-s3" type="range" min="0" max="${CFG.s3.max}" value="${init3}" oninput="window.updateForecastSliders6()" class="w-full accent-indigo-600">
              </div>
            </div>

            <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-slate-700 dark:text-slate-300">${CFG.totalLabel}:</span>
                <strong id="fc-total-val" class="text-sm font-extrabold text-indigo-700 dark:text-indigo-300">${CFG.formatTotal(init1, init2, init3)}</strong>
              </div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">${CFG.bottleneck}</p>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-3">
            ${CFG.tiers.map(t => `
              <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-1">
                <div class="text-sm font-extrabold text-slate-900 dark:text-white">${t.title}</div>
                <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400">${t.target}</div>
                <div class="text-xs text-slate-600 dark:text-slate-300">${t.pace}</div>
                <div class="text-[11px] text-slate-500">Next Drill Focus: ${t.focus}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-sm font-extrabold text-slate-900 dark:text-white">${mode} Full-Length Mock Ledger (${modeLogs.length} Full Mocks Synced)</h3>
              <p class="text-[11px] text-slate-500">Only Full-Length ${mode} Mocks are recorded here to evaluate composite readiness.</p>
            </div>
            <button type="button" onclick="window.clearModeMockHistory('${mode}')"
              class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-extrabold cursor-pointer">&#128465; Clear ${mode} Log</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-50 dark:bg-slate-950">
                  <th class="py-2 px-3">Serial Mock ID</th>
                  <th class="py-2 px-3">Date &amp; Time</th>
                  <th class="py-2 px-3">${mode} Full Blueprint</th>
                  <th class="py-2 px-3">Score</th>
                  <th class="py-2 px-3">Accuracy</th>
                  <th class="py-2 px-3 text-right">Marksheet</th>
                </tr>
              </thead>
              <tbody>${logRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  };

  window.renderTab6 = window.renderAuthoritativeTab6;
  window.renderScoreForecaster6 = window.renderAuthoritativeTab6;

  const origSelectTab = window.selectUnifiedTab;
  window.selectUnifiedTab = function (tab) {
    if (typeof origSelectTab === "function") origSelectTab(tab);
    const tNum = parseInt(String(tab).replace(/\D/g, ""), 10);
    const ws = document.getElementById("main-workspace");
    if (tNum === 4) {
      setTimeout(() => window.patchTab4LedgerToActiveMode(), 150);
    } else if (tNum === 6 && ws) {
      window.renderAuthoritativeTab6(ws);
    }
    window.syncAllModeHeadersAndTabs();
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = btn.id || "";
    const txt = (btn.textContent || "").trim();
    if (id === "mode-pill-CAT" || txt.includes("CAT Standard")) {
      window._ACTIVE_CAT_MODE = "CAT";
      window._SELECTED_MOCK_BP = 0;
      setTimeout(() => window.syncAllModeHeadersAndTabs(), 30);
    } else if (id === "mode-pill-XAT" || txt.includes("XAT & Decision Making")) {
      window._ACTIVE_CAT_MODE = "XAT";
      window._SELECTED_MOCK_BP = 0;
      setTimeout(() => window.syncAllModeHeadersAndTabs(), 30);
    } else if (id === "mode-pill-NMAT" || txt.startsWith("NMAT Adaptive")) {
      window._ACTIVE_CAT_MODE = "NMAT";
      window._SELECTED_MOCK_BP = 0;
      setTimeout(() => window.syncAllModeHeadersAndTabs(), 30);
    } else if (id === "mode-pill-SNAP" || txt.startsWith("SNAP Speed Sprint")) {
      window._ACTIVE_CAT_MODE = "SNAP";
      window._SELECTED_MOCK_BP = 0;
      setTimeout(() => window.syncAllModeHeadersAndTabs(), 30);
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      window.ensureFourModePills();
      window.syncAllModeHeadersAndTabs();
      window.patchTab4LedgerToActiveMode();
    }, 250);
  });
})();