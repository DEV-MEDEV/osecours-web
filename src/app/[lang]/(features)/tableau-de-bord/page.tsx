import { DashboardView } from '@/views/dashboard/dashboardView';
import dashboardData from '@/data/dashboard.json';

interface DashboardPageProps {
  params: Promise<{ lang: string }>; // 🎯 Promise requis pour Next.js 15
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  // Attendre les params (asynchrone en Next.js 15)
  const { lang } = await params;

  return <DashboardView data={dashboardData} lang={lang} />;
}

export const metadata = {
  title: "Dashboard - O'Secours",
  description: "Tableau de bord de la plateforme O'Secours",
};
