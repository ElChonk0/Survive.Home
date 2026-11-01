/* Round 2 of the channel comparison (Survival Dispatch, DIY Prepper TV, Magic Prepper, ThePatriotNurse,
 * LDSPrepper, Zach Of All Trades, Wranglerstar, southernprepper1, plus City Prepping's start-from-zero plan),
 * and ALTS: every place a channel disagrees with this checklist, with the alternative they propose written out.
 * Notes: research/top-channels-notes.md */

Object.assign(EXT_SOURCES, {
  "cp-zero":   ["RlDlzsn4e-I", "If I Had to Start Prepping From Zero (30/90/Year 1)", "City Prepping"],
  "sd-101":    ["zdU-aS2TUtE", "Prepping 101 - Beginner's Prepping Guide", "Survival Dispatch"],
  "diy-100":   ["HHPdqa1hBrI", "The First $100 a New Prepper Should Spend", "DIY Prepper TV"],
  "diy-1000":  ["XM0ZGcEjyBc", "The First $1000 a New Prepper Should Spend", "DIY Prepper TV"],
  "mp-pri":    ["FzbsmrchwzY", "Priority Of Prepping List For Beginners", "Magic Prepper"],
  "mp-2wk":    ["aE9sjA-u548", "Prepping Supplies You Need to Survive the First 2 Weeks", "Magic Prepper"],
  "pn-med":    ["uI4KYDNLDhA", "Where to Start Prepping: Medical", "ThePatriotNurse"],
  "pn-skills": ["ab67H-JshWo", "5 First Aid Skills You MUST Know", "ThePatriotNurse"],
  "lds-rot":   ["PD_nZxrjNF8", "Water Rotation Facts & Fiction", "LDSPrepper"],
  "lds-forgot":["tXl0pFgXtK8", "Forgotten & Overlooked Preparedness Items", "LDSPrepper"],
  "zoat-90":   ["SqyyZ4zrMFY", "11 Must-Have Preps to Survive 90 Days When the Power Is Out", "Zach Of All Trades"],
  "bol-15":    ["j4GTmkcU3GM", "15 Critical Items on Your Prepper Checklist", "The Bug Out Location"],
  "ws-10":     ["dh7G3eyJUmc", "The 10 Most Important Things to Protect Your Family", "Wranglerstar"],
  "sp1-radio": ["TcFaNH6cXhU", "My Doomsday Prepping Items Are Really Everyday Items", "southernprepper1"],
});

/* ───────── Items this round surfaced ───────── */
ITEMS.push(
  {
    id: "x-audit", cat: "skills", p: 1, src: ["cp-zero"],
    name: "Write your risk & dependency list",
    qty: () => "2 short lists, 1 page",
  },
  {
    id: "x-recharge", cat: "power", p: 2, src: ["diy-1000", "bol-15", "mp-2wk"],
    name: "Rechargeable AA/AAA batteries + USB charger",
    qty: (c) => `${Math.max(8, (c.ages4 + c.at) * 4)} cells + 1 charger`,
  },
);
Object.assign(DETAILS, {
  "x-audit": {
    why: "City Prepping's start-from-zero plan begins with a page of writing, not a purchase: list the disasters most likely where you live, then list what your household depends on day to day (city water, the grid, one paycheck, prescriptions, card payments, the internet). Most people prep for whatever scared them in last night's news and end up with gear that doesn't match their real risks. The two lists tell you which items below matter most for you and which hazard boxes to tick in the setup panel.",
    use: "Do it today, before buying anything. Spend 20 minutes together: list 3–5 likely events (for example a winter storm power outage, a flood, a job loss, a heat wave) and 6–10 things you depend on. Next to each dependency, write the backup you'll build. Keep the page with your family plan and revisit it each spring.",
  },
  "x-recharge": {
    why: "Several channels now argue that a drawer of disposable AAs is only half the answer: rechargeable cells and a USB charger let a power bank or small solar panel keep flashlights, radios and baby monitors running indefinitely. Disposables still matter because they hold a charge for 10 years on the shelf and don't need any power to use. The best setup is both: a stock of disposables for the first days and rechargeables for anything longer.",
    use: "Buy low-self-discharge NiMH cells (Eneloop-type) so they hold most of their charge for a year in storage. Charge them all now, label the pack with the date, and top them up every 6 months. In an outage, run the most-used lights on rechargeables and keep disposables for the radio and for the go bags.",
  },
});

/* ───────── More views that add detail (not disagreements) ───────── */
function addViews(map) {
  for (const [id, list] of Object.entries(map)) VIEWS[id] = (VIEWS[id] || []).concat(list);
}
addViews({
  "w-store": [
    { by: "lds-forgot", text: "In his classes, most people have a month of food but 70–80% don't have 2 weeks of water. Water is the gap to close first." },
    { by: "diy-1000", text: "Three 7-gallon Aqua-Tainers (21 gal) cover one person for about 3 weeks at 1 gal a day; rotate bottled water alongside." },
  ],
  "w-cont": [
    { by: "diy-100", text: "Reverse the spigot on an Aqua-Tainer and set it on the counter over the sink: you get a running tap for handwashing, and the drain usually still works when the water is off." },
    { by: "lds-rot", text: "Use a barrel pump or siphon to draw from a full drum in place; a full 55-gal drum weighs over 450 lb and shouldn't be moved." },
  ],
  "w-filter": [
    { by: "diy-1000", text: "Build a gravity filter for about $60: a Sawyer filter tapped into a food-grade bucket with a spigot, plus a pillowcase as a pre-filter. It removes bacteria and protozoa but not viruses (add bleach or boil) or chemicals (add an activated-carbon stage near cities or farmland)." },
    { by: "bol-15", text: "Straw and squeeze filters (0.1 micron) are 'high-country' filters: good for parasites, not chemicals or heavy metals. Near cities, step up to a carbon gravity filter or reverse osmosis." },
  ],
  "f-pb": [
    { by: "diy-100", text: "His 3-day, no-cook starter: 2 jars of peanut butter with crackers, a bag of jerky, and 3 cans of fruit, for about $22." },
  ],
  "f-rte": [
    { by: "mp-2wk", text: "Count calories, not cans: 2,000 kcal × 14 days = 28,000 kcal per adult for the first two weeks. Canned food is the cheapest no-cook way to get there." },
  ],
  "f-comfort": [
    { by: "lds-forgot", text: "A diary from the 1998 Quebec ice storm (some homes had no power for months) ended: 'If I only had more nuts and more chocolate.'" },
  ],
  "f-flavor": [
    { by: "lds-forgot", text: "To beat flavor fatigue, copy the spice lists off soup and stew labels at the store. Buy whole spices (cinnamon sticks, nutmeg) and vacuum-seal them in small packs." },
  ],
  "k-fire": [
    { by: "lds-forgot", text: "Store strike-anywhere matches in zip bags inside a sealed bucket with an oxygen absorber, and keep them away from kids: his Scout son burned through hundreds of dollars of matches." },
  ],
  "k-thermal": [
    { by: "lds-forgot", text: "A thermal cooker (a big vacuum-insulated pot) cooks with only boiling water: whole potatoes in about 6 hours, meat in 4–6. Pair it with a Kelly kettle that boils water from a few sticks of wood." },
  ],
  "k-stove": [
    { by: "lds-forgot", text: "Test every stove before you need it: his new stove sat unused because his propane tanks had the old valve type. Own 2–3 ways to cook." },
    { by: "pn-skills", text: "Off-grid cooking brings more burns, and a palm-sized burn on a toddler covers a large share of their body. Cool burns with cool running water, not ice." },
  ],
  "m-fak": [
    { by: "pn-skills", text: "For cuts: clean, disinfect, cover, and change the dressing at least daily. Dirty wounds and unchanged dressings are what lead to gangrene and tetanus." },
    { by: "lds-forgot", text: "The five things used most from any first-aid kit: wound cleaner, ointment, bandages, something for an upset stomach, and something for a headache. Stock those deepest." },
    { by: "bol-15", text: "Avoid cheap kits that are a thousand bandages and no gauze or tape. Building your own teaches you what's in it." },
  ],
  "m-otc": [
    { by: "diy-1000", text: "Children's medicines sell out first in an emergency because kids need specific products and doses. Buy them now." },
  ],
  "m-rx": [
    { by: "mp-2wk", text: "If anyone needs a medicine to live, medicine comes right after water and food. Services such as Jase Medical sell backup prescriptions." },
    { by: "cp-zero", text: "Aim for 30–60 days of daily medications within the first 90 days of prepping." },
  ],
  "l-bank": [
    { by: "mp-2wk", text: "Two 20,000 mAh power banks (about 270 Wh) keep one phone going for two weeks if you don't drain it daily. Refurbished ones run about $30." },
  ],
  "l-radio": [
    { by: "sp1-radio", text: "A scanner radio pays off on ordinary days too: he heard about a robbery at his son's workplace and an escape from a nearby jail as they happened, and could do a family head count." },
  ],
  "l-frs": [
    { by: "mp-2wk", text: "A cheap Baofeng can listen to local emergency and weather channels, but transmitting on it needs an amateur (ham) license." },
  ],
  "d-cash": [
    { by: "cp-zero", text: "Start with $40 in small bills, then $200, then work toward a month of basic expenses. Paying down debt counts as a prep." },
    { by: "mp-2wk", text: "He keeps about $500 on hand; card readers go down in cyberattacks and outages, even when stores stay open." },
  ],
  "d-docs": [
    { by: "mp-2wk", text: "Include proof that your children are yours (birth certificates) and proof you own your home and car (deed, title, registration)." },
    { by: "bol-15", text: "Fire-resistant document bags survive a house fire and the water from the hoses better than a filing cabinet, but no bag is truly fireproof in direct flame." },
  ],
  "a-cookout": [
    { by: "cp-zero", text: "Schedule a blackout evening: flip the main breaker off for a few hours and live as if the power were out. It shows gaps better than any checklist." },
  ],
  "a-neighbors": [
    { by: "cp-zero", text: "Start small: know three neighbors by name, face and situation, people you can wave over in an outage and ask what they've seen." },
    { by: "mp-pri", text: "Community and mutual-assistance groups are a top priority: 'do not fool yourself that you can do all this by yourself.'" },
  ],
  "s-fem": [
    { by: "lds-forgot", text: "Stock generously, and add a reusable menstrual cup as a long-term backup in case disposables run out." },
  ],
  "s-wipes": [
    { by: "diy-1000", text: "Use sanitizing wipes for surfaces and paper plates for meals: cleaning uses more stored water than people expect." },
  ],
  "a-car": [
    { by: "mp-2wk", text: "Simply keep a full tank: it's your evacuation option and your way to reach family in the first two weeks." },
  ],
  "x-stages": [
    { by: "cp-zero", text: "His start-from-zero plan: first 30 days, water, a 3-week pantry, light, heat, cash, and a written plan. Days 60–90: radio, a small solar generator, a blackout practice night, a trauma kit and 30–60 days of medicine, and three neighbors. Year 1: move from storing to producing." },
  ],
  "x-security": [
    { by: "bol-15", text: "Harden the door with longer (3-inch) strike-plate screws and a reinforcement plate, add window alarms, and keep your head up out of your phone in public." },
  ],
  "h-multi": [
    { by: "diy-100", text: "A Swiss Army 'Recruit'-type knife (about $19) includes a can opener. Never pry a can open with a kitchen knife." },
    { by: "bol-15", text: "Everyday carry minimum: a lighter, a flashlight and a multi-tool." },
  ],
  "t-wool": [
    { by: "cp-zero", text: "Set aside blankets and layers that are only for grid-down use, so you aren't relying on the furnace." },
  ],
  "x-recharge": [
    { by: "mp-2wk", text: "A drawer of AAs is 'old thinking': most of what we rely on now charges by USB. Store power, not just batteries." },
  ],
});

/* ───────── Where channels disagree: the alternative each one proposes ─────────
 * by: source keys; claim: what they say; alt: what they would do instead (concrete, scaled to the
 * household where it applies); trade: what changes if you follow them, and when their way fits better. */
const ALTS = {
  "w-store": [
    {
      by: ["pp-water", "mp-2wk"],
      claim: "One gallon per person per day isn't enough once you cook, wash dishes, keep clean and flush. Store two.",
      alt: (c) => `Store 2 gallons per person per day. For your household that's ${up(c.n * 2 * c.waterDays + c.petWaterDay * c.waterDays)} gal for ${c.waterDays} days, instead of the ${up(c.waterStore)} gal this checklist sizes. Keep the first gallon for drinking and cooking, and use the second for washing, dishes and bucket-flushing.`,
      trade: "This doubles the space and weight. A middle path: store the 1-gallon amount as drinkable water, then fill the bathtub (tub liner) and any spare containers at the first warning for washing and flushing.",
    },
    {
      by: ["cp-water", "cp-zero"],
      claim: "Two weeks is too little. Store at least three weeks, and three months (90 gal per person) if you're planning for a long event.",
      alt: (c) => `Start at 1 week, build to 3 weeks within the first month: about ${up(c.waterDay * 21)} gal for your household. For a 90-day plan, City Prepping counts 90 gal per person (${c.n * 90} gal) as the minimum, plus rain collection from day one.`,
      trade: "Three weeks covers most real-world water outages, though some boil-water crises (Jackson, Mississippi in 2022) have run longer. Tick “Store water for the full plan” in the setup panel to size storage for your whole plan length.",
    },
  ],
  "w-cont": [
    {
      by: ["cp-water", "lds-rot"],
      claim: "A hot garage is fine, and treated tap water never needs rotating.",
      alt: "Fill opaque, food-grade drums from the tap with a drinking-water-safe hose, seal them, and leave them, even in the garage. LDSPrepper opened a drum after 5 years on a garage slab: clear, not flat, with a slight plastic taste. Pour it between two buckets to aerate it, and filter or treat it if you're unsure.",
      trade: "It saves the work of emptying and refilling barrels every 6 months. The checklist's rotation advice is the cautious default because heat speeds up plastic taste and any contamination that got in when filling. If you skip rotation, own a good filter and bleach.",
    },
  ],
  "w-bleach": [
    {
      by: ["ca-start"],
      claim: "Stored bleach loses strength in 6–12 months, so don't rely on it. Keep pool shock instead.",
      alt: "Buy a 1 lb bag of plain granular calcium hypochlorite (pool shock with no algaecide or stabilizer), which stores for years. When needed, dissolve 1 heaped teaspoon in 2 gallons of water to make a stock solution, then add 1 part stock to 100 parts water to disinfect it.",
      trade: "Pool shock is a strong oxidizer: store it dry, away from fuel, ammonia and children, and wear gloves and eye protection when mixing. Bleach is simpler and less dangerous for the first year; replacing a bottle yearly costs a few dollars.",
    },
  ],
  "w-pool": [
    {
      by: ["ca-start"],
      claim: "Pool shock should be your main long-term water treatment, not an upgrade.",
      alt: "Make pool shock the core of water treatment and skip stockpiling bleach. Mix stock solution only as needed (see the bleach item for the recipe).",
      trade: "Choose this if you plan for more than a year of storage or have limited space. It stays an upgrade here because small children in the house make a strong oxidizer riskier to keep.",
    },
  ],
  "w-filter": [
    {
      by: ["sd-101", "lds-rot", "cp-zero"],
      claim: "A filter matters more than stored water: there's water all around you (pools, ponds, ditches), and stored water runs out.",
      alt: "Make a gravity filter (Big Berkey type, or a DIY Sawyer bucket) an essential, bought in the first month. Map the nearest pool, pond or creek, and keep a clean 5-gallon bucket for hauling.",
      trade: "Filters don't help in the first days if you can't get to a water source, and most remove bacteria but not viruses or chemicals. Storing some water and owning a filter together covers both.",
    },
  ],
  "f-cprot": [
    {
      by: ["up-costco"],
      claim: "SPAM and Vienna sausages belong in the rotation, and even vegetarians should keep some canned meat for barter.",
      alt: "Add a case of SPAM or similar canned meat to the pantry. It needs no cooking, is calorie-dense, and keeps 3–5 years.",
      trade: "Playlist video #51 warns against processed meats as a daily staple because of the sodium. That's a bigger concern in pregnancy (swelling, blood pressure). Fish and chicken stay the main protein here; a few cans of SPAM for variety is reasonable.",
    },
  ],
  "x-stages": [
    {
      by: ["sd-101"],
      claim: "Keep at least three months of food on hand at all times, not two weeks.",
      alt: "Set the plan length to 90 days as the baseline: a deep pantry of foods you eat (rotate back to front), plus dry staples and some freeze-dried meals or ration bars. Try freeze-dried brands before you buy in bulk, because some are very salty.",
      trade: "Three months is a much bigger first purchase. City Prepping and Provident Prepper agree it's the right goal but say reach it in stages, so a 3-month target doesn't stop you finishing the first 2 weeks.",
    },
  ],
  "k-stove": [
    {
      by: ["diy-1000", "lds-forgot"],
      claim: "A butane stove is the first stove to buy, and it's safe to use indoors.",
      alt: "Buy a single-burner butane stove (about $25) and at least 10 canisters. Cook in the kitchen with a window cracked and a battery CO alarm nearby, for short sessions only (boiling water, heating cans).",
      trade: "Only use a stove the maker labels for indoor use, never a propane camp stove, and keep it off when no one is watching. CO is the danger: if the alarm sounds or anyone gets a headache or feels dizzy, turn it off and get fresh air. With small children or anyone pregnant, outdoor cooking is safer whenever the weather allows.",
    },
  ],
  "m-trauma": [
    {
      by: ["pn-med"],
      claim: "Don't make trauma gear the focus. Even in violent collapses, far more people die from disease (diarrhea, respiratory infection, malnutrition) than from wounds.",
      alt: "Spend the first medical money on illness instead: oral rehydration salts, fever and pain medicine, a thermometer, soap, bleach and a sanitation setup, N95s, and a first-aid course. Add trauma gear after that.",
      trade: "A tourniquet is cheap and fixes the one problem that kills in minutes, so it stays an essential here. Her point holds for budget beyond that: hemostatic gauze and suture kits are lower priority than sanitation and rehydration.",
    },
  ],
  "m-otc": [
    {
      by: ["pn-skills"],
      claim: "Don't reflexively bring fevers down with medicine; support the body (fluids, rest) and let a moderate fever do its work.",
      alt: "For a school-age child or adult who is drinking, alert and comfortable, focus on fluids, rest and light clothing, and save fever reducers for discomfort.",
      trade: "Pediatric guidance agrees that the goal of fever medicine is comfort, not a normal number. Get care at once for any fever in a baby under 3 months, a fever of 104°F or higher, or a child who is very sleepy, won't drink, or is breathing hard. In pregnancy, treat fever with acetaminophen and call the OB, because high fever can harm the baby. Her herbal remedies are left out here.",
    },
  ],
  "l-flash": [
    {
      by: ["ca-start", "ws-10"],
      claim: "Stockpile candles and fuel lanterns: they're cheap, last for decades, and give a little heat.",
      alt: "Keep several cases of long-burning emergency candles, candle lanterns and a kerosene lantern with spare wicks and fuel, alongside flashlights.",
      trade: "Candles are the leading cause of home fires during outages. With small children, use flame light only in a sturdy lantern, out of reach, and never while asleep. Battery and rechargeable lights stay first here.",
    },
  ],
  "l-batt": [
    {
      by: ["mp-2wk"],
      claim: "A drawer of AA batteries is old thinking: store power, not batteries.",
      alt: "Put the money into USB power banks, a small power station and rechargeable lights, and keep only a modest stock of disposables.",
      trade: "Disposables last 10 years on the shelf and work with no power at all. Keep both: disposables for the radio and go bags, and rechargeables for daily use in a long outage (see the rechargeable battery item).",
    },
  ],
  "l-frs": [
    {
      by: ["zoat-90"],
      claim: "Communication is the single most critical prep: without information you're operating blind.",
      alt: "Make GMRS radios an essential: one per adult, plus an NOAA radio, and agree on a channel and check-in times.",
      trade: "Radios don't keep anyone alive in the first hours the way water or warmth do, so they rank lower here. GMRS needs an FCC license (no exam, about $35, covers the family), and real range in town is 1–2 miles, not the 36 miles on the box.",
    },
  ],
  "l-gen": [
    {
      by: ["ca-start", "diy-1000", "zoat-90"],
      claim: "Buy solar first: gas runs out or disappears after a disaster, and solar needs no fuel storage.",
      alt: "Start with a power station of 1–2 kWh and 200–400 W of folding panels. Use it for lights, phones, the CPAP or medical device, fans, a small fridge, and recharging batteries.",
      trade: "A dual-fuel generator delivers far more power (a full fridge, a well pump, a furnace blower) for the money, which is why playlist video #2 puts it first. Solar is quiet, safe indoors and refills itself. If you mainly need small loads, solar first is the better buy.",
    },
  ],
  "t-heater": [
    {
      by: ["pp-warm", "sd-101"],
      claim: "Tea-light can heaters, indoor-rated canned heat, or a kerosene heater are reasonable ways to warm a room.",
      alt: "Keep indoor-rated canned heat (about 6 hours per can) in a clay-pot heater, or a kerosene heater with K-1 fuel, for one warm room.",
      trade: "Any flame indoors needs a cracked window and a working CO alarm. Tea-light heaters add very little heat for the fire risk, and kerosene heaters produce CO and fumes. With small children or anyone pregnant, an indoor-rated propane heater plus a warm room and sleeping bags is the safer setup.",
    },
  ],
  "t-bag": [
    {
      by: ["ca-start"],
      claim: "Choose goose down for warmth per pound and packability, plus a wool blanket for durability.",
      alt: "Buy down bags rated 10–20°F below your expected indoor low, and keep them dry in compression sacks inside a trash bag.",
      trade: "Playlist video #52 prefers synthetic because down loses most of its warmth when damp, which happens with condensation in a cold house or a flooded basement. Down is lighter and lasts longer if you keep it dry.",
    },
  ],
  "x-security": [
    {
      by: ["sd-101", "mp-2wk", "mp-pri", "diy-1000"],
      claim: "A firearm is a core prep. Security is what lets you keep everything else, and some rank it above medical.",
      alt: "Get a reliable handgun (for example a used police trade-in) or a pump shotgun for home defense, a gun safe, and training. Where firearms aren't legal or wanted, use pepper spray. Add motion lights and a driveway alarm.",
      trade: "This checklist doesn't cover firearms. With children in the house, any gun must be stored locked and unloaded in a quick-access safe with the ammunition locked separately. Budget for training and range time, which DIY Prepper TV notes can cost as much as the gun. Check local laws.",
    },
  ],
  "a-opsec": [
    {
      by: ["sp-13"],
      claim: "The 'gray man' idea is debated. A confident presence that doesn't look like an easy target deters predators better than just blending in.",
      alt: "Stay low-profile about supplies, but carry yourself confidently in public: head up, aware, moving with purpose, and traveling in pairs.",
      trade: "These fit together: don't advertise what you have, but don't look lost or afraid either.",
    },
  ],
  "h-share": [
    {
      by: ["cp-90"],
      claim: "Give only small amounts to defuse desperation, and trade rather than give, or people keep returning.",
      alt: "Keep small 'charity packs' (1 lb of beans or rice) that don't reveal your stock, and use the rest of the extras for barter.",
      trade: "SensiblePrepper sets aside about 10% to give freely. Choose by your neighborhood: generous giving builds goodwill among neighbors you know; trade protects you from strangers.",
    },
  ],
  "a-neighbors": [
    {
      by: ["cp-90"],
      claim: "Expect looting and curfews after about 3 days, so organize for security, not just skills.",
      alt: "Call a building or block meeting early, set up a 24-hour watch rotation, cover windows at night, and avoid cooking smells and light that show you have supplies.",
      trade: "Playlist video #19 points out that research on real disasters finds mostly cooperation, not chaos. Start with the skills map and friendly contact; have the watch plan ready if things turn.",
    },
  ],
};
