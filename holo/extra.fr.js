/* ============================================================
   OLOGENETICA · PACK EXTRA — FRANÇAIS
   Contenus des sections avancées :
   · LIS  — la Ligne DANS la sphère (11 sphères × 6 Lignes = 66 lectures)
   · RINGS — les 21 Anneaux de codons (nom + essence)
   · TL   — timeline des cycles personnels
   · WX   — météo du profil (transits)
   · YR   — l'année solaire
   · RN   — section anneaux
   · ALM  — almanach des 64 Clés
   · LIB  — bibliothèque des 64 Clés
   · PST  — poster du quadrant
   · DS   — mode « heure inconnue »
   Les templates utilisent des placeholders {commeCeci}. Textes originaux.
   ============================================================ */
(function () {

  // La Ligne dans la sphère : LIS[sphère][ligne]
  const LIS = {
    lavoro: {
      1: "Ton génie se construit comme une bibliothèque : tu deviens maître de ce que tu as étudié à fond, et le monde te reconnaît l'autorité des fondations.",
      2: "Ton génie est naturel : il travaille mieux quand personne ne le regarde. Les appels sincères le font sortir ; la pression l'éteint.",
      3: "Ton génie se forge en se trompant : chaque métier, tu l'apprends en le démontant. Ton vrai CV, ce sont tes essais.",
      4: "Ton génie passe par les gens : ta carrière, c'est ton réseau. Les meilleures occasions viennent de ceux qui te connaissent déjà.",
      5: "Ton génie, c'est la solution pratique : le monde t'appelle quand ça brûle — et projette sur toi plus que tu ne demandes.",
      6: "Ton génie mûrit par phases : essais jusqu'à ~30 ans, observation jusqu'à ~50, puis autorité. N'anticipe pas le calendrier."
    },
    evoluzione: {
      1: "Le défi te demande des fondations : la croissance passe par l'étude patiente de ce qui te fait peur, pas par son évitement.",
      2: "Le défi vient à toi tout seul : ne le cherche pas. Tu grandis quand tu ne réponds qu'aux appels qui te ressemblent.",
      3: "Le défi est fait de chocs : chaque échec sur le thème est une pièce du chemin, pas une condamnation.",
      4: "Le défi se joue dans les relations proches : le thème se présente à travers les personnes qui te sont chères.",
      5: "Le défi apporte des projections : les autres te verront comme la cause ou comme le sauveur. Apprends à rendre ce qui n'est pas à toi.",
      6: "Le défi a trois saisons : d'abord tu le vis, puis tu l'observes, enfin tu l'enseignes. La pleine compréhension arrive à la troisième."
    },
    radianza: {
      1: "La vitalité s'allume dans la profondeur : comprendre te recharge. Une journée passée à étudier ce que tu aimes vaut des vacances.",
      2: "La vitalité est spontanée mais réservée : elle s'allume dans les espaces protégés et s'éteint sous observation.",
      3: "La vitalité aime le choc : le corps s'allume à faire, essayer, refaire. Le « juste en théorie » t'éteint.",
      4: "La vitalité est relationnelle : les bonnes personnes te rechargent. Le réseau n'est pas un loisir — c'est de la santé.",
      5: "La vitalité s'allume en résolvant : quand ton sens pratique sert vraiment, le corps répond.",
      6: "La vitalité suit les longues saisons : respecte la phase où tu es. Forcer la mauvaise phase coûte en santé."
    },
    scopo: {
      1: "Le but s'active en servant par la connaissance : quand ce que tu as étudié soutient quelque chose de plus grand que toi.",
      2: "Le but te trouve : il s'active quand quelque chose de plus grand appelle ton talent naturel par son nom.",
      3: "Le but se construit sur les essais : mets au service les erreurs que tu as déjà payées, et d'autres ne les paieront pas.",
      4: "Le but passe par la communauté : il s'active au sein d'un tissu de personnes, jamais en solitaire.",
      5: "Le but est pratique : il s'active quand ta solution sert à beaucoup, pas seulement à toi.",
      6: "Le but fleurit tard et en grand : la troisième phase de la vie est son territoire naturel."
    },
    attrazione: {
      1: "Tu attires ceux qui cherchent de la solidité : tes relations commencent lentement et tiennent longtemps. Fais confiance aux temps de construction.",
      2: "Tu attires sans chercher : les bonnes personnes te trouvent dans ta tanière. Ne te montre pas davantage — laisse-toi trouver par qui regarde vraiment.",
      3: "Tu attires par l'expérience : les relations sont des expériences, et la compétence se construit sur les échecs — du matériau, pas des accidents.",
      4: "Tu attires à travers le réseau : les amours arrivent par les amitiés. Le lien part du tissu social déjà existant.",
      5: "Tu attires des projections : qui arrive voit en toi ce dont il a besoin. Les vraies relations commencent quand l'auréole tombe.",
      6: "Tu attires par ton exemple : dans les relations tu cherches le tableau entier — et les trois phases de la vie changent ce que tu attires."
    },
    iq: {
      1: "Ton mental s'est défendu en étudiant : savoir, c'était la sécurité. L'angle mort : croire que comprendre suffit à vivre.",
      2: "Ton mental d'adolescent fonctionnait tout seul — et peut-être que personne ne l'a reconnu. L'angle mort : attendre encore cette reconnaissance.",
      3: "Ton mental a appris en se trompant à voix haute : l'angle mort, c'est te punir pour les erreurs qui sont ta méthode.",
      4: "Ton mental s'est formé dans le groupe : penser, c'était appartenir. L'angle mort : confondre le consensus avec la vérité.",
      5: "Ton mental a appris à résoudre pour les autres : l'angle mort, c'est le besoin que la solution soit applaudie.",
      6: "Ton mental regarde d'en haut depuis toujours : l'angle mort, c'est observer la vie au lieu de la vivre."
    },
    eq: {
      1: "Ton cœur s'est protégé avec les règles : savoir « comment on fait » apaisait. Aujourd'hui il s'ouvre là où il trouve de la clarté.",
      2: "Ton cœur ne s'ouvrait que dans les endroits sûrs : aujourd'hui il a encore besoin de tanières. Respecte-les, sans avoir à les justifier.",
      3: "Ton cœur a appris des chocs : les émotions se comprennent en les traversant, pas en les prévenant.",
      4: "Ton cœur bat dans le groupe : l'exclusion est la blessure, l'appartenance le remède — et le piège.",
      5: "Ton cœur a appris à prendre en charge : enfant, c'est toi qui résolvais. Aujourd'hui il peut déposer le rôle de pompier.",
      6: "Ton cœur observe avant de s'ouvrir : ce n'est pas de la froideur — c'est le long calendrier de la confiance."
    },
    sq: {
      1: "Dans les premières années, la confiance avait besoin de terre ferme : rituels, répétitions, présences sûres. C'est encore ta racine.",
      2: "Dans les premières années, il suffisait d'être vu sans avoir à demander : la racine de la confiance, c'est qui t'a trouvé sans que tu appelles.",
      3: "Dans les premières années, le monde s'apprenait en le touchant : tomber et se relever est ta première langue.",
      4: "Dans les premières années, la maison c'était les gens : la racine de la confiance est la chaleur du cercle proche.",
      5: "Dans les premières années, tu sentais les attentes des adultes : la racine, c'est apprendre que l'amour ne se gagne pas en résolvant.",
      6: "Dans les premières années, tu regardais tout avec un pas de recul : la racine, c'est la confiance de qui observe avant d'entrer."
    },
    nucleo: {
      1: "La blessure demande à être étudiée : la vocation naît en creusant ta propre profondeur jusqu'au bout.",
      2: "La blessure est restée longtemps invisible — même pour toi. La vocation naît quand tu laisses quelqu'un la voir.",
      3: "La blessure s'est représentée mille fois : la vocation est l'art distillé de tous ces essais.",
      4: "La blessure touche à l'appartenance : la vocation, c'est créer pour d'autres la place qui t'a manqué.",
      5: "La blessure est le poids des projections : la vocation, c'est servir sans porter ce qui n'est pas à toi.",
      6: "La blessure se comprend à distance : la vocation arrive quand tu cesses de la combattre et que tu la racontes d'en haut."
    },
    cultura: {
      1: "Dans la communauté, tu es les fondations : celui qui étudie, vérifie et garde le savoir du groupe.",
      2: "Dans la communauté, tu es la réserve naturelle : le talent que le groupe appelle quand il le faut — et qu'il faut protéger de l'usure.",
      3: "Dans la communauté, tu es celui qui a déjà essayé : l'explorateur qui revient avec la carte des erreurs.",
      4: "Dans la communauté, tu es le tisserand : tu gardes vivants les fils entre les gens. Sans toi le groupe est une somme ; avec toi, un corps.",
      5: "Dans la communauté, tu es le repère pratique : le groupe prospère quand ta solution circule — et toi, quand ensuite tu te retires.",
      6: "Dans la communauté, tu es le toit : la vision longue que le groupe consulte aux croisées des chemins."
    },
    perla: {
      1: "La prospérité vient de la profondeur : tu es récompensé pour ce que tu sais vraiment, quand tu cesses de le brader confusément.",
      2: "La prospérité vient si tu te laisses trouver : le bon marché t'appelle — le marketing forcé te dévalue.",
      3: "La prospérité vient des essais recyclés : chaque échec devient un savoir-faire précieux.",
      4: "La prospérité passe par le réseau : le travail vient de ceux qui te font confiance, pas des inconnus.",
      5: "La prospérité vient en résolvant : réduis ton offre à une solution claire et la valeur devient évidente.",
      6: "La prospérité mûrit tard et bien : les longues semailles rapportent plus que tous les raccourcis."
    }
  };

  // Les 21 Anneaux de codons : nom + essence
  const RINGS = {
    fire:        { n: "Anneau du Feu",                    t: "L'étincelle créative qui féconde la matière." },
    water:       { n: "Anneau de l'Eau",                  t: "La direction et la contribution : savoir où va le courant." },
    lifedeath:   { n: "Anneau de la Vie et de la Mort",   t: "Les cycles du naître, du nourrir et du lâcher-prise." },
    union:       { n: "Anneau de l'Union",                t: "Le lien : comment les gens se rencontrent vraiment." },
    light:       { n: "Anneau de la Lumière",             t: "Le mental lumineux : visions, rythmes et idées." },
    alchemy:     { n: "Anneau de l'Alchimie",             t: "Transformer le plomb des souvenirs en or." },
    humanity:    { n: "Anneau de l'Humanité",             t: "L'amour qui mûrit à travers les épreuves humaines." },
    trials:      { n: "Anneau des Épreuves",              t: "L'expression qui s'affine dans les examens de la vie." },
    purification:{ n: "Anneau de la Purification",        t: "L'écoute et le désir qui deviennent limpides." },
    seeking:     { n: "Anneau de la Quête",               t: "L'élan de chercher : monter, commencer, s'améliorer." },
    prosperity:  { n: "Anneau de la Prospérité",          t: "Talent et ressources qui se multiplient ensemble." },
    matter:      { n: "Anneau de la Matière",             t: "La profondeur incarnée : corps, métier, racines." },
    gaia:        { n: "Anneau de Gaïa",                   t: "Les besoins de la terre et de ses créatures." },
    origin:      { n: "Anneau de l'Origine",              t: "La graine de tout : le codon de départ de la roue." },
    whirlwind:   { n: "Anneau du Tourbillon",             t: "Les révolutions émotionnelles qui changent d'ère." },
    illuminati:  { n: "Anneau des Illuminati",            t: "Le flair et les valeurs qui guident les équipes." },
    illusion:    { n: "Anneau de l'Illusion",             t: "Risque et mémoire : ce qui vaut vraiment la mise." },
    miracles:    { n: "Anneau des Miracles",              t: "La curiosité et le doute qui ouvrent le possible." },
    noreturn:    { n: "Anneau du Non-Retour",             t: "La parole dite : influence et précision." },
    secrets:     { n: "Anneau des Secrets",               t: "La grâce cachée dans les tempêtes du cœur." },
    divinity:    { n: "Anneau de la Divinité",            t: "La puissance et l'intuition à l'état pur." }
  };

  // Timeline des cycles
  const TL = {
    title: "Ta timeline des cycles",
    sub: "Les cycles de développement de la Séquence de Vénus, le retour de Saturne et — pour les Lignes 6 — les trois phases de la vie, calculés sur tes dates réelles.",
    segs: { sq: "SQ · empreinte", eq: "EQ · cœur", iq: "IQ · mental" },
    marks: { saturn1: "1er retour de Saturne", saturn2: "2e retour de Saturne" },
    line6: { l6p1: "Phase 1 · expérience", l6p2: "Phase 2 · observation", l6p3: "Phase 3 · référence" },
    now: "AUJOURD'HUI", years: "ans",
    nowTpl: "Aujourd'hui tu as {age} ans : {phase}",
    phases: {
      sq: "tu es encore dans le cycle de l'empreinte (0–7).",
      eq: "tu es dans le cycle émotionnel (7–14).",
      iq: "tu es dans le cycle mental (14–21).",
      adult: "les trois cycles de formation sont complets : la Séquence de Vénus se parcourt désormais à rebours, en contemplation.",
      l6p1: "pour ta Ligne 6, tu es dans la phase de l'expérience directe (jusqu'à ~30 ans).",
      l6p2: "pour ta Ligne 6, tu es dans la phase du retrait et de l'observation (~30–50) : ce n'est pas un blocage, c'est une digestion.",
      l6p3: "pour ta Ligne 6, tu es dans la phase de la référence : ce que tu as traversé est maintenant un exemple."
    }
  };

  // Météo du profil (transits du jour)
  const WX = {
    title: "La météo du profil",
    sub: "Où se trouvent les planètes en ce moment sur la roue des 64 Clés, et lesquelles de tes sphères elles touchent.",
    inKey: "{body} est dans la Clé {key} ({gift})",
    hitSame: "active ta {sphere}",
    hitMirror: "fait miroir à ta {sphere}",
    noHits: "aucun contact direct avec ton profil aujourd'hui — climat neutre.",
    moonNote: "La Lune change de Clé toutes les ~10 heures : son contact est une vague brève.",
    updated: "calculé à l'instant"
  };

  // L'année solaire
  const YR = {
    title: "Ton année",
    sub: "Au retour solaire — l'instant où le Soleil revient exactement sur ton Soleil natal — nous lisons où se trouvent Vénus, Mars et Jupiter : le climat de l'année en cours.",
    returnAt: "Retour solaire {year} : {date}",
    inKey: "{body} de l'année dans la Clé {key} ({gift})",
    hitSame: "— active ta {sphere}",
    hitMirror: "— miroir de ta {sphere}",
    quiet: "cette année, il ne touche pas directement le profil : thème de fond, sans urgence."
  };

  // Section anneaux
  const RN = {
    title: "Tes anneaux de codons",
    sub: "Les 64 Clés se regroupent en 21 anneaux (comme les codons de l'ADN en familles). Voici les anneaux que tes 11 sphères touchent.",
    hitTpl: "Clé {key} ({sphere})",
    ofRing: "de l'anneau :",
    touched: "{n} anneaux touchés sur 21"
  };

  // Almanach
  const ALM = {
    title: "ALMANACH DES 64 CLÉS",
    ksuper: "LE CALENDRIER SOLAIRE · UNE ANNÉE DE CLÉS",
    sub: "Le Soleil traverse une Clé tous les ~5,7 jours : voici le calendrier des douze prochains mois. Télécharge le fichier ICS et les 64 « saisons » apparaissent dans ton calendrier.",
    today: "AUJOURD'HUI",
    todayTpl: "Aujourd'hui le Soleil est dans la Clé {key} — {o} → {d} → {s}",
    until: "jusqu'au {date}",
    ics: "Télécharger le calendrier (ICS)",
    icsName: "ologenetica-almanach",
    icsEvt: "Soleil dans la Clé {key} — {d}",
    icsDesc: "Ombre : {o} → Don : {d} → Siddhi : {s}. {t}",
    tableFrom: "Du", tableKey: "Clé", tableSpectrum: "Spectre"
  };

  // Bibliothèque
  const LIB = {
    title: "LES 64 CLÉS",
    ksuper: "BIBLIOTHÈQUE · LE SPECTRE COMPLET",
    sub: "Les 64 Clés du Yi King avec leur spectre Ombre → Don → Siddhi. À lire comme on visite une bibliothèque : une à la fois, sans hâte.",
    ringLbl: "Anneau", partnerLbl: "Miroir", lineLbl: "Lignes"
  };

  // Poster
  const PST = {
    btn: "Télécharger le poster du quadrant (PNG)",
    subtitle: "PROFIL HOLOGÉNÉTIQUE",
    linee: "LIGNES", croce: "CROIX", making: "Je génère le poster…"
  };

  // Heure inconnue
  const DS = {
    certain: "CERTAINE", variable: "VARIABLE",
    note: "Sans l'heure de naissance : {stable} sphères sur 11 restent identiques à toute heure du jour ; les {variable} autres peuvent varier (affichées avec le calcul de midi).",
    variants: "possibles : {list}"
  };

  window.HOLO_EXTRA = window.HOLO_EXTRA || {};
  window.HOLO_EXTRA.fr = { LIS, RINGS, TL, WX, YR, RN, ALM, LIB, PST, DS };
})();
