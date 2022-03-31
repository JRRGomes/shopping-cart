import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${({ theme }) => theme.fonts};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
}
`
export default GlobalStyle
