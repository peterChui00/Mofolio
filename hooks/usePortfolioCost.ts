import { templateData } from '@/data/constants';
import { useMemo } from 'react';

export const usePortfolioCost = () => {
  return useMemo(() => {
    const holdingsMap = new Map<
      string,
      { quantity: number; totalCost: number }
    >();

    templateData.forEach((transaction) => {
      const { symbol, type, quantity, price, fee } = transaction;
      const transactionCost = price * quantity + fee;

      if (!holdingsMap.has(symbol)) {
        holdingsMap.set(symbol, { quantity: 0, totalCost: 0 });
      }

      const holding = holdingsMap.get(symbol)!;

      if (type === 'BUY') {
        holding.quantity += quantity;
        holding.totalCost += transactionCost;
      }

      if (type === 'SELL') {
        const costPerShare = holding.totalCost / holding.quantity;
        holding.totalCost -= costPerShare * quantity;
        holding.quantity -= quantity;
      }

      // Remove holding if quantity becomes 0
      if (holding.quantity === 0) {
        holdingsMap.delete(symbol);
      }
    });

    // Calculate total portfolio cost
    const totalPortfolioCost = Array.from(holdingsMap.values()).reduce(
      (sum, holding) => sum + holding.totalCost,
      0
    );

    // Create holdings array with percentages
    const holdings = Array.from(holdingsMap.entries()).map(
      ([symbol, holding]) => ({
        symbol,
        quantity: holding.quantity,
        totalCost: Number(holding.totalCost.toFixed(2)),
        percentageOfPortfolio: Number(
          ((holding.totalCost / totalPortfolioCost) * 100).toFixed(2)
        ),
      })
    );

    return {
      totalPortfolioCost: Number(totalPortfolioCost.toFixed(2)),
      holdings: holdings.sort((a, b) => b.totalCost - a.totalCost),
    };
  }, []);
};
