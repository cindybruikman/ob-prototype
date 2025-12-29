"use client";

import { useState } from "react";
import { MapPin, Clock, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { Article } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ArticleContentProps {
  article: Article;
}

type ViewMode = "keypoints" | "summary" | "full";

export function ArticleContent({ article }: ArticleContentProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("full");

  return (
    <div className="mx-auto w-full max-w-[808px] px-4 space-y-6">
      {/* Hero Image */}
      {article.imageUrl && (
        <div className="relative overflow-hidden rounded-xl bg-secondary">
          {/* OB ratio: 808x424 */}
          <div className="relative aspect-[808/424]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Meta Info */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-foreground leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {article.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.publishedAt}
            {article.updatedAt && ` • ${article.updatedAt}`}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2" type="button">
            <Volume2 className="w-4 h-4" />
            Lees voor
          </Button>
          <Badge variant="outline">NL</Badge>
        </div>
      </div>

      {/* View Mode Tabs */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Kies jouw versie</span>
        </div>
        {/*TEST */}

        <div className="space-y-2">
          <div className="inline-flex rounded-xl border border-white p-1">
            {/* Kernpunten */}
            <button
              onClick={() => setViewMode("keypoints")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors text-white",
                viewMode === "keypoints" ? "bg-primary" : "hover:bg-white/5"
              )}
            >
              Kernpunten
            </button>

            {/* Samenvatting */}
            <button
              onClick={() => setViewMode("summary")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors text-white",
                viewMode === "summary" ? "bg-primary" : "hover:bg-white/5"
              )}
            >
              Samenvatting
            </button>

            {/* Volledig artikel */}
            <button
              onClick={() => setViewMode("full")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors text-white",
                viewMode === "full" ? "bg-primary" : "hover:bg-white/5"
              )}
            >
              Geheel artikel
            </button>
          </div>
        </div>

        {/*TEST */}

        {/* <div className="flex gap-2">
          <Button
            variant={viewMode === "keypoints" ? "pillActive" : "pill"}
            size="pill"
            onClick={() => setViewMode("keypoints")}
            type="button"
          >
            Kernpunten
          </Button>
          <Button
            variant={viewMode === "summary" ? "pillActive" : "pill"}
            size="pill"
            onClick={() => setViewMode("summary")}
            type="button"
          >
            Samenvatting
          </Button>
          <Button
            variant={viewMode === "full" ? "pillActive" : "pill"}
            size="pill"
            onClick={() => setViewMode("full")}
            type="button"
          >
            Volledig artikel
          </Button>
        </div> */}
      </div>

      {/* Content Based on View Mode */}
      <div className="space-y-4">
        {viewMode === "keypoints" && (
          <ul className="space-y-3">
            {article.keyPoints.map((point, index) => (
              <li key={index} className="flex gap-3 text-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {viewMode === "summary" && (
          <p className="text-foreground leading-relaxed">{article.summary}</p>
        )}

        {viewMode === "full" && (
          <div className="prose prose-invert max-w-none">
            {article.fullContent.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
