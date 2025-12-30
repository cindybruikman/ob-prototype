import { NewsCard } from "@/components/news/NewsCard";
import { Cloud, MapPin, MessageCircle, Search } from "lucide-react";
import { BottomNav } from "@/components/layout/BottomNav";
import { backendMockArticles } from "@/lib/mockDataBackend";
import { mapBackendToUI } from "@/lib/mapBackendToUI";
import Image from "next/image";

export default function Home() {
  const articles = backendMockArticles.map(mapBackendToUI);
  const heroArticle = articles[0];
  const restArticles = articles.slice(1);

  const containerClass = "mx-auto w-full max-w-[808px] px-4";

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div
          className={containerClass + " flex items-center justify-between py-3"}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/img/logo-ob.png"
              alt="Omroep Brabant"
              width={45}
              height={45}
              className="h-8 w-auto"
              priority
            />
          </div>

          <div className="relative flex items-center">
            {/* Rode flap */}
            <div
              aria-hidden
              className="
      absolute
      -right-12
      -top-10
      w-24
      h-20
      bg-[#e00]
      rounded-2xl
      rotate-[-20deg]
      z-0
    "
            />

            {/* Search icon */}
            <button
              type="button"
              className="
      relative
      z-10
      w-10
      h-10
      flex
      items-center
      justify-center
      text-white
      hover:opacity-90
      transition
    "
              aria-label="Zoeken"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="pt-2">
        {heroArticle ? (
          <NewsCard
            article={heroArticle}
            variant="hero"
            showLocation={false}
            showSummary={false}
            showDate={false}
          />
        ) : null}
      </div>

      {/* Quick Stats (ook constrained) */}
      <div className={containerClass + " py-4 border-b border-border"}>
        <div className="flex justify-around">
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
      </div>

      {/* List */}
      {/* List (constrained) */}
      <div className={containerClass + " py-4 space-y-3"}>
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
