import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'
import { TransactionContext } from '../../contexts/TransactionsContext'

export type TransactionsProps = {
  title?: string
}

export const Transactions = ({ title }: TransactionsProps) => {
  const { transactions } = useContext(TransactionContext)
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
