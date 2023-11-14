import { ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
interface CreateTransactionsInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionsInput) => Promise<void>
}
interface TransactionProviderTypes {
  children: ReactNode
}
export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderTypes) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }
  async function createTransaction(data: CreateTransactionsInput) {
    const { description, category, price, type } = data
    const response = await api.post('transactions', {
      // ...data
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
