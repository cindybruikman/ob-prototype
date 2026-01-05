import Link from "next/link";
import { Newspaper, Trophy, Lightbulb, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPreferences } from "@/lib/preferences";

interface RecapArticle {
  id: string;
  region: string;
  title: string;
  subtitle: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface RecapCardProps {
  category: string;
  icon: "news" | "sport" | "business";
  articles: RecapArticle[];
}

const iconMap: Record<string, LucideIcon> = {
  news: Newspaper,
  sport: Trophy,
  business: Lightbulb,
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function RecapCard({ category, icon, articles }: RecapCardProps) {
  const Icon = iconMap[icon] ?? Newspaper;

  const prefs = getPreferences();

  const filtered = (() => {
    // ✅ Live locatie aan → filter op current plaatsnaam
    if (prefs.useCurrentLocation) {
      const current = prefs.savedLocations.find((l) => l.id === "current");
      const currentName = current?.name?.trim();
      if (!currentName) return articles;

      const target = normalize(currentName);
      return articles.filter((a) => normalize(a.region).includes(target));
    }

    // ✅ Anders: filter op gekozen regio's (source === "region")
    const picked = prefs.savedLocations
      .filter((l) => l.source === "region")
      .map((l) => l.name);

    if (picked.length === 0) return articles;

    const pickedNorm = picked.map(normalize);
    return articles.filter((a) => {
      const r = normalize(a.region);
      return pickedNorm.some((p) => r.includes(p));
    });
  })();

  return (
    <section className="bg-card rounded-xl p-4 space-y-4 border border-border">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-foreground">{category}</h3>
      </div>

      <div className="space-y-4">
        {filtered.map((article) => (
          <div key={article.id} className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-foreground">
                {article.region}
              </span>
              <span className="text-muted-foreground">–</span>
              <span className="text-foreground">{article.title}</span>

              {article.isNew && (
                <span className="border border-white/30 text-white text-xs px-2 py-0.5 rounded-full">
                  Nieuw
                </span>
              )}

              {article.isTrending && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  Trending
                </span>
              )}
            </div>

            <p className="text-sm text-muted-foreground italic line-clamp-2">
              {article.subtitle}
            </p>

            <Link href={`/article/${article.id}`}>
              <Button variant="outline" size="sm" className="mt-2">
                Lees verder
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
