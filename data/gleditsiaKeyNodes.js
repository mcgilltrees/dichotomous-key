// Binary morphological key for Gleditsia species on McGill campus
// ---------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const GLEDITSIA_KEY_NODES = {
  // 1. Thorny vs nearly thornless trunks
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Presence of stout thorns on trunk and branches.",
    options: [
      {
        id: "1-honeylocust",
        label:
          "Thorns present: stout, sharply pointed, usually branched; trunk may have 3-branched thorns (sometimes very large, up to 20 cm)",
        next: "species-Gleditsia-triacanthos"
      },
      {
        id: "1-thornless-or-reduced",
        label:
          "Thorns absent or extremely reduced; trunk smooth or with only tiny spur-like bumps",
        next: "gleditsia-2"
      }
    ]
  },

  // 2. Thornless Honeylocust vs Water Locust
  "gleditsia-2": {
    id: "gleditsia-2",
    type: "question",
    questionNumber: 2,
    text: "Leaf form and pods (mixed bipinnate/pinnate, long twisted pods vs strictly pinnate with shorter pods).",
    options: [
      {
        id: "2-thornless-honeylocust",
        label:
          "Leaves bipinnately compound or mixed (some singly-, some twice-pinnate); pods long and twisted; common street tree cultivar",
        next: "species-Gleditsia-triacanthos-inermis"
      },
      {
        id: "2-water-locust",
        label:
          "Leaves always pinnately compound; pods shorter and less twisted; usually growing in wet lowlands (if present)",
        next: "species-Gleditsia-aquatica"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Gleditsia-triacanthos": {
    id: "species-Gleditsia-triacanthos",
    type: "result",
    level: "species",
    name: "Gleditsia triacanthos",
    latinName: "Gleditsia triacanthos (Honeylocust)",
    notes:
      "Wild-type Honeylocust with stout, often branched thorns (sometimes very large) on trunk and branches; compound leaves and long pods."
  },
  "species-Gleditsia-triacanthos-inermis": {
    id: "species-Gleditsia-triacanthos-inermis",
    type: "result",
    level: "species",
    name: "Gleditsia triacanthos var. inermis",
    latinName: "Gleditsia triacanthos var. inermis (Thornless Honeylocust)",
    notes:
      "Thornless or nearly thornless Honeylocust with bipinnate or mixed leaf forms and long, twisted pods; widely planted as a street tree."
  },
  "species-Gleditsia-aquatica": {
    id: "species-Gleditsia-aquatica",
    type: "result",
    level: "species",
    name: "Gleditsia aquatica",
    latinName: "Gleditsia aquatica (Water Locust)",
    notes:
      "Tree of wet lowlands with strictly pinnate leaves and shorter, less twisted pods compared to Honeylocust; present where habitats allow."
  }
};

export default GLEDITSIA_KEY_NODES;


