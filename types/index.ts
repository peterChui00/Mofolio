import { Icons } from '@/components/Icon';

export type NavItem = {
  title: string;
  href: string;
  label?: string;
  icon?: keyof typeof Icons;
};

export type TransactionType = 'BUY' | 'SELL';

export type Transaction = {
  timestamp: string;
  type: TransactionType;
  symbol: string;
  quantity: number;
  price: number;
  fee: number;
};
