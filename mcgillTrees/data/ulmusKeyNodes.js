// Binary morphological key for Ulmus species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const ULMUS_KEY_NODES = {
  // 1. Small, harsh leaves vs larger, softer leaves
  root: {
    id: "root",
    type: "question",
    text: "1. How big and how rough are the leaves?",
    options: [
      {
        id: "1-small-harsh",
        label:
          "Leaves very small (3–7 cm), stiff, with harsh sandpapery upper surface; many basal sprouts",
        next: "species-Ulmus-pumila"
      },
      {
        id: "1-larger-softer",
        label: "Leaves larger (>8 cm), softer to the touch",
        next: "ulmus-2"
      },
      {
        id: "1-hybrid-intermediate",
        label:
          "Leaves intermediate in size and roughness; traits seem mixed or variable (Hybrid elms)",
        next: "species-Ulmus-hybrid"
      }
    ]
  },

  // 2. Strongly rough underside vs smoother underside
  "ulmus-2": {
    id: "ulmus-2",
    type: "question",
    text:
      "2. Feel the underside of the leaf and look at the buds and twig surface.",
    options: [
      {
        id: "2-slippery-elm",
        label:
          "Leaf underside strongly rough (scabrous), veins very prominent; buds dark reddish; twigs hairy",
        next: "species-Ulmus-rubra"
      },
      {
        id: "2-smoother-underside",
        label: "Leaf underside smoother, not strongly roughened",
        next: "ulmus-3"
      }
    ]
  },

  // 3. Classic American Elm vs Wych Elm
  "ulmus-3": {
    id: "ulmus-3",
    type: "question",
    text:
      "3. Overall leaf size/shape and tree form (vase-shaped vs more massive leaves).",
    options: [
      {
        id: "3-american-elm",
        label:
          "Leaves broadly oval, 12–20 cm; trunk with strong buttressing; classic vase-shaped crown",
        next: "species-Ulmus-americana"
      },
      {
        id: "3-wych-elm",
        label:
          "Leaves rougher, larger (to 20+ cm), margins double-serrated deeply; samaras very large",
        next: "species-Ulmus-glabra"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Ulmus-pumila": {
    id: "species-Ulmus-pumila",
    type: "result",
    level: "species",
    name: "Ulmus pumila",
    latinName: "Ulmus pumila (Siberian Elm)",
    notes:
      "Leaves small (3–7 cm), stiff, and harshly sandpapery above; often with many basal sprouts. Widely planted and sometimes invasive."
  },
  "species-Ulmus-rubra": {
    id: "species-Ulmus-rubra",
    type: "result",
    level: "species",
    name: "Ulmus rubra",
    latinName: "Ulmus rubra (Slippery Elm)",
    notes:
      "Leaf underside strongly rough and scabrous with very prominent veins; dark reddish buds and hairy twigs."
  },
  "species-Ulmus-americana": {
    id: "species-Ulmus-americana",
    type: "result",
    level: "species",
    name: "Ulmus americana",
    latinName: "Ulmus americana (American Elm)",
    notes:
      "Broadly oval leaves (12–20 cm); trunk often buttressed with the classic high, vase-shaped crown of traditional street elms."
  },
  "species-Ulmus-glabra": {
    id: "species-Ulmus-glabra",
    type: "result",
    level: "species",
    name: "Ulmus glabra",
    latinName: "Ulmus glabra (Wych Elm)",
    notes:
      "Very large, rough leaves (to 20+ cm) with deeply double-serrated margins; samaras conspicuously large."
  },
  "species-Ulmus-hybrid": {
    id: "species-Ulmus-hybrid",
    type: "result",
    level: "species",
    name: "Ulmus × hybrid",
    latinName: "Ulmus × hybrid (Hybrid Elm Complex)",
    notes:
      "Leaves intermediate in size and roughness; serration variable; samaras irregular; crown form not consistently vase-shaped, reflecting mixed parentage."
  }
};

export default ULMUS_KEY_NODES;


