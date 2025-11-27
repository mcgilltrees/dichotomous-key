// Binary morphological key for Amelanchier species on McGill campus
// -----------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const AMELANCHIER_KEY_NODES = {
  // 1. Downy vs smoother young foliage
  root: {
    id: "root",
    type: "question",
    text: "1. Hairiness of young leaves and overall leaf colour.",
    options: [
      {
        id: "1-downy-serviceberry",
        label:
          "Young leaves densely hairy (pubescent), especially on underside; foliage appears slightly grayish; petals narrow",
        next: "species-Amelanchier-arborea"
      },
      {
        id: "1-not-densely-hairy",
        label: "Young leaves smooth or only sparsely hairy",
        next: "amelanchier-2"
      }
    ]
  },

  // 2. Smooth vs greenish evenly serrate leaves
  "amelanchier-2": {
    id: "amelanchier-2",
    type: "question",
    text:
      "2. Emerging leaf colour, serration pattern, and petal shape/posture.",
    options: [
      {
        id: "2-smooth-serviceberry",
        label:
          "Leaves reddish or bronze when emerging; leaf margins finely serrated only toward the tip; petals broad and slightly drooping",
        next: "species-Amelanchier-laevis"
      },
      {
        id: "2-greenish-evenly-serrate",
        label:
          "Young leaves greenish; evenly serrated margins from midsection to tip; petals narrower and more upright",
        next: "amelanchier-3"
      }
    ]
  },

  // 3. Canadian vs Saskatoon serviceberry
  "amelanchier-3": {
    id: "amelanchier-3",
    type: "question",
    text:
      "3. Growth habit and berry size/colour (shrubby Canadian vs larger Saskatoon).",
    options: [
      {
        id: "3-canadian-serviceberry",
        label:
          "Shrubby to small-tree growth habit; multi-stemmed; flowers in upright clusters; berries small (5–7 mm)",
        next: "species-Amelanchier-canadensis"
      },
      {
        id: "3-saskatoon-serviceberry",
        label:
          "Larger shrubs or small trees; berries larger (7–10 mm), bluish; leaves more rounded",
        next: "species-Amelanchier-alnifolia"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Amelanchier-arborea": {
    id: "species-Amelanchier-arborea",
    type: "result",
    level: "species",
    name: "Amelanchier arborea",
    latinName: "Amelanchier arborea (Downy Serviceberry)",
    notes:
      "Young leaves densely pubescent, especially beneath, giving a grayish cast; petals relatively narrow. Often a small tree or tall shrub."
  },
  "species-Amelanchier-laevis": {
    id: "species-Amelanchier-laevis",
    type: "result",
    level: "species",
    name: "Amelanchier laevis",
    latinName: "Amelanchier laevis (Smooth Serviceberry)",
    notes:
      "Reddish to bronze emerging leaves with fine serrations mainly near the tip; broad, slightly drooping petals and relatively smooth foliage."
  },
  "species-Amelanchier-canadensis": {
    id: "species-Amelanchier-canadensis",
    type: "result",
    level: "species",
    name: "Amelanchier canadensis",
    latinName: "Amelanchier canadensis (Canadian Serviceberry)",
    notes:
      "Shrubby to small multi-stemmed trees with flowers in upright clusters and small berries (5–7 mm). Common in wet or boggy sites."
  },
  "species-Amelanchier-alnifolia": {
    id: "species-Amelanchier-alnifolia",
    type: "result",
    level: "species",
    name: "Amelanchier alnifolia",
    latinName: "Amelanchier alnifolia (Saskatoon)",
    notes:
      "Larger shrubs or small trees with more rounded leaves and larger (7–10 mm) bluish berries; valued for sweet edible fruit where planted."
  }
};

export default AMELANCHIER_KEY_NODES;


