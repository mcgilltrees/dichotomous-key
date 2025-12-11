// Binary morphological key for Malus species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const MALUS_KEY_NODES = {
  // 1. Domestic apple vs crabapples / small-fruited Malus
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Fruit size and tree form.",
    options: [
      {
        id: "1-domestic-apple",
        label:
          "Fruit large (>4 cm), typically yellow, red, or green; tree with stout twigs; leaves thick and often slightly fuzzy beneath",
        next: "species-Malus-domestica"
      },
      {
        id: "1-crabapple-sized",
        label:
          "Fruit small (<3 cm), crabapple-sized; tree more shrubby; leaves thinner",
        next: "malus-2"
      },
      {
        id: "1-european-crabapple",
        label:
          "Small wild-type apples; fruit 2–4 cm; leaves sharply serrated; thornlike spur shoots common (if present)",
        next: "species-Malus-sylvestris"
      }
    ]
  },

  // 2. Very small fruits vs slightly larger aromatic fruits
  "malus-2": {
    id: "malus-2",
    type: "question",
    questionNumber: 2,
    text: "Fruit size and colour (very small bright fruits vs slightly larger aromatic ones).",
    options: [
      {
        id: "2-siberian-crabapple",
        label:
          "Fruit very small (<1.5 cm), bright red or yellow; leaves relatively small (3–6 cm); tree upright",
        next: "species-Malus-baccata"
      },
      {
        id: "2-larger-aromatic",
        label:
          "Fruit larger (2–3 cm), pinkish or reddish, aromatic; tree spreading",
        next: "malus-3"
      }
    ]
  },

  // 3. Sweet vs prairie-type crabapples
  "malus-3": {
    id: "malus-3",
    type: "question",
    questionNumber: 3,
    text: "Leaf underside texture and fruit character (smooth vs slightly hairy and blotchy).",
    options: [
      {
        id: "3-sweet-crabapple",
        label:
          "Leaves broadly oval, glabrous (smooth) beneath; fruit mildly aromatic; native to eastern North America",
        next: "species-Malus-coronaria"
      },
      {
        id: "3-prairie-crabapple",
        label:
          "Leaves slightly hairy beneath; fruit often blotchy; tree with irregular crown",
        next: "species-Malus-ioensis"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Malus-domestica": {
    id: "species-Malus-domestica",
    type: "result",
    level: "species",
    name: "Malus pumila / Malus domestica",
    latinName: "Malus pumila / Malus domestica (Domestic Apple)",
    notes:
      "Cultivated apple trees with large (>4 cm) fruits in shades of yellow, red, or green; stout twigs and thicker, slightly fuzzy leaves."
  },
  "species-Malus-baccata": {
    id: "species-Malus-baccata",
    type: "result",
    level: "species",
    name: "Malus baccata",
    latinName: "Malus baccata (Siberian Crabapple)",
    notes:
      "Upright trees with very small (<1.5 cm) bright red or yellow fruits and relatively small (3–6 cm) leaves."
  },
  "species-Malus-coronaria": {
    id: "species-Malus-coronaria",
    type: "result",
    level: "species",
    name: "Malus coronaria",
    latinName: "Malus coronaria (Sweet Crabapple)",
    notes:
      "Broadly oval leaves that are smooth beneath and mildly aromatic fruits; native to eastern North America."
  },
  "species-Malus-ioensis": {
    id: "species-Malus-ioensis",
    type: "result",
    level: "species",
    name: "Malus ioensis",
    latinName: "Malus ioensis (Prairie Crabapple)",
    notes:
      "Leaves slightly hairy on the underside; fruits often blotchy; tree with an irregular crown typical of prairie habitats."
  },
  "species-Malus-sylvestris": {
    id: "species-Malus-sylvestris",
    type: "result",
    level: "species",
    name: "Malus sylvestris",
    latinName: "Malus sylvestris (European Crabapple)",
    notes:
      "Small wild-type apples 2–4 cm across with sharply serrated leaves and thornlike spur shoots; native to Eurasia and occasionally naturalised."
  }
};

export default MALUS_KEY_NODES;


