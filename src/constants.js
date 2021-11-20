export const defaultEvidenceState = {
  1: "none",
  2: "none",
  3: "none",
};

export const objectives = [
  "identify ghost",
  "witness ghost event",
  "ghost photo",
  "EMF reading",
  "motion sensor",
  "smudge ghost area",
  "prevent hunt with crucifix",
  "ghost walk through salt",
  "ghost blow out candle",
  "escape hunt with no deaths",
  "smudge ghost while hunting",
  "get average sanity below 25%",
];

export const evidenceVars = {
  emf: `emf`,
  orbs: `orbs`,
  writing: `writing`,
  freezing: `freezing`,
  spirit_box: `spirit_box`,
  fingerprints: `fingerprints`,
  dots: `dots`,
};

const none = "none";

export const ghostVars = {
  shade: "shade",
  phantom: "phantom",
  jinn: "jinn",
  yurei: "yurei",
  mare: "mare",
  demon: "demon",
  banshee: "banshee",
  revenant: "revenant",
  oni: "oni",
  poltergeist: "poltergeist",
  spirit: "spirit",
  wraith: "wraith",
  yokai: "yokai",
  hantu: "hantu",
  myling: "myling",
  goryo: "goryo",
  obake: "obake",
  raiju: "raiju",
  twins: "twins",
};

const {
  shade,
  phantom,
  jinn,
  yurei,
  mare,
  demon,
  banshee,
  revenant,
  oni,
  poltergeist,
  spirit,
  wraith,
  yokai,
  hantu,
  myling,
  goryo,
  obake,
  raiju,
  twins,
} = ghostVars;
const { emf, orbs, writing, freezing, spirit_box, fingerprints, dots } =
  evidenceVars;

export const evidenceNames = {
  emf: `📈 ${emf}`,
  orbs: `🔮 ${orbs}`,
  writing: `📖 ${writing}`,
  freezing: `🧊 ${freezing}`,
  spirit_box: `📻 ${spirit_box}`,
  fingerprints: `🖐 ${fingerprints}`,
  dots: `🟢 ${dots}`,
};

export const evidenceMap = {
  [none]: [
    shade,
    phantom,
    jinn,
    yurei,
    mare,
    demon,
    banshee,
    revenant,
    oni,
    poltergeist,
    spirit,
    wraith,
    yokai,
    hantu,
    goryo,
    myling,
    obake,
    raiju,
    twins,
  ],
  [writing]: [myling, demon, shade, revenant, mare, poltergeist, spirit],
  [dots]: [goryo, yokai, oni, yurei, banshee, phantom, wraith, raiju],
  [emf]: [myling, goryo, oni, shade, jinn, wraith, spirit, obake, raiju, twins],
  [orbs]: [yokai, hantu, yurei, revenant, mare, banshee, obake, raiju],
  [spirit_box]: [yokai, mare, poltergeist, phantom, wraith, spirit, twins],
  [freezing]: [hantu, oni, yurei, demon, shade, revenant, jinn, twins],
  [fingerprints]: [
    myling,
    goryo,
    hantu,
    demon,
    jinn,
    banshee,
    poltergeist,
    phantom,
    obake,
  ],
};

export const allEvidence = [
  emf,
  orbs,
  writing,
  freezing,
  spirit_box,
  fingerprints,
  dots,
];

export const ghostMap = {
  shade: [emf, freezing, writing],
  phantom: [spirit_box, fingerprints, dots],
  jinn: [emf, fingerprints, freezing],
  yurei: [orbs, dots, freezing],
  mare: [writing, orbs, spirit_box],
  demon: [fingerprints, freezing, writing],
  banshee: [orbs, dots, fingerprints],
  revenant: [orbs, writing, freezing],
  oni: [emf, freezing, dots],
  poltergeist: [writing, spirit_box, fingerprints],
  spirit: [writing, spirit_box, emf],
  wraith: [dots, spirit_box, emf],
  hantu: [fingerprints, orbs, freezing],
  yokai: [spirit_box, orbs, dots],
  goryo: [emf, fingerprints, dots],
  myling: [emf, fingerprints, writing],
  obake: [emf, fingerprints, orbs],
  raiju: [emf, orbs, dots],
  twins: [emf, spirit_box, freezing],
};

export const ghostInfo = {
  [shade]: "Shy, will not hunt with multiple people nearby",
  [phantom]:
    "Looking at phantom will drop sanity, taking a photo of it makes it temporarily disappear",
  [jinn]:
    "Will travel faster if victim is far away, turning off power stops this ability",
  [yurei]:
    "Has a strong effect on sanity, smudging its room will cause it to stay put for a long time",
  [mare]:
    "Increased chance to attack in the dark, decreased chance to attack in the light",
  [demon]:
    "Will attack more often, successful questions via the Ouija Board do not lower sanity",
  [banshee]: "Will attack anything, targets one at a time, fears the Crucifix",
  [revenant]: "Very fast when hunting, hiding from it will slow it down",
  [oni]: "More active with people nearby, moves objects at great speed",
  [poltergeist]:
    "Throws huge amounts of objects at once, can appear as high EMF on graph",
  [spirit]:
    "Using smudge sticks will stop its attack for a long period of time",
  [wraith]:
    "Almost never touch the ground (no footprints), has a toxic reaction to salt",
  [hantu]: "Faster in colder areas, slower in warmer areas",
  [yokai]:
    "Talking near it will cause it to attack more often, can only hear close voices when hunting",
  [goryo]:
    "Usually shows itself on camera if no one is nearby, rarely seen far from place of death",
  [myling]: "Quieter when hunting, more frequently makes paranormal sounds",
  [obake]:
    "Shape-shifters, rarely leave a trace, but leave behind unique evidence (6-finger handprints)",
  [raiju]:
    "A demon that thrives on electrical current, they siphon power from nearby electrical devices allowing them to move faster. They are constantly disrupting electrical equipment",
  [twins]:
    "Ghosts that mimic each other's actions. Will often interact with the environment at the same time.",
};

export const maps = [
  {
    name: "Tanglewood Street House",
    url: "https://www.yekbot.com/wp-content/uploads/2020/10/2251267947_preview_TanglewoodStreetHouse_Map.jpg.webp",
    credit: "Tom Maverick - yekbot.com",
  },
  {
    name: "Willow Street House",
    url: "https://steamuserimages-a.akamaihd.net/ugc/1713038213908602006/D4C6446762EA673A475098184F914CCEDF34D479/",
    credit: "Tom Maverick - steam",
  },
  {
    name: "Edgefield Street House",
    url: "https://steamah.com/wp-content/uploads/2020/10/1603585370.jpg",
    credit: "steamah.com",
  },
  {
    name: "Ridgeview Road House",
    url: "https://www.naguide.com/wp-content/uploads/2020/10/Phasmophobia-Ridgeview-Road-House-Map.jpg",
    credit: "Tom Maverick - naguide.com",
  },
  {
    name: "Grafton Farmhouse",
    url: "https://phasmo.karotte.org/maps/svg/grafton-farmhouse.svg",
    credit: "phasmo.karotte.org",
  },
  {
    name: "Bleasdale Farmhouse",
    url: "https://gamedom.eu/wp-content/uploads/2020/10/Phasmophobia-Bleasdale-Farmhouse-Map-1024x576.jpg",
    credit: "gamedom.eu",
  },
  {
    name: "Brownstone High School",
    url: "https://www.naguide.com/wp-content/uploads/2020/10/Phasmophobia-Brownstone-High-School-Map.jpg",
    credit: "Tom Maverick - naguide.com",
  },
  {
    name: "Prison",
    url: "https://steamuserimages-a.akamaihd.net/ugc/1649969816690467002/DD2EFDDFDE2519FEAC37CECA4B05014023A4972F/",
    credit: "steam",
  },
  {
    name: "Asylum",
    url: "https://steamlists.com/wp-content/uploads/2021/04/Phasmophobia-Guide-to-asylum-steamlists-com.png",
    credit: "steamlists.com",
  },
  {
    name: "Maple Lodge Campsite",
    url: "https://preview.redd.it/qm5u4ef95pv71.png?auto=webp&s=5aa5f885891fa234379c6fcb9269bb42eed852d0",
    credit: "Jocelyngo - reddit.com/PhasmophobiaGame",
  },
];
