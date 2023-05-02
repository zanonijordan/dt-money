import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export type SearchFormProps = {
  title?: string
}

export const SearchForm = ({ title }: SearchFormProps) => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search a transaction" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}
