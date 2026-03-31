import styled from "styled-components";

export const ItemList = styled.li`
  list-style: none;

  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-xs);

  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);

  background: var(--color-surface);

  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    background: #f4f2fa;
  }
`;
