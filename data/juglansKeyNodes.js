// Binary morphological key for Juglans species on McGill campus
// -------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const JUGLANS_KEY_NODES = {
  // 1. Chambered pith vs solid pith
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Pith inside twigs and bark colour/texture.",
    options: [
      {
        id: "1-black-walnut",
        label:
          "Twigs chambered (partitioned) inside pith when cut; bark dark and deeply furrowed; leaflets 15–23, sharply serrated",
        next: "species-Juglans-nigra"
      },
      {
        id: "1-not-chambered",
        label: "Twigs not chambered inside; pith solid or only faintly furrowed",
        next: "juglans-2"
      }
    ]
  },

  // 2. Butternut vs English walnut
  "juglans-2": {
    id: "juglans-2",
    type: "question",
    questionNumber: 2,
    text: "Leaflet number and nut shape (elongated sticky butternut vs rounder cultivated walnut).",
    options: [
      {
        id: "2-butternut",
        label:
          "Leaflets 11–17, oblong, with downy pubescence; nuts elongated and sticky with resin; bark light gray and ridged",
        next: "species-Juglans-cinerea"
      },
      {
        id: "2-english-walnut",
        label:
          "Leaflets fewer (5–9), broader; nuts rounder with thinner shell; tree typically cultivated (if present)",
        next: "species-Juglans-regia"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Juglans-nigra": {
    id: "species-Juglans-nigra",
    type: "result",
    level: "species",
    name: "Juglans nigra",
    latinName: "Juglans nigra (Black Walnut)",
    notes:
      "Dark, deeply furrowed bark; chambered pith in twigs; and 15–23 sharply serrated leaflets. Produces large nuts in thick, green husks."
  },
  "species-Juglans-cinerea": {
    id: "species-Juglans-cinerea",
    type: "result",
    level: "species",
    name: "Juglans cinerea",
    latinName: "Juglans cinerea (Butternut / White Walnut)",
    notes:
      "Light gray, ridged bark; 11–17 oblong, downy leaflets; elongated nuts with sticky resinous husks. A declining native walnut species."
  },
  "species-Juglans-regia": {
    id: "species-Juglans-regia",
    type: "result",
    level: "species",
    name: "Juglans regia",
    latinName: "Juglans regia (English Walnut)",
    notes:
      "Cultivated walnut with 5–9 broader leaflets and rounder nuts in thinner shells; often planted for edible nuts and shade."
  }
};

export default JUGLANS_KEY_NODES;


