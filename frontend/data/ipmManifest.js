window.IPM_MANIFEST = {
  brand: "GOALisB CAT & MBA Master Engine",
  tagline: "Unified Prep for CAT 2026, XAT, NMAT, SNAP & Top IIM / FMS Admissions",

  examModes: {
    ALL_IIM_MASTER: {
      id: "ALL_IIM_MASTER",
      label: "CAT 2026 Standard (66 Qs)",
      badge: "IIM A/B/C/L/K/I/M",
      campuses: [
        "IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Lucknow",
        "IIM Kozhikode", "IIM Indore", "IIM Mumbai", "FMS Delhi"
      ],
      programTypes: ["2-Yr MBA / PGP", "PGP-BA", "PGDM"],
      totalQuestions: 66,
      durationMinutes: 120,
      sectionalTimeLock: true,
      marking: { mcqCorrect: 3, mcqWrong: -1, saCorrect: 3, saWrong: 0 },
      sections: [
        { id: "varc", name: "Verbal Ability & Reading Comprehension (VARC)", questions: 24, minutes: 40, type: "SA_AND_MCQ" },
        { id: "dilr", name: "Data Interpretation & Logical Reasoning (DILR)", questions: 20, minutes: 40, type: "SA_AND_MCQ" },
        { id: "quant_core", name: "Quantitative Aptitude (QA — Arithmetic, Algebra, Geometry)", questions: 22, minutes: 40, type: "SA_AND_MCQ" }
      ],
      selectionWeights: { test: 55, piWat: 30, academics10_12: 15 },
      keyFocus: "Strict 40-min sectional timers, +3/-1 MCQ, +3/0 TITA, 4-5 Q DILR sets & 99+ percentile accuracy."
    },
    XAT_2026: {
      id: "XAT_2026",
      label: "XAT 2026 (XLRI)",
      badge: "75 Qs • DM",
      campuses: ["XLRI Jamshedpur", "XLRI Delhi-NCR", "XIMB", "IMT Ghaziabad"],
      programTypes: ["PGDM-BM", "PGDM-HRM"],
      totalQuestions: 75,
      durationMinutes: 180,
      sectionalTimeLock: false,
      marking: { mcqCorrect: 1, mcqWrong: -0.25, saCorrect: 1, saWrong: 0 },
      sections: [
        { id: "varc", name: "Verbal & Logical Ability (VALR)", questions: 26, minutes: 60, type: "MCQ" },
        { id: "dilr", name: "Decision Making (DM) & Ethical Dilemmas", questions: 21, minutes: 55, type: "MCQ" },
        { id: "quant_core", name: "Quantitative Ability & Data Interpretation (QADI)", questions: 28, minutes: 65, type: "MCQ" }
      ],
      selectionWeights: { test: 60, piWat: 30, academics10_12: 10 },
      keyFocus: "Business ethics Decision Making caselets, critical reasoning & -0.10 penalty beyond 8 unattempted Qs."
    },
    NMAT_SNAP: {
      id: "NMAT_SNAP",
      label: "NMAT & SNAP Speed Track",
      badge: "NMIMS / SIBM",
      campuses: ["NMIMS Mumbai", "SIBM Pune", "SCMHRD Pune"],
      programTypes: ["MBA Core", "MBA HR / Analytics"],
      totalQuestions: 60,
      durationMinutes: 60,
      sectionalTimeLock: false,
      marking: { mcqCorrect: 1, mcqWrong: -0.25, saCorrect: 1, saWrong: 0 },
      sections: [
        { id: "varc", name: "General English & Verbal Reasoning", questions: 15, minutes: 15, type: "MCQ" },
        { id: "dilr", name: "Analytical & Logical Reasoning", questions: 25, minutes: 25, type: "MCQ" },
        { id: "quant_core", name: "Quantitative, DI & Data Sufficiency", questions: 20, minutes: 20, type: "MCQ" }
      ],
      selectionWeights: { test: 50, piWat: 40, academics10_12: 10 },
      keyFocus: "1-question-per-minute sprint speed, Data Sufficiency & high-accuracy arithmetic."
    }
  },

  curriculumPillars: [
    {
      id: "quant_core",
      title: "1. CAT Quantitative Aptitude (Arithmetic, Algebra & Geometry)",
      relevance: "CAT QA (22 Qs), XAT QADI, NMAT & SNAP",
      topics: ["Percentages, Profit/Loss & SI/CI", "Ratios, Mixtures & Alligations", "Time, Speed, Distance & Races", "Time & Work, Pipes & Cisterns", "Number Systems & Remainders", "Quadratic Equations, Functions & Inequalities", "Logarithms, Progressions & PnC/Probability", "Triangles, Circles, Mensuration & Coordinate Geometry"]
    },
    {
      id: "dilr",
      title: "2. CAT DILR & XAT Decision Making Sets",
      relevance: "CAT DILR (4-5 Sets / 20 Qs) & XAT DM",
      topics: ["Quant-Based DI & Maxima-Minima", "Games, Tournaments & Knockouts", "Venn Diagrams (3 & 4 Sets)", "Routes, Networks & Scheduling", "Linear, Circular & Grid Arrangements", "XAT Ethical & Managerial Decision Making"]
    },
    {
      id: "varc",
      title: "3. CAT VARC (4 RC Passages + 8 VA TITA)",
      relevance: "CAT VARC (24 Qs), XAT VALR & OMETs",
      topics: ["Philosophy, Sociology & Science RCs", "Economics, Policy & Literary RCs", "Para-Jumbles (TITA) & Odd-One-Out (TITA)", "Para-Summary & Para-Completion", "Critical Reasoning: Inference, Assumption & Strengthen/Weaken"]
    }
  ]
};