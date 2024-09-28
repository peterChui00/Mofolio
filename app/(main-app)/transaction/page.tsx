import { columns } from '@/components/tables/transaction/Columns';
import TransactionTable from '@/components/tables/transaction/TransactionTable';
import { templateData } from '@/data/constants';
import { Transaction } from '@/types';

export async function getTableData(): Promise<Transaction[]> {
  return templateData;
}

export const metadata = {
  title: 'Transaction',
};

export default async function TransactionPage() {
  const data = await getTableData();

  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Transaction
      </h2>
      <div className="container mx-auto py-4">
        <TransactionTable columns={columns} data={data} />
      </div>
    </div>
  );
}
