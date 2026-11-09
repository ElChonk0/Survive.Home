/* Survive.Home — builds the household context and renders ITEMS (data.js). */

const STORE_HH = "prep-household-v1";
const STORE_CHECK = "prep-checks-v1";
const STORE_VIEW = "prep-view-v1";

const DEFAULT_HH = {
  days: 14,
  waterFull: false,
  members: [
    { label: "Dad", age: 40, sex: "M" },
    { label: "Mom", age: 35, sex: "F" },
    { label: "Kid", age: 10 },
    { label: "Kid", age: 5 },
  ],
  hz: { cold: false, heat: false, hurricane: false, quake: false, fire: false, flood: false, nuclear: false },
  home: { floors: 2, gas: true, basement: false, apt: false },
  vehicles: 1,
  pets: { dogS: 0, dogM: 0, dogL: 0, cat: 0 },
};

const HAZARDS = [
  ["cold", "Cold winters"], ["heat", "Extreme heat"], ["hurricane", "Hurricanes"],
  ["quake", "Earthquakes"], ["fire", "Wildfire"], ["flood", "Flooding"], ["nuclear", "Chemical / fallout"],
];

function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* storage unavailable */ }
}

let hh = Object.assign(structuredClone(DEFAULT_HH), load(STORE_HH, {}));
let checks = load(STORE_CHECK, {});
let view = Object.assign({ essentials: false, hideDone: false, tab: "guide", order: "rank" }, load(STORE_VIEW, {}));

/* ───────── context ───────── */

const hasSize = (m) => m.heightIn > 0 && m.weightLb > 0;

function kcalByAge(m) {
  const a = m.age;
  if (a < 4) return 1000;
  if (a < 9) return 1400;
  if (a < 13) return 1800;
  if (a < 18) return m.sex === "M" ? 2600 : 2000;
  if (a < 65) return m.sex === "M" ? 2400 : 2000;
  return m.sex === "M" ? 2200 : 1800;
}
// With height and weight: IOM energy equations for children (ages 3–18 "low active", averaged across
// sexes under 12 since sex isn't asked), and Mifflin–St Jeor × 1.5 for adults, a light-to-moderate work
// level (hauling water, cleanup) rather than a desk day.
function kcalBySize(m) {
  const a = m.age, kg = m.weightLb * 0.4536, mt = m.heightIn * 0.0254;
  let k;
  if (a < 3) k = 89 * kg - 80;
  else if (a < 18) {
    const extra = a < 9 ? 20 : 25;
    const boy = 88.5 - 61.9 * a + 1.13 * (26.7 * kg + 903 * mt) + extra;
    const girl = 135.3 - 30.8 * a + 1.16 * (10 * kg + 934 * mt) + extra;
    k = a < 12 ? (boy + girl) / 2 : m.sex === "M" ? boy : girl;
  } else {
    k = 1.5 * (10 * kg + 625 * mt - 5 * a + (m.sex === "M" ? 5 : -161));
  }
  return Math.max(800, Math.round(k / 50) * 50);
}
function kcalFor(m) {
  if (m.age < 1) return 0; // formula / breast milk, counted separately
  let k = hasSize(m) ? kcalBySize(m) : kcalByAge(m);
  if (m.pregnant) k += [0, 340, 450][(m.trimester || 2) - 1];
  if (m.breastfeeding) k += 450;
  return k;
}
// 1 gal per person per day is FEMA's floor: about half for drinking, half for cooking and washing.
// With a weight, the drinking half follows body size (½ oz per lb), so larger adults store more.
function waterFor(m) {
  let w = m.weightLb > 0 ? Math.max(1, 0.5 + (m.weightLb * 0.5) / 128) : 1;
  if (m.pregnant) w += 0.25;
  if (m.breastfeeding) w += 0.5;
  return Math.round(w * 20) / 20;
}

function buildContext(h) {
  const M = h.members;
  const by = (f) => M.filter(f).length;
  const heat = h.hz.heat ? 1.5 : 1;
  const p = h.pets;
  // Government of Canada: about 4 L/day for an average dog and 1 L/day for a cat, so medium dog 1 gal, cat ¼ gal.
  const petWaterDay = p.dogS * 0.5 + p.dogM * 1 + p.dogL * 1.5 + p.cat * 0.25;
  const days = Math.max(1, Math.round(h.days));
  const c = {
    days,
    n: M.length,
    infants: by((m) => m.age < 1),
    toddlers: by((m) => m.age >= 1 && m.age < 4),
    kids: by((m) => m.age < 13),
    at: by((m) => m.age >= 13),
    adults: by((m) => m.age >= 18),
    ages4: by((m) => m.age >= 4),
    older: by((m) => m.age >= 65),
    over40: by((m) => m.age >= 40),
    // FDA potassium-iodide single doses: 130 mg adults, 65 mg ages 3–18, 32 mg 1 month–3 years
    ki: { adult: by((m) => m.age >= 18), child: by((m) => m.age >= 3 && m.age < 18), small: by((m) => m.age < 3) },
    // Go bags: 3 days, +25% for adults and teens walking under stress
    goKcal: 3 * M.reduce((s, m) => s + kcalFor(m) * (m.age >= 13 ? 1.25 : 1), 0),
    preg: M.filter((m) => m.pregnant),
    lateP: M.some((m) => m.pregnant && m.trimester === 3),
    mens: by((m) => m.sex === "F" && m.age >= 12 && m.age <= 50 && !m.pregnant),
    adultsNonPreg: by((m) => m.age >= 18 && !m.pregnant),
    vitPeople: by((m) => m.age >= 4 && !m.pregnant),
    rx: by((m) => m.rx), glasses: by((m) => m.glasses), device: by((m) => m.device), mobility: by((m) => m.mobility),
    diaperDay: M.reduce((s, m) => s + (m.age < 4 ? ({ full: m.age < 1 ? 10 : 6, night: 1 }[m.diapers] || 0) : 0), 0),
    kcalDay: M.reduce((s, m) => s + kcalFor(m), 0),
    petWaterDay,
    petFood: p.dogS * 0.25 + p.dogM * 0.6 + p.dogL * 1.2 + p.cat * 0.15,
    petCount: p.dogS + p.dogM + p.dogL + p.cat,
    hz: h.hz, home: h.home, vehicles: h.vehicles,
  };
  c.waterDay = M.reduce((s, m) => s + waterFor(m), 0) * heat + petWaterDay;
  c.waterDays = h.waterFull ? days : Math.min(days, 14);
  c.waterStore = c.waterDay * c.waterDays;
  c.tiers = { nc: Math.min(days, 3), pt: Math.max(0, Math.min(days, 14) - 3), st: Math.max(0, days - 14) };
  c.cookDays = days - c.tiers.nc;
  c.metric = isMetric();
  return c;
}

/* ───────── helpers ───────── */

/* Units. Content is written in US units; in metric mode every "number + unit" in displayed text is
 * converted on the way out (esc, describe, copy list), so the data files stay single-source. */
const isMetric = () => view.units === "metric";
const FRAC = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3 };
const NUM = "-?(?:\\d[\\d,]*(?:\\.\\d+)?[½¼¾⅓]?|[½¼¾⅓])";
const UNIT_RE = new RegExp(`(${NUM})(?:\\s?–\\s?(${NUM}))?(\\+)?(\\s|-)(gallons?|gal|quarts?|qt|ounces?|oz|pounds?|lbs?|ft²|feet|foot|ft|inches|inch|miles?|mi|cups?)(?![a-zA-Z])`, "g");
const TEMP_RE = new RegExp(`(${NUM})(?:\\s?–\\s?(${NUM}))?°F`, "g");
function parseNum(t) {
  const f = /[½¼¾⅓]$/.test(t) ? FRAC[t.slice(-1)] : 0;
  const base = t.replace(/[½¼¾⅓]$/, "").replace(/,/g, "");
  const n = base === "" || base === "-" ? 0 : +base;
  return (base.startsWith("-") ? -1 : 1) * (Math.abs(n) + f);
}
function nice(x) {
  const a = Math.abs(x);
  if (a < 10) return String(Math.round(x * 10) / 10);
  if (a < 100) return String(Math.round(x));
  if (a < 1000) return String(Math.round(x / 5) * 5);
  const p = 10 ** (Math.floor(Math.log10(a)) - 2);
  return (Math.round(x / p) * p).toLocaleString();
}
// [factor, metric unit, factor and unit used when the result is under 1]
const CONV = {
  gal: [3.785, "L"], qt: [0.946, "L"], lb: [0.4536, "kg", 453.6, "g"], ft: [0.3048, "m", 30.48, "cm"],
  "ft²": [0.0929, "m²"], inch: [2.54, "cm"], mi: [1.609, "km"], cup: [237, "mL"], ozw: [28.35, "g"], ozf: [29.57, "mL"],
};
const unitKey = (u) => ({ gallon: "gal", gallons: "gal", quart: "qt", quarts: "qt", pound: "lb", pounds: "lb", lbs: "lb", feet: "ft", foot: "ft", inches: "inch", mile: "mi", miles: "mi", cups: "cup" }[u] || u);
function toMetric(s) {
  return String(s)
    .replace(UNIT_RE, (all, a, b, plus, sep, u, at, str) => {
      let k = unitKey(u);
      if (k === "oz" || k === "ounce" || k === "ounces") {
        // Fluid ounces for drinks; weight ounces for cans and jars.
        const near = str.slice(Math.max(0, at - 40), at + all.length + 30);
        k = /milk|bottle|box|formula|drink|juice|\/day/i.test(near) ? "ozf" : "ozw";
      }
      const [f, unit, f2, unit2] = CONV[k];
      const x = parseNum(a), y = b ? parseNum(b) : null;
      const small = f2 && Math.abs(Math.max(x, y ?? x) * f) < 1;
      const conv = (n) => nice(n * (small ? f2 : f));
      return `${conv(x)}${y !== null ? "–" + conv(y) : ""}${plus || ""}${sep === "-" ? "-" : " "}${small ? unit2 : unit}`;
    })
    .replace(TEMP_RE, (all, a, b, at, str) => {
      // A temperature difference ("every 18°F hotter", "1°F/h") scales without the 32° offset.
      const diff = /^(\s*(hotter|colder|warmer|cooler|below you)|\/h)/.test(str.slice(at + all.length)) || /every\s*$/.test(str.slice(0, at));
      const c = (n) => String(Math.round(diff ? (parseNum(n) * 5) / 9 : ((parseNum(n) - 32) * 5) / 9));
      return `${c(a)}${b ? "–" + c(b) : ""}°C`;
    })
    .replace(/([\d.,]+) (mL|kcal) per (lb|pound)\b/g, (all, n, u) => `${nice(parseNum(n) * 2.2046)} ${u} per kg`)
    .replace(/\bper pound\b/g, "per kilo")
    .replace(/\bper gallon\b/g, "per 3.8 L")
    .replace(/\bper quart\b/g, "per litre")
    .replace(/\bOne gallon per person\b/g, "3.8 L (one gallon) per person")
    .replace(/\bthe first gallon\b/g, "the first 4 L")
    .replace(/\bgallon-per-person\b/g, "3.8-litre-per-person")
    .replace(/\bA quart of\b/g, "A litre of")
    .replace(/\bhalf a mile\b/g, "800 m")
    .replace(/\bup to a mile\b/g, "up to 1.5 km");
}
const U = (s) => (isMetric() ? toMetric(s) : String(s));
const esc = (s) => U(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const val = (f, c) => (typeof f === "function" ? f(c) : f);
const fmt = (n) => (Number.isInteger(n) ? n.toLocaleString() : n.toLocaleString(undefined, { maximumFractionDigits: 1 }));
function qtyText(item, c) {
  const q = item.qty(c);
  return Array.isArray(q) ? `${fmt(q[0])} ${q[1]}` : q;
}
function isZeroQty(item, c) {
  const q = item.qty(c);
  return Array.isArray(q) && q[0] <= 0;
}
function visibleItems(c) {
  return ITEMS.filter((it) => (!it.when || it.when(c)) && !isZeroQty(it, c));
}
// A source is a YouTube video id or, for web guidance such as the Government of Canada's, a full URL.
function extLink(key) {
  const [vid, title, channel] = EXT_SOURCES[key];
  const href = vid.startsWith("http") ? vid : `https://www.youtube.com/watch?v=${vid}`;
  return `<a class="ext" href="${href}" target="_blank" rel="noopener" title="${esc(title)}">${esc(channel)}</a>`;
}
const PRI = { 1: ["Essential", "p1"], 2: ["Recommended", "p2"], 3: ["Upgrade", "p3"] };
const byRank = (a, b) => RANK[a.id][0] - RANK[b.id][0] || RANK[a.id][1] - RANK[b.id][1];
// Survival order: every essential first (by tier), then recommended, then upgrades.
const bySurvival = (a, b) => a.p - b.p || byRank(a, b);
const PRI_GROUPS = [
  [1, "Essentials", "What keeps everyone alive and safe, most critical first. Finish these before anything below."],
  [2, "Recommended", "Makes the plan sturdier and the weeks easier. Same survival order."],
  [3, "Upgrades", "Long outages, specific hazards and comfort. Add these once the rest is done."],
];
const hasAlt = (it) => !!(ALTS[it.id] && ALTS[it.id].length);
function channels(keys) {
  return [...new Set(keys.map((k) => EXT_SOURCES[k][2]))].join(", ");
}
// Who holds an alternative view: linked sources, or (for advice this checklist replaced) a plain label.
const altWho = (a) => (a.by.length ? channels(a.by) : a.from);
function firstSentence(s) {
  const m = String(s).match(/^.*?[.!?](\s|$)/);
  return m ? m[0].trim() : s;
}

/* ───────── household panel ───────── */

function memberRow(m, i) {
  const kid = m.age < 4;
  const canPreg = m.sex === "F" && m.age >= 12 && m.age <= 55;
  const flag = (k, label) =>
    `<label class="flag"><input type="checkbox" id="m${i}-${k}" data-i="${i}" data-k="${k}" ${m[k] ? "checked" : ""}><span>${label}</span></label>`;
  return `
  <div class="member" data-i="${i}">
    <div class="member-top">
      <input class="m-label" id="m${i}-label" data-i="${i}" data-k="label" value="${esc(m.label)}" aria-label="Name">
      <label class="m-age">Age <input type="number" id="m${i}-age" min="0" max="110" step="1" data-i="${i}" data-k="age" value="${m.age}"></label>
      ${m.age >= 12 ? `<select id="m${i}-sex" data-i="${i}" data-k="sex" aria-label="Sex"><option value="M" ${m.sex === "M" ? "selected" : ""}>Male</option><option value="F" ${m.sex === "F" ? "selected" : ""}>Female</option></select>` : ""}
      <button class="icon-btn" data-remove="${i}" aria-label="Remove ${esc(m.label)}">×</button>
    </div>
    <div class="member-size">${sizeFields(m, i)}</div>
    <div class="flags">
      ${canPreg ? flag("pregnant", "Pregnant") : ""}
      ${canPreg && m.pregnant ? `<select id="m${i}-tri" data-i="${i}" data-k="trimester" aria-label="Trimester">${[1, 2, 3].map((t) => `<option value="${t}" ${(m.trimester || 2) === t ? "selected" : ""}>Trimester ${t}</option>`).join("")}</select>` : ""}
      ${canPreg && !m.pregnant ? flag("breastfeeding", "Nursing") : ""}
      ${kid ? `<select id="m${i}-diapers" data-i="${i}" data-k="diapers" aria-label="Diapers"><option value="none" ${(m.diapers || "none") === "none" ? "selected" : ""}>Potty trained</option><option value="night" ${m.diapers === "night" ? "selected" : ""}>Night pull-ups</option><option value="full" ${m.diapers === "full" ? "selected" : ""}>In diapers</option></select>` : ""}
      ${flag("rx", "Daily Rx")}${flag("glasses", "Glasses")}${flag("device", "Powered medical device")}${flag("mobility", "Mobility needs")}
    </div>
    <div class="member-meta">${describe(m)}</div>
  </div>`;
}
// Height and weight are stored in inches and pounds; metric mode shows and accepts cm and kg.
function sizeFields(m, i) {
  const num = (k, v, max, label) =>
    `<input type="number" id="m${i}-${k}" min="0" max="${max}" step="1" data-i="${i}" data-k="${k}" value="${v}" aria-label="${label}">`;
  if (isMetric()) {
    return `<label class="m-age">Height ${num("cm", m.heightIn ? Math.round(m.heightIn * 2.54) : "", 250, "Height, cm")} cm</label>
      <label class="m-age">Weight ${num("kg", m.weightLb ? Math.round(m.weightLb * 0.4536) : "", 300, "Weight, kg")} kg</label>`;
  }
  const h = Math.round(m.heightIn || 0);
  return `<label class="m-age">Height ${num("ft", h ? Math.floor(h / 12) : "", 8, "Height, feet")} ft
      ${num("in", h ? h % 12 : "", 11, "Height, inches")} in</label>
      <label class="m-age">Weight ${num("lb", m.weightLb ? Math.round(m.weightLb) : "", 600, "Weight, lb")} lb</label>`;
}
function describe(m) {
  const k = kcalFor(m);
  const parts = [];
  parts.push(k ? `${k.toLocaleString()} kcal/day` : "formula / breast milk");
  parts.push(`${waterFor(m)} gal water/day`);
  if (m.age >= 1) parts.push(hasSize(m) ? "from height & weight" : "average for age");
  return U(parts.join(" · "));
}

function renderHousehold() {
  document.getElementById("members").innerHTML = hh.members.map(memberRow).join("");
  document.querySelectorAll("[data-days]").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.days === hh.days)));
  document.getElementById("days-custom").value = hh.days;
  document.getElementById("water-full").checked = hh.waterFull;
  document.getElementById("hazards").innerHTML = HAZARDS.map(([k, label]) =>
    `<label class="chip"><input type="checkbox" id="hz-${k}" data-hz="${k}" ${hh.hz[k] ? "checked" : ""}><span>${label}</span></label>`).join("");
  document.getElementById("floors").value = hh.home.floors;
  document.getElementById("vehicles").value = hh.vehicles;
  document.getElementById("gas").checked = hh.home.gas;
  document.getElementById("basement").checked = hh.home.basement;
  document.getElementById("apt").checked = !!hh.home.apt;
  for (const k of ["dogS", "dogM", "dogL", "cat"]) document.getElementById("pet-" + k).value = hh.pets[k];
}

/* ───────── results ───────── */

function renderResults() {
  const c = buildContext(hh);
  const items = visibleItems(c);
  const done = items.filter((it) => checks[it.id]).length;
  const ess = items.filter((it) => it.p === 1);
  const essDone = ess.filter((it) => checks[it.id]).length;

  document.getElementById("summary").innerHTML = `
    <div class="stat"><span class="stat-k">Water to store</span><span class="stat-v">${U(`${fmt(Math.ceil(c.waterStore))} gal`).replace(/ (\S+)$/, "<small> $1</small>")}</span><span class="stat-s">${U(`${c.waterDay.toFixed(2)} gal`)}/day × ${c.waterDays} days</span></div>
    <div class="stat"><span class="stat-k">Food energy</span><span class="stat-v">${fmt(c.kcalDay)}<small> kcal/day</small></span><span class="stat-s">${fmt(c.kcalDay * c.days)} kcal over ${c.days} days</span></div>
    <div class="stat"><span class="stat-k">Food tiers</span><span class="stat-v tiers"><b>${c.tiers.nc}</b>/<b>${c.tiers.pt}</b>/<b>${c.tiers.st}</b><small> days</small></span><span class="stat-s">no-cook / pantry / staples</span></div>
    <div class="stat"><span class="stat-k">Essentials ready</span><span class="stat-v">${essDone}<small> of ${ess.length}</small></span>
      <span class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${ess.length}" aria-valuenow="${essDone}"><i style="width:${ess.length ? (essDone / ess.length) * 100 : 0}%"></i></span>
      <span class="stat-s">${done} of ${items.length} items overall</span></div>`;

  const notes = [];
  if (c.preg.length) notes.push(`Pregnancy needs are included for ${c.preg.map((m) => esc(m.label)).join(", ")}. Run medicines, supplements and the birth plan past the OB.`);
  if (c.kids) notes.push(`Children's doses go by weight. Write your pediatrician's numbers on the boxes now.`);
  if (!hh.waterFull && c.days > 14) notes.push(`Water storage is capped at 14 days. After that the plan relies on filtering and treating (bleach, filter, rain catchment). Tick “Store water for the full plan” to size storage for all ${c.days} days.`);
  document.getElementById("notes").innerHTML = notes.map((n) => `<p>${n}</p>`).join("");

  // Rank numbers count every item that applies to this household, in survival order.
  const num = {};
  [...items].sort(bySurvival).forEach((it, i) => { num[it.id] = i + 1; });

  const rankMode = view.order === "rank";
  const groups = rankMode
    ? PRI_GROUPS.map(([p, name, why]) => ({ key: "pri-" + p, name, why, test: (it) => it.p === p }))
    : CATEGORIES.map((cat) => ({ key: "cat-" + cat.id, name: cat.name, test: (it) => it.cat === cat.id }));
  // In survival order, a sub-heading marks each tier inside a group.
  const rows = (list) => {
    let last = 0;
    return list.map((it) => {
      const t = RANK[it.id][0];
      let head = "";
      if (rankMode && t !== last) {
        const tier = TIERS[t - 1];
        head = `<li class="tier-sub"><b>Tier ${t} · ${esc(tier.name)}</b>${it.p === 1 ?`<span>${esc(tier.why)}</span>` : ""}</li>`;
        last = t;
      }
      return head + itemRow(it, c, num[it.id]);
    }).join("");
  };

  const out = [];
  for (const g of groups) {
    let list = items.filter(g.test);
    if (!list.length) continue;
    const total = list.length;
    const catDone = list.filter((it) => checks[it.id]).length;
    if (view.essentials) list = list.filter((it) => it.p === 1);
    if (view.hideDone) list = list.filter((it) => !checks[it.id]);
    if (view.disagree) list = list.filter(hasAlt);
    if (view.disagree && !list.length) continue;
    list.sort(bySurvival);
    out.push(`
    <section class="cat" id="${g.key}">
      <header class="cat-h">
        <h2>${g.name}</h2>
        <span class="cat-count">${catDone}/${total}</span>
        <span class="bar small"><i style="width:${(catDone / total) * 100}%"></i></span>
      </header>
      ${g.why ? `<p class="tier-why">${esc(g.why)}</p>` : ""}
      ${list.length ? `<ul class="items">${rows(list)}</ul>` : `<p class="empty">All done here.</p>`}
    </section>`);
  }
  document.getElementById("list").innerHTML = out.join("") || `<p class="empty">Nothing matches these filters.</p>`;
  renderGuide();
}

/* ───────── start-here guide ───────── */

function renderGuide() {
  const steps = GUIDE.steps.map((s, i) => {
    const c = buildContext(Object.assign({}, hh, { days: s.days }));
    const list = visibleItems(c).filter((it) => s.ids.includes(it.id)).sort((a, b) => s.ids.indexOf(a.id) - s.ids.indexOf(b.id));
    const done = list.filter((it) => checks[it.id]).length;
    const tasks = (s.tasks || []).map((t) => `<li>${esc(t(c))}</li>`).join("");
    return `
    <section class="step ${list.length && done === list.length ? "complete" : ""}">
      <header class="step-h">
        <span class="step-n">${i + 1}</span>
        <div><h2>${esc(s.title)}</h2><span class="step-when">${esc(s.when)} · quantities for ${s.days} days</span></div>
        <span class="cat-count">${done}/${list.length}</span>
      </header>
      <p class="step-intro">${esc(s.intro)}</p>
      ${tasks ? `<ul class="tasks">${tasks}</ul>` : ""}
      <ul class="items guide-items">${list.map((it) => {
        const d = DETAILS[it.id] || {};
        return `
        <li class="item ${checks[it.id] ? "done" : ""}">
          <input type="checkbox" id="g-${it.id}" data-check="${it.id}" ${checks[it.id] ? "checked" : ""}>
          <div class="item-body">
            <div class="item-top">
              <label for="g-${it.id}" class="item-name">${esc(val(it.name, c))}</label>
              <span class="qty">${esc(qtyText(it, c))}</span>
            </div>
            <p class="why">${esc(firstSentence(val(d.why || it.why || "", c)))}${hasAlt(it) ? ` <a href="#" class="see-alt" data-goto="${it.id}">Channels disagree, see the alternative</a>` : ""}</p>
          </div>
        </li>`;
      }).join("")}</ul>
    </section>`;
  });
  document.getElementById("guide").innerHTML = `
    <p class="guide-intro">${esc(GUIDE.intro)}</p>
    ${steps.join("")}
    <section class="step avoid">
      <header class="step-h"><span class="step-n">!</span><div><h2>Common first-timer mistakes</h2></div></header>
      <ul class="tasks">${GUIDE.avoid.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    </section>`;
}

function showTab() {
  document.querySelectorAll("[data-tab]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === view.tab)));
  document.getElementById("guide").hidden = view.tab !== "guide";
  document.getElementById("checklist").hidden = view.tab !== "list";
  document.querySelectorAll("[data-order]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.order === view.order)));
  document.querySelectorAll("[data-units]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.units === (view.units || "us"))));
  document.querySelectorAll("[data-u]").forEach((el) => { el.dataset.u ||= el.textContent; el.textContent = U(el.dataset.u); });
}

function altBlock(a, c) {
  return `
        <div class="alt">
          <p class="alt-by">${a.by.length ? a.by.map(extLink).join(" · ") : esc(a.from)}</p>
          <p><b>They say:</b> ${esc(a.claim)}</p>
          <p><b>Their alternative:</b> ${esc(val(a.alt, c))}</p>
          <p class="alt-trade"><b>Trade-off:</b> ${esc(val(a.trade, c))}</p>
        </div>`;
}

function itemRow(it, c, n) {
  const [pl, pc] = PRI[it.p];
  const d = DETAILS[it.id] || {};
  const why = val(d.why || it.why, c);
  const use = val(d.use, c);
  const basis = it.basis ? it.basis(c) : "";
  const srcs = it.src.map((s) => s === "g"
    ? `<span class="src-g" title="General public-health guidance (FEMA, CDC, AAP, ACOG, Red Cross); not covered in the playlist">outside playlist</span>`
    : EXT_SOURCES[s] ? extLink(s)
    : `<a href="https://www.youtube.com/watch?v=${SOURCES[s][0]}" target="_blank" rel="noopener" title="Playlist video ${s + 1}: ${esc(SOURCES[s][1])}">▶ ${s + 1}</a>`).join(" ");
  const views = VIEWS[it.id] || [];
  const alts = ALTS[it.id] || [];
  const altsHtml = alts.length ? `
      <details class="alts" ${view.expand || view.disagree ? "open" : ""}>
        <summary><span class="dis-chip">Disagreement</span> ${alts.length === 1 ? `${esc(altWho(alts[0]))} proposes an alternative` : `${alts.length} alternatives proposed`}</summary>
        ${alts.map((a) => altBlock(a, c)).join("")}
      </details>` : "";
  const viewsHtml = altsHtml + (views.length ? `
      <details class="views" ${view.expand ? "open" : ""}>
        <summary>What other channels add (${views.length})</summary>
        <ul>${views.map((v) => `<li>${extLink(v.by)}: ${esc(v.text)}</li>`).join("")}</ul>
      </details>` : "");
  const tier = RANK[it.id][0];
  return `
  <li class="item ${checks[it.id] ? "done" : ""}" id="item-${it.id}">
    <input type="checkbox" id="chk-${it.id}" data-check="${it.id}" ${checks[it.id] ? "checked" : ""}>
    <div class="item-body">
      <div class="item-top">
        <label for="chk-${it.id}" class="item-name"><span class="rank" title="Survival priority rank for your household">#${n}</span> ${esc(val(it.name, c))}</label>
        <span class="qty">${esc(qtyText(it, c))}</span>
      </div>
      ${why ? `<p class="why"><b>Why:</b> ${esc(why)}</p>` : ""}${viewsHtml}
      ${use ? `<details class="use" ${view.expand ? "open" : ""}><summary>How &amp; when to use</summary><p>${esc(use)}</p></details>` : ""}
      <div class="meta"><span class="pri ${pc}">${pl}</span><span class="tier-tag" title="${esc(TIERS[tier - 1].name)}">Tier ${tier}</span>${basis ? `<span class="basis">${esc(basis)}</span>` : ""}<span class="srcs">${srcs}</span></div>
    </div>
  </li>`;
}

/* ───────── events ───────── */

function commit(structural) {
  save(STORE_HH, hh);
  if (structural) renderHousehold();
  renderResults();
}

document.addEventListener("input", (e) => {
  const t = e.target;
  if (t.dataset.k && t.dataset.i !== undefined) {
    const m = hh.members[+t.dataset.i];
    const k = t.dataset.k;
    if (t.type === "checkbox") {
      m[k] = t.checked;
      if (k === "pregnant" && t.checked) { m.trimester = m.trimester || 2; m.breastfeeding = false; }
      commit(true);
    } else if (k === "age") {
      const a = Math.max(0, Math.min(110, Math.floor(+t.value || 0)));
      const before = m.age;
      m.age = a;
      if (a < 4 && !m.diapers) m.diapers = a < 3 ? "full" : "none";
      t.closest(".member").querySelector(".member-meta").textContent = describe(m);
      // Re-render the row when the age crosses a threshold that changes which fields show.
      const band = (x) => (x < 4 ? 0 : x < 12 ? 1 : x <= 55 ? 2 : 3);
      commit(false);
      if (band(before) !== band(a)) { renderHousehold(); document.getElementById(`m${t.dataset.i}-age`)?.focus(); }
    } else if (["ft", "in", "lb", "cm", "kg"].includes(k)) {
      // Blank fields fall back to the age averages.
      const row = t.closest(".member");
      const num = (key) => Math.max(0, +row.querySelector(`[data-k="${key}"]`).value || 0);
      const h = isMetric() ? num("cm") / 2.54 : num("ft") * 12 + num("in");
      const w = isMetric() ? num("kg") / 0.4536 : num("lb");
      if (h > 0) m.heightIn = h; else delete m.heightIn;
      if (w > 0) m.weightLb = w; else delete m.weightLb;
      row.querySelector(".member-meta").textContent = describe(m);
      commit(false);
    } else {
      m[k] = k === "trimester" ? +t.value : t.value;
      if (k === "sex" && t.value === "M") { m.pregnant = false; m.breastfeeding = false; }
      commit(k !== "label");
    }
    return;
  }
  if (t.dataset.hz) { hh.hz[t.dataset.hz] = t.checked; return commit(false); }
  if (t.dataset.check) {
    checks[t.dataset.check] = t.checked;
    if (!t.checked) delete checks[t.dataset.check];
    save(STORE_CHECK, checks);
    return renderResults();
  }
  switch (t.id) {
    case "days-custom": {
      const d = Math.max(1, Math.min(365, Math.floor(+t.value || 1)));
      hh.days = d;
      document.querySelectorAll("[data-days]").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.days === d)));
      return commit(false);
    }
    case "water-full": hh.waterFull = t.checked; return commit(false);
    case "floors": hh.home.floors = Math.max(1, +t.value || 1); return commit(false);
    case "vehicles": hh.vehicles = Math.max(0, +t.value || 0); return commit(false);
    case "gas": hh.home.gas = t.checked; return commit(false);
    case "basement": hh.home.basement = t.checked; return commit(false);
    case "apt": hh.home.apt = t.checked; return commit(false);
    case "f-essentials": view.essentials = t.checked; save(STORE_VIEW, view); return renderResults();
    case "f-hidedone": view.hideDone = t.checked; save(STORE_VIEW, view); return renderResults();
    case "f-expand": view.expand = t.checked; save(STORE_VIEW, view); return renderResults();
    case "f-disagree": view.disagree = t.checked; save(STORE_VIEW, view); return renderResults();
  }
  if (t.id.startsWith("pet-")) { hh.pets[t.id.slice(4)] = Math.max(0, +t.value || 0); return commit(false); }
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a.see-alt");
  if (link) {
    e.preventDefault();
    view.tab = "list"; view.hideDone = false; view.essentials = false; view.disagree = false;
    document.getElementById("f-hidedone").checked = false;
    document.getElementById("f-essentials").checked = false;
    document.getElementById("f-disagree").checked = false;
    save(STORE_VIEW, view); showTab(); renderResults();
    const row = document.getElementById("item-" + link.dataset.goto);
    row?.querySelector("details.alts")?.setAttribute("open", "");
    row?.scrollIntoView({ block: "start" });
    return;
  }
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.tab) { view.tab = b.dataset.tab; save(STORE_VIEW, view); return showTab(); }
  if (b.dataset.order) { view.order = b.dataset.order; save(STORE_VIEW, view); showTab(); return renderResults(); }
  if (b.dataset.units) { view.units = b.dataset.units; save(STORE_VIEW, view); showTab(); return commit(true); }
  if (b.dataset.days) { hh.days = +b.dataset.days; return commit(true); }
  if (b.dataset.remove !== undefined) { hh.members.splice(+b.dataset.remove, 1); return commit(true); }
  if (b.id === "add-member") { hh.members.push({ label: `Person ${hh.members.length + 1}`, age: 30, sex: "F" }); return commit(true); }
  if (b.id === "reset") {
    if (b.dataset.armed) { hh = structuredClone(DEFAULT_HH); checks = {}; save(STORE_CHECK, checks); delete b.dataset.armed; b.textContent = "Reset to example"; return commit(true); }
    b.dataset.armed = "1"; b.textContent = "Click again to reset everything";
    setTimeout(() => { delete b.dataset.armed; b.textContent = "Reset to example"; }, 4000);
    return;
  }
  if (b.id === "copy-list") return copyList(b);
});

function copyList(btn) {
  const c = buildContext(hh);
  const lines = [`Shopping list — ${c.n} people, ${c.days} days`];
  const groups = view.order === "rank"
    ? PRI_GROUPS.map(([p, name]) => [name + " (most critical first)", (it) => it.p === p])
    : CATEGORIES.map((cat) => [cat.name, (it) => it.cat === cat.id]);
  for (const [name, test] of groups) {
    const todo = visibleItems(c).filter((it) => test(it) && !checks[it.id] && it.cat !== "skills" && (!view.essentials || it.p === 1));
    if (!todo.length) continue;
    todo.sort(bySurvival);
    lines.push("", name.toUpperCase());
    for (const it of todo) lines.push(U(`[ ] ${val(it.name, c)} — ${qtyText(it, c)}`));
  }
  const text = lines.join("\n");
  const ok = () => { btn.textContent = "Copied"; setTimeout(() => (btn.textContent = "Copy shopping list"), 2000); };
  navigator.clipboard.writeText(text).then(ok, () => {
    const ta = document.getElementById("copy-fallback");
    ta.hidden = false; ta.value = text; ta.select();
    btn.textContent = "Select the text below and copy";
  });
}

document.getElementById("f-essentials").checked = view.essentials;
document.getElementById("f-hidedone").checked = view.hideDone;
document.getElementById("f-expand").checked = !!view.expand;
document.getElementById("f-disagree").checked = !!view.disagree;
renderHousehold();
renderResults();
showTab();
