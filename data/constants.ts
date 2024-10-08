import { NavItem, Transaction } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Summary',
    href: '/summary',
    icon: 'summary',
  },
  {
    title: 'Transaction',
    href: '/transaction',
    icon: 'transaction',
  },
];

export const templateData: Transaction[] = [
  {
    timestamp: '2024-09-01T09:30:00Z',
    type: 'BUY',
    symbol: 'AAPL',
    quantity: 10,
    price: 175.5,
    fee: 4.99,
  },
  {
    timestamp: '2024-09-02T10:15:00Z',
    type: 'BUY',
    symbol: 'GOOGL',
    quantity: 5,
    price: 142.75,
    fee: 3.5,
  },
  {
    timestamp: '2024-09-03T11:00:00Z',
    type: 'BUY',
    symbol: 'MSFT',
    quantity: 15,
    price: 330.25,
    fee: 6.75,
  },
  {
    timestamp: '2024-09-04T13:45:00Z',
    type: 'BUY',
    symbol: 'AMZN',
    quantity: 8,
    price: 138.6,
    fee: 4.25,
  },
  {
    timestamp: '2024-09-05T14:30:00Z',
    type: 'BUY',
    symbol: 'TSLA',
    quantity: 12,
    price: 250.3,
    fee: 5.5,
  },
  {
    timestamp: '2024-09-06T15:15:00Z',
    type: 'SELL',
    symbol: 'AAPL',
    quantity: 5,
    price: 178.2,
    fee: 3.25,
  },
  {
    timestamp: '2024-09-07T09:45:00Z',
    type: 'BUY',
    symbol: 'NVDA',
    quantity: 7,
    price: 455.8,
    fee: 4.75,
  },
  {
    timestamp: '2024-09-08T10:30:00Z',
    type: 'SELL',
    symbol: 'GOOGL',
    quantity: 3,
    price: 145.5,
    fee: 2.75,
  },
  {
    timestamp: '2024-09-09T11:15:00Z',
    type: 'BUY',
    symbol: 'META',
    quantity: 20,
    price: 310.75,
    fee: 7.5,
  },
  {
    timestamp: '2024-09-10T13:00:00Z',
    type: 'SELL',
    symbol: 'MSFT',
    quantity: 8,
    price: 335.6,
    fee: 4.5,
  },
  {
    timestamp: '2024-09-11T14:45:00Z',
    type: 'BUY',
    symbol: 'AAPL',
    quantity: 15,
    price: 180.25,
    fee: 6.25,
  },
  {
    timestamp: '2024-09-12T15:30:00Z',
    type: 'SELL',
    symbol: 'AMZN',
    quantity: 4,
    price: 141.2,
    fee: 3.0,
  },
  {
    timestamp: '2024-09-13T09:15:00Z',
    type: 'BUY',
    symbol: 'GOOGL',
    quantity: 10,
    price: 148.3,
    fee: 5.25,
  },
  {
    timestamp: '2024-09-14T10:00:00Z',
    type: 'SELL',
    symbol: 'TSLA',
    quantity: 6,
    price: 255.4,
    fee: 3.75,
  },
  {
    timestamp: '2024-09-15T11:45:00Z',
    type: 'BUY',
    symbol: 'NVDA',
    quantity: 5,
    price: 460.9,
    fee: 3.5,
  },
  {
    timestamp: '2024-09-16T13:30:00Z',
    type: 'SELL',
    symbol: 'META',
    quantity: 12,
    price: 315.8,
    fee: 5.75,
  },
  {
    timestamp: '2024-09-17T14:15:00Z',
    type: 'BUY',
    symbol: 'MSFT',
    quantity: 9,
    price: 340.15,
    fee: 4.75,
  },
  {
    timestamp: '2024-09-18T15:00:00Z',
    type: 'SELL',
    symbol: 'AAPL',
    quantity: 8,
    price: 182.7,
    fee: 4.25,
  },
  {
    timestamp: '2024-09-19T09:30:00Z',
    type: 'BUY',
    symbol: 'AMZN',
    quantity: 6,
    price: 143.8,
    fee: 3.75,
  },
  {
    timestamp: '2024-09-20T10:15:00Z',
    type: 'SELL',
    symbol: 'NVDA',
    quantity: 3,
    price: 465.5,
    fee: 2.5,
  },
];
