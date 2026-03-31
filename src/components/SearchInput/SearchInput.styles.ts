import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-md);

  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  &:focus {
    outline: none;
    border-color: var(--color-secondary);
  }
`;
