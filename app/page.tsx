import { NewsCard } from "@/components/news/NewsCard";
import { Cloud, MapPin, MessageCircle, Search } from "lucide-react";
import { BottomNav } from "@/components/layout/BottomNav";
import { backendMockArticles } from "@/lib/mockDataBackend";
import { mapBackendToUI } from "@/lib/mapBackendToUI";

export default function Home() {
  const articles = backendMockArticles.map(mapBackendToUI);
  const heroArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-card sticky top-0 z-40 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-foreground">Nieuws</span>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="text-sm">Moerdijk</span>
          <span className="text-sm">Carnaval</span>
          <Search className="h-5 w-5" />
        </div>
      </header>

      {/* Hero */}
      <div className="px-4 pt-2">
        {heroArticle ? (
          <NewsCard
            article={heroArticle}
            variant="hero"
            // Home eisen:
            showLocation={false}
            showSummary={false}
            showDate={false}
          />
        ) : null}
      </div>

      {/* Quick Stats */}
      <div className="flex justify-around py-4 border-b border-border mx-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Cloud className="h-4 w-4" />
          <span>6°C</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>291 km</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageCircle className="h-4 w-4" />
          <span>App ons</span>
        </div>
      </div>

      {/* Compact list (thumbnail + titel only) */}
      <div className="px-4 space-y-3 py-4">
        {restArticles.map((article) => (
          <NewsCard
            key={article.id}
            article={article}
            variant="compact"
            showLocation={false}
            showSummary={false}
            showDate={false}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
