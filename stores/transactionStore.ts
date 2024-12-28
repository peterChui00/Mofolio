import { templateData } from '@/data/constants';
import { Transaction } from '@/types';
import { createStore } from 'zustand';

export type TransactionState = {
  transactions: Transaction[];
};

export type TransactionStoreActions = {
  addTransaction: (_transaction: Transaction) => void;
  applyTemplateData: () => void;
};

export type TransactionStore = TransactionState & TransactionStoreActions;

export const defaultState: TransactionState = {
  transactions: [],
};

export const createTransactionStore = (
  initState: TransactionState = defaultState
) => {
  return createStore<TransactionStore>()((set, get) => ({
    ...initState,
    addTransaction: (transaction) =>
      set(() => ({ transactions: [...get().transactions, transaction] })),
    applyTemplateData: () => set(() => ({ transactions: templateData })),
  }));
};
