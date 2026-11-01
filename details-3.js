/* Detailed reasoning (why) and how/when-to-use (use) — light & power, heat & cold, go bags, documents. */

Object.assign(DETAILS, {
  /* ───────── LIGHT, POWER, COMMUNICATION ───────── */
  "l-flash": {
    why: "Most injuries in the first minutes of an outage come from falls and fumbling in the dark. Candles are a leading cause of house fires during outages, so flashlights are the main light. One per person means nobody has to share in an emergency. The spare covers a lost or broken one.",
    use: "Keep one beside every bed and one in each go bag and car, with batteries stored separately so they don't corrode the contacts. Use them for moving around, checking the breaker or gas, and signaling. Switch to the lowest setting to save batteries. Check them every 6 months.",
  },
  "l-head": {
    why: "A headlamp puts light where you're looking and leaves both hands free to carry a child, cook or fix something. The playlist names it the first thing to grab in a blackout. Red mode keeps night vision and doesn't wake sleeping kids. Keeping it in a drawer you use daily means you can find it in the dark.",
    use: "Put it on the moment the power goes out. Use white light for tasks and red for moving around at night. Keep spare batteries with it. Charge or swap batteries after each long use.",
  },
  "l-batt": {
    why: "Flashlights, headlamps, radios and baby monitors are useless without batteries, and batteries sell out in the first hours of an outage. Stored outside devices they don't leak and ruin them. Alkaline batteries weaken badly in cold, while lithium AAs work down to about -40°F. Labeling by size and date makes rotation easy.",
    use: "Keep them in a labeled bin sorted by size, in a cool, dry place. Swap them into devices when needed and put the old ones in a 'used' bag. In cold weather, keep spare batteries in an inside pocket. Replace alkalines every few years.",
  },
  "l-radio": {
    why: "When cell towers and internet fail, the NOAA weather radio still broadcasts official warnings, evacuation orders and restoration updates. It was the only reliable information source in several major blackouts. Good information prevents bad decisions like evacuating into danger or staying too long. Hand-crank charging of phones is weak, so it's a radio first.",
    use: "Keep it with fresh batteries stored separately. Learn your local NOAA station frequency now and write it on the frequency card. Turn it on at the start of any emergency and check it at set times (for example every hour) to save batteries. Set its alert feature if it has one.",
  },
  "l-bank": {
    why: "Phones are flashlight, map, contact list and emergency line all at once, and they die fast when searching for a weak signal. A charged power bank adds several full phone charges. Power banks slowly lose charge in storage, so they have to be topped up. Each adult needs their own so the family can split up if needed.",
    use: "Charge all of them every 3 months and 48 hours before any forecast storm. During an outage, put phones in low-power or airplane mode and check messages at set times. Charge the phone from the bank rather than leaving it plugged in constantly. Keep the right cables with each one.",
  },
  "l-frs": {
    why: "Cell towers have only 4–8 hours of battery backup, and networks jam within minutes of a disaster. Two-way radios let family members talk when separated, such as between house and car or during an evacuation. They need no network and no license for FRS. A set check-in time saves batteries and makes sure people listen.",
    use: "Agree on a channel and check-in times (for example 8 am and 8 pm). Keep messages short. Practice with them on a walk so everyone knows the buttons. Keep spare batteries, and in a crisis, try texting first if the cell network is partly working.",
  },
  "l-solar": {
    why: "Batteries and fuel run out, but sunlight keeps coming. A folding panel recharges phones, power banks and lights for free. Rooftop grid-tied solar shuts off during outages by law unless you have a special battery system. Portable solar is the third layer after batteries and generator.",
    use: "Set it in direct sun, angled toward the sun, and move it as the sun moves. Charge power banks during the day and use them at night. Expect much less output on cloudy winter days. Store it dry and folded.",
  },
  "l-station": {
    why: "A portable power station runs lights, chargers, a small fridge or medical devices quietly and indoors, with no fumes. Charged from a generator a couple of hours a day or from solar, it covers the hours in between. It can keep children's milk or insulin cold. It's much safer than running a generator all night.",
    use: "Keep it charged to about 80% and top it up every few months. In an outage, prioritize medical devices, fridge cycles, lights and phones. Recharge it from the generator or solar during the day. Never run heaters or cooking appliances from it; they drain it fast.",
  },
  "l-gen": {
    why: "A generator keeps the fridge, freezer, sump pump and chargers going in a long outage. Dual-fuel models run on propane, which stores indefinitely, unlike gasoline that degrades in about 30 days without stabilizer. Generator carbon monoxide kills people every outage, nearly always from placement too close to the house. Heavy 12-gauge cords prevent fires.",
    use: "Run it outdoors at least 20 ft from doors, windows and vents, with the exhaust pointing away from the house, never in a garage even with the door open. Run it 2–3 hours, twice a day, to recharge the power station and cool the fridge. Turn it off and let it cool before refueling. Have a battery CO detector in the house whenever it runs.",
  },
  "l-co": {
    why: "Carbon monoxide has no smell or color, and its first symptoms (headache, drowsiness) feel like normal exhaustion in a crisis. People lie down and don't wake up. It spikes every outage from generators, grills, heaters and cars. Hardwired detectors without battery backup stop working when the power goes.",
    use: "Install one on each floor and one near the bedrooms, at the height the manual says. Test them monthly and replace batteries yearly. If one alarms, get everyone outside to fresh air immediately and call 911. Never use fuel-burning devices indoors without one working.",
  },
  "l-faraday": {
    why: "A strong solar storm or EMP could destroy unprotected electronics, especially those plugged in. A closed metal container with a tight lid shields what's inside. It's a cheap hedge: a spare radio, small power bank and old phone stored in it would still work. Foil wraps and microwaves don't protect reliably.",
    use: "Put the spare devices, unplugged with antennas retracted, inside a metal can (ammo can, paint tin, or a metal trash can sealed with conductive tape), wrapped in cloth so they don't touch the metal. Leave them there. Take them out only after such an event. Check and charge them once a year.",
  },
  "l-night": {
    why: "Falls in the dark are a top injury in outages, especially for older adults, whose eyes adjust 3–5 times more slowly. Young children panic in total darkness and may run. Battery motion lights turn on by themselves as someone moves, with no searching for a switch. They light the exit path when it's needed most.",
    use: "Mount them low on the wall along the path from the bedrooms to the main exit. Remove rugs and clutter from that path. Check the batteries every 6 months. Use them nightly during an outage.",
  },
  "l-offline": {
    why: "Navigation apps can't load maps without data, and networks fail within hours. Downloaded offline maps still work with GPS alone. A radio is useless if you don't know which frequency to tune. Writing them down takes minutes now and can't be done once the internet is gone.",
    use: "Download offline maps for your city plus 50 miles on every phone, and refresh them every few months. Write your NOAA weather station, local AM/FM emergency stations and county emergency frequencies on a card and laminate it. Keep a card in each go bag and by the radio. Use them the moment cell data fails.",
  },
  "l-ham": {
    why: "When local broadcasts and the internet go down for days, shortwave radio still picks up news from far away. Licensed ham radio lets you send messages and request help, which a receive-only radio can't. The basic Technician license is a 35-question test. Mesh radios like Meshtastic let neighbors text without any network or license.",
    use: "Get familiar with it before you need it: listen to stations and, if licensed, join a local net. In a long outage, listen at set times to save batteries. Keep it charged and stored in the Faraday tin when not in use. Write frequencies on the frequency card.",
  },

  /* ───────── HEAT & COLD ───────── */
  "t-bag": {
    why: (c) => "When the furnace is out in winter, the house falls toward the outside temperature within a day, and most Winter Storm Uri deaths were hypothermia at home. A blanket doesn't insulate from below the way a sleeping bag does. The big number on most bag labels is a 6-hour survival limit, not comfort, so buy by the comfort rating. Synthetic fill keeps about 85% of its warmth when damp, while down keeps about 15%." + (c.infants ? " Infants don't use sleeping bags." : ""),
    use: "Sleep in it on a pad, in the warm room, wearing dry base layers and a hat. Don't climb in sweaty: cool down first. Shake it out and air it during the day so moisture escapes. Store it loose (not compressed) in a large bag.",
  },
  "t-pad": {
    why: "The ground or a car seat pulls heat from you about 25 times faster than air does, and a sleeping bag flattened under your weight insulates almost nothing. An R4 pad under a 20°F bag outperforms a -20°F bag on a thin pad. Closed-cell foam can't pop or leak. One per vehicle protects anyone stuck in a car overnight.",
    use: "Put it under every sleeper, including on beds without power (place it on top of the mattress for extra warmth). In the car, lay it on the seat. Layer two pads or add blankets underneath in severe cold. Keep one rolled in each vehicle.",
  },
  "t-base": {
    why: "Clothing is your first heater, and the right layers keep you warm with no fuel. A synthetic or wool base layer wicks sweat; cotton holds moisture and makes you colder. Hats and gloves cut a lot of heat loss. Each person needs their own set.",
    use: "Wear the base layer at the first sign of the house cooling, before anyone feels cold. Add a warm middle layer and a windproof outer layer when moving outside. Change out of damp layers before sleeping. Keep one set in each go bag in winter.",
  },
  "t-room": {
    why: "Trying to heat a whole house without power fails; heating one small room works. An interior room with few windows and a low ceiling keeps body heat and any safe heater's warmth. Sealing drafts and blanketing windows cuts heat loss sharply. Indoors at 55°F the risk to children, pregnant women and older adults rises quickly.",
    use: "When the heat goes out in cold weather, pick the room, move everyone's bedding there, and seal it: plastic or blankets over windows, towels under doors, blankets on exterior walls. Keep everyone off the floor on pads or mattresses. Rig a low blanket tent over the sleeping area, with a small vent. Add a safe heat source only with a CO detector.",
  },
  "t-heater": {
    why: "A gas furnace needs electricity to run, so it fails in an outage even when gas still flows. An indoor-rated propane heater (such as a Mr. Heater Buddy type) has low-oxygen and tip-over shut-offs. It still produces carbon monoxide and burns oxygen, so ventilation and a CO detector are required. Insulating first means less fuel and less risk.",
    use: "Use it only in the warm room, with a window cracked about an inch, a working CO detector, and 3 ft of clearance from bedding and curtains. Run it to warm the room before sleep, then turn it off; don't sleep with it running unless the manual allows and the detector is on. Put a gate around it if there are small children. Store fuel cylinders outside.",
  },
  "t-warmers": {
    why: "Cold hands lose grip and dexterity fast, making simple tasks like first aid or using tools hard. Disposable warmers give 8+ hours of heat. Refillable catalytic warmers run 12–24 hours on lighter fluid and can be reused. They're a backup to proper clothing, not a heater.",
    use: "Activate them and put them in gloves, pockets, or the foot of a sleeping bag (wrapped, never directly on skin). Use them during outdoor tasks, in a stuck car, or at night. Keep them away from small children's skin and mouths. Don't use them in a closed space without air for catalytic types.",
  },
  "t-cool": {
    why: "Without air conditioning, heat becomes dangerous within hours, and pregnant women, small children and older adults are the most vulnerable. Evaporative cooling (spray, wet towels, fans) works with no grid power. Cooling the wrists and neck lowers body temperature quickly. Battery fans move air so sweat can evaporate.",
    use: "Close windows and blinds when outside air is hotter than inside, and open them at night. Mist skin and run fans across it, and put cool wet cloths on wrists and neck every 20 minutes. Move to the coolest room, often a basement or interior room. Seek help for confusion, fainting, or a hot dry body.",
  },
  "t-reflect": {
    why: "Sun through windows heats a room fast, and curtains alone don't stop it. A reflective sheet on the glass bounces the heat back out. South- and west-facing windows take the most afternoon sun. It costs almost nothing and needs no power.",
    use: "Tape space blankets or foil to the glass, shiny side out, on south and west windows first. Put them up in the morning before the heat. Remove or open at night to let heat out. Reuse them each hot day.",
  },
  "t-mylar": {
    why: "Mylar blankets reflect body heat, weigh almost nothing and fit in any pocket or glovebox. They're a backup for shock, waiting outside, or a car breakdown. They tear easily and do little in wind or wet clothes, so they don't replace a sleeping bag or wool blanket. Shiny surfaces can also signal rescuers.",
    use: "Wrap it around the person (under an outer layer if possible) after removing wet clothing. Use it as a reflective layer under a sleeping bag or over windows. Unfold carefully since it tears at the creases. Keep several in each car and one in each go bag.",
  },
  "t-thermo": {
    why: "Smart thermostats and digital displays die with the power, and people underestimate how cold a room is getting. A simple indoor thermometer tells you exactly when the house reaches 55°F, when children, pregnant women and older adults are at risk. That number drives the decision to move to the warm room or a warming shelter. It costs a few dollars.",
    use: "Put one in the main living area and one in the warm room. In a winter outage, check it every few hours. At 55°F, move everyone to the warm room. If the warm room drops below about 55°F and can't be raised, go to a warming shelter or a relative's.",
  },
  "t-wool": {
    why: "Wool stays warm when damp and resists flame, which matters around stoves and heaters. A large share of body heat is lost through an uncovered head. A wool blanket lasts decades and doubles as a stretcher or extra layer. The playlist recommends wool hats in go bags year-round, since nights can be cold even in summer.",
    use: "Wear the hat at night and whenever the house is cold. Layer the wool blanket over sleeping bags or around shoulders while sitting. Keep blankets in the car in winter. Air them out regularly and store them with cedar to deter moths.",
  },
  "t-vbl": {
    why: "Each night your body releases up to a liter of moisture, which soaks into a sleeping bag and makes it colder every night. A vapor-barrier liner (even a contractor bag) stops sweat from reaching the insulation. Soldiers used this method for decades. It's cheap and keeps a bag performing for many nights.",
    use: "Use it inside the sleeping bag only in sustained cold, wearing a thin base layer. Turn it inside out and let it dry each morning. Don't use it for infants. Stop using it if you feel clammy and overheated.",
  },
  "t-socks": {
    why: "Cold, damp feet are how cold injuries start, and once feet hurt you can't walk or work. Sweat soaks socks; a thin liner moves moisture away from skin, and wool insulates even when damp. Tight boots with too many socks squeeze out the warm air and make feet colder. Extra pairs let you change before feet get cold.",
    use: "Wear a liner sock under a wool sock, with boots that leave room for your toes to wiggle. Change to dry socks every evening and dry the damp pair overnight near (not on) a heat source or inside your jacket. Check feet daily for numbness or pale skin. Pack two spare pairs per person in go bags.",
  },
  "t-hotwater": {
    why: "Hot water bottles give safe, silent heat for hours with no fumes and no fire risk. Heat stored in water releases slowly through the night. They warm the feet and core, where it matters most. They're reusable and cheap.",
    use: "Fill with hot (not boiling) water from the stove, cap tightly, and wrap in a towel. Put it at the feet or against the core inside the sleeping bag. Eat a solid meal before sleep and add layers before getting cold. For small children, check the wrapped bottle isn't too hot and keep it away from their face.",
  },

  /* ───────── GO BAGS & CLOTHING ───────── */
  "b-bag": {
    why: "Staying home is the default, but fire, flood, structural damage or an evacuation order can give you only minutes. A packed bag by the door means you leave in seconds instead of losing 4–7 minutes packing. It's built for moving: 3 days of light food, water and treatment, shelter and medical basics, not camping gear. Heavy bags get abandoned, so the weight stays well under a third of body weight, and much less in pregnancy.",
    use: "Keep each bag packed at the door or in the car. Walk around the block with it loaded once to check fit and weight. Grab it when a leave trigger happens. Check and refresh the contents every 6 months (food, water, clothes size, medicines).",
  },
  "b-shoes": {
    why: "Many evacuations happen at night, and people leave barefoot or in slippers. Broken glass, nails and flood debris then cause serious foot injuries. Sturdy closed-toe shoes protect the feet that you need to walk out. Shoes by the bed also matter in an earthquake.",
    use: "Keep a pair with the go bag and another pair plus a flashlight beside each bed. Put them on before walking anywhere after an earthquake, storm or explosion. Choose comfortable, broken-in shoes. Check children's sizes twice a year.",
  },
  "b-clothes": {
    why: "Getting wet is the fastest way to get cold, and evacuations often mean rain, floodwater or long waits. A change of clothes that fits lets you get dry and warm. Old clothes that no longer fit are useless. Each person needs their own set.",
    use: "Pack one weather-appropriate set per person in a waterproof bag inside the go bag. Change as soon as clothes are wet. Update the set every season. Avoid cotton for the base layer in cold weather.",
  },
  "b-rain": {
    why: "Staying dry protects body heat, and being wet in wind at 50°F can bring on hypothermia. Ponchos are cheap and cover both you and the pack. Military-style ponchos also become a shelter roof or ground sheet. Spares cover tears and guests.",
    use: "Put it on at the first rain during an evacuation or outdoor task. Use it as a ground sheet when sitting on wet ground. Dry it before repacking. Keep one in each bag and car.",
  },
  "b-whistle": {
    why: "Shouting carries only about 200 yards and wears you out, while a pealess whistle carries up to a mile with little effort. Rescuers listen for whistle blasts. Pealess whistles don't jam or freeze. A whistle on the child's bag helps you find them.",
    use: "Blow three short blasts to signal for help, and repeat. Clip one to each bag, including the child's, and teach the child when to use it (only when lost or hurt). Keep one on your keys. Test it once.",
  },
  "b-tarp": {
    why: "A tarp and cord make a shelter, rain cover, ground sheet or rain catcher in minutes. A tarp is much lighter than a tent and works anywhere. It also covers a broken window or damaged roof. Cord ties down loads and repairs gear.",
    use: "String the cord between two trees or posts and drape the tarp over for a quick rain shelter, low and angled away from wind. Lay it under bedding on damp ground. Use it to cover roof damage or broken windows temporarily. Dry before storing.",
  },
  "b-food": {
    why: "On the move you burn far more than at home: a stressed adult walking with a pack uses 2,500–3,500 kcal a day. Most commercial 72-hour kits pack only 1,200–1,800, roughly half. Food that needs no cooking and no water is essential when evacuating. Kids need foods they already like or they won't eat.",
    use: "Pack 3 days of bars, nuts, peanut butter packets, dried fruit and crackers in each bag, split between adults. Eat small amounts often while traveling. Swap the food every 6 months into normal snacking. Keep the child's portion in an adult's bag if the child's bag is too small.",
  },
  "b-extras": {
    why: "A few small extras solve common problems on the move. A ferro rod lights fires after years of storage and when wet, backing up the lighter. Duct tape wrapped on the bottle fixes gear, blisters and tears without extra bulk. A single-wall steel bottle can sit in a fire to boil water, and a route card means you don't depend on the phone.",
    use: "Practice striking the ferro rod onto cotton balls with petroleum jelly. Wrap about 6 ft of duct tape around the water bottle. Boil water in the steel bottle with the cap off. Write rally points, routes and phone numbers on the card and laminate it.",
  },
  "b-readers": {
    why: "After about age 40, many people can't read small print without reading glasses. In an evacuation, prescription glasses are often lost or broken, and then you can't read medicine labels or maps. Cheap readers in a few strengths are a good backup. Every bag and car should have a pair.",
    use: "Test a few strengths in the store and buy the one that works plus one stronger. Keep them in a hard case in each bag and the glovebox. Use them for medicine labels, maps and first aid instructions.",
  },
  "b-bandana": {
    why: "A cotton bandana is one of the most versatile cheap items. It pre-filters debris from water, covers the face from dust, makes a sling or bandage, and cools the neck when wet. It's washable and reusable. Bright ones double as a signal.",
    use: "Strain murky water through it before filtering or treating. Wet it and tie it on the neck in heat. Fold into a triangle for an arm sling. Keep two per person in the go bags.",
  },

  /* ───────── DOCUMENTS, MONEY, PLAN ───────── */
  "d-docs": {
    why: "After a disaster, proving who you are, what you own and what insurance you have is required for aid, claims and medical care. Originals get destroyed in floods and fires, and phones die. FEMA reports document loss as a major cause of delayed assistance. A second set with a trusted person survives even if you lose the house.",
    use: "Photocopy IDs, birth certificates, immunization records, insurance, deed or lease, account numbers, prescriptions and pet records. Seal one set in a waterproof pouch in the go bag and give one to a trusted person off-site. Also save photos in a secure cloud account. Update yearly.",
  },
  "d-cash": {
    why: "Card readers, ATMs and phone payments all stop working without power or internet, and banks can cap withdrawals in a crisis. Cash keeps working. Stores running on generators often can't make change for big bills. The playlist recommends at least a week of essential spending, ideally two.",
    use: "Keep small bills split between a hidden spot at home, the car and an off-site location. Use it only for essentials (fuel, food, medicine) during an outage. Withdraw more 3–4 days before a forecast storm, before the lines. Rotate older bills into normal spending and replace.",
  },
  "d-contacts": {
    why: "Phones die or get lost, and few people know important numbers by heart. Local phone lines jam in a disaster, but calls to someone out of state often get through, and that person can pass messages. A printed card works with any borrowed phone. Every family member needs one.",
    use: "List family, the safe adult, doctors, OB, pediatrician, pharmacy, school, insurer, utilities and the out-of-state contact. Laminate one card per person and keep it in wallets, bags and the car. Memorize the 5 most important numbers. In an emergency, text the out-of-state contact first with where you are.",
  },
  "d-med": {
    why: "If someone is hurt or confused, rescuers need to know their medicines, allergies and conditions, and family members forget details under stress. Blood type and baseline blood pressure speed up care. Pregnancy details change treatment. The card works when phones and records systems don't.",
    use: "Fill one card per person: medicines and doses, allergies, conditions, blood type, baseline blood pressure, doctor's name. Laminate it and keep it in the wallet and the go bag. Hand it to medics. Update it when medicines change.",
  },
  "d-plan": {
    why: "Supplies don't help if only one person knows where they are and what to do, and that person might be hurt or away. Families with a shared written plan decide faster and reunite sooner. Roles prevent everyone grabbing the same thing. A plan also tells you when to leave instead of debating it in the moment.",
    use: "Write it on one page: rally point near home (at least 50 m away), a backup outside the neighborhood, a destination address that expects you, the out-of-state contact, who takes the bag, who takes the child, and the leave triggers. Post it on the fridge and in each bag. Walk through it with everyone twice a year.",
  },
  "d-maps": {
    why: "GPS needs a charged phone and often a signal, and both fail in disasters. The obvious evacuation road is usually the first to jam or flood. A paper map with two routes marked works every time. A topo map also shows water sources and flood plains.",
    use: "Mark home, hospitals, shelters, the rally points and two routes out on each map. Keep one in each car and one in the go bag. Drive the backup route once. Use it as soon as the phone can't navigate.",
  },
  "d-fund": {
    why: "The most likely emergencies are job loss and medical bills, not disasters. Three months of expenses in savings keeps a family housed and fed through that. A second account at a different institution means one bank's outage or freeze doesn't cut you off. Lenders and utilities have hardship programs, but only if you call before missing a payment.",
    use: "Build it gradually with automatic transfers into a separate account at a different bank or credit union. Use it only for real emergencies. If income stops, call the lender, landlord and utilities right away to ask about forbearance or hardship plans, and pause non-essential autopays. Rebuild after use.",
  },
  "d-ins": {
    why: "Standard homeowners policies don't cover flood or earthquake, and many families discover that after the damage. Sewer backup and power-surge damage need cheap add-on endorsements. Mold from slow leaks and pest damage usually aren't covered. A one-time review tells you where you stand.",
    use: "Read your policy's exclusions or call your agent with this list: flood (separate NFIP policy, usually a 30-day wait), earthquake, sewer/sump backup, equipment breakdown and home-business coverage. Add what fits your hazards. Fix leaks promptly. Review every year at renewal.",
  },
  "d-inv": {
    why: "Insurance claims go faster and pay more when you can prove what you owned and the condition of the house. After a disaster, memory is unreliable. A video walkthrough takes about 20 minutes. Stored in the cloud, it survives the house.",
    use: "Walk through every room filming furniture, electronics, closets and the outside of the house, narrating as you go. Photograph serial numbers and receipts for big items. Upload to cloud storage or email it to yourself. Redo it yearly or after big purchases.",
  },
  "d-budget": {
    why: "Knowing exactly what your family needs for 30 days without income tells you how much cash and savings to keep. In bank failures and cyber attacks, online banking can be unavailable for days. Paper records of account, routing and policy numbers help you prove ownership and reach institutions. Families who had these written down made calmer decisions.",
    use: "List monthly essentials (food, rent or mortgage, utilities, medicine, fuel) and total it; that's your cash and savings target. Write all account, routing, card and policy numbers plus customer service numbers on one sheet. Store both in a fireproof box. Update once a year.",
  },
});
