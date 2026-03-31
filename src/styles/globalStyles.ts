import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {

    /* Colors */
    --color-primary: #3C147C;
    --color-primary-hover: #7254A1;
    --color-secondary: #FBCC05;

    --color-background: #F7F7FA;
    --color-surface: #FFFFFF;

    --color-text: #1F1F1F;
    --color-border: #E5E5E5;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;

    /* Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: var(--color-background);
    color: var(--color-text);
  }

`;
