import { HeaderContainer, HeaderContent, NewTransactionButton} from './styles';
import logoImg from './../../assets/logo.svg'

export type HeaderProps = {
    title?: string;
};

export const Header = ({ title }: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt='' />
                <NewTransactionButton>New transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
};
