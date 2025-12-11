// Binary morphological key for Sorbus species on McGill campus
// ------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const SORBUS_KEY_NODES = {
  // 1. European vs North American mountain ashes
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Leaflet number/shape and berry cluster posture.",
    options: [
      {
        id: "1-european-mountain-ash",
        label:
          "Leaflets 9–17, narrow, sharply serrated; leaflets sessile (no stalks); clusters of orange-red berries large and drooping",
        next: "species-Sorbus-aucuparia"
      },
      {
        id: "1-broader-leaflets",
        label: "Leaflets 11–15, broader; clusters more upright",
        next: "sorbus-2"
      }
    ]
  },

  // 2. Showy vs American mountain ash
  "sorbus-2": {
    id: "sorbus-2",
    type: "question",
    questionNumber: 2,
    text: "Leaflet size and cluster size/orientation (very large upright clusters vs medium spreading).",
    options: [
      {
        id: "2-showy-mountain-ash",
        label:
          "Leaflets large (5–10 cm), broad-lanceolate; berry clusters very large and showy, upright; fruit bright red",
        next: "species-Sorbus-decora"
      },
      {
        id: "2-american-mountain-ash",
        label:
          "Leaflets smaller (3–6 cm), more slender; berry clusters medium-sized, spreading; fruit orange-red",
        next: "species-Sorbus-americana"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Sorbus-aucuparia": {
    id: "species-Sorbus-aucuparia",
    type: "result",
    level: "species",
    name: "Sorbus aucuparia",
    latinName: "Sorbus aucuparia (European Mountain Ash)",
    notes:
      "Compound leaves with 9–17 narrow, sharply serrated sessile leaflets; large, drooping clusters of orange-red berries; widely planted ornamental."
  },
  "species-Sorbus-decora": {
    id: "species-Sorbus-decora",
    type: "result",
    level: "species",
    name: "Sorbus decora",
    latinName: "Sorbus decora (Showy Mountain Ash)",
    notes:
      "Large (5–10 cm) broad-lanceolate leaflets and very large, upright clusters of bright red berries create a particularly showy crown."
  },
  "species-Sorbus-americana": {
    id: "species-Sorbus-americana",
    type: "result",
    level: "species",
    name: "Sorbus americana",
    latinName: "Sorbus americana (American Mountain Ash)",
    notes:
      "Smaller (3–6 cm), more slender leaflets and medium-sized, more spreading clusters of orange-red berries; native North American species."
  }
};

export default SORBUS_KEY_NODES;


