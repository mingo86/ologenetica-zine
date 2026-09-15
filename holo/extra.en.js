/* ============================================================
   OLOGENETICA · EXTRA PACK — ENGLISH
   Content for the advanced sections:
   · LIS  — the Line INSIDE the sphere (11 spheres × 6 Lines = 66 readings)
   · RINGS — the 21 codon Rings (name + essence)
   · TL   — personal cycles timeline
   · WX   — profile weather (transits)
   · YR   — the solar year
   · RN   — rings section
   · ALM  — almanac of the 64 Keys
   · LIB  — library of the 64 Keys
   · PST  — chart poster
   · DS   — "unknown time" mode
   Templates use {placeholders}. Original texts.
   ============================================================ */
(function () {

  // The Line inside the sphere: LIS[sphere][line]
  const LIS = {
    lavoro: {
      1: "Your genius is built like a library: you become a master of what you have studied in depth, and the world grants you the authority of solid foundations.",
      2: "Your genius is natural: it works best when no one is watching. Sincere calls draw it out; pressure shuts it down.",
      3: "Your genius is forged through mistakes: you learn every craft by taking it apart. Your real résumé is your attempts.",
      4: "Your genius travels through people: your career is your network. The best opportunities come from those who already know you.",
      5: "Your genius is the practical solution: the world calls you when things are on fire — and projects onto you more than you asked for.",
      6: "Your genius ripens in phases: trials until ~30, observation until ~50, then authority. Don't rush the calendar."
    },
    evoluzione: {
      1: "Your challenge asks for foundations: growth comes from patiently studying what scares you, not from skipping over it.",
      2: "Your challenge finds you on its own: don't go looking for it. You grow when you answer only the calls that feel like you.",
      3: "Your challenge is made of collisions: every failure on this theme is a piece of the path, not a sentence.",
      4: "Your challenge plays out in close relationships: the theme shows up through the people you care about.",
      5: "Your challenge carries projections: others will see you as the cause or the savior. Learn to hand back what isn't yours.",
      6: "Your challenge has three seasons: first you live it, then you watch it, finally you teach it. Full understanding arrives in the third."
    },
    radianza: {
      1: "Your vitality lights up in depth: understanding recharges you. A day spent studying what you love is worth a vacation.",
      2: "Your vitality is spontaneous but private: it switches on in protected spaces and shuts down under observation.",
      3: "Your vitality loves impact: your body lights up in doing, trying, redoing. \"Right in theory\" switches you off.",
      4: "Your vitality is relational: the right people recharge you. Your network isn't leisure — it's health.",
      5: "Your vitality lights up in solving: when your practicality truly serves, your body responds.",
      6: "Your vitality follows the long seasons: respect the phase you're in. Forcing the wrong phase costs you your health."
    },
    scopo: {
      1: "Your purpose activates through serving with knowledge: when what you have studied holds up something bigger than you.",
      2: "Your purpose finds you: it activates when something larger calls your natural talent by name.",
      3: "Your purpose is built on attempts: put the mistakes you've already paid for at the world's service, and others won't have to pay them.",
      4: "Your purpose moves through community: it activates inside a fabric of people, never solo.",
      5: "Your purpose is practical: it activates when your solution serves many, not just you.",
      6: "Your purpose blooms late and large: the third phase of life is its natural territory."
    },
    attrazione: {
      1: "You attract those who seek solidity: your relationships start slowly and last long. Trust the timing of building.",
      2: "You attract without seeking: the right people find you in your den. Don't show yourself more — let yourself be found by those who truly look.",
      3: "You attract through experience: relationships are experiments, and skill is built on failures — material, not accidents.",
      4: "You attract through your network: loves arrive through friendships. The bond begins in the social fabric that's already there.",
      5: "You attract projections: whoever arrives sees in you what they need. Real relationships begin when the halo falls.",
      6: "You attract by example: in relationships you look for the whole picture — and the three phases of life change what you attract."
    },
    iq: {
      1: "Your mind defended itself by studying: knowing meant safety. The blind spot: believing that understanding is enough to live.",
      2: "Your adolescent mind worked all on its own — and perhaps no one recognized it. The blind spot: still waiting for that recognition.",
      3: "Your mind learned by making mistakes out loud: the blind spot is punishing yourself for the errors that are your method.",
      4: "Your mind was shaped in the group: thinking meant belonging. The blind spot: mistaking consensus for truth.",
      5: "Your mind learned to solve for others: the blind spot is needing the solution to be applauded.",
      6: "Your mind has always watched from above: the blind spot is observing life instead of living it."
    },
    eq: {
      1: "Your heart protected itself with rules: knowing \"how it's done\" was soothing. Today it opens where it finds clarity.",
      2: "Your heart only opened in safe places: it still needs its dens today. Respect them, without having to justify them.",
      3: "Your heart learned from collisions: emotions are understood by moving through them, not by preventing them.",
      4: "Your heart beats in the group: exclusion is the wound, belonging the medicine — and the trap.",
      5: "Your heart learned to carry the load: as a child, you were the one who fixed things. Today it can lay down the firefighter's role.",
      6: "Your heart observes before it opens: that's not coldness — it's the long calendar of trust."
    },
    sq: {
      1: "In your earliest years, trust needed solid ground: rituals, repetitions, reliable presences. It is still your root.",
      2: "In your earliest years, being seen without having to ask was enough: the root of trust is whoever found you without you calling.",
      3: "In your earliest years, the world was learned by touching it: falling and getting up is your first language.",
      4: "In your earliest years, home was the people: the root of trust is the warmth of the close circle.",
      5: "In your earliest years, you felt the adults' expectations: the root is learning that love isn't earned by fixing things.",
      6: "In your earliest years, you watched everything from a step back: the root is the trust of one who observes before entering."
    },
    nucleo: {
      1: "The wound asks to be studied: your calling is born by digging your own depths all the way down.",
      2: "The wound stayed invisible for a long time — even to you. Your calling is born when you let someone see it.",
      3: "The wound came back a thousand times: your calling is the art distilled from all those attempts.",
      4: "The wound is about belonging: your calling is to create for others the place you never had.",
      5: "The wound is the weight of projections: your calling is to serve without carrying what isn't yours.",
      6: "The wound is understood from a distance: your calling arrives when you stop fighting it and tell its story from above."
    },
    cultura: {
      1: "In the community you are the foundations: the one who studies, verifies, and safeguards the group's knowledge.",
      2: "In the community you are the nature reserve: the talent the group calls on when needed — and one to be protected from wear.",
      3: "In the community you are the one who has already tried: the explorer who returns with the map of mistakes.",
      4: "In the community you are the weaver: you keep the threads between people alive. Without you the group is a sum; with you, a body.",
      5: "In the community you are the practical reference: the group thrives when your solution circulates — and you thrive when you then withdraw.",
      6: "In the community you are the roof: the long view the group consults at its crossroads."
    },
    perla: {
      1: "Prosperity comes from depth: you are repaid for what you truly know, once you stop selling it short in confusion.",
      2: "Prosperity comes if you let yourself be found: the right market calls you — forced marketing devalues you.",
      3: "Prosperity comes from recycled attempts: every failure becomes precious know-how.",
      4: "Prosperity moves through your network: work comes from those who trust you, not from strangers.",
      5: "Prosperity comes from solving: distill your offer into one clear solution and its value becomes obvious.",
      6: "Prosperity ripens late and well: long sowings yield more than any shortcut."
    }
  };

  // The 21 codon Rings: name + essence
  const RINGS = {
    fire:        { n: "Ring of Fire",             t: "The creative spark that seeds matter with life." },
    water:       { n: "Ring of Water",            t: "Direction and contribution: knowing where the current flows." },
    lifedeath:   { n: "Ring of Life & Death",     t: "The cycles of being born, nourishing, and letting go." },
    union:       { n: "Ring of Union",            t: "The bond: how people truly meet." },
    light:       { n: "Ring of Light",            t: "The luminous mind: visions, rhythms, and ideas." },
    alchemy:     { n: "Ring of Alchemy",          t: "Turning the lead of memories into gold." },
    humanity:    { n: "Ring of Humanity",         t: "Love that matures through human trials." },
    trials:      { n: "Ring of Trials",           t: "Expression refined by life's examinations." },
    purification:{ n: "Ring of Purification",     t: "Listening and desire growing clear." },
    seeking:     { n: "Ring of Seeking",          t: "The drive to seek: to climb, to begin, to improve." },
    prosperity:  { n: "Ring of Prosperity",       t: "Talent and resources multiplying together." },
    matter:      { n: "Ring of Matter",           t: "Embodied depth: body, craft, roots." },
    gaia:        { n: "Ring of Gaia",             t: "The needs of the earth and its creatures." },
    origin:      { n: "Ring of Origin",           t: "The seed of everything: the wheel's starting codon." },
    whirlwind:   { n: "Ring of the Whirlwind",    t: "The emotional revolutions that change eras." },
    illuminati:  { n: "Ring of the Illuminati",   t: "The instinct and values that guide teams." },
    illusion:    { n: "Ring of Illusion",         t: "Risk and memory: what the stakes are really worth." },
    miracles:    { n: "Ring of Miracles",         t: "The curiosity and doubt that open the possible." },
    noreturn:    { n: "Ring of No Return",        t: "The spoken word: influence and precision." },
    secrets:     { n: "Ring of Secrets",          t: "The grace hidden in the heart's storms." },
    divinity:    { n: "Ring of Divinity",         t: "Power and intuition in their pure state." }
  };

  // Cycles timeline
  const TL = {
    title: "Your cycles timeline",
    sub: "The developmental cycles of the Venus Sequence, the Saturn return, and — for Line 6 — the three phases of life, calculated on your real dates.",
    segs: { sq: "SQ · imprinting", eq: "EQ · heart", iq: "IQ · mind" },
    marks: { saturn1: "1st Saturn return", saturn2: "2nd Saturn return" },
    line6: { l6p1: "Phase 1 · experience", l6p2: "Phase 2 · observation", l6p3: "Phase 3 · role model" },
    now: "TODAY", years: "years",
    nowTpl: "Today you are {age} years old: {phase}",
    phases: {
      sq: "you are still in the imprinting cycle (0–7).",
      eq: "you are in the emotional cycle (7–14).",
      iq: "you are in the mental cycle (14–21).",
      adult: "the three formative cycles are complete: from here the Venus Sequence is walked backwards, in contemplation.",
      l6p1: "for your Line 6, you are in the phase of direct experience (until ~30).",
      l6p2: "for your Line 6, you are in the phase of withdrawal and observation (~30–50): it isn't stagnation, it's digestion.",
      l6p3: "for your Line 6, you are in the role-model phase: what you have lived through is now an example."
    }
  };

  // Profile weather (today's transits)
  const WX = {
    title: "The profile weather",
    sub: "Where the planets are right now on the wheel of the 64 Keys, and which of your spheres they are touching.",
    inKey: "{body} is in Key {key} ({gift})",
    hitSame: "activates your {sphere}",
    hitMirror: "mirrors your {sphere}",
    noHits: "no direct contact with your profile today — neutral weather.",
    moonNote: "The Moon changes Key every ~10 hours: its contact is a brief wave.",
    updated: "calculated just now"
  };

  // The solar year
  const YR = {
    title: "Your year",
    sub: "At the solar return — the instant the Sun comes back exactly to your natal Sun — we read where Venus, Mars, and Jupiter stand: the climate of the year underway.",
    returnAt: "Solar return {year}: {date}",
    inKey: "This year's {body} in Key {key} ({gift})",
    hitSame: "— activates your {sphere}",
    hitMirror: "— mirror of your {sphere}",
    quiet: "this year it doesn't touch your profile directly: a background theme, no urgency."
  };

  // Rings section
  const RN = {
    title: "Your codon rings",
    sub: "The 64 Keys cluster into 21 rings (like DNA codons into families). These are the rings your 11 spheres touch.",
    hitTpl: "Key {key} ({sphere})",
    ofRing: "of the ring:",
    touched: "{n} rings touched out of 21"
  };

  // Almanac
  const ALM = {
    title: "ALMANAC OF THE 64 KEYS",
    ksuper: "THE SOLAR CALENDAR · A YEAR OF KEYS",
    sub: "The Sun crosses one Key every ~5.7 days: this is the calendar for the next twelve months. Download the ICS file and the 64 \"seasons\" appear in your calendar.",
    today: "TODAY",
    todayTpl: "Today the Sun is in Key {key} — {o} → {d} → {s}",
    until: "until {date}",
    ics: "Download the calendar (ICS)",
    icsName: "hologenetics-almanac",
    icsEvt: "Sun in Key {key} — {d}",
    icsDesc: "Shadow: {o} → Gift: {d} → Siddhi: {s}. {t}",
    tableFrom: "From", tableKey: "Key", tableSpectrum: "Spectrum"
  };

  // Library
  const LIB = {
    title: "THE 64 KEYS",
    ksuper: "LIBRARY · THE COMPLETE SPECTRUM",
    sub: "All 64 Keys of the I Ching with their Shadow → Gift → Siddhi spectrum. To be read the way you visit a library: one at a time, unhurried.",
    ringLbl: "Ring", partnerLbl: "Mirror", lineLbl: "Lines"
  };

  // Poster
  const PST = {
    btn: "Download the chart poster (PNG)",
    subtitle: "HOLOGENETIC PROFILE",
    linee: "LINES", croce: "CROSS", making: "Generating the poster…"
  };

  // Unknown time
  const DS = {
    certain: "CERTAIN", variable: "VARIABLE",
    note: "Without a birth time: {stable} spheres out of 11 stay identical at any hour of the day; the other {variable} may vary (shown with the noon calculation).",
    variants: "possible: {list}"
  };

  window.HOLO_EXTRA = window.HOLO_EXTRA || {};
  window.HOLO_EXTRA.en = { LIS, RINGS, TL, WX, YR, RN, ALM, LIB, PST, DS };
})();
