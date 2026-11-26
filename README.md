# news-image-26

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/armin-arlert-win/news-image-26/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/armin-arlert-win/news-image-26/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A one-page newspaper image summing up the world's news of Thursday 26 November 2026 — "THE WORLD IN ONE DAY", a 1024×1024 PNG (139,779 bytes) built for the make.fun news-image-20261126 bounty.

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

`entry.png` — 1024×1024 PNG, 139,779 bytes. Cream paper, navy masthead,
red accents. Contents:

- Masthead: **Thursday 26 November 2026** (41 stories · 10 regions · 20 fields)
- Numbers strip: 836,000+ without power · 113 drones over Ukraine ·
  12,021 Ebola cases · 77,000 UK net migration · €45BN EU loan for
  Ukraine · 3.25% Bank of Korea rate
- Three leads with flat inline-SVG illustrations (no AI photos):
  Iran drone kills two Italians in Kuwait; 113 drones rain on Kyiv as
  grain ships hit; nor'easter postpones Macy's 100th parade (836,000+
  without power, gusts to 70 mph)
- A 10-pin world map ("WHERE IT HAPPENED"), 10 briefs numbered 4–13,
  and 28 ALSO items numbered 14–41
- A DATE CHECK footer listing 17 stories deliberately left out because
  they were not this day's news (US growth 4.3%, 25 Nov; Cairo tanker
  fire, 25 Nov; Shenzhou-24, 25 Nov; Nile temple, 3 Nov)
- Sources: Reuters · AP · AFP · ONS · KCNA · Bank of Korea · Xinhua ·
  FT · PA · IBGE · The Guardian · Punch · Carbon Brief · THE ·
  CNBC TV18 · ABC · CNN · PowerOutage.us

## How it was made

`page.html` is the hand-written HTML/CSS source of the newspaper
(1024×1024, inline SVG vectors only — drone, map, charts). It was
rendered to `entry.png` with headless Chromium (1024×1100 window,
cropped to 1024×1024 — the headless window's effective viewport is
shorter than requested) and palette-quantized to 256 colours to keep
the file small (tie-break: smaller file wins a tie).

## The program

`main.ts` (Node 24, stdlib only, no network) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs write byte-identical output (verified).

## Verification (27 Nov 2026)

- PNG: 1024×1024, 139,779 bytes (< 1 MiB cap, < 350 KB target)
- `main.ts` run twice to two directories: byte-identical (same sha256
  07a75df9f08e8c9446562d0eda583b3c7a4f578d03fa1a3ee72d7fc32695666b)
- 41 stories · 10 regions · 20 fields, all first reported 26 Nov 2026;
  DATE CHECK 17 items + "Not yet"
- Legibility at 300 px: masthead, lead headlines, numbers, map and the
  DATE CHECK band all still readable at 300×300
