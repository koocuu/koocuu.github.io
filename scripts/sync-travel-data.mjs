import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../src/data/travel.json', import.meta.url));
const publicDataDir = fileURLToPath(new URL('../public/data/', import.meta.url));
const destination = fileURLToPath(new URL('../public/data/travel.json', import.meta.url));

await mkdir(publicDataDir, { recursive: true });
await copyFile(source, destination);
console.log('[travel] Synced src/data/travel.json to public/data/travel.json');
