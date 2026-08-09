import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const dataPath = fileURLToPath(new URL('../src/data/travel.json', import.meta.url));
const emailArg = process.argv.find((arg) => arg.startsWith('--email='))?.slice('--email='.length);
const contactEmail = emailArg || process.env.NOMINATIM_EMAIL;

if (!contactEmail) {
  console.error('请通过 --email=you@example.com 或 NOMINATIM_EMAIL 提供 Nominatim User-Agent 联系邮箱。');
  process.exit(1);
}

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const data = JSON.parse(await readFile(dataPath, 'utf8'));
const unresolved = [];
let requested = 0;

for (const place of data.places ?? []) {
  if (Number.isFinite(place.lat) && Number.isFinite(place.lng)) continue;
  if (requested > 0) await sleep(1100);

  const query = [place.name, place.city, place.country].filter(Boolean).join(', ');
  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('q', query);
  url.searchParams.set('format', 'jsonv2');
  url.searchParams.set('limit', '1');

  console.log(`[travel] 查询：${query}`);
  requested += 1;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': `koocuu-travel/1.0 (${contactEmail})`,
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.7',
      },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const [result] = await response.json();

    if (!result) {
      unresolved.push(`${place.id}: ${query}`);
      continue;
    }

    place.lat = Number.parseFloat(result.lat);
    place.lng = Number.parseFloat(result.lon);
    await writeFile(dataPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  } catch (error) {
    unresolved.push(`${place.id}: ${query} (${error instanceof Error ? error.message : String(error)})`);
  }
}

if (unresolved.length) {
  console.warn('\n待手动补坐标或退一级查询：');
  unresolved.forEach((item) => console.warn(`- ${item}`));
}

console.log(`[travel] 完成：请求 ${requested} 条，待补 ${unresolved.length} 条。`);
