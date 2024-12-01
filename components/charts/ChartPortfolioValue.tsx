import { usePortfolioCost } from '@/hooks/usePortfolioCost';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/Card';

export default function ChartPortfolioValue() {
  const { totalPortfolioCost } = usePortfolioCost();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Cost</CardTitle>
        <CardDescription>
          <span className="text-lg font-bold leading-none sm:text-3xl">
            ${totalPortfolioCost}
          </span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
