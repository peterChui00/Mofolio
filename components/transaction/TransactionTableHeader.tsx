'use client';

import { useTransactionStore } from '@/components/providers/TransactionStoreProvider';
import { Button } from '@/components/ui/Button';
import AddTransactionDialog from './AddTransactionDialog';
import { useDialog } from '@/hooks/useDialog';

export default function TransactionTableHeader() {
  const { applyTemplateData } = useTransactionStore((state) => state);
  const { isOpen, toggleDialog } = useDialog();

  return (
    <div className="flex flex-row gap-2">
      <Button
        variant="default"
        size="sm"
        className="hidden h-8 lg:flex"
        onClick={toggleDialog}
      >
        Add transaction
      </Button>
      <Button
        variant="default"
        size="sm"
        className="hidden h-8 lg:flex"
        onClick={applyTemplateData}
      >
        Apply template data
      </Button>

      <AddTransactionDialog isOpen={isOpen} onClose={toggleDialog} />
    </div>
  );
}
