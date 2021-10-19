export const someActions = [
  {
    action: "Draw",
    article: false,
    preposition: true,
    subactions: [
      "ink",
      "graphite",
      "marker",
      "pen",
      "charcoal",
      "sharpie",
      "woodburning",
    ],
  },
  {
    action: "Paint",
    article: false,
    preposition: true,
    subactions: ["acrylic", "oil", "watercolor", "spraypaint"],
  },
  {
    action: "Sculpt",
    article: false,
    preposition: true,
    subactions: [
      "cardboard",
      "clay",
      "papermache",
      "metal",
      "wood",
      "found object/assemblage",
    ],
  },
  {
    action: "Design",
    article: true,
    preposition: false,
    subactions: ["logo", "product", "advertisement", "poster", "pattern"],
  },
];

export const subjects = [
  {
    subject: "animals",
    animallist: [
      "hippo",
      "armadillo",
      "mantee",
      "sloth",
      "elephant",
      "bat",
      "whale",
      "mouse",
      "rabbit",
      "hedgehog",
      "dog",
      "cat",
      "rhino",
      "camel",
      "bear",
      "gopher",
      "squirrel",
      "lemur",
      "opossum",
      "stingray",
      "barracuda",
      "pufferfish",
      "clownfish",
      "eel",
      "flatfish",
    ],
  },

  {
    subject: "monsters",
    monsterlist: ["demon", "slenderman", "witch", "djinn"],
  },

  {
    subject: "dinosaurs",
    dinosaurlist: ["trex", "velociraptor", "stegosaurus", "triceratops"],
  },
  {
    subject: "cryptids",
    list: [
      "lochness",
      "bigfoot",
      "chupacabra",
      "yeti",
      "mothman",
      "mongolian death worm",
    ],
  },

  {
    subject: "still life",
  },

  {
    subject: "hybrid",
  },
];

export const stuffList = [
  "trash",
  "food",
  "hair",
  "paper",
  "bugs",
  "swamp",
  "desert",
  "dessert",
  "mirror",
  "sword",
  "gun",
  "robot",
  "space",
  "cubes",
  "goo",
  "train",
  "sneakers",
  "nightmare",
  "book",
  "ladder",
  "eggs",
  "grilled cheese",
];

export const adjectives = [
  "sticky",
  "wet",
  "dry",
  "angry",
  "happy",
  "sad",
  "confused",
  "clean",
  "stinky",
];

export const scenarios = ["contemplating life", "in space", "riding a bike"];

export const styles = [
  "3-4 panel comic",
  "realistic",
  "abstract",
  "cartoon",
  "surrealistic",
  "collage",
];

export default "this is the default thing";

// export default {
//   actions: actions,
//   subject: subject,
//   adjectives: adjectives,
// };
