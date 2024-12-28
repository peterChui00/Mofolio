'use client';

import { Transaction, TransactionType } from '@/types';
import { useTransactionStore } from '../providers/TransactionStoreProvider';
import { Button } from '../ui/Button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { useEffect, useState } from 'react';
import { DatePicker } from '../ui/DatePicker';

type FormState = {
  date: Date | undefined;
  symbol: string;
  type: TransactionType;
  price: number;
  quantity: number;
  fee: number;
};

const defaultFormState: FormState = {
  date: undefined,
  symbol: '',
  type: 'BUY',
  price: 0,
  quantity: 0,
  fee: 0,
};

export default function AddTransactionDialog({
  isOpen,
  onClose = () => {},
}: {
  isOpen: boolean;
  onClose?: () => void;
}) {
  const [formState, setFormState] = useState<FormState>(defaultFormState);
  const { addTransaction } = useTransactionStore((state) => state);

  useEffect(() => {
    setFormState(defaultFormState);
  }, [isOpen]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleFormDateChange = (date: Date | undefined) => {
    setFormState({ ...formState, date });
  };

  const handleAddTransaction = () => {
    const { date, type, symbol, quantity, price, fee } = formState;
    const newTransaction: Transaction = {
      timestamp: date?.toISOString() || new Date().toISOString(),
      type,
      symbol,
      quantity,
      price,
      fee,
    };
    addTransaction(newTransaction);
    onClose();
  };

  return (
    <Dialog modal open={isOpen} defaultOpen={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add transaction</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex flex-row items-center gap-2">
            <Label htmlFor="date">Date</Label>
            <DatePicker
              id="date"
              value={formState.date}
              onChange={handleFormDateChange}
            />
          </div>
          <div className="col-span-6">
            <Label htmlFor="symbol">Symbol</Label>
            <Input
              id="symbol"
              value={formState.symbol}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-span-6">
            <Label htmlFor="symbol">Type</Label>
            <Input
              id="type"
              value={formState.type}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-span-4">
            <Label htmlFor="symbol">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={formState.quantity}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-span-4">
            <Label htmlFor="symbol">Price</Label>
            <Input
              id="price"
              type="number"
              value={formState.price}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-span-4">
            <Label htmlFor="symbol">Fee</Label>
            <Input
              id="fee"
              type="number"
              value={formState.fee}
              onChange={handleFormChange}
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleAddTransaction}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
