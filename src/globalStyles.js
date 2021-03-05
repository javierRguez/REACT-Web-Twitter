import { createGlobalStyle, withTheme } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *:not(i){
    font-family: 'Roboto' !important;
  }

  html, body{
    -webkit-font-smoothing: antialiased;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #e5e5e5;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
`

export default withTheme(GlobalStyles)
