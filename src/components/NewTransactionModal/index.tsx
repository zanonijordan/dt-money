import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  TransactionType,
  Overlay,
  TransactionTypeButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export type NewTransactionModalProps = {
  title?: string
}

export const NewTransactionModal = ({ title }: NewTransactionModalProps) => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />
          <button type="submit">Register</button>

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} /> Entrary
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Out
            </TransactionTypeButton>
          </TransactionType>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
