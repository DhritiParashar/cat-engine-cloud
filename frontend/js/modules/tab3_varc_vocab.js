window.renderTab3VarcVocab = function () {
  const container = document.getElementById("tab-content") || document.getElementById("main-tab-container");
  if (!container || !window.CAT_OFFICIAL_BANK) return;
  const { readingComprehension, vaTita } = window.CAT_OFFICIAL_BANK.varc;

  const rcHtml = readingComprehension.map((rc) => `
    <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-4">
      <div class="flex justify-between items-center">
        <span class="px-2.5 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-800">${rc.subtype}</span>
        <span class="text-xs font-medium text-slate-500">${rc.difficulty}</span>
      </div>
      <p class="text-sm leading-relaxed p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">${rc.passage}</p>
      ${rc.questions.map((rq, qIdx) => `
        <div class="pt-3 border-t border-slate-200 dark:border-slate-700 space-y-2">
          <p class="text-sm font-bold">Q${qIdx + 1}. ${rq.prompt}</p>
          ${rq.options.map((opt, oIdx) => `
            <label class="flex items-start gap-2 text-sm py-1 cursor-pointer">
              <input type="radio" name="cat_rc_${rq.qid}" value="${oIdx}" class="mt-1 accent-indigo-600">
              <span><strong>(${String.fromCharCode(65 + oIdx)})</strong> ${opt}</span>
            </label>
          `).join("")}
          <button onclick="checkCatRc('${rq.qid}', ${rq.correct})" class="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold">Verify (+3 / -1)</button>
          <span id="res_${rq.qid}" class="ml-2 text-xs font-bold"></span>
          <div id="exp_${rq.qid}" class="hidden p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-900 dark:text-emerald-200">${rq.explanation}</div>
        </div>
      `).join("")}
    </div>
  `).join("");

  const vaHtml = vaTita.map((q, idx) => `
    <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-3">
      <div class="flex justify-between items-center">
        <span class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-800">${q.subtype}</span>
        <span class="text-xs font-medium text-slate-500">${q.difficulty}</span>
      </div>
      ${q.sentences ? `<div class="space-y-1.5 text-sm bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-lg">${q.sentences.map(s => `<p>${s}</p>`).join("")}</div>` : `<p class="text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-lg">${q.stem}</p>`}
      ${q.tita ? `
        <div class="flex items-center gap-3">
          <input id="tita_${q.id}" type="text" placeholder="Enter TITA digits..." class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-mono w-44">
          <button onclick="checkCatVaTita(${idx}, '${q.id}')" class="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold">Submit TITA (+3 / 0)</button>
          <span id="res_${q.id}" class="text-xs font-bold"></span>
        </div>
      ` : `
        <div class="space-y-1.5">
          ${q.options.map((opt, oIdx) => `
            <label class="flex items-start gap-2 text-sm py-1 cursor-pointer">
              <input type="radio" name="cat_va_${q.id}" value="${oIdx}" class="mt-1 accent-indigo-600">
              <span><strong>(${String.fromCharCode(65 + oIdx)})</strong> ${opt}</span>
            </label>
          `).join("")}
        </div>
        <div class="flex items-center gap-3">
          <button onclick="checkCatVaMcq(${idx}, '${q.id}')" class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold">Verify Summary (+3 / -1)</button>
          <span id="res_${q.id}" class="text-xs font-bold"></span>
        </div>
      `}
      <div id="exp_${q.id}" class="hidden p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-900 dark:text-emerald-200">${q.explanation}</div>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="space-y-8">
      <div class="p-4 rounded-xl bg-indigo-950 text-white">
        <h2 class="text-xl font-bold">IIM CAT 2026 — VARC Studio (Academic RC + TITA Parajumbles &amp; Odd-One-Out)</h2>
        <p class="text-xs text-slate-300 mt-1">Official CAT VARC architecture: 24 Questions • 40 Minutes • +3 / -1 on MCQs and +3 / 0 on Type-In-The-Answer (TITA) items.</p>
      </div>
      <section class="space-y-4"><h3 class="text-lg font-bold">1. Reading Comprehension (Inference &amp; Critical Application)</h3>${rcHtml}</section>
      <section class="space-y-4"><h3 class="text-lg font-bold">2. Verbal Ability (TITA Parajumbles, Odd-One-Out &amp; Para-Summary)</h3>${vaHtml}</section>
    </div>
  `;
};

window.checkCatRc = function (qid, correct) {
  const sel = document.querySelector(`input[name="cat_rc_${qid}"]:checked`);
  const res = document.getElementById(`res_${qid}`);
  const exp = document.getElementById(`exp_${qid}`);
  if (!sel) { res.textContent = "Choose an option."; return; }
  const ok = parseInt(sel.value, 10) === correct;
  res.textContent = ok ? "+3 Marks (Correct)" : "-1 Mark (Incorrect)";
  res.className = ok ? "ml-2 text-xs font-bold text-emerald-600" : "ml-2 text-xs font-bold text-rose-600";
  exp.classList.remove("hidden");
};

window.checkCatVaTita = function (idx, id) {
  const q = window.CAT_OFFICIAL_BANK.varc.vaTita[idx];
  const val = (document.getElementById(`tita_${id}`).value || "").trim();
  const res = document.getElementById(`res_${id}`);
  const exp = document.getElementById(`exp_${id}`);
  if (!val) { res.textContent = "Type your TITA response first."; return; }
  const ok = val === q.answer;
  res.textContent = ok ? `+3 Marks (Exact TITA Match: ${q.answer})` : `0 Marks (No Negative Penalty — Correct TITA: ${q.answer})`;
  res.className = ok ? "text-xs font-bold text-emerald-600" : "text-xs font-bold text-amber-600";
  exp.classList.remove("hidden");
};

window.checkCatVaMcq = function (idx, id) {
  const q = window.CAT_OFFICIAL_BANK.varc.vaTita[idx];
  const sel = document.querySelector(`input[name="cat_va_${id}"]:checked`);
  const res = document.getElementById(`res_${id}`);
  const exp = document.getElementById(`exp_${id}`);
  if (!sel) { res.textContent = "Select an option."; return; }
  const ok = parseInt(sel.value, 10) === q.correct;
  res.textContent = ok ? "+3 Marks (Correct)" : "-1 Mark (Incorrect)";
  res.className = ok ? "text-xs font-bold text-emerald-600" : "text-xs font-bold text-rose-600";
  exp.classList.remove("hidden");
};