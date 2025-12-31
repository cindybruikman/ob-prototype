"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TestApiButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleTestCall = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:8000/users/test", {
        method: "GET",
      });

      const text = await res.text();

      setResult(`✅ Succes (${res.status}): ${text}`);
      console.log("API response:", text);
    } catch (err) {
      console.error(err);
      setResult("❌ Fout bij API call (check backend)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button onClick={handleTestCall} disabled={loading}>
        {loading ? "Testen…" : "Test backend API"}
      </Button>

      {result && (
        <p className="text-sm text-muted-foreground break-all">{result}</p>
      )}
    </div>
  );
}
