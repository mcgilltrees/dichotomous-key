// Binary morphological key for Crataegus species on McGill campus
// ---------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const CRATAEGUS_KEY_NODES = {
  // 1. Strongly thorny cockspur vs others
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Thorn length and leaf appearance.",
    options: [
      {
        id: "1-cockspur-hawthorn",
        label:
          "Thorns extremely long (5–10 cm), stout, singular at the nodes; leaves shiny, dark green, with coarse serration; fruit red, small; tree often wide-spreading",
        next: "species-Crataegus-crus-galli"
      },
      {
        id: "1-shorter-thorns",
        label: "Thorns shorter (<5 cm) or fewer; leaf shape different",
        next: "crataegus-2"
      }
    ]
  },

  // 2. Washington hawthorn vs others
  "crataegus-2": {
    id: "crataegus-2",
    type: "question",
    questionNumber: 2,
    text: "Leaf shape and fruit cluster size (triangular-ovate vs other forms).",
    options: [
      {
        id: "2-washington-hawthorn",
        label:
          "Leaves triangular-ovate, deeply serrated; fruit bright red and borne in large clusters; flowers abundant",
        next: "species-Crataegus-phaenopyrum"
      },
      {
        id: "2-not-washington",
        label: "Leaves not triangular, fruit clusters smaller",
        next: "crataegus-3"
      }
    ]
  },

  // 3. Downy vs non-downy leaves
  "crataegus-3": {
    id: "crataegus-3",
    type: "question",
    questionNumber: 3,
    text: "Leaf underside pubescence and flower size (Downy vs non-downy hawthorns).",
    options: [
      {
        id: "3-downy-hawthorn",
        label:
          "Leaves broadly ovate, underside fuzzy (pubescent); flowers large; fruit yellowish-red when ripe",
        next: "species-Crataegus-mollis"
      },
      {
        id: "3-not-downy",
        label: "Leaves not fuzzy beneath",
        next: "crataegus-4"
      }
    ]
  },

  // 4. Single-seeded vs English hawthorn
  "crataegus-4": {
    id: "crataegus-4",
    type: "question",
    questionNumber: 4,
    text: "Leaf lobing and fruit size (narrowly lobed vs more rounded, shallow-lobed leaves).",
    options: [
      {
        id: "4-single-seeded-hawthorn",
        label:
          "Leaves narrowly lobed, almost oak-like; fruit small; flowers in dense clusters; usually introduced from Europe",
        next: "species-Crataegus-monogyna"
      },
      {
        id: "4-english-hawthorn",
        label:
          "Leaves more rounded with shallow lobes; fruit larger; branchlets smooth; common ornamental in parks",
        next: "species-Crataegus-laevigata"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Crataegus-crus-galli": {
    id: "species-Crataegus-crus-galli",
    type: "result",
    level: "species",
    name: "Crataegus crus-galli",
    latinName: "Crataegus crus-galli (Cockspur Hawthorn)",
    notes:
      "Wide-spreading tree armed with extremely long (5–10 cm), stout thorns at the nodes; shiny, dark-green coarsely serrated leaves and small red fruits."
  },
  "species-Crataegus-phaenopyrum": {
    id: "species-Crataegus-phaenopyrum",
    type: "result",
    level: "species",
    name: "Crataegus phaenopyrum",
    latinName: "Crataegus phaenopyrum (Washington Hawthorn)",
    notes:
      "Triangular-ovate, deeply serrated leaves; very abundant flowers and large clusters of bright red fruits; commonly planted ornamental hawthorn."
  },
  "species-Crataegus-mollis": {
    id: "species-Crataegus-mollis",
    type: "result",
    level: "species",
    name: "Crataegus mollis",
    latinName: "Crataegus mollis (Downy Hawthorn)",
    notes:
      "Broadly ovate leaves with fuzzy undersides, large flowers, and yellowish-red fruits when ripe; a downy-leaved native hawthorn where present."
  },
  "species-Crataegus-monogyna": {
    id: "species-Crataegus-monogyna",
    type: "result",
    level: "species",
    name: "Crataegus monogyna",
    latinName: "Crataegus monogyna (Single-seeded Hawthorn)",
    notes:
      "Introduced European hawthorn with narrowly lobed, almost oak-like leaves, dense flower clusters, and small fruits typically containing a single seed."
  },
  "species-Crataegus-laevigata": {
    id: "species-Crataegus-laevigata",
    type: "result",
    level: "species",
    name: "Crataegus laevigata",
    latinName: "Crataegus laevigata (English Hawthorn)",
    notes:
      "Common ornamental hawthorn with more rounded, shallow-lobed leaves, larger fruits, and relatively smooth branchlets; includes several cultivated forms."
  }
};

export default CRATAEGUS_KEY_NODES;


