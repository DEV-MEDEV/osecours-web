import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { DataTable } from '@/components/data-table';
import { SectionCards } from '@/components/section-cards';
interface DashboardViewProps {
  data: Record<string, unknown>[]; // Using Record<string, unknown> instead of any
  lang: string;
}

export function DashboardView({ data }: DashboardViewProps) {
  // Removed unused lang parameter
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable
        data={
          data as {
            header: string;
            id: number;
            type: string;
            status: string;
            target: string;
            limit: string;
            reviewer: string;
          }[]
        }
      />
    </div>
  );
}
