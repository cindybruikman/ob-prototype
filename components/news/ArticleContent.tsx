"use client";

import { useState } from "react";
import { MapPin, Clock, Volume2 } from "lucide-react";

import { Article } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ArticleContentProps {
  article: Article;
}

type ViewMode = "keypoints" | "summary" | "full";

export function ArticleContent({ article }: ArticleContentProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("keypoints");

  return (
    <div className="space-y-6">
      {/* Hero Image */}
      {article.imageUrl && (
        <div className="aspect-video bg-secondary rounded-lg overflow-hidden -mx-4 -mt-4">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
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
          <span className="text-sm text-muted-foreground">
            Kies jouw versie
          </span>
        </div>

        <div className="flex gap-2">
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
        </div>
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
