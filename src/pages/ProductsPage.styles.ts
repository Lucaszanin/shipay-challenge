import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  background: var(--color-background);

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 4rem;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 28rem;

  background: var(--color-surface);
  border: 0.0625rem solid var(--color-border);
  border-radius: var(--radius-md);

  padding: var(--spacing-lg);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--color-primary);

  text-align: center;

  margin-bottom: var(--spacing-lg);
`;