// Binary morphological key for Quercus species on McGill campus
// ------------------------------------------------------------
// Structure mirrors the main KEY_NODES format:
// - type: "question" → two-way branching question
// - type: "result"   → terminal species identification

const QUERCUS_KEY_NODES = {
  // 1. Bristle-tipped vs not (Red oak group vs White oak group)
  root: {
    id: "root",
    type: "question",
    text: "1. What do the leaf lobes look like at their tips?",
    options: [
      {
        id: "1-bristle",
        label: "Leaves with bristle-tipped lobes (RED OAK GROUP)",
        next: "red-2"
      },
      {
        id: "1-no-bristle",
        label: "Leaves without bristle tips (WHITE OAK GROUP)",
        next: "white-6"
      },
      {
        id: "1-special-english",
        label: "Leaves with 3–7 triangular lobes and auricled base (special case)",
        next: "species-Quercus-robur"
      }
    ]
  },

  // RED OAK GROUP
  "red-2": {
    id: "red-2",
    type: "question",
    text: "2. How deep are the sinuses between the lobes?",
    options: [
      {
        id: "2-deep-sinuses",
        label: "Sinuses very deep, often reaching near the midrib; leaves strongly cut",
        next: "red-3"
      },
      {
        id: "2-shallow-sinuses",
        label: "Sinuses shallow to moderate; lobes broad",
        next: "red-4"
      }
    ]
  },

  "red-3": {
    id: "red-3",
    type: "question",
    text:
      "3. Slender lobes vs very drooping lower branches with extremely deep lowest sinuses",
    options: [
      {
        id: "3-scarlet-oak",
        label:
          "Lobes slender and bristle-tipped; sinuses narrow and deep; fall color bright scarlet",
        next: "species-Quercus-coccinea"
      },
      {
        id: "3-pin-oak",
        label:
          "Lower branches strongly drooping; lowest sinuses extremely deep; leaves narrow",
        next: "species-Quercus-palustris"
      }
    ]
  },

  "red-4": {
    id: "red-4",
    type: "question",
    text: "4. Broad, sharply pointed lobes vs glossy leaves with yellowish midrib",
    options: [
      {
        id: "4-northern-red-oak",
        label:
          "Leaves with 7–11 lobes; lobes broad and sharply pointed; underside dull",
        next: "species-Quercus-rubra"
      },
      {
        id: "4-black-oak",
        label:
          "Leaves with glossy upper surface and yellowish midrib; bark blocky, inner bark yellow",
        next: "species-Quercus-velutina"
      }
    ]
  },

  // WHITE OAK GROUP
  "white-6": {
    id: "white-6",
    type: "question",
    text: "6. How deep and fringed are the rounded lobes and acorn cups?",
    options: [
      {
        id: "6-bur-oak",
        label:
          "Leaves with deep rounded lobes; lobes widely variable; acorn cups fringed",
        next: "species-Quercus-macrocarpa"
      },
      {
        id: "6-not-bur-oak",
        label: "Leaves less extremely lobed; acorn cups not conspicuously fringed",
        next: "white-7"
      }
    ]
  },

  "white-7": {
    id: "white-7",
    type: "question",
    text: "7. Shallow rounded lobes vs few lobes near tip with velvety underside",
    options: [
      {
        id: "7-white-oak",
        label:
          "Leaves with shallow rounded lobes; underside uniformly pale; bark plated with loose flakes",
        next: "species-Quercus-alba"
      },
      {
        id: "7-swamp-white-oak",
        label:
          "Leaves with 1–3 shallow, rounded lobes near tip; leaf underside velvety; acorns with shaggy cup scales",
        next: "species-Quercus-bicolor"
      }
    ]
  },

  // SPECIAL CASE
  "species-Quercus-robur": {
    id: "species-Quercus-robur",
    type: "result",
    level: "species",
    name: "Quercus robur",
    latinName: "Quercus robur (English Oak)",
    notes:
      "Leaves with 3–7 triangular lobes and auricled (ear-like) base; distinctive X-shaped sinuses. Widely planted European oak."
  },

  // SPECIES RESULTS
  "species-Quercus-coccinea": {
    id: "species-Quercus-coccinea",
    type: "result",
    level: "species",
    name: "Quercus coccinea",
    latinName: "Quercus coccinea (Scarlet Oak)",
    notes:
      "Deeply cut leaves with slender, bristle-tipped lobes and narrow sinuses; brilliant scarlet fall colour."
  },
  "species-Quercus-palustris": {
    id: "species-Quercus-palustris",
    type: "result",
    level: "species",
    name: "Quercus palustris",
    latinName: "Quercus palustris (Pin Oak)",
    notes:
      "Narrow leaves with very deep lowest sinuses; tree with strongly drooping lower branches and ascending upper branches."
  },
  "species-Quercus-rubra": {
    id: "species-Quercus-rubra",
    type: "result",
    level: "species",
    name: "Quercus rubra",
    latinName: "Quercus rubra (Northern Red Oak)",
    notes:
      "Broad, sharply pointed lobes (7–11 per leaf) with shallow to moderate sinuses; underside dull; common urban oak."
  },
  "species-Quercus-velutina": {
    id: "species-Quercus-velutina",
    type: "result",
    level: "species",
    name: "Quercus velutina",
    latinName: "Quercus velutina (Black Oak)",
    notes:
      "Glossy dark-green leaves with yellowish midrib; bark blocky with yellowish inner bark; typically darker overall aspect."
  },
  "species-Quercus-macrocarpa": {
    id: "species-Quercus-macrocarpa",
    type: "result",
    level: "species",
    name: "Quercus macrocarpa",
    latinName: "Quercus macrocarpa (Bur Oak)",
    notes:
      "Leaves with very deep, irregular rounded lobes; extremely variable shape; large acorns with conspicuously fringed cups."
  },
  "species-Quercus-alba": {
    id: "species-Quercus-alba",
    type: "result",
    level: "species",
    name: "Quercus alba",
    latinName: "Quercus alba (White Oak)",
    notes:
      "Leaves with shallow rounded lobes and uniformly pale underside; bark light and broken into loose, platelike flakes."
  },
  "species-Quercus-bicolor": {
    id: "species-Quercus-bicolor",
    type: "result",
    level: "species",
    name: "Quercus bicolor",
    latinName: "Quercus bicolor (Swamp White Oak)",
    notes:
      "Leaves with 1–3 shallow lobes near the tip; underside velvety; acorns borne in cups with characteristically shaggy scales."
  }
};

export default QUERCUS_KEY_NODES;


