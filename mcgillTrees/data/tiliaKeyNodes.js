// Binary morphological key for Tilia species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const TILIA_KEY_NODES = {
  // 1. Littleleaf vs larger-leaved lindens
  root: {
    id: "root",
    type: "question",
    text: "1. Leaf size and base shape.",
    options: [
      {
        id: "1-littleleaf-linden",
        label:
          "Leaves small (3–7 cm), base strongly heart-shaped; leaf underside pale green; twigs slender",
        next: "species-Tilia-cordata"
      },
      {
        id: "1-larger-leaves",
        label: "Leaves larger (>8 cm)",
        next: "tilia-2"
      }
    ]
  },

  // 2. Very large, velvety leaves vs moderately large leaves
  "tilia-2": {
    id: "tilia-2",
    type: "question",
    text:
      "2. Leaf size and lower-surface texture (very large and velvety vs moderately large).",
    options: [
      {
        id: "2-american-basswood",
        label:
          "Leaves very large (15–20+ cm), broadly heart-shaped; lower surface velvety to the touch; buds plump and greenish",
        next: "species-Tilia-americana"
      },
      {
        id: "2-moderately-large",
        label: "Leaves moderately large (8–15 cm)",
        next: "tilia-3"
      }
    ]
  },

  // 3. Bigleaf vs Common/Hybrid Linden
  "tilia-3": {
    id: "tilia-3",
    type: "question",
    text:
      "3. Leaf shape, serration, and twig/bud characters (Bigleaf vs Common/Hybrid Linden).",
    options: [
      {
        id: "3-bigleaf-linden",
        label:
          "Leaves broadly ovate, coarsely serrated, often with tufts of hair in vein axils; twigs thicker; buds reddish",
        next: "species-Tilia-platyphyllos"
      },
      {
        id: "3-common-hybrid-linden",
        label:
          "Leaves intermediate in size and thickness; traits between T. cordata and T. platyphyllos; often planted along streets",
        next: "species-Tilia-europaea"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Tilia-cordata": {
    id: "species-Tilia-cordata",
    type: "result",
    level: "species",
    name: "Tilia cordata",
    latinName: "Tilia cordata (Littleleaf Linden)",
    notes:
      "Small (3–7 cm), strongly heart-shaped leaves with pale undersides on slender twigs; widely used as a street and park linden."
  },
  "species-Tilia-americana": {
    id: "species-Tilia-americana",
    type: "result",
    level: "species",
    name: "Tilia americana",
    latinName: "Tilia americana (American Basswood)",
    notes:
      "Very large (15–20+ cm), broadly heart-shaped leaves with velvety undersides; plump greenish buds; a large native shade tree."
  },
  "species-Tilia-platyphyllos": {
    id: "species-Tilia-platyphyllos",
    type: "result",
    level: "species",
    name: "Tilia platyphyllos",
    latinName: "Tilia platyphyllos (Bigleaf Linden)",
    notes:
      "Broadly ovate, coarsely serrated leaves often with tufts of hair in the vein axils; thicker twigs and reddish buds."
  },
  "species-Tilia-europaea": {
    id: "species-Tilia-europaea",
    type: "result",
    level: "species",
    name: "Tilia × europaea",
    latinName: "Tilia × europaea (Common / Hybrid Linden)",
    notes:
      "Intermediate leaf size and thickness with traits between Littleleaf and Bigleaf lindens; widely planted hybrid along streets and boulevards."
  }
};

export default TILIA_KEY_NODES;


