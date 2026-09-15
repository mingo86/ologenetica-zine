/* ============================================================
   OLOGENETICA · GUIDE — ENGLISH
   Content of the "How to read it" page: array of panels
   { cls: panel colour class, h: title, html: body }.
   The cls classes and inner HTML structure must be kept
   identical across translations.
   ============================================================ */
(function () {
  window.HOLO_GUIDE = window.HOLO_GUIDE || {};
  window.HOLO_GUIDE.en = {
    ksuper: "// the manual, pop edition",
    title: "HOW TO READ IT (AND HOW IT'S CALCULATED)",
    sub: "Where do those numbers like «26.4» come from? What are Shadow, Gift and Siddhi? And why do the three months before birth count too? All of it, right below.",
    panels: [
      { cls: "yellow", h: "The idea in 30 seconds", html: `
<p>The Hologenetic Profile is a map that weaves together three ancient languages and one modern one: the <b>64 hexagrams of the I Ching</b>, the <b>zodiac wheel</b> of astrology, the «personality + design» calculation of <b>Human Design</b>, and the symbolic correspondence with the <b>64 codons of DNA</b>. The result: 11 spheres of your life, each inhabited by one of the 64 Keys, each with its own Line (from 1 to 6).</p>
<p>It's neither a cage nor a prophecy: it's an <b>invitation to contemplation</b>. Each Key describes a spectrum of frequencies — from reactive behaviour (Shadow) to talent (Gift) to full flowering (Siddhi) — and you decide, day by day, at which pitch to play it.</p>` },
      { cls: "red", h: "The calculation, step by step", html: `
<ol class="steps">
<li><b>Moment of birth → Personality.</b> Using astronomical ephemerides we calculate the exact (tropical) ecliptic longitude of the Sun, Earth, Venus, Mars and Jupiter at the moment you were born. This is your <b>conscious</b> part: what you recognise as «me».</li>
<li><b>~3 months earlier → Design.</b> We rewind to the moment when the Sun sat exactly <b>88° of arc</b> before its birth position (roughly 88-89 days). There we calculate the Sun, Earth, Moon, Venus, Mars and Jupiter again. This is your <b>unconscious</b> part: the prenatal imprint, what the body knows before the mind arrives.</li>
<li><b>From the wheel to the Keys.</b> The 360° of the zodiac are divided into <b>64 sectors of 5.625°</b>, one per hexagram. The anchor is the standard one: hexagram 41 begins at 2°00' of Aquarius. Each planet thus «falls» inside a Key.</li>
<li><b>The Lines.</b> Each sector is in turn divided into <b>6 Lines of 0.9375°</b>. That's why a sphere is written «26.4»: Key 26, Line 4 — the <i>what</i> and the <i>how</i>.</li>
<li><b>From positions to Spheres.</b> Each sphere of the profile corresponds to a specific celestial body (table below): the personality Sun becomes the Life's Work, the design Earth the Purpose, the design Moon the Attraction, and so on.</li>
</ol>
<div class="mono">sector = 360° ÷ 64 = 5.625°&nbsp;&nbsp;·&nbsp;&nbsp;line = 5.625° ÷ 6 = 0.9375°<br>design = instant when lon(Sun) = lon(Sun at birth) − 88°<br>Earth = Sun + 180°&nbsp;&nbsp;·&nbsp;&nbsp;anchor: hexagram 41 → 302° (2° Aquarius)</div>` },
      { cls: "", h: "The 11 Spheres and their planets", html: `
<table class="stable">
<tr><th>Sphere</th><th>Celestial body</th><th>What it tells</th></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Life's Work</td><td>Sun · natal</td><td>Your outer genius: what you came here to do. (In the Pearl Sequence it's also called the «Brand».)</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Evolution</td><td>Earth · natal</td><td>What life teaches you through its challenges.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Radiance</td><td>Sun · design</td><td>What ignites vitality and health when you live it.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Purpose</td><td>Earth · design</td><td>The deep foundation: it activates when you serve something bigger.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Attraction</td><td>Moon · design</td><td>Who and what you attract in relationships.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>IQ</td><td>Venus · natal</td><td>The mental cycle of ages 14–21: how the mind learned to defend itself.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>EQ</td><td>Mars · natal</td><td>The emotional cycle of ages 7–14: how the heart learned to react.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>SQ</td><td>Venus · design</td><td>The imprinting of the first 7 years: the root of trust.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Core / Vocation</td><td>Mars · design</td><td>The oldest wound — which, transformed, becomes vocation.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Culture</td><td>Jupiter · design</td><td>Your place in the community.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Pearl</td><td>Jupiter · natal</td><td>The reward: the prosperity that arrives when you simplify.</td></tr>
</table>` },
      { cls: "teal", h: "The spectrum: Shadow → Gift → Siddhi", html: `
<p>Each Key isn't a label but a <b>band of frequencies</b>. The same energy can be lived at three pitches:</p>
<div class="spectrum">
<div class="spec o"><div class="t">SHADOW</div><p>The frequency of fear: reactive, repetitive, victim-flavoured behaviour. It isn't «bad» — it's compressed energy asking for attention.</p></div>
<div class="spec d"><div class="t">GIFT</div><p>The frequency of talent: when you welcome the shadow without repressing or venting it, the same energy opens up and becomes your contribution.</p></div>
<div class="spec s"><div class="t">SIDDHI</div><p>The frequency of full flowering: the Key's highest promise, rare as an eclipse. It serves as a pole star, not as a goal.</p></div>
</div>
<p style="margin-top:12px">Here's how the reading goes: <b>always start from the Shadow</b>. Ask yourself where that behaviour applies to you (nobody is exempt), watch it gently for a few weeks, and notice how — without forcing anything — the Gift starts peeking through.</p>` },
      { cls: "pink", h: "The 6 Lines: your style", html: `
<p>If the Key is the <i>what</i>, the Line is the <i>how</i>. They are six archetypes that recur throughout the profile:</p>
<div class="linegrid">
<div class="linecard"><b>Line 1 — The Investigator</b><p>Studies, digs deep, builds foundations. Confidence = knowledge.</p></div>
<div class="linecard"><b>Line 2 — The Hermit</b><p>Natural talent that can't see itself: it blossoms when it is called.</p></div>
<div class="linecard"><b>Line 3 — The Experimenter</b><p>Learns by trial and error: every stumble is precious material.</p></div>
<div class="linecard"><b>Line 4 — The Opportunist</b><p>Lives on relationships: opportunities arrive through people.</p></div>
<div class="linecard"><b>Line 5 — The Heretic</b><p>Practical solutions and charisma: it attracts other people's projections.</p></div>
<div class="linecard"><b>Line 6 — The Role Model</b><p>Three lives in one: experiment, watch from the roof, become an example.</p></div>
</div>
<p style="margin-top:12px">The profile also signs itself with two Lines, like <b>6/2</b>: the first is the Line of the natal Sun (conscious), the second that of the design Sun (unconscious). They are the style you show and the style that acts on its own.</p>` },
      { cls: "blue", h: "The recommended reading path", html: `
<ol>
<li><b>Activation Sequence</b> (Life's Work → Evolution → Radiance → Purpose): your life purpose. Contemplate one sphere at a time, no rushing.</li>
<li><b>Venus Sequence</b> (Attraction → IQ → EQ → SQ → Core): relationships as a mirror. It's walked backwards through the 7-year cycles, down to the original wound.</li>
<li><b>Pearl Sequence</b> (Vocation → Culture → Pearl → Brand): prosperity. It comes last: first the who, then the how, finally the what.</li>
</ol>
<p>Golden rule: <b>better one Key contemplated for a month than eleven read in an evening.</b> The profile isn't something you «consume»: it's something you inhabit.</p>` }
    ],
    foot: "System inspired by the Hologenetic Profile (Gene Keys by Richard Rudd — a synthesis of the I Ching, astrology and Human Design). It is a contemplative, symbolic tool: it has no relationship to genetics and no scientific validation. Original texts, for play and contemplation."
  };
})();
