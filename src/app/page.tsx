export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <img src="/apetbio-logo.png" alt="ApetBio logo" className="h-16" />
      </header>

      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Projekt ApetBio</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl">
          Cieľom projektu ApetBio je vývoj a overenie technológie spracovania lariev múch na proteínové hydrolyzáty ako prírodné biostimulanty a analýza ich biologických účinkov.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Základné informácie:</h2>
          <ul className="list-disc list-inside text-gray-800">
            <li><strong>Kód projektu:</strong> 09I04-03-V2-00025</li>
            <li><strong>Kód výzvy:</strong> 09I04-03-V2</li>
            <li><strong>Prijímateľ:</strong> Technická univerzita v Košiciach</li>
            <li><strong>Partner:</strong> MEPS s.r.o.</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a href="/outputs" className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">Výstupy</a>
          <a href="/news" className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">Novinky</a>
          <a href="/about" className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">O projekte</a>
        </div>
      </section>

      <footer className="mt-16 border-t pt-6">
        <img src="/eu-poo-footer.png" alt="Plán obnovy a NextGenerationEU" className="w-full max-w-xl mx-auto" />
      </footer>
    </main>
  );
}
