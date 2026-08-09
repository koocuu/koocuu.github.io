import travelSource from '@data/travel.json';

export const TRAVEL_SCHEMA_VERSION = 1;

export type TravelKind = 'travel' | 'live' | 'work' | 'transit';
export type DatePrecision = 'day' | 'month' | 'year';

export interface TravelPlace {
  id: string;
  name: string;
  city: string;
  country: string;
  lat?: number;
  lng?: number;
  visited: string;
  date_precision: DatePrecision;
  kind: TravelKind;
  note: string;
  photo?: string;
}

interface TravelSource {
  schema_version?: unknown;
  places?: unknown;
}

const source = travelSource as TravelSource;

if (source.schema_version !== TRAVEL_SCHEMA_VERSION) {
  console.warn(
    `[travel] schema_version is ${String(source.schema_version)}; expected ${TRAVEL_SCHEMA_VERSION}. Continuing with compatible records.`,
  );
}

const validKinds = new Set<TravelKind>(['travel', 'live', 'work', 'transit']);
const validPrecisions = new Set<DatePrecision>(['day', 'month', 'year']);

function parsePlace(value: unknown): TravelPlace | null {
  if (!value || typeof value !== 'object') return null;
  const place = value as Record<string, unknown>;
  const required = ['id', 'name', 'city', 'country', 'visited', 'note'] as const;

  if (required.some((key) => typeof place[key] !== 'string')) {
    console.warn('[travel] Skipping a record with missing required text fields.');
    return null;
  }

  if (!validKinds.has(place.kind as TravelKind) || !validPrecisions.has(place.date_precision as DatePrecision)) {
    console.warn(`[travel] Skipping ${String(place.id)} because kind or date_precision is invalid.`);
    return null;
  }

  const hasCoordinates = Number.isFinite(place.lat) && Number.isFinite(place.lng);

  return {
    id: place.id as string,
    name: place.name as string,
    city: place.city as string,
    country: place.country as string,
    visited: place.visited as string,
    date_precision: place.date_precision as DatePrecision,
    kind: place.kind as TravelKind,
    note: place.note as string,
    ...(hasCoordinates ? { lat: place.lat as number, lng: place.lng as number } : {}),
    ...(typeof place.photo === 'string' ? { photo: place.photo } : {}),
  };
}

export const travelPlaces = (Array.isArray(source.places) ? source.places : [])
  .map(parsePlace)
  .filter((place): place is TravelPlace => place !== null)
  .sort((a, b) => b.visited.localeCompare(a.visited));

export const travelPlacesByYear = Object.entries(
  travelPlaces.reduce<Record<string, TravelPlace[]>>((years, place) => {
    const year = place.visited.slice(0, 4) || '未知';
    (years[year] ??= []).push(place);
    return years;
  }, {}),
).sort(([a], [b]) => b.localeCompare(a));

export const mappableTravelPlaces = travelPlaces.filter(
  (place): place is TravelPlace & { lat: number; lng: number } =>
    typeof place.lat === 'number' && typeof place.lng === 'number',
);
