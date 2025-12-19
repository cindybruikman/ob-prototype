import { PageHeader } from "@/components/layout/PageHeader";
import { LocationSelector } from "@/components/location/LocationSelector";
import { BottomNav } from "@/components/layout/BottomNav";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader
        title="Selecteer jouw locatie(s)"
        subtitle="Deze instellingen bepalen welke artikelen je op de Voor Mij-pagina ziet."
        showBack
      />

      <main className="px-4 py-4">
        <div className="mx-auto w-full max-w-lg">
          <LocationSelector />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
