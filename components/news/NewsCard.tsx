import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // alleen als je badges nog gebruikt
import type { UIArticle } from "@/lib/mapBackendToUI";
import Image from "next/image";

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
  const containerClass = "mx-auto w-full max-w-[808px] px-4";

  // ✅ HERO: grote afbeelding boven + titel overlay/look
  if (variant === "hero") {
    return (
      <Link href={`/article/${article.id}`} className="block">
        <div className={containerClass}>
          <article className="bg-card rounded-xl overflow-hidden border border-border">
            {showImage && (
              // OB ratio: 808x424 (≈1.905)
              <div className="relative aspect-[808/424] bg-secondary">
                {hasImg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : null}

                {/* gradient overlay (OB-stijl) */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.8))]" />

                {/* overlay content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end items-start py-6 px-4">
                  <h2 className="text-white font-medium leading-tight text-xl">
                    {article.title}
                  </h2>
                </div>
              </div>
            )}
          </article>
        </div>
      </Link>
    );
  }

  // ✅ COMPACT: kleine thumbnail links + alleen titel (zoals jouw screenshot)
  if (variant === "compact") {
    return (
      <Link href={`/article/${article.id}`} className="block">
        <div className={containerClass}>
          <article className="flex gap-3 rounded-xl p-3">
            {showImage && (
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary shrink-0">
                {hasImg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
            )}

            <div className="min-w-0 flex-1 flex items-center">
              <h3 className="font-medium text-foreground leading-snug line-clamp-2">
                {article.title}
              </h3>

              {showSummary ? (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {article.summary}
                </p>
              ) : null}

              {showLocation || showDate ? (
                <div className="text-xs text-muted-foreground mt-2 flex gap-2 flex-wrap">
                  {showLocation ? <span>{article.location}</span> : null}
                  {showDate ? <span>{article.publishedAt}</span> : null}
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </Link>
    );
  }

  // ✅ DEFAULT (voor bijv. Voor-mij) – jouw “oude” card stijl
  return (
    <Link href={`/article/${article.id}`} className="block">
      <div className={containerClass}>
        <article className="bg-card rounded-lg overflow-hidden border border-border hover:border-muted transition-colors">
          {showImage && hasImg && (
            <div className="aspect-video bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
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
      </div>
    </Link>
  );
}
