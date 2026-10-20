const drive = (id) => `https://drive.google.com/drive/folders/${id}?usp=sharing`;

// Shared collections (same ones used on the doc pages / buttons)
export const FULL_NOTES_LINK = drive("1JxYHf-kzTcz9Fm6TW1iDBc67F5ZtYfVh");
export const HANDBOOKS_LINK = drive("1CIl-virMlTxu2B08Njhh2I_Ki8kDSlht");
export const SHORT_NOTES_LINK = drive("10eG0ZpnNUnzHAWimrTThoiFt9uo9cqth");

export const gateResources = [
  {
    id: 1,
    name: "Digital Logic",
    icon: "🔴",
    type: "subject",
    notes: drive("1NhKgC-SbxDz1eZ3zPrUqhXYjiaZnnjNK"),
    lectures: drive("10MiGcmgdyNDYOc8mNkfekXSXX1Evydwj"),
  },

  {
    id: 2,
    name: "Theory of Computation",
    shortName: "TOC",
    icon: "📘",
    type: "subject",
    notes: drive("14Tm1yiz9QDWfFd6OZ5s_Q48QGIeAlT0k"),
    lectures: drive("14Tm1yiz9QDWfFd6OZ5s_Q48QGIeAlT0k"), // same as notes, please verify
  },

  {
    id: 3,
    name: "Algorithms",
    icon: "✨",
    type: "subject",
    notes: drive("1QRc8nCAinXnHsoKBOjCe8bkuFEugG5W7"),
    lectures: drive("1ErYSOqW3lus3XPAvkvev1MRi3ixgg3Gy"),
  },

  {
    id: 4,
    name: "Discrete Mathematics",
    icon: "🧮",
    type: "subject",
    notes: drive("1be25C9EULe3kiOV_3D0O-939Bxuq6YoD"),
    lectures: drive("1_Bjc88Io_DXMYZAW7OKqrp-nQHZxQ-LA"),
  },

  {
    id: 5,
    name: "Computer Networks",
    shortName: "CN",
    icon: "🌐",
    type: "subject",
    notes: drive("1-3T9Cmfxewqn0LlLJ0yvQXvGb5hZMols"),
    lectures: drive("1Ii3OdjmBN7dWgKhSfUyMU8d-TswRdjLZ"),
  },

  {
    id: 6,
    name: "C Programming",
    shortName: "C",
    icon: "🌀",
    type: "subject",
    notes: drive("1YQVUoIiLYmaKdoN5z_JasQM53IfBhNdb"), // same as Engg Maths notes, please verify
    lectures: drive("1zYuQzuON8qZekIG-vtF1UD5Ac5TNSGFA"),
  },

  {
    id: 7,
    name: "Data Structure & Programming",
    shortName: "DSA",
    icon: "🔥",
    type: "subject",
    notes: drive("1fOr55oHy95QQQ6pCbPLtsBznrK2UJN9k"),
    lectures: drive("1EruO6Hq-daxiWLtP0ZG2YJ67DcIpT1R-"),
  },

  {
    id: 8,
    name: "Operating System",
    shortName: "OS",
    icon: "💻",
    type: "subject",
    notes: drive("1UY2Kt7C1-_EJY-p9EgZWhMJyW074TFh9"),
    lectures: drive("1aLPNPt6-buL6EwRdIVjcujuNVGaFaTas"),
  },

  {
    id: 9,
    name: "Database Management System",
    shortName: "DBMS",
    icon: "🗄️",
    type: "subject",
    notes: drive("1--T9LfR1i_HJK2YiM0B7HKueSDGWVaUa"),
    lectures: drive("1Z6OtHcLTz4wgw28S1m6_-xx5Mk5MW5k1"),
  },

  {
    id: 10,
    name: "Computer Organization & Architecture",
    shortName: "COA",
    icon: "🧠",
    type: "subject",
    notes: drive("1p4lIos7qFLJ3hbfCXtfbG-khh6x1sc1-"),
    lectures: drive("1hOg_NlxTa_H_-9QxubAaFuMHlIZKk5ml"),
  },

  {
    id: 11,
    name: "Compiler Design",
    shortName: "Compiler",
    icon: "⚡",
    type: "subject",
    notes: drive("1ciwLhxUEr1xHqppN2opc0pXuSevW4xKG"),
    lectures: drive("1ARk2aGFB3JaVCv_QbT-v8J4IXF-fUHEJ"),
  },

  {
    id: 12,
    name: "Reasoning & Aptitude",
    icon: "📍",
    type: "category",

    sections: [
      {
        id: "reasoning",
        name: "Reasoning",
        icon: "🧠",
        type: "subject",
        notes: drive("1SVtpRIOHTVmG2RpPW_4cDceeRj5okFKb"),
        lectures: drive("1CW2tL-ZeF7xL4mox4dYnOklYCJ-JmGGR"),
      },

      {
        id: "quantitative",
        name: "Quantitative Aptitude",
        icon: "📊",
        type: "subject",
        notes: drive("1sKtQpP4qGzSrA-y1iZPH-jKrst8WDwHd"),
        lectures: drive("1-Tf-da2BtG_WlaxzN84IyHTpE4N3xlVJ"),
      },

      // General Aptitude has two separate link sets (spatial + verbal),
      // so it is split into two sections to work with your existing
      // notes/lectures fields without any UI change.
      {
        id: "spatial-aptitude",
        name: "General Aptitude – Spatial",
        icon: "🎯",
        type: "subject",
        notes: drive("14XyyesPYDKShAbI1n68Lz1sRq9G0Exb-"),
        lectures: drive("1cyfY2K_16U-DY6y39KaP9DVzpRWy5Q4h"),
      },

      {
        id: "verbal-aptitude",
        name: "General Aptitude – Verbal",
        icon: "🎯",
        type: "subject",
        notes: drive("1fDK9gjF_xCRwgWyNnsETT-39XtapJbtL"),
        lectures: drive("1x6SbR0iaxQ5i0EE6tpjYtTwoya0c0t3g"),
      },
    ],
  },

  // Engineering Mathematics is now a single subject (no sub-sections),
  // with an extra lecture link for the GATE DA batch.
  {
    id: 13,
    name: "Engineering Mathematics",
    icon: "🧮",
    type: "subject",
    notes: drive("1YQVUoIiLYmaKdoN5z_JasQM53IfBhNdb"), // same as C notes, please verify
    lectures: drive("1zPnmP2KwLLOuh_p2SamlqUgPUDg66tF7"),
    lecturesGateDA: drive("1YwgY9_PU6JYo3fP9Rtq4TY8ZbbgbrZoe"),
  },
];