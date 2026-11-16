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

// Universal Independent Left & Right Scroll Enforcer across Tabs 1, 2 & 3
window.applySplitPaneScroll = function () {
  // Skip Tabs 4, 5, 6 (Mock Simulator, Trap Doctor, Forecaster)
  const activeTabBtn = Array.from(document.querySelectorAll("button")).find(b =>
    ((b.className || "").includes("bg-indigo-600") || b.classList.contains("active")) && /^[1-6]\./.test((b.textContent || "").trim())
  );
  const tabNum = activeTabBtn ? parseInt((activeTabBtn.textContent || "").trim()[0], 10) : 1;
  if (tabNum > 3) return;

  const roots = [document.getElementById("main-workspace"), document.getElementById("tab-content")].filter(Boolean);
  roots.forEach(root => {
    const candidates = root.querySelectorAll("div");
    candidates.forEach(container => {
      if (container.children.length !== 2) return;
      const cls = container.className || "";
      const isTwoColLayout =
        cls.includes("lg:grid-cols-") ||
        cls.includes("md:grid-cols-") ||
        cls.includes("lg:flex-row") ||
        cls.includes("md:flex-row");
      if (!isTwoColLayout) return;

      const left = container.children[0];
      const right = container.children[1];
      // Verify left looks like a chapter/module list and right is the study workspace
      const hasChapterHeading = (left.textContent || "").includes("MODULES") || (left.textContent || "").includes("CHAPTERS") || left.querySelectorAll("button, [onclick]").length >= 3;
      const hasStudyPanel = (right.textContent || "").includes("Refresher") || (right.textContent || "").includes("OVERVIEW") || (right.textContent || "").includes("Drills") || right.innerHTML.length > 600;
      if (hasChapterHeading && hasStudyPanel) {
        container.classList.add("split-pane-layout");
        left.classList.add("split-pane-left", "pane-scroll");
        right.classList.add("split-pane-right", "pane-scroll");
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const leftCard = e.target.closest(".split-pane-left button, .split-pane-left [onclick]");
  if (leftCard) {
    setTimeout(() => {
      const rightPane = document.querySelector("#main-workspace .split-pane-right");
      if (rightPane) rightPane.scrollTop = 0;
    }, 30);
  }
});

const _splitObs = new MutationObserver(() => {
  if (typeof window.applySplitPaneScroll === "function") window.applySplitPaneScroll();
});
window.addEventListener("DOMContentLoaded", () => {
  const ws = document.getElementById("main-workspace");
  if (ws) _splitObs.observe(ws, { childList: true, subtree: true });
  setTimeout(() => window.applySplitPaneScroll(), 200);
});