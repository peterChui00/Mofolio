import { TransactionStoreProvider } from '@/components/providers/TransactionStoreProvider';
import TransactionTableContainer from '@/components/transaction/TransactionTableContainer';
import { templateData } from '@/data/constants';
import { Transaction } from '@/types';

export async function getTableData(): Promise<Transaction[]> {
  return templateData;
}

export const metadata = {
  title: 'Transaction',
};

export default async function TransactionPage() {
  return (
    <TransactionStoreProvider>
      <div className="container mx-auto flex flex-col gap-4">
        <TransactionTableContainer />
      </div>
    </TransactionStoreProvider>
  );
}
