import type { BackendArticle } from "@/lib/mockDataBackend";
import { formatDutchDate } from "@/lib/date";
import type { ContentBlock } from "@/lib/mockDataBackend";

export type UIArticle = {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  fullContent: string;
  location: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  isNew?: boolean;
  isTrending?: boolean;
  aiSummaryBlocks?: ContentBlock[];
  updatedAt: string;
};

function pickString(...values: Array<unknown>): string {
  for (const v of values) {
    if (typeof v === "string" && v.trim().length > 0) return v.trim();
  }
  return "";
}

function pickImageUrl(a: any): string {
  // meest voorkomende vormen
  return pickString(
    a?.imageUrl,
    a?.image?.url,
    a?.image?.src,
    a?.image?.variants?.["768x432"],
    a?.image?.variants?.["original"],
    a?.heroImageUrl
  );
}

function pickRegionName(a: any): string {
  // nieuw: support voor array-velden (regionNames / locations)
  const arr =
    (Array.isArray(a?.regionNames) && a.regionNames) ||
    (Array.isArray(a?.regions) && a.regions) ||
    (Array.isArray(a?.locations) && a.locations);

  if (arr && arr.length > 0) {
    return arr
      .filter((x: unknown) => typeof x === "string" && x.trim().length > 0)
      .map((x: string) => x.trim())
      .join(", "); // of " • " als je dat mooier vindt in UI
  }

  // bestaand: string-velden
  return pickString(
    a?.regionName,
    a?.region,
    a?.location,
    a?.region?.name,
    a?.region?.title
  );
}

function pickTheme(a: any): string {
  return pickString(
    a?.theme,
    a?.themeName,
    a?.category,
    a?.categoryName,
    a?.theme?.name
  );
}

function normalizeDateLabel(raw: string): string {
  // voor prototype: laat string zoals backend hem geeft
  // (je kunt later netjes formatteren)
  return raw || "";
}

export function mapBackendToUI(a: BackendArticle): UIArticle {
  const fullContent = (a.contentBlocks ?? [])
    .filter((b) => b.type === "paragraph" || b.type === "quote")
    .map((b) => (b.type === "quote" ? `“${b.text ?? ""}”` : b.text ?? ""))
    .filter(Boolean)
    .join("\n\n");

  const summary = (a.aiSummary ?? [])
    .filter((b: any) => b?.type === "paragraph" || b?.type === "quote")
    .map((b: any) => (b.type === "quote" ? `“${b.text ?? ""}”` : b.text ?? ""))
    .filter(Boolean)
    .join("\n\n");

  return {
    id: a._id,
    title: a.title,
    summary: summary || a.teaser,

    keyPoints: a.aiKeyPoints || [],
    fullContent,
    location: pickRegionName(a) || "Onbekende regio",
    category: pickTheme(a) || "Onbekend thema",
    imageUrl: a.imageUrl ?? "",
    publishedAt: formatDutchDate(a.createdAt),
    updatedAt: "", // ✅ toevoegen (of formatDutchDate(a.createdAt))
    isTrending: false,
    isNew: false,
  };
}
