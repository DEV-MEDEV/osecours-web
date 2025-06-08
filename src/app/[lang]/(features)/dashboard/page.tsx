import { DashboardView } from '@/views/dashboard/dashboardView';
import dashboardData from '@/data/dashboard.json';

interface DashboardPageProps {
  params: { lang: string };
}

export default function DashboardPage({ params }: DashboardPageProps) {
  // Ici vous pouvez :
  // - Gérer les données (fetch, API calls)
  // - Gérer les paramètres de langue
  // - Gérer l'état global si besoin
  // - Gérer l'authentification

  return <DashboardView data={dashboardData} lang={params.lang} />;
}

// Métadonnées spécifiques à cette page
export const metadata = {
  title: "Dashboard - O'Secours",
  description: "Tableau de bord de la plateforme O'Secours",
};
