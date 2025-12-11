// Binary morphological key for Salix species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const SALIX_KEY_NODES = {
  // 1. Strongly weeping vs not
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Overall crown form and branchlet habit.",
    options: [
      {
        id: "1-weeping-willow",
        label:
          "Tree strongly weeping; branchlets long, pendulous; leaves narrow (5–15 mm wide), lanceolate, slightly curved",
        next: "species-Salix-babylonica"
      },
      {
        id: "1-not-weeping",
        label: "Tree not strongly weeping",
        next: "salix-2"
      }
    ]
  },

  // 2. White willow vs others
  "salix-2": {
    id: "salix-2",
    type: "question",
    questionNumber: 2,
    text: "Leaf length/width and underside colour (whitish vs greener) and bark colour.",
    options: [
      {
        id: "2-white-willow",
        label:
          "Leaves very long (6–12 cm), narrow (5–20 mm), with pale or whitish underside; bark light gray; crowns broad",
        next: "species-Salix-alba"
      },
      {
        id: "2-not-white-willow",
        label:
          "Leaves not strongly whitened beneath; or shorter; or broader",
        next: "salix-3"
      }
    ]
  },

  // 3. Crack willow vs others
  "salix-3": {
    id: "salix-3",
    type: "question",
    questionNumber: 3,
    text: "Brittleness of twigs at base and leaf gloss (Crack Willow vs others).",
    options: [
      {
        id: "3-crack-willow",
        label:
          "Twigs brittle at the base (will break off cleanly when bent); leaves glossy green; hybrid swarms common",
        next: "species-Salix-fragilis"
      },
      {
        id: "3-not-crack-willow",
        label: "Twigs not brittle at base",
        next: "salix-4"
      }
    ]
  },

  // 4. Purple willow vs Black willow
  "salix-4": {
    id: "salix-4",
    type: "question",
    questionNumber: 4,
    text: "Leaf width and stem colour (very narrow, reddish twigs vs broader leaves on dark-barked trees).",
    options: [
      {
        id: "4-purple-willow",
        label:
          "Leaves very narrow (2–10 mm), linear-lanceolate; stems often reddish or purplish; shrub or small tree",
        next: "species-Salix-purpurea"
      },
      {
        id: "4-black-willow",
        label:
          "Leaves broader (10–25 mm), lanceolate; bark dark; tree of wet soils, often multi-trunked",
        next: "species-Salix-nigra"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Salix-babylonica": {
    id: "species-Salix-babylonica",
    type: "result",
    level: "species",
    name: "Salix babylonica",
    latinName: "Salix babylonica (Weeping Willow)",
    notes:
      "Strongly weeping tree with long, pendulous branchlets and narrow, slightly curved lanceolate leaves 5–15 mm wide."
  },
  "species-Salix-alba": {
    id: "species-Salix-alba",
    type: "result",
    level: "species",
    name: "Salix alba",
    latinName: "Salix alba (White Willow)",
    notes:
      "Broad-crowned trees with long, narrow leaves (6–12 cm) having pale to whitish undersides and light gray bark."
  },
  "species-Salix-fragilis": {
    id: "species-Salix-fragilis",
    type: "result",
    level: "species",
    name: "Salix fragilis",
    latinName: "Salix fragilis (Crack Willow)",
    notes:
      "Twigs brittle at the base and snap off cleanly when bent; glossy green leaves; often forming hybrid swarms with other willows."
  },
  "species-Salix-purpurea": {
    id: "species-Salix-purpurea",
    type: "result",
    level: "species",
    name: "Salix purpurea",
    latinName: "Salix purpurea (Purple Willow)",
    notes:
      "Very narrow (2–10 mm), linear-lanceolate leaves and reddish or purplish stems; usually a shrub or small tree used ornamentally."
  },
  "species-Salix-nigra": {
    id: "species-Salix-nigra",
    type: "result",
    level: "species",
    name: "Salix nigra",
    latinName: "Salix nigra (Black Willow)",
    notes:
      "Trees of wet soils with broader (10–25 mm) lanceolate leaves, dark bark, and often multi-trunked forms along watercourses."
  }
};

export default SALIX_KEY_NODES;


