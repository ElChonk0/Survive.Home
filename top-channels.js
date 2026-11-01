/* Comparison with the most-viewed prepping channels on YouTube (Canadian Prepper, City Prepping,
 * SensiblePrepper, TheUrbanPrepper, The Provident Prepper, The Gray Bearded Green Beret, The Bug Out Location).
 * Adds items the playlist missed, and "other views" where these channels agree, add detail, or disagree.
 * Notes: research/top-channels-notes.md */

Object.assign(EXT_SOURCES, {
  "cp-90":     ["OEBVVVTNFAY", "How to Survive the First 90 Days After the Collapse", "City Prepping"],
  "cp-water":  ["oX7Jls_1hso", "3 Mistakes Preppers Make When Storing Water", "City Prepping"],
  "cp-3mo":    ["KCvzq5jJaZY", "3 Months Is All You Need As A Prepper", "City Prepping"],
  "cp-year":   ["JJ46s8cz6Mo", "How to Build 1 Year of Food Storage", "City Prepping"],
  "cp-gray":   ["H3Wz7fC7tOY", "The 3 Rules to Become a Gray Man", "City Prepping"],
  "cp-home":   ["k8ouGAd13jU", "10 Easy Steps to Prevent Home Invasions", "City Prepping"],
  "cp-info":   ["N1aQX9HO8-4", "Critical Information to Get ASAP", "City Prepping"],
  "pp-myths":  ["rppPqBz-sd8", "12 Food Storage Myths Debunked", "The Provident Prepper"],
  "pp-water":  ["5hQ2GoXJg6I", "How to Store Water for Emergencies", "The Provident Prepper"],
  "pp-pack":   ["9J31WXxAEwY", "Packaging Long Term Food Storage", "The Provident Prepper"],
  "pp-toilet": ["ZrDXyMC4ZGs", "Turn Your Home Toilet Into an Emergency Porta-Potty", "The Provident Prepper"],
  "pp-warm":   ["erq-QuCN0G0", "6 Tips to Keep Warm During a Winter Power Outage", "The Provident Prepper"],
  "pp-emp":    ["hKg-vNmMbog", "Facts About EMP Protection (sponsored interview)", "The Provident Prepper"],
  "ca-start":  ["LOdirgJrwAI", "How to Start Prepping: Complete Guide", "Canadian Prepper"],
  "ca-fallout":["9I3MEHi-hFQ", "A Poor Man's Nuclear Fallout Shelter", "Canadian Prepper"],
  "sp-13":     ["zl-WdEPv3ZI", "13 Things Not To Do During SHTF", "SensiblePrepper"],
  "sp-dep":    ["1SH3PUBkWYQ", "Survival Lessons from The Great Depression", "SensiblePrepper"],
  "gb-bag":    ["t4GYjhwfvwU", "Green Beret's Ultralight Bug Out Bag", "The Gray Bearded Green Beret"],
  "up-costco": ["_w5sVBvi8IQ", "Top 10 Preps to Buy At Costco Every Visit", "TheUrbanPrepper"],
  "bol-fridge":["Ao_QJ_31a8U", "Chest Freezer Without Grid Power", "The Bug Out Location"],
});

/* ───────── Items the playlist didn't cover ───────── */
ITEMS.push(
  {
    id: "x-stages", cat: "skills", p: 1, src: ["cp-3mo", "pp-myths", "ca-start"],
    name: "Build in stages: 3 days → 3 weeks → 3 months",
    qty: () => "1 plan",
  },
  {
    id: "x-security", cat: "home", p: 2, src: ["cp-home", "ca-start"],
    name: "Everyday home security habits",
    qty: () => "deadbolts, door bar, sliding-door dowel, timer lights",
  },
  {
    id: "x-library", cat: "power", p: 3, src: ["cp-info"],
    name: "Offline digital library (Kiwix Wikipedia, iFixit, WikiHow)",
    qty: () => "1 thumb drive or old phone",
  },
  {
    id: "x-fridge", cat: "cook", p: 3, src: ["bol-fridge"], when: (c) => c.days >= 14 || c.rx > 0,
    name: "Battery-powered mini fridge / chest freezer",
    qty: () => "~850 Wh/day: 1–2 × 100 Ah LiFePO4 + inverter + 2–3 × 100 W panels",
  },
  {
    id: "x-tent", cat: "temp", p: 2, src: ["pp-warm"], when: (c) => c.hz.cold,
    name: "Tent set up indoors as a warm sleeping space",
    qty: (c) => `${Math.max(1, Math.ceil(c.n / 3))} tent(s) sized for your sleepers`,
  },
  {
    id: "x-health", cat: "skills", p: 2, src: ["ca-start"],
    name: "Get dental work and checkups done now; build basic fitness",
    qty: () => "this year",
  },
);

Object.assign(DETAILS, {
  "x-stages": {
    why: "The big channels agree that trying to prepare for a year at once is overwhelming and leaves gaps, while a stepwise target actually gets done. Three days covers most short emergencies, three weeks covers severe regional disasters, and three months covers nearly everything short of a total collapse. City Prepping calls three months the 'solid foundation' to build food, water and fuel evenly before scaling up. This checklist's plan-length buttons map to these stages.",
    use: "Set the plan length to 3 days and finish the essentials first. Then switch to 14 or 30 days and fill the new gaps, then 90 days. Keep each stage balanced: water, food and fuel should all reach the same number of days before moving on. Review once a year.",
  },
  "x-security": {
    why: "Most burglars look for easy targets, and about 30% of US burglaries happen through an unlocked door or window. In a long outage, homes that look occupied and hard to enter are passed over. These habits cost little and work every day, not just in emergencies. A door bar and a dowel in a sliding door's track stop the most common forced entries.",
    use: "Lock every door and window at night, including the garage-to-house door, and put a dowel in sliding-door tracks. Rekey locks when you move in, and use 3-inch screws in door strike plates. Put outdoor lights on timers or sensors and trim shrubs near windows. When away, use timers for indoor lamps, hold mail, and don't post trips on social media.",
  },
  "x-library": {
    why: "A printed binder covers the essentials, but a single thumb drive can hold all of Wikipedia, repair guides and how-to articles for free. The Kiwix app reads them with no internet. An old phone loaded with them can be kept in a Faraday bag and charged with a small solar panel. It's a cheap way to have answers to questions you didn't anticipate.",
    use: "Install Kiwix on a computer and phone, download the English Wikipedia file (the 'mini' version is about 13 GB, the full one about 94 GB), plus iFixit and WikiHow. Copy them to a thumb drive and an old phone. Store the phone in the Faraday tin with a charging cable. Refresh the files every year or two.",
  },
  "x-fridge": {
    why: "A full-size fridge uses 3–4 kWh a day, too much for most backup setups, and running it from a generator a few hours a day lets the temperature swing into the danger zone. A small chest freezer and mini fridge together use about 850 Wh a day and can run nonstop on two batteries and a few solar panels. That keeps insulin, children's milk and frozen meat safe through a long outage. It also earns its keep every day as overflow storage.",
    use: "Run them daily as an overflow fridge and meat freezer, plugged into the battery/inverter system that's charged by solar. In an outage, move the most important items (medicine, milk, meat) into them first. Keep the freezer full (frozen water bottles fill gaps) so it holds temperature. Check the battery charge each evening.",
  },
  "x-tent": {
    why: "The Provident Prepper family turned their power off for days in January and found a $15 tent set up in the living room kept their children warm enough to sweat. A tent traps body heat in a small space, the same idea as the blanket tent in the warm room. It also gives privacy if you shelter with relatives. You probably already own one or can use it for camping.",
    use: "Set it up in the warm room on top of foam pads or a mattress, with sleeping bags inside. Leave a vent or door slightly open to avoid condensation. Use it for sleeping and for daytime play to keep kids warm. Never put a heater or candle inside a tent.",
  },
  "x-health": {
    why: "When hospitals and dentists are overwhelmed, a toothache or a postponed surgery becomes a serious problem. Canadian Prepper puts the body at the base of his 'prepping pyramid', because walking out, carrying a child or doing cleanup takes strength and stamina. Getting checkups done now is free preparedness. Spare glasses and a medicine stock belong to the same step.",
    use: "Schedule dental cleanings and fix known dental or medical issues now, while care is normal. Keep a simple routine of walking, carrying and strength work. Make sure everyone's checkups, prenatal care and vaccinations are current, and ask for printed records. Revisit yearly.",
  },
});

/* ───────── Other views on existing items ───────── */
Object.assign(VIEWS, {
  "w-store": [
    { by: "cp-water", text: "Treats 3 weeks (about 21 gal per person) as the minimum, and 'on the low end'." },
    { by: "cp-90", text: "For a 90-day plan, counts 90 gallons per person as the absolute minimum for drinking, washing and cooking, and says to start rain collection on day one." },
  ],
  "w-cont": [
    { by: "pp-water", text: "Adds options: fill empty canning jars and clean soda bottles (PET #1) with water, and canned water lasts 50 years. Avoid milk jugs and ex-bleach bottles for drinking. Keep the bung wrench taped on each barrel, and leave 10% headspace in barrels that could freeze." },
    { by: "cp-water", text: "Never buy used drums or IBC totes unless you're sure what they held." },
  ],
  "w-bleach": [
    { by: "cp-water", text: "Chlorinated city water usually needs nothing added for storage. Optionally add 8 drops of 6% bleach (or 8 drops of 3% hydrogen peroxide) per gallon. Commercial 'water preserver' is overpriced bleach." },
    { by: "pp-water", text: "For untreated water going into a 55-gal drum: 2 Tbsp of fresh unscented bleach or ¼ tsp of calcium hypochlorite." },
  ],
  "w-pool": [
  ],
  "w-tub": [
    { by: "ca-start", text: "Calls a tub bladder one of the cheapest, most effective preps, especially for apartments." },
  ],
  "f-seal": [
    { by: "pp-myths", text: "Mylar doesn't make everything last 30 years; flour is best within about 5. Steel #10 cans are the best barrier. Only use oxygen absorbers with dry foods (under 10% moisture, low fat). Popcorn, for example, goes in without one." },
    { by: "pp-pack", text: "Plain plastic buckets slowly let air in, so oxygen absorbers work poorly in them on their own. Use Mylar liners, or the dry-ice method (wait 30–60 minutes before sealing). Store store-bought packages inside buckets to block moisture and pests." },
    { by: "cp-year", text: "A week after sealing, check that each bag has pulled tight. If not, add a fresh absorber and reseal. Keep Mylar inside hard bins, because cats and rodents chew it." },
  ],
  "f-rice": [
    { by: "cp-year", text: "A much more grain-heavy plan: about 66 lb of grain and 20 lb of beans per adult per month at 2,200 kcal/day (about 800 lb of grain a year). The ratio used here assumes canned and pantry foods fill the rest." },
    { by: "up-costco", text: "Add a 25 lb bag on every warehouse-store trip and it builds up quickly." },
  ],
  "f-flour": [
    { by: "pp-myths", text: "You don't have to store whole wheat unless your family already eats it. Store what you eat, because a sudden diet change is hard on the body and on morale." },
    { by: "cp-year", text: "His year plan does lean on 400 lb of wheat berries plus a grinder per adult." },
  ],
  "f-rte": [
    { by: "pp-myths", text: "Commercial 'month supply' buckets list servings, not calories, and are often high in sugar, salt and additives. Start with basics and foods you know." },
    { by: "up-costco", text: "Build the pantry from foods you rotate before buying 25-year freeze-dried brands. Add one bulk pack of soup or chili per trip." },
  ],
  "f-cprot": [
  ],
  "f-milk": [
    { by: "cp-year", text: "Plans about 50 lb of powdered milk per adult per year, and uses it for cream, cream cheese, bread and cereal." },
  ],
  "f-comfort": [
    { by: "pp-myths", text: "Comfort foods are essential, not optional: everyone has one (Diet Pepsi, chocolate, peanut butter). Store some." },
    { by: "cp-year", text: "Adds about 25 lb of drink mixes per adult per year to fight flavor fatigue." },
  ],
  "f-flavor": [
    { by: "cp-year", text: "Keep a food-storage cookbook (or printed recipes) so you can cook from staples without the internet." },
  ],
  "a-fifo": [
    { by: "pp-myths", text: "'Best by' isn't a safety date: they've eaten soup 8 years past it. Discard only damaged, bulging or off-smelling cans." },
    { by: "cp-year", text: "Distinguishes a 'working pantry' you rotate from a 'long-term pantry' sealed for 5–25 years. Either works; label and inventory both." },
  ],
  "s-tp": [
    { by: "up-costco", text: "Recommends at least 100 rolls on hand regardless of household size, built up one pack per shopping trip." },
  ],
  "s-toilet": [
    { by: "pp-toilet", text: "Alternative to the bucket: shut off the toilet's water, empty the bowl, and tape a kitchen bag over it, so you keep a stable seat. Separate urine with a cheap 'urine hat' (diluted urine can go on shrubs), cover solids with litter or sawdust, and move full bags to a lidded bucket. If the sewer still works and only the water is off, flush with a bucket of gray water." },
    { by: "ca-start", text: "Prefers a 'Luggable Loo' (toilet seat that snaps onto a bucket) with porta-potty chemicals." },
  ],
  "l-flash": [
  ],
  "l-head": [
    { by: "gb-bag", text: "Choose a headlamp that turns on in red by default, so you don't wreck night vision or give away your position by accident." },
  ],
  "l-frs": [
    { by: "cp-90", text: "Adds a CB radio (cheap and widely used) and a police scanner for real-time news, plus phone mesh-messaging apps that work without cell service. Don't act on rumors." },
    { by: "ca-start", text: "Suggests mesh devices (goTenna-type) that relay through each other to build a neighborhood network." },
  ],
  "l-radio": [
    { by: "ca-start", text: "Get a radio that also has shortwave, to hear news from outside your region." },
  ],
  "l-gen": [
    { by: "bol-fridge", text: "Running a full-size fridge from a generator or car inverter a few hours a day is a 'break glass' option: the temperature swings, and it risks your car's battery and alternator." },
  ],
  "l-station": [
    { by: "bol-fridge", text: "Two 100 Ah LiFePO4 batteries, a 600 W inverter and 2–3 100 W panels run a mini fridge and chest freezer nonstop, about 850 Wh a day." },
  ],
  "l-faraday": [
    { by: "pp-emp", text: "Agrees that a sealed metal container works. Adds: a microwave is an unreliable Faraday cage, disconnecting a car battery doesn't protect the car, and a Faraday cloth over a car fails because the pulse reflects from the ground. Solar panels mostly survive but charge controllers and inverters don't. A high-altitude EMP releases no radiation, so gardens stay safe. (Sponsored by a company selling whole-house EMP protectors, so weigh its product claims accordingly.)" },
  ],
  "t-room": [
    { by: "pp-warm", text: "Use painter's tape for plastic on windows so paint doesn't peel off when you remove it. Pick a living area with a kitchen or other heat source, ideally a basement or interior room with sunny windows." },
  ],
  "t-heater": [
  ],
  "t-bag": [
  ],
  "t-mylar": [
    { by: "pp-warm", text: "Mylar has its place, but 'nothing replaces real blankets'. They keep every old blanket in boxes for outages." },
  ],
  "m-tq": [
    { by: "gb-bag", text: "Carry two tourniquets ('two is one, one is none'): if the first doesn't stop the bleeding, the next step is a second one above it. Take a TCCC/TECC course." },
  ],
  "m-trauma": [
    { by: "gb-bag", text: "His kit also includes trauma shears and a nasal airway. Only carry the airway if you're trained to use it." },
  ],
  "d-cash": [
    { by: "cp-90", text: "Cash is most useful in the first couple of weeks of a long collapse. After that, food, water and durable goods become the real currency, so barter rather than give supplies away." },
  ],
  "a-opsec": [
    { by: "cp-gray", text: "Be a 'gray man': match how locals dress and act, skip tactical clothing, logo or morale patches, and gun or political stickers on cars, and avoid eye contact and conversation in tense crowds." },
    { by: "cp-90", text: "In a long collapse, cover windows at night, add spices after the flame is off so cooking smells travel less, and never reveal how much you have, even to neighbors." },
  ],
  "h-share": [
    { by: "sp-13", text: "Set aside about 10% of your preps for people in need. The Great Depression showed that neighbors who help each other do better." },
  ],
  "a-neighbors": [
    { by: "sp-dep", text: "In the Great Depression, families combined households and traded skills (haircuts, cooking, repairs). Learn a skill you could barter." },
  ],
  "a-triggers": [
    { by: "sp-13", text: "95–99% of preps should be for staying home. Bugging out makes you 'a glorified refugee' unless you have a real destination." },
    { by: "cp-90", text: "The first 24 hours are a 'golden window' to decide whether to stay or go. After that, roads fill and travel gets dangerous." },
    { by: "ca-start", text: "Retreating to an isolated rural spot can lose you the protection of numbers. It works mainly for organized groups." },
  ],
  "a-shutoffs": [
    { by: "cp-90", text: "Also find out whether you're near a nuclear plant or dam that could fail as a second disaster." },
  ],
  "a-nuke": [
    { by: "ca-fallout", text: "About 3 ft of earth stops most fallout radiation, and filled sandbags can build shielding where you can't dig." },
  ],
  "m-manual": [
    { by: "cp-info", text: "Also keep a digital library (offline Wikipedia, repair guides) on a thumb drive or old phone. See the 'Offline digital library' item." },
  ],
  "h-flood": [
    { by: "ca-fallout", text: "Keep a few hundred empty sandbags: they handle floods and can also shield a fallout room." },
  ],
  "b-bag": [
    { by: "gb-bag", text: "A former Green Beret's bag weighs 19 lb, packed by priority: stay warm (poncho, bivy, cord), water (filter bottle plus a steel bottle), no-cook food, navigation (map, compass), then medical. A plain gray backpack draws less attention than a tactical one." },
  ],
  "b-food": [
    { by: "gb-bag", text: "Uses compact 3,600 kcal ration bars so there's no cooking or hunting on the move. Playlist video #79 notes such bars are fine for 72 hours but not as long-term food." },
  ],
});
