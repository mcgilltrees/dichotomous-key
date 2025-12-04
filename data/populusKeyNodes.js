// Binary morphological key for Populus species on McGill campus
// -------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const POPULUS_KEY_NODES = {
  // 1. White-woolly underside vs not
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Leaf underside texture and bark colour.",
    options: [
      {
        id: "1-white-poplar",
        label:
          "Leaf underside densely white-woolly; leaf stalks not flattened; bark pale and rough",
        next: "species-Populus-alba"
      },
      {
        id: "1-not-woolly",
        label: "Leaf underside not densely woolly",
        next: "populus-2"
      }
    ]
  },

  // 2. Trembling leaves vs non-flattened petioles
  "populus-2": {
    id: "populus-2",
    type: "question",
    questionNumber: 2,
    text: "Leaf stalk shape (strongly flattened vs not) and leaf trembling behavior.",
    options: [
      {
        id: "2-flattened-petiole",
        label:
          "Leaf stalks strongly flattened → leaves tremble in slightest breeze",
        next: "populus-3"
      },
      {
        id: "2-not-flattened-petiole",
        label: "Leaf stalks not strongly flattened",
        next: "populus-4"
      }
    ]
  },

  // 3. Trembling vs Bigtooth aspen
  "populus-3": {
    id: "populus-3",
    type: "question",
    questionNumber: 3,
    text: "Leaf size/shape and bark character for trembling vs bigtooth aspens.",
    options: [
      {
        id: "3-trembling-aspen",
        label:
          "Leaves small, nearly round or broadly ovate; fine serration; bark smooth and whitish on young stems",
        next: "species-Populus-tremuloides"
      },
      {
        id: "3-bigtooth-aspen",
        label:
          "Leaves larger, heart-shaped or broadly triangular; bark darker and furrowed (if present)",
        next: "species-Populus-grandidentata"
      }
    ]
  },

  // 4. Eastern cottonwood vs others
  "populus-4": {
    id: "populus-4",
    type: "question",
    questionNumber: 4,
    text: "Large triangular leaves with thick, deep-furrowed bark vs other poplars.",
    options: [
      {
        id: "4-eastern-cottonwood",
        label:
          "Leaves triangular with straight or slightly curved margins; large trees (to 30 m); thick deep-furrowed bark",
        next: "species-Populus-deltoides"
      },
      {
        id: "4-not-eastern-cottonwood",
        label: "Leaves not as above",
        next: "populus-5"
      }
    ]
  },

  // 5. Balsam poplar vs other triangular/diamond-leaved poplars
  "populus-5": {
    id: "populus-5",
    type: "question",
    questionNumber: 5,
    text: "Leaf aroma, bud resin, and twig fragrance (Balsam vs others with triangular/diamond leaves).",
    options: [
      {
        id: "5-balsam-poplar",
        label:
          "Leaves deltoid to diamond-shaped; dark green above; buds large and resinous; twigs fragrant when scratched",
        next: "species-Populus-balsamifera"
      },
      {
        id: "5-not-balsam-poplar",
        label:
          "Leaves triangular or diamond-shaped but not resinous; buds smaller; bark deeply furrowed",
        next: "populus-6"
      }
    ]
  },

  // 6. Black poplar vs hybrid poplars
  "populus-6": {
    id: "populus-6",
    type: "question",
    questionNumber: 6,
    text: "Leaf shape and crown form (very upright Black Poplar vs variable hybrid).",
    options: [
      {
        id: "6-black-poplar",
        label:
          "Leaves triangular with long, sweeping tips; crown very upright and columnar",
        next: "species-Populus-nigra"
      },
      {
        id: "6-hybrid-poplar",
        label:
          "Traits intermediate between P. deltoides and P. nigra; bark dark; leaves various",
        next: "species-Populus-canadensis"
      }
    ]
  },

  // 7. Jack’s Poplar (hybrid) as a special case
  "species-Populus-jackii": {
    id: "species-Populus-jackii",
    type: "result",
    level: "species",
    name: "Populus × jackii",
    latinName: "Populus × jackii (Jack’s Poplar)",
    notes:
      "Hybrid between Balsam Poplar and Eastern Cottonwood with oval to triangular leaves, extremely resinous buds, and robust twigs."
  },

  // SPECIES RESULTS
  "species-Populus-alba": {
    id: "species-Populus-alba",
    type: "result",
    level: "species",
    name: "Populus alba",
    latinName: "Populus alba (White Poplar)",
    notes:
      "Leaves with densely white-woolly undersides and pale, rough bark; rounded petioles lacking the strong trembling of aspens."
  },
  "species-Populus-tremuloides": {
    id: "species-Populus-tremuloides",
    type: "result",
    level: "species",
    name: "Populus tremuloides",
    latinName: "Populus tremuloides (Trembling Aspen)",
    notes:
      "Small, nearly round leaves on flattened petioles that cause them to tremble in light winds; smooth whitish bark on young stems."
  },
  "species-Populus-grandidentata": {
    id: "species-Populus-grandidentata",
    type: "result",
    level: "species",
    name: "Populus grandidentata",
    latinName: "Populus grandidentata (Bigtooth Aspen)",
    notes:
      "Larger, more angular leaves often with big teeth; bark becomes darker and furrowed with age; present in some upland forests."
  },
  "species-Populus-deltoides": {
    id: "species-Populus-deltoides",
    type: "result",
    level: "species",
    name: "Populus deltoides",
    latinName: "Populus deltoides (Eastern Cottonwood)",
    notes:
      "Very large tree to 30 m with thick, deeply furrowed bark and broad, triangular leaves; common along rivers and open lowlands."
  },
  "species-Populus-balsamifera": {
    id: "species-Populus-balsamifera",
    type: "result",
    level: "species",
    name: "Populus balsamifera",
    latinName: "Populus balsamifera (Balsam Poplar)",
    notes:
      "Deltoid to diamond-shaped leaves dark green above; very resinous, fragrant buds and twigs that are sticky to the touch."
  },
  "species-Populus-nigra": {
    id: "species-Populus-nigra",
    type: "result",
    level: "species",
    name: "Populus nigra",
    latinName: "Populus nigra (Black Poplar)",
    notes:
      "Triangular leaves with long, sweeping tips and a very upright, columnar crown; includes the Lombardy poplar form often used ornamentally."
  },
  "species-Populus-canadensis": {
    id: "species-Populus-canadensis",
    type: "result",
    level: "species",
    name: "Populus × canadensis",
    latinName: "Populus × canadensis (Hybrid Poplar)",
    notes:
      "Hybrid between Eastern Cottonwood and Black Poplar showing intermediate traits: dark bark, variable leaves, and fast growth."
  }
};

export default POPULUS_KEY_NODES;


