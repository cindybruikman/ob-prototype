import type { BackendArticle } from "@/lib/mockDataBackend";

// Dit is het format dat jouw bestaande UI gebruikt (NewsCard, ArticleContent, etc.)
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
  updatedAt: string;
  isNew?: boolean;
  isTrending?: boolean;
};

export function mapBackendToUI(a: BackendArticle): UIArticle {
  const fullContent = (a.contentBlocks ?? [])
    .filter((b) => b.type === "paragraph" || b.type === "quote")
    .map((b) => (b.type === "quote" ? `“${b.text ?? ""}”` : b.text ?? ""))
    .filter(Boolean)
    .join("\n\n");

  return {
    id: a._id,
    title: a.title,
    summary:
      (Array.isArray(a.aiSummary) ? a.aiSummary.join(" ") : a.aiSummary) ||
      a.teaser,
    keyPoints: a.aiKeyPoints || [],
    fullContent,
    location: a.regionName,
    category: a.theme,
    imageUrl: a.imageUrl ?? "",
    publishedAt: a.createdAt,
    updatedAt: a.updatedAt ?? "",
    isTrending: false,
    isNew: false,
  };
}
