// main.ts — entry program for the news-image-20261126 bounty (v2 rebuild).
// The image is a finished 1024x1024 PNG built in this repository
// (drawn with Python + Pillow from structured story data; see
// NEWS-IMAGE-26-V2-BUILD.md for the build notes).
// This program only copies that image to the output directory,
// so both runs write byte-identical output. Node stdlib only,
// no network, no environment reads beyond the output directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
