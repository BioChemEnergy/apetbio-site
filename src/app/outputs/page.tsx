'use client';

import { useState } from 'react';

type Output = {
  title: string;
  description: string;
  fileUrl: string;
};

const outputs: Output[] = [
  {
    title: 'D1_1 Projektová príručka',
    description:
      'Tento dokument slúži ako interná metodická príručka projektu APETBIO. Obsahuje organizačné a administratívne pravidlá pre partnerov projektu, vrátane postupu pri evidencii výstupov, komunikácie a plnení úloh.',
    fileUrl: '/outputs/D1_1_projektova_prirucka.pdf',
  },
];

  {
    title: 'D1_2 Príručka pre spracovanie dát',
    description:
      'Tento dokument definuje metodiku a princípy pre správne zhromažďovanie, ukladanie a zdieľanie dát v rámci projektu APETBIO. Slúži ako praktická príručka pre výskumníkov a partnerov zapojených do spracovania výskumných výstupov.',
    fileUrl: '/outputs/D1_2_prirucka_pre_spracovanie_dat.pdf',
  },



export default function OutputsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <img src="/apetbio-logo.png" alt="Logo ApetBio" className="h-20 mb-6" />
        <h1 className="text-4xl font-bold mb-8">Výstupy projektu</h1>
      </header>

      <section className="space-y-4">
        {outputs.map((output, index) => (
          <div key={index} className="border border-gray-300 rounded-xl p-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="text-left w-full font-semibold text-xl text-green-700 hover:underline"
            >
              {output.title}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-700">
                <p className="mb-2">{output.description}</p>
                <a
                  href={output.fileUrl}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Otvoriť PDF
                </a>
              </div>
            )}
          </div>
        ))}
      </section>

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
