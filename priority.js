/* Survival-priority order. Tiers follow the "rule of threes" every channel uses (minutes without air
 * or blood, hours without warmth, days without water, weeks without food), with ThePatriotNurse's point
 * that sanitation and illness kill more people after disasters than injuries do. Within a tier, items are
 * listed most critical first. */

const TIERS = [
  {
    id: 1, name: "Minutes: air, bleeding, fire & gas",
    why: "These kill in minutes, before anyone can reach you: carbon monoxide, fire, a gas leak, heavy bleeding, smoke or fallout. Most cost little and work without any warning time.",
    ids: ["l-co", "h-ext", "m-tq", "a-gen", "h-wrench", "a-shutoffs", "h-water", "m-device", "m-trauma", "m-masks", "h-tape", "a-nuke", "m-ki", "c-proof", "h-quake", "a-quake", "a-stb", "a-cpr"],
  },
  {
    id: 2, name: "Hours: body temperature, shelter & getting out",
    why: "Exposure kills in hours: cold, heat, or being caught in a fire, flood or storm. This tier keeps everyone at a safe temperature at home and makes sure you know when and how to leave if home isn't safe. Magic Prepper ranks shelter first of all for this reason.",
    ids: ["a-triggers", "a-go", "a-fill", "d-plan", "c-safe", "p-signs", "p-routes", "h-fire", "h-flood", "h-hurr", "h-saferoom", "h-apt", "t-room", "t-bag", "t-base", "c-sleep", "t-mylar", "t-cool", "t-thermo", "t-heater", "t-pad", "t-wool", "t-socks", "x-tent", "t-hotwater", "t-warmers", "t-reflect", "t-vbl", "l-flash", "l-head"],
  },
  {
    id: 3, name: "Days: water, formula & medicines you can't skip",
    why: "Three days without water is the limit, sooner in heat, pregnancy or for small children. Infant formula and daily prescriptions sit here too, because running out of them is as dangerous as running out of water.",
    ids: ["w-store", "w-cont", "c-formula", "m-rx", "w-bleach", "m-ors", "w-filter", "w-tabs", "w-tub", "w-heater", "c-milk", "p-vit", "m-cool", "p-birth", "m-glasses", "m-mobility", "w-pump", "w-pool", "w-rain"],
  },
  {
    id: 4, name: "Days to weeks: sanitation & illness",
    why: "After the first days, the biggest killers are diarrhea, infection and respiratory illness from bad sanitation, not injuries. A working toilet plan, clean hands and the means to treat fever and dehydration prevent most of it.",
    ids: ["s-toilet", "s-bags", "s-wipes", "s-hyg", "m-fak", "m-otc", "c-meds", "c-diapers", "c-wipes", "s-gloves", "s-tp", "s-fem", "s-pp", "m-vitals", "m-manual", "m-asp", "h-rodent", "m-abx"],
  },
  {
    id: 5, name: "Weeks: food & a way to cook it",
    why: "People can survive weeks without food, but strength, judgment, pregnancy and children's moods fall apart within days. No-cook food comes first, then a way to cook, then deep staples.",
    ids: ["k-opener", "f-pb", "f-cprot", "f-rte", "f-crack", "f-nuts", "f-fruitveg", "c-food", "b-food", "k-stove", "k-fuel", "k-fire", "f-oil", "pt-food", "f-rice-p", "f-pasta", "f-oats-p", "f-pb-p", "f-beans", "f-rice", "f-oats", "f-flour", "f-salt", "f-sugar", "f-milk", "f-vit", "f-flavor", "f-potato", "f-seal", "p-food", "k-therm", "k-thermal", "k-plates", "a-storage", "a-fifo", "a-rotate", "a-audit", "f-comfort", "k-alt", "k-dutch", "x-fridge", "f-de", "k-mill", "k-canner"],
  },
  {
    id: 6, name: "Go bags, information, power, money & papers",
    why: "These don't keep anyone alive on their own, but they decide how well everything above works: leaving quickly with what you need, knowing what's happening, reaching family, paying when cards fail, and proving who you are. Zach Of All Trades ranks communication first of all; most channels put it here.",
    ids: ["b-bag", "b-shoes", "b-clothes", "c-gear", "v-seat", "c-id", "p-bag", "b-whistle", "l-radio", "l-batt", "l-bank", "d-cash", "d-contacts", "d-docs", "d-med", "p-records", "d-maps", "a-codes", "a-car", "v-kit", "l-frs", "l-offline", "x-recharge", "l-station", "l-solar", "l-gen", "l-night", "pt-kit", "c-play", "c-glow", "c-clothes", "p-comfort", "b-extras", "b-rain", "b-tarp", "b-readers", "b-bandana", "v-jump", "v-repair", "d-fund", "d-ins", "d-inv", "d-budget", "l-faraday", "l-ham"],
  },
  {
    id: 7, name: "Long-term: plans, skills, security & upgrades",
    why: "This tier turns a stockpile into resilience: a plan that grows in stages, skills you've practiced, neighbors you know, a secure home and the ability to repair and produce.",
    ids: ["x-audit", "x-stages", "a-neighbors", "a-cookout", "x-security", "a-opsec", "x-health", "h-multi", "h-gloves", "a-nav", "a-breath", "a-fire", "h-repair", "h-sew", "h-share", "x-library", "h-film", "h-rad", "h-seeds"],
  },
];

// id -> [tier, position], for sorting.
const RANK = {};
TIERS.forEach((t) => t.ids.forEach((id, i) => { RANK[id] = [t.id, i]; }));
