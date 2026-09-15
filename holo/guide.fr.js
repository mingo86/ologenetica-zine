/* ============================================================
   OLOGENETICA · GUIDE — FRANÇAIS
   Contenu de la page « Comment ça se lit » : tableau de panneaux
   { cls: classe couleur du panneau, h: titre, html: corps }.
   Les classes cls et la structure HTML interne doivent rester
   identiques dans les traductions.
   ============================================================ */
(function () {
  window.HOLO_GUIDE = window.HOLO_GUIDE || {};
  window.HOLO_GUIDE.fr = {
    ksuper: "// le manuel, version pop",
    title: "COMMENT ÇA SE LIT (ET SE CALCULE)",
    sub: "D'où sortent ces chiffres genre « 26.4 » ? C'est quoi, l'Ombre, le Don et le Siddhi ? Et pourquoi les trois mois avant la naissance comptent aussi ? Tout est là-dessous.",
    panels: [
      { cls: "yellow", h: "L'idée en 30 secondes", html: `
<p>Le Profil Hologénétique est une carte qui unit trois langages anciens et un moderne : les <b>64 hexagrammes du Yi King</b>, la <b>roue zodiacale</b> de l'astrologie, le calcul « personnalité + design » du <b>Human Design</b>, et la correspondance symbolique avec les <b>64 codons de l'ADN</b>. Le résultat : 11 sphères de ta vie, chacune habitée par une des 64 Clés, chacune avec sa Ligne (de 1 à 6).</p>
<p>Ce n'est ni une cage ni une prophétie : c'est une <b>invitation à la contemplation</b>. Chaque Clé décrit un spectre de fréquences — du comportement réactif (Ombre) au talent (Don) jusqu'au plein épanouissement (Siddhi) — et c'est toi qui décides, jour après jour, à quelle hauteur la jouer.</p>` },
      { cls: "red", h: "Le calcul, pas à pas", html: `
<ol class="steps">
<li><b>Moment de la naissance → Personnalité.</b> Avec les éphémérides astronomiques, nous calculons la longitude écliptique exacte (tropicale) du Soleil, de la Terre, de Vénus, de Mars et de Jupiter au moment où tu es né. C'est ta part <b>consciente</b> : ce que tu reconnais comme « moi ».</li>
<li><b>~3 mois avant → Design.</b> Nous remontons jusqu'au moment où le Soleil se trouvait exactement <b>88° d'arc</b> avant sa position de naissance (environ 88-89 jours). Là, nous recalculons Soleil, Terre, Lune, Vénus, Mars et Jupiter. C'est ta part <b>inconsciente</b> : l'empreinte prénatale, ce que le corps sait avant que l'esprit n'arrive.</li>
<li><b>De la roue aux Clés.</b> Les 360° du zodiaque sont divisés en <b>64 secteurs de 5,625°</b>, un par hexagramme. L'ancrage est le standard : l'hexagramme 41 commence à 2°00' du Verseau. Chaque planète « tombe » ainsi dans une Clé.</li>
<li><b>Les Lignes.</b> Chaque secteur est à son tour divisé en <b>6 Lignes de 0,9375°</b>. Voilà pourquoi une sphère s'écrit « 26.4 » : Clé 26, Ligne 4 — le <i>quoi</i> et le <i>comment</i>.</li>
<li><b>Des positions aux Sphères.</b> Chaque sphère du profil correspond à un corps céleste précis (tableau ci-dessous) : le Soleil de personnalité devient le Life's Work, la Terre de design le Purpose, la Lune de design l'Attraction, et ainsi de suite.</li>
</ol>
<div class="mono">secteur = 360° ÷ 64 = 5,625°&nbsp;&nbsp;·&nbsp;&nbsp;ligne = 5,625° ÷ 6 = 0,9375°<br>design = instant où lon(Soleil) = lon(Soleil à la naissance) − 88°<br>Terre = Soleil + 180°&nbsp;&nbsp;·&nbsp;&nbsp;ancre : hexagramme 41 → 302° (2° Verseau)</div>` },
      { cls: "", h: "Les 11 Sphères et leurs planètes", html: `
<table class="stable">
<tr><th>Sphère</th><th>Corps céleste</th><th>Ce qu'elle raconte</th></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Life's Work</td><td>Soleil · natal</td><td>Ton génie extérieur : ce que tu es venu faire. (Dans la Séquence de la Perle, elle s'appelle aussi « Brand ».)</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Evolution</td><td>Terre · natal</td><td>Ce que la vie t'enseigne à travers les défis.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Radiance</td><td>Soleil · design</td><td>Ce qui allume vitalité et santé quand tu le vis.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Purpose</td><td>Terre · design</td><td>Le fondement profond : il s'active en servant quelque chose de plus grand.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Attraction</td><td>Lune · design</td><td>Qui et quoi tu attires dans les relations.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>IQ</td><td>Vénus · natal</td><td>Le cycle mental des 14–21 ans : comment l'esprit a appris à se défendre.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>EQ</td><td>Mars · natal</td><td>Le cycle émotionnel des 7–14 ans : comment le cœur a appris à réagir.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>SQ</td><td>Vénus · design</td><td>L'empreinte des 7 premières années : la racine de la confiance.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Core / Vocation</td><td>Mars · design</td><td>La blessure la plus ancienne — qui, transformée, devient vocation.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Culture</td><td>Jupiter · design</td><td>Ta place dans la communauté.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Pearl</td><td>Jupiter · natal</td><td>La récompense : la prospérité qui arrive quand tu simplifies.</td></tr>
</table>` },
      { cls: "teal", h: "Le spectre : Ombre → Don → Siddhi", html: `
<p>Chaque Clé n'est pas une étiquette mais une <b>bande de fréquences</b>. La même énergie peut se vivre à trois hauteurs :</p>
<div class="spectrum">
<div class="spec o"><div class="t">OMBRE</div><p>La fréquence de la peur : le comportement réactif, répétitif, victimaire. Elle n'est pas « mauvaise » — c'est de l'énergie comprimée qui demande de l'attention.</p></div>
<div class="spec d"><div class="t">DON</div><p>La fréquence du talent : quand tu accueilles l'ombre sans la refouler ni la déverser, la même énergie s'ouvre et devient ta contribution.</p></div>
<div class="spec s"><div class="t">SIDDHI</div><p>La fréquence du plein épanouissement : la promesse la plus haute de la Clé, rare comme une éclipse. Elle sert d'étoile polaire, pas d'objectif.</p></div>
</div>
<p style="margin-top:12px">La lecture se fait comme ça : <b>pars toujours de l'Ombre</b>. Demande-toi où ce comportement te concerne (personne n'y échappe), observe-le avec douceur pendant quelques semaines, et remarque comment — sans rien forcer — le Don commence à pointer.</p>` },
      { cls: "pink", h: "Les 6 Lignes : ton style", html: `
<p>Si la Clé est le <i>quoi</i>, la Ligne est le <i>comment</i>. Ce sont six archétypes qui reviennent dans tout le profil :</p>
<div class="linegrid">
<div class="linecard"><b>Ligne 1 — L'Investigateur</b><p>Il étudie, approfondit, construit des fondations. Sécurité = connaissance.</p></div>
<div class="linecard"><b>Ligne 2 — L'Ermite</b><p>Un talent naturel qui ne se voit pas lui-même : il fleurit quand on l'appelle.</p></div>
<div class="linecard"><b>Ligne 3 — L'Expérimentateur</b><p>Il apprend par essai et erreur : chaque faux pas est un matériau précieux.</p></div>
<div class="linecard"><b>Ligne 4 — L'Opportuniste</b><p>Il vit de relations : les occasions arrivent à travers les personnes.</p></div>
<div class="linecard"><b>Ligne 5 — L'Hérétique</b><p>Solutions pratiques et charisme : il attire les projections des autres.</p></div>
<div class="linecard"><b>Ligne 6 — Le Modèle</b><p>Trois vies en une : il expérimente, observe depuis le toit, devient exemple.</p></div>
</div>
<p style="margin-top:12px">Le profil se signe aussi avec deux Lignes, genre <b>6/2</b> : la première est la Ligne du Soleil natal (consciente), la seconde celle du Soleil de design (inconsciente). C'est le style que tu montres et le style qui agit tout seul.</p>` },
      { cls: "blue", h: "Le parcours de lecture conseillé", html: `
<ol>
<li><b>Séquence d'Activation</b> (Life's Work → Evolution → Radiance → Purpose) : ton but de vie. Contemple une sphère à la fois, sans hâte.</li>
<li><b>Séquence de Vénus</b> (Attraction → IQ → EQ → SQ → Core) : les relations comme miroir. Elle se parcourt à rebours dans les cycles de 7 ans, jusqu'à la blessure originelle.</li>
<li><b>Séquence de la Perle</b> (Vocation → Culture → Pearl → Brand) : la prospérité. Elle vient en dernier : d'abord le qui, puis le comment, enfin le quoi.</li>
</ol>
<p>Règle d'or : <b>mieux vaut une Clé contemplée pendant un mois que onze lues en une soirée.</b> Le profil ne se « consomme » pas : il s'habite.</p>` }
    ],
    foot: "Système inspiré du Profil Hologénétique (Gene Keys de Richard Rudd — synthèse de Yi King, astrologie et Human Design). C'est un outil contemplatif et symbolique : il n'a aucun rapport avec la génétique ni de validation scientifique. Textes originaux, pour le jeu et la contemplation."
  };
})();
