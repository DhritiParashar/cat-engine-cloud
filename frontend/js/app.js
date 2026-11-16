window.switchTab = function (tabId) {
  window.IPM_STATE.activeTab = tabId;
  document.querySelectorAll("[data-tab-btn]").forEach(btn => {
    const active = btn.getAttribute("data-tab-btn") === tabId;
    btn.className = active
      ? "px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow"
      : "px-3.5 py-2 rounded-xl bg-slate-900 text-slate-300 hover:bg-slate-800 text-xs font-semibold border border-slate-800";
  });
  window.renderActiveTab();
};

window.renderActiveTab = function () {
  const el = document.getElementById("tab-content");
  if (!el) return;
  const tab = window.IPM_STATE.activeTab;
  if (tab === "tab1") window.renderTab1(el);
  else if (tab === "tab2") window.renderTab2(el);
  else if (tab === "tab3") window.renderTab3(el);
  else if (tab === "tab4") window.renderTab4(el);
  else if (tab === "tab5") window.renderTab5(el);
  else if (tab === "tab6") window.renderScoreForecaster6(el);
  else if (tab === "tab7") window.renderTab7(el);
  else if (tab === "tab8") window.renderTab8(el);
  else if (tab === "tab9") window.renderTab9(el);
};

document.addEventListener("DOMContentLoaded", () => {
  window.renderExamSwitcher();
  window.switchTab("tab1");
});
// RESILIENT_TAB_ROUTER: Guarantees Tabs 1..6 always switch & render cleanly
(function () {
  const origSwitch = window.switchTab;
  window.switchTab = function (tabId) {
    try {
      if (typeof origSwitch === "function") origSwitch(tabId);
    } catch (err) {
      console.error("Tab switch error recovered:", tabId, err);
      window.IPM_STATE = window.IPM_STATE || {};
      window.IPM_STATE.activeTab = tabId;
      document.querySelectorAll("[data-tab-btn]").forEach(btn => {
        const active = btn.getAttribute("data-tab-btn") === tabId;
        btn.className = active
          ? "px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow"
          : "px-3.5 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 text-xs font-semibold hover:border-indigo-500";
      });
      const el = document.getElementById("tab-content");
      if (el && tabId === "tab3" && typeof window.renderTab3 === "function") window.renderTab3(el);
      if (el && tabId === "tab4" && typeof window.renderTab4 === "function") window.renderTab4(el);
      if (el && tabId === "tab6" && typeof window.renderTab6 === "function") window.renderTab6(el);
      if (el && tabId === "tab8" && typeof window.renderTab8 === "function") window.renderTab8(el);
    }
  };
})();

// UNIFIED_CAT_TAB_ROUTER: Ensures Tabs 1, 2, 3, 4 (tab8), 5 (tab4) & 6 (tab6) always switch cleanly
window.switchTab = function (tabId) {
  window.IPM_STATE = window.IPM_STATE || {};
  window.IPM_STATE.activeTab = tabId;

  document.querySelectorAll("[data-tab-btn]").forEach(btn => {
    const isActive = btn.getAttribute("data-tab-btn") === tabId;
    btn.className = isActive
      ? "px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow cursor-pointer"
      : "px-3.5 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 text-xs font-semibold hover:border-indigo-500 cursor-pointer";
  });

  const el = document.getElementById("tab-content");
  if (!el) return;

  try {
    if (tabId === "tab1" && typeof window.renderTab1 === "function") return window.renderTab1(el);
    if (tabId === "tab2" && typeof window.renderTab2 === "function") return window.renderTab2(el);
    if (tabId === "tab3" && typeof window.renderTab3VarcVocab === "function") return window.renderTab3VarcVocab(el);
    if (tabId === "tab8" && typeof window.renderTab8 === "function") return window.renderTab8(el);
    if (tabId === "tab4" && typeof window.renderTab4 === "function") return window.renderTab4(el);
    if (tabId === "tab6" && typeof window.renderTab6 === "function") return window.renderTab6(el);
  } catch (err) {
    console.error("Error rendering tab " + tabId + ":", err);
    el.innerHTML = `<div class="p-6 rounded-2xl bg-slate-900 border border-rose-500/40 text-xs text-rose-200">Recovered tab view (${tabId}): ${err.message}</div>`;
  }
};
window.renderActiveTab = function () {
  const cur = (window.IPM_STATE && window.IPM_STATE.activeTab) || "tab1";
  window.switchTab(cur);
};

// _MODE_LOCKED_TAB6: Guarantee Tab 6 & top header readiness always track active CAT / XAT / NMAT mode
(function () {
  const origSelect = window.selectUnifiedTab;
  window.selectUnifiedTab = function (tab) {
    if (typeof origSelect === "function") origSelect(tab);
    const tNum = parseInt(String(tab).replace(/\D/g, ""), 10);
    const ws = document.getElementById("main-workspace");
    if (tNum === 6 && ws && typeof window.renderScoreForecaster6 === "function") {
      window.renderScoreForecaster6(ws);
    }
    if (typeof window.syncPreparationReadinessHeader === "function") {
      window.syncPreparationReadinessHeader();
    }
  };
})();