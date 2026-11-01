/* "Start here": what to get first when starting from nothing. Each step lists checklist items (shared
 * checkmarks) with quantities sized to the household for that step's horizon. The order combines the
 * survival tiers (priority.js) with the staged plans from City Prepping (start from zero), DIY Prepper TV
 * (first $100 / $1,000), Magic Prepper (first 2 weeks) and FEMA's 3-days-then-2-weeks guidance. */

const GUIDE = {
  intro: "If you're starting from nothing, don't start by shopping. Every channel we compared agrees on the order: protect against the things that kill in minutes, then cover water, then sanitation and medicine, then food, and only then power, comms and upgrades. Build in stages, 3 days, then 2 weeks, then a month, then 3 months, and finish each stage before starting the next. Quantities below are sized to your household for each stage.",
  avoid: [
    "Buying tactical gear or a fancy bug-out bag before you have water and a toilet plan. Most emergencies are spent at home.",
    "Freeze-dried 'month supply' buckets before a pantry of food you already eat: they list servings, not calories, and some are very salty.",
    "A generator before CO detectors. Generators and indoor heaters kill families every winter.",
    "Storing food your family won't eat. A sudden diet change is hard on a toddler and in pregnancy.",
    "Doing it all at once. A little every week (one extra can, one small task) beats one big panic purchase.",
    "Telling everyone what you've stored.",
  ],
  steps: [
    {
      title: "Today", when: "free · about an hour", days: 3,
      intro: "Nothing to buy yet. These tasks make the biggest difference for the least effort, and they tell you what to buy first.",
      tasks: [
        (c) => `Fill clean bottles and pitchers from the tap so you already hold ${up(c.waterDay * 3)} gal, 3 days of water.`,
        () => "Press the test button on every smoke and CO alarm.",
        () => "Ask the pharmacy whether daily prescriptions can be refilled a few days early, every month from now on.",
        () => "Photograph IDs, insurance cards and prescriptions on both adults' phones.",
      ],
      ids: ["x-audit", "a-shutoffs", "d-plan", "a-triggers", "d-contacts", "c-safe", "a-codes", "a-car"],
    },
    {
      title: "Week 1: the first 72 hours", when: "roughly $150–250", days: 3,
      intro: "Enough to ride out a three-day outage at home without a store: stored water, no-cook food, light, basic medicine and a toilet backup. This is FEMA's minimum and what DIY Prepper TV's first $100 covers.",
      ids: ["l-co", "h-ext", "w-cont", "c-formula", "c-milk", "f-pb", "f-cprot", "f-crack", "f-nuts", "f-fruitveg", "c-food", "k-opener", "l-flash", "l-head", "l-batt", "l-bank", "m-fak", "m-otc", "c-meds", "m-ors", "s-tp", "s-bags", "s-wipes", "c-diapers", "c-wipes", "p-vit", "d-cash"],
    },
    {
      title: "Weeks 2–4: two weeks at home", when: "roughly $300–500", days: 14,
      intro: "The two-week supply FEMA and most channels treat as the real baseline. You add the full water store, a way to treat more water, a way to cook, a toilet that works without water, warmth or cooling for your climate, a tourniquet, and the pregnancy and child items you'd need if you had to leave in a hurry.",
      ids: ["w-store", "w-bleach", "w-filter", "f-rte", "f-rice-p", "f-pasta", "f-oats-p", "f-oil", "k-stove", "k-fuel", "k-fire", "s-toilet", "s-hyg", "s-fem", "s-pp", "m-tq", "m-masks", "m-rx", "l-radio", "t-room", "t-cool", "t-bag", "t-base", "t-mylar", "d-docs", "d-med", "p-records", "p-routes", "p-signs", "p-bag", "c-id", "c-proof", "c-sleep", "b-bag", "b-shoes", "b-food", "pt-food", "h-wrench", "h-water"],
    },
    {
      title: "Months 2–3: a month, plus skills", when: "roughly $500–1,000", days: 30,
      intro: "Deepen to a month and start practicing. City Prepping's days 60–90 focus on information, a little power, medical training, a blackout practice night and getting to know neighbors. Skills cost little and don't expire.",
      ids: ["a-stb", "a-cpr", "a-cookout", "a-neighbors", "l-frs", "l-station", "l-solar", "x-recharge", "w-tub", "w-heater", "m-trauma", "m-vitals", "m-manual", "f-beans", "k-thermal", "v-kit", "pt-kit", "p-birth", "a-rotate", "a-fifo", "x-security", "c-play", "h-quake"],
    },
    {
      title: "Months 4–12: three months and beyond", when: "spread over the year", days: 90,
      intro: "Long-term staples, rain water, bigger backup power and the start of producing your own. Sealed staples fill calories cheaply; the rest is resilience. Several channels (Survival Dispatch, City Prepping) treat 3 months of food as the long-run goal.",
      ids: ["x-stages", "f-rice", "f-oats", "f-flour", "f-seal", "f-milk", "f-salt", "f-sugar", "f-vit", "f-comfort", "w-rain", "l-gen", "k-alt", "x-library", "h-seeds", "x-health", "a-nav", "h-repair", "d-fund", "d-ins"],
    },
  ],
};
