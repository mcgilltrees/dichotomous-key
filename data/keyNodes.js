// Basic dichotomous key data for McGill Campus Tree Finder
// --------------------------------------------------------
// Each node is either:
// - type: "question" → offers two choices that point to other nodes
// - type: "result"   → terminal identification (genus or species)
//
// This encodes Section 1 (genus identification) plus selected genus-level keys.

const KEY_NODES = {
  // SECTION 1 — BINARY MORPHOLOGICAL KEY TO ALL GENERA
  root: {
    id: "root",
    type: "question",
    questionNumber: 1,
    text: "What do the leaves look like overall?",
    options: [
      {
        id: "root-needlelike",
        label: "Needlelike or scalelike foliage",
        next: "sec1-2"
      },
      {
        id: "root-broad",
        label: "Broad, flat leaves",
        next: "sec1-7"
      }
    ]
  },

  // 1. Leaves needlelike or scalelike → 2
  // 2. Foliage scalelike and arranged in flattened sprays → Thuja
  "sec1-2": {
    id: "sec1-2",
    type: "question",
    questionNumber: 2,
    text: "Needle vs scale foliage?",
    options: [
      {
        id: "sec1-2-scale",
        label: "Foliage scalelike, in flattened sprays",
        next: "genus-Thuja"
      },
      {
        id: "sec1-2-needle",
        label: "Foliage needlelike",
        next: "sec1-3"
      }
    ]
  },

  // 3. Needles in clusters vs singly
  "sec1-3": {
    id: "sec1-3",
    type: "question",
    questionNumber: 3,
    text: "How are the needles attached?",
    options: [
      {
        id: "sec1-3-clusters",
        label: "Needles in clusters (fascicles) of 2, 3, or 5",
        next: "genus-Pinus"
      },
      {
        id: "sec1-3-single",
        label: "Needles borne singly on the twig",
        next: "sec1-4"
      }
    ]
  },

  // 4. Needles soft, numerous (15–40 per spur), deciduous → Larix
  "sec1-4": {
    id: "sec1-4",
    type: "question",
    questionNumber: 4,
    text: "Needle clusters and seasonality",
    options: [
      {
        id: "sec1-4-larch",
        label: "Soft needles in many-needled clusters, falling in autumn",
        next: "genus-Larix"
      },
      {
        id: "sec1-4-evergreen",
        label: "Evergreen needles, not in large soft clusters",
        next: "sec1-5"
      }
    ]
  },

  // 5. Needles flat vs square-ish
  "sec1-5": {
    id: "sec1-5",
    type: "question",
    questionNumber: 5,
    text: "Needle cross-section and cones",
    options: [
      {
        id: "sec1-5-flat",
        label: "Needles flat, cannot be easily rolled; upright cones",
        next: "genus-Abies"
      },
      {
        id: "sec1-5-square",
        label: "Needles four-sided or nearly so; cones hanging down",
        next: "sec1-6"
      }
    ]
  },

  // 6. Picea vs Tsuga
  "sec1-6": {
    id: "sec1-6",
    type: "question",
    questionNumber: 6,
    text: "Spruce vs hemlock characters",
    options: [
      {
        id: "sec1-6-spruce",
        label: "Needles on woody pegs; twigs rough; cones pendulous",
        next: "genus-Picea"
      },
      {
        id: "sec1-6-hemlock",
        label: "Short needles in two ranks; fine twigs; small hanging cones",
        next: "result-Tsuga"
      }
    ]
  },

  // Broadleaf portion
  "sec1-7": {
    id: "sec1-7",
    type: "question",
    questionNumber: 7,
    text: "How are the leaves arranged on the twig?",
    options: [
      {
        id: "sec1-7-opposite",
        label: "Opposite (paired at each node)",
        next: "sec1-8"
      },
      {
        id: "sec1-7-alternate",
        label: "Alternate (staggered along twig)",
        next: "sec1-11"
      }
    ]
  },

  // Opposite-leaved broadleaf
  "sec1-8": {
    id: "sec1-8",
    type: "question",
    questionNumber: 8,
    text: "Are the opposite leaves simple or compound?",
    options: [
      {
        id: "sec1-8-simple",
        label: "Leaves simple; samaras (winged seeds) often present",
        next: "genus-Acer"
      },
      {
        id: "sec1-8-compound",
        label: "Leaves compound",
        next: "sec1-9"
      }
    ]
  },

  "sec1-9": {
    id: "sec1-9",
    type: "question",
    questionNumber: 9,
    text: "Opposite compound leaves",
    options: [
      {
        id: "sec1-9-fraxinus",
        label: "5–11 leaflets; seeds in paired samaras",
        next: "genus-Fraxinus"
      },
      {
        id: "sec1-9-catalpa",
        label: "Very large heart-shaped leaves; showy flower panicles",
        next: "genus-Catalpa"
      }
    ]
  },

  // Alternate-leaved broadleaf
  "sec1-11": {
    id: "sec1-11",
    type: "question",
    questionNumber: 11,
    text: "Are the alternate leaves compound or simple?",
    options: [
      {
        id: "sec1-11-compound",
        label: "Leaves compound (with separate leaflets)",
        next: "sec1-12"
      },
      {
        id: "sec1-11-simple",
        label: "Leaves simple (one blade per leaf stalk)",
        next: "sec1-16"
      }
    ]
  },

  "sec1-12": {
    id: "sec1-12",
    type: "question",
    questionNumber: 12,
    text: "Leaflet number and thorns",
    options: [
      {
        id: "sec1-12-gleditsia",
        label: "Many small leaflets (>10), often with thorns on trunk/branches",
        next: "genus-Gleditsia"
      },
      {
        id: "sec1-12-fewer",
        label: "Fewer leaflets (5–19), no large trunk thorns",
        next: "sec1-13"
      }
    ]
  },

  "sec1-13": {
    id: "sec1-13",
    type: "question",
    questionNumber: 13,
    text: "Compound-leaf broadleaf genera",
    options: [
      {
        id: "sec1-13-juglans",
        label: "7–19 aromatic leaflets; nuts in thick husks",
        next: "genus-Juglans"
      },
      {
        id: "sec1-13-robinia",
        label: "7–15 thin leaflets; deeply furrowed bark; papery flowers",
        next: "genus-Robinia"
      }
    ]
  },

  // Simple-leaf broadleaf genera
  "sec1-16": {
    id: "sec1-16",
    type: "question",
    questionNumber: 16,
    text: "Are the leaves lobed?",
    options: [
      {
        id: "sec1-16-lobed",
        label: "Leaves lobed",
        next: "sec1-17"
      },
      {
        id: "sec1-16-unlobed",
        label: "Leaves unlobed (entire or only finely toothed)",
        next: "sec1-21"
      }
    ]
  },

  "sec1-17": {
    id: "sec1-17",
    type: "question",
    questionNumber: 17,
    text: "Lobed leaf tips and fruit type",
    options: [
      {
        id: "sec1-17-oak",
        label: "Rounded lobes with acorns present",
        next: "genus-Quercus"
      },
      {
        id: "sec1-17-pointed",
        label: "Pointed or toothed lobes, no acorns",
        next: "sec1-18"
      }
    ]
  },

  "sec1-18": {
    id: "sec1-18",
    type: "question",
    questionNumber: 18,
    text: "Leaf arrangement for lobed leaves without acorns",
    options: [
      {
        id: "sec1-18-acer",
        label: "Opposite leaves; samaras present",
        next: "genus-Acer"
      },
      {
        id: "sec1-18-alt",
        label: "Alternate leaves",
        next: "sec1-19"
      }
    ]
  },

  "sec1-19": {
    id: "sec1-19",
    type: "question",
    questionNumber: 19,
    text: "Lobed alternate leaves",
    options: [
      {
        id: "sec1-19-liquidambar",
        label: "Star-shaped leaves; spiky ball fruits",
        next: "result-Liquidambar"
      },
      {
        id: "sec1-19-populus",
        label: "3–5 lobed, soft leaves; catkins",
        next: "genus-Populus"
      }
    ]
  },

  "sec1-21": {
    id: "sec1-21",
    type: "question",
    questionNumber: 21,
    text: "Unlobed leaves",
    options: [
      {
        id: "sec1-21-betula",
        label: "Triangular leaves; often with papery bark",
        next: "genus-Betula"
      },
      {
        id: "sec1-21-not-birch",
        label: "Leaves not triangular / bark not papery",
        next: "sec1-22"
      }
    ]
  },

  "sec1-22": {
    id: "sec1-22",
    type: "question",
    questionNumber: 22,
    text: "Leaf base shape",
    options: [
      {
        id: "sec1-22-ulmus",
        label: "Strongly asymmetrical leaf base",
        next: "genus-Ulmus"
      },
      {
        id: "sec1-22-sym",
        label: "Leaf base more or less symmetrical",
        next: "sec1-23"
      }
    ]
  },

  "sec1-23": {
    id: "sec1-23",
    type: "question",
    questionNumber: 23,
    text: "Leaf shape and catkins",
    options: [
      {
        id: "sec1-23-salix",
        label: "Leaves long, narrow, flexible; catkins present",
        next: "genus-Salix"
      },
      {
        id: "sec1-23-not-salix",
        label: "Leaves not extremely narrow",
        next: "sec1-24"
      }
    ]
  },

  "sec1-24": {
    id: "sec1-24",
    type: "question",
    questionNumber: 24,
    text: "Leaf surface colour",
    options: [
      {
        id: "sec1-24-elaeagnus",
        label: "Leaves silvery or covered in scales",
        next: "result-Elaeagnus"
      },
      {
        id: "sec1-24-green",
        label: "Ordinary green leaves (not silvery)",
        next: "sec1-25"
      }
    ]
  },

  "sec1-25": {
    id: "sec1-25",
    type: "question",
    questionNumber: 25,
    text: "Bark and leaf texture",
    options: [
      {
        id: "sec1-25-fagus",
        label: "Smooth gray bark; thin papery leaves",
        next: "genus-Fagus"
      },
      {
        id: "sec1-25-other",
        label: "Bark and leaves not as above",
        next: "sec1-26"
      }
    ]
  },

  "sec1-26": {
    id: "sec1-26",
    type: "question",
    questionNumber: 26,
    text: "Small trees/shrubs with berries",
    options: [
      {
        id: "sec1-26-amelanchier",
        label: "White spring blossoms; small edible berries",
        next: "genus-Amelanchier"
      },
      {
        id: "sec1-26-rosaceae",
        label: "Berries in clusters; serrated leaves",
        next: "sec1-27"
      }
    ]
  },

  "sec1-27": {
    id: "sec1-27",
    type: "question",
    questionNumber: 27,
    text: "Fruit type in Rosaceae trees",
    options: [
      {
        id: "sec1-27-pome",
        label: "Fruit is a pome (apple-like)",
        next: "result-Pome-group"
      },
      {
        id: "sec1-27-drupe",
        label: "Fruit is a drupe (cherry-like with a stone)",
        next: "genus-Prunus"
      }
    ]
  },

  // GENUS RESULTS (Section 1 endpoints)
  "genus-Thuja": {
    id: "genus-Thuja",
    type: "result",
    level: "genus",
    name: "Thuja",
    latinName: "Thuja (Arborvitae / Cedars)",
    notes:
      "Flattened sprays of scale leaves; tiny woody cones. Common hedging and ornamental evergreen."
  },
  "genus-Pinus": {
    id: "genus-Pinus",
    type: "result",
    level: "genus",
    name: "Pinus",
    latinName: "Pinus (Pines)",
    notes:
      "Evergreen conifers with needles in bundles (fascicles) and woody cones."
  },
  "genus-Larix": {
    id: "genus-Larix",
    type: "result",
    level: "genus",
    name: "Larix",
    latinName: "Larix (Larches / Tamaracks)",
    notes:
      "Deciduous conifers with soft needles in tufts; needles turn golden and drop in autumn."
  },
  "genus-Abies": {
    id: "genus-Abies",
    type: "result",
    level: "genus",
    name: "Abies",
    latinName: "Abies (Firs)",
    notes: "Flat, friendly needles; cones upright and often disintegrate on the branch."
  },
  "genus-Picea": {
    id: "genus-Picea",
    type: "result",
    level: "genus",
    name: "Picea",
    latinName: "Picea (Spruces)",
    notes:
      "Sharp, square needles on woody pegs; hanging cones; rough twigs. Includes Norway and white spruce."
  },
  "result-Tsuga": {
    id: "result-Tsuga",
    type: "result",
    level: "genus",
    name: "Tsuga",
    latinName: "Tsuga (Hemlocks)",
    notes: "Short, flat needles in two ranks; tiny pendant cones and delicate twigs."
  },
  "genus-Acer": {
    id: "genus-Acer",
    type: "result",
    level: "genus",
    name: "Acer",
    latinName: "Acer (Maples)",
    notes: "Opposite leaves and paired winged seeds (samaras). Includes sugar and red maples."
  },
  "genus-Fraxinus": {
    id: "genus-Fraxinus",
    type: "result",
    level: "genus",
    name: "Fraxinus",
    latinName: "Fraxinus (Ashes)",
    notes:
      "Opposite, pinnately compound leaves and clusters of winged seeds; bark often with diamond ridges."
  },
  "genus-Catalpa": {
    id: "genus-Catalpa",
    type: "result",
    level: "genus",
    name: "Catalpa",
    latinName: "Catalpa",
    notes:
      "Very large heart-shaped leaves, showy white flowers, and long slender seed pods."
  },
  "genus-Gleditsia": {
    id: "genus-Gleditsia",
    type: "result",
    level: "genus",
    name: "Gleditsia",
    latinName: "Gleditsia (Honeylocusts)",
    notes:
      "Many small leaflets; often with large branched thorns on trunk and branches (wild type)."
  },
  "genus-Juglans": {
    id: "genus-Juglans",
    type: "result",
    level: "genus",
    name: "Juglans",
    latinName: "Juglans (Walnuts)",
    notes:
      "Strongly aromatic compound leaves; large nuts in thick green husks; dark, furrowed bark."
  },
  "genus-Robinia": {
    id: "genus-Robinia",
    type: "result",
    level: "genus",
    name: "Robinia",
    latinName: "Robinia (Locusts)",
    notes:
      "Compound leaves with oval leaflets; fragrant pea-like flower clusters; often with paired spines."
  },
  "genus-Quercus": {
    id: "genus-Quercus",
    type: "result",
    level: "genus",
    name: "Quercus",
    latinName: "Quercus (Oaks)",
    notes:
      "Lobed leaves and acorns. Includes white and red oak groups common on campus."
  },
  "result-Liquidambar": {
    id: "result-Liquidambar",
    type: "result",
    level: "genus",
    name: "Liquidambar",
    latinName: "Liquidambar (Sweetgum)",
    notes:
      "Star-shaped leaves and spiny spherical fruits. Often planted as an ornamental."
  },
  "genus-Populus": {
    id: "genus-Populus",
    type: "result",
    level: "genus",
    name: "Populus",
    latinName: "Populus (Poplars, Aspens, Cottonwoods)",
    notes:
      "Fast-growing trees with fluttering leaves and cottony seeds; bark often pale and furrowed with age."
  },
  "genus-Betula": {
    id: "genus-Betula",
    type: "result",
    level: "genus",
    name: "Betula",
    latinName: "Betula (Birches)",
    notes:
      "Often with peeling bark and triangular leaves; includes paper birch and river birch."
  },
  "genus-Ulmus": {
    id: "genus-Ulmus",
    type: "result",
    level: "genus",
    name: "Ulmus",
    latinName: "Ulmus (Elms)",
    notes:
      "Asymmetrical leaf bases with double serration; vase-shaped crowns in classic street elms."
  },
  "genus-Salix": {
    id: "genus-Salix",
    type: "result",
    level: "genus",
    name: "Salix",
    latinName: "Salix (Willows)",
    notes:
      "Very narrow, flexible leaves and catkins; includes weeping and white willows along water bodies."
  },
  "result-Elaeagnus": {
    id: "result-Elaeagnus",
    type: "result",
    level: "genus",
    name: "Elaeagnus",
    latinName: "Elaeagnus",
    notes:
      "Silvery or scaly leaves; often a shrub or small tree with fragrant flowers and small fruits."
  },
  "genus-Fagus": {
    id: "genus-Fagus",
    type: "result",
    level: "genus",
    name: "Fagus",
    latinName: "Fagus (Beeches)",
    notes:
      "Exceptionally smooth gray bark; thin, papery leaves with wavy margins; sharply pointed buds."
  },
  "genus-Amelanchier": {
    id: "genus-Amelanchier",
    type: "result",
    level: "genus",
    name: "Amelanchier",
    latinName: "Amelanchier (Serviceberries / Saskatoons)",
    notes:
      "Early white blossoms and small sweet berries; multi-stemmed shrubs or small trees."
  },
  "result-Pome-group": {
    id: "result-Pome-group",
    type: "result",
    level: "group",
    name: "Pome-fruited Rosaceae",
    latinName: "Amelanchier / Malus / Sorbus / Crataegus",
    notes:
      "Pome fruits (apple-like) in clusters. To go further, use genus-specific keys for serviceberries, crabapples, mountain ashes, and hawthorns."
  },
  "genus-Prunus": {
    id: "genus-Prunus",
    type: "result",
    level: "genus",
    name: "Prunus",
    latinName: "Prunus (Cherries, Plums, and Allies)",
    notes:
      "White to pink blossoms and drupes (stone fruits); bark often with horizontal lenticels."
  }
};

export default KEY_NODES;


