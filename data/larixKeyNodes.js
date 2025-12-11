// Binary morphological key for Larix species on McGill campus
// -----------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const LARIX_KEY_NODES = {
  // 1. Cone size/orientation and needle characters
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "Cone size/orientation and needle clusters.",
    options: [
      {
        id: "1-larix-laricina",
        label:
          "Cones small (1–2 cm), upright; cone scales thin; bracts short, not protruding; needles soft, pale green, 1–2 cm, in clusters of 10–20; bark flaky",
        next: "species-Larix-laricina"
      },
      {
        id: "1-larger-cones",
        label:
          "Cones larger (>2.5 cm), bracts often protruding; needles longer (2–4 cm)",
        next: "larix-2"
      }
    ]
  },

  // 2. European vs Japanese larch
  "larix-2": {
    id: "larix-2",
    type: "question",
    questionNumber: 2,
    text: "Cone bracts and twig colour.",
    options: [
      {
        id: "2-larix-decidua",
        label:
          "Cones 2.5–4 cm, with long exerted bracts (often conspicuous); needles borne in dense tufts of 30–40; twigs reddish",
        next: "species-Larix-decidua"
      },
      {
        id: "2-larix-kaempferi",
        label:
          "Cones 2.5–3.5 cm, bracts shorter and less strongly exerted; needles bluish-green, softer; twigs yellow-brown",
        next: "species-Larix-kaempferi"
      }
    ]
  },

  // SPECIES RESULTS
  "species-Larix-laricina": {
    id: "species-Larix-laricina",
    type: "result",
    level: "species",
    name: "Larix laricina",
    latinName: "Larix laricina (Tamarack / Eastern Larch)",
    notes:
      "Small (1–2 cm) upright cones with thin scales and short non-protruding bracts; soft pale-green needles 1–2 cm long in clusters of 10–20; flaky bark."
  },
  "species-Larix-decidua": {
    id: "species-Larix-decidua",
    type: "result",
    level: "species",
    name: "Larix decidua",
    latinName: "Larix decidua (European Larch)",
    notes:
      "Cones 2.5–4 cm with long conspicuously exerted bracts; needles in dense tufts of 30–40 on reddish twigs."
  },
  "species-Larix-kaempferi": {
    id: "species-Larix-kaempferi",
    type: "result",
    level: "species",
    name: "Larix kaempferi",
    latinName: "Larix kaempferi (Japanese Larch)",
    notes:
      "Cones 2.5–3.5 cm with shorter, less strongly exerted bracts; softer bluish-green needles and yellow-brown twigs."
  }
};

export default LARIX_KEY_NODES;



