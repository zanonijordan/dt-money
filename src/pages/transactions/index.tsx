import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export type TransactionsProps = {
  title?: string
}

export const Transactions = ({ title }: TransactionsProps) => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">website development</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Sale</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              </td>
              <td>Food</td>
              <td>10/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Apartment rent</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 1.200,00</PriceHighLight>
              </td>
              <td>House</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
