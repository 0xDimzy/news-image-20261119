// news-image-20261119 entry (Node 22, standard library only).
//
// The entry is the rendered front page beside this file, entry.png
// (1024x1024, "The World in One Day — Thursday 19 November 2026").
// This program copies it into the output directory the grader provides
// via MAKEFUN_OUTPUT_DIR, or /output when the variable is unset, and
// prints one summary line. No arguments, no network, no side effects
// beyond that single copy.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = statSync(target).size;
console.log(`news-image-20261119: wrote ${target} (${bytes} bytes)`);
