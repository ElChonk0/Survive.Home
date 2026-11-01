/* Detailed reasoning (why) and how/when-to-use (use) — later medical/child items, home, vehicles, pets, skills. */

Object.assign(DETAILS, {
  /* ───────── MEDICAL (added from videos 51–100) ───────── */
  "m-trauma": {
    why: "A tourniquet only works on arms and legs. Wounds at the groin, armpit or neck need hemostatic gauze packed in with firm pressure, which clots blood much faster than plain gauze. A penetrating chest wound can collapse a lung, and a vented chest seal prevents it. A SAM splint immobilizes broken bones so a person can be moved, and fractures are common in debris and falls.",
    use: "For deep bleeding where a tourniquet can't go: pack the gauze tightly into the wound with your fingers, then press hard for at least 3 minutes. For a chest wound, wipe the skin and stick the seal over the hole with the valve centered (one for each hole). For a suspected break, mold the splint to the uninjured limb, then pad and wrap it around the injured one including the joints above and below. Call 911 for all of these.",
  },
  "m-vitals": {
    why: (c) => "These two cheap tools give the same first numbers an ER checks, so you can tell when something is serious. A pulse oximeter shows blood oxygen, which drops before breathing trouble is obvious. A manual blood-pressure cuff needs no batteries and catches dangerous highs and lows, which matter for anyone on blood-pressure medicine and for older adults." + (c.preg.length ? " In pregnancy, high blood pressure can be the first sign of preeclampsia, which needs care quickly." : ""),
    use: (c) => "Take everyone's baseline readings now and write them on their medical cards. Check oxygen if someone is short of breath, very sick or confused: 95% or above is normal, under 94% needs attention, under 90% is an emergency. Check blood pressure seated after 5 minutes of rest; very high (over 180 top number) or very low (under 90) needs urgent care." + (c.preg.length ? " For the pregnant member, 140/90 or higher, or any severe headache or vision change, means call the OB or go in now." : ""),
  },
  "m-manual": {
    why: "Under stress, memory fails, and the phone search you'd normally rely on disappears with the cell towers. A printed first-aid manual walks you through injuries step by step. Having children's dosing charts, medicine lists and the water-treatment instructions on paper avoids guessing. The playlist calls an offline library one of the most valuable things a household can own.",
    use: "Put the Red Cross first-aid manual, the CDC water-treatment sheet, the children's dosing chart, medicine lists, local maps, the frequency card and your car manual in a binder in a waterproof bag. Keep it with the first-aid kit. Read through the first-aid basics once now. Pull it out at the first injury or illness.",
  },
  "m-cool": {
    why: "Insulin and some other medicines lose strength above about 77°F and need refrigeration for long storage. When the fridge dies, coolers and ice disappear from stores within hours. Evaporative cooling pouches keep insulin cool for days with just water. A plan avoids a medical emergency on top of an outage.",
    use: "Soak the evaporative pouch as directed and keep insulin in it in a shaded spot. If you use a cooler with ice, keep the medicine in a sealed bag and not touching the ice (freezing ruins insulin). Use the power station or generator to run a small fridge if you have one. Know how long each medicine is safe unrefrigerated.",
  },
  "m-ki": {
    why: "After a nuclear plant accident or detonation, radioactive iodine can be absorbed by the thyroid, raising thyroid cancer risk, especially in children and unborn babies. Potassium iodide fills the thyroid with stable iodine so it absorbs less of the radioactive kind. It protects only the thyroid and only from iodine, not from other radiation. Taking it when not needed has risks, so the dose and timing come from officials.",
    use: "Take it only when public-health officials announce it for your area, and follow their instructions. FDA single-day doses: adults (including pregnant women) 130 mg, ages 3–18 65 mg (teens over 150 lb take the adult dose), 1 month–3 years 32 mg. Pregnant and breastfeeding women take a single dose and don't repeat unless told to. Sheltering indoors does far more for overall protection.",
  },
  "m-abx": {
    why: "When medical care is cut off for weeks, infected wounds become one of the main dangers. Antibiotics are prescription medicines for good reason: the wrong drug or dose can cause harm, and some are unsafe in pregnancy or for small children. A doctor can decide what, if anything, makes sense for your family. The fish antibiotics and colloidal silver promoted in some videos are not safe substitutes.",
    use: "Bring it up at your next checkup, explain it's for an emergency kit, and list allergies, the pregnancy and the child's age and weight. If prescribed, store it as directed and only use it according to the doctor's instructions. Keep wounds clean and covered as the first line of defense. Get professional care as soon as it's available.",
  },
  "c-safe": {
    why: "If both parents are hurt, stuck elsewhere or separated in a disaster, someone needs to take charge of the child right away. A named person the child already knows avoids confusion and fear. Schools and shelters can release a child to a designated adult. The playlist calls this the single most important step for parents.",
    use: "Ask a trusted relative, neighbor or friend who lives within about 30 minutes, and get their agreement. Give them a copy of the child's info card, the family plan and a key if appropriate. Add them to the school's pickup list. Make sure the child knows their name and face.",
  },

  /* ───────── TOOLS & HOME ───────── */
  "h-ext": {
    why: "Outages bring candles, camp stoves, heaters and generators, all of which raise fire risk, and the fire department may be slow or unreachable. An ABC extinguisher works on ordinary fires, fuel and electrical fires. One on each floor plus the cooking area means one is always close. In apartments, sprinkler pumps can fail when power does.",
    use: "Mount them in plain sight near exits, the kitchen and wherever you'll run a stove or generator. Use PASS: pull the pin, aim at the base of the fire, squeeze, sweep side to side. Only fight a small fire with a clear exit behind you; otherwise get out and call 911. Check the gauge monthly and replace after any use.",
  },
  "h-wrench": {
    why: "After an earthquake or explosion, a broken gas line can fill a house and ignite. Most people don't know where their gas meter valve is or have a tool that fits. A wrench taped to the pipe removes the search. Shutting the gas when it isn't needed causes a long wait for the utility to restore it.",
    use: "Learn where the meter valve is and which way closes it (a quarter turn so the tab is crosswise to the pipe). Turn it off only if you smell gas, hear a hiss, or see damage. If you smell gas inside, get everyone out first, don't touch light switches or phones inside, and call from outside. Leave it to the gas company to turn back on.",
  },
  "h-water": {
    why: "A burst pipe can flood a house in minutes, and in a hurricane the main valve should be closed to stop contaminated water flowing back into your pipes. Many homes have only an indoor valve, and some need a curb-stop key at the street. Knowing both and owning the tools takes 15 minutes. It also lets you keep clean water in your pipes and water heater.",
    use: "Find the indoor main valve and the street curb stop now, and test that they turn. Shut the main when a pipe bursts, before a hurricane, or when the city says the water is contaminated. Leave it closed until officials say the water is safe. Tag the valve so anyone in the house can find it.",
  },
  "h-multi": {
    why: "After a disaster you'll need to cut, pry, hammer and repair things with no handyman available. A few quality hand tools work without electricity and last decades. A multi-tool covers small jobs; a hammer, saw, hatchet and pry bar handle the big ones. Files keep blades sharp.",
    use: "Keep them together in one toolbox near the exit or garage door. Use them for boarding windows, clearing debris, shutting off utilities and building a warm room. Sharpen and oil them after use. Wear gloves for all cleanup work.",
  },
  "h-tape": {
    why: "During a chemical spill or radioactive fallout warning, officials may tell you to shelter in place, and sealing one interior room keeps out most contaminated air and particles. Cutting sheets to size in advance turns an hour's job into under 15 minutes. Sealing helps only for a few hours against chemicals; after that, air gets stale and it should be ventilated when officials say. Plastic doesn't stop radiation itself but keeps fallout dust out.",
    use: "Pick an interior room, cut and label a sheet for each window, vent and door, and store them with tape in one bag. When told to shelter, bring everyone and pets inside, turn off the HVAC and fans, close the fireplace damper, and tape the sheets up. Keep the radio on. Remove the sheets and air the room when officials say it's safe.",
  },
  "h-gloves": {
    why: "Cuts, punctures and splinters on hands and feet are the most common injuries in cleanup after storms and quakes. Without medical care, those can get infected. Leather gloves and sturdy boots stop most of them. Keeping them together means no searching when it's time to clean up.",
    use: "Put them on before handling debris, broken glass, metal or wood. Store them in one spot near the exit with the hand tools. Check for holes and replace worn ones. Keep children away from cleanup areas.",
  },
  "h-repair": {
    why: "A cracked pipe or leaking container can drain your water supply or flood the house, and plumbers won't be available. Epoxy putty seals leaks even on wet pipes. PTFE tape and compression fittings fix joints without soldering. A spare ball valve lets you isolate a broken line.",
    use: "Shut the water first, then dry and roughen the area, knead the epoxy putty and press it over the leak; it sets in minutes. Wrap PTFE tape clockwise on threads before reconnecting. Cut out a split pipe section and join it with a compression fitting and a wrench. Keep the kit with the tools.",
  },
  "h-quake": {
    why: "In earthquakes, falling furniture and objects cause more injuries than building collapse, and people standing up are hit hardest. A bookcase or dresser can tip in a couple of seconds of shaking. Straps anchor them to wall studs. A toddler's room needs it most, since children climb and are close to the ground.",
    use: "Strap every tall bookcase, dresser and TV to wall studs, starting in bedrooms. Move heavy items off high shelves and away from beds. Latch kitchen cabinets. During shaking: drop, take cover under a sturdy table, and hold on, then stay down 60 seconds after it stops.",
  },
  "h-flood": {
    why: "Sump pumps stop when the power goes, often during the same storm that's flooding the ground. A flooded basement ruins stored food, water, the furnace and the water heater, and isn't covered by standard insurance. A battery backup pump runs for hours on its own. Sandbags divert water away from doors.",
    use: "Install the backup pump beside the main one and test it twice a year. Store food and water off the basement floor. Fill and place sandbags in front of doors and low windows before a flood forecast. Never walk into flooded rooms with outlets or appliances under water.",
  },
  "h-hurr": {
    why: "Hurricane winds turn debris into missiles that break windows, and once wind gets inside, it can lift the roof. Plywood or shutters keep the house sealed. Cutting and labeling panels in advance means they go up in an hour instead of a day. Hardware stores run out of plywood fast before storms.",
    use: "Cut plywood to fit each window, label it, and pre-drill mounting holes. Put it up when a hurricane watch is issued. Store it flat in the garage between seasons. Take it down after the storm to let light and air in.",
  },
  "h-fire": {
    why: "Wildfire can move faster than people can run, and by the time you see it nearby, you have minutes. The families who survived the Camp Fire by car had their essentials already loaded and left immediately. Clearing brush near the house slows fire. Smoke is dangerous, especially for a pregnant woman and a toddler.",
    use: "In fire season, keep go bags and documents in the car and the tank at least half full. Leave when officials say or when fire is visible within half a mile, without stopping to pack. Close all windows and doors behind you. Wear N95s in smoke and keep the toddler indoors with windows shut.",
  },
  "h-rodent": {
    why: "Mice and rats chew through bags and cardboard, ruin stored food, and their droppings can carry hantavirus, which is fatal in about a third of cases. Metal cans with tight lids keep them out completely. Rodent problems grow when trash service stops. Pet food attracts them too.",
    use: "Store grain, beans and pet food in metal cans or buckets with lids. Check stored food areas monthly for droppings or chew marks. Never sweep or vacuum droppings; spray them with bleach solution, wait 5 minutes, wipe with paper towels while wearing gloves and an N95, and bag everything. Monitor for fever and aches for 6 weeks after cleaning a heavy infestation.",
  },
  "h-saferoom": {
    why: "In a sudden emergency there's no time to gather supplies, so they need to be where you'll shelter. An interior room with no windows protects from storms, flying glass and debris. An interior bathroom also has water and plumbing nearby. In an apartment, the windowless core near the stairs is the strongest spot.",
    use: "Choose the room and stock it with water for 72 hours, a first-aid kit, a radio, a flashlight, phone chargers and a contact list. Go there for tornado warnings, nearby explosions or when told to shelter. Sit low, away from walls with windows. Check the supplies every 6 months.",
  },
  "h-apt": {
    why: "Above about the sixth floor, city water pressure can't reach you without electric booster pumps, so water stops within minutes of a power loss. Building sprinkler pumps and elevators fail too, and elevators automatically go to the lobby. Smoke travels up stairwells and through hallways. Apartment residents have to store everything in their unit.",
    use: "Store all your drinking water inside the unit, and keep an extinguisher visible between the bedroom and the door. Use stairs only in an emergency. Before opening the door in a fire, touch it with the back of your hand; if it's warm, stay in and seal the gaps. Keep a small kit in the building's interior core and leave early if you're going to evacuate.",
  },
  "h-film": {
    why: "A blast, storm or impact turns window glass into flying shards, a leading cause of injuries. Safety film holds the broken glass together. Most break-ins and forced entries happen by splitting the door frame, not the lock. Reinforcement plates and a door bar make that far harder.",
    use: "Apply film to street-facing and large windows first, following the kit directions. Install frame reinforcement plates on exterior doors with long screws into the framing. Use the door bar at night or when sheltering. Keep blackout curtains for times you don't want to show light.",
  },
  "h-rad": {
    why: "Radiation can't be seen, smelled or felt, so without a meter you can only guess when it's safe to leave shelter. Leaving too early is the main cause of avoidable exposure after fallout. A meter shows actual levels at your door. It's a niche item that matters only if a nuclear incident is a real concern for you.",
    use: "Learn how to read it and test it as the manual says. In a fallout event, follow official instructions first and use the meter to confirm. Stay sheltered at least 24 hours unless officials say otherwise. Store it with spare batteries in the Faraday tin.",
  },
  "h-sew": {
    why: "In a long emergency you can't easily replace clothes, and torn or wet clothing makes people cold and causes skin infections. A small sewing kit fixes clothes, tarps and bags. Hand laundry with a bucket and a plunger-style washer keeps clothes clean when the machine is out. A wringer speeds drying from a day to a few hours.",
    use: "Patch tears and replace buttons as soon as they happen. To wash, fill a bucket with water and a little powder detergent, plunge the clothes for a few minutes, rinse, and wring them out. Hang them on a line indoors or in the sun. Prioritize socks, underwear and the toddler's clothes.",
  },
  "h-seeds": {
    why: "If a crisis lasts months, stored food eventually runs out. Open-pollinated (heirloom) seeds grow plants whose seeds you can save and replant every year, unlike hybrids. A small garden adds fresh vegetables and vitamin C to a stored-food diet. Seeds keep several years stored cool and dry.",
    use: "Store them in a sealed jar in a cool, dark place. Grow a small garden now to learn what works in your soil and climate. In a long event, start with fast, easy crops (beans, squash, greens, tomatoes). Save seeds from the best plants each year.",
  },
  "h-share": {
    why: "In long disruptions, neighbors help each other, and having a little extra lets you help without cutting into your family's needs. Everyday goods like lighters, coffee, sugar, batteries, soap and diapers become very valuable in shortages. They also work as barter. You'll use them yourself if nothing happens.",
    use: "Buy a few extras of these each month and store them with the rotation stock. Share with neighbors who are in need, or trade for things you lack. Keep them separate from your family's core supply. Rotate them into use.",
  },

  /* ───────── VEHICLES ───────── */
  "v-kit": {
    why: (c) => "Many emergencies start or end in a car: stuck in traffic, on an icy road, or evacuating. Cars cool to outside temperature within an hour without the engine, and heat up to dangerous levels in the sun. A kit turns hours of waiting into an inconvenience instead of a crisis. The child and the pregnant member are the most vulnerable in a stranded car." + (c.hz.cold ? " Winter storms regularly strand drivers for many hours." : ""),
    use: (c) => "Keep it in the trunk year-round and refresh it each season. If stranded, stay with the car, put on the hazard lights and stay visible." + (c.hz.cold ? " In cold, run the engine about 10 minutes an hour with the tailpipe cleared of snow and a window cracked, and bundle up with blankets in between." : "") + " Sip water and eat small snacks regularly. Call for help with the power bank keeping the phone charged.",
  },
  "v-jump": {
    why: "Cold, heat and short trips drain car batteries, and in an emergency there may be no other car to jump from. A lithium jump starter restarts the car by itself and also charges phones. It removes the need to wait for help in a remote spot. It's small enough for the glovebox.",
    use: "Charge it every few months and after use. Clamp red to the battery's positive terminal and black to bare metal on the engine, then switch it on and start the car. Disconnect in reverse order. Keep it inside the car, not in extreme heat.",
  },
  "v-seat": {
    why: "Evacuations happen fast and often at night, and installing a car seat in a rush is easy to get wrong. A loose or missing seat is the leading risk to a child in a crash, and crash risk rises in evacuation traffic. Shelters and hospitals may require one to leave with the child. Having it already installed saves minutes.",
    use: "Install the seat correctly in the car you'd evacuate in and check it (many fire stations do free checks). Keep the harness adjusted as the child grows. Don't put the child in it wearing a bulky coat; put a blanket over the straps instead.",
  },
  "v-repair": {
    why: "Flat tires from nails and debris are the most common breakdown after storms. A plug or patch kit fixes most of them without a tow. A quart of oil and some coolant prevent engine damage on a long evacuation. Some modern cars may not restart after an EMP or might be stuck in gridlock, so sneakers and a small pack let you walk home.",
    use: "Learn to use the plug kit on an old tire. Check oil and coolant monthly and top up from the stock in the trunk. If the car is stuck far from home, take the walking pack, leave a note with your route on the dashboard, and walk on known roads. Replace fluids every few years.",
  },

  /* ───────── PETS ───────── */
  "pt-food": {
    why: "Pets need food and water too, and shortages hit pet food as well. Many people refuse to evacuate because they won't leave animals behind, so preparing for them helps you make safe choices. Pet food has a shelf life, so it's rotated. Water for pets is already included in the stored-water total.",
    use: "Store food in a sealed metal or plastic container, oldest bag in front. Feed normal portions in an emergency. Pack 3 days of food in the pet's go kit. Check the manufacture date when buying in bulk.",
  },
  "pt-kit": {
    why: "Shelters and hotels often require proof of vaccinations and a carrier, and many won't accept pets at all. A pet that runs off in an evacuation is found faster with a microchip and photo. Medications can't wait. A ready kit lets you leave with the pet in minutes.",
    use: "Pack leash, collar with ID, carrier, bowls, waste bags, 3 days of food and water, medicines, vaccination records, microchip number and a recent photo. Keep it with the family go bags. Find pet-friendly shelters or hotels along your evacuation routes now. Bring the pet inside at the first sign of trouble.",
  },

  /* ───────── SKILLS & ACTIONS ───────── */
  "a-shutoffs": {
    why: "In a gas leak, burst pipe or flood, the first minutes count, and searching for a valve in the dark wastes them. Many people have never touched their shutoffs and find them stuck. Knowing which direction closes each one avoids mistakes. Every adult should be able to do it.",
    use: "This week, find the gas meter valve, the indoor water main, the street curb stop and the electrical panel's main breaker. Test that the water valves turn (don't turn off the gas). Tag each one and tape the right tool beside it. Show the other adult.",
  },
  "a-stb": {
    why: "Severe bleeding kills in minutes, faster than help arrives, and practice is what makes people actually able to help. In studies, wound packing done for the first time worked in under 40% of attempts, but after three practices it worked over 80% of the time. The class teaches tourniquets, wound packing and pressure in about an hour. It's usually free.",
    use: "Find a class at stopthebleed.org or through your local hospital or fire department, and both adults should attend. Afterward, practice tourniquet application on each other a few times a year. Keep the tourniquets where you trained to reach them.",
  },
  "a-cpr": {
    why: "Toddlers choke on food and small objects, and drowning and injuries spike in disasters. Infant and child CPR differ from adult CPR. When emergency services are slow, a parent's skill is the child's best chance. A class takes a few hours.",
    use: "Take a Red Cross or American Heart Association infant/child CPR and choking class. Review the steps every few months with the printed card in your binder. Know the choking signs: a child who can't cough, cry or breathe needs help right away.",
  },
  "a-rotate": {
    why: "Supplies quietly expire: water containers, bleach, batteries, medicines, power-bank charge, matches, and children's clothing sizes. A stockpile no one checks becomes useless right when needed. A simple calendar keeps everything working. It takes about an hour twice a year.",
    use: "Pick two dates (for example when clocks change) and on each: rotate water, check food and medicine dates, recharge power banks, test batteries, flashlights, radios, CO detectors and matches, and update the child's clothes. Replace what's used or expired.",
  },
  "a-fifo": {
    why: "Food that's never eaten eventually spoils. First-in-first-out means your pantry is always fresh and nothing is wasted. Eating from your stockpile regularly also means you know the food and your family will eat it. It's how the LDS food-storage program keeps 3-month supplies working.",
    use: "Put new purchases at the back of the shelf and take from the front. Write purchase dates on cans with a marker. Cook from the stockpile at least weekly. Replace what you use on your next shopping trip.",
  },
  "a-audit": {
    why: "Most families think they have months of food but actually have 7–14 days of calories. Counting calories gives the real number. It shows exactly where the gaps are. The playlist recommends 1,800 kcal per person per day as the baseline.",
    use: "Add up the calories on the labels of everything stored (or estimate by item), divide by the number of people, then divide by 1,800. That's how many days you're covered. Compare to your plan length in this checklist and buy to close the gap. Repeat yearly.",
  },
  "a-triggers": {
    why: (c) => "Staying home is safest in most emergencies, and evacuating too early or for the wrong reason causes deaths, as in the Hurricane Rita evacuation. But in some situations, waiting is deadly, and under stress people wait for certainty that comes too late. Deciding the leave triggers in advance removes the debate in the moment." + (c.preg.length || c.kids ? " With a pregnant member or a small child, a winter or summer power outage becomes dangerous within about 12 hours." : ""),
    use: (c) => "Agree that you leave right away for: a mandatory evacuation order, fire within half a mile, visible structural damage, water that's failed with no restoration in sight, unrest within 2 miles, or a medical emergency when 911 doesn't answer." + (c.preg.length || c.kids ? " Also leave within 12 hours if the power is out and it's below 20°F or above 100°F outside." : "") + " Write them on the family plan. When one happens, go without waiting for more information.",
  },
  "a-car": {
    why: "Gas pumps need electricity, so in an outage you can only use what's in your tank. Families running out of fuel was a top cause of evacuation failures. A car with a dead battery may not unlock from inside, which is dangerous in a flood or fire. Both are habits that cost nothing.",
    use: "Refill whenever the tank reaches half. Look up your car's manual door release in the owner's manual and show everyone where it is. Keep a window punch and seatbelt cutter within the driver's reach. Fill up 2–3 days before any forecast storm.",
  },
  "a-gen": {
    why: "Carbon monoxide poisoning from generators, grills and heaters kills people in nearly every major outage, usually people who had prepared but used the equipment wrong. The symptoms feel like tiredness, so people don't react. A few simple rules prevent almost all of it. Posting them means anyone in the house follows them.",
    use: "Write and post: generators at least 20 ft from doors and windows and never in a garage; no grills, camp stoves or charcoal indoors; never run the car in a garage; only indoor-rated heaters with a cracked window; CO detectors on and tested. Review them before every storm season.",
  },
  "a-quake": {
    why: "In an earthquake, most injuries come from falling objects and flying glass, not collapse. Standing in a doorway is outdated advice. Dropping immediately, getting under something sturdy and holding on protects you best. Practicing makes it automatic, especially for children.",
    use: "Practice twice a year: on 'earthquake', everyone drops, gets under a table or against an interior wall, covers their head and neck, and holds on. Stay down 60 seconds after shaking stops. Then put on shoes, check for gas smell, and go to the rally point if the house is damaged.",
  },
  "a-neighbors": {
    why: "In real disasters, neighbors help each other far more than strangers threaten each other, and mutual aid forms within the first day or two. Knowing who has medical training, a generator or tools makes your street much stronger. Older or disabled neighbors may need a check-in. These relationships can't be built in a crisis.",
    use: "Introduce yourself to the houses on both sides and across the street, and exchange phone numbers. Note who has which skills or equipment and who might need help. Agree on a simple signal, such as a sign in the window, for 'we're OK' or 'we need help'. Check on vulnerable neighbors after any storm.",
  },
  "a-opsec": {
    why: "In a long shortage, people who know you have supplies may come asking or worse. Posting about your stockpile or loading supplies in view makes you a target. Buying gradually also avoids notice. Constant news and social media fuel panic and bad decisions, so information should come from one or two official sources.",
    use: "Store supplies out of sight, unload purchases in the garage, and don't post about them. In a long outage, keep lights and generator noise low at night. Check official news once or twice a day. Share preparedness tips with neighbors, not your inventory.",
  },
  "a-cookout": {
    why: "Gaps in a plan show up only when you try it. A practice day without power reveals missing items, like no can opener, the wrong batteries, or a stove you can't light. It also gets children used to the routine so a real outage is less frightening. It's the cheapest way to test everything at once.",
    use: "Pick a weekend day, switch off the main breaker (or just don't use electricity), and cook, light and wash using only your supplies. Have the child help with the flashlight and glow sticks. Write down everything that went wrong and fix it. Repeat once a year.",
  },
  "a-go": {
    why: "Under sudden stress, the thinking part of the brain shuts down, and people freeze, wait for confirmation, or grab the wrong things. A one-sentence GO order, decided calmly in advance, turns a threat into action without debate. Pre-assigned roles stop family members colliding at the door. Official confirmation often arrives after the safe window has closed.",
    use: "Write the trigger (for example: any 2 of explosions, sustained gunfire, sirens, an emergency phone alert, or the building shaking) and the roles: one adult takes the bags to the car, the other takes the child, and one 30-second sweep for medicine, documents and pet. Post it on the fridge. When the trigger happens, act on it immediately.",
  },
  "a-fill": {
    why: "The first hours after warning signs are when water still flows, gas pumps and ATMs still work, and pharmacies still fill prescriptions. Within hours those disappear. A short checklist means you use that window instead of watching the news. It's what the playlist repeats in nearly every scenario.",
    use: "Tape the list inside a cupboard: fill the tub and every container with water, fill the car's tank, withdraw cash, refill prescriptions, charge every phone, power bank and battery. Do it at the first sign of trouble (storm warning, cyber outage, unrest, or a sudden blackout). Then shelter and listen to the radio.",
  },
  "a-codes": {
    why: "In chaos, children can't follow long instructions, but a single drilled word works almost instantly. A 'come to me now' word and a 'freeze, get low, be quiet' word give you control in crowds and danger. Kids with a small job are less frightened and easier to move. Children under 5 should be carried rather than run.",
    use: "Choose two unusual words and practice them as a game once a month. Give the child a job (carry their small bag, hold your hand). In an emergency, speak low and calm, use the words, and carry the toddler. Teach them the rally point and to stay put if lost.",
  },
  "a-storage": {
    why: "Heat is the biggest shortener of shelf life: every 18°F hotter roughly halves it, and garages often top 90°F in summer. Damaged cans can carry botulism, which can't be seen or smelled. Rancid oils and green potatoes are mildly toxic. Inspection prevents poisoning when you're already stressed and without medical help.",
    use: "Keep food in the coolest part of the house, under 75°F, off the floor and out of sunlight. Check stored cans twice a year and throw out any with a dented seam, bulging, rust or leaking without tasting. Discard green or sprouted potatoes and anything that smells rancid. Rotate everything.",
  },
  "a-nav": {
    why: "When phones and GPS fail, many people can't find their way even to familiar places. Knowing the route by memory and having a map and compass gets you home or to your destination. Practicing once in calm conditions makes it stick. It's also a fun outdoor activity with a child.",
    use: "Drive to your evacuation destination and the hospital once without GPS, noting turns and landmarks. Learn to read the compass with the paper map. Try the shadow-stick method (a stick in the ground, mark the shadow tip twice 15 minutes apart: the line runs west to east). Keep the map and compass in the car.",
  },
  "a-breath": {
    why: "Panic floods the body with stress hormones, causing tunnel vision, forgetfulness and freezing at the worst moment. Box breathing calms the nervous system and restores clear thinking within about 90 seconds. Special forces, surgeons and crisis negotiators use it. It only works under stress if you've practiced it.",
    use: "Breathe in through the nose for 4 counts, hold 4, breathe out 4, hold 4, and repeat 4 times. Practice it daily for a week so it's automatic. Use it the moment an emergency starts, before making decisions. Teach a simple version to the child (smell the flower, blow out the candle).",
  },
  "a-nuke": {
    why: "After a nuclear event, most people outside the blast zone survive by getting inside and staying there. Fallout radiation drops about 90% in the first 7 hours and 99% in 2 days, so the first 24 hours sheltered matter most. Removing outer clothes takes off most contamination. Going outside too early is the biggest mistake.",
    use: "At a flash, drop and cover your head, away from windows. Then get inside a solid building, to the center or basement. Close windows, turn off HVAC and fans, and seal the room. If you were outside, remove and bag outer clothing, then shower with soap and shampoo but no conditioner. Stay inside at least 24 hours and follow radio instructions.",
  },
  "a-fire": {
    why: "Most people build fires that smoke a lot and burn wood quickly. The top-down method burns cleaner and longer, so you need far less wood and attention. Smoke means wasted fuel. Clean-burning fires still make carbon monoxide, so they're for outdoors only.",
    use: "Lay the largest dry logs at the bottom, smaller ones on top, then kindling and tinder at the very top, and light it from the top. Let it burn down on its own. Use only dry wood. Cook over the coals, and keep it outdoors and away from the toddler.",
  },
});
