/* Detailed reasoning (why) and how/when-to-use (use) — medical, pregnancy, children, sanitation. */

Object.assign(DETAILS, {
  /* ───────── MEDICAL ───────── */
  "m-fak": {
    why: "When hospitals are overwhelmed or roads are closed, small injuries have to be treated at home, and an untreated cut can become a serious infection within days. Retail kits are built for scrapes and run out fast. Debris cleanup causes the most cuts, sprains and blisters after a disaster. The Red Cross suggests about 100 bandages per person for any emergency longer than a week.",
    use: "Store it in a clearly labeled waterproof bin where every adult knows to find it. For any cut: stop the bleeding with pressure, rinse with clean water or saline, apply antibiotic ointment and cover with a non-stick pad. Change dressings daily and watch for spreading redness, warmth, pus or fever. Restock after each use and check dates yearly.",
  },
  "m-tq": {
    why: "Severe limb bleeding can kill in under 3 minutes, faster than any ambulance arrives, and that's the most preventable cause of trauma death. A genuine CAT Gen 7 or SOF-T-W is proven to hold at arterial pressure; knockoffs sold for the same price fail. Cars are where most serious trauma happens, so one goes in each vehicle. It's useless without knowing how to apply it.",
    use: "Use it for bleeding from an arm or leg that's spurting, pooling, or won't stop with firm pressure. Place it 2–3 inches above the wound (never on a joint), pull tight, twist the rod until bleeding stops completely, lock it, and write the time on the skin. Call 911 and don't loosen it. Practice on each other until it takes under 30 seconds, and mount the car one within the driver's reach.",
  },
  "m-otc": {
    why: (c) => "Pharmacies close or empty within the first days of a big disruption, and everyday problems like fever, pain, allergies and diarrhea don't stop. Diarrhea in particular can turn into dangerous dehydration. A 7-day supply of what your household normally uses removes the need to go out. " + (c.preg.length ? "Pregnancy limits the options: acetaminophen is usually the pain and fever choice, and ibuprofen, naproxen and aspirin are generally avoided unless the OB says otherwise." : "Buy the plain, single-ingredient versions so you know exactly what you're taking."),
    use: (c) => "Keep them in the first aid bin with a written list of each person's normal doses. Follow label doses exactly and write on the box when each dose was given. Use an antidiarrheal only for adults and pair it with oral rehydration salts. " + (c.preg.length ? "Check every medicine, including antacids and sleep aids, with the OB before anyone pregnant takes it." : "Check expiry dates when you rotate the kit."),
  },
  "m-asp": {
    why: "Chewing one regular 325 mg uncoated aspirin at the first sign of a heart attack is standard emergency advice for adults, and it can save heart muscle while help is on the way. Coated aspirin acts too slowly and combination pain relievers can be harmful. Aspirin can cause Reye's syndrome in children. In pregnancy it's only taken when the OB prescribes it.",
    use: "For an adult with chest pain or pressure, pain spreading to the arm, jaw or back, shortness of breath or cold sweat: call 911 first, then have them chew (not swallow whole) one tablet, unless they're allergic or a doctor has told them not to. Never give it to children. Keep it in the locked medicine bin. Replace it when it smells of vinegar.",
  },
  "m-rx": {
    why: "Pharmacies can't fill prescriptions without power, computers and payment systems, and in recent cyber attacks and hurricanes that lasted days to weeks. Missing blood pressure, seizure, thyroid or blood-thinning medicine for even 2–3 days can cause a crisis. Unopened insulin lasts about 28 days unrefrigerated. A 90-day buffer is the playlist's recommendation.",
    use: "Ask your doctor for 90-day prescriptions and a letter explaining the emergency supply, which helps get early refills approved. Use the oldest supply first so the reserve stays fresh. In a warning (hurricane, unrest), refill immediately before pharmacies are swamped. Keep a written list of each medicine, dose and pharmacy in the documents pouch.",
  },
  "m-ors": {
    why: "Dehydration from heat, diarrhea or vomiting is the most common non-injury emergency after a disaster, and it hits small children fastest. Plain water doesn't restore the salts the body loses. The WHO's oral rehydration formula has saved more lives in disasters than almost any other treatment. Children need the pediatric version, which has the right balance.",
    use: "Start ORS at the first sign of diarrhea, vomiting, heavy sweating, headache or dizziness. Mix each packet with exactly the amount of clean water on the label. For young children, give small sips every few minutes rather than big drinks. Seek medical help for a child with no wet diaper or urine for 8 hours, very sleepy behavior, or no tears.",
  },
  "m-masks": {
    why: "Wildfire smoke, earthquake dust, flood mold and rodent-dropping cleanup all put harmful particles in the air. Paper dust masks don't filter fine particles; N95s filter 95% of them if they seal well. They're also needed for hantavirus-safe cleanup. N95s aren't made to fit small children, so young children are protected by staying indoors with windows shut.",
    use: "Wear one when there's smoke, during demolition or cleanup of dust, mold or rodent mess, and when caring for someone sick. Fit it snugly over nose and chin, press the nose clip, and check for air leaks; beards break the seal. Replace it when breathing gets hard or it's damaged or dirty. For young children, keep them in a sealed room with a fan-filter if you have one.",
  },
  "m-glasses": {
    why: "Glasses are easily lost or broken in an evacuation, and without them you can't read medicine labels, maps or drive safely. Replacements may not be available for weeks. Contact lens wearers need solution and a case, and lenses can't be cleaned safely without them. A spare pair is cheap insurance.",
    use: "Keep an old or spare pair in a hard case in the go bag. Contact users should also pack glasses, since lenses become risky when hand-washing water is short. Update the spare when your prescription changes. Write the prescription on the medical card.",
  },
  "m-device": {
    why: "CPAP machines, oxygen concentrators, feeding pumps and powered wheelchairs stop the moment the power does, and some patients are in danger within hours. Hospitals and shelters may be overwhelmed. A battery or power station sized to the device keeps it running until help or power returns. Utilities often prioritize customers on their medical-needs list.",
    use: "Find the device's wattage and buy a battery or power station that runs it for at least 72 hours. Keep it charged and test it every few months. Register with your utility and local emergency services as medically dependent. Know your nearest hospital's backup and your plan to get there.",
  },
  "m-mobility": {
    why: "Older adults and people with mobility needs are hurt most in disasters: stairs, darkness and long walks become obstacles. They often feel thirst late and don't sense danger as quickly. Hearing aids need batteries to hear warnings. Most evacuation advice assumes everyone can walk fast and carry a bag.",
    use: "Plan a no-stairs route out and name who will help. Clip a light bag to the walker or wheelchair. In a crisis, offer water every 45 minutes rather than waiting for thirst. Practice a short 'leave now' phrase so there's no debate when it's time to go.",
  },

  /* ───────── PREGNANCY ───────── */
  "p-vit": {
    why: "Pregnancy needs more folate, iron, iodine and DHA, and an emergency diet of rice and beans won't supply them. Missing them affects the baby's development and the mother's energy. Supply chains for supplements can be interrupted for weeks. A 30-day buffer beyond the plan covers delays.",
    use: "Keep taking it daily as normal; it replaces the regular multivitamin. Store it cool, dry and locked away (iron is dangerous to toddlers). Check with the OB if the brand runs out and you need a substitute. Continue while breastfeeding if the OB advises.",
  },
  "p-records": {
    why: "If you have to deliver at an unfamiliar hospital or are seen by a stranger in an emergency, they won't have access to your chart. Due date, blood type and Rh status, and any complications change how care is given. Phones die and online portals may be down. A paper copy in the go bag solves this.",
    use: "Ask your OB's office for a printout after each visit and keep the latest in a waterproof pouch. Include the OB's and hospital's phone numbers and your insurance card. Hand it to whoever is treating you. Update it every few weeks.",
  },
  "p-routes": {
    why: "The hospital you planned on may be closed, flooded or cut off by traffic, and labor doesn't wait. Knowing a second hospital with a labor and delivery unit, and two routes to each, avoids losing time when it matters. GPS and phones may not work. The playlist stresses memorized routes that avoid main roads.",
    use: "Call both hospitals now to confirm they deliver babies. Mark both, with two routes each, on the paper map in the car. Drive the backup route once. In labor during a disaster, call 911 or the hospital before leaving if you can, and take the route that avoids flooding and highways.",
  },
  "p-signs": {
    why: "During a disaster you may have no quick way to ask the OB, and stress, heat and dehydration can trigger complications or early labor. Knowing which symptoms can't wait helps both adults act fast. Preeclampsia, bleeding and preterm labor all need care right away. A printed card is easier to use under stress than memory.",
    use: "Post the card in the go bag and on the fridge, and make sure the other adult reads it. Seek care immediately for bleeding, leaking fluid, regular contractions before 37 weeks, less movement from the baby, severe headache or vision changes, swelling of face or hands, chest pain or trouble breathing. Drink plenty and rest when you can to lower the risk. If you can't reach care, call 911.",
  },
  "p-bag": {
    why: "Disasters and evacuations don't wait for the due date, and packing during a crisis means things get forgotten. A packed hospital bag lets you leave in minutes. It also doubles as the pregnant member's go bag. The car seat must be ready because hospitals won't discharge a baby without one.",
    use: "Pack it by 32–34 weeks (now, if in the third trimester) and keep it by the door or in the car. Include ID, prenatal records, phone charger, comfortable clothes, maternity pads, nursing bras, snacks and a newborn outfit. Install the infant car seat in advance. Grab it along with the family go bags if you evacuate late in pregnancy.",
  },
  "p-birth": {
    why: "In a major disaster, help may truly not reach you in time for a birth, and a few clean supplies make an unplanned delivery much safer. Most births go fine on their own. The biggest risks to the baby are getting cold and not breathing well, and to the mother, heavy bleeding. This kit is only for when no help can arrive.",
    use: "Call 911 first and follow the dispatcher's instructions. Lay down clean towels on the plastic sheet, wash hands and wear gloves, and support (don't pull) the baby as it comes. Dry the baby, put them skin-to-skin on the mother and cover both with a blanket and hat. Don't cut the cord unless told to; get to a hospital as soon as possible.",
  },
  "p-comfort": {
    why: "Pregnant women overheat faster and dehydrate more easily, and both raise the risk of complications. Long waits in shelters or cars cause swelling and clots in the legs. Comfortable maternity clothes and a pillow make it easier to rest. Heat and cold both affect the baby too.",
    use: "In heat: keep her in the coolest room, use cooling towels and fans, and give water at all times. In cold: dress in layers, keep her in the warm room, and off cold floors. On long waits or drives, wear compression socks, walk around every hour and keep the feet up when resting.",
  },
  "p-food": {
    why: "Some foods carry higher risk during pregnancy, and an outage makes food safety harder. Listeria from deli meats and soft cheeses can grow in a warming fridge and harm the baby. High-mercury fish affect development. Herbal remedies and laxatives that some videos recommend haven't been shown safe in pregnancy.",
    use: "Go through the stockpile once and set aside anything risky for the pregnant member. In an outage, she shouldn't eat perishables that warmed above 40°F. Use low-mercury fish (salmon, sardines) and iodized salt. Ask the OB before using Epsom salt, herbs or any home remedy.",
  },

  /* ───────── CHILDREN ───────── */
  "c-diapers": {
    why: "Diapers are among the first things to disappear in a crisis, and you can't substitute them easily. Wet or dirty diapers left on too long cause rashes that can become infected when medical help is hard to reach. Toddlers outgrow sizes fast, so a long stash needs the next size up. Night pull-ups are needed even for a potty-trained 3-year-old under stress.",
    use: "Store them sealed in a dry bin, with a pack of the next size. Change promptly even when rationing, and let the skin air-dry when possible. Bag used diapers tightly and keep them outside. Rotate the stash into daily use and recheck the size every few months.",
  },
  "c-wipes": {
    why: "Wipes keep the diaper area clean when there's no water to wash, which prevents rashes and infection. They also clean hands and faces before meals. Diaper cream protects skin that can't be rinsed often. In a long outage they're your bath.",
    use: "Use for every change and for quick wash-ups of hands and face. Apply a thick layer of cream at each change during an outage. Keep packs sealed so they don't dry out. Don't flush them, especially when toilets are already failing.",
  },
  "c-milk": {
    why: "Toddlers need about 16–24 oz of milk a day for calcium, fat and calories, and fresh milk spoils within hours without refrigeration. UHT (shelf-stable) milk boxes need no fridge until opened. Familiar milk also comforts a stressed child. Whole-milk powder is a backup but goes rancid faster.",
    use: "Store boxes in a cool, dark place and rotate them into daily use. Once opened, finish the box within a few hours if there's no cold storage, which is why small 8 oz boxes work best. Offer milk with meals. Mix whole-milk powder with clean water only when boxes run out.",
  },
  "c-formula": {
    why: "Formula is the hardest thing to replace in a disaster, and babies have no safe substitute. Ready-to-feed formula needs no water or sterilizing, so it's safe when water is questionable. Breastfeeding mothers can have supply drop under stress or be separated from the baby. Two weeks is the minimum the playlist calls for.",
    use: "Use ready-to-feed bottles straight from the container, and throw away leftovers after an hour. Keep clean bottles and nipples sealed in bags. If you must mix powder, use bottled or boiled-and-cooled water. Continue breastfeeding if possible and keep formula as backup.",
  },
  "c-food": {
    why: "Stressed toddlers often refuse anything unfamiliar, and a child who won't eat for days gets weak and sick fast. Their own pouches, cereal, fruit cups and crackers keep them eating. Nuts, grapes, popcorn and hard foods are choking risks under age 4. Small, soft servings work best.",
    use: "Offer familiar foods first in a crisis, and introduce stockpile foods (rice, beans) slowly mixed with favorites. Cut food into small pieces and keep them seated while eating. Rotate pouches and snacks into normal meals before they expire. Pack a day's worth in the go bag.",
  },
  "c-meds": {
    why: "Children get fevers, ear infections and stomach bugs that are scary in a disaster, when the pediatrician and pharmacy are out of reach. Children's medicines disappear from shelves quickly. Doses are by weight, and mistakes under stress are common, which is why they're written on the box ahead of time. Aspirin is never given to children.",
    use: "Ask the pediatrician for the dose by your child's current weight and write it on each box with a marker. Use the included syringe, never a kitchen spoon, and write down the time of each dose. Don't give ibuprofen to a dehydrated or vomiting child unless the doctor says so. Get help for a fever with a stiff neck, rash, trouble breathing or a very sleepy child.",
  },
  "c-id": {
    why: "Families get separated in evacuations, crowds and shelters, and a scared toddler can't say their address or your number. A card with a photo and contacts lets anyone reunite you. A second copy with the safe adult means someone else can prove who the child is. Medical details on it help if they're hurt.",
    use: "Put the card in a zipped pocket of the child's bag or jacket every time you evacuate. In a chaotic situation, also write your phone number on the child's forearm with a marker. Give the second copy to the designated safe adult. Update the photo every 6 months.",
  },
  "c-gear": {
    why: "You can't carry a toddler, a go bag and supplies at the same time for long. A carrier keeps hands free and the child close, which is also safer in crowds. Children under 5 shouldn't be walking or running beside you in an evacuation. A travel bed gives them a safe place to sleep in a shelter or relative's home.",
    use: "Practice with the carrier now so it's quick to put on. In an evacuation, the child rides in the carrier while the adult carries the bag. Keep the car seat installed in the vehicle you'd evacuate in. Pack the travel bed in the car if you're leaving for more than a night.",
  },
  "c-play": {
    why: "Frightened, bored children use up the adults' attention right when it's needed for decisions. A familiar soft toy, a book and a favorite snack calm them measurably. The Red Cross and FEMA both list comfort items as real needs. A calmer child sleeps and eats better too.",
    use: "Let the child help choose what goes in the kit, so it's familiar. Bring it out during waits, in shelters, in the car, or when the power goes out. Keep the treat snack for hard moments. Update it as their interests change.",
  },
  "c-glow": {
    why: "Darkness frightens young children, and candles near small children are a fire and burn risk. Glow sticks give soft light for 8–12 hours with no flame or heat. They also help you see where the child is at night. They're cheap and last years.",
    use: "Crack one at bedtime as a night-light, or clip one to the child's clothing in the dark or in crowds. Supervise small children, since the liquid inside is an irritant if chewed. Keep a pack in the go bag. Toss them after use.",
  },
  "c-proof": {
    why: "Outages put dangerous things at toddler height: medicine, bleach, fuel, lighters and candles are left out as adults improvise. Poisoning and burns spike after disasters. A locked bin keeps everything in one safe place. Stoves, heaters and generators also need a barrier.",
    use: "Put all medicine, bleach, alcohol, lighters and matches in the locking bin and keep the key on an adult. Store fuel outside. Set up a gate or barrier around any heater or stove. Save poison control's number on the contact card: 1-800-222-1222 in the US, or 1-844-POISON-X (1-844-764-7669) in Canada.",
  },
  "c-clothes": {
    why: "Clothes in the go bag that no longer fit are useless, and children grow fast. A change of clothes keeps them dry and warm if they get wet or messy. Sturdy shoes protect feet from debris and broken glass. Kids can't borrow from adults.",
    use: "Pack one set in the next size up, plus socks, a warm layer and closed-toe shoes. Check sizes every 6 months (put it on the rotation calendar). Use the set when clothes get wet or dirty in an emergency. Wash and repack after.",
  },
  "c-sleep": {
    why: "Babies under 1 can suffocate in loose blankets and sleeping bags, and safe-sleep rules still apply in a disaster. A wearable blanket keeps them warm without loose covers. It's what you use instead of a sleeping bag for an infant. Two allow one to be washed.",
    use: "Dress the baby in layers plus the sleep sack, on their back on a firm, flat surface. No pillows, blankets or bumpers. In cold, add a layer under the sack rather than over the baby. Check the back of the neck for overheating.",
  },

  /* ───────── SANITATION ───────── */
  "s-toilet": {
    why: "Toilets stop working within hours of a water outage, and human waste is the main cause of disease after disasters. A bucket toilet is cheap and contains waste safely. Kitty litter or sawdust controls smell and moisture. Toilet bags with gelling powder make it even simpler.",
    use: "Line the bucket with two bags, use it like a toilet, and add a scoop of litter after each use. Tie off and replace the bag when it's a third full, and store full bags in a lidded container outside away from water sources. Wash or sanitize hands every time. Wipe the seat with diluted bleach daily.",
  },
  "s-tp": {
    why: "Toilet paper sells out instantly when people panic, and alternatives are unpleasant and less hygienic. It's compact and doesn't expire. Having enough avoids a stressful trip out. The quantity scales with the plan.",
    use: "Store it in a dry bin, rotating it into normal use. Ration by the roll-per-person-per-week rule during a long event. Put used paper in the toilet bag, not the toilet, when toilets aren't working. Keep a roll in each go bag in a zip bag.",
  },
  "s-bags": {
    why: "When trash collection stops, garbage attracts rodents and spreads disease. Heavy contractor bags don't tear under weight. They also serve as ponchos, ground sheets, rain catchers and toilet liners. Zip ties close them securely.",
    use: "Bag kitchen waste and diapers tightly and keep them in a lidded can outside. Use them as toilet liners and for cleanup debris. Cut a head hole for an emergency poncho. Keep a roll in the car and go bags.",
  },
  "s-wipes": {
    why: "Clean hands are the main defense against stomach illness when water is short. Sanitizer works only at 60% alcohol or more, so the label matters. Wipes clean bodies and surfaces with no water. Each person needs their own bottle so it's always on hand.",
    use: "Sanitize after the toilet, before eating or preparing food, and after diaper changes. Rub until dry. Use wipes for a quick daily wash-down. Keep sanitizer away from children's mouths and from open flames.",
  },
  "s-hyg": {
    why: (c) => "Washing and brushing prevent infections, skin problems and tooth pain when doctors and dentists are hard to reach. Normal routines also support morale. Bar soap stores longer than liquid and also washes clothes and wounds. Each person needs their own toothbrush.",
    use: "Keep a full set per person in the go bags and a backup supply at home. Wash with a basin of water and a washcloth when the shower doesn't work. Brush with a cup of clean water. Rotate supplies into normal use.",
  },
  "s-fem": {
    why: "Menstrual supplies are consistently missing from family kits and are among the first items to vanish. Substitutes are uncomfortable and less hygienic. They're also a top barter item. Packaging lasts years.",
    use: "Keep a 2-week supply in the go bag and the rest at home. Rotate them into normal use. Bag used products in the trash with the diapers. A menstrual cup is a reusable option if you're comfortable with it.",
  },
  "s-pp": {
    why: "After birth, bleeding lasts 2–6 weeks whether or not there's an emergency. Regular pads aren't absorbent enough. Running out in the first weeks with a newborn is stressful. Stores may be out or hard to reach.",
    use: "Pack them in the hospital bag and keep extras at home. Change them often to prevent infection. Call for help for soaking a pad within an hour, large clots, fever or foul smell.",
  },
  "s-gloves": {
    why: "Gloves protect against germs during first aid, diaper changes, toilet-bucket handling and cleanup of mold or rodent mess. They protect the person treating and the person treated. They're a top item that vanishes in a crisis. A box is cheap.",
    use: "Wear them for wound care, sick care, toilet bags and dirty cleanup. Remove them by peeling inside-out and wash hands after. Use them once. Store the box dry and out of sun.",
  },
});
