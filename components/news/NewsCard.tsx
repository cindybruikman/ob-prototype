import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // alleen als je badges nog gebruikt
import type { UIArticle } from "@/lib/mapBackendToUI";

type Variant = "hero" | "compact" | "default";

interface NewsCardProps {
  article: UIArticle;
  variant?: Variant;

  // hiermee kun je per pagina dingen uitzetten
  showImage?: boolean;
  showLocation?: boolean;
  showSummary?: boolean;
  showDate?: boolean;
}

export function NewsCard({
  article,
  variant = "default",
  showImage = true,
  showLocation = true,
  showSummary = true,
  showDate = true,
}: NewsCardProps) {
  // helper: image fallback
  const hasImg = Boolean(article.imageUrl);

  // ✅ HERO: grote afbeelding boven + titel overlay/look
  if (variant === "hero") {
    return (
      <Link href={`/article/${article.id}`} className="block">
        <article className="bg-card rounded-xl overflow-hidden border border-border">
          {showImage && (
            <div className="relative aspect-[16/10] bg-secondary">
              {hasImg ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : null}

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-xl font-medium text-white leading-tight">
                  {article.title}
                </h2>
              </div>
            </div>
          )}
        </article>
      </Link>
    );
  }

  // ✅ COMPACT: kleine thumbnail links + alleen titel (zoals jouw screenshot)
  if (variant === "compact") {
    return (
      <Link href={`/article/${article.id}`} className="block">
        <article className="flex gap-3 bg-card rounded-xl border border-border p-3">
          {showImage && (
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary shrink-0">
              {hasImg ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-foreground leading-snug line-clamp-2">
              {article.title}
            </h3>

            {/* Home wil dit niet, maar compact variant kan elders wel */}
            {showSummary && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {article.summary}
              </p>
            )}

            {(showLocation || showDate) && (
              <div className="text-xs text-muted-foreground mt-2 flex gap-2 flex-wrap">
                {showLocation ? <span>{article.location}</span> : null}
                {showDate ? <span>{article.publishedAt}</span> : null}
              </div>
            )}
          </div>
        </article>
      </Link>
    );
  }

  // ✅ DEFAULT (voor bijv. Voor-mij) – jouw “oude” card stijl
  return (
    <Link href={`/article/${article.id}`} className="block">
      <article className="bg-card rounded-lg overflow-hidden border border-border hover:border-muted transition-colors">
        {showImage && hasImg && (
          <div className="aspect-video bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-4 space-y-3">
          {(showLocation || article.isNew || article.isTrending) && (
            <div className="flex items-center gap-2 flex-wrap">
              {showLocation ? (
                <span className="text-xs text-muted-foreground">
                  {article.location}
                </span>
              ) : null}

              {article.isNew ? (
                <Badge variant="default" className="text-xs">
                  Nieuw
                </Badge>
              ) : null}

              {article.isTrending ? (
                <Badge
                  variant="secondary"
                  className="text-xs bg-primary/20 text-primary border-0"
                >
                  Trending
                </Badge>
              ) : null}
            </div>
          )}

          <h2 className="font-semibold text-foreground leading-tight line-clamp-2">
            {article.title}
          </h2>

          {showSummary ? (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.summary}
            </p>
          ) : null}

          {showDate ? (
            <div className="text-xs text-muted-foreground">
              {article.publishedAt}
            </div>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
