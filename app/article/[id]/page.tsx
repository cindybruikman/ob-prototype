"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { toast } from "sonner";

import { ArticleContent } from "@/components/news/ArticleContent";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";

import { backendMockArticles } from "@/lib/mockDataBackend";
import { mapBackendToUI } from "@/lib/mapBackendToUI";

export default function ArticlePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  // ✅ Gebruik de gemapte UI-artikelen (die hebben "id", "summary", "keyPoints", etc.)
  const article = useMemo(() => {
    const id = params?.id;
    if (!id) return null;

    const uiArticles = backendMockArticles.map(mapBackendToUI);
    return uiArticles.find((a) => a.id === id) ?? null;
  }, [params?.id]);

  const handleShare = async () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";

      if (navigator?.clipboard && url) {
        await navigator.clipboard.writeText(url);
      }

      toast("Link gekopieerd", {
        description: "De link naar dit artikel is gekopieerd naar je klembord.",
      });
    } catch {
      toast("Delen lukt niet", {
        description: "Kopiëren naar klembord is niet gelukt op dit apparaat.",
      });
    }
  };

  const handleBookmark = () => {
    toast("Artikel opgeslagen", {
      description: "Artikel toegevoegd aan je opgeslagen artikelen.",
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Artikel niet gevonden</p>
          <Button onClick={() => router.push("/")}>Terug naar home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleBookmark}>
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare}>
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-4">
        {/* ✅ propnaam is "article", niet "articles" */}
        <ArticleContent article={article} />
      </main>

      <BottomNav />
    </div>
  );
}
