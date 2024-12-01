'use client';

import { Pie, PieChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/Chart';
import { generateRandomColors } from '@/lib/utils';
import { usePortfolioCost } from '@/hooks/usePortfolioCost';

export default function ChartPositionSize() {
  const { holdings } = usePortfolioCost();
  const colors = generateRandomColors(holdings.length);
  const chartData = holdings.map(({ symbol, totalCost }, index) => ({
    symbol,
    value: totalCost,
    fill: colors[index],
  }));
  const chartConfig = holdings.reduce((acc, holding) => {
    return {
      ...acc,
      [holding.symbol]: {
        label: holding.symbol,
      },
    };
  }, {} as ChartConfig);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Position Size</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={chartConfig}
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="value" nameKey="symbol" stroke="0" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
