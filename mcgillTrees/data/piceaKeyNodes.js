// Binary morphological key for Picea species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const PICEA_KEY_NODES = {
  // 1. Very large cones vs smaller cones
  root: {
    id: "root",
    type: "question",
    text: "1. Look at the cones and overall branch form.",
    options: [
      {
        id: "1-norway-spruce",
        label:
          "Cones very large (10–20 cm), pendulous; branchlets drooping; needles 1–2 cm, glossy; twigs orange-brown",
        next: "species-Picea-abies"
      },
      {
        id: "1-smaller-cones",
        label: "Cones smaller (<10 cm)",
        next: "picea-2"
      }
    ]
  },

  // 2. Bluish/glaucous vs green needles
  "picea-2": {
    id: "picea-2",
    type: "question",
    text: "2. What colour are the needles overall?",
    options: [
      {
        id: "2-colorado-blue-spruce",
        label:
          "Needles bluish or glaucous; stiff and sharply pointed; tree pyramidal with heavy horizontal branches",
        next: "species-Picea-pungens"
      },
      {
        id: "2-green-needles",
        label: "Needles green, not glaucous",
        next: "picea-3"
      }
    ]
  },

  // 3. Black vs other green spruces
  "picea-3": {
    id: "picea-3",
    type: "question",
    text:
      "3. Needle length, cone size, and crown shape (narrow bog spruce vs broader forms).",
    options: [
      {
        id: "3-black-spruce",
        label:
          "Needles short (1–1.5 cm), very stiff; cones small (2–4 cm), nearly round; crown narrow; common in boggy soils",
        next: "species-Picea-mariana"
      },
      {
        id: "3-longer-needles",
        label:
          "Needles longer (1.5–2.5 cm); cones 4–6 cm; crown conical but broader",
        next: "picea-4"
      }
    ]
  },

  // 4. White Spruce vs Serbian Spruce
  "picea-4": {
    id: "picea-4",
    type: "question",
    text:
      "4. Cone shape and subtle needle colour/branch attitude (White vs Serbian spruce).",
    options: [
      {
        id: "4-white-spruce",
        label:
          "Cones cylindrical, 4–6 cm; needles 1–2.5 cm, light blue-green; twigs hairless; buds brown and resinous",
        next: "species-Picea-glauca"
      },
      {
        id: "4-serbian-spruce",
        label:
          "Cones slender and pointed, 5–7 cm; needles 1–2 cm, two-toned (dark green above, silver below); branches sweeping upward",
        next: "species-Picea-omorika"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Picea-abies": {
    id: "species-Picea-abies",
    type: "result",
    level: "species",
    name: "Picea abies",
    latinName: "Picea abies (Norway Spruce)",
    notes:
      "Very large, pendulous cones (10–20 cm) with drooping branchlets; glossy needles on orange-brown twigs. Commonly planted ornamental spruce."
  },
  "species-Picea-pungens": {
    id: "species-Picea-pungens",
    type: "result",
    level: "species",
    name: "Picea pungens",
    latinName: "Picea pungens (Colorado Blue Spruce)",
    notes:
      "Bluish to glaucous, very stiff and sharp needles; strong pyramidal form with heavy horizontal branches; widely used as a blue ornamental spruce."
  },
  "species-Picea-mariana": {
    id: "species-Picea-mariana",
    type: "result",
    level: "species",
    name: "Picea mariana",
    latinName: "Picea mariana (Black Spruce)",
    notes:
      "Short (1–1.5 cm), stiff needles and small, nearly round cones (2–4 cm); narrow, spire-like crown typical of bogs and wet soils."
  },
  "species-Picea-glauca": {
    id: "species-Picea-glauca",
    type: "result",
    level: "species",
    name: "Picea glauca",
    latinName: "Picea glauca (White Spruce)",
    notes:
      "Light blue-green needles (1–2.5 cm) on hairless twigs; cylindrical cones 4–6 cm; buds brown and resinous with characteristic spruce aroma."
  },
  "species-Picea-omorika": {
    id: "species-Picea-omorika",
    type: "result",
    level: "species",
    name: "Picea omorika",
    latinName: "Picea omorika (Serbian Spruce)",
    notes:
      "Two-toned needles (dark green above, silvery below) on upward-sweeping branches; slender, pointed cones (5–7 cm). Often planted as an ornamental if present."
  }
};

export default PICEA_KEY_NODES;


