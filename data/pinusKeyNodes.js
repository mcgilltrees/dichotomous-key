// Binary morphological key for Pinus species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const PINUS_KEY_NODES = {
  // 1. Five-needled vs two- or three-needled pines
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Needles per bundle (fascicle) and their feel.",
    options: [
      {
        id: "1-eastern-white-pine",
        label:
          "Needles in bundles (fascicles) of 5; needles soft, flexible, bluish-green, 7–12 cm long",
        next: "species-Pinus-strobus"
      },
      {
        id: "1-two-or-three-needles",
        label: "Needles in bundles of 2 or 3; needles stiffer",
        next: "pinus-2"
      }
    ]
  },

  // 2. Two-needled vs three-needled pines
  "pinus-2": {
    id: "pinus-2",
    type: "question",
    questionNumber: 2,
    text: "Bundles strictly of 2 needles vs 3 (or mixed 2–3).",
    options: [
      {
        id: "2-two-needles",
        label: "Needles in bundles of 2 only",
        next: "pinus-3"
      },
      {
        id: "2-three-needles",
        label: "Needles in bundles of 3 (or occasionally mixed 2–3)",
        next: "pinus-4"
      }
    ]
  },

  // 3. Red vs Scots pine among two-needled species
  "pinus-3": {
    id: "pinus-3",
    type: "question",
    questionNumber: 3,
    text: "Needle length and bark colour (Red Pine vs Scots Pine among 2-needled pines).",
    options: [
      {
        id: "3-red-pine",
        label:
          "Needles 12–18 cm long, dark green, brittle when bent; cones 4–6 cm, egg-shaped; bark reddish and in plates",
        next: "species-Pinus-resinosa"
      },
      {
        id: "3-scots-pine",
        label:
          "Needles 3–7 cm long, twisted, bluish-green; cones 3–5 cm, often curved; bark orange and flaky on upper trunk",
        next: "species-Pinus-sylvestris"
      }
    ]
  },

  // 4. Austrian vs Pitch pine among three-needled species
  "pinus-4": {
    id: "pinus-4",
    type: "question",
    questionNumber: 4,
    text: "Bark character and cone/branch persistence (Austrian vs Pitch Pine).",
    options: [
      {
        id: "4-austrian-pine",
        label:
          "Needles 8–12 cm long, stiff; bark dark and deeply furrowed; cones sessile and often clustered",
        next: "species-Pinus-nigra"
      },
      {
        id: "4-pitch-pine",
        label:
          "Needles 8–13 cm, very stiff, in bundles of 3; cones ovoid; tree with many persistent dead lower branches",
        next: "species-Pinus-rigida"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Pinus-strobus": {
    id: "species-Pinus-strobus",
    type: "result",
    level: "species",
    name: "Pinus strobus",
    latinName: "Pinus strobus (Eastern White Pine)",
    notes:
      "Five soft, flexible, bluish-green needles per bundle, 7–12 cm long; a tall eastern pine with long, slender cones."
  },
  "species-Pinus-resinosa": {
    id: "species-Pinus-resinosa",
    type: "result",
    level: "species",
    name: "Pinus resinosa",
    latinName: "Pinus resinosa (Red Pine)",
    notes:
      "Two dark-green needles per bundle, 12–18 cm, brittle when bent; egg-shaped cones 4–6 cm and reddish plated bark."
  },
  "species-Pinus-sylvestris": {
    id: "species-Pinus-sylvestris",
    type: "result",
    level: "species",
    name: "Pinus sylvestris",
    latinName: "Pinus sylvestris (Scots Pine)",
    notes:
      "Two twisted bluish-green needles per bundle (3–7 cm); cones 3–5 cm often slightly curved; orange flaky bark on upper trunk."
  },
  "species-Pinus-nigra": {
    id: "species-Pinus-nigra",
    type: "result",
    level: "species",
    name: "Pinus nigra",
    latinName: "Pinus nigra (Austrian Pine)",
    notes:
      "Stiff 8–12 cm needles, dark deeply furrowed bark, and sessile, often clustered cones; a common introduced landscape pine."
  },
  "species-Pinus-rigida": {
    id: "species-Pinus-rigida",
    type: "result",
    level: "species",
    name: "Pinus rigida",
    latinName: "Pinus rigida (Pitch Pine)",
    notes:
      "Three very stiff needles per bundle (8–13 cm), ovoid cones, and many persistent dead lower branches; a rugged pine of poor, sandy sites."
  }
};

export default PINUS_KEY_NODES;


