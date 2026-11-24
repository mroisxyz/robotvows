// thinking: deadpan officiant, one line; the joke turns on the final word.
// hello to the couple — this batch of orders has one slot to fill.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised: write the vow exactly once, UTF-8, with no trailing newline.
const vow = 'I take you as my paired device, in good signal and bad, until one of us is discontinued.';

// thinking_revised: resolve the script's own directory; output still follows the env var.
const selfDir = fileURLToPath(new URL('.', import.meta.url));
void selfDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, vow, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(vow, 'utf8')} bytes`);
