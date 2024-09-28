'use client';

import { Transaction } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { TableColumnHeader } from '../TableColumnHeader';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'timestamp',
    header: ({ column }) => <TableColumnHeader column={column} title="Date" />,
    cell: ({ getValue }) => {
      return new Date(getValue<string>()).toUTCString();
    },
    sortingFn: 'datetime',
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <TableColumnHeader column={column} title="Type" />,
  },
  {
    accessorKey: 'symbol',
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Symbol" />
    ),
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => <TableColumnHeader column={column} title="QTY" />,
  },
  {
    accessorKey: 'price',
    header: ({ column }) => <TableColumnHeader column={column} title="Price" />,
    cell: ({ getValue }) => {
      const formated = currencyFormatter.format(getValue<number>());
      return formated;
    },
  },
  {
    accessorKey: 'fee',
    header: ({ column }) => <TableColumnHeader column={column} title="Fee" />,
    cell: ({ getValue }) => {
      const formated = currencyFormatter.format(getValue<number>());
      return formated;
    },
  },
];
