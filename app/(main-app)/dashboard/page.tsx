import ChartPortfolioValue from '@/components/charts/ChartPortfolioValue';
import ChartPositionSize from '@/components/charts/ChartPositionSize';

export const metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <ChartPortfolioValue />
        </div>
        <div className="col-span-12 md:col-span-3">
          <ChartPositionSize />
        </div>
      </div>
    </div>
  );
}
