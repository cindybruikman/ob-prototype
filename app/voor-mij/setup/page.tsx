"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto w-full max-w-lg space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Setup</h1>
        <p className="text-muted-foreground">
          Stel eerst je locaties en radius in om de Voor mij-pagina te
          gebruiken.
        </p>

        <Link href="/location">
          <Button className="w-full" size="lg">
            Ga naar locatie-instellingen
          </Button>
        </Link>
      </div>
    </div>
  );
}
