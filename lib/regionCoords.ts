export const REGION_COORDS: Record<string, { lat: number; lng: number }> = {
  Tilburg: { lat: 51.5606, lng: 5.0919 },
  Eindhoven: { lat: 51.4416, lng: 5.4697 },
  Breda: { lat: 51.5719, lng: 4.7683 },
  Waalwijk: { lat: 51.6826, lng: 5.0703 },
  // voeg hier jouw regio’s toe
};

export function getCoordsForRegion(name: string) {
  return REGION_COORDS[name] ?? null;
}
