// Binary morphological key for Thuja species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const THUJA_KEY_NODES = {
  // 1. Northern White Cedar vs Western Red Cedar (if present)
  root: {
    id: "root",
    type: "question",
    text: "1. Branchlet flattening, leaf arrangement, and cone size.",
    options: [
      {
        id: "1-northern-white-cedar",
        label:
          "Branchlets flattened into fan-shaped sprays; scale leaves tightly overlapping; cones small (≈1 cm), with 6–8 thin woody scales",
        next: "species-Thuja-occidentalis"
      },
      {
        id: "1-western-red-cedar",
        label:
          "Branchlets slightly less flattened; scale leaves larger and more loosely arranged; cones larger (1.2–1.5 cm), with 8–12 thicker scales (unlikely)",
        next: "species-Thuja-plicata"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Thuja-occidentalis": {
    id: "species-Thuja-occidentalis",
    type: "result",
    level: "species",
    name: "Thuja occidentalis",
    latinName: "Thuja occidentalis (Northern White Cedar)",
    notes:
      "Branchlets in flat, fan-shaped sprays with tightly overlapping scale leaves and very small cones (~1 cm) with 6–8 thin woody scales."
  },
  "species-Thuja-plicata": {
    id: "species-Thuja-plicata",
    type: "result",
    level: "species",
    name: "Thuja plicata",
    latinName: "Thuja plicata (Western Red Cedar)",
    notes:
      "Branchlets less strongly flattened with somewhat larger, looser scale leaves; cones 1.2–1.5 cm with 8–12 thicker scales. Unlikely but possible as an ornamental."
  }
};

export default THUJA_KEY_NODES;


