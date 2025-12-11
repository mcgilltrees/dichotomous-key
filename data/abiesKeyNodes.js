// Binary morphological key for Abies species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const ABIES_KEY_NODES = {
  // 1. Balsam fir vs White fir
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Needle length/colour and bark character.",
    options: [
      {
        id: "1-balsam-fir",
        label:
          "Needles flat, 1.5–3 cm long, dark green above, with two white stomatal bands below; needle tips blunt; cones upright 5–10 cm; bark smooth with resin blisters",
        next: "species-Abies-balsamea"
      },
      {
        id: "1-white-fir",
        label:
          "Needles longer (3–6 cm), bluish-green to silvery; needle tips rounded or slightly notched; cones 7–12 cm; bark more grayish and furrowed with age",
        next: "species-Abies-concolor"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Abies-balsamea": {
    id: "species-Abies-balsamea",
    type: "result",
    level: "species",
    name: "Abies balsamea",
    latinName: "Abies balsamea (Balsam Fir)",
    notes:
      "Flat, dark-green needles 1.5–3 cm long with two white stomatal bands beneath and blunt tips; smooth gray bark with prominent resin blisters and upright cones 5–10 cm."
  },
  "species-Abies-concolor": {
    id: "species-Abies-concolor",
    type: "result",
    level: "species",
    name: "Abies concolor",
    latinName: "Abies concolor (White Fir)",
    notes:
      "Longer (3–6 cm), bluish-green to silvery needles with rounded or slightly notched tips; grayish bark becoming furrowed with age and upright cones 7–12 cm."
  }
};

export default ABIES_KEY_NODES;


