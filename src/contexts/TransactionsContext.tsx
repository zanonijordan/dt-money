import { ReactNode, createContext, useEffect, useState } from 'react'

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
}
interface TransactionProviderTypes {
  children: ReactNode
}
export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderTypes) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    async function loadTransaction() {
      const response = await fetch('http://localhost:3000/transactions')
      const data = await response.json()
      setTransactions(data)
    }
    loadTransaction()
  }, [])
  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
