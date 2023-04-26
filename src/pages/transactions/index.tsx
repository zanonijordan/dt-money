import { Header } from '../../components/Header';
import * as Styled from './styles';

export type TransactionsProps = {
    title?: string;
};

export const Transactions = ({ title }: TransactionsProps) => {
    return (
        <Styled.Wrapper>
           <Header />
        </Styled.Wrapper>
    );
}