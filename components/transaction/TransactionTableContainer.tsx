'use client';

import { useTransactionStore } from '../providers/TransactionStoreProvider';
import { columns } from '../tables/transaction/Columns';
import TransactionTable from '../tables/transaction/TransactionTable';
import TransactionTableHeader from './TransactionTableHeader';

export default function TransactionTableContainer() {
  const { transactions } = useTransactionStore((state) => state);
  return (
    <>
      <TransactionTableHeader />
      <TransactionTable columns={columns} data={transactions} />
    </>
  );
}
