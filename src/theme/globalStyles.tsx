import { createGlobalStyle } from 'styled-components'

import { onBoardCSS } from '@/src/theme/onBoard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  html {
    font-size: 10px;
    scroll-behavior: smooth;
    width: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme: { body } }) => body.backgroundColor};
    background-image: ${({ theme: { body } }) => body.backgroundImage};
    background-size: cover;
    color: ${({ theme: { colors } }) => colors.textColor};
    font-family: ${({ theme }) => theme.typography.body1.defaultSize};
    font-size: ${({ theme }) => theme.typography.fontFamily};
    min-height: 100vh;
    outline-color: ${({ theme: { colors } }) => colors.secondary};
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

  ${onBoardCSS}
`
