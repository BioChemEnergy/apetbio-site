export default function NewsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <img
          src="/apetbio-logo.png"
          alt="Logo ApetBio"
          className="h-20 mb-6"
        />
        <h1 className="text-4xl font-bold mb-8">Novinky</h1>
      </header>

      <section aria-label="Projektové nástroje">
        <a
          href="https://umbaja.github.io/Mapa-producentv/"
          className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold text-center rounded-xl hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          Databáza odpadovej biomasy KPB2
        </a>
      </section>

      <nav className="mt-8" aria-label="Navigácia späť">
        <a href="/" className="text-green-700 underline hover:text-green-800">
          Späť na úvodnú stránku
        </a>
      </nav>

      <footer className="mt-16 border-t pt-6">
        <img
          src="/eu-poo-footer.png"
          alt="Plán obnovy a NextGenerationEU"
          className="w-full max-w-xl mx-auto"
        />
      </footer>
    </main>
  );
}
