---
name: Ologenetica
description: "Lo Spettrometro — a 1960s-70s laboratory measuring instrument that reads the Hologenetic Profile as a calibrated measurement"
colors:
  panel-deep: "#0b0f0b"
  module-face: "#121712"
  module-raised: "#1a211a"
  recess: "#080b08"
  etch: "#2c352c"
  etch-lit: "#49564a"
  text: "#cdd5c8"
  engraved-dim: "#93a08f"
  phosphor-amber: "#ffb454"
  amber-dimmed: "#b97f33"
  phosphor-mint: "#93e2b4"
  venus-magenta: "#e2a3da"
  pearl-blue: "#86c8e8"
  alarm: "#ff8266"
typography:
  display:
    fontFamily: "Saira Semi Condensed, system-ui, sans-serif"
    fontSize: "clamp(30px, 6.4vw, 54px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.12em"
  engraved-heading:
    fontFamily: "Saira Semi Condensed, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.24em"
  label:
    fontFamily: "Saira Semi Condensed, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.18em"
  readout:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "33px"
    fontWeight: 600
    lineHeight: 1
  spec-mono:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.22em"
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.66
rounded:
  chassis: "6px"
  module: "4px"
  control: "3px"
  chip: "2px"
  mark: "1px"
spacing:
  module-y: "22px"
  module-x: "24px"
  panel-pad: "20px"
  card-pad: "14px"
  grid-gap: "14px"
  mobile-x: "12px"
components:
  button-go:
    backgroundColor: "{colors.phosphor-amber}"
    textColor: "{colors.panel-deep}"
    rounded: "{rounded.control}"
    padding: "13px"
  input-well:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.phosphor-amber}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
  nav-pill:
    backgroundColor: "{colors.module-raised}"
    textColor: "{colors.engraved-dim}"
    padding: "7px 13px"
  nav-pill-on:
    backgroundColor: "{colors.phosphor-amber}"
    textColor: "{colors.panel-deep}"
    padding: "7px 13px"
  channel-chip:
    textColor: "{colors.panel-deep}"
    rounded: "{rounded.chip}"
    padding: "2px 7px"
  module-panel:
    backgroundColor: "{colors.module-face}"
    rounded: "{rounded.module}"
    padding: "20px 20px 18px"
  sphere-card:
    backgroundColor: "{colors.module-raised}"
    rounded: "{rounded.control}"
    padding: "13px 14px 14px"
  key-card:
    backgroundColor: "{colors.module-face}"
    rounded: "{rounded.control}"
    padding: "14px 15px"
  today-module:
    backgroundColor: "{colors.module-raised}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
---

# Design System: Ologenetica

<!-- Recorded post-build from the shipped code (holo/instrument.css + the four pages), finish review disposition: ship. World: "Lo Spettrometro", seed 84c75ad3.
     Extended 2026-08-18 to cover the surfaces shipped since (finish review: ship after one fix): Chiavi.html, Almanacco.html, the profile report extensions (line-in-sphere, timeline, rings, solar return, transits, poster), the holo/extra.XX.js content-pack layer, and the PWA layer (manifest.json, sw.js, icons). The world is unchanged; this pass records how it extended. -->

## Overview

**Creative North Star: "Lo Spettrometro"**

The whole site is one physical object: a 1960s–70s laboratory measuring instrument in green-black enamel. The page background is the deep enamel chassis (`--panel-0`); every section is a bolted-on module face (`--panel-1`); interactive controls sit on raised faces (`--panel-2`); inputs and data plates are recessed wells (`--recess`) with inset shadows. Text is either *engraved* into the panel (Saira Semi Condensed caps, tracked), *lit* on a phosphor display (Azeret Mono in amber), or printed in a technical manual's prose face (Libre Franklin). The profile is not narrated — it is *measured*: the CTA says "Misura", numbers are readouts, sequences are channels (CH·1/2/3), and the report reads like a calibration certificate.

Every ink is flat. There are no decorative gradients anywhere in the build; the only repeating-linear-gradients are tick scales and 45° hatching — engravings, not gradients. The only luminous effect in the world is the amber phosphor glow (`--glow: 0 0 6px rgba(255,180,84,.35)`), applied as text-shadow to amber readouts and as the focus halo on inputs. Nothing moves: the site ships zero CSS animations and zero transitions (hard product constraint).

The confirmed anti-references, refused per-page in the direction contracts: the starry-night gold-serif astro-app look, the heart-quiz love calculator, the mystic-blog explainer, and the sibling project `zodiac-zine`'s comic-pop world (Bangers/Baloo, red paper).

**Key Characteristics:**
- One dark enamel object; depth is physical (recessed vs. raised), never floating.
- Flat inks; the amber phosphor text-shadow is the single glow in the world.
- Tick scales everywhere: heading rules, hero underline, band scales, SVG dials.
- State is always a printed mark plus color, never color alone.
- Three channel inks — amber, magenta, blue — one per sequence, everywhere consistent.
- Completely static: no animations, no transitions.

## Colors

A dark green-black enamel ground with phosphor inks: everything either recedes into the panel or lights up on it.

### Primary
- **Phosphor Amber** (`--amber`, #ffb454): the working ink of the instrument. Lit title words, key-number readouts, input text and caret, the MISURA keycap, needle and markers in SVG dials, links, selection background, focus outlines. The only color that ever glows (`--glow`). Its dimmed twin **Amber Down** (`--amber-dn`, #b97f33) is the phosphor at rest: line-number suffixes, spectrum spec rows, link underlines, hover borders.

### Secondary (channel inks — one sequence, one channel, one ink)
- **Phosphor Mint** (`--mint`, #93e2b4): the Siddhi zone of the calibrated ramp, positive/OK readout chips, the "specchio" connection type. Never glows.
- **Venus Magenta** (`--mag`, #e2a3da): CH·2, the Venus Sequence — its heading chip, card top-borders, dial markers, legend dot.
- **Pearl Blue** (`--blu`, #86c8e8): CH·3, the Pearl Sequence — same grammar as magenta. (CH·1, Activation, uses Phosphor Amber.)

### Tertiary
- **Alarm** (`--alarm`, #ff8266): warnings only. Always accompanied by a printed sign: the ⨯ prefix on form errors, the 45° hatched header band on the `.soglia` threshold module.

### Neutral
- **Panel Deep** (`--panel-0`, #0b0f0b): page ground and chassis; also the text color printed *on* any lit chip or button.
- **Module Face** (`--panel-1`, #121712): section module background.
- **Module Raised** (`--panel-2`, #1a211a): cards, controls, table of raised elements.
- **Recess** (`--recess`, #080b08): input wells, data plates, code displays — always with an inset shadow.
- **Etch / Etch Lit** (`--etch` #2c352c / `--etch-hi` #49564a): the two engraving line weights. Etch for interior dividers and tick marks; etch-lit for outer borders that catch the light.
- **Text** (`--txt`, #cdd5c8) and **Engraved Dim** (`--dim`, #93a08f): primary prose vs. engraved labels/secondary copy.

### Named Rules
**The Flat Ink Rule.** No decorative gradients, ever. `repeating-linear-gradient` is permitted only to draw tick scales and 45° hatching — engraved marks with hard 1px edges, never a tonal blend.

**The One Phosphor Rule.** Only amber glows. `--glow` appears on amber text readouts, the MISURA keycap, and the input focus halo — nowhere else. Mint, magenta, blue, and alarm are always matte.

**The Channel Ink Rule.** A sequence owns its ink everywhere it appears: heading chip, card top-border (2px solid), report mark, dial marker, legend dot. Attivazione = amber (CH·1), Venere = magenta (CH·2), Perla = blue (CH·3).

**The Stepped Opacity Rule.** Intensity and phase are drawn as the owning ink at a stepped opacity — never as a new hex. The personal-cycles timeline draws the three Venus-cycle phases as magenta (#e2a3da) at opacity 0.85 / 0.55 / 0.3 and the three Line-6 life phases as amber (#ffb454) fills at 0.25 / 0.5 / 0.8 inside a 1px amber-dimmed outline; the almanac's current-ingress row tints its cells with amber at 7% (`rgba(255,180,84,.07)`). Any future "how much / which phase" reading uses the same device: one channel ink, opacity as the scale.

## Typography

**Display Font:** Saira Semi Condensed (with system-ui, sans-serif) — the engraving face
**Body Font:** Libre Franklin (with system-ui, sans-serif) — the technical-manual prose face
**Label/Mono Font:** Azeret Mono (with ui-monospace, monospace) — the readout/measurement face

All three are self-hosted via `holo/fonts.css` + `fonts/*.woff2` (latin, latin-ext, and the subsets each face ships; `font-display: swap`). No external font requests.

**Character:** every string belongs to exactly one of three material registers — engraved into the panel (Saira, always uppercase, always letter-spaced), lit on a display (Azeret Mono, often amber, `font-variant-numeric: tabular-nums` in tables), or printed in the manual (Libre Franklin, the only register that is not uppercase).

### Hierarchy
- **Display** (700, clamp(30px, 6.4vw, 54px), lh 1.04, tracking .12em, uppercase): page titles. One word per title is "lit" amber via `<span class="lit">` with glow — by convention the last word.
- **Engraved heading** (600, 13px, tracking .24em, uppercase): module `h2` headings; always followed by a flexed tick-scale rule (`h2::after`), with the channel chip inlined *inside* the heading when the module belongs to a sequence.
- **Readout** (Azeret Mono 600, 33–34px, lh 1): the big key numbers (`.skey`, `.bigline .num`) in glowing amber; line suffix at 19px in amber-dimmed.
- **Spec line** (Azeret Mono, 10–12px, tracking up to .22em, uppercase): the `MOD. 64 · …` super-titles, tags, hints, birth-data plates, footnotes. This face carries all measured values.
- **Body** (400, 13.5–14px, lh 1.6–1.66): prose, always width-capped at 64–80ch (report paragraphs 76ch).
- **Label** (600, 11px, tracking .18em, uppercase, Saira): form field labels and checkbox labels.

### Named Rules
**The Three Registers Rule.** Saira = engraved (uppercase + tracked, never body copy), Azeret Mono = measured (numbers, specs, tags, plates), Libre Franklin = printed prose (the only lowercase register). Never mix registers within one role.

**The Lit Word Rule.** Exactly one amber-lit word per page title, marked with `.lit` (amber + glow); the rest of the title stays engraved in `--txt`.

## Layout

One centered chassis: `.wrap` at max-width 940px with an etched-lit border, 6px radius, a deep drop shadow (`0 18px 40px rgba(0,0,0,.55)`) and a 1px top inset highlight — the whole site lives inside this single object on the enamel ground. Inside it, a fixed vertical order: `.topbar` (brand plate + nav pills + language selector), `.hero` (title, spec line, sub, tick underline), then stacked `.panel` modules, then `.footnote`.

Rhythm: modules are separated by 22px vertical / 24px horizontal margins; panels pad 20px; cards pad 13–14px with 12–16px grid gaps. At ≤560px the chassis compacts (panel margins 16px 12px, panel padding 15px 13px, hero 22px 14px).

Grids are simple and collapse to one column on mobile: `.sgrid` 2-col → 1 at 660px; `.duo` and `.mini` 2-col → 1 at 700px; `.spectrum` 3-col → 1 and `.linegrid` 2-col → 1 at 640px; index `.front` (dial + text) 2-col → 1 at 760px and `.cards` 3-col → 1 at 700px; the Chiavi library `.kgrid` 2-col → 1 at 720px. Wide tables and wide SVGs (the timeline sets `min-width: 560px`) scroll inside their own `overflow-x: auto` wrapper.

The two catalogue pages (Chiavi, Almanacco) inherit the chassis unchanged: same topbar, hero with tick underline, stacked panels, footnote. Chiavi is one long anchor-addressable grid — every card carries `id="k1"…"k64"` with `scroll-margin-top: 20px` so deep links (`#k37`) land clear of the viewport edge, and cards cross-link (`href="#kNN"`) for the ring partner.

Page-scoped extension styles live in each page's `<style>` block but may only compose the shared tokens (`var(--…)`) — no page introduces new colors, fonts, or radii. `Come si Legge.html` additionally aliases legacy pack names to world inks (`--red:var(--amber); --pink:var(--mag); --blue:var(--blu); --teal:var(--mint); --yellow:var(--amber)`) so language-pack HTML written against the sibling project's palette lands on-world.

## Elevation & Depth

Depth is physical, not atmospheric: elements are either machined *into* the panel or bolted *onto* it. Recessed surfaces (inputs, data plates, code displays, step counters) use `--recess` plus an inset dark shadow (`inset 0 2px 5px rgba(0,0,0,.55–.6)`). Raised surfaces (chassis, panels, index cards) carry a 1px top inset highlight (`inset 0 1px 0 rgba(255,255,255,.04–.05)`) — light catching the top edge of enamel. Nothing floats except two justified cases: the chassis itself (one deep drop shadow against the ground) and the autocomplete dropdown (`0 10px 24px rgba(0,0,0,.6)`), which genuinely hovers over the form.

### Shadow Vocabulary
- **Chassis drop** (`box-shadow: 0 0 0 1px #000, 0 18px 40px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.05)`): `.wrap` only.
- **Recess inset** (`inset 0 2px 5px rgba(0,0,0,.6)`): every input well and recessed plate.
- **Face highlight** (`inset 0 1px 0 rgba(255,255,255,.04)`): panels and cards.
- **Keycap throw** (`0 3px 0 #6b4a17`): the hard offset under `.btn-go` — a mechanical key, collapsing to `0 1px 0` when pressed.
- **Phosphor glow** (`--glow: 0 0 6px rgba(255,180,84,.35)`): amber text-shadow and focus halo; see The One Phosphor Rule.

### Named Rules
**The Machined Depth Rule.** Interactive wells are recessed (inset shadow, `--recess`); structural surfaces are raised (top inset highlight). No ambient drop shadows on interior elements — only the chassis and the autocomplete float.

## Shapes

Near-square engineering radii, stepped by role: chassis 6px → module 4px → control/card 3px → chip/step 2px → dot/tick mark 1px. Never larger; nothing is a pill or a circle in HTML (circles exist only inside SVG dials). Borders are always 1px in one of the two etch values — `--etch-hi` for the outer, light-catching edge, `--etch` for interior dividers. Tick scales (1px marks on a transparent track, repeating every 7–9px) are the world's signature line: under module headings, under the hero, atop the calibrated band, and radially in the dials. 45° hatching (`repeating-linear-gradient(45deg, …)`) is the shadow/alarm texture: dark hatch on the Ombra zone, alarm hatch atop the threshold module.

## Components

### Chassis & Topbar
`.wrap` (see Layout). `.topbar`: module-face plate with the `.brand` (Saira 700, 19px, tracking .34em, uppercase, inline SVG `dialmark` — 22px dial with amber needle), the `.nav` pill group, and the language selector.

### Navigation pills (`.pill`)
- **Shape:** squared group in a shared etched-lit border (group radius 3px, no per-pill radius); pills divided by 1px etch lines.
- **Style:** Saira 600 11.5px tracking .14em uppercase on `--panel-2`, text `--dim`.
- **Hover:** text brightens to `--txt` (no background change). **Active page:** `.on` = amber background, panel-deep text — the lit pushbutton.

### Language selector (`.zlang-picker` / `.zlang-btn`)
Same pushbutton grammar as `.nav` but in Azeret Mono 10.5px; styled in `instrument.css` with `!important` overrides on top of `lang/i18n.js`'s mount. Active language is the amber-lit key. Rendered into `#langPick` by `ZI18N.mount()`.

### Buttons (`.btn-go` — the keycap)
- **Shape:** full-width, 3px radius, 1px border in #6b4a17 (the amber's dark bezel).
- **Primary:** amber on panel-deep text, Saira 700 15px tracking .28em uppercase, padding 13px, `0 3px 0 #6b4a17` throw + glow.
- **Press (`:active`):** `translateY(2px)` and throw collapses to `0 1px 0` — a mechanical key press, instant, no transition.
- **Mode toggle (`.modetoggle`/`.modebtn`)** and language/nav pills reuse the same grammar: grouped squared keys, amber = engaged.

### Inputs (`.inp` — recessed wells)
- **Style:** Azeret Mono 500 15px in amber on `--recess`, 1px etched-lit border, 3px radius, recess inset shadow. Amber caret; placeholder #5d6a5c.
- **Focus:** border turns amber and the glow joins the inset shadow. Global `:focus-visible` is a 1px amber outline, offset 2px.
- **Disabled:** text and border fall to #5d6a5c / `--etch`.
- **Field labels:** the Label register, block, 6px below-gap.
- **Autocomplete (`.ac`)**: floating raised list; hover/selected item inverts to amber with panel-deep text.
- **Hint & OK readout (`.hint`)**: mono 11px dim; a confirmed value is prefixed by the `.ok` chip — the word "OK" in mint inside a 1px mint border, 2px radius. A text readout, not a glyph.
- **Error (`.err`)**: alarm-colored mono line prefixed by a printed ⨯, shown by adding `.show`.

### Cards
- **Sphere card (`.scard`)**: raised face, 3px radius, and a 2px top border in the sequence's channel ink. Contents in fixed order: mono tag row, degree readout pinned top-right, big amber key readout `NN.line`, engraved sphere name, dim description, the calibrated band, essence prose, and a line footer above a 1px etch divider.
- **The calibrated band (`.band`)** — the world's signature: a 1px-etched strip holding a 5px tick scale over three equal zones separated by etch lines. Ombra = 45° dark hatch with `--txt` value; Dono = amber value with glow; Siddhi = mint value. Zone labels in 9px engraved caps. The same three-zone grammar appears standalone in the guide (`.spectrum`/`.spec.o/.d/.s`).
- **Index cards (`.card`)**: panel modules acting as links; a `jack` chip (channel-colored, like the heading chips) inlined with the engraved title, dim prose, and a mono amber `→ ACTION` line. Hover: border warms to `--amber-dn` — no lift, no motion.

### Report dossier (`.rep`)
Raised sheet with 2px channel top-border. Header `h3`: inlined channel chip (`.rep-mark`, e.g. "CH·2"), engraved sphere name, amber mono key label. Below: mono tag row, an amber-dimmed spec row (`ombra · dono · siddhi` words), justified-width prose (76ch), and a dim context paragraph above an etch divider. Sequences open with a `.seqintro` plate; structural findings render as `.structrow` plates with amber-bold key numbers.

The **line-in-sphere plate (`.rep p.lis`)** is the report's highlighted reading: a module-face plate (1px etch border, 3px radius, 9px 12px padding, `--txt` at 13.5px) set inside the raised dossier — one personal line-in-sphere text per sphere, pulled from the `LIS` table of the extra pack (11 spheres × 6 lines = 66 texts per language). The `.structrow` plate is now the report's general finding grammar, reused verbatim by three newer sections: codon rings (ring name bold, essence, mono hit list), the solar-return year (one row per body, quiet rows dimmed), and the live-transits weather panel (one row per transiting body, moon note dimmed below).

### Key library card (`.kcard`, Chiavi)
The catalogue register: a module-face card (1px etch border, 3px radius, 14px 15px padding) in the 2-col `.kgrid`. Fixed anatomy top to bottom: `.khead` baseline row of `.knum` (the key number as a glowing amber readout, mono 600 30px) beside `.kspec` (the ombra·dono·siddhi words in amber-dimmed mono 10.5px caps); the calibrated band, reused unchanged; `.kt` essence in `--txt`; `.klong` long text in `--dim`; and `.kmeta` — a mono footer above a 1px etch divider carrying the codon ring (bold `--txt`) and the amber programming-partner link. It is the sphere card's grammar flattened into a reference table entry: no channel top-border, because a Key in the library belongs to no sequence.

### Almanac today-module (`.todaybox`) & ingress table (`.almrow`)
The today-module is a raised plate whose border is amber-dimmed (`--amber-dn`) — the one panel bordered in the phosphor's resting ink, marking "this is live". Inside, a flexed row: the `.badge` chip (OGGI — amber background, panel-deep mono text, 2px radius: the channel-chip grammar promoted to a state badge), the glowing amber `.tk` readout (mono 600 33px), and a text block with engraved spectrum words and dim prose plus a mono until-date line. Below it, the ICS keycap reuses `.btn-go` unchanged. The year table is a standard `.stable`; each `.almrow` sets its date cell in dim mono, key in amber mono 600, spectrum in dim mono caps — and the current row carries the amber 7% cell tint (see The Stepped Opacity Rule) as the "now" row-tint, state readable from the amber key column even without the tint.

### Personal-cycles timeline SVG
The dial grammar unrolled onto a time axis (inline SVG, `min-width: 560px` inside an `overflow-x:auto` wrap): an etched axis line (#49564a) with 7-year tick marks and mono age numerals every 14 years (#93a08f, 9px); Venus-cycle bands (0–7–14–21) as magenta rects at stepped opacity 0.85/0.55/0.3 stroked panel-deep; Line-6 phase bands (only for line-6 profiles) as amber fills at 0.25/0.5/0.8 inside 1px amber-dimmed outlines; Saturn returns as dashed mint verticals (`stroke-dasharray="3 3"` — the mint stays matte); and the OGGI needle, a 2px amber vertical with its mono label, the only amber stroke on the chart. Band labels ride above their rects in dim mono 8.5px.

### Export grammar (ICS & poster)
An export is always a user press of the amber keycap (`.btn-go`), always built entirely client-side, and always delivered as a Blob download (object URL, `a.click()`, revoke after 5s) — no server, ever. Two shipped exports set the pattern: the almanac's ICS (plain-text VCALENDAR assembled in JS with CRLF lines and escaped fields, localized event names from the pack) and the profile poster (a 1080×1440 canvas that re-draws the dial in the world's token hexes — panel-deep ground, double engraved frame in #49564a/#2c352c, Saira letter-spaced OLOGENETICA header, mono spec lines, the 64-sector dial with channel-colored square markers, and the 11 spheres in three channel-headed columns — after `document.fonts.ready`, saved as `ologenetica-quadrante.png`). The poster is the print of the instrument, not a screenshot: it is rebuilt from tokens at poster scale. During generation the keycap's label swaps to the pack's "making" string and back — text as state, no spinner.

### Unknown-time word-marks (CERTA / VARIABILE)
When birth time is unknown, each sphere's stability over the day is printed as a word-mark from the pack (`DS.certain` = "CERTA" / `DS.variable` = "VARIABILE") appended to the sphere card's mono tag row, with a summary count in the result header. State as a printed word, per the world's state grammar — no icon, no color-only signal.

### Threshold alarm (`.soglia`)
The only alarm module: 1px alarm border, and an 8px header band of 45° alarm hatching (the printed sign) above an alarm-colored engraved heading and normal prose. Used when a birth-time is within minutes of changing a sphere.

### Calibration tables (`.stable`)
Full-width, collapsed borders: engraved 10.5px header row over an etched-lit rule; rows divided by 1px etch; first column engraved caps; key labels in amber mono with `tabular-nums`; wrapped in an `overflow-x:auto` container.

### Dial & meter SVG grammar
All instrument graphics are inline SVG built from the same vocabulary, with token values hardcoded as hex (SVG does not read the custom properties): bezel ring #0d110d stroked #49564a; faces #121712 / #0b0f0b stroked #2c352c; 64 radial sector lines with 5 minor ticks each in #2c352c; sector numerals in Azeret Mono 6.6–7px #93a08f; needles and value text in #ffb454 (600 weight); sphere markers as 6.8px squares filled with the channel ink and stroked #0b0f0b; a central hub circle with the amber "64 / KEYS" readout. The compatibility galvanometer (`meterSVG`) is the same grammar bent into a half-dial: 0–100 arc, major ticks every 25 in #93a08f, amber needle and score. Widths are fluid (`width:100%; max-width:340–380px`).

### Footnote (`.footnote`)
Mono 10.5px dim above a 1px etch rule; links in amber with an amber-dimmed underline; hover adds the glow.

## Do's and Don'ts

### Do:
- **Do** compose every new surface from `holo/instrument.css` tokens; page-scoped `<style>` blocks may extend the world but only via `var(--…)` — no new hex values, fonts, or radii.
- **Do** inline channel chips and jack chips *inside* their headings (`h2`/`h3`/`.card h3`), never as detached badges (finish-review fix, kept).
- **Do** print state as a mark plus color: the mint-bordered "OK" text chip, the ⨯ error prefix, the hatched alarm band, the hatched Ombra zone. A future state needs its printed sign designed before its color.
- **Do** route every user-facing string through the language packs (`window.HOLO_LANGS` via `holo/keys.XX.js`, `window.HOLO_GUIDE` via `holo/guide.XX.js`, `window.HOLO_EXTRA` via `holo/extra.XX.js` — the LIS/rings/timeline/almanac/poster layer — plus per-page `UI` dicts) and re-render on the `zlangchange` event from `lang/i18n.js` — no hardcoded single-language UI text, IT/EN/FR/ES/PT-BR all first-class. Engine code (`holo/engine.js`) stays language-free: it returns ids and numbers; packs supply every word.
- **Do** self-host all fonts through `holo/fonts.css` + `fonts/*.woff2`; no external font or asset requests (the site also ships `noindex` on every page).
- **Do** keep prose width-capped (64–80ch) and give any wide element its own `overflow-x:auto` container.
- **Do** draw new instrument graphics in the established SVG grammar (etched circles, radial ticks, mono numerals, amber needle, square channel markers) using the token hex values; time-based charts follow the timeline's axis grammar (etched line, 7-year ticks, phase bands per The Stepped Opacity Rule, amber OGGI needle).
- **Do** register every new page in the PWA layer: link `manifest.json` and the icons, set `<meta name="theme-color" content="#0b0f0b">`, and add the page (and any new assets) to the `CORE` list in `sw.js`, bumping its cache version (`holo-vN`). The service worker is cache-first, same-origin GET only, registered https-only from `lang/i18n.js`; a surface missing from `CORE` breaks the offline instrument. Shipped raster icons carry their provenance in a PNG `tEXt` chunk.
- **Do** keep every export user-triggered from the amber keycap and fully client-side (Blob + object URL, revoked after use): ICS as plain text, posters as canvas re-drawn from world tokens after `document.fonts.ready`. No export ever contacts a server.

### Don't:
- **Don't** animate. No CSS `animation`, no `transition`, anywhere — state changes are instantaneous, like a real switch. This is a hard product constraint, not a style preference.
- **Don't** use gradients as color. Repeating tick/hatch patterns are the only permitted gradients; any tonal blend breaks the enamel.
- **Don't** glow anything but amber, and only via `--glow`; mint, magenta, blue, and alarm stay matte.
- **Don't** use glyph icons or emoji as UI signs; the world's signs are typographic (OK, ⨯, →, ·, CH·1) or drawn SVG instruments. (The ✓ glyph was removed in the finish review.)
- **Don't** exceed the radius ladder (6/4/3/2/1px); no pills, no circles in HTML.
- **Don't** invent a new hex for intensity, phase, or "current" states — scale the owning channel ink by opacity instead (The Stepped Opacity Rule). New opacities may be chosen; new colors may not.
- **Don't** revert to the anti-references: no starry-sky/gold-serif astro styling, no comic-pop (`zodiac-zine`) elements, no heart/quiz iconography on the compatibility surface.
