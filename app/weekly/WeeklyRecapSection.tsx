import Link from "next/link";
import { Newspaper, Trophy, Briefcase } from "lucide-react";

import { WeeklyRecapCategory } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface WeeklyRecapSectionProps {
  category: WeeklyRecapCategory;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  newspaper: Newspaper,
  trophy: Trophy,
  briefcase: Briefcase,
};

export function WeeklyRecapSection({ category }: WeeklyRecapSectionProps) {
  const Icon = iconMap[category.icon] || Newspaper;

  return (
    <section className="bg-card rounded-lg border border-border p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">{category.name}</h2>
      </div>

      <div className="space-y-4">
        {category.articles.map((article) => (
          <div key={article.id} className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-primary font-medium">
                {article.location}
              </span>
              <span className="text-muted-foreground">–</span>
              <span className="text-foreground flex-1">{article.title}</span>

              {article.isNew && (
                <Badge variant="default" className="shrink-0 text-xs">
                  Nieuw
                </Badge>
              )}

              {article.isTrending && (
                <Badge
                  variant="secondary"
                  className="shrink-0 text-xs bg-primary/20 text-primary border-0"
                >
                  Trending
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.summary}
            </p>

            <Link href={`/article/${article.id}`}>
              <Button variant="outline" size="sm" type="button">
                Lees verder
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
