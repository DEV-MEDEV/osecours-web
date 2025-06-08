import { notFound } from 'next/navigation';

const locales = ['fr', 'en', 'es'] as const;
type Locale = (typeof locales)[number];

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // 🎯 Promise requis
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  // Attendre les params
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
