import styled from "styled-components"

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  gap: var(--spacing-xs);

  padding: 0;
  margin: 0;

  width: 100%;
`

export const EmptyMessage = styled.p`
  text-align: center;
  color: #6b6b6b;

  font-size: 0.875rem;

  padding: var(--spacing-md);
  margin-top: var(--spacing-md);

  border-radius: var(--radius-md);

  background: #f5f5f7;
  border: 1px dashed var(--color-border);
`