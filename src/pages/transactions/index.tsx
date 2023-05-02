import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export type TransactionsProps = {
  title?: string
}
interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
export const Transactions = ({ title }: TransactionsProps) => {
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
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      R$ {transaction.price.toString()}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
