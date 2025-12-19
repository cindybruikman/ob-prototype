import Link from "next/link";

export default function NotFound() {
  // Je kunt hier eventueel console logging doen
  // (maar meestal niet nodig in Next)

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">
          Oeps! Deze pagina bestaat niet.
        </p>
        <Link
          href="/"
          className="inline-block text-primary underline hover:text-primary/90"
        >
          Terug naar Home
        </Link>
      </div>
    </div>
  );
}
