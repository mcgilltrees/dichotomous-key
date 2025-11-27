// Binary morphological key for Robinia species on McGill campus
// -------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const ROBINIA_KEY_NODES = {
  // 1. Armed vs unarmed twigs and flower colour
  root: {
    id: "root",
    type: "question",
    text: "1. Twig armature, stem texture, and flower colour.",
    options: [
      {
        id: "1-black-locust",
        label:
          "Twigs armed with stout paired spines at nodes; bark deeply furrowed and rope-like; leaflets 7–19, oval; fragrant white flower clusters",
        next: "species-Robinia-pseudoacacia"
      },
      {
        id: "1-no-stout-spines",
        label:
          "Twigs without stout paired spines; stems hairy or sticky; flowers pink",
        next: "robinia-2"
      }
    ]
  },

  // 2. Bristly vs viscid stems among pink-flowered robinias
  "robinia-2": {
    id: "robinia-2",
    type: "question",
    text:
      "2. Stem surface (bristly with gland-tipped hairs vs sticky/viscid) and flower details.",
    options: [
      {
        id: "2-bristly-locust",
        label:
          "Stems bristly with gland-tipped hairs; flowers bright pink; shrub or small tree",
        next: "species-Robinia-hispida"
      },
      {
        id: "2-clammy-locust",
        label:
          "Stems sticky (viscid), lacking bristles; flowers rose-pink; small tree",
        next: "species-Robinia-viscosa"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Robinia-pseudoacacia": {
    id: "species-Robinia-pseudoacacia",
    type: "result",
    level: "species",
    name: "Robinia pseudoacacia",
    latinName: "Robinia pseudoacacia (Black Locust)",
    notes:
      "Tree with stout paired spines at the nodes, deeply furrowed rope-like bark, 7–19 oval leaflets, and showy clusters of fragrant white flowers."
  },
  "species-Robinia-hispida": {
    id: "species-Robinia-hispida",
    type: "result",
    level: "species",
    name: "Robinia hispida",
    latinName: "Robinia hispida (Bristly Locust)",
    notes:
      "Shrub or small tree with stems bristly from gland-tipped hairs and bright pink flowers; often ornamental where present."
  },
  "species-Robinia-viscosa": {
    id: "species-Robinia-viscosa",
    type: "result",
    level: "species",
    name: "Robinia viscosa",
    latinName: "Robinia viscosa (Clammy Locust)",
    notes:
      "Small tree with sticky, viscid stems lacking bristles and rose-pink flowers; occasionally planted and sometimes naturalised."
  }
};

export default ROBINIA_KEY_NODES;


