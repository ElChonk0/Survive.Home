/* Government of Canada "Get Prepared" guidance (Public Safety Canada and Health Canada), compared with
 * this checklist. Where Canada asks for more (pet water, cash), the item now follows Canada and the
 * earlier figure is kept below it as a differing view. Everything else adds detail or new items.
 * Pages read November 2026: get-prepared, make-plan, emergency-kits (kit checklist, car kit),
 * food and drinking water safety, children, pets and service animals, persons with disabilities,
 * power outages and extreme cold. */

const GC = "https://www.canada.ca/en/services/policing/emergencies/preparedness/get-prepared";
Object.assign(EXT_SOURCES, {
  "gc-kit":   [`${GC}/emergency-kits/get-kit.html`, "Emergency kit checklist", "Government of Canada"],
  "gc-video": [`${GC}/emergency-kits.html`, "Emergency kits (Preparing a Family Emergency Kit)", "Government of Canada"],
  "gc-car":   [`${GC}/emergency-kits/car-kit.html`, "Emergency car kit", "Government of Canada"],
  "gc-plan":  [`${GC}/make-plan.html`, "Make an emergency plan", "Government of Canada"],
  "gc-food":  ["https://www.canada.ca/en/health-canada/services/food-drinking-water-safe-emergency.html", "Food and drinking water safety in an emergency", "Government of Canada"],
  "gc-kids":  [`${GC}/emergency-planning-resources/children.html`, "Prepare children for emergencies", "Government of Canada"],
  "gc-pets":  [`${GC}/emergency-planning-resources/animals.html`, "Emergency preparedness for pets and service animals", "Government of Canada"],
  "gc-dis":   [`${GC}/emergency-planning-resources/persons-disabilities.html`, "Emergency preparedness for persons with disabilities", "Government of Canada"],
  "gc-power": [`${GC}/hazards-emergencies/power-outages/how-prepare.html`, "Power outages: get prepared", "Government of Canada"],
  "gc-cold":  [`${GC}/hazards-emergencies/extreme-cold/how-prepare.html`, "Extreme cold: get prepared", "Government of Canada"],
});

/* ───────── New items ───────── */
ITEMS.push(
  {
    id: "x-outage", cat: "skills", p: 1, src: ["gc-power"],
    name: "Power-outage routine card (out, and back on)",
    qty: () => "1 card on the fridge + 1 in the kit",
  },
  {
    id: "h-pipes", cat: "home", p: 1, src: ["gc-power", "gc-cold"], when: (c) => c.hz.cold,
    name: "Plan to keep the pipes from freezing",
    qty: () => "learn the drain-down, 15 min",
  },
  {
    id: "c-911", cat: "kids", p: 1, src: ["gc-kids", "gc-plan"], when: (c) => c.kids - c.toddlers - c.infants > 0,
    name: "Teach the kids 9-1-1, their address and your phone numbers",
    qty: (c) => `${c.kids - c.toddlers - c.infants} ${c.kids - c.toddlers - c.infants === 1 ? "child" : "children"}, practise twice a year`,
  },
  {
    id: "x-support", cat: "med", p: 1, src: ["gc-dis"], when: (c) => c.mobility > 0 || c.device > 0 || c.older > 0,
    name: "Personal support network (3 people who'll check on you)",
    qty: () => "3 people: 2 nearby, 1 out of the area",
  },
  {
    id: "d-keys", cat: "docs", p: 2, src: ["gc-kit"],
    name: "Spare house and car keys in the kit",
    qty: (c) => `1 house key${c.vehicles ? ` + ${c.vehicles} car key${c.vehicles > 1 ? "s" : ""}` : ""}`,
  },
  {
    id: "l-landline", cat: "power", p: 3, src: ["gc-video", "gc-power"],
    name: "Corded phone (if you have a landline)",
    qty: () => "1 phone that plugs straight into the wall jack",
  },
);

Object.assign(DETAILS, {
  "x-outage": {
    why: "The first minutes of an outage and the minute the power returns are when the avoidable damage happens: a surge as everything restarts, a candle fire, a camp stove brought inside, a freezer opened every hour. Public Safety Canada lays out a short routine for both moments. Written on a card, anyone in the house can follow it in the dark without a phone.",
    use: "When it goes out: check your breaker panel and whether the neighbours are dark too, then report it to your power company. Unplug electronics and appliances, turn the thermostat down, and leave one light switched on so you know when power is back. Use flashlights, not candles. Keep the fridge and freezer shut. Check the smoke and CO alarms. Put phones on power saving and skip car trips, since traffic lights may be out. When it comes back: wait a few minutes for the system to settle, turn the heat up first, then reconnect the fridge and freezer, and wait 10 to 15 minutes before plugging in everything else. Make sure the water heater is full before its power goes back on. Check the food before eating it. Stay well away from downed lines and report them.",
  },
  "h-pipes": {
    why: "In a winter outage, a house without heat can drop below freezing within a day or two, and burst pipes then flood the house and leave you without water when it thaws. Public Safety Canada lists frozen pipes as one of the main property risks of a long outage. Knowing how to drain the system or keep water moving prevents most of it.",
    use: "Learn now where the main water shutoff is and how to drain your plumbing: close the main, open the lowest tap and every other tap, and flush the toilets. If the house is going to stay cold for a long time (or you're leaving), drain it. If the pipes can't be kept above freezing but you're staying, run a thin trickle from the taps on outside walls. Open cabinet doors under sinks so room heat reaches the pipes. Fill your water containers before you drain anything.",
  },
  "c-911": {
    why: "A child who can call for help, say where they are and stay on the line can save a parent's life, and a child who knows their address and your number gets home faster if you're separated. Public Safety Canada recommends practising this with children of any age, using pretend scenarios.",
    use: "Explain that 9-1-1 is for police, fire and ambulance when someone is in danger: not breathing, a fire, or someone badly hurt. Practise the three steps with play phones: give your address, say what's wrong, and stay on the line until told to hang up. Have them memorize their full address and at least one parent's phone number, and quiz them now and then. Tell them prank calls are illegal. Include them in making the family plan and the kit, and walk the meeting spots together.",
  },
  "x-support": {
    why: "A power outage stops elevators, oxygen concentrators, powered wheelchairs and accessible transit, and emergency services can't reach everyone at once. Public Safety Canada recommends anyone with a disability, a powered medical device or limited mobility set up a personal network of at least three people in advance. Neighbours matter most because they can get there first.",
    use: "Ask at least three people you trust: two who live close (neighbours, coworkers) and one elsewhere who won't be hit by the same event. Tell them how you need help, where your kit is and what's in your plan, and practise it once together. Give one a house key and show them how your medical equipment works. Label your equipment with your name. If you live in an apartment, tell building management you may need help to evacuate and plan a route that doesn't use the elevator.",
  },
  "d-keys": {
    why: "Keys get left behind in a fast evacuation, or lost in a flood or fire, and a locksmith is hard to get in a disaster. The Government of Canada puts extra house and car keys on its basic kit checklist.",
    use: "Put a spare house key and a spare key for each car in the kit or the go bag. Label them with a code rather than your address. Give another spare to your designated safe adult or a trusted neighbour.",
  },
  "l-landline": {
    why: "Cordless home phones need power, and cell networks overload or go down in big outages. A basic corded phone draws power from the phone line itself, so on a traditional copper landline it often keeps working. The Government of Canada suggests one just for emergencies. Many 'landlines' now run over internet or fibre and die with the modem, so this only helps if yours doesn't.",
    use: "If you have a landline, buy the cheapest corded phone and keep it in the kit. Test it once by plugging it into the wall jack with the power off at the modem. If the line goes dead with the modem off, your service runs over the internet and the phone won't help; put the money into a power bank instead.",
  },
});

/* ───────── Canada's additions to existing items ───────── */
addViews({
  "w-store": [{ by: "gc-food", text: "2 L per person per day for drinking, plus 2 more L for cooking and cleaning, about the same as this checklist's figure. Keep some small bottles too, since they're easier to carry and hand out." }],
  "w-bleach": [{ by: "gc-food", text: "If the tap water isn't safe, boil it first; use bleach when boiling isn't practical. Add 2 drops of unscented 5.25% bleach per litre, stir and wait 30 minutes. For surfaces, mix 5 mL of bleach (1 teaspoon) into 750 mL of water in a labelled spray bottle, bleach into water and never the other way round." }],
  "m-rx": [{ by: "gc-video", text: "Keep at least a couple of weeks of medication. List every medicine with its generic name, dose, what it treats and the prescriber, and keep a copy in the kit." }],
  "d-docs": [{ by: "gc-kit", text: "Keep physical and digital copies. Add your provincial or territorial health card number, banking information, next of kin, and a list of medications with dose and purpose." }],
  "d-plan": [{ by: "gc-plan", text: "The online plan takes about 20 minutes and prints. It asks for safe exits, meeting places, who picks up the children, nearby and out-of-town contacts, where pets can stay, and where the fire extinguisher, water valve, electrical panel, gas valve and floor drain are." }],
  "a-shutoffs": [{ by: "gc-plan", text: "Everyone in the house should know where the water valve, gas valve, electrical panel, floor drain and fire extinguisher are, and how each one works." }],
  "a-rotate": [{ by: "gc-kit", text: "Use the spring and fall time changes as the reminder: swap seasonal items (bug spray and sunscreen for warm gloves, heat packs and ice grippers) and check expiry dates on food, water, medications, ID and cards." }],
  "a-fifo": [{ by: "gc-food", text: "Replace emergency food every year or by its label date. Throw out cans that are dented, swollen, leaking or punctured. In flood-prone areas, store food on high shelves in watertight containers. Plan around food allergies, celiac disease and intolerances." }],
  "k-therm": [{ by: "gc-food", text: "A full freezer keeps food frozen about 48 hours, a half-full one about 24, and a closed fridge about 4. Don't put frozen food outside, even in winter: the sun can thaw it and animals can get at it. Food that still has ice crystals or is fridge-cold can be refrozen." }],
  "k-stove": [{ by: "gc-power", text: "A natural gas range can still be used for cooking in an outage (light the burner with a match), but never use it to heat the house. Barbecues, camp stoves and portable burners are outdoor-only: not in the garage, basement or shed, even with the doors open." }],
  "l-co": [{ by: "gc-cold", text: "Install CO alarms with battery backup in the hallways outside sleeping areas. If one sounds, leave right away and call 9-1-1 from outside; don't look for the source, and don't go back in until a professional says it's safe." }],
  "l-flash": [{ by: "gc-power", text: "Use flashlights instead of candles to lower the fire risk. Keep flashlights with batteries where you can find them in the dark." }],
  "l-gen": [{ by: "gc-power", text: "Run it at least 20 ft from all buildings, with the windows on that side closed. Choose a model that shuts off automatically when CO is high. Use rated, certified extension cords, never plug it into a wall outlet, and only connect it to the house through a transfer switch installed by a licensed electrician. Battery and solar power stations make no CO and can be used indoors." }],
  "l-radio": [{ by: "gc-power", text: "Install the WeatherCAN app for local weather alerts, and keep a crank or battery radio for when the internet is down. Know your official local information sources and gathering places." }],
  "v-kit": [{ by: "gc-car", text: "Canada's car kit: non-perishable food, water in plastic bottles (change every 6 months), a blanket, extra clothing and shoes, a first aid kit with a seatbelt cutter, a small shovel, scraper and snowbrush, a candle in a deep can with matches, a wind-up flashlight, a whistle, road maps and a copy of your plan. In the trunk: sand, salt or non-clumping cat litter, antifreeze and washer fluid, a tow rope, jumper cables, a fire extinguisher and warning lights or flares. Keep the tank at least half full, and full when extreme cold is forecast." }],
  "b-bag": [{ by: "gc-video", text: "Give each person their own grab-and-go bag so the load is shared and each one is personal. A backpack, duffel or wheeled suitcase in the front-hall closet works, as long as everyone knows where it is." }],
  "pt-kit": [{ by: "gc-pets", text: "Most evacuation shelters only accept service animals, so list pet-friendly hotels, boarding kennels, vet clinics and friends now. Keep a pet file with photos, vaccination records and licences. If you truly must leave a pet behind, don't tether or cage it, leave food and water (toilet seats up), and post a sign saying how many animals are inside." }],
  "pt-food": [{ by: "gc-pets", text: "Wet food reduces how much water pets drink. Keep bowls and a can opener with the pet food, and keep cats and dogs apart in an emergency, since stress changes behaviour." }],
  "c-play": [{ by: "gc-kids", text: "Let the children help pack the kit so they know what's in it and where it is, and include a favourite toy or book." }],
  "t-room": [{ by: "gc-cold", text: "Make sure everyone has winter clothing for your region: an insulated jacket, waterproof boots, warm socks, mittens, a toque and a scarf. Check whether your municipality opens warming centres, and check on older neighbours in a cold snap." }],
});

/* ───────── Where Canada asks for more: the earlier figure, kept as the differing view ───────── */
Object.assign(ALTS, {
  "pt-food": [{
    by: [], from: "This checklist's earlier figure (vets' rule of thumb)",
    claim: "Pets drink roughly 1 oz per lb of body weight a day, so a small dog needs about ¼ gal, a medium dog ½ gal, a large dog 1 gal and a cat about 0.1 gal.",
    alt: "Store water by that drinking rate, and top it up from the household supply if it runs short.",
    trade: "It takes about half the storage space, but covers drinking only: no margin for heat, spills, dry food or cleaning. That's why the Government of Canada's figures (about 4 L a day for an average dog and 1 L for a cat), which this checklist now uses, are higher.",
  }],
  "d-cash": [{
    by: [], from: "This checklist's playlist (videos 59, 71, 89)",
    claim: "A week of essential spending in cash is the minimum, two weeks is better.",
    alt: "Keep 1 week of essential spending in small bills, split between home, the car and an off-site spot, and keep the rest in a bank account you can reach from another region.",
    trade: "Less cash sitting idle or at risk of loss, theft or fire. But when card systems are down for more than a week, as after major ice storms and hurricanes, it runs out exactly when you need it.",
  }],
});

/* ───────── Place the new items in the survival order and the start guide ───────── */
function placeAfter(tierId, afterId, ...ids) {
  const list = TIERS[tierId - 1].ids;
  list.splice(list.indexOf(afterId) + 1, 0, ...ids);
}
placeAfter(2, "a-triggers", "x-outage");
placeAfter(2, "c-safe", "x-support", "c-911");
placeAfter(2, "t-room", "h-pipes");
placeAfter(6, "c-id", "d-keys");
placeAfter(6, "l-frs", "l-landline");
for (const k of Object.keys(RANK)) delete RANK[k];
TIERS.forEach((t) => t.ids.forEach((id, i) => { RANK[id] = [t.id, i]; }));

GUIDE.steps[0].ids.push("x-outage", "c-911", "x-support");
GUIDE.steps[1].ids.push("d-keys");
GUIDE.steps[2].ids.push("h-pipes");
GUIDE.steps[3].ids.push("l-landline");
