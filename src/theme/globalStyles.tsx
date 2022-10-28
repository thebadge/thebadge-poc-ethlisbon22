import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  html {
  }

  body {
  }

  code {
    font-family: ${({ theme }) => theme.fontFamily};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  hr {
    display: block;
    height: auto;
    margin: 30px 0;
    width: 100%;
  }

  a {
    color: ${({ theme: { colors } }) => colors.textColor};
  }

`
