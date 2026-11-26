# NEWS-IMAGE-26 BUILD NOTES — "THE WORLD IN ONE DAY" (Thursday 26 November 2026)

**Target: TOP 1.** Built from the v3 (25 Nov) layout template, all content replaced
with 26 Nov facts. Sources: `news-image-26-scout.md` (35 stories) +
`news-image-26-TOP1-GAP.md` (R1–R8) + `news-image-25-TOP1-RESEARCH.md` (winner formula).

## Final counts (verified against page.html)
- **41 stories** (3 leads + 10 brief cards #4–13 + 28 ALSO #14–41) — 1 over the
  39–40 target, because the 10th region (Oceania) needed a verified Oceania story
  (NSW rail strike, #41). All 41 are numbered 1–41 on the page.
- **10 regions:** Europe 10 · East Asia 7 · North America 6 · Sub-Saharan Africa 5 ·
  Middle East 3 · South Asia 3 · SE Asia 3 · Latin America 2 · Global & Space 1 ·
  Oceania 1 (= 41).
- **20 fields:** War, Weather, Health, Energy, Security, Economy, Finance, Disaster,
  Migration, Diplomacy, Justice, Politics, Culture, Media, Science, Markets, Sport,
  Climate, Trade, Transport.

## 3 leads (each + WHY IT MATTERS, ONGOING badge where unfolding)
1. **Kuwait · War** — IRAN DRONE KILLS TWO ITALIANS IN KUWAIT (REPORTED, Reuters).
   Why: first time the war reaches a Gulf state.
2. **Ukraine · War** — 113 DRONES RAIN ON KYIV AS GRAIN SHIPS HIT (ONGOING, Reuters).
   Why: biggest overnight drone barrage of the war.
3. **United States · Weather** — NOR'EASTER POSTPONES MACY'S 100TH PARADE (ONGOING,
   Reuters · PowerOutage.us). Why: first weather delay in the parade's 100 years.
   Gaza drops to brief #4 (9 killed, CONFIRMED, Reuters).

## Number strip (6)
836,000+ without power · 113 drones over Ukraine · 12,021 Ebola cases ·
77,000 UK net migration · €45BN EU loan for Ukraine · 3.25% Bank of Korea rate.

## Timeline UTC (8 markers)
00:01 AI agents study · 05:29 Ebola passes 12,000 · 07:00 Turkey probe ·
08:37 India–Netflix · 10:30 BoE AI warning · 12:31 UK–EU bill ·
13:16 Kuwait strike reported · 16:30 Stoxx 600 +1.83%.

## What changed vs the scout (35 → 41 stories)
- **+ Storm as lead 3** (GAP 1, biggest gap): nor'easter, gusts to 70 mph
  (Reuters), 836,000+ without power as of 16:06 ET (Reuters / PowerOutage.us),
  400+ flights cancelled, NYC + New Jersey emergencies, Macy's 100th parade
  moved to Sat 28 Nov (first time in 100 years). Gaza → brief #4.
- **+ 4 evening-UTC stories (GAP 2):** de Cos → ECB chief (brief #9);
  Bangkok refinery blast, 9 injured (brief #10); Guinea-Bissau junta delays
  vote to Nov 2028 (ALSO #39); Trump urges Putin to 'pull back' (ALSO #40).
- **+ NSW rail strike suspended (ALSO #41):** verified 26 Nov (ABC / Transport
  NSW) — gives the 10th region (Oceania).
- **+ WHY IT MATTERS** on all 3 leads; **ONGOING** badge on Kyiv + Storm;
  **DATE CHECK 17 items + Not yet** (deepest of the top 6); fields 15→20,
  regions 8→10 (Africa split Sub-Saharan; + Global & Space, + Oceania);
  strip revised per R4; timeline extended to 16:30 per R5.
- **DATE CLEAN kept:** no 25 Nov story is a main story. New DATE CHECK items:
  Israel chemical-arms allegation (24 Nov) and Nile temple found from space
  (3 Nov — Gizmodo published 3 Nov; the 26 Nov CNN piece is a repackaging,
  so it is NOT a main story). Macy's postponement is listed as announced
  25 Nov while the storm itself is the 26 Nov lead — the announcement and the
  storm are different events, no contradiction.

## Verification (all passed)
- **Gaza toll re-verified this morning:** 9 (Reuters headline "Israel kills
  nine in Gaza…"), not AP's 8 — 9 is used, sourced REUTERS.
- **Storm outage re-verified:** 836,000+ (Reuters, 4:06 p.m. ET) used in lead
  art + strip; 600,000+ was the midday figure.
- **Nile temple checked and REJECTED as a main story** (published 3 Nov).
- **NSW rail strike checked and INCLUDED** (Fair Work ruling delayed 26 Nov, ABC).
- Render: headless Chromium → 1024×1024 crop → palette-quantize (256 colours).
- **entry.png: 139,779 bytes, 1024×1024, sha256
  07a75df9f08e8c9446562d0eda583b3c7a4f578d03fa1a3ee72d7fc32695666b.**
- **Render 2× byte-identical** (same sha256 both runs).
- **main.ts runs 2× byte-identical** and matches entry.png exactly.
- Viewed full-size: footer + DATE CHECK + sources fully visible (lowest
  non-background row 1019/1024, 4px margin); no badge overlaps, no clipped
  text, no garbled text. Viewed at 300px: date, headlines, numbers, lead art,
  map and DATE CHECK block all legible as a newspaper front page.
- First render overflowed (footer cut off) — fixed by shortening lead/card
  copy to 2 lines, shortening ALSO items, and trimming paddings; second render
  fits with margin.

## Files in this directory
- `page.html` — the page (rendered to entry.png).
- `entry.png` — the deliverable image.
- `main.ts` — copies entry.png to the output dir (Node stdlib only, no network).
- `LICENSE` — kit starter licence (OSI).
- `render.py` — build helper (render page.html → entry.png); not part of the entry.
