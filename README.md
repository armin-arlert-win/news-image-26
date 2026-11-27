# news-image-26 v2

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/armin-arlert-win/news-image-26/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/armin-arlert-win/news-image-26/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A one-page newspaper image summing up the world's news of Thursday 26 November 2026 — "THE WORLD IN ONE DAY", a 1024×1024 PNG (285,249 bytes) built for the make.fun news-image-20261126 bounty. This is a v2 rebuild of the v1 entry: same three leads, redrawn with Python + Pillow as full scenes (not number strips), with the copy fixes from the top-5 comparison — neutral Kuwait headline with the denial in the art, grain ships back in the Kyiv copy, and AP storm figures (60 mph, 600,000+).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=r8j1sy7t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>

---

# THE WORLD IN ONE DAY — Thursday 26 November 2026

One-page newspaper image summing up the world's news of Thursday
26 November 2026, for the make.fun bounty `news-image-20261126`.

## The image

`entry.png` — 1024×1024 PNG, 285,249 bytes. Cream paper, red accents.
Contents:

- Masthead: **Thursday 26 November 2026** (35 stories shown · 8 regions)
- Numbers strip: 113 drones over Ukraine · 600,000+ without power ·
  12,021 Ebola cases · €45BN EU loan for Ukraine · 3.25% Bank of Korea
  rate · 77,000 UK net migration
- Three leads with full drawn scenes: drone strike kills two Italians
  in Kuwait (banner: IRAN DENIES ROLE); 113 drones rain on Kyiv as
  grain ships are hit; 60 mph nor'easter grounds Macy's 100th parade
  (600,000+ without power)
- A 13-pin world map ("WHERE IT HAPPENED"), 10 briefs numbered 4–13,
  and 22 ALSO items numbered 14–35 (40 stories in the data file; the
  layout solver trims ALSO from the bottom so the page fits)
- A DATE CHECK footer listing 17 stories deliberately left out because
  they were not this day's news, plus 4 "Not yet" items
- Sources: Reuters · AP · AFP · ONS · KCNA · Bank of Korea · Bank of
  England · Xinhua · Financial Times · Press Association · IBGE ·
  The Standard · Punch · Carbon Brief · Times Higher Education ·
  CNBC TV18 · CNN · PowerOutage.us

## How it was made

`entry.png` was drawn direct to a pixel canvas with Python + Pillow
from a structured story list (`stories.py`: one dict per story, one
scene-painter per story, hand-drawn continent polygons for the map,
spiral anti-collision map labels). No browser, no network, no AI
photos — every picture is an original drawing. Build scripts and data
are kept outside this repo; see `NEWS-IMAGE-26-V2-BUILD.md`.

## The program

`main.ts` (Node 24, stdlib only, no network) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs write byte-identical output (verified).

## Verification (27 Nov 2026)

- PNG: 1024×1024, 285,249 bytes (< 1 MiB cap, < 350 KB target)
- `main.ts` run twice to two directories: byte-identical (same sha256
  933225ec26e7f628f48f9cb85ee1c7cec0fe3fad476aa0a3b75c094ff88c7941)
- `verify.py`: ALL CHECKS PASSED (file/size/layout, 40 numbered
  stories, 6-figure strip, map labels min gap 17.0 px, no truncated
  headlines); render 2× byte-identical
- 35 stories shown · 8 regions, all first reported 26 Nov 2026;
  DATE CHECK 17 items + "Not yet" (4)
- Legibility at 300 px: masthead, lead headlines, numbers, map and the
  DATE CHECK band all still readable at 300×300; the three leads read
  as three different pictures (explosion, burning city, departures
  board), not three numbers
