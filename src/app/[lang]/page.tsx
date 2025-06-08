import React from 'react';

interface HomePageProps {
  params: Promise<{ lang: string }>; // 🎯 Promise requis
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            O&apos;Secours ({lang})
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        {/* Contenu d'accueil */}
      </main>
    </div>
  );
}
