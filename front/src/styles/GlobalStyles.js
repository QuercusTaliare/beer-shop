import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --primary: #B54440;
    --secondary: #FEDCC3;
    --highlight: #FDAE72;
    --white: #F5F5F5;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    background: var(--white);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', serif;
    margin: 0;
    font-weight: 400;
  }

  h1,
  h2 {
    font-size: 5rem;
    padding: 2rem 0;
  }

  a {
    color: black;
  }

  .center {
    text-align: center;
  }

  .button {
    background: var(--highlight);
    border: none;
    padding: 1.2rem;
    border-radius: 4px;
    &:hover,
    &:active {
      color: var(--white);
      cursor: pointer;
    }
  }

`;

export default GlobalStyles;