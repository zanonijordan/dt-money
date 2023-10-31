import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
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
        q: query,
      },
    })
    setTransactions(response.data)
  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
