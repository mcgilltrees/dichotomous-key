// Binary morphological key for Catalpa species on McGill campus
// -------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const CATALPA_KEY_NODES = {
  // 1. Northern vs Southern catalpa
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Leaf size/texture and overall tree size.",
    options: [
      {
        id: "1-northern-catalpa",
        label:
          "Leaves enormous (20–30+ cm), broadly heart-shaped; underside soft and somewhat velvety; seed pods very long (20–45 cm); tree large (15–25 m)",
        next: "species-Catalpa-speciosa"
      },
      {
        id: "1-southern-catalpa",
        label:
          "Leaves smaller (10–20 cm), thinner; underside smoother; seed pods shorter (20–30 cm); tree smaller (10–15 m)",
        next: "species-Catalpa-bignonioides"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Catalpa-speciosa": {
    id: "species-Catalpa-speciosa",
    type: "result",
    level: "species",
    name: "Catalpa speciosa",
    latinName: "Catalpa speciosa (Northern Catalpa)",
    notes:
      "Large tree (15–25 m) with enormous, broadly heart-shaped leaves (20–30+ cm), soft and somewhat velvety beneath, and very long seed pods (20–45 cm)."
  },
  "species-Catalpa-bignonioides": {
    id: "species-Catalpa-bignonioides",
    type: "result",
    level: "species",
    name: "Catalpa bignonioides",
    latinName: "Catalpa bignonioides (Southern Catalpa)",
    notes:
      "Smaller tree (10–15 m) with thinner, smoother leaves (10–20 cm) and somewhat shorter seed pods (20–30 cm)."
  }
};

export default CATALPA_KEY_NODES;


