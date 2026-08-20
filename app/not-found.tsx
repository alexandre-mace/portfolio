import Link from "next/link"

export default function NotFound() {
  return (
    <div className="font-sans p-4 md:p-10 container mx-auto max-w-3xl flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-base text-muted-foreground">Page introuvable.</p>
      <Link href="/" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors underline-offset-4 text-sm">
        Retour
      </Link>
    </div>
  )
}
