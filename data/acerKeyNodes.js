// Binary morphological key for Acer species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const ACER_KEY_NODES = {
  // 1. Compound vs simple leaves
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Leaf type (compound vs simple).",
    options: [
      {
        id: "1-acer-negundo",
        label: "Leaves compound (with 3–7 leaflets)",
        next: "species-Acer-negundo"
      },
      {
        id: "1-simple-leaves",
        label: "Leaves simple (one blade per petiole)",
        next: "acer-2"
      }
    ]
  },

  // 2. Milky sap vs none in petiole
  "acer-2": {
    id: "acer-2",
    type: "question",
    questionNumber: 2,
    text: "Milky sap in petiole and leaf shape.",
    options: [
      {
        id: "2-acer-platanoides",
        label:
          "Milky sap exudes from petiole when broken; terminal lobe long and drawn out; leaves broad with pointed tips",
        next: "species-Acer-platanoides"
      },
      {
        id: "2-no-milky-sap",
        label: "Milky sap absent from petiole",
        next: "acer-3"
      }
    ]
  },

  // 3. Very deeply lobed vs moderately lobed leaves
  "acer-3": {
    id: "acer-3",
    type: "question",
    questionNumber: 3,
    text: "Depth of leaf lobing and lower lobe orientation.",
    options: [
      {
        id: "3-acer-saccharinum",
        label:
          "Leaves very deeply lobed; sinuses reaching near midrib; lower lobes strongly swept downward; underside silvery-white",
        next: "species-Acer-saccharinum"
      },
      {
        id: "3-moderately-lobed",
        label: "Leaves not as deeply lobed; sinuses moderate",
        next: "acer-4"
      }
    ]
  },

  // 4. Small 3-lobed vs larger broad-lobed leaves
  "acer-4": {
    id: "acer-4",
    type: "question",
    questionNumber: 4,
    text: "Leaf size and margin character.",
    options: [
      {
        id: "4-acer-ginnala",
        label:
          "Leaves small (5–9 cm), typically 3-lobed or weakly 5-lobed; lobes narrow; margins finely double-serrated",
        next: "species-Acer-ginnala"
      },
      {
        id: "4-larger-leaves",
        label:
          "Leaves larger (>10 cm), lobes broad and typical “maple” shape",
        next: "acer-5"
      }
    ]
  },

  // 5. Sugar vs Red Maple
  "acer-5": {
    id: "acer-5",
    type: "question",
    questionNumber: 5,
    text: "Shape of leaf sinuses and bark/sap characters.",
    options: [
      {
        id: "5-acer-saccharum",
        label:
          "Leaf sinuses U-shaped (broad and rounded), lobes full and rounded; underside pale green; bark on mature trees in thick irregular plates; sap sweet",
        next: "species-Acer-saccharum"
      },
      {
        id: "5-acer-rubrum",
        label:
          "Leaf sinuses V-shaped (sharper), lobes more triangular; undersides whitish; petioles often red; fall color bright red",
        next: "species-Acer-rubrum"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Acer-negundo": {
    id: "species-Acer-negundo",
    type: "result",
    level: "species",
    name: "Acer negundo",
    latinName: "Acer negundo (Boxelder)",
    notes:
      "Usually with compound leaves of 3–7 leaflets rather than a single simple blade; often a fast-growing, somewhat weedy maple."
  },
  "species-Acer-platanoides": {
    id: "species-Acer-platanoides",
    type: "result",
    level: "species",
    name: "Acer platanoides",
    latinName: "Acer platanoides (Norway Maple)",
    notes:
      "Simple broad leaves with a long-drawn terminal lobe; milky sap from broken petioles; widely planted street and yard maple."
  },
  "species-Acer-saccharinum": {
    id: "species-Acer-saccharinum",
    type: "result",
    level: "species",
    name: "Acer saccharinum",
    latinName: "Acer saccharinum (Silver Maple)",
    notes:
      "Very deeply lobed leaves with sinuses reaching near the midrib; lower lobes swept downward and leaf undersides bright silvery-white."
  },
  "species-Acer-ginnala": {
    id: "species-Acer-ginnala",
    type: "result",
    level: "species",
    name: "Acer ginnala",
    latinName: "Acer ginnala (Amur Maple)",
    notes:
      "Small leaves (5–9 cm) usually 3-lobed with narrow lobes and finely double-serrated margins; often a small ornamental tree or large shrub."
  },
  "species-Acer-saccharum": {
    id: "species-Acer-saccharum",
    type: "result",
    level: "species",
    name: "Acer saccharum",
    latinName: "Acer saccharum (Sugar Maple)",
    notes:
      "Large, broad, classic maple leaves with U-shaped sinuses and rounded lobes; pale green undersides; thick irregular bark plates; source of maple syrup."
  },
  "species-Acer-rubrum": {
    id: "species-Acer-rubrum",
    type: "result",
    level: "species",
    name: "Acer rubrum",
    latinName: "Acer rubrum (Red Maple)",
    notes:
      "Leaves with sharper V-shaped sinuses and more triangular lobes; whitish undersides; often red petioles and brilliant red autumn colour."
  }
};

export default ACER_KEY_NODES;



