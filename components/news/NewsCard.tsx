import Link from "next/link";
import { MapPin } from "lucide-react";
import { Article } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/article/${article.id}`} className="block">
      <article className="bg-card rounded-lg overflow-hidden border border-border hover:border-muted transition-colors">
        {article.imageUrl && (
          <div className="aspect-video bg-secondary">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {article.location}
            </span>

            {article.isNew && (
              <Badge variant="default" className="text-xs">
                Nieuw
              </Badge>
            )}

            {article.isTrending && (
              <Badge
                variant="secondary"
                className="text-xs bg-primary/20 text-primary border-0"
              >
                Trending
              </Badge>
            )}
          </div>

          <h2 className="font-semibold text-foreground leading-tight line-clamp-2">
            {article.title}
          </h2>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.summary}
          </p>

          <div className="text-xs text-muted-foreground">
            {article.publishedAt}
          </div>
        </div>
      </article>
    </Link>
  );
}
