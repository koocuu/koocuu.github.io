export interface NowSection {
  title: string;
  body: string;
}

export interface NowPageData {
  season: string;
  sections: NowSection[];
  ok: boolean;
}

const FALLBACK: NowPageData = {
  season: '',
  sections: [],
  ok: false,
};

const nowFiles = import.meta.glob('../data/now/current.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    if (key) data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function parseSections(body: string): NowSection[] {
  const parts = body.split(/^##\s+/m).map((p) => p.trim()).filter(Boolean);
  const sections: NowSection[] = [];
  for (const part of parts) {
    const nl = part.indexOf('\n');
    if (nl === -1) {
      sections.push({ title: part.trim(), body: '' });
      continue;
    }
    sections.push({
      title: part.slice(0, nl).trim(),
      body: part.slice(nl + 1).trim(),
    });
  }
  return sections.filter((s) => s.title);
}

/** Read /now content from the static file Console syncs into. Never throws. */
export function loadNowPage(): NowPageData {
  try {
    const raw = Object.values(nowFiles)[0];
    if (!raw || typeof raw !== 'string') return FALLBACK;
    const { data, body } = parseFrontmatter(raw);
    const season = data.season?.trim() ?? '';
    const sections = parseSections(body);
    if (!season || sections.length === 0) return FALLBACK;
    return { season, sections, ok: true };
  } catch {
    return FALLBACK;
  }
}
