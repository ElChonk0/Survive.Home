/* Detailed reasoning (why) and how/when-to-use (use) for each item — water, food, cooking.
 * Keys match ITEMS ids in data.js. A value may be a function of the household context. */

Object.assign(DETAILS, {
  /* ───────── WATER ───────── */
  "w-store": {
    why: "Water runs out before anything else: a person lasts about 3 days without it, and city water pressure often fails within hours of a long power outage because the pumps run on electricity. FEMA's floor is 1 gallon per person per day for drinking and basic hygiene. The playlist pushes the target to 14 days, because real grid failures last 8–12 days on average and Maria, Katrina and Uri ran far longer. Pregnant and nursing members need more, and extreme heat can double what everyone drinks.",
    use: "Fill and store it now in a cool, dark place away from chemicals and direct sun, and write the fill date on each container. When an outage or boil-water notice starts, drink stored water first and keep tap water (if it still runs) for washing. Ration by the gallon-per-person rule, but never ration drinking water for anyone pregnant or for children. Swap the water out every 6 months, using the old water for plants or cleaning.",
  },
  "w-cont": {
    why: "Clear jugs grow algae, milk jugs break down and leak, and containers that held chemicals leach into the water. Food-grade HDPE (marked #2) that blocks light keeps water safe for years. Stackable 5–7 gallon sizes are light enough to move and fit under beds or in closets. A 5-gallon bucket with a Gamma Seal lid costs about $10, a fraction of branded water bricks.",
    use: "Rinse new containers with a weak bleach solution (1 tsp per quart of water), then fill from the tap. Keep a few in the house rather than all in the garage, where heat and fumes get in. When it's time to use them, pour or pump into a smaller pitcher instead of dipping cups in, which keeps the stored water clean. Refill and relabel every 6 months.",
  },
  "w-pump": {
    why: "A full 55-gallon drum weighs about 460 lb and can't be tipped. Dipping a cup in it is slow and dirties the whole drum. A simple siphon or hand barrel pump gets water out cleanly with no power. Hardware stores sell them as fuel-transfer pumps; buy a new one used only for water.",
    use: "Keep it taped to the drum or stored right beside it. Use it to fill a 1–2 gallon pitcher each morning, which becomes the day's drinking water. Rinse it with clean water after each use and store it capped so dust can't get in.",
  },
  "w-bleach": {
    why: "Plain bleach is the cheapest, most proven way to kill bacteria and viruses in water: about $3 treats roughly 1,000 gallons. The same bottle disinfects surfaces and toilet buckets, and it's how you clean up rodent droppings safely. Bleach loses about 20% of its strength a year, so an old bottle under-treats water unless you double the dose. It must be unscented and plain, with no splash-less or added cleaners.",
    use: "For clear water, add 8 drops per gallon of 6% bleach (6 drops if the label says 8.25%), measured with a medicine dropper. Health Canada's version is 2 drops of 5.25% bleach per litre, which works out the same. For cloudy water, strain it through a cloth first, then double the dose. Stir, wait 30 minutes, and check for a faint chlorine smell; if there isn't one, dose again and wait 15 minutes. For surfaces use about 1 tablespoon per gallon of water, and for rodent droppings 1½ cups per gallon, soaked for 5 minutes. Store it locked away from children, and replace it every year.",
  },
  "w-tabs": {
    why: "Tablets are the lightest, simplest way to make water safe when you're away from home or the filter is lost or frozen. Chlorine dioxide also kills Cryptosporidium, which plain chlorine and iodine don't reliably handle. Unlike hollow-fiber filters, tablets still work in freezing weather. Iodine tablets aren't a good routine choice in pregnancy or for thyroid conditions, which is why this list specifies chlorine dioxide.",
    use: "Keep one pack in every go bag and car. Use them when you can't boil or filter, or as a second step after a filter, since filters don't stop viruses. Follow the package: typically 1 tablet per liter, then wait 30 minutes (up to 4 hours in very cold or murky water). Check the expiry date when you rotate the kits.",
  },
  "w-filter": {
    why: "Stored water eventually runs out; a filter turns streams, ponds, rain barrels and a tub of old tap water into drinking water for months. A gravity filter serves the whole family hands-free, about 3.5 gallons an hour. A squeeze filter fits a go bag and, unlike a straw, can fill bottles for the child. Filters remove bacteria and parasites but not viruses or chemicals, and hollow-fiber types are silently ruined if they freeze.",
    use: "Set up the gravity filter on day one of any long outage and keep it running so stored water is saved for emergencies. Pre-strain murky water through a cloth to keep the filter from clogging, and backflush the squeeze filter as directed. For water from a suspect source, add a tablet or bleach afterward. In freezing weather keep the filter inside your jacket by day and in your sleeping bag at night, and replace any filter that froze.",
  },
  "w-heater": {
    why: "A typical water heater holds 40–80 gallons of clean drinking water that most families forget they have. That's 2–3 weeks of drinking water for your household with nothing extra to buy. Getting it out requires a short hose that fits the drain valve, sometimes a valve key, and a clean container. Knowing how beforehand matters, because hot water and sediment come out first.",
    use: "In a long outage, turn off the heater's power or gas and close the cold-water supply valve at the top. Let the water cool for a few hours, then open a hot-water tap upstairs to let air in. Drain from the bottom valve into a clean container, discarding the first gallon or so of sediment. Treat it like stored water, and refill the tank before turning the heater back on.",
  },
  "w-tub": {
    why: "City taps keep pressure only for a few hours once the pumps fail, and on high apartment floors water can stop within minutes. A tub liner holds about 100 gallons and fills in roughly 20 minutes while the taps still work. Without a liner, tub water collects dust and soap residue and is only good for flushing and washing. It's the fastest single action that multiplies your water supply.",
    use: "Fill it the moment a hurricane, ice storm or other warning is announced, or at the first sign of any major outage. Use the included pump to draw drinking water, and keep the liner covered. If you have no liner, fill the bare tub anyway and use that water for flushing (pour a bucket into the bowl) and washing. Empty and dry the liner after use so it stores clean.",
  },
  "w-rain": {
    why: "In a long emergency, the roof is the biggest water source you have. A 1,000 ft² roof yields about 530 gallons from 1 inch of rain. A first-flush diverter dumps the dirtiest first water (droppings, dust), which can carry 100× more bacteria than what follows. Roof materials can add chemicals, so rainwater is always treated before drinking.",
    use: "Install it in good weather: an opaque tank in shade, a 100-micron inlet screen, mosquito mesh on every opening, and overflow aimed at least 6 ft from the foundation. Use the water first for flushing, washing and the garden. For drinking, filter it and then add bleach or tablets. Drain the system before the first hard frost.",
  },

  /* ───────── FOOD: no-cook ───────── */
  "f-pb": {
    why: "Peanut butter is one of the most calorie-dense foods per dollar (about 2,600 kcal a jar) and gives protein and fat with no cooking, no water and no fridge. Stress and darkness make cooking hard in the first days, and ready foods keep everyone eating. Toddlers usually already like it. Natural peanut butter goes rancid in warm storage, so regular shelf-stable jars are better for the stockpile.",
    use: "Use it in the first 72 hours and in go bags, on crackers, bread or spoons. Give it to small children thinly spread, never in thick spoonfuls (a choking risk). Swap for sunflower butter if anyone is allergic. Rotate jars into normal meals before the date and replace them.",
  },
  "f-cprot": {
    why: "Canned fish and chicken are complete protein that's ready to eat straight from the can. Pink salmon and sardines carry far less mercury than albacore tuna and add vitamin D and omega-3s, which matters for pregnancy and growing children. They last 3–5 years and often longer below 75°F. Pull-tab lids remove the dependence on a can opener.",
    use: "Eat cold during the first days, or mix into rice and pasta once you're cooking. Choose fish packed in water and pull-tab lids. Toss any can that's bulging, leaking or dented on the seam without tasting it. Rotate a few cans into regular meals each month.",
  },
  "f-crack": {
    why: "Shelf-stable carbohydrates you can eat straight from the box make the first 72 hours manageable. They need no water to prepare, which saves your drinking supply. Familiar brands keep children eating when everything else is strange. Most are calorie supplements rather than complete nutrition, so they're paired with protein.",
    use: "Use them in the first days, in go bags, and as quick snacks during long waits or evacuations. Keep boxes sealed in a bin so moisture and pantry moths stay out. Pair each serving with peanut butter or canned protein. Rotate them into lunches before the date.",
  },
  "f-nuts": {
    why: "At about 2,200 kcal per pound, nuts and dried fruit pack the most energy into the least space, which is exactly what a go bag and a car kit need. They need no preparation or water. Whole nuts are a choking hazard under age 4, so children under 4 get dried fruit cut into small pieces instead. Nuts go rancid above 70°F, so they're stored cool and rotated often.",
    use: "Pack them in go bags and cars, and eat them during the no-cook days or while on the move. Store in sealed bags in the coolest part of the house, not the garage. Cut dried fruit into small pieces for small children. Replace them every 6–12 months.",
  },
  "f-rte": {
    why: "Canned stew, chili and ravioli are full meals that are safe to eat cold, so they work even if you can't cook. They bridge the gap between snacks and real cooking during the first two weeks. The catch is sodium: branded chili and cream soups carry close to a full day's salt in one can and little protein, so they shouldn't become the daily staple. Variety matters for keeping people eating.",
    use: "Eat cold in the first days, or warm the can (lid off, in a pot of water) on the camp stove later. Mix brands and types so no single one is eaten daily. Choose lower-sodium versions where you can, especially in pregnancy. Rotate them into regular dinners and replace them.",
  },
  "f-fruitveg": {
    why: "Fresh produce is the first thing to vanish when trucks stop, and vitamin gaps build slowly over weeks. Canned fruit and vegetables cover fiber, vitamin C and minerals without refrigeration. Fruit in heavy syrup is mostly sugar and canned spinach blocks iron and calcium if eaten daily, so the list favors fruit in juice and vegetables in water. Cans last years past their labels when stored cool.",
    use: "Serve one with most meals, cold or heated. Use the liquid too: vegetable water can go into soups and rice. Fruit cups make easy kids' snacks. Rotate them into normal meals, oldest first.",
  },

  /* ───────── FOOD: pantry ───────── */
  "f-pasta": {
    why: "Pasta gives cheap calories that cook in about 10 minutes, which saves stove fuel compared with beans. Almost everyone in the house, including the kids, already eats it. In its original box it lasts 1–2 years, and up to 10 in Mylar. It's the backbone of days 4–14, once you're able to cook.",
    use: "Cook it once you have the camp stove running (outdoors). Use only as much water as needed and save the starchy water for sauce or soup. Store boxes inside a sealed bin to keep moisture and moths out. Rotate it into weekly meals.",
  },
  "f-rice-p": {
    why: "White rice is filling, cheap and stores for years because, unlike brown rice, it has almost no oil to go rancid. It pairs with canned protein and beans for complete meals. The playlist warns to buy the kind your family actually eats, since unfamiliar food leads to under-eating. This pantry portion covers the cooking days before long-term staples take over.",
    use: "Cook from day 4 onward. Use a thermal cooker to save fuel: boil 5 minutes, then wrap the pot and let it finish for 30–60 minutes. Store in airtight containers. Rotate into everyday meals and refill.",
  },
  "f-oats-p": {
    why: "Oats are the fastest-cooking grain and a breakfast most kids know. They're whole grain, filling and work sweet or savory. A canister makes many servings with just hot water. They also stretch flour in baking.",
    use: "Make breakfast with hot water (or cold-soaked overnight if fuel is short), and add powdered milk, honey or dried fruit. For small children, cook them soft and let them cool. Keep the canister sealed. Rotate it into normal breakfasts.",
  },
  "f-pb-p": {
    why: "Beyond the first days, peanut butter keeps adding easy protein and fat to a grain-heavy diet. Fat is what makes rice-and-bean meals filling, and the body needs it to absorb vitamins A, D, E and K. It's also a reliable comfort food for kids. Jars are compact and last about 2 years.",
    use: "Stir it into oatmeal, spread it on flatbread, or thin it with hot water and soy sauce for a noodle sauce. Keep jars cool. Use the oldest first and replace them as you go.",
  },

  /* ───────── FOOD: staples ───────── */
  "f-rice": {
    why: "For plans longer than two weeks, white rice is the caloric core: video 24's 90-day plan uses 25 lb per adult. Sealed in Mylar with oxygen absorbers inside a bucket, it lasts 25–30 years. It costs about 40 cents a pound in bulk. Together with beans it supplies most of the calories in a long-term pantry.",
    use: "Pack it in Mylar bags with oxygen absorbers, seal, and put them in buckets labeled with contents and date. Store below 75°F, never in a hot garage. Open one bag at a time once the pantry food is used up, and move it into an airtight container. Use the thermal-cooker method to save fuel.",
  },
  "f-beans": {
    why: "Beans and lentils supply the protein that grains lack, and with rice they form a complete protein. Lentils and split peas cook in about 20 minutes without soaking, which saves a lot of fuel compared with kidney beans' 90 minutes. Beans stored without oxygen absorbers develop a 'hard-to-cook' defect after 2–3 years and never soften. Raw or undercooked kidney beans are toxic.",
    use: "Store in Mylar with oxygen absorbers. Cook lentils and split peas on fuel-short days. Soak other beans 5+ hours, then boil them hard for at least 10 minutes before simmering; a slow cooker alone isn't safe for kidney beans. Mash well for small children.",
  },
  "f-oats": {
    why: "Oats are the longest-lasting grain in Mylar (about 30 years) and the easiest breakfast. They cook fast, so they're fuel-efficient. They add soluble fiber that rice and pasta lack. Most children will eat them.",
    use: "Seal in Mylar with oxygen absorbers in labeled buckets. Open when the pantry oats run out. Soak overnight in cold water to save fuel, then just warm them. Add powdered milk and honey for the child.",
  },
  "f-flour": {
    why: "Pasta and white flour add variety: bread, flatbread, pancakes and noodles keep a staples diet bearable. White flour lasts 10–15 years in Mylar, but whole-wheat flour and cornmeal go rancid in 3–6 months. For decades of storage the playlist favors wheat berries plus a hand mill. Bland, repetitive food leads people to eat less over time.",
    use: "Store pasta and white flour in Mylar or airtight containers. Make skillet flatbread (flour, water, salt, a little oil) on the stove when bread runs out. Use baking powder for quick breads. Rotate opened flour within a few months.",
  },
  "f-oil": {
    why: "Fat is the gap most food plans miss. Without it the body can't absorb vitamins A, D, E and K, and a grain-and-bean diet becomes calorie-sufficient but nutrient-poor. At 9 calories per gram it's the densest energy you can store. Liquid oil goes rancid in 1–2 years, faster in clear bottles, while shortening in sealed cans lasts 8–10 years and coconut oil and ghee last years.",
    use: "Add a spoonful to rice, beans and oats at most meals, especially for children and in pregnancy. Store oil in dark containers in a cool place and use it first. Keep shortening or ghee for long-term storage. Smell before using; rancid oil smells sharp or like crayons and should be discarded.",
  },
  "f-sugar": {
    why: "Sugar and honey keep indefinitely when dry and sealed, provide fast energy, and make stored staples palatable enough that people keep eating. Honey also soothes coughs and sore throats in anyone over 1. Honey can carry botulism spores, so it must never be given to a baby under 1 year. Crystallized honey is not spoiled.",
    use: "Store sugar in airtight containers with a silica packet, and honey in its sealed jar. Use them to sweeten oatmeal, baking and tea, rationing so they last the plan. Warm crystallized honey gently in a pan of warm water to liquefy it. Give honey to children over 1 for coughs, half a teaspoon.",
  },
  "f-salt": {
    why: "Salt makes repetitive food edible, replaces electrolytes lost through sweat, and is needed for curing and pickling. Iodized salt is the main iodine source for many people, but it slowly loses iodine over the years, so a rotating box covers the table while pure salt stores indefinitely for preserving. Iodine matters most during pregnancy, when the prenatal vitamin covers it. It costs almost nothing.",
    use: "Keep iodized salt in the kitchen and rotate it yearly. Store pure (non-iodized) salt in sealed buckets for long-term use and food preserving. Use about 1 cup per gallon of water for meat brine. A pinch in water helps after heavy sweating if you have no ORS packets.",
  },
  "f-milk": {
    why: "Powdered milk adds calcium and protein without refrigeration and keeps routines like cereal, coffee and baking going. Non-fat powder lasts 20+ years in Mylar, while whole-milk powder lasts only 2–5. Toddlers need whole milk for fat, so their supply should be rotated rather than stored for decades. It also makes a cheap, filling addition to oats.",
    use: "Mix with cold water and let it sit (or chill) before drinking; it tastes noticeably better. Make only what you'll use the same day, since mixed milk spoils without a fridge. Add it dry to oatmeal and baking. Keep opened bags sealed against moisture.",
  },
  "f-vit": {
    why: "A grain-and-bean diet keeps you fed but slowly runs short on vitamins: scurvy appears at 60–90 days without vitamin C, and vitamin D drops fast indoors. A daily multivitamin covers these gaps for pennies a day. Anyone pregnant takes prenatal vitamins instead, which have the right folate and iron. Give children's chewables only with the pediatrician's okay.",
    use: "Start daily multivitamins once you're living mainly on stored food (after the first week or two). Store bottles cool, dark and sealed, and check expiry dates. Keep them locked away from children; iron overdose in children is dangerous. Rotate into normal use before they expire.",
  },
  "f-flavor": {
    why: "The playlist repeatedly warns about appetite fatigue: after about two weeks of the same bland food, people simply eat less. Spices, bouillon, soy sauce, hot sauce and vinegar turn the same rice and beans into different meals. Baking powder, soda and yeast make bread and pancakes possible. The whole kit costs little and takes up a shelf.",
    use: "Use it from the first cooked meal onward to keep food appealing, especially for children. Keep yeast in the freezer and move it to a cool spot in an outage. Bouillon cubes turn plain water into broth for a sick family member. Replace spices every couple of years.",
  },
  "f-comfort": {
    why: "Comfort foods sound optional but they protect morale, which drives how well people eat, sleep and cooperate. Coffee also prevents caffeine-withdrawal headaches for regular drinkers. Dark chocolate is calorie-dense and lasts 2–5 years. Pregnant members should keep caffeine under 200 mg a day.",
    use: "Ration them as small daily treats or rewards, which works especially well for kids. Keep instant coffee or tea for days without power. Store chocolate cool and sealed. Rotate them into normal use.",
  },
  "f-de": {
    why: "Weevils and pantry moths can ruin bulk grain stored for months. Food-grade diatomaceous earth kills insects mechanically, by scratching and drying them, with no chemicals or resistance. It's widely used for stored grain. Only the 'food-grade' type is safe; pool-grade is not.",
    use: "When filling buckets of grain or beans not sealed with oxygen absorbers, mix in about 1 cup per 25 lb. Wear a dust mask while mixing, and keep it away from children's faces. Rinse grain before cooking if you like. Keep the bag dry and sealed.",
  },
  "f-seal": {
    why: "The four enemies of stored food are oxygen, moisture, light and pests, and Mylar bags with oxygen absorbers inside buckets defeat all four. They stretch staples from 1–2 years to 25–30. Buckets also keep rodents out, which matters because rodent droppings carry hantavirus. Labels prevent confusion and help with rotation.",
    use: "Fill a Mylar bag, drop in an oxygen absorber (about 300–500 cc per gallon), squeeze out air and heat-seal it with a clothes iron. Put bags in a bucket with a tight or Gamma lid and label contents and date. Store below 75°F. Once a bag is opened, move the food to an airtight container and use it within months.",
  },

  /* ───────── COOKING ───────── */
  "k-opener": {
    why: "A pantry full of cans is useless without a way to open them, and the electric opener dies with the power. Cheap openers strip their cutting wheel after a day of heavy use. The Red Cross specifically says to test it on a real can. It's the most-forgotten item in every survey.",
    use: "Test it on a real can before storing it, and replace it if it slips. Keep one in the kitchen kit and one in the go bag. Clean and dry it after use so it doesn't rust. Buy an all-metal model.",
  },
  "k-stove": {
    why: "Once the no-cook food runs out, you need heat for meals, boiling water and warming bottles. A propane camp stove is the simplest reliable option. Using any gas or propane appliance indoors is how many people die in outages, from carbon monoxide. Small canister stoves weaken below about 11°F.",
    use: "Use it only outdoors or in an open-sided, ventilated space, never in a garage or tent. Set it on a stable surface away from anything flammable and keep children well back. In cold weather keep the fuel canister warm in your jacket until use. Have the fire extinguisher nearby.",
  },
  "k-fuel": {
    why: "Stores keep stoves on the shelves during an outage but sell out of fuel on day one. Each 1-lb cylinder lasts about 1–2 hours of cooking, so fuel has to be planned by days. A 20-lb tank equals about 20 small cylinders and connects with a $15 adapter hose. A thermal cooker cuts fuel use by 60–80%.",
    use: "Store cylinders outdoors or in a shed, upright, away from sun and heat, never in the living space. Use them for boiling and quick cooking, then let a thermal cooker finish the job. Check fittings for leaks with soapy water. Refill or replace before each storm season.",
  },
  "k-thermal": {
    why: "Retained-heat cooking is the most fuel-efficient method in the playlist: boil briefly, then insulation does the rest. Rice, oats, beans and lentils cook fully on 5–10 minutes of boiling plus a few hours wrapped. That cuts fuel use by 60–80%, stretching a small propane supply for weeks. Food stays above safe temperatures while it cooks.",
    use: "Bring the pot to a full boil for 5–10 minutes with the lid on, then put the whole pot into a cooler or box packed with blankets or towels. Leave it 1–2 hours for rice and 3–4 for beans. Re-boil briefly before serving if it's cooled below hot. Use it every cooking day in an outage.",
  },
  "k-fire": {
    why: "Fire runs cooking, boiling water and warmth. A disposable lighter gives thousands of lights and works with cold hands. Matches absorb humidity over time and can fail, so they're the backup. Small children are drawn to lighters, so storage matters.",
    use: "Keep lighters in the kitchen kit, go bags and car, and matches in a sealed waterproof container. Warm a lighter in your pocket before use in cold weather. Test one match a year. Store everything in the locked bin, out of children's reach.",
  },
  "k-plates": {
    why: "Washing dishes uses water you need for drinking, and dirty dishes spread illness when water is short. Disposable plates, cups and utensils take that problem away for the first two weeks. They also save time and stress during the hardest days. The Red Cross lists them specifically.",
    use: "Switch to disposables as soon as the water is off or rationed. Bag used ones in the contractor bags and keep the trash outside and closed. Burn or bag paper waste depending on local rules. Return to washing only when water is reliable again.",
  },
  "k-therm": {
    why: "Food poisoning is a real risk when the fridge fails, and especially dangerous in pregnancy (listeria) and for small children. A closed fridge stays safe about 4 hours and a full freezer about 48. Thermometers tell you exactly what's safe instead of guessing. A cooler with ice extends the life of milk, medicine and leftovers.",
    use: "Keep a thermometer in the fridge and the freezer all the time. In an outage, keep both doors closed and check the thermometer before eating anything. Throw out perishable food that sat above 40°F for 2+ hours. Move medicine and children's milk into the cooler with ice or frozen water bottles first.",
  },
  "k-alt": {
    why: "Propane can run out, and a second cooking method keeps you going. A rocket stove burns twigs at 75–85% efficiency, and the yard never runs out of twigs. An alcohol stove is clean-burning, quiet and runs on denatured alcohol from the paint aisle. Its flame is almost invisible in daylight, which causes most injuries.",
    use: "Use the rocket stove outdoors with pencil-thick dry sticks fed into the side opening. Light the alcohol stove on a stable non-flammable surface, approach it from the side rather than above, and never refill it while lit. Keep both away from children. Practice once before you need them.",
  },
  "k-canner": {
    why: "For long outages, pressure canning turns meat, beans and vegetables into shelf-stable food that lasts 2–5 years without a fridge. It's the only safe home method for meat and low-acid foods, because botulism spores survive boiling-water canning. A stovetop canner works on propane or wood. Lids are single-use, so you need a supply.",
    use: "Use it when you have meat or produce to preserve, such as a freezer that's thawing in a long outage. Follow the USDA processing times and pressure for your altitude exactly, with no shortcuts. Check that every lid sealed before storing. Learn it now in normal times, not during an emergency.",
  },
  "w-pool": {
    why: "Liquid bleach loses strength every year, but plain calcium hypochlorite (pool shock) keeps for 10+ years. One pound can treat about 10,000 gallons once mixed into a stock solution. It's the cheapest way to keep water treatment for a very long plan. It's a strong oxidizer that can start fires if it contacts fuel or other chemicals.",
    use: "Buy plain 65–73% calcium hypochlorite with no algaecides or stabilizers. Store it sealed, dry, and far from fuel, cleaners and children. To use, follow EPA directions: dissolve 1 heaping teaspoon in 2 gallons of water to make a stock solution, then add 1 part stock to 100 parts water and wait 30 minutes. Label the stock jug clearly.",
  },
  "f-potato": {
    why: "Instant potato flakes cook with just hot water in a minute, so they're the most fuel-efficient comfort food you can store. They last decades sealed. Most kids eat mashed potatoes happily. They also thicken soups and stretch meals.",
    use: "Mix with hot water and some powdered milk and a little fat. Add to soups to thicken them. Store sealed, and rotate opened bags within months.",
  },
  "k-mill": {
    why: "Wheat berries last 25–30 years, far longer than flour, but they're inedible until ground. A hand-cranked mill turns them into fresh flour in minutes with no electricity. It also grinds corn, oats and beans into meal. Cheap plastic mills wear out; metal burr mills last decades.",
    use: "Mount it to a sturdy table and grind only what you'll use within a few days, since fresh flour goes rancid fast. Grind finer for bread and coarser for porridge. Brush it clean and keep it dry. Practice before you depend on it.",
  },
  "k-dutch": {
    why: "A cast-iron Dutch oven cooks, bakes and boils on a camp stove, wood fire or coals and lasts generations. It holds heat, which saves fuel and lets food keep cooking off the flame. Without a lid lifter, handling it over coals is how people burn their hands. It can bake bread when there's no oven.",
    use: "Use it outdoors over coals or on the camp stove. To bake, put coals under and on the lid. Lift the lid with the lifter, never by hand. Dry it after washing and wipe it with oil to prevent rust.",
  },
});
