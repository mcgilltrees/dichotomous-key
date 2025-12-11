// Binary morphological key for Fraxinus species on McGill campus
// --------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const FRAXINUS_KEY_NODES = {
  // 1. Sessile vs stalked leaflets
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "How are the leaflets attached, and how do they feel?",
    options: [
      {
        id: "1-sessile-dark-serrated",
        label:
          "Leaflets sessile (without stalks), dark green, margins sharply serrated; twig stout and dark; bark corky in strips",
        next: "species-Fraxinus-nigra"
      },
      {
        id: "1-stalked",
        label:
          "Leaflets stalked (petiolulate), margins entire or finely toothed",
        next: "fraxinus-2"
      }
    ]
  },

  // 2. Pale, thick leaflets vs thinner, greener undersides
  "fraxinus-2": {
    id: "fraxinus-2",
    type: "question",
    questionNumber: 2,
    text: "Check the underside colour and thickness of the leaflets, and the bud scar shape.",
    options: [
      {
        id: "2-white-ash",
        label:
          "Leaflet underside pale with distinct whitened cast; leaflets thick; bud scar U-shaped; twigs stout",
        next: "species-Fraxinus-americana"
      },
      {
        id: "2-greener-underside",
        label:
          "Leaflets thinner; underside greener; bud scar straight across",
        next: "fraxinus-3"
      }
    ]
  },

  // 3. Green Ash vs Blue Ash
  "fraxinus-3": {
    id: "fraxinus-3",
    type: "question",
    questionNumber: 3,
    text: "Count leaflet number and look at twig shape and bark pattern.",
    options: [
      {
        id: "3-green-ash",
        label:
          "Leaflets 5–9, margins entire to very shallowly toothed; twigs smooth; bark with diamond-shaped ridges",
        next: "species-Fraxinus-pennsylvanica"
      },
      {
        id: "3-blue-ash",
        label:
          "Leaflets 7–11, often with fine serration; twigs somewhat 4-angled",
        next: "species-Fraxinus-quadrangulata"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Fraxinus-nigra": {
    id: "species-Fraxinus-nigra",
    type: "result",
    level: "species",
    name: "Fraxinus nigra",
    latinName: "Fraxinus nigra (Black Ash)",
    notes:
      "Leaflets sessile, dark green, sharply serrated; stout dark twigs and bark often corky in strips, especially along wet sites."
  },
  "species-Fraxinus-americana": {
    id: "species-Fraxinus-americana",
    type: "result",
    level: "species",
    name: "Fraxinus americana",
    latinName: "Fraxinus americana (White Ash)",
    notes:
      "Thick leaflets with a pale, whitish underside; stout twigs with U-shaped leaf scars; classic White Ash of parks and streets."
  },
  "species-Fraxinus-pennsylvanica": {
    id: "species-Fraxinus-pennsylvanica",
    type: "result",
    level: "species",
    name: "Fraxinus pennsylvanica",
    latinName: "Fraxinus pennsylvanica (Green Ash)",
    notes:
      "Leaflets (5–9) with mostly entire to shallowly toothed margins; smooth twigs; bark with pronounced diamond-shaped ridges."
  },
  "species-Fraxinus-quadrangulata": {
    id: "species-Fraxinus-quadrangulata",
    type: "result",
    level: "species",
    name: "Fraxinus quadrangulata",
    latinName: "Fraxinus quadrangulata (Blue Ash)",
    notes:
      "Leaflets (7–11) often finely serrated; twigs somewhat four-angled in cross-section. Rare but distinctive where present."
  }
};

export default FRAXINUS_KEY_NODES;


