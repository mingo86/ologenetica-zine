# PRODUCT.md — Ologenetica

## What it is
A small static multilingual site (IT/EN/FR/ES/PT-BR) that computes and narrates the **Hologenetic Profile** (Gene Keys–inspired): birth date/time/place → real astronomical ephemeris → 11 spheres, each an I Ching hexagram ("Key") with a Line (1–6), organized in three sequences (Activation, Venus, Pearl). Each Key is a spectrum: Shadow → Gift → Siddhi.

## Audience & scene
Curiosi di sistemi contemplativi (Gene Keys, Human Design, I Ching, astrologia) — mostly Italian, mobile-first, evening reading; they receive a personal report and often compare profiles with a partner or friend. Not scholars; they want depth that reads easily.

## Surfaces
1. `Profilo Ologenetico.html` — calculator + dossier-style full report (the core surface; mode: Read — the visitor's success is *understanding their profile*).
2. `Come si Legge.html` — method explainer (Read).
3. `Compatibilità.html` — two-profile comparison (Read, with a small Operate form).
4. `index.html` — tiny hub (Persuade-lite).

## Product truth (unchangeable)
- Calculation engine validated to the minute against a professional Swiss Ephemeris report; personality = birth, design = −88° solar arc; wheel of 64 sectors anchored at hexagram 41 → 302°.
- Sphere names stay in English canon (Life's Work, Evolution, Radiance, Purpose, Attraction, IQ, EQ, SQ, Core/Vocation, Culture, Pearl, Brand).
- All interpretive texts are original; footer credits Richard Rudd's Gene Keys and disclaims scientific validity.
- i18n via `lang/i18n.js` + language packs `holo/keys.XX.js` / `holo/guide.XX.js`; UI dicts inside each page.
- **No animations** (explicit user constraint). Static site, no build step, deployed on Vercel (hidden: robots.txt + noindex).

## Brand commitments
- Distinct from the sibling project `zodiac-zine` (comic-pop, Bangers/Baloo, red paper): the old look is anti-reference for this site.
- Tone: contemplative, precise, warm — "a beautiful report you keep", not a horoscope app.
