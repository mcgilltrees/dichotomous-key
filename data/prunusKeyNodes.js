// Binary morphological key for Prunus species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const PRUNUS_KEY_NODES = {
  // 1. Large, dark-barked Black Cherry vs smaller cherries
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Overall tree size and bark/leaf character.",
    options: [
      {
        id: "1-black-cherry",
        label:
          "Tree large (20–30 m), bark dark and flaky; bitter almond odor when scratched; leaves thick and shiny",
        next: "species-Prunus-serotina"
      },
      {
        id: "1-smaller-trees",
        label:
          "Tree small to medium (<15 m), bark smoother or with lenticels; odor weak or absent",
        next: "prunus-2"
      },
      {
        id: "1-mahaleb-special",
        label:
          "Small tree with fragrant bark; leaves smaller and bright green; fruit red to dark purple (Mahaleb cherry, if present)",
        next: "species-Prunus-mahaleb"
      }
    ]
  },

  // 2. Narrow-leaved Pin Cherry vs broader-leaved cherries
  "prunus-2": {
    id: "prunus-2",
    type: "question",
    questionNumber: 2,
    text: "Leaf width and fruit characters (very narrow leaves with tiny bright red fruits vs broader leaves).",
    options: [
      {
        id: "2-pin-cherry",
        label:
          "Leaves very narrow (2–5 cm wide), sharply serrated; fruit small (5–8 mm), bright red; often forming thickets",
        next: "species-Prunus-pensylvanica"
      },
      {
        id: "2-broader-leaves",
        label:
          "Leaves broader (>5 cm), differently serrated; fruit not as above",
        next: "prunus-3"
      }
    ]
  },

  // 3. Chokecherry vs larger/glossier cherries
  "prunus-3": {
    id: "prunus-3",
    type: "question",
    questionNumber: 3,
    text: "Leaf size/finish and how the fruits are arranged along the twigs.",
    options: [
      {
        id: "3-chokecherry",
        label:
          "Leaves oval, 3–10 cm; underside dull; fruit dark red to black; often forming dense clusters along twigs",
        next: "species-Prunus-virginiana"
      },
      {
        id: "3-larger-glossier",
        label:
          "Leaves larger or glossier; fruit borne on longer stalks or larger drupes",
        next: "prunus-4"
      }
    ]
  },

  // 4. Bird Cherry vs larger-fruited sweet/sour cherries
  "prunus-4": {
    id: "prunus-4",
    type: "question",
    questionNumber: 4,
    text: "Flower clusters and size of the resulting cherries (small black vs larger sweet/sour cherries).",
    options: [
      {
        id: "4-bird-cherry",
        label:
          "Flowers in tight, many-flowered clusters (racemes); fruit small black cherries (<1 cm)",
        next: "species-Prunus-padus"
      },
      {
        id: "4-larger-fruits",
        label: "Flowers in umbels or pairs; fruit larger (>1 cm)",
        next: "prunus-5"
      }
    ]
  },

  // 5. Sweet vs sour cherry
  "prunus-5": {
    id: "prunus-5",
    type: "question",
    questionNumber: 5,
    text: "Taste, habit, and bud arrangement (cultivated sweet cherry vs sour cherry).",
    options: [
      {
        id: "5-sweet-cherry",
        label:
          "Fruit sweet; pedicels long; tree often cultivated; bark with numerous horizontal lenticels",
        next: "species-Prunus-avium"
      },
      {
        id: "5-sour-cherry",
        label:
          "Fruit tart; shrub or small tree; buds clustered at nodes (if present)",
        next: "species-Prunus-cerasus"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Prunus-serotina": {
    id: "species-Prunus-serotina",
    type: "result",
    level: "species",
    name: "Prunus serotina",
    latinName: "Prunus serotina (Black Cherry)",
    notes:
      "Large tree (20–30 m) with dark, flaky bark and thick, shiny leaves; inner bark smells of bitter almond when scratched."
  },
  "species-Prunus-pensylvanica": {
    id: "species-Prunus-pensylvanica",
    type: "result",
    level: "species",
    name: "Prunus pensylvanica",
    latinName: "Prunus pensylvanica (Pin Cherry)",
    notes:
      "Slender, sharply serrated leaves (2–5 cm wide) and tiny bright-red fruits (5–8 mm); often forms thickets after disturbance."
  },
  "species-Prunus-virginiana": {
    id: "species-Prunus-virginiana",
    type: "result",
    level: "species",
    name: "Prunus virginiana",
    latinName: "Prunus virginiana (Chokecherry)",
    notes:
      "Oval leaves (3–10 cm) with dull undersides; dark red to black fruits in dense clusters along the twigs."
  },
  "species-Prunus-padus": {
    id: "species-Prunus-padus",
    type: "result",
    level: "species",
    name: "Prunus padus",
    latinName: "Prunus padus (Bird Cherry)",
    notes:
      "Many-flowered racemes and small black cherries under 1 cm; sometimes planted as an ornamental Bird Cherry where present."
  },
  "species-Prunus-avium": {
    id: "species-Prunus-avium",
    type: "result",
    level: "species",
    name: "Prunus avium",
    latinName: "Prunus avium (Sweet Cherry)",
    notes:
      "Sweet cherries on long pedicels; medium tree often cultivated, with bark marked by numerous horizontal lenticels."
  },
  "species-Prunus-cerasus": {
    id: "species-Prunus-cerasus",
    type: "result",
    level: "species",
    name: "Prunus cerasus",
    latinName: "Prunus cerasus (Sour Cherry)",
    notes:
      "Shrub or small tree with tart cherries; buds often clustered at nodes; commonly grown as a fruiting sour cherry where present."
  },
  "species-Prunus-mahaleb": {
    id: "species-Prunus-mahaleb",
    type: "result",
    level: "species",
    name: "Prunus mahaleb",
    latinName: "Prunus mahaleb (Mahaleb Cherry)",
    notes:
      "Small tree with fragrant bark, smaller bright-green leaves, and red to dark-purple fruits; often planted ornamentally where present."
  }
};

export default PRUNUS_KEY_NODES;


