// Binary morphological key for Betula species on McGill campus
// ------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const BETULA_KEY_NODES = {
  // 1. Paper birch vs other birches
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Bark character and colour on the trunk.",
    options: [
      {
        id: "1-paper-birch",
        label:
          "Bark peeling in large papery sheets; bark white or creamy; twigs lacking wintergreen odor",
        next: "species-Betula-papyrifera"
      },
      {
        id: "1-not-paper-birch",
        label:
          "Bark not peeling in large papery sheets; colour not pure white",
        next: "betula-2"
      }
    ]
  },

  // 2. River birch vs other exfoliating birches
  "betula-2": {
    id: "betula-2",
    type: "question",
    questionNumber: 2,
    text: "Bark exfoliation style and colour (shaggy salmon vs thinner curls/scales).",
    options: [
      {
        id: "2-river-birch",
        label:
          "Bark exfoliating in curly, shaggy strips; bark colour salmon-pink to reddish-brown",
        next: "species-Betula-nigra"
      },
      {
        id: "2-other-thin-curls",
        label:
          "Bark peeling in thin curls or scales; colour gray, yellow, or chalk-white",
        next: "betula-3"
      }
    ]
  },

  // 3. Yellow birch vs others
  "betula-3": {
    id: "betula-3",
    type: "question",
    questionNumber: 3,
    text: "Wintergreen odor of twigs and bark colour (bronze-yellow vs chalk-white/gray).",
    options: [
      {
        id: "3-yellow-birch",
        label:
          "Twigs with strong wintergreen odor when scratched; bark bronze-yellow to golden; leaves doubly serrated",
        next: "species-Betula-alleghaniensis"
      },
      {
        id: "3-no-wintergreen",
        label: "Twigs lacking wintergreen odor",
        next: "betula-4"
      }
    ]
  },

  // 4. European White vs Gray birch
  "betula-4": {
    id: "betula-4",
    type: "question",
    questionNumber: 4,
    text: "Bark whiteness, trunk form, and leaf shape (chalk-white vs grayish smaller tree).",
    options: [
      {
        id: "4-european-white",
        label:
          "Bark chalk-white, often with diamond-shaped dark patches; trunk frequently multi-stemmed; leaves triangular-ovate",
        next: "species-Betula-pendula"
      },
      {
        id: "4-gray-birch",
        label:
          "Bark gray or whitish, but not chalk-white; leaves triangular; generally smaller tree",
        next: "species-Betula-populifolia"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Betula-papyrifera": {
    id: "species-Betula-papyrifera",
    type: "result",
    level: "species",
    name: "Betula papyrifera",
    latinName: "Betula papyrifera (Paper Birch)",
    notes:
      "White to creamy bark peeling off in broad papery sheets; twigs lack a wintergreen odor. Iconic northern Paper Birch."
  },
  "species-Betula-nigra": {
    id: "species-Betula-nigra",
    type: "result",
    level: "species",
    name: "Betula nigra",
    latinName: "Betula nigra (River Birch)",
    notes:
      "Bark exfoliating in thick, curly, shaggy strips with salmon-pink to reddish tones; common along streams and wet sites."
  },
  "species-Betula-alleghaniensis": {
    id: "species-Betula-alleghaniensis",
    type: "result",
    level: "species",
    name: "Betula alleghaniensis",
    latinName: "Betula alleghaniensis (Yellow Birch)",
    notes:
      "Bronze-yellow to golden bark that peels in thin curls; twigs smell strongly of wintergreen when scratched; leaves finely and doubly serrated."
  },
  "species-Betula-pendula": {
    id: "species-Betula-pendula",
    type: "result",
    level: "species",
    name: "Betula pendula",
    latinName: "Betula pendula (European White Birch)",
    notes:
      "Chalk-white bark with dark diamond-shaped patches; often multi-stemmed with triangular-ovate leaves; widely planted ornamental birch."
  },
  "species-Betula-populifolia": {
    id: "species-Betula-populifolia",
    type: "result",
    level: "species",
    name: "Betula populifolia",
    latinName: "Betula populifolia (Gray Birch)",
    notes:
      "Grayish to dull whitish bark lacking strong chalk-white colour; generally smaller tree with triangular leaves, often on poor or disturbed soils."
  }
};

export default BETULA_KEY_NODES;


