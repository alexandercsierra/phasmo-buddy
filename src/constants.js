export const defaultEvidenceState = {
  1: "none",
  2: "none",
  3: "none"
}

export const evidenceVars = {
  emf: "📈 emf",
  orbs: "🔮 orbs",
  writing: "📖 writing",
  freezing: "🧊 freezing",
  spirit_box: "📻 spirit box",
  fingerprints: "🖐 fingerprints"
};
const none = "none"

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
}

const { shade, phantom, jinn, yurei, mare, demon, banshee, revenant, oni, poltergeist, spirit, wraith, yokai, hantu } = ghostVars;
const { emf, orbs, writing, freezing, spirit_box, fingerprints } = evidenceVars;

export const evidenceMap = {
  [none]: [ shade, phantom, jinn, yurei, mare, demon, banshee, revenant, oni, poltergeist, spirit, wraith, yokai, hantu ],
  [fingerprints]: [ banshee, revenant, poltergeist, spirit, wraith, hantu ],
  [orbs]: [ shade, phantom, jinn, yurei, mare, poltergeist, yokai, hantu ],
  [writing]: [ shade, yurei, demon, revenant, oni, spirit, yokai, hantu ],
  [freezing]: [phantom, yurei, demon, mare, banshee, wraith],
  [spirit_box]: [ jinn, mare, demon, oni, poltergeist, spirit, wraith, yokai],
  [emf]: [shade, phantom, jinn, banshee, revenant, oni]
};


export const allEvidence = [ emf, orbs, writing, freezing, spirit_box, fingerprints ];

export const ghostMap = {
  shade: [emf, orbs, writing],
  phantom: [emf, orbs, freezing],
  jinn: [emf, orbs, spirit_box],
  yurei: [orbs, writing, freezing],
  mare: [orbs, freezing, spirit_box],
  demon: [writing, freezing, spirit_box],
  banshee: [emf, freezing, fingerprints],
  revenant: [emf, writing, fingerprints],
  oni: [emf, writing, spirit_box],
  poltergeist: [orbs, spirit_box, fingerprints],
  spirit: [writing, spirit_box, fingerprints],
  wraith: [freezing, spirit_box, fingerprints],
  hantu: [fingerprints, orbs, writing],
  yokai: [spirit_box, orbs, writing]
};

export const ghostInfo = {
  [shade]: "shy, will not hunt with multiple people nearby",
  [phantom]:
    "looking at phantom will drop sanity, taking a photo of it makes it temporarily disappear",
  [jinn]:
    "will travel faster if victim is far away, turning off power stops this ability",
  [yurei]:
    "has a strong effect on sanity, smudging its room will cause it to stay put for a long time",
  [mare]:
    "increased chance to attack in the dark, decreased chance to attack in the light",
  [demon]:
    "will attack more often, successful questions via the Ouija Board do not lower sanity",
  [banshee]: "will attack anything, targets one at a time, fears the Crucifix",
  [revenant]: "very fast when hunting, hiding from it will slow it down",
  [oni]: "more active with people nearby, moves objects at great speed",
  [poltergeist]:
    "throws huge amounts of objects at once, can appear as high EMF on graph",
  [spirit]: "using smudge sticks will stop its attack for a long period of time",
  [wraith]:
    "almost never touch the ground (no footsteps), has a toxic reaction to salt",
  [hantu]: "faster in colder areas, slower in warmer areas",
  [yokai]:
    "talking near it will cause it to attack more often, can only hear close voices when hunting"
};

export const maps = [
  {
    name: "Tanglewood Street House",
    url:
      "https://www.yekbot.com/wp-content/uploads/2020/10/2251267947_preview_TanglewoodStreetHouse_Map.jpg.webp",
    credit: "yekbot.com"
  },
  {
    name: "Willow Street House",
    url:
      "https://steamuserimages-a.akamaihd.net/ugc/1713038213908602006/D4C6446762EA673A475098184F914CCEDF34D479/",
    credit: "steam"
  },
  {
    name: "Edgefield Street House",
    url: "https://steamah.com/wp-content/uploads/2020/10/1603585370.jpg",
    credit: "steamah.com"
  },
  {
    name: "Ridgeview Road House",
    url:
      "https://www.naguide.com/wp-content/uploads/2020/10/Phasmophobia-Ridgeview-Road-House-Map.jpg",
    credit: "naguide.com"
  },
  {
    name: "Grafton Farmhouse",
    url: "https://phasmo.karotte.org/maps/svg/grafton-farmhouse.svg",
    credit: "phasmo.karotte.org"
  },
  {
    name: "Bleasdale Farmhouse",
    url:
      "https://gamedom.eu/wp-content/uploads/2020/10/Phasmophobia-Bleasdale-Farmhouse-Map-1024x576.jpg",
    credit: "gamedom.eu"
  },
  {
    name: "Brownstone High School",
    url:
      "https://www.naguide.com/wp-content/uploads/2020/10/Phasmophobia-Brownstone-High-School-Map.jpg",
    credit: "naguide.com"
  },
  {
    name: "Prison",
    url:
      "https://steamuserimages-a.akamaihd.net/ugc/1649969816690467002/DD2EFDDFDE2519FEAC37CECA4B05014023A4972F/",
    credit: "steam"
  },
  {
    name: "Asylum",
    url:
      "https://steamlists.com/wp-content/uploads/2021/04/Phasmophobia-Guide-to-asylum-steamlists-com.png",
    credit: "steamlists.com"
  }
];
