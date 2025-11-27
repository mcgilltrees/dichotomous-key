// Binary morphological key for Fagus species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const FAGUS_KEY_NODES = {
  // 1. American vs European beech
  root: {
    id: "root",
    type: "question",
    text: "1. Leaf margin waviness, underside hairs, and bud length.",
    options: [
      {
        id: "1-american-beech",
        label:
          "Leaf margins strongly wavy (undulate), with sparse coarse teeth; leaf underside with long hairs along the midrib; buds long, slender, sharply pointed (up to 2.5 cm)",
        next: "species-Fagus-grandifolia"
      },
      {
        id: "1-not-american-beech",
        label:
          "Leaf margins less wavy, finely toothed; leaf underside with silky hairs only in vein axils; buds slightly shorter (1.5–2 cm)",
        next: "fagus-2"
      }
    ]
  },

  // 2. European beech, including purple-leaved forms
  "fagus-2": {
    id: "fagus-2",
    type: "question",
    text:
      "2. Crown form, leaf sheen, and bark character (European beech and its cultivars).",
    options: [
      {
        id: "2-european-beech",
        label:
          "Leaves darker, often glossy; crown dense and broad; bark exceptionally smooth and silvery (includes purple-leaved forms)",
        next: "species-Fagus-sylvatica"
      },
      {
        id: "2-european-beech-cultivar",
        label:
          "Same species: purple-leaved or ornamental forms but otherwise as above",
        next: "species-Fagus-sylvatica"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Fagus-grandifolia": {
    id: "species-Fagus-grandifolia",
    type: "result",
    level: "species",
    name: "Fagus grandifolia",
    latinName: "Fagus grandifolia (American Beech)",
    notes:
      "Leaves with strongly wavy margins and sparse coarse teeth; long hairs along the midrib beneath; very long, slender, sharply pointed buds up to 2.5 cm."
  },
  "species-Fagus-sylvatica": {
    id: "species-Fagus-sylvatica",
    type: "result",
    level: "species",
    name: "Fagus sylvatica",
    latinName: "Fagus sylvatica (European Beech)",
    notes:
      "Darker, often glossy leaves with finer teeth and silky hairs mainly in vein axils; dense, broad crown; exceptionally smooth, silvery bark. Includes purple-leaved and other ornamental cultivars."
  }
};

export default FAGUS_KEY_NODES;


