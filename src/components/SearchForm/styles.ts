import styled, { css } from 'styled-components'

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background: ${theme['gray-900']};
      color: ${theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${theme['gray-500']};
      }
    }
    button {
      display: flex;
      align-items: center;
      gap: 0.75;

      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${theme['green-300']};
      color: ${theme['gray-300']};
      font-weight: bold;
      border-radius: 6px;

      &:hover {
        background: ${theme['green-500']};
        border: ${theme['green-300']};
        color: ${theme.white};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
    }
  `}
`
